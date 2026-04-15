# 🚀 Netlify Deployment Guide

## Step-by-Step Deployment Instructions

### 1. Prepare Your Repository
✅ Your code is already pushed to GitHub
✅ Build configuration is ready (`netlify.toml`)
✅ Environment variables are configured

### 2. Deploy Frontend to Netlify

1. **Go to Netlify**
   - Visit: https://netlify.com
   - Sign up/Login with your GitHub account

2. **Create New Site**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"

3. **Connect Repository**
   - Select your repository: `utkarsh1804/IoT-based-grid-management-system`
   - Click "Configure"

4. **Build Settings** (should auto-detect from netlify.toml):
   - **Base directory**: `client`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18

5. **Environment Variables**
   - Add: `VITE_API_URL` = `https://your-backend-url.onrender.com`
   - (You'll get the backend URL after deploying the backend)

6. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete (usually 2-3 minutes)

### 3. Deploy Backend (Choose one option)

#### Option A: Render (Recommended)
1. Go to https://render.com
2. Create account/Login
3. Click "New" → "Web Service"
4. Connect your GitHub repo
5. Configure:
   - **Name**: iot-grid-backend
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Root Directory**: `server`
6. Add environment variables (see README.md)
7. Click "Create Web Service"

#### Option B: Railway
1. Go to https://railway.app
2. Create account/Login
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repo
5. Set root directory to `server`
6. Add environment variables
7. Deploy

### 4. Update Frontend Environment Variable

After backend deployment:
1. Get your backend URL (e.g., `https://iot-grid-backend.onrender.com`)
2. Go to Netlify dashboard → Site settings → Environment variables
3. Update `VITE_API_URL` with your actual backend URL
4. Trigger a new deploy

### 5. Test Your Deployment

1. Visit your Netlify site URL
2. Check that the dashboard loads
3. Test battery controls and charts
4. Verify data is updating (backend connection)

## 🎉 You're Done!

Your IoT Grid Management System is now live and free to use!

### Useful Links:
- **Frontend**: Your Netlify URL
- **Backend**: Your Render/Railway URL
- **GitHub**: https://github.com/utkarsh1804/IoT-based-grid-management-system

## Troubleshooting

- **Build fails**: Check Netlify build logs
- **Backend not connecting**: Verify VITE_API_URL is correct
- **Charts not loading**: Check backend is running and accessible
- **CORS errors**: Backend needs to allow your Netlify domain

## Cost: FREE (for basic usage)
- Netlify: 100GB bandwidth/month free
- Render: 750 hours/month free
- Railway: $5/month credit free
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