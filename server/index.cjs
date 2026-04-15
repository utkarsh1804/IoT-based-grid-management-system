const express = require('express');
const cors = require('cors');
const { ethers } = require('ethers');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Blockchain Configuration
const provider = new ethers.JsonRpcProvider(process.env.RPC_URL || "http://127.0.0.1:8545");
const CONTRACT_ABI = [
    "function logData(string _deviceId, bytes32 _dataHash)",
    "function registerDevice(string _deviceId, string _deviceType)",
    "function devices(string) view returns (string deviceId, string deviceType, bool registered, uint256 createdAt)"
];

// Initial seed data for battery management system
let logsArr = [
    {
        _id: "seed1",
        deviceId: "BATTERY-001",
        data: {
            voltage: 12.8,
            current: 15.2,
            temperature: 28.5,
            soc: 85,
            status: "Charging",
            powerPlantVoltage: 11.9,
            weatherImpact: "Moderate"
        },
        hash: "0xa1b2c3d4e5f678901234567890abcdef1234567890abcdef1234567890abcdef",
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        onChainTx: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        prediction: {
            recommendedAction: "Continue Charging",
            confidence: 92,
            nextHourSOC: 88
        }
    },
    {
        _id: "seed2",
        deviceId: "BATTERY-002",
        data: {
            voltage: 12.6,
            current: 12.8,
            temperature: 26.2,
            soc: 72,
            status: "Discharging",
            powerPlantVoltage: 12.1,
            weatherImpact: "Low"
        },
        hash: "0xb2c3d4e5f678901234567890abcdef1234567890abcdef1234567890abcdef12",
        timestamp: new Date(Date.now() - 2700000).toISOString(),
        onChainTx: "0x8f3d4e5f678901234567890abcdef1234567890abcdef1234567890abcdef123",
        prediction: {
            recommendedAction: "Hold Discharge",
            confidence: 87,
            nextHourSOC: 68
        }
    },
    {
        _id: "seed3",
        deviceId: "BATTERY-003",
        data: {
            voltage: 13.1,
            current: 18.5,
            temperature: 31.8,
            soc: 94,
            status: "Charging",
            powerPlantVoltage: 11.7,
            weatherImpact: "High"
        },
        hash: "0xc3d4e5f678901234567890abcdef1234567890abcdef1234567890abcdef1234",
        timestamp: new Date(Date.now() - 1800000).toISOString(),
        onChainTx: "0x9e4f5g6h78901234567890abcdef1234567890abcdef1234567890abcdef12345",
        prediction: {
            recommendedAction: "Reduce Charge Rate",
            confidence: 95,
            nextHourSOC: 97
        }
    },
    {
        _id: "seed4",
        deviceId: "BATTERY-004",
        data: {
            voltage: 12.9,
            current: 8.3,
            temperature: 24.1,
            soc: 45,
            status: "Idle",
            powerPlantVoltage: 12.3,
            weatherImpact: "None"
        },
        hash: "0xd4e5f678901234567890abcdef1234567890abcdef1234567890abcdef123456",
        timestamp: new Date(Date.now() - 900000).toISOString(),
        onChainTx: "0xaf5g6h7i8901234567890abcdef1234567890abcdef1234567890abcdef1234567",
        prediction: {
            recommendedAction: "Start Charging",
            confidence: 89,
            nextHourSOC: 52
        }
    },
    {
        _id: "seed5",
        deviceId: "BATTERY-005",
        data: {
            voltage: 12.4,
            current: 22.1,
            temperature: 33.2,
            soc: 78,
            status: "Charging",
            powerPlantVoltage: 11.5,
            weatherImpact: "High"
        },
        hash: "0xe5f678901234567890abcdef1234567890abcdef1234567890abcdef12345678",
        timestamp: new Date(Date.now() - 300000).toISOString(),
        onChainTx: "0xbf6h7i8j901234567890abcdef1234567890abcdef1234567890abcdef123456789",
        prediction: {
            recommendedAction: "Monitor Temperature",
            confidence: 91,
            nextHourSOC: 82
        }
    },
    {
        _id: "seed6",
        deviceId: "POWER-PLANT-001",
        data: {
            voltage: 11.8,
            current: 1250.5,
            temperature: 42.3,
            status: "Active",
            gridStability: "Stable",
            powerOutput: 1850.2
        },
        hash: "0xf678901234567890abcdef1234567890abcdef1234567890abcdef1234567890",
        timestamp: new Date(Date.now() - 120000).toISOString(),
        onChainTx: "0xcf7i8j9k01234567890abcdef1234567890abcdef1234567890abcdef1234567890",
        prediction: {
            recommendedAction: "Maintain Output",
            confidence: 96,
            nextHourSOC: null
        }
    },
    {
        _id: "seed7",
        deviceId: "BATTERY-001",
        data: {
            voltage: 13.0,
            current: 16.8,
            temperature: 29.7,
            soc: 91,
            status: "Charging",
            powerPlantVoltage: 12.0,
            weatherImpact: "Moderate"
        },
        hash: "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1",
        timestamp: new Date(Date.now() - 60000).toISOString(),
        onChainTx: "0xdf8j9k0l1234567890abcdef1234567890abcdef1234567890abcdef12345678901",
        prediction: {
            recommendedAction: "Optimal Charging",
            confidence: 94,
            nextHourSOC: 95
        }
    }
];

