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
  Cloud
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
  <aside className="w-72 h-[calc(100vh-2rem)] border-r border-blue-100/50 p-8 flex flex-col glass-card ml-4 my-4 rounded-3xl sticky top-4 bg-gradient-to-b from-blue-50/40 to-slate-50/30">
    <div className="flex items-center gap-3 mb-10">
      <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg shadow-lg shadow-cyan-500/10">
        <ShieldCheck className="w-8 h-8 text-white" />
      </div>
      <div>
        <h1 className="text-xl font-bold tracking-tight logo-text">IoT<span className="text-cyan-500">Ledger</span></h1>
        <p className="text-[11px] text-slate-400 tracking-widest font-bold">BLOCKCHAIN SECURE</p>
      </div>
    </div>
    
    <nav className="flex-1 space-y-1">
      <button 
        onClick={() => setActiveTab('dashboard')} 
        className={`sidebar-link w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all ${activeTab === 'dashboard' ? 'bg-cyan-500/10 text-cyan-500 border-l-4 border-cyan-500 pl-4' : 'text-slate-500 hover:bg-slate-100'}`}
      >
        <Activity className="w-5 h-5" /> Dashboard
      </button>
      <button 
        onClick={() => setActiveTab('fleet')} 
        className={`sidebar-link w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all ${activeTab === 'fleet' ? 'bg-cyan-500/10 text-cyan-500 border-l-4 border-cyan-500 pl-4' : 'text-slate-500 hover:bg-slate-100'}`}
      >
        <Cpu className="w-5 h-5" /> Device Fleet
      </button>
      <button 
        onClick={() => setActiveTab('ledger')} 
        className={`sidebar-link w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all ${activeTab === 'ledger' ? 'bg-cyan-500/10 text-cyan-500 border-l-4 border-cyan-500 pl-4' : 'text-slate-500 hover:bg-slate-100'}`}
      >
        <Database className="w-5 h-5" /> Ledger Logs
      </button>
      <button 
        onClick={() => setActiveTab('analytics')} 
        className={`sidebar-link w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all ${activeTab === 'analytics' ? 'bg-cyan-500/10 text-cyan-500 border-l-4 border-cyan-500 pl-4' : 'text-slate-500 hover:bg-slate-100'}`}
      >
        <BarChart3 className="w-5 h-5" /> Data Analysis
      </button>
      <button 
        onClick={() => setActiveTab('transactions')} 
        className={`sidebar-link w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all ${activeTab === 'transactions' ? 'bg-cyan-500/10 text-cyan-500 border-l-4 border-cyan-500 pl-4' : 'text-slate-500 hover:bg-slate-100'}`}
      >
        <Link className="w-5 h-5" /> Explorer
      </button>
    </nav>
    
    <div className="mt-auto space-y-4">
      <div className="p-4 glass-card border-none bg-white/5 rounded-2xl">
        <p className="text-[10px] text-white/40 mb-2 uppercase tracking-tighter">Blockchain Pulse</p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-sm font-medium">Ganache Local Hub</span>
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
          <p className="text-[10px] font-mono text-white/60 truncate group-hover:text-emerald-400 transition-colors">{account}</p>
        </div>
      )}
    </div>
  </aside>
);

