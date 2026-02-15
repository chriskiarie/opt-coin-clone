import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Home, BarChart2, Repeat, Zap, Wallet, Search, Bell, Headset, 
  ArrowUpRight, ArrowDownLeft, Eye, EyeOff, MoreHorizontal 
} from 'lucide-react';

// --- Mock Data matching your screenshots ---
const CRYPTO_DATA = [
  { id: 'BTC', name: 'BTC', price: '115499.92', change: -0.16, turnover: '429773424.66' },
  { id: 'ETH', name: 'ETH', price: '4479.63', change: -0.02, turnover: '377858030.54' },
  { id: 'ADA', name: 'ADA', price: '0.8853', change: -0.87, turnover: '32967753.44' },
  { id: 'BCH', name: 'BCH', price: '595.93', change: 0.25, turnover: '3001851.18' },
  { id: 'DASH', name: 'DASH', price: '23.034', change: -1.00, turnover: '262877' },
  { id: 'DOGE', name: 'DOGE', price: '0.26604', change: -0.59, turnover: '110353518.84' },
  { id: 'DOT', name: 'DOT', price: '4.31', change: -0.87, turnover: '9440663.83' },
];

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showBalance, setShowBalance] = useState(true);

  // Components defined inside App to ensure single-file reliability for now
  const HomePage = () => (
    <div className="p-4 pb-24">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold">j</div>
          <span className="text-white text-sm font-semibold">jwagoc...</span>
        </div>
        <div className="flex gap-4">
          <Search size={20} className="text-gray-400" />
          <Bell size={20} className="text-gray-400" />
        </div>
      </div>

      <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[2/1] bg-gradient-to-br from-blue-900 to-black flex flex-col items-center justify-center border border-gray-800">
        <h1 className="text-3xl font-bold tracking-widest text-white italic">OPT COIN</h1>
        <div className="w-12 h-1 bg-cyan-400 mt-2"></div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-8 text-center border-b border-gray-900 pb-6">
        <div>
          <div className="text-[10px] text-gray-500 uppercase font-bold">ETH/USDT</div>
          <div className="text-red-500 text-xs font-bold">-0.02%</div>
          <div className="text-lg font-black text-white">4479.58</div>
        </div>
        <div>
          <div className="text-[10px] text-gray-500 uppercase font-bold">BTC/USDT</div>
          <div className="text-red-500 text-xs font-bold">-0.16%</div>
          <div className="text-lg font-black text-white">115500.31</div>
        </div>
        <div>
          <div className="text-[10px] text-gray-500 uppercase font-bold text-red-400">TRX/USDT</div>
          <div className="text-red-500 text-xs font-bold">-0.77%</div>
          <div className="text-lg font-black text-red-500">0.34396</div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Recharge', icon: ArrowUpRight },
          { label: 'Withdraw', icon: ArrowDownLeft },
          { label: 'Convert', icon: Repeat },
          { label: 'Contact Us', icon: Headset },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-[#1e2128] flex items-center justify-center border border-gray-800">
              <item.icon className="text-yellow-500" size={24} />
            </div>
            <span className="text-[11px] text-gray-400 font-medium">{item.label}</span>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-white font-bold mb-4">Hot</h3>
        <div className="bg-[#1e2128] rounded-xl p-4 flex justify-between items-center border border-gray-800">
          <span className="text-white font-bold">ZEC</span>
          <span className="text-white font-medium">51.781</span>
          <div className="bg-[#00c087] text-white px-4 py-1.5 rounded-lg font-black text-sm">
            +2.27%
          </div>
        </div>
      </div>
    </div>
  );

  const MarketsPage = () => (
    <div className="p-4 pb-24">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Markets</h1>
        <Search size={20} className="text-gray-400" />
      </div>
      <div className="flex gap-6 mb-6 overflow-x-auto border-b border-gray-900 pb-2">
        <span className="text-yellow-500 border-b-2 border-yellow-500 pb-2 font-bold whitespace-nowrap">Digital Currency</span>
        <span className="text-gray-500 font-bold whitespace-nowrap">Forex</span>
        <span className="text-gray-500 font-bold whitespace-nowrap">Precious metals</span>
      </div>
      <div className="flex justify-between text-[10px] text-gray-500 mb-4 font-bold">
        <span>Pair / Turnover</span>
        <div className="flex gap-10">
          <span>Price</span>
          <span>24h change</span>
        </div>
      </div>
      <div className="space-y-6">
        {CRYPTO_DATA.map((coin) => (
          <div key={coin.id} className="flex justify-between items-center">
            <div>
              <div className="text-white font-black">{coin.id}</div>
              <div className="text-[10px] text-gray-600">Turnover {coin.turnover}</div>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-white font-bold text-sm">{coin.price}</span>
              <div className={`w-20 py-2 rounded-lg text-center text-sm font-black text-white ${coin.change >= 0 ? 'bg-[#00c087]' : 'bg-[#f6465d]'}`}>
                {coin.change > 0 ? '+' : ''}{coin.change}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const AssetsPage = () => (
    <div className="p-4 pb-24">
      <div className="flex justify-between items-start mb-10">
        <h1 className="text-2xl font-bold text-white">Overview</h1>
        <div className="text-right">
          <div className="flex items-center gap-1 text-gray-300 text-sm font-bold justify-end">
            Demo Account <Repeat size={14}/>
          </div>
          <div className="text-[10px] text-gray-500 font-bold">(Switch to)</div>
        </div>
      </div>
      <div className="mb-8">
        <div className="flex items-center gap-2 text-gray-500 text-xs font-bold mb-1 uppercase">
          Total asset valuation <button onClick={() => setShowBalance(!showBalance)}>{showBalance ? <Eye size={14}/> : <EyeOff size={14}/>}</button>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-black text-white">{showBalance ? '335.73' : '******'}</span>
          <span className="text-gray-400 font-bold text-sm">USDT</span>
        </div>
        <div className="text-[#00c087] text-xs font-bold mt-1">$2.2 (0.655%) Today's earnings</div>
      </div>
      <div className="grid grid-cols-4 gap-2 mb-10">
        {[
          { label: 'Recharge', icon: ArrowUpRight },
          { label: 'Withdraw', icon: ArrowDownLeft },
          { label: 'Transfer', icon: Repeat },
          { label: 'Convert', icon: Zap },
        ].map((item, i) => (
          <div key={i} className="bg-[#1e2128] rounded-xl p-3 border border-gray-800 flex flex-col items-center gap-2">
            <item.icon className="text-gray-400" size={20} />
            <span className="text-[10px] text-gray-500 font-bold">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <h3 className="text-white font-bold border-b-2 border-yellow-500 w-fit pb-1">My account</h3>
        {['Exchange', 'Trade', 'Perpetual'].map((acc, i) => (
          <div key={i} className="bg-[#1e2128] p-4 rounded-xl border border-gray-800 flex justify-between items-center">
            <span className="text-white font-bold">{acc}</span>
            <div className="text-right">
              <div className="text-white font-black">{acc === 'Trade' ? '$335.73' : '$0.00'}</div>
              <div className="text-[#00c087] text-[10px] font-bold">{acc === 'Trade' ? '100.00%' : '0.00%'}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0d0e12] text-white">
      <div className="max-w-md mx-auto min-h-screen relative shadow-2xl bg-[#0d0e12]">
        {activeTab === 'home' && <HomePage />}
        {activeTab === 'markets' && <MarketsPage />}
        {activeTab === 'assets' && <AssetsPage />}
        {(activeTab === 'futures' || activeTab === 'perpetual') && <div className="p-10 text-center text-gray-500 pt-40">Trading pair engine loading...</div>}

        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-[#1a1c22]/95 backdrop-blur-md border-t border-gray-900 flex justify-around items-center py-2 z-50">
          {[
            { id: 'home', label: 'Home', icon: Home },
            { id: 'markets', label: 'Markets', icon: BarChart2 },
            { id: 'futures', label: 'Futures', icon: Repeat },
            { id: 'perpetual', label: 'Perpetual', icon: Zap },
            { id: 'assets', label: 'Assets', icon: Wallet },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className="flex flex-col items-center flex-1">
                <div className={`p-1.5 rounded-full transition-all ${isActive ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-500/20' : 'text-gray-500'}`}>
                  <tab.icon size={20} />
                </div>
                <span className={`text-[10px] mt-1 font-bold ${isActive ? 'text-yellow-500' : 'text-gray-600'}`}>{tab.label}</span>
              </button>
            )
          })}
        </nav>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
