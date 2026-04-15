# � Smart Battery Management System

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-site-id/deploy-status)](https://app.netlify.com/sites/your-site-name/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An intelligent battery charging management system that uses AI-powered predictions, weather data, and power plant voltage fluctuations to optimize battery charging schedules and ensure grid stability.

## 🌟 Features

- **🧠 LSTM AI Predictions**: Machine learning model for optimal charging predictions
- **🌤️ Weather-Integrated Charging**: Adjusts charging based on weather conditions and solar potential
- **⚡ Power Plant Monitoring**: Real-time voltage fluctuation monitoring from power plants
- **🔄 Smart Charging Control**: Automated charging schedules based on grid stability and battery health
- **📊 Real-time Analytics**: Live dashboard with battery status, SOC monitoring, and performance metrics
- **⛓️ Blockchain Security**: Immutable logging of all battery operations on Ethereum

---

## 🚀 Quick Start (Development)

### Prerequisites
- Node.js 18+
- npm or yarn
- Git
- [Ganache](https://trufflesuite.com/ganache/) (for local blockchain)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/smart-battery-management.git
   cd smart-battery-management
   ```

2. **Install dependencies**
   ```bash
   npm install
   cd client && npm install && cd ..
   cd contracts && npm install && cd ..
   ```

3. **Start Blockchain (Ganache)**
   - Open Ganache UI or CLI
   - Ensure it's running on `http://127.0.0.1:7545`

4. **Deploy Smart Contracts**
   ```bash
   npm run deploy:contract
   ```

5. **Start Development Servers**
   ```bash
   npm run dev
   ```

6. **Start IoT Simulation** (in new terminal)
   ```bash
   npm run start:sim
   ```

Visit `http://localhost:5173` for the battery management dashboard and `http://localhost:5000` for the API.

---

## 🌐 Deployment

### Netlify (Frontend + API)

1. **Connect to Netlify**
   - Fork this repository
   - Connect your GitHub repo to Netlify
   - Netlify will automatically detect the `netlify.toml` configuration

2. **Environment Variables**
   Set these in Netlify dashboard:
   ```
   RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
   CONTRACT_ADDRESS=your_deployed_contract_address
   LOCATION=Delhi,IN
   ```

3. **Deploy Smart Contracts**
   - Deploy to a testnet (Sepolia, Goerli) or mainnet
   - Update the contract address in environment variables

### Manual Deployment

#### Frontend Only (Netlify)
```bash
cd client
npm run build
# Upload dist/ folder to Netlify
```

#### Full Stack (VPS/Cloud)
```bash
# Backend
npm start:server

# Frontend
cd client && npm run build && npm run preview

# Blockchain
npm run deploy:contract
```

---

## 🧩 System Architecture

### Core Components

#### 1. **AI Prediction Engine** (`/server`)
- **LSTM Model**: Time-series predictions for optimal charging
- **Weather Integration**: Solar potential and weather impact analysis
- **Grid Stability**: Power plant voltage fluctuation monitoring
- **Battery Health**: SOC, temperature, and efficiency calculations

#### 2. **Battery Management Dashboard** (`/client`)
- **Real-time Monitoring**: Live battery status and charging progress
- **Control Interface**: Manual charging controls and target SOC settings
- **AI Insights**: LSTM predictions and recommended actions
- **Analytics**: Performance metrics and historical data

#### 3. **Smart Contracts** (`/contracts`)
- **Data Integrity**: Immutable logging of battery operations
- **Device Management**: Battery unit registration and authentication
- **Audit Trail**: Complete blockchain-verified transaction history

#### 4. **IoT Data Simulation** (`/simulated_iot`)
- **Power Plant Data**: Realistic voltage fluctuation simulation
- **Battery Telemetry**: SOC, voltage, current, and temperature data
- **Weather Impact**: Dynamic adjustments based on weather conditions

### Data Flow Architecture
```
Power Plant API → Voltage Analysis → LSTM Model → Charging Decision
       ↓                    ↓             ↓             ↓
   Weather API → Weather Impact → Grid Stability → Battery Control
       ↓                    ↓             ↓             ↓
   Battery Sensors → Health Monitoring → AI Predictions → Smart Charging
```

---

## 📊 API Endpoints

### Battery Management
- `GET /api/battery/:id` - Get battery status and health
- `POST /api/battery/:id/control` - Control charging (start/stop/set target)
- `GET /api/power-plant` - Power plant voltage and grid status
- `GET /api/predictions` - LSTM AI predictions for next 24 hours

### Weather Integration
- `GET /api/weather` - Current weather + 7-day forecast
- `GET /api/weather?location=Mumbai,IN` - Weather for specific location

### System Monitoring
- `GET /api` - System health check
- `GET /api/stats` - Battery fleet statistics
- `GET /api/logs` - Blockchain-verified transaction logs

---

## 🔧 Configuration

### Environment Variables
Create `.env` files in respective directories:

**Server** (`.env`):
```env
MONGO_URI=mongodb://localhost:27017/batteryManagement
RPC_URL=http://127.0.0.1:7545
PRIVATE_KEY=your_ganache_private_key
CONTRACT_ADDRESS=deployed_contract_address
LOCATION=Delhi,IN
PORT=5000
```

**Client** (`.env`):
```env
VITE_API_URL=http://localhost:5000
VITE_CONTRACT_ADDRESS=deployed_contract_address
```

---

## 🧪 Testing

### Smart Contracts
```bash
cd contracts
npx hardhat test
```

### API Testing
```bash
# Battery status
curl http://localhost:5000/api/battery/BATTERY-001

# AI predictions
curl http://localhost:5000/api/predictions

# Power plant data
curl http://localhost:5000/api/power-plant
```

---

## 📈 AI & Machine Learning Features

### LSTM Prediction Model
- **Time Series Analysis**: 24-hour SOC and voltage predictions
- **Multi-factor Input**: Weather, grid stability, battery health
- **Confidence Scoring**: Prediction reliability assessment
- **Adaptive Learning**: Continuous model improvement

### Intelligent Charging Logic
- **Weather-Based**: Adjusts for solar potential and temperature
- **Grid Stability**: Prevents charging during voltage fluctuations
- **Battery Health**: Optimizes charging for longevity
- **Cost Optimization**: Charges during off-peak hours

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/smart-charging-algorithm`)
3. Commit changes (`git commit -m 'Add smart charging algorithm'`)
4. Push to branch (`git push origin feature/smart-charging-algorithm`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Open-Meteo API** for comprehensive weather data
- **TensorFlow.js** for client-side ML capabilities
- **Ethereum** for secure, decentralized data integrity
- **Hardhat** for professional smart contract development
- **Vite** for lightning-fast development and builds

---

## 📞 Support

For questions or issues:
- Open an [issue](https://github.com/your-username/smart-battery-management/issues)
- Check the [technical documentation](TECHNICAL_DOCS.md)
- Review the [deployment guide](DEPLOYMENT.md)# 🛡️ IoT-Ledger: Secure IoT Data Management Framework

A lightweight, scalable blockchain-based framework designed for secure IoT data integration across a decentralized network.

---

## 🚀 Quick Start (Automated)

1.  **Start Blockchain:**
    Open **Ganache** (UI or CLI) and ensure it's listening on `http://127.0.0.1:8545`.
2.  **Deploy Contract:**
    ```bash
    npm run deploy:contract
    ```
3.  **Launch Dashboard & Backend:**
    ```bash
    npm run dev
    ```
4.  **Start IoT Simulation:**
    ```bash
    npm run start:sim
    ```

---

## 🧩 System Architecture

-   **Frontend:** Vite + React + Framer Motion (Premium Glassmorphism Dashboard)
-   **Backend:** Node.js + Express.js + Mongoose
-   **Blockchain:** Ethereum (Solidity Smart Contracts) + Hardhat
-   **Database:** MongoDB
-   **Simulation:** Node.js script streaming from the built-in energy dataset.

---

## 🛠️ Components

### 1. Smart Contracts (`/contracts`)
-   **IoTDataStore.sol**: Manages immutable records of data hashes and device IDs.
-   Efficient storage: Only 32-byte hashes are stored on-chain per record.

### 2. Backend Server (`/server`)
-   **Data Validation**: Hashes incoming CSV data to SHA-256 for integrity verification.
-   **Dual-Storage**: Stores rich data in MongoDB and verification hashes on-chain.

### 3. Simulation Engine (`/simulated_iot`)
-   Automatically parses the provided dataset (`appliance_energy_data_1000.csv`).
-   Streams data at a controlled rate (2-second intervals) to simulate real-world IoT sensors.

### 4. Admin Dashboard (`/client`)
-   Real-time analytics chart for appliance energy usage.
-   Blockchain transaction ledger with direct status verification.
-   Device health monitoring.

---

## 📜 Project Documentation
For a deep dive into the architecture, design choices, and security considerations, refer to [TECHNICAL_DOCS.md](TECHNICAL_DOCS.md).

---

## ⚖️ Troubleshooting
-   **Blockchain Connection**: Ensure your Ganache `chainId` matches your configuration (default 1337 or 5777).
-   **Environment**: Copy `server/.env.example` to `server/.env` and update your private key from Ganache to enable on-chain logging.
