"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, ChevronRight, Globe, Zap, Activity } from "lucide-react";
import LiveStreamChart from "./LiveStreamChart";

const BigSparkline = ({ data, color, height = 200, showFill = true }: { data: number[], color: string, height?: number, showFill?: boolean }) => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min;
    const width = 800;
    const points = data.map((d, i) => ({
        x: (i / (data.length - 1)) * width,
        y: height - ((d - min) / range) * height
    }));

    const pathData = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`;
    const fillData = `${pathData} L ${width},${height} L 0,${height} Z`;

    return (
        <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible" preserveAspectRatio="none">
            {showFill && (
                <motion.path
                    d={fillData}
                    fill={`url(#gradient-${color.replace('#', '')})`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 1 }}
                />
            )}
            <defs>
                <linearGradient id={`gradient-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.5" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
            </defs>
            <motion.path
                d={pathData}
                fill="none"
                stroke={color}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
            />
        </svg>
    );
};

const MarketDataTerminal = () => {
    return (
        <section className="container mx-auto px-6 py-20 bg-[#0A1628]/20">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
                {/* Main Hero Chart: S&P 500 */}
                <div className="xl:col-span-2 glass rounded-[3rem] p-8 border-white/5 relative overflow-hidden group">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center font-black text-white text-sm">BTC</div>
                            <div>
                                <h3 className="text-xl font-black tracking-tighter uppercase italic flex items-center gap-2">
                                    Bitcoin <span className="bg-white/10 px-2 py-0.5 rounded text-[10px] font-mono not-italic text-slate-400">BTCUSDT</span>
                                </h3>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-green-500">Live Terminal Stream</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="bg-white/5 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400">Binance Node Connection</div>
                        </div>
                    </div>

                    <div className="h-[300px] w-full mt-10">
                        <LiveStreamChart symbol="BTCUSDT" color="#10b981" height={300} />
                    </div>

                    <div className="flex justify-between mt-6 text-[10px] font-mono font-bold text-slate-600 uppercase">
                        <span>10:00</span>
                        <span>11:00</span>
                        <span>12:00</span>
                        <span>13:00</span>
                        <span>14:00</span>
                        <span>15:00</span>
                        <span>16:00</span>
                    </div>
                </div>

                {/* Major Indices Sidebar */}
                <div className="glass rounded-[3rem] p-8 border-white/5">
                    <h4 className="text-sm font-black uppercase tracking-widest italic mb-8">Major Indices</h4>
                    <div className="space-y-6">
                        {[
                            { name: "Nasdaq 100", ticker: "NDX", value: "25,034.37", change: "-1.16%", trend: "down", color: "bg-blue-500" },
                            { name: "Japan 225", ticker: "NI225", value: "58,834.35", change: "+0.14%", trend: "up", color: "bg-blue-900" },
                            { name: "SSE Composite", ticker: "000001", value: "4,139.52", change: "-0.17%", trend: "down", color: "bg-slate-700" },
                            { name: "FTSE 100", ticker: "UKX", value: "10,846.70", change: "+0.37%", trend: "up", color: "bg-red-800" },
                            { name: "DAX", ticker: "DAX", value: "25,289.02", change: "+0.45%", trend: "up", color: "bg-blue-600" },
                            { name: "CAC 40", ticker: "PX1", value: "8,620.93", change: "+0.72%", trend: "up", color: "bg-green-700" },
                        ].map((idx, i) => (
                            <div key={i} className="flex items-center justify-between group/row cursor-pointer hover:translate-x-1 transition-transform">
                                <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 ${idx.color} rounded-full flex items-center justify-center text-[10px] font-black text-white`}>
                                        {idx.name.split(' ').map(w => w[0]).join('')}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-black group-hover/row:text-primary transition-colors">{idx.name}</span>
                                        <span className="text-[9px] font-bold text-slate-500 font-mono italic">{idx.ticker}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs font-bold font-mono tracking-tighter">{idx.value}</div>
                                    <div className={`text-[9px] font-black font-mono ${idx.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>{idx.change}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-10 text-[10px] font-black uppercase tracking-[0.2em] text-primary flex items-center justify-center gap-2 hover:gap-4 transition-all">
                        See all major indices <ChevronRight className="w-3 h-3" />
                    </button>
                </div>
            </div>

            {/* Specialized Analysis Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {/* Column 1: Crypto Analysis */}
                <div className="glass rounded-[3rem] p-8 border-white/5 flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"><Activity className="w-4 h-4" /></div>
                        <h4 className="text-sm font-black uppercase tracking-widest italic">Crypto Market Cap</h4>
                    </div>
                    <div className="mb-6">
                        <div className="text-2xl font-black tracking-tighter">2.32 <span className="text-xs font-mono text-slate-500">T USD</span></div>
                        <div className="text-red-500 text-xs font-mono font-black">-22.41%</div>
                    </div>
                    <div className="h-20 mb-8">
                        <BigSparkline data={[2.8, 2.7, 2.5, 2.4, 2.45, 2.3, 2.32]} color="#ef4444" height={80} showFill={false} />
                        <div className="text-[9px] text-center font-bold text-slate-600 mt-2 uppercase tracking-widest">1 Month</div>
                    </div>
                    <div className="space-y-4 pt-6 border-t border-white/5">
                        <div className="text-[10px] font-black uppercase tracking-widest mb-4">Bitcoin Dominance</div>
                        <div className="flex justify-between text-[9px] mb-2 font-bold">
                            <span>BTC 58.50%</span>
                            <span>ETH 10.67%</span>
                            <span>OTH 30.83%</span>
                        </div>
                        <div className="flex h-1.5 rounded-full overflow-hidden">
                            <div className="h-full bg-orange-500" style={{ width: '58.5%' }} />
                            <div className="h-full bg-blue-500" style={{ width: '10.6%' }} />
                            <div className="h-full bg-slate-500" style={{ width: '30.9%' }} />
                        </div>
                    </div>
                    <div className="mt-8 space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-orange-500/20 text-orange-500 rounded-full flex items-center justify-center text-[10px] font-black italic">B</div>
                                <span className="text-[11px] font-black italic">Bitcoin <span className="text-[9px] text-slate-500 not-italic font-mono">BTCUSD</span></span>
                            </div>
                            <div className="text-right">
                                <div className="text-[11px] font-bold">67,922</div>
                                <div className="text-[10px] font-black text-green-500">+0.64%</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-blue-500/20 text-blue-500 rounded-full flex items-center justify-center text-[10px] font-black italic">E</div>
                                <span className="text-[11px] font-black italic">Ethereum <span className="text-[9px] text-slate-500 not-italic font-mono">ETHUSD</span></span>
                            </div>
                            <div className="text-right">
                                <div className="text-[11px] font-bold">2,053.0</div>
                                <div className="text-[10px] font-black text-green-500">+1.24%</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Column 2: Currencies & Commodities */}
                <div className="glass rounded-[3rem] p-8 border-white/5 flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center"><Globe className="w-4 h-4" /></div>
                        <h4 className="text-sm font-black uppercase tracking-widest italic">US Dollar Index</h4>
                    </div>
                    <div className="mb-6">
                        <div className="text-2xl font-black tracking-tighter">97.702 <span className="text-xs font-mono text-slate-500">USD</span></div>
                        <div className="text-green-500 text-xs font-mono font-black">+1.81%</div>
                    </div>
                    <div className="h-20 mb-8">
                        <BigSparkline data={[95, 96, 95.5, 97, 96.8, 97.4, 97.7]} color="#10b981" height={80} showFill={false} />
                        <div className="text-[9px] text-center font-bold text-slate-600 mt-2 uppercase tracking-widest">1 Month</div>
                    </div>
                    <div className="space-y-6 pt-6 border-t border-white/5">
                        <div className="flex items-center justify-between cursor-pointer hover:bg-white/5 p-2 rounded-xl transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center"><Activity className="w-4 h-4" /></div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-black">Crude Oil</span>
                                    <span className="text-[9px] text-slate-500 font-mono italic">CL1!</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-xs font-bold">65.27</div>
                                <div className="text-[9px] font-black text-green-500">+0.09%</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between cursor-pointer hover:bg-white/5 p-2 rounded-xl transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center"><Activity className="w-4 h-4" /></div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-black">Natural Gas</span>
                                    <span className="text-[9px] text-slate-500 font-mono italic">NG1!</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-xs font-bold">2.824</div>
                                <div className="text-[9px] font-black text-red-500">-0.11%</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between cursor-pointer hover:bg-white/5 p-2 rounded-xl transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-yellow-600 rounded-lg flex items-center justify-center"><Activity className="w-4 h-4" /></div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-black">Gold</span>
                                    <span className="text-[9px] text-slate-500 font-mono italic">GC1!</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-xs font-bold">5,201.9</div>
                                <div className="text-[9px] font-black text-green-500">+0.15%</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Column 3: Economy Analysis */}
                <div className="glass rounded-[3rem] p-8 border-white/5 flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center"><Zap className="w-4 h-4" /></div>
                        <h4 className="text-sm font-black uppercase tracking-widest italic">US 10-Year Yield</h4>
                    </div>
                    <div className="mb-6">
                        <div className="text-2xl font-black tracking-tighter">3.998 <span className="text-xs font-mono text-slate-500">%</span></div>
                        <div className="text-red-500 text-xs font-mono font-black">-1.50%</div>
                    </div>
                    <div className="h-20 mb-8">
                        <BigSparkline data={[4.1, 4.05, 4.08, 3.98, 4.01, 3.99, 3.998]} color="#ef4444" height={80} showFill={false} />
                        <div className="text-[9px] text-center font-bold text-slate-600 mt-2 uppercase tracking-widest">1 Month</div>
                    </div>
                    <div className="space-y-6 pt-6 border-t border-white/5">
                        <div className="text-[10px] font-black uppercase tracking-widest mb-2">Annual Inflation Rate</div>
                        <div className="h-24 flex items-end justify-between gap-1 px-2">
                            {[0.4, 0.6, 0.5, 0.7, 0.6, 0.8, 0.7, 0.9, 0.95, 0.9, 0.85, 0.8].map((v, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${v * 100}%` }}
                                    className="w-full bg-blue-600/60 rounded-t-sm"
                                />
                            ))}
                        </div>
                        <div className="flex justify-between text-[8px] font-mono text-slate-600 font-bold px-1">
                            <span>2025</span>
                            <span>APR</span>
                            <span>JUL</span>
                            <span>NOV</span>
                        </div>
                        <div className="pt-4 space-y-2">
                            <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">US Interest Rate</div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="flex flex-col">
                                    <span className="text-[8px] font-black uppercase text-slate-600">Actual</span>
                                    <span className="text-xs font-black">3.75%</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[8px] font-black uppercase text-slate-600">Forecast</span>
                                    <span className="text-xs font-black italic">--</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[8px] font-black uppercase text-slate-600">Next Release</span>
                                    <span className="text-[9px] font-black">Mar 18</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketDataTerminal;
