const fs = require('fs');
const csv = require('csv-parser');
const axios = require('axios');
const path = require('path');

const SERVER_URL = 'http://127.0.0.1:5000/api/log';
const CSV_FILE = path.join(__dirname, '..', '..', 'SM Cleaned Data BR Aggregated.csv');

async function getWeatherAdjustment() {
    try {
        const response = await axios.get('http://127.0.0.1:5000/api/weather');
        const weather = response.data;
        const description = weather.current.description.toLowerCase();
        if (description.includes('rain') || description.includes('storm') || description.includes('thunderstorm')) {
            return 1.15; // 15% increase for severe weather
        } else if (description.includes('snow') || description.includes('hail')) {
            return 1.12; // 12% increase for snow/hail
        } else if (description.includes('fog') || description.includes('mist')) {
            return 1.08; // 8% increase for reduced visibility
        } else if (description.includes('wind') || description.includes('cloud')) {
            return 1.05; // 5% increase for windy/cloudy
        }
    } catch (e) {
        // Ignore weather errors
    }
    return 1.0; // No adjustment
}

async function sendToBlockchain(data) {
    try {
        const adjustment = await getWeatherAdjustment();
        const adjustedData = { ...data, t_kWh: (parseFloat(data.t_kWh) * adjustment).toFixed(2) };
        const response = await axios.post(SERVER_URL, {
            deviceId: data.meter || "IoT-Node-01", 
            data: adjustedData
        });
        const shortHash = response.data && response.data.hash ? response.data.hash.substring(0, 8) : 'N/A';
        console.log(`[Success] ${new Date().toLocaleTimeString()} - Meter: ${data.meter} | Value: ${adjustedData.t_kWh} kWh (${adjustment > 1 ? 'adjusted' : 'normal'}) | Hash: ${shortHash}...`);
    } catch (error) {
        console.error(`[Error] Failed to log data: ${error.message}`);
    }
}

async function startSimulation() {
    console.log("🚀 Starting IoT-Ledger High-Fidelity Simulation...");
    const results = [];

    fs.createReadStream(CSV_FILE)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', async () => {
            console.log(`📊 Loaded ${results.length} data points from ecosystem.`);
            for (const row of results) {
                await sendToBlockchain(row);
                // 3 second pulse interval
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        });
}

startSimulation();