let devicesArr = [
    { deviceId: "BATTERY-001", deviceType: "Smart Battery Unit" },
    { deviceId: "POWER-PLANT-001", deviceType: "Voltage Monitor" }
];

let batteryStatus = {
    "BATTERY-001": {
        soc: 85,
        voltage: 12.8,
        current: 15.2,
        temperature: 28.5,
        status: "Charging",
        lastUpdate: new Date().toISOString(),
        chargingSchedule: {
            optimalStart: "02:00",
            optimalEnd: "06:00",
            currentPhase: "Bulk"
        }
    },
    "BATTERY-002": {
        soc: 72,
        voltage: 12.6,
        current: 12.8,
        temperature: 26.2,
        status: "Discharging",
        lastUpdate: new Date().toISOString(),
        chargingSchedule: {
            optimalStart: "14:00",
            optimalEnd: "18:00",
            currentPhase: "Float"
        }
    },
    "BATTERY-003": {
        soc: 94,
        voltage: 13.1,
        current: 18.5,
        temperature: 31.8,
        status: "Charging",
        lastUpdate: new Date().toISOString(),
        chargingSchedule: {
            optimalStart: "22:00",
            optimalEnd: "02:00",
            currentPhase: "Absorption"
        }
    },
    "BATTERY-004": {
        soc: 45,
        voltage: 12.9,
        current: 8.3,
        temperature: 24.1,
        status: "Idle",
        lastUpdate: new Date().toISOString(),
        chargingSchedule: {
            optimalStart: "06:00",
            optimalEnd: "10:00",
            currentPhase: "Rest"
        }
    },
    "BATTERY-005": {
        soc: 67,
        voltage: 12.7,
        current: 0,
        temperature: 25.8,
        status: "Idle",
        lastUpdate: new Date().toISOString(),
        chargingSchedule: {
            optimalStart: "10:00",
            optimalEnd: "14:00",
            currentPhase: "Rest"
        }
    }
};

app.get('/api', (req, res) => {
    res.json({
        status: "Online",
        message: "Smart Battery Management System API is fully operational.",
        endpoints: ["/api/stats", "/api/logs", "/api/log (POST)", "/api/power-plant", "/api/battery/:id", "/api/battery/:id/control", "/api/predictions"]
    });
});

