import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Search, 
  Bell, 
  ChevronRight, 
  ArrowUpRight, 
  ArrowDownLeft,
  Eye,
  EyeOff,
  Repeat,
  Zap,
  MoreHorizontal,
  TrendingUp,
  Globe,
  ShieldCheck
} from 'lucide-react';

// --- Custom SVG Icons for Navigation ---
const MarketsIcon = ({ active }) => (
  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${active ? 'bg-[#facc15] text-black shadow-lg shadow-yellow-500/40' : 'text-gray-400'}`}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
      <rect x="4" y="9" width="8" height="2" rx="0.5" />
      <rect x="12" y="13" width="8" height="2" rx="0.5" />
    </svg>
  </div>
);

const AssetsIcon = ({ active }) => (
  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${active ? 'bg-[#facc15] text-black shadow-lg shadow-yellow-500/40' : 'text-gray-400'}`}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 18h16l-2-4H6l-2 4zM7 13h10l-1.5-3h-7L7 13zM9 9h6l-1-2H10l-1 2z" />
    </svg>
  </div>
);

const HomeIconCustom = ({ active }) => (
  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${active ? 'bg-[#facc15] text-black shadow-lg shadow-yellow-500/40' : 'text-gray-400'}`}>
    <Home size={24} />
  </div>
);

const HomePage = ({ prices }) => (
  <div className="pb-32">
    <div className="flex justify-between items-center px-4 py-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#facc15] rounded-full flex items-center justify-center">
          <ShieldCheck size={18} strokeWidth={3} color="black" />
        </div>
        <span className="text-white font-bold tracking-tight">OPT COIN</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold">J</div>
        <span className="text-gray-300 text-sm">jwagoc...</span>
      </div>
    </div>

    <div className="px-4">
      <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-black border border-gray-800 shadow-2xl">
        <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Banner" />
        <div className="absolute inset-0 p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-white tracking-widest italic uppercase">OPT COIN</h2>
          <div className="h-1.5 w-14 bg-cyan-400 mt-3 animate-pulse"></div>
        </div>
      </div>
    </div>

    <div className="flex justify-between px-6 py-6 border-b border-gray-900">
      {[
        { name: 'ETH/USDT', price: prices.ETH, change: '-0.02' },
        { name: 'BTC/USDT', price: prices.BTC, change: '-0.16' },
        { name: 'TRX/USDT', price: '0.34396', change: '-0.77' }
      ].map(coin => (
        <div key={coin.name} className="text-center">
          <p className="text-[10px] text-gray-500 font-bold uppercase">{coin.name}</p>
          <p className={`text-xs my-1 font-bold ${parseFloat(coin.change) >= 0 ? 'text-green-500' : 'text-red-500'}`}>{coin.change}%</p>
          <p className="text-lg font-bold text-white tabular-nums">{coin.price}</p>
          <div className={`h-6 w-16 mx-auto mt-2 bg-opacity-20 border-b ${parseFloat(coin.change) >= 0 ? 'bg-green-900 border-green-500' : 'bg-red-900 border-red-500'}`}></div>
        </div>
      ))}
    </div>

    <div className="mx-4 my-4 bg-[#1a1c22] rounded-lg px-4 py-3 flex items-center gap-3">
      <Bell size={16} className="text-yellow-500" />
      <p className="text-xs text-gray-400 truncate">Optcoin demonstrates commitment to legal ...</p>
    </div>

    <div className="grid grid-cols-4 gap-4 px-4 my-8">
      {[
        { label: 'Recharge', icon: ArrowUpRight, color: 'text-yellow-500' },
        { label: 'Withdraw', icon: ArrowDownLeft, color: 'text-gray-400' },
        { label: 'Convert', icon: Zap, color: 'text-gray-400' },
        { label: 'Language', icon: Globe, color: 'text-gray-400' },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <div className="bg-[#1a1c22] p-4 rounded-xl border border-gray-800 relative">
            <item.icon size={28} className={item.color} />
          </div>
          <span className="text-[11px] text-gray-300 font-medium">{item.label}</span>
        </div>
      ))}
    </div>

    <div className="px-4">
      <h3 className="text-xl font-bold text-white mb-6">Hot</h3>
      <div className="flex justify-between text-[10px] text-gray-500 font-bold mb-4 uppercase tracking-tighter">
        <span>Pair</span>
        <span className="mr-8">Price</span>
        <span>24h change</span>
      </div>
      <div className="flex justify-between items-center py-4 border-b border-gray-900">
        <span className="text-white font-bold text-lg">ZEC</span>
        <span className="text-white font-medium text-lg ml-10 tabular-nums">{prices.ZEC}</span>
        <div className="bg-[#22c55e] text-white px-4 py-2 rounded-lg font-black text-base min-w-[90px] text-center">
          +2.27%
        </div>
      </div>
    </div>
  </div>
);

const TradingInterface = ({ type, prices }) => (
  <div className="pb-32 px-4 pt-6">
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-black text-white uppercase italic tracking-tighter">{type}</h1>
        <span className="bg-yellow-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded">LIVE</span>
      </div>
    </div>

    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-7 space-y-4">
        <div className="flex bg-[#1a1c22] rounded-lg p-1 border border-gray-800">
          <button className="flex-1 py-3 text-center rounded bg-green-500 text-black font-black text-sm">BUY</button>
          <button className="flex-1 py-3 text-center rounded text-gray-500 font-black text-sm">SELL</button>
        </div>
        <div className="bg-[#1a1c22] border border-gray-800 rounded p-3 flex justify-between items-center">
          <span className="text-gray-500 text-xs">Price</span>
          <span className="text-white font-bold tabular-nums">{prices.BTC}</span>
        </div>
        <button className="w-full py-4 bg-green-500 text-black font-black rounded-xl shadow-lg shadow-green-900/40">Open Long</button>
      </div>

      <div className="col-span-5 text-right space-y-1">
        <div className="text-[10px] text-gray-500 font-bold mb-2 text-left uppercase">Order Book</div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex justify-between text-[11px] tabular-nums">
            <span className="text-red-500">{(parseFloat(prices.BTC) + (i * 1.2)).toFixed(2)}</span>
            <span className="text-gray-400">0.{Math.floor(Math.random() * 99)}</span>
          </div>
        ))}
        <div className="py-2 text-lg font-black text-white border-y border-gray-900 my-2 tabular-nums">
          {prices.BTC}
        </div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex justify-between text-[11px] tabular-nums">
            <span className="text-green-500">{(parseFloat(prices.BTC) - (i * 1.2)).toFixed(2)}</span>
            <span className="text-gray-400">1.{Math.floor(Math.random() * 99)}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const MarketsPage = ({ prices }) => (
  <div className="pb-32 px-4 py-6">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-white">Markets</h1>
      <div className="flex-1 max-w-[150px] ml-4 relative">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        <input className="w-full bg-[#1a1c22] rounded-full py-2 pl-10 pr-4 text-sm text-gray-300 border border-gray-800 focus:outline-none" placeholder="Search" />
      </div>
    </div>
    <div className="flex gap-8 mb-8 border-b border-gray-900 overflow-x-auto no-scrollbar">
      {['Digital Currency', 'Forex', 'Precious metals'].map((tab, i) => (
        <button key={tab} className={`pb-3 text-sm font-bold whitespace-nowrap ${i === 0 ? 'text-white border-b-2 border-yellow-500' : 'text-gray-500'}`}>
          {tab}
        </button>
      ))}
    </div>
    <div className="space-y-6">
      {[
        { id: 'BTC', name: 'BTC', price: prices.BTC, change: '-0.16', turnover: '429.7M' },
        { id: 'ETH', name: 'ETH', price: prices.ETH, change: '-0.02', turnover: '377.8M' },
        { id: 'ZEC', name: 'ZEC', price: prices.ZEC, change: '+2.27', turnover: '12.5M', positive: true },
      ].map((coin) => (
        <div key={coin.id} className="flex justify-between items-center">
          <div className="w-1/3">
            <span className="text-white font-bold text-lg block">{coin.name}</span>
            <span className="text-[10px] text-gray-600 block mt-1 uppercase tracking-widest">Vol {coin.turnover}</span>
          </div>
          <div className="text-white font-bold text-lg flex-1 text-center tabular-nums">
            {coin.price}
          </div>
          <div className={`w-[90px] ${coin.positive ? 'bg-[#22c55e]' : 'bg-[#ef4444]'} text-white py-2 rounded-lg font-black text-xs text-center`}>
            {coin.change}%
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AssetsPage = () => {
  const [hideBalance, setHideBalance] = useState(false);
  return (
    <div className="pb-32 px-4 py-6">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold text-white">Overview</h1>
        <div className="bg-[#1a1c22] rounded-lg px-3 py-2 flex items-center gap-2 border border-gray-800">
          <span className="text-gray-300 font-bold text-sm">Demo Account</span>
          <Repeat size={16} className="text-white" />
        </div>
      </div>
      <div className="mb-10">
        <div className="flex items-center gap-2 text-gray-400 text-xs font-bold mb-2 uppercase">
          <span>Total valuation</span>
          <button onClick={() => setHideBalance(!hideBalance)}>
            {hideBalance ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-4xl font-bold text-white tracking-tighter tabular-nums">{hideBalance ? '****' : '335.73'}</span>
          <span className="text-gray-500 text-xs font-bold uppercase bg-gray-900 px-2 py-1 rounded">USDT</span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Recharge', icon: ArrowUpRight },
          { label: 'Withdraw', icon: ArrowDownLeft },
          { label: 'Transfer', icon: Repeat },
          { label: 'Convert', icon: Zap },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="bg-[#1a1c22] p-4 rounded-xl border border-gray-800">
              <item.icon size={28} className="text-gray-400" />
            </div>
            <span className="text-[11px] text-gray-300 font-medium">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        {['Exchange', 'Trade', 'Perpetual'].map((label, i) => (
          <div key={label} className={`p-6 rounded-2xl border ${i === 1 ? 'border-gray-700 bg-[#14151a]' : 'border-gray-800'}`}>
            <div className="flex justify-between items-center">
              <span className="text-white font-bold text-lg">{label}</span>
              <div className="text-right">
                <p className="text-white font-black text-lg">${hideBalance ? '****' : (i === 1 ? '335.73' : '0.00')}</p>
                <p className={`${i === 1 ? 'text-green-500' : 'text-gray-600'} text-xs font-bold`}>{i === 1 ? '100%' : '0%'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Navbar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', label: 'Home', component: HomeIconCustom },
    { id: 'markets', label: 'Markets', component: MarketsIcon },
    { id: 'futures', label: 'Futures', icon: Repeat },
    { id: 'perpetual', label: 'Perpetual', icon: Zap },
    { id: 'assets', label: 'Assets', component: AssetsIcon },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1a1c22] border-t border-gray-800 flex justify-around items-center pt-2 pb-6 px-1 z-50">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const IconComp = tab.component;
        const StaticIcon = tab.icon;
        return (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} className="flex flex-col items-center min-w-[64px]">
            {IconComp ? <IconComp active={isActive} /> : (
              <div className={`p-2 transition-all ${isActive ? 'text-[#facc15]' : 'text-gray-500'}`}>
                <StaticIcon size={24} />
              </div>
            )}
            <span className={`text-[11px] mt-1 ${isActive ? 'text-[#facc15] font-bold' : 'text-gray-500'}`}>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [prices, setPrices] = useState({ BTC: '115499.92', ETH: '4479.63', ZEC: '51.781' });

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev => ({
        BTC: (parseFloat(prev.BTC) + (Math.random() * 8 - 4)).toFixed(2),
        ETH: (parseFloat(prev.ETH) + (Math.random() * 2 - 1)).toFixed(2),
        ZEC: (parseFloat(prev.ZEC) + (Math.random() * 0.05 - 0.025)).toFixed(3)
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <div className="max-w-md mx-auto min-h-screen bg-[#0d0e12] relative shadow-2xl border-x border-gray-900">
        {activeTab === 'home' && <HomePage prices={prices} />}
        {activeTab === 'markets' && <MarketsPage prices={prices} />}
        {activeTab === 'futures' && <TradingInterface type="Futures" prices={prices} />}
        {activeTab === 'perpetual' && <TradingInterface type="Perpetual" prices={prices} />}
        {activeTab === 'assets' && <AssetsPage />}
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
        body { font-family: 'Inter', sans-serif; margin: 0; background: #000; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
