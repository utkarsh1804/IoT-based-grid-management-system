@echo off
echo ============================================
echo  🚀 IoT Grid Management System Startup
echo ============================================
echo.

echo 📋 Checking prerequisites...
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js not found. Please install Node.js 18+
    pause
    exit /b 1
)
echo ✅ Node.js found

where mongod >nul 2>nul
if %errorlevel% neq 0 (
    echo ⚠️  MongoDB not found locally. Make sure MongoDB is running or use cloud MongoDB.
) else (
    echo ✅ MongoDB found
)

echo.
echo 🛠️  Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install root dependencies
    pause
    exit /b 1
)

cd client
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install client dependencies
    pause
    exit /b 1
)
cd ..

cd server
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install server dependencies
    pause
    exit /b 1
)
cd ..

cd contracts
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install contract dependencies
    pause
    exit /b 1
)
cd ..

echo.
echo 🔗 Starting services...
echo.
echo 📌 Step 1: Make sure Ganache is running on http://127.0.0.1:8545
echo 📌 Step 2: Make sure MongoDB is running
echo.
echo Press any key to continue with deployment and startup...
pause >nul

echo.
echo 🔗 Deploying smart contracts...
call npm run deploy:contract
if %errorlevel% neq 0 (
    echo ❌ Smart contract deployment failed
    echo Continuing anyway...
)

echo.
echo 🖥️  Starting backend server...
start "IoT Server" cmd /k "npm run start:server"

timeout /t 3 /nobreak >nul

echo.
echo 🤖 Starting IoT simulation...
start "IoT Simulation" cmd /k "npm run start:sim"

timeout /t 2 /nobreak >nul

echo.
echo 🌐 Starting frontend development server...
start "React App" cmd /k "npm run start:client"

echo.
echo ============================================
echo  🎉 System Started Successfully!
echo ============================================
echo.
echo 🌐 Frontend: http://localhost:5173
echo 🚀 Backend:  http://localhost:5000
echo 📊 Simulation: Running in background
echo.
echo 📋 Check the opened terminal windows for logs
echo 📋 Press Ctrl+C in any window to stop that service
echo.
echo 📖 See STARTUP_GUIDE.md for detailed instructions
echo.
pause