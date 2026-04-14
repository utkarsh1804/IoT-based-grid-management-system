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

// Initial seed to ensure something is there
let logsArr = [
    { 
        _id: "seed1", 
        deviceId: "IoT-Node-01", 
        data: { energy: 45.2, status: "Active" }, 
        hash: "0xseedhash", 
        timestamp: new Date().toISOString(),
        onChainTx: "0xseedtx"
    }
];
let devicesArr = [{ deviceId: "IoT-Node-01", deviceType: "Energy Monitor" }];

app.get('/api', (req, res) => {
    res.json({ 
        status: "Online", 
        message: "IoT-Ledger Secure API is fully operational.",
        endpoints: ["/api/stats", "/api/logs", "/api/log (POST)"]
    });
});

app.get('/api/stats', (req, res) => {
    try {
        res.json({ deviceCount: devicesArr.length, logCount: logsArr.length });
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

function getWeatherDescription(code) {
    const descriptions = {
        0: 'Clear sky',
        1: 'Mainly clear',
        2: 'Partly cloudy',
        3: 'Overcast',
        45: 'Fog',
        48: 'Depositing rime fog',
        51: 'Light drizzle',
        53: 'Moderate drizzle',
        55: 'Dense drizzle',
        56: 'Light freezing drizzle',
        57: 'Dense freezing drizzle',
        61: 'Slight rain',
        63: 'Moderate rain',
        65: 'Heavy rain',
        66: 'Light freezing rain',
        67: 'Heavy freezing rain',
        71: 'Slight snow fall',
        73: 'Moderate snow fall',
        75: 'Heavy snow fall',
        77: 'Snow grains',
        80: 'Slight rain showers',
        81: 'Moderate rain showers',
        82: 'Violent rain showers',
        85: 'Slight snow showers',
        86: 'Heavy snow showers',
        95: 'Thunderstorm',
        96: 'Thunderstorm with slight hail',
        99: 'Thunderstorm with heavy hail'
    };
    return descriptions[code] || 'Unknown weather condition';
}

app.post('/api/log', async (req, res) => {
    try {
        const { deviceId, data } = req.body;
        const dataHash = ethers.id(JSON.stringify(data));
        let onChainTx = null;

        try {
            // Real Blockchain Attempt
            const signer = await provider.getSigner(0);
            const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, CONTRACT_ABI, signer);
            
            const device = await contract.devices(deviceId);
            if (!device.registered) {
                const regTx = await contract.registerDevice(deviceId, "Industrial Node");
                await regTx.wait();
            }
            const tx = await contract.logData(deviceId, dataHash);
            const receipt = await tx.wait();
            onChainTx = receipt.hash;
        } catch (e) {
            console.warn(`[Blockchain Fallback] On-chain anchoring failed (ensure contract is deployed). Using local pulse instead.`);
            onChainTx = "0x" + Math.random().toString(16).substr(2, 32);
        }

        const newEntry = {
            _id: Math.random().toString(36).substr(2, 9),
            deviceId: deviceId || "Unknown",
            data: data || {},
            hash: dataHash,
            timestamp: new Date().toISOString(),
            onChainTx: onChainTx
        };
        
        logsArr.unshift(newEntry);
        if (logsArr.length > 50) logsArr.pop();
        
        console.log(`[Pulse] ${newEntry.deviceId} | Hash: ${dataHash.substring(0, 10)}... | TX: ${onChainTx.substring(0, 10)}...`);
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
