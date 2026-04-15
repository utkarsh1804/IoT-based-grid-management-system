# 🚀 IoT-Ledger Deployment Guide

This guide covers deploying the IoT-Ledger framework to various platforms.

## 📋 Pre-deployment Checklist

- [ ] All dependencies installed (`npm install` in root, client, contracts)
- [ ] Client builds successfully (`cd client && npm run build`)
- [ ] Smart contracts compile (`npm run deploy:contract`)
- [ ] Environment variables configured
- [ ] Git repository initialized and committed

## 🌐 Netlify Deployment

### Option 1: Direct GitHub Connection (Recommended)

1. **Create GitHub Repository**
   ```bash
   # If you haven't already
   git remote add origin https://github.com/your-username/iot-blockchain-framework.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://app.netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Netlify will auto-detect `netlify.toml` configuration

3. **Configure Environment Variables**
   In Netlify dashboard → Site settings → Environment variables:
   ```
   RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
   CONTRACT_ADDRESS=0x... (deployed contract address)
   LOCATION=Delhi,IN
   NODE_VERSION=18
   ```

4. **Deploy Smart Contracts First**
   ```bash
   # Deploy to Sepolia testnet
   cd contracts
   npx hardhat run scripts/deploy.cjs --network sepolia
   ```

### Option 2: Manual Upload

1. **Build the Client**
   ```bash
   cd client
   npm run build
   ```

2. **Upload to Netlify**
   - Drag and drop the `client/dist` folder to Netlify
   - Configure redirects in `_redirects` file (already included)

## ☁️ Alternative Deployment Options

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Configure Environment Variables**
   ```bash
   vercel env add RPC_URL
   vercel env add CONTRACT_ADDRESS
   vercel env add LOCATION
   ```

### Railway

1. **Connect Repository**
   - Link your GitHub repo to Railway
   - Railway will auto-detect the project structure

2. **Environment Variables**
   Set in Railway dashboard:
   ```
   RPC_URL=https://sepolia.infura.io/v3/YOUR_KEY
   CONTRACT_ADDRESS=0x...
   LOCATION=Delhi,IN
   ```

### Heroku

1. **Create Heroku App**
   ```bash
   heroku create your-app-name
   ```

2. **Configure for Client Build**
   ```json
   // Add to client/package.json
   "engines": {
     "node": "18.x"
   },
   "scripts": {
     "build": "vite build",
     "start": "vite preview"
   }
   ```

3. **Deploy**
   ```bash
   git push heroku main
   ```

## 🔧 Smart Contract Deployment

### Local Development (Ganache)
```bash
npm run deploy:contract
# Contract deployed to: 0xAbBA9e838112d3f02e61686d983D8796b5aD91A2
```

### Testnet Deployment (Sepolia)
```bash
cd contracts

# Configure hardhat.config.cjs for Sepolia
# Add your Infura/Alchemy endpoint and private key

npx hardhat run scripts/deploy.cjs --network sepolia
```

### Mainnet Deployment
```bash
npx hardhat run scripts/deploy.cjs --network mainnet
```

## 🌍 Environment Configuration

### Production Environment Variables

**For Netlify/Vercel:**
```
RPC_URL=https://mainnet.infura.io/v3/YOUR_PROJECT_ID
CONTRACT_ADDRESS=0x... (mainnet contract)
LOCATION=Delhi,IN
NODE_VERSION=18
```

**For Railway/Heroku:**
```
RPC_URL=https://mainnet.infura.io/v3/YOUR_PROJECT_ID
CONTRACT_ADDRESS=0x...
LOCATION=Delhi,IN
PORT=5000
```

## 🔒 Security Considerations

### API Keys
- Use Infura/Alchemy for RPC endpoints
- Never commit private keys to repository
- Use environment variables for all sensitive data

### Smart Contracts
- Test thoroughly on testnets before mainnet
- Consider contract upgrades and access controls
- Monitor gas usage and optimize where possible

### Frontend Security
- Implement proper CORS policies
- Use HTTPS in production
- Validate all user inputs

## 📊 Monitoring & Maintenance

### Health Checks
- API endpoint: `GET /api`
- Monitor contract events
- Check weather API availability

### Updates
- Keep dependencies updated
- Monitor Open-Meteo API changes
- Update smart contracts as needed

## 🆘 Troubleshooting

### Build Failures
```bash
# Clear caches
rm -rf node_modules/.vite
npm run build
```

### API Connection Issues
- Check environment variables
- Verify RPC endpoint connectivity
- Ensure contract is deployed and accessible

### Weather API Issues
- Open-Meteo API has rate limits
- Check location coordinates
- Verify API response format

## 📞 Support

For deployment issues:
1. Check the [README.md](README.md) for setup instructions
2. Review [TECHNICAL_DOCS.md](TECHNICAL_DOCS.md) for architecture details
3. Open an issue on GitHub with detailed error logs