app.get('/api/power-plant', async (req, res) => {
    try {
        // Simulate power plant voltage data with fluctuations
        const baseVoltage = 12.0;
        const fluctuation = (Math.random() - 0.5) * 2; // ±1V fluctuation
        const currentVoltage = baseVoltage + fluctuation;

        // Get weather data to adjust voltage prediction
        let weatherAdjustment = 0;
        try {
            const location = process.env.LOCATION || 'Delhi,IN';
            const coords = getCoordinates(location);
            const weatherResponse = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true&hourly=temperature_2m&timezone=auto&forecast_days=1`);

            if (weatherResponse.data && weatherResponse.data.current_weather) {
                const weather = weatherResponse.data.current_weather;
                if (getWeatherDescription(weather.weathercode).toLowerCase().includes('storm') ||
                    getWeatherDescription(weather.weathercode).toLowerCase().includes('rain')) {
                    weatherAdjustment = -0.5; // Voltage drops during storms/rain
                } else if (getWeatherDescription(weather.weathercode).toLowerCase().includes('sunny') ||
                          getWeatherDescription(weather.weathercode).toLowerCase().includes('clear')) {
                    weatherAdjustment = 0.3; // Higher voltage in sunny conditions
                }
            }
        } catch (weatherError) {
            console.warn('Weather data unavailable for power plant calculations');
        }

        const powerPlantData = {
            plantId: "POWER-PLANT-001",
            location: process.env.LOCATION || "Delhi, IN",
            currentVoltage: currentVoltage + weatherAdjustment,
            frequency: 50 + (Math.random() - 0.5) * 0.5, // 50Hz ±0.25Hz
            powerOutput: 1500 + Math.random() * 500, // 1500-2000 MW
            gridStability: currentVoltage > 11.5 && currentVoltage < 12.5 ? "Stable" : "Unstable",
            lastUpdate: new Date().toISOString(),
            weatherImpact: weatherAdjustment !== 0 ? "Active" : "None"
        };

        res.json(powerPlantData);
    } catch (e) {
        console.error('Power plant API error:', e.message);
        res.status(500).json({ error: 'Power plant data error', details: e.message });
    }
});

app.get('/api/battery/:id', async (req, res) => {
    try {
        const batteryId = req.params.id;
        const battery = batteryStatus[batteryId];

        if (!battery) {
            return res.status(404).json({ error: 'Battery not found' });
        }

        // Fetch current weather for efficiency calculations
        let weatherData = null;
        try {
            const weatherResponse = await axios.get(`http://127.0.0.1:5000/api/weather`);
            weatherData = weatherResponse.data;
        } catch (weatherError) {
            console.warn('Weather data unavailable for battery calculations');
        }

        res.json({
            ...battery,
            health: calculateBatteryHealth(battery),
            efficiency: calculateChargingEfficiency(battery, weatherData)
        });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.post('/api/battery/:id/control', (req, res) => {
    try {
        const batteryId = req.params.id;
        const { action, targetSOC } = req.body;

        if (!batteryStatus[batteryId]) {
            return res.status(404).json({ error: 'Battery not found' });
        }

        let response = { success: true, action: action, batteryId: batteryId };

        switch (action) {
            case 'start_charging':
                batteryStatus[batteryId].status = 'Charging';
                batteryStatus[batteryId].current = 15.0;
                response.message = 'Charging started successfully';
                break;
            case 'stop_charging':
                batteryStatus[batteryId].status = 'Idle';
                batteryStatus[batteryId].current = 0;
                response.message = 'Charging stopped successfully';
                break;
            case 'maintenance_mode':
                batteryStatus[batteryId].status = 'Maintenance';
                batteryStatus[batteryId].current = 0;
                response.message = 'Maintenance mode activated';
                break;
            case 'emergency_shutdown':
                batteryStatus[batteryId].status = 'Emergency';
                batteryStatus[batteryId].current = 0;
                response.message = 'Emergency shutdown initiated';
                break;
            case 'set_target_soc':
                if (targetSOC >= 0 && targetSOC <= 100) {
                    batteryStatus[batteryId].targetSOC = targetSOC;
                    response.message = `Target SOC set to ${targetSOC}%`;
                } else {
                    response = { success: false, error: 'Invalid target SOC (0-100)' };
                }
                break;
            default:
                response = { success: false, error: 'Invalid action' };
        }

        batteryStatus[batteryId].lastUpdate = new Date().toISOString();
        res.json(response);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.get('/api/predictions', async (req, res) => {
    try {
        // Dummy LSTM prediction system
        const weather = await axios.get('http://127.0.0.1:5000/api/weather').catch(() => null);
        const powerPlant = await axios.get('http://127.0.0.1:5000/api/power-plant').catch(() => null);

        const predictions = generateLSTMPredictions(weather?.data, powerPlant?.data);

        res.json({
            model: "LSTM Battery Management v2.1",
            lastTrained: "2026-04-10T08:00:00Z",
            accuracy: 94.7,
            predictions: predictions,
            timestamp: new Date().toISOString()
        });
    } catch (e) {
        res.status(500).json({ error: 'Prediction API error', details: e.message });
    }
});

app.get('/api/stats', (req, res) => {
    try {
        const batteryStats = Object.values(batteryStatus).reduce((acc, battery) => {
            acc.totalBatteries++;
            acc.averageSOC += battery.soc;
            if (battery.status === 'Charging') acc.chargingBatteries++;
            if (battery.soc < 20) acc.lowBatteries++;
            if (battery.soc > 90) acc.fullBatteries++;
            return acc;
        }, {
            totalBatteries: 0,
            averageSOC: 0,
            chargingBatteries: 0,
            lowBatteries: 0,
            fullBatteries: 0
        });

        if (batteryStats.totalBatteries > 0) {
            batteryStats.averageSOC = Math.round(batteryStats.averageSOC / batteryStats.totalBatteries);
        }

        res.json({
            deviceCount: devicesArr.length,
            logCount: logsArr.length,
            batteryStats: batteryStats,
            systemHealth: batteryStats.lowBatteries === 0 ? 'Good' : 'Warning'
        });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.get('/api/logs', (req, res) => {
    try {
        res.json(logsArr);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.get('/api/weather', async (req, res) => {
    try {
        const location = req.query.location || process.env.LOCATION || 'Delhi,IN';
        const coords = getCoordinates(location);

        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true&hourly=temperature_2m,relative_humidity_2m,windspeed_10m,weathercode,precipitation_probability,uv_index&daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_probability_max,sunrise,sunset&timezone=auto&forecast_days=7`);

        const current = response.data.current_weather;
        const hourly = response.data.hourly;
        const daily = response.data.daily;

        const formatted = {
            location: location,
            coordinates: coords,
            current: {
                temp: current.temperature,
                weathercode: current.weathercode,
                description: getWeatherDescription(current.weathercode),
                windspeed: current.windspeed,
                time: current.time,
                is_day: current.is_day || 1
            },
            hourly: hourly.temperature_2m.slice(0, 48).map((temp, i) => ({
                time: hourly.time[i],
                temp: temp,
                humidity: hourly.relative_humidity_2m[i],
                windspeed: hourly.windspeed_10m[i],
                weathercode: hourly.weathercode[i],
                description: getWeatherDescription(hourly.weathercode[i]),
                precipitation_probability: hourly.precipitation_probability ? hourly.precipitation_probability[i] : 0,
                uv_index: hourly.uv_index ? hourly.uv_index[i] : 0
            })),
            daily: daily.temperature_2m_max.slice(0, 7).map((max, i) => ({
                date: daily.time[i],
                max: max,
                min: daily.temperature_2m_min[i],
                weathercode: daily.weathercode[i],
                description: getWeatherDescription(daily.weathercode[i]),
                precipitation_probability: daily.precipitation_probability_max ? daily.precipitation_probability_max[i] : 0,
                sunrise: daily.sunrise ? daily.sunrise[i] : null,
                sunset: daily.sunset ? daily.sunset[i] : null
            })),
            alerts: generateWeatherAlerts(hourly, daily),
            last_updated: new Date().toISOString()
        };
        res.json(formatted);
    } catch (e) {
        console.error('Weather API error:', e.message);
        res.status(500).json({
            error: 'Weather API error',
            details: e.message,
            fallback: {
                location: req.query.location || process.env.LOCATION || 'Delhi,IN',
                current: {
                    temp: 25,
                    description: 'partly cloudy',
                    windspeed: 5
                }
            }
        });
    }
});

function getCoordinates(location) {
    const locations = {
        'Delhi,IN': { lat: 28.6139, lon: 77.2090 },
        'Mumbai,IN': { lat: 19.0760, lon: 72.8777 },
        'Bangalore,IN': { lat: 12.9716, lon: 77.5946 },
        'Chennai,IN': { lat: 13.0827, lon: 80.2707 },
        'Kolkata,IN': { lat: 22.5726, lon: 88.3639 },
        'Hyderabad,IN': { lat: 17.3850, lon: 78.4867 },
        'Pune,IN': { lat: 18.5204, lon: 73.8567 },
        'Ahmedabad,IN': { lat: 23.0225, lon: 72.5714 },
        'Jaipur,IN': { lat: 26.9124, lon: 75.7873 },
        'Lucknow,IN': { lat: 26.8467, lon: 80.9462 },
        'New York,US': { lat: 40.7128, lon: -74.0060 },
        'London,UK': { lat: 51.5074, lon: -0.1278 },
        'Tokyo,JP': { lat: 35.6762, lon: 139.6503 },
        'Sydney,AU': { lat: -33.8688, lon: 151.2093 }
    };
    return locations[location] || locations['Delhi,IN'];
}

function generateWeatherAlerts(hourly, daily) {
    const alerts = [];

    // Check for high temperatures
    const maxTemp = Math.max(...daily.temperature_2m_max);
    if (maxTemp > 35) {
        alerts.push({
            type: 'heat',
            severity: 'high',
            message: `Extreme heat expected with temperatures up to ${maxTemp}°C`,
            icon: '🔥'
        });
    } else if (maxTemp > 30) {
        alerts.push({
            type: 'heat',
            severity: 'moderate',
            message: `Hot weather expected with temperatures up to ${maxTemp}°C`,
            icon: '☀️'
        });
    }

    // Check for rain probability
    const highRainDays = daily.precipitation_probability_max.filter(prob => prob > 70).length;
    if (highRainDays > 2) {
        alerts.push({
            type: 'rain',
            severity: 'high',
            message: `${highRainDays} days with high chance of rain`,
            icon: '🌧️'
        });
    }

    // Check for UV index
    if (hourly.uv_index) {
        const maxUV = Math.max(...hourly.uv_index);
        if (maxUV > 8) {
            alerts.push({
                type: 'uv',
                severity: 'high',
                message: `Extreme UV index (${maxUV}). Use sun protection`,
                icon: '🛡️'
            });
        }
    }

    return alerts;
}

function calculateBatteryHealth(battery) {
    // Simple health calculation based on temperature and SOC
    const tempFactor = battery.temperature > 35 ? 0.9 : battery.temperature < 15 ? 0.95 : 1.0;
    const socFactor = battery.soc > 80 ? 0.98 : battery.soc < 20 ? 0.99 : 1.0;
    return Math.round((tempFactor * socFactor) * 100);
}

function calculateChargingEfficiency(battery, weather) {
    let efficiency = 85; // Base efficiency

    // Weather impact
    if (weather) {
        if (weather.current.description.toLowerCase().includes('sunny')) {
            efficiency += 5; // Better solar conditions
        } else if (weather.current.description.toLowerCase().includes('rain')) {
            efficiency -= 3; // Reduced efficiency in rain
        }
    }

    // Temperature impact
    if (battery.temperature > 30) {
        efficiency -= 2;
    } else if (battery.temperature < 20) {
        efficiency -= 1;
    }

    return Math.max(70, Math.min(95, efficiency));
}

function generateLSTMPredictions(weather, powerPlant) {
    // Dummy LSTM predictions - in real implementation, this would use trained model
    const predictions = [];

    for (let i = 1; i <= 24; i++) {
        const hour = new Date();
        hour.setHours(hour.getHours() + i);

        let socPrediction = 85 + (Math.random() - 0.5) * 10;
        let voltagePrediction = 12.8 + (Math.random() - 0.5) * 0.5;
        let recommendedAction = 'Maintain';

        // Weather-based adjustments
        if (weather) {
            if (weather.current.description.toLowerCase().includes('sunny')) {
                socPrediction += 2;
                recommendedAction = 'Charge';
            } else if (weather.current.description.toLowerCase().includes('storm')) {
                socPrediction -= 3;
                recommendedAction = 'Conserve';
            }
        }

        // Power plant voltage adjustments
        if (powerPlant) {
            if (powerPlant.gridStability === 'Unstable') {
                recommendedAction = 'Discharge';
                socPrediction -= 5;
            }
        }

        predictions.push({
            hour: hour.getHours(),
            timestamp: hour.toISOString(),
            predictedSOC: Math.max(0, Math.min(100, Math.round(socPrediction))),
            predictedVoltage: Math.round(voltagePrediction * 10) / 10,
            recommendedAction: recommendedAction,
            confidence: Math.round(85 + Math.random() * 10),
            factors: {
                weather: weather?.current?.description || 'Unknown',
                gridStability: powerPlant?.gridStability || 'Unknown',
                temperature: weather?.current?.temp || 25
            }
        });
    }

    return predictions;
}

app.post('/api/log', async (req, res) => {
    try {
        const { deviceId, data } = req.body;
        const dataHash = ethers.id(JSON.stringify(data));

        // Get weather and power plant data for intelligent analysis
        const weather = await axios.get('http://127.0.0.1:5000/api/weather').catch(() => null);
        const powerPlant = await axios.get('http://127.0.0.1:5000/api/power-plant').catch(() => null);

        // Generate LSTM-based prediction
        const predictions = generateLSTMPredictions(weather?.data, powerPlant?.data);
        const currentPrediction = predictions[0] || {};

        let onChainTx = null;

        try {
            // Real Blockchain Attempt
            const signer = await provider.getSigner(0);
            const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, CONTRACT_ABI, signer);

            const device = await contract.devices(deviceId);
            if (!device.registered) {
                const deviceType = deviceId.startsWith('BATTERY') ? 'Smart Battery Unit' : 'Voltage Monitor';
                const regTx = await contract.registerDevice(deviceId, deviceType);
                await regTx.wait();
            }
            const tx = await contract.logData(deviceId, dataHash);
            const receipt = await tx.wait();
            onChainTx = receipt.hash;
        } catch (e) {
            console.warn(`[Blockchain Fallback] On-chain anchoring failed (ensure contract is deployed). Using local pulse instead.`);
            onChainTx = "0x" + Math.random().toString(16).substr(2, 32);
        }

        // Update battery status if it's a battery device
        if (deviceId.startsWith('BATTERY') && batteryStatus[deviceId]) {
            batteryStatus[deviceId] = {
                ...batteryStatus[deviceId],
                ...data,
                lastUpdate: new Date().toISOString()
            };
        }

        const newEntry = {
            _id: Math.random().toString(36).substr(2, 9),
            deviceId: deviceId || "Unknown",
            data: {
                ...data,
                powerPlantVoltage: powerPlant?.data?.currentVoltage || null,
                weatherImpact: weather?.data?.current?.description || null
            },
            hash: dataHash,
            timestamp: new Date().toISOString(),
            onChainTx: onChainTx,
            prediction: {
                recommendedAction: currentPrediction.recommendedAction || 'Monitor',
                confidence: currentPrediction.confidence || 85,
                nextHourSOC: currentPrediction.predictedSOC || data.soc
            }
        };

        logsArr.unshift(newEntry);
        if (logsArr.length > 50) logsArr.pop();

        console.log(`[Battery Pulse] ${newEntry.deviceId} | SOC: ${data.soc || 'N/A'}% | Action: ${newEntry.prediction.recommendedAction} | TX: ${onChainTx.substring(0, 10)}...`);
        res.json(newEntry);
    } catch (e) {
        console.error(`[Crit Error] ${e.message}`);
        res.status(500).json({ error: e.message });
    }
});

process.on('uncaughtException', (err) => {
    console.error('ASYNCHRONOUS EXCEPTION: ', err);
});

const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 SUPER STABLE MOCK SERVER RUNNING ON PORT ${PORT}`);
});
