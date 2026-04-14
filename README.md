# 🛡️ IoT-Ledger: Secure IoT Data Management Framework

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-site-id/deploy-status)](https://app.netlify.com/sites/your-site-name/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight, scalable blockchain-based framework designed for secure IoT data integration across a decentralized network.

## 🌟 Features

- **🔐 Secure Data Anchoring**: Every IoT data point is cryptographically hashed and stored on Ethereum blockchain
- **📊 Real-time Analytics**: Live dashboard with energy consumption monitoring and weather integration
- **🌤️ Advanced Weather API**: 7-day forecasts, UV index, precipitation alerts, and location-based weather adjustments
- **⚡ Smart Contracts**: Solidity-based data integrity verification with device management
- **🎨 Modern UI**: Glassmorphism design with responsive charts and animations
- **🔄 Auto-Simulation**: Realistic IoT data streaming with weather-based consumption adjustments

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
   git clone https://github.com/your-username/iot-blockchain-framework.git
   cd iot-blockchain-framework
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

Visit `http://localhost:5173` for the dashboard and `http://localhost:5000` for the API.

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
   RPC_URL=https://your-infura-endpoint
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

## 🧩 Architecture

### System Components

#### 1. **Frontend Dashboard** (`/client`)
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS + Framer Motion
- **Charts**: Recharts
- **Blockchain**: Ethers.js integration

#### 2. **Backend API** (`/server`)
- **Runtime**: Node.js + Express
- **Database**: MongoDB (optional, uses in-memory for demo)
- **Weather**: Open-Meteo API integration
- **Blockchain**: Ethereum RPC connection

#### 3. **Smart Contracts** (`/contracts`)
- **Language**: Solidity 0.8.20
- **Framework**: Hardhat
- **Features**: Device registration, data hashing, immutable storage

#### 4. **IoT Simulation** (`/simulated_iot`)
- **Data Source**: CSV energy consumption datasets
- **Weather Integration**: Dynamic consumption adjustments
- **Streaming**: Real-time data simulation

### Data Flow
```
IoT Device → CSV Parser → Weather Adjustment → API Server → Smart Contract → Blockchain
                                      ↓
                            MongoDB Storage ← Dashboard ← API Server
```

---

## 📊 API Endpoints

### Core Endpoints
- `GET /api` - Health check
- `GET /api/stats` - System statistics
- `GET /api/logs` - Recent data entries
- `POST /api/log` - Submit new IoT data

### Weather API
- `GET /api/weather` - Current weather + 7-day forecast
- `GET /api/weather?location=Mumbai,IN` - Weather for specific location

### Supported Locations
Delhi, Mumbai, Bangalore, Chennai, Kolkata, Hyderabad, Pune, Ahmedabad, Jaipur, Lucknow, New York, London, Tokyo, Sydney

---

## 🔧 Configuration

### Environment Variables
Create `.env` files in respective directories:

**Server** (`.env`):
```env
MONGO_URI=mongodb://localhost:27017/iotBlockchain
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
# Health check
curl http://localhost:5000/api

# Weather data
curl http://localhost:5000/api/weather
```

---

## 📈 Performance Features

- **Weather-Adjusted IoT Data**: Energy consumption varies based on weather conditions
- **Real-time Updates**: 3-second refresh intervals
- **Optimized Builds**: Code-split bundles for faster loading
- **Caching**: Smart contract data caching for better UX

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Open-Meteo API** for weather data
- **Ethereum** for blockchain infrastructure
- **Hardhat** for smart contract development
- **Vite** for lightning-fast builds

---

## 📞 Support

For questions or issues:
- Open an [issue](https://github.com/your-username/iot-blockchain-framework/issues)
- Check the [technical documentation](TECHNICAL_DOCS.md)# 🛡️ IoT-Ledger: Secure IoT Data Management Framework

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
