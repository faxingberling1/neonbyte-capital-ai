"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, ChevronRight, PieChart, Activity, Globe, Zap, ArrowRight } from "lucide-react";

const Sparkline = ({ data, color }: { data: number[], color: string }) => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min;
    const width = 100;
    const height = 30;
    const points = data.map((d, i) => ({
        x: (i / (data.length - 1)) * width,
        y: height - ((d - min) / range) * height
    }));

    const pathData = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`;

    return (
        <svg width={width} height={height} className="overflow-visible">
            <motion.path
                d={pathData}
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />
        </svg>
    );
};

const MarketSummary = () => {
    const categories = [
        {
            title: "Major Indices",
            items: [
                { name: "S&P 500", ticker: "SPX", value: "6,908.87", change: "-0.54%", trend: "down", data: [6950, 6930, 6940, 6910, 6920, 6908] },
                { name: "Nasdaq 100", ticker: "NDX", value: "25,034.37", change: "-1.16%", trend: "down", data: [25300, 25200, 25250, 25100, 25050, 25034] },
                { name: "Dow 30", ticker: "DJI", value: "48,152.40", change: "-0.12%", trend: "down", data: [48200, 48180, 48190, 48160, 48170, 48152] },
            ]
        },
        {
            title: "Crypto Market",
            items: [
                { name: "Bitcoin", ticker: "BTCUSD", value: "67,513.00", change: "+0.04%", trend: "up", data: [67000, 67200, 67100, 67400, 67300, 67513] },
                { name: "Ethereum", ticker: "ETHUSD", value: "2,036.20", change: "+0.42%", trend: "up", data: [2010, 2025, 2015, 2030, 2028, 2036] },
                { name: "Solana", ticker: "SOLUSD", value: "142.50", change: "-2.10%", trend: "down", data: [148, 146, 147, 144, 143, 142] },
            ],
            extra: { label: "Bitcoin Dominance", value: "58.48%", trend: "up" }
        },
        {
            title: "Commodities",
            items: [
                { name: "Gold", ticker: "GC1!", value: "5,203.50", change: "+0.18%", trend: "up", data: [5180, 5195, 5190, 5200, 5198, 5203] },
                { name: "Crude Oil", ticker: "CL1!", value: "65.23", change: "+0.03%", trend: "up", data: [64.8, 65.1, 64.9, 65.2, 65.1, 65.23] },
                { name: "Silver", ticker: "SI1!", value: "32.40", change: "-0.45%", trend: "down", data: [32.8, 32.6, 32.7, 32.5, 32.45, 32.4] },
            ]
        },
        {
            title: "Forex Major",
            items: [
                { name: "EUR/USD", ticker: "EURUSD", value: "1.0845", change: "+0.08%", trend: "up", data: [1.0830, 1.0840, 1.0835, 1.0842, 1.0840, 1.0845] },
                { name: "GBP/USD", ticker: "GBPUSD", value: "1.2650", change: "-0.15%", trend: "down", data: [1.2680, 1.2660, 1.2670, 1.2655, 1.2660, 1.2650] },
                { name: "USD/JPY", ticker: "USDJPY", value: "150.45", change: "+0.42%", trend: "up", data: [149.8, 150.2, 150.0, 150.4, 150.3, 150.45] },
            ]
        },
        {
            title: "Economy",
            items: [
                { name: "US 10Y Yield", ticker: "US10Y", value: "4.250%", change: "+1.81%", trend: "up", data: [4.15, 4.20, 4.18, 4.23, 4.22, 4.25] },
                { name: "Dollar Index", ticker: "DXY", value: "97.700", change: "+1.81%", trend: "up", data: [96.5, 97.2, 96.8, 97.5, 97.4, 97.7] },
                { name: "Natural Gas", ticker: "NG1!", value: "2.826", change: "-0.04%", trend: "down", data: [2.85, 2.83, 2.84, 2.82, 2.83, 2.826] },
            ]
        }
    ];

    return (
        <section className="container mx-auto px-6 py-24 border-t border-white/5 bg-[#0A1628]/30">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                <div>
                    <div className="flex items-center gap-2 text-primary mb-3">
                        <Zap className="w-4 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Real-Time Terminal</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">Market Summary</h2>
                    <p className="mt-4 text-slate-500 text-sm font-medium">Join 100 million traders taking the future into their own hands.</p>
                </div>
                <div className="flex gap-4">
                    <div className="glass px-6 py-3 rounded-2xl flex flex-col">
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Global Cap</span>
                        <span className="text-xl font-black italic tracking-tighter">$2.31T <span className="text-red-500 text-xs ml-2">-22.86%</span></span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {categories.map((cat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-[#111A2E]/50 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-primary/50 transition-all group flex flex-col"
                    >
                        <div className="p-6 border-b border-white/5 flex items-center justify-between">
                            <h3 className="font-black uppercase tracking-widest text-[11px] italic">{cat.title}</h3>
                            <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
                        </div>

                        <div className="flex-1 p-2">
                            {cat.items.map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-4 hover:bg-white/5 rounded-3xl transition-all cursor-pointer group/item relative overflow-hidden">
                                    <div className="flex flex-col z-10">
                                        <span className="text-[11px] font-black text-slate-300 group-hover/item:text-white transition-colors">{item.name}</span>
                                        <span className="text-[9px] font-mono text-slate-600 uppercase italic font-bold">{item.ticker}</span>
                                    </div>

                                    <div className="flex flex-col items-end z-10">
                                        <div className="text-xs font-black tracking-tighter italic">{item.value}</div>
                                        <div className={`text-[9px] font-mono font-bold flex items-center gap-1 ${item.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                                            {item.trend === 'up' ? <TrendingUp className="w-2.5 h-2.5" /> : <TrendingDown className="w-2.5 h-2.5" />}
                                            {item.change}
                                        </div>
                                    </div>

                                    <div className="absolute right-4 bottom-2 opacity-20 group-hover/item:opacity-60 transition-opacity">
                                        <Sparkline data={item.data} color={item.trend === 'up' ? '#10b981' : '#ef4444'} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {cat.extra && (
                            <div className="p-6 bg-primary/5 border-t border-white/5">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{cat.extra.label}</span>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-black italic tracking-tighter">{cat.extra.value}</span>
                                        <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary" style={{ width: cat.extra.value }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="p-4 px-6 bg-white/5 flex items-center justify-between group-hover:bg-primary transition-all cursor-pointer">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white">View Full List</span>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white" />
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass p-10 rounded-[3rem] border-white/5 flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <PieChart className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                        <h4 className="text-lg font-black uppercase italic tracking-tighter">Market Dominance</h4>
                        <p className="text-xs text-slate-500 font-medium">BTC: 58.48% | ETH: 10.65%</p>
                    </div>
                </div>
                <div className="glass p-10 rounded-[3rem] border-white/5 flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center">
                        <Activity className="w-8 h-8 text-green-500" />
                    </div>
                    <div>
                        <h4 className="text-lg font-black uppercase italic tracking-tighter">Volatility Index</h4>
                        <p className="text-xs text-slate-500 font-medium">VIX: 14.28 | Fear & Greed: 72</p>
                    </div>
                </div>
                <div className="glass p-10 rounded-[3rem] border-white/5 flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                        <Globe className="w-8 h-8 text-blue-500" />
                    </div>
                    <div>
                        <h4 className="text-lg font-black uppercase italic tracking-tighter">24h Vol Volume</h4>
                        <p className="text-xs text-slate-500 font-medium">$842.1B worldwide transactions</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketSummary;
