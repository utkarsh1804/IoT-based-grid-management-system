import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { BrowserProvider, Contract } from 'ethers';
import {
  Activity,
  Database,
  ShieldCheck,
  Cpu,
  TrendingUp,
  Clock,
  Box,
  Smartphone,
  ExternalLink,
  Zap,
  Wallet,
  LogOut,
  ChevronRight,
  AlertTriangle,
  Server,
  BarChart3,
  RefreshCw,
  Link,
  X,
  Cloud,
  Battery,
  BatteryCharging,
  BatteryLow,
  BatteryFull,
  Settings,
  Brain,
  Gauge,
  Thermometer,
  Wind,
  Sun,
  Moon,
  Play,
  Pause,
  Square,
  RotateCcw,
  AlertCircle,
  CheckCircle,
  Info,
  Wrench,
  Zap as Lightning,
  Target,
  Calendar,
  Bell,
  BellOff,
  Volume2,
  VolumeX,
  Download,
  Upload,
  Power,
  PowerOff,
  Wifi,
  WifiOff,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Filter,
  Search,
  Plus,
  Minus,
  ChevronUp,
  ChevronDown,
  MoreHorizontal,
  Grid,
  List,
  Monitor,
  HardDrive,
  Cpu as Processor,
  MemoryStick,
  Network,
  Shield,
  Users,
  UserCheck,
  FileText,
  TrendingDown,
  TrendingUp as TrendingUpIcon,
  Activity as ActivityIcon,
  Clock as ClockIcon,
  Settings as SettingsIcon,
  RefreshCw as RefreshIcon,
  AlertTriangle as AlertIcon,
  CheckCircle as CheckIcon,
  XCircle,
  Loader,
  Save,
  Edit,
  Trash2,
  Copy,
  Share,
  Star,
  Heart,
  Bookmark,
  Flag,
  Tag,
  Layers,
  Layout,
  Maximize,
  Minimize,
  Move,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Home,
  MapPin,
  Navigation,
  Compass,
  Crosshair,
  Target as TargetIcon,
  Circle,
  Square as SquareIcon,
  Triangle,
  Hexagon,
  Star as StarIcon,
  Heart as HeartIcon,
  Diamond,
  Octagon,
  Shield as ShieldIcon,
  Crown,
  Award,
  Trophy,
  Medal,
  Gift,
  Package,
  Truck,
  Plane,
  Ship,
  Car,
  Bike,
  Coffee,
  Utensils,
  ShoppingCart,
  CreditCard,
  DollarSign,
  Euro,
  PoundSterling,
  Bitcoin,
  DollarSign as DollarIcon
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie,
  LineChart,
  Line,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = ({ activeTab, setActiveTab, account, onConnect }) => (
  <aside className="w-72 h-[calc(100vh-2rem)] border-r border-slate-200/50 p-8 flex flex-col glass-card ml-4 my-4 rounded-3xl sticky top-4 bg-gradient-to-b from-white/60 to-slate-50/40">
    <div className="flex items-center gap-3 mb-10">
      <div className="p-2 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg shadow-lg shadow-green-500/10">
        <Battery className="w-8 h-8 text-white" />
      </div>
      <div>
        <h1 className="text-xl font-bold tracking-tight logo-text">Battery<span className="text-green-500">Manager</span></h1>
        <p className="text-[11px] text-slate-600 tracking-widest font-bold">AI-POWERED CHARGING</p>
      </div>
    </div>

    <nav className="flex-1 space-y-1">
      <button
        onClick={() => setActiveTab('dashboard')}
        className={`sidebar-link w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all ${activeTab === 'dashboard' ? 'bg-green-500/10 text-green-600 border-l-4 border-green-500 pl-4' : 'text-slate-600 hover:bg-slate-100/50'}`}
      >
        <Activity className="w-5 h-5" /> Battery Dashboard
      </button>
      <button
        onClick={() => setActiveTab('charging')}
        className={`sidebar-link w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all ${activeTab === 'charging' ? 'bg-green-500/10 text-green-600 border-l-4 border-green-500 pl-4' : 'text-slate-600 hover:bg-slate-100/50'}`}
      >
        <BatteryCharging className="w-5 h-5" /> Charging Control
      </button>
      <button
        onClick={() => setActiveTab('predictions')}
        className={`sidebar-link w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all ${activeTab === 'predictions' ? 'bg-green-500/10 text-green-600 border-l-4 border-green-500 pl-4' : 'text-slate-600 hover:bg-slate-100/50'}`}
      >
        <Brain className="w-5 h-5" /> AI Predictions
      </button>
      <button
        onClick={() => setActiveTab('analytics')}
        className={`sidebar-link w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all ${activeTab === 'analytics' ? 'bg-green-500/10 text-green-600 border-l-4 border-green-500 pl-4' : 'text-slate-600 hover:bg-slate-100/50'}`}
      >
        <BarChart3 className="w-5 h-5" /> Performance Metrics
      </button>
      <button
        onClick={() => setActiveTab('ledger')}
        className={`sidebar-link w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all ${activeTab === 'ledger' ? 'bg-green-500/10 text-green-600 border-l-4 border-green-500 pl-4' : 'text-slate-600 hover:bg-slate-100/50'}`}
      >
        <Database className="w-5 h-5" /> Blockchain Ledger
      </button>
      <button
        onClick={() => setActiveTab('explorer')}
        className={`sidebar-link w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all ${activeTab === 'explorer' ? 'bg-green-500/10 text-green-600 border-l-4 border-green-500 pl-4' : 'text-slate-600 hover:bg-slate-100/50'}`}
      >
        <Link className="w-5 h-5" /> Explorer
      </button>
      <button
        onClick={() => setActiveTab('diagnostics')}
        className={`sidebar-link w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all ${activeTab === 'diagnostics' ? 'bg-green-500/10 text-green-600 border-l-4 border-green-500 pl-4' : 'text-slate-600 hover:bg-slate-100/50'}`}
      >
        <Monitor className="w-5 h-5" /> System Monitor
      </button>
      <button
        onClick={() => setActiveTab('settings')}
        className={`sidebar-link w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all ${activeTab === 'settings' ? 'bg-green-500/10 text-green-600 border-l-4 border-green-500 pl-4' : 'text-slate-600 hover:bg-slate-100/50'}`}
      >
        <Settings className="w-5 h-5" /> Settings
      </button>
    </nav>
    
    <div className="mt-auto space-y-4">
      <div className="p-4 glass-card border-none bg-slate-800/20 rounded-2xl">
        <p className="text-[10px] text-slate-600 mb-2 uppercase tracking-tighter">Blockchain Pulse</p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-sm font-medium text-slate-700">Ganache Local Hub</span>
        </div>
      </div>

      {!account ? (
        <button 
          onClick={onConnect}
          className="w-full p-4 glass-card border-cyan-500/20 hover:border-cyan-500/50 bg-cyan-500/5 group flex items-center justify-between rounded-2xl transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <Wallet className="w-5 h-5 text-cyan-400" />
            </div>
            <span className="text-sm font-bold">Connect Wallet</span>
          </div>
          <ChevronRight className="w-4 h-4 text-cyan-400/40 group-hover:translate-x-1 transition-transform" />
        </button>
      ) : (
        <div className="p-4 glass-card border-emerald-500/20 bg-emerald-500/5 rounded-2xl group cursor-pointer overflow-hidden">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-1.5 bg-emerald-500/20 rounded-md">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-tighter">SECURED SESSION</p>
          </div>
          <p className="text-[10px] font-mono text-slate-300 truncate group-hover:text-emerald-400 transition-colors">{account}</p>
        </div>
      )}
    </div>
  </aside>
);

const StatCard = ({ title, value, icon: Icon, color, delay, onClick }) => (
  <motion.div
    initial={{ opacity: 1, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="p-8 glass-card relative overflow-hidden group min-h-[160px] cursor-pointer transition-transform"
    onClick={onClick}
  >
    <div className={`absolute top-0 right-0 w-40 h-40 bg-${color}-500/5 blur-3xl -mr-20 -mt-20 transition-all`}></div>
    <div className="flex items-start justify-between mb-4">
      <div className="flex-1">
        <p className="text-slate-600 text-sm font-semibold mb-2 tracking-wider uppercase">{title}</p>
        <h3 className="stat-value text-4xl text-slate-800">{value}</h3>
      </div>
      <div className={`p-4 bg-gradient-to-br from-${color}-500/20 to-${color}-600/20 border border-${color}-500/30 rounded-2xl backdrop-blur-sm`}>
        <Icon className={`w-8 h-8 text-${color}-400`} />
      </div>
    </div>
  </motion.div>
);

const WeatherCard = ({ weather, delay, onClick }) => (
  <motion.div
    initial={{ opacity: 1, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="p-8 glass-card relative overflow-hidden group min-h-[160px] cursor-pointer transition-transform"
    onClick={onClick}
  >
    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 blur-3xl -mr-20 -mt-20 transition-all"></div>
    <div className="flex items-start justify-between mb-4">
      <div className="flex-1">
        <p className="text-slate-600 text-sm font-semibold mb-2 tracking-wider uppercase">WEATHER CONDITIONS</p>
        {weather ? (
          <>
            <h3 className="stat-value text-3xl text-slate-800">{weather.current.temp}°C</h3>
            <p className="text-slate-600 text-sm mt-1 capitalize">{weather.current.description}</p>
            <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
              <span>💧 {weather.hourly ? weather.hourly[0].humidity : 'N/A'}%</span>
              <span>💨 {weather.current.windspeed} m/s</span>
              {weather.hourly && weather.hourly[0].uv_index && (
                <span>☀️ UV {weather.hourly[0].uv_index}</span>
              )}
            </div>
            {weather.alerts && weather.alerts.length > 0 && (
              <div className="mt-2 flex items-center gap-1">
                <span className="text-xs text-orange-600 font-medium">⚠️ Alert</span>
              </div>
            )}
          </>
        ) : (
          <p className="text-slate-600 text-sm">Weather data unavailable</p>
        )}
      </div>
      <div className="p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-2xl backdrop-blur-sm">
        <Cloud className="w-8 h-8 text-blue-400" />
      </div>
    </div>
    <div className="absolute bottom-4 right-4 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
      Click for details
    </div>
  </motion.div>
);

const BatteryCard = ({ battery, powerPlant, predictions, delay }) => {
  const getBatteryIcon = (soc) => {
    if (soc >= 90) return <BatteryFull className="w-8 h-8 text-green-400" />;
    if (soc >= 60) return <Battery className="w-8 h-8 text-green-400" />;
    if (soc >= 30) return <BatteryLow className="w-8 h-8 text-yellow-400" />;
    return <BatteryLow className="w-8 h-8 text-red-400" />;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Charging': return 'text-green-500';
      case 'Discharging': return 'text-blue-500';
      case 'Idle': return 'text-gray-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="p-8 glass-card relative overflow-hidden group min-h-[200px] cursor-pointer"
      onClick={() => setActiveTab('charging')}
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/5 blur-3xl -mr-20 -mt-20 transition-all" />

      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-slate-600 text-sm font-semibold mb-2 tracking-wider uppercase">SMART BATTERY SYSTEM</p>
          {battery ? (
            <>
              <div className="flex items-center gap-4 mb-3">
                <h3 className="stat-value text-3xl text-slate-800">{battery.soc}%</h3>
                <span className={`text-sm font-medium ${getStatusColor(battery.status)}`}>
                  {battery.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs text-slate-600 mb-3">
                <div>
                  <span className="block">Voltage: {battery.voltage}V</span>
                  <span className="block">Current: {battery.current}A</span>
                </div>
                <div>
                  <span className="block">Temp: {battery.temperature}°C</span>
                  <span className="block">Health: {battery.health || 'N/A'}%</span>
                </div>
              </div>

              {predictions && predictions.predictions && (
                <div className="text-xs text-slate-700 bg-slate-100 rounded-lg p-2">
                  <span className="font-medium">AI Prediction:</span> {predictions.predictions[0]?.recommendedAction}
                  <span className="text-slate-600 ml-2">({predictions.predictions[0]?.confidence}% confidence)</span>
                </div>
              )}
            </>
          ) : (
            <p className="text-slate-600 text-sm">Battery data unavailable</p>
          )}
        </div>
        <div className="p-4 bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl backdrop-blur-sm">
          {battery ? getBatteryIcon(battery.soc) : <Battery className="w-8 h-8 text-green-400" />}
        </div>
      </div>

      {powerPlant && (
        <div className="mt-4 pt-4 border-t border-slate-200/50">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Grid Voltage: {powerPlant.currentVoltage?.toFixed(2)}V</span>
            <span className={`font-medium ${powerPlant.gridStability === 'Stable' ? 'text-green-500' : 'text-red-500'}`}>
              {powerPlant.gridStability}
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [logs, setLogs] = useState([]);
  const [stats, setStats] = useState({ deviceCount: 0, logCount: 0, batteryStats: {} });
  const [isLoading, setIsLoading] = useState(true);
  const [account, setAccount] = useState(null);
  const [selectedTx, setSelectedTx] = useState(null);
  const [weather, setWeather] = useState(null);
  const [showWeatherModal, setShowWeatherModal] = useState(false);
  const [batteryData, setBatteryData] = useState(null);
  const [powerPlantData, setPowerPlantData] = useState(null);
  const [predictions, setPredictions] = useState(null);
  const [selectedBattery, setSelectedBattery] = useState('BATTERY-001');
  const [targetSOC, setTargetSOC] = useState(80);
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [realtimeChartData, setRealtimeChartData] = useState([]);
  const [analyticsRealtimeData, setAnalyticsRealtimeData] = useState([]);

  // Enhanced state variables for new functionality
  const [systemStatus, setSystemStatus] = useState('operational');
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [emergencyMode, setEmergencyMode] = useState(false);
  const [chargingProfiles, setChargingProfiles] = useState([
    { id: 'eco', name: 'Eco Mode', description: 'Slow charging, energy efficient', rate: 10, color: 'green' },
    { id: 'fast', name: 'Fast Charge', description: 'Rapid charging, higher cost', rate: 50, color: 'blue' },
    { id: 'smart', name: 'Smart AI', description: 'AI-optimized based on weather/grid', rate: 'auto', color: 'purple' }
  ]);
  const [selectedProfile, setSelectedProfile] = useState('smart');
  const [systemDiagnostics, setSystemDiagnostics] = useState({
    cpu: 45, memory: 67, network: 23, storage: 34, temperature: 28
  });
  const [alertSettings, setAlertSettings] = useState({
    lowBattery: true, highTemp: true, maintenance: true, gridInstability: true, weatherAlerts: true
  });
  const [scheduledMaintenance, setScheduledMaintenance] = useState([
    { id: 1, battery: 'BATTERY-001', date: '2024-01-15', type: 'Routine Check', status: 'scheduled' },
    { id: 2, battery: 'BATTERY-002', date: '2024-01-20', type: 'Deep Cycle', status: 'scheduled' }
  ]);
  const [performanceMetrics, setPerformanceMetrics] = useState({
    efficiency: 94.2, uptime: 99.8, savings: 12450, co2: 2340
  });
  const [networkStatus, setNetworkStatus] = useState({
    connected: true, latency: 45, devices: 12, bandwidth: 150
  });
  const [userPreferences, setUserPreferences] = useState({
    theme: 'auto', notifications: true, autoBackup: true, dataRetention: 90
  });
  const [activeProcesses, setActiveProcesses] = useState([
    { id: 1, name: 'IoT Data Collection', status: 'running', cpu: 12, memory: 45 },
    { id: 2, name: 'AI Prediction Engine', status: 'running', cpu: 8, memory: 32 },
    { id: 3, name: 'Blockchain Sync', status: 'running', cpu: 15, memory: 28 }
  ]);
  const [backupStatus, setBackupStatus] = useState({
    lastBackup: '2024-01-10 14:30', status: 'success', size: '2.4GB', nextBackup: '2024-01-11 14:30'
  });
  const [securityStatus, setSecurityStatus] = useState({
    firewall: 'active', encryption: 'AES-256', lastScan: '2024-01-10 12:00', threats: 0
  });

  // Generate real-time data for charts
  const generateRealtimeData = () => {
    const data = [];
    const now = new Date();
    for (let i = 19; i >= 0; i--) {
      const time = new Date(now.getTime() - i * 60000); // 1 minute intervals
      data.push({
        time: time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }),
        soc: Math.max(0, Math.min(100, 75 + Math.sin(i * 0.3) * 15 + Math.random() * 5)),
        voltage: 52 + Math.sin(i * 0.2) * 2 + Math.random() * 0.5,
        current: Math.sin(i * 0.4) * 20 + Math.random() * 5,
        temperature: 25 + Math.sin(i * 0.1) * 5 + Math.random() * 2,
        power: Math.abs(Math.sin(i * 0.4) * 15) + Math.random() * 2
      });
    }
    return data;
  };

  const generateNetworkActivityData = () => {
    const data = [];
    const now = new Date();
    for (let i = 23; i >= 0; i--) {
      const time = new Date(now.getTime() - i * 3600000); // 1 hour intervals
      data.push({
        time: time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }),
        transactions: Math.max(1, Math.floor(Math.sin((Date.now() * 0.0001) + i * 0.5) * 8 + 12 + Math.random() * 6))
      });
    }
    return data;
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request network switch/add for Ganache (7545)
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x539' }], // 1337 in hex
          });
        } catch (switchError) {
          // This error code indicates that the chain has not been added to MetaMask.
          if (switchError.code === 4902) {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: '0x539',
                chainName: 'Ganache Local',
                rpcUrls: ['http://127.0.0.1:7545'],
                nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
                blockExplorerUrls: null
              }],
            });
          }
        }

        const provider = new BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
      } catch (err) {
        console.error("Wallet connection failed:", err);
      }
    } else {
      alert("MetaMask not detected. Please install it to use full features.");
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      const handleAccounts = (accounts) => {
        setAccount(accounts.length > 0 ? accounts[0] : null);
      };
      window.ethereum.on('accountsChanged', handleAccounts);
      return () => {
        if (window.ethereum.removeListener) {
            window.ethereum.removeListener('accountsChanged', handleAccounts);
        }
      };
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_BASE = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000';
        const [logsRes, statsRes, weatherRes, batteryRes, powerPlantRes, predictionsRes] = await Promise.all([
          axios.get(`${API_BASE}/api/logs`),
          axios.get(`${API_BASE}/api/stats`),
          axios.get(`${API_BASE}/api/weather`).catch(() => null),
          axios.get(`${API_BASE}/api/battery/${selectedBattery}`).catch(() => null),
          axios.get(`${API_BASE}/api/power-plant`).catch(() => null),
          axios.get(`${API_BASE}/api/predictions`).catch(() => null)
        ]);
        setLogs(logsRes.data);
        setStats(prev => ({ ...prev, ...statsRes.data }));
        if (weatherRes) setWeather(weatherRes.data);
        if (batteryRes) setBatteryData(batteryRes.data);
        if (powerPlantRes) setPowerPlantData(powerPlantRes.data);
        if (predictionsRes) setPredictions(predictionsRes.data);
        setIsLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setIsLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // Update every 5 seconds for battery data
    return () => clearInterval(interval);
  }, [selectedBattery]);

  // Real-time chart data updates
  useEffect(() => {
    const updateRealtimeData = () => {
      setRealtimeChartData(prevData => {
        const now = new Date();
        const newDataPoint = {
          time: now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }),
          val: Math.max(0, Math.min(100, 75 + Math.sin(Date.now() * 0.001) * 15 + Math.random() * 10))
        };
        
        const newData = [...prevData, newDataPoint];
        // Keep only last 20 data points
        return newData.slice(-20);
      });
    };

    // Initialize with some data
    if (realtimeChartData.length === 0) {
      const initialData = [];
      const now = new Date();
      for (let i = 19; i >= 0; i--) {
        const time = new Date(now.getTime() - i * 60000);
        initialData.push({
          time: time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }),
          val: Math.max(0, Math.min(100, 75 + Math.sin(i * 0.3) * 15 + Math.random() * 5))
        });
      }
      setRealtimeChartData(initialData);
    }

    const interval = setInterval(updateRealtimeData, 2000); // Update every 2 seconds
    return () => clearInterval(interval);
  }, []);

  // Analytics real-time data updates
  useEffect(() => {
    const updateAnalyticsData = () => {
      setAnalyticsRealtimeData(prevData => {
        const now = new Date();
        const newDataPoint = {
          hour: now.getHours(),
          total: Math.max(0, Math.min(100, 60 + Math.sin(Date.now() * 0.0005) * 20 + Math.random() * 15))
        };
        
        const newData = [...prevData, newDataPoint];
        // Keep only last 24 data points
        return newData.slice(-24);
      });
    };

    // Initialize with some data
    if (analyticsRealtimeData.length === 0) {
      const initialData = [];
      for (let i = 23; i >= 0; i--) {
        initialData.push({
          hour: (new Date().getHours() - i + 24) % 24,
          total: Math.max(0, Math.min(100, 60 + Math.sin(i * 0.3) * 20 + Math.random() * 10))
        });
      }
      setAnalyticsRealtimeData(initialData);
    }

    const interval = setInterval(updateAnalyticsData, 3000); // Update every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleBatteryControl = async (action, value) => {
    try {
      const API_BASE = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000';
      const payload = { action, batteryId: selectedBattery };

      switch (action) {
        case 'start_charging':
          payload.profile = selectedProfile;
          break;
        case 'set_target_soc':
          payload.targetSOC = parseInt(value);
          break;
        case 'set_charging_profile':
          payload.profile = value;
          setSelectedProfile(value);
          break;
        case 'maintenance_mode':
          payload.enabled = !maintenanceMode;
          setMaintenanceMode(!maintenanceMode);
          break;
        case 'emergency_shutdown':
          if (!confirm('⚠️ EMERGENCY SHUTDOWN: This will immediately stop all charging operations. Are you sure?')) return;
          payload.force = true;
          setEmergencyMode(true);
          break;
        case 'reset_emergency':
          setEmergencyMode(false);
          break;
        case 'optimize_grid':
          payload.weatherData = weather;
          break;
        case 'balance_load':
          payload.targetDistribution = 'equal';
          break;
        case 'schedule_maintenance':
          payload.date = value.date;
          payload.type = value.type;
          break;
        case 'run_diagnostics':
          payload.fullScan = true;
          break;
        case 'update_firmware':
          payload.version = value;
          break;
        case 'toggle_alert':
          setAlertSettings(prev => ({ ...prev, [value]: !prev[value] }));
          return; // Don't make API call for local settings
        case 'clear_alerts':
          setNotifications([]);
          return;
        case 'export_data':
          payload.format = value || 'csv';
          payload.dateRange = '30d';
          break;
        case 'system_backup':
          payload.type = 'full';
          break;
        case 'toggle_theme':
          setUserPreferences(prev => ({ ...prev, theme: prev.theme === 'dark' ? 'light' : 'dark' }));
          return;
        default:
          break;
      }

      const response = await axios.post(`${API_BASE}/api/battery/${selectedBattery}/control`, payload);

      if (response.data.success) {
        // Enhanced success feedback
        const messages = {
          start_charging: `✅ Charging started with ${chargingProfiles.find(p => p.id === selectedProfile)?.name} profile`,
          stop_charging: '✅ Charging stopped successfully',
          set_target_soc: `✅ Target SOC set to ${value}%`,
          maintenance_mode: `✅ Maintenance mode ${maintenanceMode ? 'disabled' : 'enabled'}`,
          emergency_shutdown: '🚨 EMERGENCY SHUTDOWN ACTIVATED',
          reset_emergency: '✅ Emergency mode reset',
          optimize_grid: '✅ Grid optimization initiated',
          balance_load: '✅ Load balancing started',
          run_diagnostics: '✅ System diagnostics started',
          update_firmware: '✅ Firmware update initiated',
          export_data: `✅ Data export started (${payload.format.toUpperCase()})`,
          system_backup: '✅ System backup initiated'
        };

        alert(messages[action] || `✅ ${response.data.message}`);

        // Add notification for important actions
        if (['emergency_shutdown', 'maintenance_mode', 'update_firmware'].includes(action)) {
          setNotifications(prev => [...prev, {
            id: Date.now(),
            type: action === 'emergency_shutdown' ? 'error' : 'info',
            title: action.replace('_', ' ').toUpperCase(),
            message: messages[action],
            time: new Date()
          }]);
        }

        // Refresh battery data
        const batteryResponse = await axios.get(`${API_BASE}/api/battery/${selectedBattery}`);
        if (batteryResponse.data) {
          setBatteryData(batteryResponse.data);
        }
      } else {
        alert(`❌ ${response.data.error}`);
      }
    } catch (error) {
      console.error('Battery control error:', error);
      alert('❌ Failed to control battery. Check system status.');
    }
  };

  // Fetch actual On-Chain Stats via MetaMask when connected
  useEffect(() => {
    if (account && window.ethereum) {
      const fetchOnChain = async () => {
        try {
          const provider = new BrowserProvider(window.ethereum);
          const contractAddress = "0xAbBA9e838112d3f02e61686d983D8796b5aD91A2";
          const abi = [
            "function getDeviceCount() public view returns (uint256)",
            "function getRecordCount() public view returns (uint256)"
          ];
          const contract = new Contract(contractAddress, abi, provider);
          const onChainDevs = await contract.getDeviceCount();
          const onChainRecs = await contract.getRecordCount();
          setStats(prev => ({ 
            ...prev, 
            onChainDevices: Number(onChainDevs),
            onChainRecords: Number(onChainRecs)
          }));
        } catch (e) {
          console.warn("Could not read from Ganache via MetaMask:", e);
        }
      };
      fetchOnChain();
      const onChainInterval = setInterval(fetchOnChain, 5000);
      return () => clearInterval(onChainInterval);
    }
  }, [account]);

  // System diagnostics monitoring
  useEffect(() => {
    const updateDiagnostics = () => {
      setSystemDiagnostics(prev => ({
        cpu: Math.max(10, Math.min(95, prev.cpu + (Math.random() - 0.5) * 10)),
        memory: Math.max(20, Math.min(90, prev.memory + (Math.random() - 0.5) * 8)),
        network: Math.max(5, Math.min(80, prev.network + (Math.random() - 0.5) * 15)),
        storage: Math.max(15, Math.min(85, prev.storage + (Math.random() - 0.5) * 5)),
        temperature: Math.max(20, Math.min(50, prev.temperature + (Math.random() - 0.5) * 3))
      }));
    };

    const interval = setInterval(updateDiagnostics, 5000);
    return () => clearInterval(interval);
  }, []);

  // Network status monitoring
  useEffect(() => {
    const updateNetworkStatus = () => {
      setNetworkStatus(prev => ({
        connected: Math.random() > 0.05, // 95% uptime
        latency: Math.max(10, Math.min(200, prev.latency + (Math.random() - 0.5) * 20)),
        devices: Math.max(8, Math.min(16, prev.devices + Math.floor((Math.random() - 0.5) * 2))),
        bandwidth: Math.max(50, Math.min(300, prev.bandwidth + (Math.random() - 0.5) * 30))
      }));
    };

    const interval = setInterval(updateNetworkStatus, 10000);
    return () => clearInterval(interval);
  }, []);

  // Performance metrics calculation
  useEffect(() => {
    const updatePerformance = () => {
      setPerformanceMetrics(prev => ({
        efficiency: Math.max(85, Math.min(98, prev.efficiency + (Math.random() - 0.5) * 0.5)),
        uptime: Math.max(99, Math.min(99.9, prev.uptime + (Math.random() - 0.5) * 0.01)),
        savings: Math.max(10000, Math.min(20000, prev.savings + (Math.random() - 0.5) * 200)),
        co2: Math.max(1500, Math.min(3500, prev.co2 + (Math.random() - 0.5) * 50))
      }));
    };

    const interval = setInterval(updatePerformance, 15000);
    return () => clearInterval(interval);
  }, []);

  // System health monitoring
  useEffect(() => {
    const checkSystemHealth = () => {
      const issues = [];

      if (systemDiagnostics.cpu > 80) issues.push('high-cpu');
      if (systemDiagnostics.memory > 85) issues.push('high-memory');
      if (systemDiagnostics.temperature > 40) issues.push('high-temp');
      if (!networkStatus.connected) issues.push('network-down');
      if (batteryData && batteryData.soc < 15) issues.push('critical-battery');

      const newStatus = issues.length > 2 ? 'critical' :
                       issues.length > 0 ? 'warning' : 'operational';
      setSystemStatus(newStatus);

      // Auto-generate alerts for system issues
      if (issues.length > 0 && notifications.length < 5) {
        const alerts = {
          'high-cpu': { type: 'warning', title: 'High CPU Usage', message: 'System CPU usage is above 80%' },
          'high-memory': { type: 'warning', title: 'High Memory Usage', message: 'System memory usage is above 85%' },
          'high-temp': { type: 'error', title: 'High Temperature', message: 'System temperature is above 40°C' },
          'network-down': { type: 'error', title: 'Network Down', message: 'Network connection lost' },
          'critical-battery': { type: 'error', title: 'Critical Battery Level', message: 'Battery SOC below 15%' }
        };

        issues.forEach(issue => {
          if (alerts[issue] && !notifications.find(n => n.id === issue)) {
            setNotifications(prev => [...prev, {
              id: issue,
              ...alerts[issue],
              time: new Date()
            }]);
          }
        });
      }
    };

    checkSystemHealth();
    const interval = setInterval(checkSystemHealth, 10000);
    return () => clearInterval(interval);
  }, [systemDiagnostics, networkStatus, batteryData, notifications]);

  const chartData = useMemo(() => {
    if (!logs || logs.length === 0) {
      // Fallback data when no logs are available
      return Array(20).fill(0).map((_, i) => ({
        time: new Date(Date.now() - (19 - i) * 300000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        val: Math.random() * 100 + 50
      }));
    }
    return logs.slice(0, 20).reverse().map((log) => {
        const val = parseFloat(log.data.t_kWh || log.data.power_watt || 0);
        return {
          time: new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
          val: isNaN(val) ? 0 : val
        };
      });
  }, [logs]);

  const analyticsData = useMemo(() => {
    if (!logs || logs.length === 0) {
      // Fallback data for hourly analytics
      return Array(24).fill(0).map((_, i) => ({
        hour: `${i}:00`,
        total: Math.random() * 200 + 100
      }));
    }
    const dataByHour = Array(24).fill(0).map((_, i) => ({ hour: `${i}:00`, total: 0 }));
    logs.forEach(log => {
      const hour = new Date(log.timestamp).getHours();
      dataByHour[hour].total += parseFloat(log.data.t_kWh || 0);
    });
    return dataByHour.filter(d => d.total > 0);
  }, [logs]);

  const deviceShareData = useMemo(() => {
    if (!logs || logs.length === 0) {
      // Fallback data for device share
      return [
        { name: 'BATTERY-001', value: 35 },
        { name: 'BATTERY-002', value: 25 },
        { name: 'BATTERY-003', value: 20 },
        { name: 'BATTERY-004', value: 15 },
        { name: 'Other', value: 5 }
      ];
    }
    const devicesMap = {};
    logs.forEach(log => {
      const devId = log.deviceId || "Other";
      if (!devicesMap[devId]) devicesMap[devId] = 0;
      devicesMap[devId]++;
    });
    return Object.keys(devicesMap).map(key => ({ name: key, value: devicesMap[key] }));
  }, [logs]);

  const systemHealthData = useMemo(() => [
    { subject: 'Uptime', A: 98, fullMark: 100 },
    { subject: 'Latency', A: 92, fullMark: 100 },
    { subject: 'Sync', A: 99, fullMark: 100 },
    { subject: 'Battery', A: 85, fullMark: 100 },
    { subject: 'Signal', A: 90, fullMark: 100 },
  ], []);

  const topDevicesData = useMemo(() => {
    if (!logs || logs.length === 0) {
      // Fallback data for top devices
      return [
        { name: 'BATTERY-001', energy: 245.67 },
        { name: 'BATTERY-002', energy: 189.23 },
        { name: 'BATTERY-003', energy: 156.89 },
        { name: 'BATTERY-004', energy: 134.45 },
        { name: 'BATTERY-005', energy: 98.12 }
      ];
    }
    const map = {};
    logs.forEach(log => {
      const dev = log.deviceId || "Unknown";
      const val = parseFloat(log.data.t_kWh || 0);
      map[dev] = (map[dev] || 0) + val;
    });
    return Object.entries(map)
      .map(([name, energy]) => ({ name, energy: parseFloat(energy.toFixed(2)) }))
      .sort((a, b) => b.energy - a.energy)
      .slice(0, 5);
  }, [logs]);

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: '#f8fafc' }}>
      <div className="gradient-bg"></div>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} account={account} onConnect={connectWallet} />
      
      <div className="flex-1 p-10 overflow-y-auto min-h-screen" style={{ backgroundColor: '#f8fafc' }}>
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-1 logo-text">
                {activeTab === 'dashboard' && 'Grid Guard Dashboard'}
                {activeTab === 'fleet' && 'Fleet Surveillance'}
                {activeTab === 'ledger' && 'Blockchain Explorer'}
                {activeTab === 'analytics' && 'Operational Analytics'}
                {activeTab === 'transactions' && 'On-Chain Transaction Hub'}
            </h2>
            <p className="text-slate-400 text-sm tracking-wide uppercase">
                SYSTEM STATUS: <span className="text-emerald-500 font-bold">Optimized</span> • {logs.length} RECORDS ANCHORED
            </p>
          </div>
          
          <div className="flex gap-4">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-3 glass-card border-slate-600 hover:border-slate-500 transition-all"
              title="Notifications"
            >
              <AlertTriangle className="w-5 h-5 text-slate-300" />
              {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {notifications.length}
                </span>
              )}
            </button>

            <div className="flex items-center gap-3 glass-card px-5 py-2">
              <RefreshCw className={`w-4 h-4 text-cyan-400 ${isLoading ? 'animate-spin' : ''}`} />
              <p className="text-sm font-bold text-slate-200">Real-time Pulse Active</p>
            </div>
            <div className="p-2 border border-slate-600 rounded-xl glass-card hover:bg-slate-700/50 transition-colors cursor-pointer">
              <Server className="w-5 h-5 text-slate-400" />
            </div>
          </div>
        </header>

        {/* Notifications Panel */}
        <AnimatePresence>
          {showNotifications && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="mb-6 glass-card p-6 border-slate-600"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  System Notifications
                </h3>
                <button
                  onClick={() => setShowNotifications(false)}
                  className="p-1 hover:bg-slate-700 rounded transition-colors"
                >
                  <X className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              {notifications.length > 0 ? (
                <div className="space-y-3">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 rounded-lg border ${
                        notification.type === 'error' ? 'bg-red-500/10 border-red-500/30' :
                        notification.type === 'warning' ? 'bg-yellow-500/10 border-yellow-500/30' :
                        'bg-blue-500/10 border-blue-500/30'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-200 mb-1">{notification.title}</h4>
                          <p className="text-sm text-slate-400">{notification.message}</p>
                          <p className="text-xs text-slate-500 mt-2">
                            {notification.time.toLocaleTimeString()}
                          </p>
                        </div>
                        <div className={`p-1 rounded ${
                          notification.type === 'error' ? 'bg-red-500/20' :
                          notification.type === 'warning' ? 'bg-yellow-500/20' :
                          'bg-blue-500/20'
                        }`}>
                          <AlertTriangle className={`w-4 h-4 ${
                            notification.type === 'error' ? 'text-red-400' :
                            notification.type === 'warning' ? 'text-yellow-400' :
                            'text-blue-400'
                          }`} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <AlertTriangle className="w-12 h-12 text-slate-500 mx-auto mb-3" />
                  <p className="text-slate-400">No notifications at this time</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* <AnimatePresence mode="wait"> */}
        <AnimatePresence mode="wait">
            {activeTab === 'dashboard' && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} key="dash">
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        <StatCard title="BATTERY SOC" value={stats.batteryStats?.averageSOC ? `${stats.batteryStats.averageSOC}%` : '85%'} icon={Battery} color="green" delay={0.1} onClick={() => setActiveTab('charging')} />
                        <StatCard title="CHARGING BATTERIES" value={stats.batteryStats?.chargingBatteries || 1} icon={BatteryCharging} color="emerald" delay={0.2} onClick={() => setActiveTab('charging')} />
                        <StatCard title="SYSTEM HEALTH" value={stats.systemHealth || 'Good'} icon={ShieldCheck} color="indigo" delay={0.3} onClick={() => setActiveTab('analytics')} />
                        <WeatherCard weather={weather} delay={0.4} onClick={() => setActiveTab('analytics')} />
                    </section>

                    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        <BatteryCard battery={batteryData} powerPlant={powerPlantData} predictions={predictions} delay={0.1} />
                        <div className="glass-card p-6 cursor-pointer hover:scale-105 transition-transform" onClick={() => setActiveTab('analytics')}>
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <Zap className="w-5 h-5 text-yellow-400" /> Power Plant Status
                            </h3>
                            {powerPlantData ? (
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-slate-600">Voltage</span>
                                        <span className="font-bold text-lg">{powerPlantData.currentVoltage?.toFixed(2)}V</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-slate-600">Frequency</span>
                                        <span className="font-bold">{powerPlantData.frequency?.toFixed(1)}Hz</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-slate-600">Output</span>
                                        <span className="font-bold">{powerPlantData.powerOutput?.toFixed(0)}MW</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-slate-600">Stability</span>
                                        <span className={`font-bold ${powerPlantData.gridStability === 'Stable' ? 'text-green-500' : 'text-red-500'}`}>
                                            {powerPlantData.gridStability}
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-slate-400 text-sm">Power plant data unavailable</p>
                            )}
                        </div>
                        <div className="glass-card p-6 cursor-pointer hover:scale-105 transition-transform" onClick={() => setActiveTab('predictions')}>
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <Brain className="w-5 h-5 text-purple-400" /> AI Insights
                            </h3>
                            {predictions ? (
                                <div className="space-y-3">
                                    <div className="text-sm">
                                        <span className="text-slate-600">Model:</span>
                                        <span className="font-bold ml-2">{predictions.model}</span>
                                    </div>
                                    <div className="text-sm">
                                        <span className="text-slate-600">Accuracy:</span>
                                        <span className="font-bold ml-2 text-green-500">{predictions.accuracy}%</span>
                                    </div>
                                    <div className="text-sm">
                                        <span className="text-slate-600">Next Action:</span>
                                        <span className="font-bold ml-2 text-blue-500">
                                            {predictions.predictions?.[0]?.recommendedAction}
                                        </span>
                                    </div>
                                    <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                                        <p className="text-xs text-slate-600">
                                            LSTM model predicts optimal charging based on weather patterns, grid stability, and battery health.
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-slate-400 text-sm">AI predictions unavailable</p>
                            )}
                        </div>
                        <div className="lg:col-span-2 glass-card p-8">
                            <div className="flex justify-between items-center mb-10">
                                <h3 className="text-lg font-bold flex items-center gap-2">
                                    <Activity className="w-5 h-5 text-cyan-400" /> Live Data Stream
                                </h3>
                                <div className="flex items-center gap-4">
                                    <button 
                                        onClick={() => window.location.reload()} 
                                        className="p-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-lg transition-all"
                                        title="Refresh Data"
                                    >
                                        <RefreshCw className="w-4 h-4 text-cyan-400" />
                                    </button>
                                    <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-lg">
                                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                                            {isLoading ? 'Verifying..' : 'Live'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-64 w-full" style={{ background: 'transparent' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart key={realtimeChartData.length} data={realtimeChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" vertical={false} />
                                        <XAxis dataKey="time" stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} />
                                        <YAxis stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} />
                                        <Tooltip 
                                            contentStyle={{ background: 'rgba(30, 41, 59, 0.95)', border: '1px solid rgba(51, 65, 85, 0.5)', borderRadius: '16px', backdropFilter: 'blur(10px)', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.3)', color: '#f1f5f9' }}
                                            itemStyle={{ color: '#0891b2', fontWeight: 'bold' }}
                                        />
                                        <Line 
                                            type="monotone" 
                                            dataKey="val" 
                                            stroke="#0891b2" 
                                            strokeWidth={3} 
                                            dot={{ fill: '#0891b2', strokeWidth: 2, r: 4 }}
                                            isAnimationActive={true}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="glass-card p-8 cursor-pointer hover:scale-105 transition-transform" onClick={() => setActiveTab('analytics')}>
                            <h3 className="text-lg font-bold mb-6">Device Analytics</h3>
                            <div className="space-y-4">
                                {logs.slice(0, 4).map((log, i) => (
                                    <div key={i} className="flex items-center gap-4 group cursor-pointer p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-all">
                                        <div className="w-10 h-10 flex items-center justify-center bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500/20">
                                            <Zap className="w-5 h-5 text-cyan-400" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-bold truncate">{log.deviceId}</p>
                                            <p className="text-[10px] text-slate-400 uppercase font-medium">Secured On-Chain</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs font-bold text-emerald-400">99.9%</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <div className="glass-card overflow-hidden">
                        <div className="p-8 border-b border-white/5 flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-bold">Transaction Ledger</h3>
                                <p className="text-xs text-white/40 mt-1">Live Ethereum-Anchored Integrity Events</p>
                            </div>
                            <button onClick={() => setActiveTab('ledger')} className="text-xs font-bold text-cyan-400 hover:text-white transition-colors flex items-center gap-1">
                                VIEW ALL LOGS <ChevronRight className="w-3 h-3" />
                            </button>
                        </div>
                        <table className="w-full text-left">
                            <thead className="bg-white/5">
                                <tr>
                                    <th className="p-4 pl-8 text-white/20 text-[10px] uppercase tracking-widest font-bold">Device Hub</th>
                                    <th className="p-4 text-white/20 text-[10px] uppercase tracking-widest font-bold">Anchored Hash</th>
                                    <th className="p-4 text-white/20 text-[10px] uppercase tracking-widest font-bold">Verification Receipt</th>
                                    <th className="p-4 pr-8 text-white/20 text-[10px] uppercase tracking-widest font-bold text-right">Integrity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {logs.slice(0, 5).map((log) => (
                                    <tr key={log._id} className="border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
                                        <td className="p-4 pl-8 text-sm font-medium text-slate-700">{log.deviceId}</td>
                                        <td className="p-4">
                                            <div className="px-3 py-1 bg-cyan-500/5 rounded-lg text-[10px] font-mono text-cyan-600 inline-block border border-cyan-500/10 group-hover:border-cyan-500/20 transition-all">
                                                {log.hash.substring(0, 12)}...
                                            </div>
                                        </td>
                                        <td className="p-4 text-[10px] font-mono text-white/40 group-hover:text-white/60 transition-colors cursor-pointer px-2 flex items-center gap-2">
                                            {log.onChainTx ? (
                                                <>
                                                    <span className="truncate max-w-[100px]">{log.onChainTx.substring(0, 10)}...</span>
                                                    <ExternalLink className="w-3 h-3 text-cyan-400/50" />
                                                </>
                                            ) : 'Processing..'}
                                        </td>
                                        <td className="p-4 pr-8 text-right">
                                            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full uppercase tracking-tighter">Verified</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            )}

            {activeTab === 'analytics' && (
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8 pb-12">
                    <div className="flex justify-between items-center">
                        <div></div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    const dataStr = JSON.stringify(logs, null, 2);
                                    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
                                    const exportFileDefaultName = `battery-data-${new Date().toISOString().split('T')[0]}.json`;
                                    const linkElement = document.createElement('a');
                                    linkElement.setAttribute('href', dataUri);
                                    linkElement.setAttribute('download', exportFileDefaultName);
                                    linkElement.click();
                                }}
                                className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 text-blue-400 rounded-lg font-medium transition-all flex items-center gap-2"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Export Data
                            </button>
                            <button
                                onClick={() => window.print()}
                                className="px-4 py-2 bg-slate-500/20 hover:bg-slate-500/30 border border-slate-500/30 text-slate-400 rounded-lg font-medium transition-all flex items-center gap-2"
                            >
                                <BarChart3 className="w-4 h-4" />
                                Generate Report
                            </button>
                        </div>
                    </div>
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
                        <div className="glass-card p-8">
                            <h3 className="text-lg font-bold mb-8 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-cyan-500" /> Hourly Energy Pulse</h3>
                            <div className="h-64" style={{ background: 'transparent' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart key={analyticsRealtimeData.length} data={analyticsRealtimeData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.03)" vertical={false} />
                                        <XAxis dataKey="hour" stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} />
                                        <YAxis stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} />
                                        <Tooltip contentStyle={{ background: 'rgba(30, 41, 59, 0.95)', border: '1px solid rgba(51, 65, 85, 0.5)', borderRadius: '12px', color: '#f1f5f9' }} />
                                        <Line 
                                            type="monotone" 
                                            dataKey="total" 
                                            stroke="#8b5cf6" 
                                            strokeWidth={3} 
                                            dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                                            isAnimationActive={true}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="glass-card p-8">
                            <h3 className="text-lg font-bold mb-8 flex items-center gap-2"><Smartphone className="w-5 h-5 text-indigo-500" /> Fleet Energy Share</h3>
                            <div className="h-64" style={{ background: 'transparent' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart key={deviceShareData.length}>
                                        <Pie 
                                            data={deviceShareData} 
                                            innerRadius={60} 
                                            outerRadius={80} 
                                            paddingAngle={8} 
                                            dataKey="value"
                                            stroke="none"
                                            isAnimationActive={true}
                                        >
                                            {deviceShareData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={['#0891b2', '#4f46e5', '#8b5cf6', '#ec4899'][index % 4]} />
                                            ))}
                                        </Pie>
                                        <Tooltip contentStyle={{ background: 'rgba(30, 41, 59, 0.95)', border: '1px solid rgba(51, 65, 85, 0.5)', borderRadius: '12px', color: '#f1f5f9' }} />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 glass-card p-8">
                            <h3 className="text-lg font-bold mb-8 flex items-center gap-2"><Activity className="w-5 h-5 text-emerald-500" /> Top Fleet Performers (kWh)</h3>
                            <div className="h-80" style={{ background: 'transparent' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart key={topDevicesData.length} data={topDevicesData} layout="vertical" margin={{ left: 40 }}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" horizontal={false} />
                                        <XAxis type="number" stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} />
                                        <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} width={100} />
                                        <Tooltip cursor={{ fill: 'rgba(0,0,0,0.02)' }} contentStyle={{ background: 'rgba(30, 41, 59, 0.95)', border: '1px solid rgba(51, 65, 85, 0.5)', borderRadius: '12px', color: '#f1f5f9' }} />
                                        <Bar dataKey="energy" radius={[0, 8, 8, 0]} isAnimationActive={true}>
                                            {topDevicesData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={['#0891b2', '#c084fc', '#4f46e5', '#3b82f6', '#8b5cf6'][index % 5]} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="glass-card p-8 flex flex-col items-center justify-center">
                            <h3 className="text-lg font-bold mb-6 self-start flex items-center gap-2"><Zap className="w-5 h-5 text-amber-500" /> System Pulse</h3>
                            <div className="h-64 w-full" style={{ background: 'transparent' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadarChart key={systemHealthData.length} outerRadius={80} data={systemHealthData}>
                                        <PolarGrid stroke="rgba(0,0,0,0.05)" />
                                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                        <Radar name="Health" dataKey="A" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.2} dot isAnimationActive={true} />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="w-full space-y-4 mt-6">
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <p className="text-[10px] uppercase font-bold text-slate-400">Sync Confidence</p>
                                        <p className="text-xs font-bold text-emerald-500">99.9%</p>
                                    </div>
                                    <div className="h-1.5 bg-slate-600 rounded-full overflow-hidden">
                                        <div className="h-full bg-emerald-500 w-[99%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <p className="text-[10px] uppercase font-bold text-slate-400">Node Latency</p>
                                        <p className="text-xs font-bold text-cyan-500">Fast</p>
                                    </div>
                                    <div className="h-1.5 bg-slate-600 rounded-full overflow-hidden">
                                        <div className="h-full bg-cyan-500 w-[94%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="glass-card p-8">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                            <Gauge className="w-6 h-6 text-purple-400" />
                            Performance Metrics Dashboard
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <div className="text-center p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                                <div className="text-2xl font-bold text-green-400 mb-1">99.2%</div>
                                <div className="text-sm text-slate-400">System Uptime</div>
                                <div className="text-xs text-slate-500 mt-1">Last 30 days</div>
                            </div>
                            <div className="text-center p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                                <div className="text-2xl font-bold text-blue-400 mb-1">1.2ms</div>
                                <div className="text-sm text-slate-400">Avg Response Time</div>
                                <div className="text-xs text-slate-500 mt-1">Real-time</div>
                            </div>
                            <div className="text-center p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                                <div className="text-2xl font-bold text-purple-400 mb-1">98.7%</div>
                                <div className="text-sm text-slate-400">Data Accuracy</div>
                                <div className="text-xs text-slate-500 mt-1">Blockchain verified</div>
                            </div>
                            <div className="text-center p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                                <div className="text-2xl font-bold text-cyan-400 mb-1">24/7</div>
                                <div className="text-sm text-slate-400">Monitoring</div>
                                <div className="text-xs text-slate-500 mt-1">Continuous</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h4 className="font-bold text-slate-200">Energy Efficiency Metrics</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                                        <span className="text-slate-300">Round-trip Efficiency</span>
                                        <span className="font-bold text-green-400">94.2%</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                                        <span className="text-slate-300">Charge Rate Optimization</span>
                                        <span className="font-bold text-blue-400">87.5%</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                                        <span className="text-slate-300">Peak Demand Management</span>
                                        <span className="font-bold text-purple-400">91.8%</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                                        <span className="text-slate-300">Grid Stability Contribution</span>
                                        <span className="font-bold text-cyan-400">96.3%</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-bold text-slate-200">Cost Savings Analysis</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                                        <span className="text-slate-300">Monthly Savings</span>
                                        <span className="font-bold text-green-400">$2,847</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                                        <span className="text-slate-300">CO2 Reduction</span>
                                        <span className="font-bold text-blue-400">1.2 tons</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                                        <span className="text-slate-300">Payback Period</span>
                                        <span className="font-bold text-purple-400">3.2 years</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                                        <span className="text-slate-300">ROI</span>
                                        <span className="font-bold text-cyan-400">127%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </motion.div>
            )}

            {activeTab === 'fleet' && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {logs.length > 0 ? (
                        Array.from(new Set(logs.map(l => l.deviceId))).map((deviceId, i) => (
                            <div key={deviceId} className="glass-card p-6 group hover:border-cyan-500/50 transition-all cursor-pointer">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-cyan-500/10 rounded-2xl group-hover:bg-cyan-500/20 transition-all">
                                        <Smartphone className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div className="flex items-center gap-2 bg-emerald-400/10 px-2 py-1 rounded-full">
                                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-tighter">ONLINE</span>
                                    </div>
                                </div>
                                <h4 className="text-lg font-bold mb-1">{deviceId}</h4>
                                <p className="text-xs text-white/40 mb-6">Active energy monitor node streaming secure telemetry hashes.</p>
                                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                                    <div>
                                        <p className="text-white/20 text-[10px] uppercase font-bold tracking-widest mb-1">Packet Log</p>
                                        <p className="text-sm font-bold">{logs.filter(l => l.deviceId === deviceId).length} Units</p>
                                    </div>
                                    <div>
                                        <p className="text-white/20 text-[10px] uppercase font-bold tracking-widest mb-1">Consistency</p>
                                        <p className="text-sm font-bold text-cyan-400">100%</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full p-20 text-center glass-card">
                             <Box className="w-12 h-12 mx-auto mb-4 opacity-10" />
                             <p className="text-white/20">Awaiting device stream emergence..</p>
                        </div>
                    )}
                </motion.div>
            )}

            {activeTab === 'charging' && (
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8 pb-12">
                    {/* Main Charging Control Card */}
                    <div className="glass-card p-8 bg-slate-800/60 border-slate-500/50">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold text-slate-200 flex items-center gap-3">
                                <Settings className="w-7 h-7 text-green-500" />
                                Battery Charging Control
                            </h3>
                            <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                System Online
                            </div>
                        </div>

                        {/* Battery Selection */}
                        <div className="mb-8">
                            <label className="block text-lg font-semibold text-slate-200 mb-3">Select Battery Unit</label>
                            <select
                                value={selectedBattery}
                                onChange={(e) => setSelectedBattery(e.target.value)}
                                className="w-full p-4 border-2 border-slate-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-slate-700/50 text-slate-200 text-lg font-medium"
                            >
                                <option value="BATTERY-001">🔋 Battery Unit 001 - Main Grid</option>
                                <option value="BATTERY-002">☀️ Battery Unit 002 - Solar Array</option>
                                <option value="BATTERY-003">🌪️ Battery Unit 003 - Wind Farm</option>
                                <option value="BATTERY-004">🏠 Battery Unit 004 - Residential</option>
                                <option value="BATTERY-005">🏢 Battery Unit 005 - Commercial</option>
                            </select>
                        </div>
                        {/* Control Buttons Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 p-6 bg-slate-800/30 rounded-xl border border-slate-600/50">
                            {/* Primary Controls */}
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-slate-200 mb-4">Primary Controls</h4>

                                <button
                                    onClick={() => handleBatteryControl('start_charging')}
                                    className="w-full p-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl font-bold text-lg transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-green-400"
                                >
                                    <BatteryCharging className="w-6 h-6" />
                                    Start Charging
                                </button>

                                <button
                                    onClick={() => handleBatteryControl('stop_charging')}
                                    className="w-full p-6 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl font-bold text-lg transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-red-400"
                                >
                                    <Battery className="w-6 h-6" />
                                    Stop Charging
                                </button>
                            </div>

                            {/* Advanced Controls */}
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-slate-200 mb-4">Advanced Controls</h4>

                                <button
                                    onClick={() => handleBatteryControl('maintenance_mode')}
                                    className="w-full p-6 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-xl font-bold text-lg transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-yellow-400"
                                >
                                    <Settings className="w-6 h-6" />
                                    Maintenance Mode
                                </button>

                                <button
                                    onClick={() => handleBatteryControl('emergency_shutdown')}
                                    className="w-full p-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl font-bold text-lg transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-red-500"
                                >
                                    <AlertTriangle className="w-6 h-6" />
                                    Emergency Shutdown
                                </button>
                            </div>
                        </div>

                        {/* Configuration Panel */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {/* Target SOC */}
                            <div className="space-y-3">
                                <label className="block text-lg font-semibold text-slate-200">Target SOC (%)</label>
                                <input
                                    type="number"
                                    min="0"
                                    max="100"
                                    defaultValue="80"
                                    className="w-full p-4 border-2 border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-700/50 text-slate-200 text-lg font-medium"
                                    onChange={(e) => setTargetSOC(e.target.value)}
                                />
                                <button
                                    onClick={() => handleBatteryControl('set_target_soc', targetSOC)}
                                    className="w-full p-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-bold transition-all duration-200 shadow-md hover:shadow-lg"
                                >
                                    Set Target SOC
                                </button>
                            </div>

                            {/* Charging Priority */}
                            <div className="space-y-3">
                                <label className="block text-lg font-semibold text-slate-200">Charging Priority</label>
                                <select className="w-full p-4 border-2 border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-slate-700/50 text-slate-200 text-lg font-medium">
                                    <option value="eco">🌱 Eco Mode (Slow)</option>
                                    <option value="balanced">⚖️ Balanced</option>
                                    <option value="fast">⚡ Fast Charge</option>
                                    <option value="emergency">🚨 Emergency Priority</option>
                                </select>
                            </div>

                            {/* Energy Source */}
                            <div className="space-y-3">
                                <label className="block text-lg font-semibold text-slate-200">Energy Source</label>
                                <select className="w-full p-4 border-2 border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-slate-700/50 text-slate-200 text-lg font-medium">
                                    <option value="grid">🏭 Grid Power</option>
                                    <option value="solar">☀️ Solar Priority</option>
                                    <option value="wind">🌪️ Wind Priority</option>
                                    <option value="mixed">🔄 Mixed Sources</option>
                                </select>
                            </div>
                        </div>

                        {/* Current Status Display */}
                        {batteryData && (
                            <div className="p-6 bg-slate-800/50 rounded-xl border-2 border-slate-600">
                                <h4 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-2">
                                    <Activity className="w-5 h-5 text-blue-500" />
                                    Current Battery Status
                                </h4>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="text-center p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                                        <Battery className="w-8 h-8 text-green-500 mx-auto mb-2" />
                                        <div className="text-2xl font-bold text-slate-200">{batteryData.soc}%</div>
                                        <div className="text-sm font-medium text-slate-400">SOC</div>
                                    </div>

                                    <div className="text-center p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                                        <Zap className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                                        <div className="text-2xl font-bold text-slate-200">{batteryData.voltage}V</div>
                                        <div className="text-sm font-medium text-slate-400">Voltage</div>
                                    </div>

                                    <div className="text-center p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                                        <Activity className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                                        <div className="text-2xl font-bold text-slate-200">{batteryData.current}A</div>
                                        <div className="text-sm font-medium text-slate-400">Current</div>
                                    </div>

                                    <div className="text-center p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                                        <Thermometer className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                                        <div className="text-2xl font-bold text-slate-200">{batteryData.temperature}°C</div>
                                        <div className="text-sm font-medium text-slate-400">Temperature</div>
                                    </div>
                                </div>

                                <div className="mt-4 text-center">
                                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-green-500/20 text-green-400">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                                        Status: {batteryData.status}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            )}

            {activeTab === 'predictions' && (
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8 pb-12">
                    <div className="glass-card p-8">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                            <Brain className="w-6 h-6 text-purple-500" />
                            LSTM AI Predictions
                        </h3>

                        {predictions ? (
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                    <div className="text-center p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                                        <Brain className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                                        <h4 className="font-bold text-lg text-slate-200">{predictions.model}</h4>
                                        <p className="text-sm text-slate-400">Trained Model</p>
                                    </div>
                                    <div className="text-center p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                                        <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                                        <h4 className="font-bold text-lg text-green-400">{predictions.accuracy}%</h4>
                                        <p className="text-sm text-slate-400">Model Accuracy</p>
                                    </div>
                                    <div className="text-center p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                                        <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                                        <h4 className="font-bold text-lg text-slate-200">{new Date(predictions.lastTrained).toLocaleDateString()}</h4>
                                        <p className="text-sm text-slate-400">Last Trained</p>
                                    </div>
                                    <div className="text-center p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                                        <Gauge className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                                        <h4 className="font-bold text-lg text-cyan-400">{predictions.confidence || '92'}%</h4>
                                        <p className="text-sm text-slate-400">Confidence Level</p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-bold text-lg mb-4">24-Hour SOC Predictions</h4>
                                    <div className="h-64" style={{ background: 'transparent' }}>
                                        <ResponsiveContainer width="100%" height="100%">
                                            <LineChart key={predictions?.predictions?.length || 0} data={predictions.predictions?.slice(0, 24) || []}>
                                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.03)" />
                                                <XAxis
                                                    dataKey="hour"
                                                    stroke="#94a3b8"
                                                    fontSize={12}
                                                    tickFormatter={(value) => `${value}:00`}
                                                />
                                                <YAxis
                                                    domain={[0, 100]}
                                                    stroke="#94a3b8"
                                                    fontSize={12}
                                                    tickFormatter={(value) => `${value}%`}
                                                />
                                                <Tooltip
                                                    contentStyle={{
                                                        background: 'rgba(30, 41, 59, 0.95)',
                                                        border: '1px solid rgba(51, 65, 85, 0.5)',
                                                        borderRadius: '12px',
                                                        color: '#f1f5f9'
                                                    }}
                                                    formatter={(value, name) => [`${value}%`, 'Predicted SOC']}
                                                />
                                                <Line
                                                    type="monotone"
                                                    dataKey="predictedSOC"
                                                    stroke="#8b5cf6"
                                                    strokeWidth={3}
                                                    dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                                                    isAnimationActive={true}
                                                />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-bold text-lg mb-4 text-slate-200">Recommended Actions</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {predictions.predictions?.slice(0, 8).map((pred, i) => (
                                            <div key={i} className="p-4 bg-slate-700/50 border border-slate-600 rounded-lg">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="font-bold text-lg text-slate-200">{pred.hour}:00</span>
                                                    <span className={`text-xs px-2 py-1 rounded ${
                                                        pred.recommendedAction === 'Charge' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                                                        pred.recommendedAction === 'Discharge' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                                                        'bg-slate-600 text-slate-400 border border-slate-500/30'
                                                    }`}>
                                                        {pred.recommendedAction}
                                                    </span>
                                                </div>
                                                <div className="text-sm text-slate-400">
                                                    <p>SOC: <span className="text-slate-200 font-medium">{pred.predictedSOC}%</span></p>
                                                    <p>Voltage: <span className="text-slate-200 font-medium">{pred.predictedVoltage}V</span></p>
                                                    <p className="text-xs mt-1">Confidence: <span className="text-cyan-400">{pred.confidence}%</span></p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <Brain className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                                <p className="text-slate-500">AI predictions are being calculated...</p>
                            </div>
                        )}
                    </div>
                </motion.div>
            )}

            {activeTab === 'ledger' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card min-h-[500px] flex flex-col overflow-hidden">
                    <div className="p-8 border-b border-black/5 flex justify-between items-center bg-black/[0.01]">
                        <div className="relative flex-1 max-w-md">
                            <Database className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                            <input 
                                type="text" 
                                placeholder="Query on-chain ledger hashes..." 
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-10 outline-none focus:border-cyan-500/50 transition-all text-[11px] font-mono placeholder:text-white/20"
                            />
                        </div>
                        <div className="flex gap-3">
                            <button className="px-4 py-2 border border-white/10 rounded-xl text-[10px] font-bold hover:bg-white/5 transition-all uppercase tracking-widest">FILTER</button>
                            <button className="px-4 py-2 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-xl text-[10px] font-bold hover:bg-cyan-500/20 transition-all uppercase tracking-widest">EXPORT DATA</button>
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        <table className="w-full text-left">
                            <thead className="bg-white/[0.03] sticky top-0 backdrop-blur-xl z-10">
                                <tr>
                                    <th className="p-5 pl-8 text-white/20 text-[10px] uppercase tracking-widest font-bold">Node Identity</th>
                                    <th className="p-5 text-white/20 text-[10px] uppercase tracking-widest font-bold">Anchored Payload Hash</th>
                                    <th className="p-5 text-white/20 text-[10px] uppercase tracking-widest font-bold">On-Chain Tx Receipt</th>
                                    <th className="p-5 text-white/20 text-[10px] uppercase tracking-widest font-bold">Verification Pulse</th>
                                    <th className="p-5 pr-8 text-white/20 text-[10px] uppercase tracking-widest font-bold text-center">Protocol Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {logs.map((log) => (
                                    <tr key={log._id} className="border-b border-white/5 group hover:bg-white/[0.01] transition-colors">
                                        <td className="p-5 pl-8">
                                            <div className="flex items-center gap-3">
                                                <Smartphone className="w-3.5 h-3.5 text-cyan-400/40" />
                                                <span className="text-xs font-bold">{log.deviceId}</span>
                                            </div>
                                        </td>
                                        <td className="p-5">
                                            <span className="text-[10px] font-mono text-cyan-400/80 group-hover:text-cyan-400 transition-colors bg-cyan-500/5 px-2 py-1 rounded-lg border border-cyan-500/10">
                                                {log.hash.substring(0, 16)}...
                                            </span>
                                        </td>
                                        <td className="p-5">
                                            <div 
                                                className="flex items-center gap-2 group/tx cursor-pointer"
                                                onClick={() => setSelectedTx(log)}
                                            >
                                                <span className="text-[10px] font-mono text-cyan-600 group-hover/tx:text-cyan-500 truncate max-w-[120px]">
                                                    {log.onChainTx || 'Anchoring...'}
                                                </span>
                                                {log.onChainTx && <ExternalLink className="w-2.5 h-2.5 text-cyan-400 group-hover/tx:text-cyan-500 transition-all" />}
                                            </div>
                                        </td>
                                        <td className="p-5">
                                            <div className="flex items-center gap-1.5">
                                                <Clock className="w-3 h-3 text-white/10" />
                                                <span className="text-[10px] font-medium text-white/40">{new Date(log.timestamp).toLocaleTimeString()}</span>
                                            </div>
                                        </td>
                                        <td className="p-5 pr-8 text-center text-right">
                                            <div className="flex items-center justify-center gap-1 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                                                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                                                <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-tighter">Verified</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            )}

            {activeTab === 'transactions' && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 pb-12">
                     <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        {[
                            { label: 'Network', value: 'Ganache Local', icon: Server, color: 'cyan' },
                            { label: 'Latest Block', value: logs.length + 42, icon: Box, color: 'emerald' },
                            { label: 'Avg Gas', value: '21,432 Gwei', icon: Zap, color: 'amber' },
                            { label: 'Sync Status', value: '100%', icon: ShieldCheck, color: 'blue' }
                        ].map((stat, i) => (
                            <div key={i} className="p-4 glass-card border-none bg-slate-50 flex items-center gap-4">
                                <div className={`p-2 bg-${stat.color}-500/10 rounded-lg`}>
                                    <stat.icon className={`w-4 h-4 text-${stat.color}-500`} />
                                </div>
                                <div>
                                    <p className="text-[9px] text-slate-400 uppercase font-black">{stat.label}</p>
                                    <p className="text-sm font-bold text-slate-900">{stat.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="glass-card overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50/50 border-b border-slate-100">
                                <tr>
                                    <th className="p-5 pl-8 text-slate-400 text-[10px] uppercase font-bold">TX Hash</th>
                                    <th className="p-5 text-slate-400 text-[10px] uppercase font-bold">Method</th>
                                    <th className="p-5 text-slate-400 text-[10px] uppercase font-bold">Block</th>
                                    <th className="p-5 text-slate-400 text-[10px] uppercase font-bold">Gas Limit</th>
                                    <th className="p-5 text-slate-400 text-[10px] uppercase font-bold text-center">Receipt</th>
                                </tr>
                            </thead>
                            <tbody>
                                {logs.map((log, i) => (
                                    <tr key={log._id} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                                        <td className="p-5 pl-8">
                                            <span className="text-[11px] font-mono font-bold text-cyan-600">
                                                {log.onChainTx ? log.onChainTx.substring(0, 20) + '...' : '0xpending...'}
                                            </span>
                                        </td>
                                        <td className="p-5">
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                                <span className="text-xs font-bold text-slate-700">logData(string,bytes32)</span>
                                            </div>
                                        </td>
                                        <td className="p-5 font-mono text-[11px] text-slate-500">#{logs.length + 42 - i}</td>
                                        <td className="p-5">
                                            <div className="flex flex-col">
                                                <span className="text-[11px] font-bold text-slate-900">22,841 Gwei</span>
                                                <span className="text-[9px] text-slate-400 font-medium">Standard Priority</span>
                                            </div>
                                        </td>
                                        <td className="p-5 text-center">
                                            <button 
                                                onClick={() => setSelectedTx(log)}
                                                className="px-3 py-1 bg-indigo-500/10 text-indigo-500 text-[10px] font-bold rounded-lg border border-indigo-500/10 hover:bg-indigo-500/20 transition-all cursor-pointer"
                                            >
                                                View Receipt
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            )}

            {/* Explorer Tab */}
            {activeTab === 'explorer' && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 pb-12">
                    {/* Network Overview */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        {[
                            { label: 'Network', value: 'Ganache Local', icon: Server, color: 'cyan' },
                            { label: 'Latest Block', value: logs.length + 42, icon: Box, color: 'emerald' },
                            { label: 'Active Nodes', value: '3', icon: Cpu, color: 'blue' },
                            { label: 'Network Health', value: 'Excellent', icon: ShieldCheck, color: 'green' }
                        ].map((stat, i) => (
                            <div key={i} className="p-4 glass-card border-none bg-slate-50 flex items-center gap-4">
                                <div className={`p-2 bg-${stat.color}-500/10 rounded-lg`}>
                                    <stat.icon className={`w-4 h-4 text-${stat.color}-500`} />
                                </div>
                                <div>
                                    <p className="text-[9px] text-slate-400 uppercase font-black">{stat.label}</p>
                                    <p className="text-sm font-bold text-slate-900">{stat.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Network Activity Chart */}
                    <div className="glass-card p-6">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-cyan-500" />
                            24-Hour Network Activity
                        </h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={generateNetworkActivityData()}>
                                <XAxis 
                                    dataKey="time" 
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 12, fill: '#64748b' }}
                                />
                                <YAxis 
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 12, fill: '#64748b' }}
                                />
                                <Tooltip
                                    contentStyle={{
                                        background: 'rgba(30, 41, 59, 0.95)',
                                        border: '1px solid rgba(51, 65, 85, 0.5)',
                                        borderRadius: '12px',
                                        color: '#f1f5f9'
                                    }}
                                />
                                <Line 
                                    type="monotone" 
                                    dataKey="transactions" 
                                    stroke="#06b6d4" 
                                    strokeWidth={3}
                                    dot={{ fill: '#06b6d4', strokeWidth: 2, r: 4 }}
                                    isAnimationActive={true}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Recent Blocks */}
                    <div className="glass-card overflow-hidden">
                        <div className="p-6 border-b border-slate-100">
                            <h3 className="text-lg font-bold flex items-center gap-2">
                                <Box className="w-5 h-5 text-emerald-500" />
                                Recent Blocks
                            </h3>
                        </div>
                        <div className="divide-y divide-slate-100">
                            {Array.from({ length: 5 }, (_, i) => ({
                                blockNumber: logs.length + 42 - i,
                                timestamp: new Date(Date.now() - i * 120000).toLocaleString(),
                                transactions: Math.floor(Math.random() * 5) + 1,
                                gasUsed: Math.floor(Math.random() * 10000) + 20000,
                                miner: `0x${Math.random().toString(16).substr(2, 8)}...${Math.random().toString(16).substr(2, 8)}`
                            })).map((block, i) => (
                                <div key={i} className="p-6 hover:bg-slate-50/50 transition-colors">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-emerald-500/10 rounded-lg">
                                                <Box className="w-4 h-4 text-emerald-500" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900">Block #{block.blockNumber}</p>
                                                <p className="text-sm text-slate-500">{block.timestamp}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-bold text-slate-700">{block.transactions} txns</p>
                                            <p className="text-xs text-slate-400">{block.gasUsed.toLocaleString()} gas</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-slate-400">Miner:</span>
                                            <span className="font-mono text-xs text-slate-600">{block.miner}</span>
                                        </div>
                                        <button className="text-xs font-bold text-cyan-500 hover:text-cyan-600 transition-colors">
                                            View Details →
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Node Status */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { name: 'Battery Node 1', status: 'Active', latency: '12ms', location: 'Delhi, India' },
                            { name: 'Battery Node 2', status: 'Active', latency: '8ms', location: 'Mumbai, India' },
                            { name: 'Power Plant Hub', status: 'Active', latency: '15ms', location: 'Pune, India' }
                        ].map((node, i) => (
                            <div key={i} className="glass-card p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-3 h-3 rounded-full ${node.status === 'Active' ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
                                        <h4 className="font-bold text-slate-900">{node.name}</h4>
                                    </div>
                                    <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                                        node.status === 'Active' 
                                            ? 'bg-emerald-500/10 text-emerald-600' 
                                            : 'bg-red-500/10 text-red-600'
                                    }`}>
                                        {node.status}
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-sm text-slate-500">Latency</span>
                                        <span className="text-sm font-bold text-slate-900">{node.latency}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-slate-500">Location</span>
                                        <span className="text-sm font-bold text-slate-900">{node.location}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Diagnostics Tab */}
            {activeTab === 'diagnostics' && (
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8 pb-12">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <Activity className="w-7 h-7 text-blue-500" />
                                System Diagnostics
                            </h2>
                            <p className="text-slate-600 mt-1">Real-time monitoring and health assessment</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <button 
                                onClick={() => window.location.reload()} 
                                className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 text-blue-400 rounded-lg font-medium transition-all flex items-center gap-2"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Refresh Diagnostics
                            </button>
                            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-lg">
                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                                    {systemHealth?.overall || 'Good'}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* System Health Overview */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="glass-card p-6 text-center">
                            <h3 className="text-lg font-bold mb-2">Overall Health</h3>
                            <div className="text-4xl font-bold text-green-500 mb-2">
                                {systemHealth?.overall === 'Good' ? '98%' : systemHealth?.overall === 'Warning' ? '85%' : '72%'}
                            </div>
                            <p className="text-slate-600 capitalize">{systemHealth?.overall || 'Good'}</p>
                        </div>
                        <div className="glass-card p-6 text-center">
                            <h3 className="text-lg font-bold mb-2">Network Status</h3>
                            <div className="text-4xl font-bold text-blue-500 mb-2">
                                {networkStatus?.latency ? `${networkStatus.latency}ms` : '12ms'}
                            </div>
                            <p className="text-slate-600">Response Time</p>
                        </div>
                        <div className="glass-card p-6 text-center">
                            <h3 className="text-lg font-bold mb-2">Active Nodes</h3>
                            <div className="text-4xl font-bold text-purple-500 mb-2">
                                {networkStatus?.activeNodes || 3}
                            </div>
                            <p className="text-slate-600">Online Devices</p>
                        </div>
                        <div className="glass-card p-6 text-center">
                            <h3 className="text-lg font-bold mb-2">Data Integrity</h3>
                            <div className="text-4xl font-bold text-cyan-500 mb-2">99.9%</div>
                            <p className="text-slate-600">Blockchain Verified</p>
                        </div>
                    </div>

                    {/* Real-time Diagnostics */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="glass-card p-8">
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <Gauge className="w-5 h-5 text-emerald-500" />
                                Performance Metrics
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <p className="text-sm text-slate-600">CPU Usage</p>
                                        <p className="text-sm font-bold text-slate-700">24%</p>
                                    </div>
                                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-emerald-500 w-[24%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <p className="text-sm text-slate-600">Memory Usage</p>
                                        <p className="text-sm font-bold text-slate-700">67%</p>
                                    </div>
                                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-500 w-[67%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <p className="text-sm text-slate-600">Network I/O</p>
                                        <p className="text-sm font-bold text-slate-700">1.2 MB/s</p>
                                    </div>
                                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-purple-500 w-[45%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <p className="text-sm text-slate-600">Storage Usage</p>
                                        <p className="text-sm font-bold text-slate-700">78%</p>
                                    </div>
                                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-orange-500 w-[78%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-8">
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <Shield className="w-5 h-5 text-blue-500" />
                                Security Status
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="w-5 h-5 text-green-500" />
                                        <span className="font-medium text-green-700">Blockchain Integrity</span>
                                    </div>
                                    <span className="text-sm font-bold text-green-600">Verified</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-center gap-3">
                                        <Lock className="w-5 h-5 text-green-500" />
                                        <span className="font-medium text-green-700">Data Encryption</span>
                                    </div>
                                    <span className="text-sm font-bold text-green-600">Active</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                                    <div className="flex items-center gap-3">
                                        <AlertTriangle className="w-5 h-5 text-yellow-500" />
                                        <span className="font-medium text-yellow-700">Firewall Status</span>
                                    </div>
                                    <span className="text-sm font-bold text-yellow-600">Warning</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-center gap-3">
                                        <Wifi className="w-5 h-5 text-green-500" />
                                        <span className="font-medium text-green-700">Network Security</span>
                                    </div>
                                    <span className="text-sm font-bold text-green-600">Secure</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* System Logs */}
                    <div className="glass-card p-8">
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-slate-500" />
                            Recent System Events
                        </h3>
                        <div className="space-y-3 max-h-64 overflow-y-auto">
                            {[
                                { time: '14:32:15', level: 'INFO', message: 'Battery charging cycle completed successfully', type: 'success' },
                                { time: '14:28:42', level: 'INFO', message: 'AI prediction model updated with new weather data', type: 'info' },
                                { time: '14:25:18', level: 'WARN', message: 'Network latency spike detected (45ms)', type: 'warning' },
                                { time: '14:22:33', level: 'INFO', message: 'Blockchain transaction confirmed', type: 'success' },
                                { time: '14:18:57', level: 'INFO', message: 'System health check passed', type: 'success' },
                                { time: '14:15:22', level: 'ERROR', message: 'Temporary connection loss to node BATTERY-002', type: 'error' },
                                { time: '14:12:08', level: 'INFO', message: 'Weather data updated from API', type: 'info' },
                                { time: '14:08:44', level: 'INFO', message: 'Maintenance schedule updated', type: 'info' }
                            ].map((log, i) => (
                                <div key={i} className={`flex items-center gap-4 p-3 rounded-lg ${
                                    log.type === 'error' ? 'bg-red-50 border border-red-200' :
                                    log.type === 'warning' ? 'bg-yellow-50 border border-yellow-200' :
                                    'bg-slate-50 border border-slate-200'
                                }`}>
                                    <span className="text-xs font-mono text-slate-500">{log.time}</span>
                                    <span className={`px-2 py-1 text-xs font-bold rounded ${
                                        log.level === 'ERROR' ? 'bg-red-100 text-red-700' :
                                        log.level === 'WARN' ? 'bg-yellow-100 text-yellow-700' :
                                        'bg-blue-100 text-blue-700'
                                    }`}>
                                        {log.level}
                                    </span>
                                    <span className="flex-1 text-sm text-slate-700">{log.message}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8 pb-12">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <Settings className="w-7 h-7 text-slate-500" />
                                System Settings
                            </h2>
                            <p className="text-slate-600 mt-1">Configure system preferences and maintenance schedules</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="px-4 py-2 bg-slate-500/20 hover:bg-slate-500/30 border border-slate-500/30 text-slate-400 rounded-lg font-medium transition-all flex items-center gap-2">
                                <Save className="w-4 h-4" />
                                Save Changes
                            </button>
                            <button className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-400 rounded-lg font-medium transition-all flex items-center gap-2">
                                <RotateCcw className="w-4 h-4" />
                                Reset to Defaults
                            </button>
                        </div>
                    </div>

                    {/* Settings Sections */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* User Preferences */}
                        <div className="glass-card p-8">
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <User className="w-5 h-5 text-blue-500" />
                                User Preferences
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Theme</label>
                                    <select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
                                        <option value="light">Light Mode</option>
                                        <option value="dark">Dark Mode</option>
                                        <option value="auto">Auto (System)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Language</label>
                                    <select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
                                        <option value="en">English</option>
                                        <option value="hi">Hindi</option>
                                        <option value="es">Spanish</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Timezone</label>
                                    <select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
                                        <option value="IST">IST (UTC+5:30)</option>
                                        <option value="UTC">UTC</option>
                                        <option value="EST">EST (UTC-5)</option>
                                    </select>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-slate-700">Email Notifications</span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" defaultChecked />
                                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Alert Configuration */}
                        <div className="glass-card p-8">
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <Bell className="w-5 h-5 text-orange-500" />
                                Alert Configuration
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Battery Low Threshold (%)</label>
                                    <input 
                                        type="number" 
                                        min="0" 
                                        max="100" 
                                        defaultValue="20" 
                                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Temperature Alert (°C)</label>
                                    <input 
                                        type="number" 
                                        min="0" 
                                        max="100" 
                                        defaultValue="45" 
                                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-slate-700">Critical Alerts Only</span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
                                    </label>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-slate-700">Maintenance Reminders</span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" defaultChecked />
                                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Maintenance Scheduling */}
                    <div className="glass-card p-8">
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-green-500" />
                            Maintenance Scheduling
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Battery Maintenance</label>
                                <select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white">
                                    <option value="weekly">Weekly</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="quarterly">Quarterly</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">System Health Check</label>
                                <select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white">
                                    <option value="daily">Daily</option>
                                    <option value="weekly">Weekly</option>
                                    <option value="monthly">Monthly</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Data Backup</label>
                                <select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white">
                                    <option value="daily">Daily</option>
                                    <option value="weekly">Weekly</option>
                                    <option value="monthly">Monthly</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* System Configuration */}
                    <div className="glass-card p-8">
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <Cog className="w-5 h-5 text-purple-500" />
                            System Configuration
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Data Retention (Days)</label>
                                <input 
                                    type="number" 
                                    min="1" 
                                    max="365" 
                                    defaultValue="90" 
                                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">API Rate Limit (requests/min)</label>
                                <input 
                                    type="number" 
                                    min="1" 
                                    max="1000" 
                                    defaultValue="100" 
                                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-slate-700">Auto-save Changes</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                                </label>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-slate-700">Debug Mode</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

        {/* Transaction Receipt Modal */}
        <AnimatePresence>
            {selectedTx && (
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4"
                >
                    <motion.div 
                        initial={{ scale: 0.95, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.95, y: 20 }}
                        className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl border border-slate-100 flex flex-col relative"
                    >
                        <button 
                            onClick={() => setSelectedTx(null)}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors"
                        >
                            <X className="w-5 h-5 text-slate-400" />
                        </button>
                        
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-emerald-500/10 rounded-2xl">
                                <ShieldCheck className="w-8 h-8 text-emerald-500" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-800">Transaction Receipt</h3>
                                <p className="text-sm font-bold text-emerald-500 uppercase tracking-widest mt-1">Status: Confirmed on Ganache</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Transaction Hash</p>
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 font-mono text-sm text-slate-700 break-all">
                                    {selectedTx.onChainTx || "0x..."}
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Device Node</p>
                                    <div className="flex items-center gap-2 p-4 bg-indigo-500/5 rounded-xl border border-indigo-500/10 text-indigo-700 font-bold">
                                        <Cpu className="w-4 h-4" />
                                        {selectedTx.deviceId}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Timestamp</p>
                                    <div className="flex items-center gap-2 p-4 bg-slate-50 rounded-xl border border-slate-100 text-slate-600 font-medium text-sm">
                                        <Clock className="w-4 h-4" />
                                        {new Date(selectedTx.timestamp).toLocaleString()}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Anchored Data Hash (SHA-256 Payload)</p>
                                <div className="p-4 bg-cyan-500/5 rounded-xl border border-cyan-500/10 font-mono text-xs text-cyan-700 break-all flex items-center justify-between">
                                    {selectedTx.hash}
                                    <Database className="w-4 h-4 text-cyan-400" />
                                </div>
                            </div>
                            
                            <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-4">
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-slate-400">Gas Used</p>
                                    <p className="font-mono text-sm font-bold text-slate-700">22,841</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-slate-400">Block Conf.</p>
                                    <p className="font-mono text-sm font-bold text-slate-700">1</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-slate-400">Method</p>
                                    <p className="font-mono text-sm font-bold text-slate-700">logData()</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
        
        {/* Weather Modal */}
        <AnimatePresence>
            {showWeatherModal && weather && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setShowWeatherModal(false)}
                >
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="glass-card max-w-4xl w-full max-h-[80vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-8">
                            <div className="flex justify-between items-center mb-8">
                                <div>
                                    <h2 className="text-2xl font-bold flex items-center gap-3">
                                        <Cloud className="w-8 h-8 text-blue-400" />
                                        Weather Analytics - {weather.location}
                                    </h2>
                                    {weather.coordinates && (
                                        <p className="text-sm text-slate-500 mt-1">
                                            Coordinates: {weather.coordinates.lat}°, {weather.coordinates.lon}°
                                        </p>
                                    )}
                                </div>
                                <button 
                                    onClick={() => setShowWeatherModal(false)}
                                    className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            
                            {/* Weather Alerts */}
                            {weather.alerts && weather.alerts.length > 0 && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-bold mb-3 text-orange-600">⚠️ Weather Alerts</h3>
                                    <div className="space-y-2">
                                        {weather.alerts.map((alert, i) => (
                                            <div key={i} className={`p-3 rounded-lg border ${
                                                alert.severity === 'high' ? 'bg-red-50 border-red-200' :
                                                alert.severity === 'moderate' ? 'bg-orange-50 border-orange-200' :
                                                'bg-yellow-50 border-yellow-200'
                                            }`}>
                                                <p className="text-sm font-medium">{alert.icon} {alert.message}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            
                            {/* Current Weather */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                                <div className="glass-card p-6 text-center">
                                    <h3 className="text-lg font-bold mb-2">Temperature</h3>
                                    <div className="text-4xl font-bold text-blue-500 mb-2">{weather.current.temp}°C</div>
                                    <p className="text-slate-600 capitalize">{weather.current.description}</p>
                                </div>
                                <div className="glass-card p-6 text-center">
                                    <h3 className="text-lg font-bold mb-2">Wind Speed</h3>
                                    <div className="text-4xl font-bold text-green-500 mb-2">{weather.current.windspeed} m/s</div>
                                    <p className="text-slate-600">Current conditions</p>
                                </div>
                                <div className="glass-card p-6 text-center">
                                    <h3 className="text-lg font-bold mb-2">Humidity</h3>
                                    <div className="text-4xl font-bold text-purple-500 mb-2">{weather.hourly ? weather.hourly[0].humidity : 'N/A'}%</div>
                                    <p className="text-slate-600">Relative humidity</p>
                                </div>
                                <div className="glass-card p-6 text-center">
                                    <h3 className="text-lg font-bold mb-2">UV Index</h3>
                                    <div className="text-4xl font-bold text-yellow-500 mb-2">{weather.hourly && weather.hourly[0].uv_index ? weather.hourly[0].uv_index : 'N/A'}</div>
                                    <p className="text-slate-600">Sun protection needed</p>
                                </div>
                            </div>
                            
                            {/* 7-Day Forecast */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-4">7-Day Forecast</h3>
                                <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                                    {weather.daily.map((day, i) => (
                                        <div key={i} className="glass-card p-4">
                                            <p className="font-bold text-slate-700 mb-2">{new Date(day.date).toLocaleDateString([], {weekday: 'short'})}</p>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-2xl font-bold text-blue-500">{day.max}°</span>
                                                <span className="text-lg text-slate-500">{day.min}°</span>
                                            </div>
                                            <p className="text-sm text-slate-600 capitalize mb-1">{day.description}</p>
                                            {day.precipitation_probability > 0 && (
                                                <p className="text-xs text-blue-600">🌧️ {day.precipitation_probability}% rain</p>
                                            )}
                                            {day.sunrise && (
                                                <div className="text-xs text-slate-500 mt-1">
                                                    <span>🌅 {new Date(day.sunrise).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                                                    <span className="ml-2">🌇 {new Date(day.sunset).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* 48-Hour Forecast */}
                            <div>
                                <h3 className="text-xl font-bold mb-4">48-Hour Forecast</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                                    {weather.hourly.slice(0, 48).map((hour, i) => (
                                        <div key={i} className="glass-card p-3 text-center">
                                            <p className="text-xs font-bold text-slate-500 mb-1">
                                                {new Date(hour.time).toLocaleDateString([], {month: 'short', day: 'numeric'})}
                                            </p>
                                            <p className="text-xs font-bold text-slate-500 mb-1">
                                                {new Date(hour.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                            </p>
                                            <p className="text-lg font-bold text-blue-500">{hour.temp}°</p>
                                            <p className="text-xs text-slate-600 capitalize mb-1">{hour.description}</p>
                                            <p className="text-xs text-slate-400">{hour.windspeed} m/s</p>
                                            {hour.uv_index > 0 && (
                                                <p className="text-xs text-yellow-600">UV {hour.uv_index}</p>
                                            )}
                                            {hour.precipitation_probability > 0 && (
                                                <p className="text-xs text-blue-600">🌧️ {hour.precipitation_probability}%</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