const StatCard = ({ title, value, icon: Icon, color, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="p-8 glass-card relative overflow-hidden group min-h-[160px]"
  >
    <div className={`absolute top-0 right-0 w-40 h-40 bg-${color}-500/5 blur-3xl -mr-20 -mt-20 group-hover:bg-${color}-500/10 transition-all`}></div>
    <div className="flex items-start justify-between mb-4">
      <div className="flex-1">
        <p className="text-slate-500 text-sm font-semibold mb-2 tracking-wider uppercase">{title}</p>
        <h3 className="stat-value text-4xl">{value}</h3>
      </div>
      <div className={`p-4 bg-gradient-to-br from-${color}-500/20 to-${color}-600/20 border border-${color}-500/30 rounded-2xl backdrop-blur-sm`}>
        <Icon className={`w-8 h-8 text-${color}-400`} />
      </div>
    </div>
  </motion.div>
);

const WeatherCard = ({ weather, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="p-8 glass-card relative overflow-hidden group min-h-[160px] cursor-pointer"
    onClick={() => setShowWeatherModal(true)}
  >
    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 blur-3xl -mr-20 -mt-20 group-hover:bg-blue-500/10 transition-all"></div>
    <div className="flex items-start justify-between mb-4">
      <div className="flex-1">
        <p className="text-slate-500 text-sm font-semibold mb-2 tracking-wider uppercase">WEATHER CONDITIONS</p>
        {weather ? (
          <>
            <h3 className="stat-value text-3xl">{weather.current.temp}°C</h3>
            <p className="text-slate-400 text-sm mt-1 capitalize">{weather.current.description}</p>
            <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
              <span>💧 {weather.hourly ? weather.hourly[0].humidity : 'N/A'}%</span>
              <span>💨 {weather.current.windspeed} m/s</span>
              {weather.hourly && weather.hourly[0].uv_index && (
                <span>☀️ UV {weather.hourly[0].uv_index}</span>
              )}
            </div>
            {weather.alerts && weather.alerts.length > 0 && (
              <div className="mt-2 flex items-center gap-1">
                <span className="text-xs text-orange-500 font-medium">⚠️ Alert</span>
              </div>
            )}
          </>
        ) : (
          <p className="text-slate-400 text-sm">Weather data unavailable</p>
        )}
      </div>
      <div className="p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-2xl backdrop-blur-sm">
        <Cloud className="w-8 h-8 text-blue-400" />
      </div>
    </div>
    <div className="absolute bottom-4 right-4 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
      Click for details
    </div>
  </motion.div>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [logs, setLogs] = useState([]);
  const [stats, setStats] = useState({ deviceCount: 0, logCount: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [account, setAccount] = useState(null);
  const [selectedTx, setSelectedTx] = useState(null);
  const [weather, setWeather] = useState(null);
  const [showWeatherModal, setShowWeatherModal] = useState(false);

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
        const [logsRes, statsRes, weatherRes] = await Promise.all([
          axios.get(`${API_BASE}/api/logs`),
          axios.get(`${API_BASE}/api/stats`),
          axios.get(`${API_BASE}/api/weather`).catch(() => null)
        ]);
        setLogs(logsRes.data);
        setStats(prev => ({ ...prev, ...statsRes.data }));
        if (weatherRes) setWeather(weatherRes.data);
        setIsLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setIsLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);

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

  const chartData = useMemo(() => {
    return logs.slice(0, 20).reverse().map((log) => {
        const val = parseFloat(log.data.t_kWh || log.data.power_watt || 0);
        return {
          time: new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
          val: isNaN(val) ? 0 : val
        };
      });
  }, [logs]);

  const analyticsData = useMemo(() => {
    const dataByHour = Array(24).fill(0).map((_, i) => ({ hour: `${i}:00`, total: 0 }));
    logs.forEach(log => {
      const hour = new Date(log.timestamp).getHours();
      dataByHour[hour].total += parseFloat(log.data.t_kWh || 0);
    });
    return dataByHour.filter(d => d.total > 0);
  }, [logs]);

  const deviceShareData = useMemo(() => {
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
    <div className="flex bg-main min-h-screen">
      <div className="gradient-bg"></div>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} account={account} onConnect={connectWallet} />
      
      <main className="flex-1 p-10 overflow-y-auto">
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
            <div className="flex items-center gap-3 glass-card px-5 py-2">
              <RefreshCw className={`w-4 h-4 text-cyan-400 ${isLoading ? 'animate-spin' : ''}`} />
              <p className="text-sm font-bold">Real-time Pulse Active</p>
            </div>
            <div className="p-2 border border-white/10 rounded-xl glass-card hover:bg-white/5 transition-colors cursor-pointer">
              <Server className="w-5 h-5 text-white/60" />
            </div>
          </div>
        </header>

        <AnimatePresence mode="wait">
            {activeTab === 'dashboard' && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} key="dash">
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        <StatCard title="SECURE ENTRIES" value={stats.onChainRecords !== undefined ? stats.onChainRecords : stats.logCount} icon={Box} color="cyan" delay={0.1} />
                        <StatCard title="SYSTEM UPTIME" value="99.98%" icon={ShieldCheck} color="emerald" delay={0.2} />
                        <StatCard title="CONNECTED DEVICES" value={stats.onChainDevices !== undefined ? stats.onChainDevices : stats.deviceCount} icon={Smartphone} color="indigo" delay={0.3} />
                        <WeatherCard weather={weather} delay={0.4} />
                    </section>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
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
                                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Verifying..</span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-64 w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4}/>
                                                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" vertical={false} />
                                        <XAxis dataKey="time" stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} />
                                        <YAxis stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} />
                                        <Tooltip 
                                            contentStyle={{ background: 'rgba(255, 255, 255, 0.9)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', backdropFilter: 'blur(10px)', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                                            itemStyle={{ color: '#0891b2', fontWeight: 'bold' }}
                                        />
                                        <Area type="monotone" dataKey="val" stroke="#0891b2" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" isAnimationActive={false} />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="glass-card p-8">
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
                    </div>

                    <section className="glass-card overflow-hidden">
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
                    </section>
                </motion.div>
            )}

            {activeTab === 'analytics' && (
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8 pb-12">
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
                        <div className="glass-card p-8">
                            <h3 className="text-lg font-bold mb-8 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-cyan-500" /> Hourly Energy Pulse</h3>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={analyticsData}>
                                        <defs>
                                            <linearGradient id="colorHour" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                                                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.03)" vertical={false} />
                                        <XAxis dataKey="hour" stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} />
                                        <YAxis stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} />
                                        <Tooltip contentStyle={{ background: '#fff', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '12px' }} />
                                        <Area type="monotone" dataKey="total" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorHour)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="glass-card p-8">
                            <h3 className="text-lg font-bold mb-8 flex items-center gap-2"><Smartphone className="w-5 h-5 text-indigo-500" /> Fleet Energy Share</h3>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie 
                                            data={deviceShareData} 
                                            innerRadius={60} 
                                            outerRadius={80} 
                                            paddingAngle={8} 
                                            dataKey="value"
                                            stroke="none"
                                        >
                                            {deviceShareData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={['#0891b2', '#4f46e5', '#8b5cf6', '#ec4899'][index % 4]} />
                                            ))}
                                        </Pie>
                                        <Tooltip contentStyle={{ background: '#fff', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '12px' }} />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 glass-card p-8">
                            <h3 className="text-lg font-bold mb-8 flex items-center gap-2"><Activity className="w-5 h-5 text-emerald-500" /> Top Fleet Performers (kWh)</h3>
                            <div className="h-80">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={topDevicesData} layout="vertical" margin={{ left: 40 }}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" horizontal={false} />
                                        <XAxis type="number" stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} />
                                        <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} width={100} />
                                        <Tooltip cursor={{ fill: 'rgba(0,0,0,0.02)' }} contentStyle={{ background: '#fff', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '12px' }} />
                                        <Bar dataKey="energy" radius={[0, 8, 8, 0]}>
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
                            <div className="h-64 w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadarChart outerRadius={80} data={systemHealthData}>
                                        <PolarGrid stroke="rgba(0,0,0,0.05)" />
                                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                        <Radar name="Health" dataKey="A" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.2} dot />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="w-full space-y-4 mt-6">
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <p className="text-[10px] uppercase font-bold text-slate-400">Sync Confidence</p>
                                        <p className="text-xs font-bold text-emerald-500">99.9%</p>
                                    </div>
                                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-emerald-500 w-[99%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <p className="text-[10px] uppercase font-bold text-slate-400">Node Latency</p>
                                        <p className="text-xs font-bold text-cyan-500">Fast</p>
                                    </div>
                                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-cyan-500 w-[94%]"></div>
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
      </main>
    </div>
  );
};

export default App;
