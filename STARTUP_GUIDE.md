# 🚀 IoT Grid Management System - Complete Startup Guide

## 📋 System Overview

Your IoT Grid Management System includes:
- ✅ **Frontend**: React dashboard on Netlify
- ✅ **Backend**: Express.js API server
- ✅ **Simulation**: High-fidelity IoT data generator
- ✅ **Blockchain**: Smart contract integration
- ✅ **Database**: MongoDB for data storage

## 🛠️ Prerequisites

- Node.js 18+
- MongoDB (local or cloud)
- Git
- [Ganache](https://trufflesuite.com/ganache/) for blockchain

## 📝 Environment Setup

1. **Create `.env` file in `server/` directory:**
```env
MONGO_URI=mongodb://localhost:27017/iotBlockchain
RPC_URL=http://127.0.0.1:8545
PRIVATE_KEY=your_ganache_private_key_here
CONTRACT_ADDRESS=your_deployed_contract_address_here
PORT=5000
```

## 🚀 Complete System Startup Commands

### Step 1: Start MongoDB
```bash
# If using local MongoDB
mongod
```

### Step 2: Start Ganache (Blockchain)
```bash
# Open Ganache UI or use CLI
ganache-cli -d
```

### Step 3: Deploy Smart Contracts
```bash
npm run deploy:contract
```

### Step 4: Start Backend Server
```bash
npm run start:server
```
**Expected Output:** `Server running on port 5000`

### Step 5: Start IoT Simulation
```bash
npm run start:sim
```
**Expected Output:** `🚀 Starting IoT-Ledger High-Fidelity Simulation...`

### Step 6: Start Frontend (Development)
```bash
npm run start:client
```
**Expected Output:** `Local: http://localhost:5173/`

## 🎯 Quick Start Commands (All-in-One)

### For Development Testing:
```bash
# Terminal 1: Start everything except frontend
npm run dev

# Terminal 2: Start simulation
npm run start:sim

# Terminal 3: Start frontend
npm run start:client
```

### For Production Simulation:
```bash
# Start server
npm run start:server

# Start simulation (in new terminal)
npm run start:sim
```

## 📊 System Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   IoT Devices   │───▶│   Express API   │───▶│   MongoDB       │
│   (Simulation)  │    │   (Port 5000)   │    │   Database      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                        │                        │
         ▼                        ▼                        ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Weather API   │    │   Blockchain    │    │   React App     │
│   Integration   │    │   (Ganache)     │    │   (Netlify)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🔍 Monitoring & Testing

### Check System Health:
- **Frontend**: http://localhost:5173 (dev) or your Netlify URL
- **Backend API**: http://localhost:5000/api/health
- **Weather Data**: http://localhost:5000/api/weather
- **Battery Data**: http://localhost:5000/api/battery

### Simulation Monitoring:
The simulation will show real-time logs:
```
[Success] 2:30:45 PM - Meter: BR001 | Value: 15.23 kWh (adjusted) | Hash: a1b2c3d4...
```

## ⚙️ Configuration Options

### Simulation Settings:
- **Data Source**: `SM Cleaned Data BR Aggregated.csv`
- **Update Interval**: 3 seconds
- **Weather Adjustment**: Automatic based on current conditions

### API Endpoints:
- `POST /api/log` - Log IoT data to blockchain
- `GET /api/battery` - Get battery status
- `GET /api/weather` - Get weather data
- `GET /api/analytics` - Get system analytics

## 🚨 Troubleshooting

### Common Issues:

1. **"MongoDB connection failed"**
   ```bash
   # Start MongoDB
   mongod
   ```

2. **"Blockchain connection failed"**
   ```bash
   # Start Ganache
   ganache-cli -d
   ```

3. **"Port 5000 already in use"**
   ```bash
   # Kill process on port 5000
   npx kill-port 5000
   ```

4. **"Simulation can't connect to server"**
   - Ensure server is running on port 5000
   - Check firewall settings

## 📈 Performance Metrics

- **Simulation Speed**: ~3 seconds per data point
- **Data Points**: 1000+ from CSV
- **Blockchain**: Real-time transaction logging
- **Weather**: Live API integration

## 🎉 Success Indicators

✅ **Server**: "Server running on port 5000"
✅ **Simulation**: "Starting IoT-Ledger High-Fidelity Simulation..."
✅ **Frontend**: React app loads with live charts
✅ **Blockchain**: Transaction hashes in console
✅ **Database**: Data persists between restarts

## 🌐 Production Deployment

- **Frontend**: Already deployed on Netlify
- **Backend**: Deploy to Render/Railway
- **Database**: Use MongoDB Atlas
- **Blockchain**: Deploy contracts to testnet/mainnet

---

**Ready to start? Run the commands above in order!** 🚀