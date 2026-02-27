"use client";

import { motion } from "framer-motion";
import { Code2, Zap, LayoutGrid, Sliders, ChevronRight, Activity, Crosshair, Gem } from "lucide-react";

const IndicatorsStrategies = () => {
    const categories = [
        {
            title: "Indicators",
            icon: Activity,
            scripts: [
                { name: "Liquidity Mapper v4", author: "NeonAlpha", users: "12.4k", rating: "4.9" },
                { name: "Smart Money Concepts", author: "LuxAlgo", users: "85.2k", rating: "5.0" },
                { name: "Central Bank Sentiment", author: "GlobalMacro", users: "5.1k", rating: "4.8" },
            ]
        },
        {
            title: "Strategies",
            icon: Crosshair,
            scripts: [
                { name: "Mean Reversion Bot", author: "DeepQuant", users: "2.8k", rating: "4.7" },
                { name: "Trend Follower Pro", author: "MomentumX", users: "15.9k", rating: "4.9" },
                { name: "Order Flow Delta", author: "NeonAlpha", users: "3.2k", rating: "5.0" },
            ]
        },
        {
            title: "Library",
            icon: Gem,
            scripts: [
                { name: "Risk Manager Toolkit", author: "Standard", users: "150k", rating: "4.9" },
                { name: "Candlestick Patterns", author: "Standard", users: "200k", rating: "5.0" },
                { name: "Economic Calendar Sync", author: "NeonAlpha", users: "1.2k", rating: "4.6" },
            ]
        }
    ];

    return (
        <section className="container mx-auto px-6 py-20 border-t border-white/5 bg-[#0D1B2D]/30">
            <div className="text-center mb-16">
                <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-4">Community & Scripts</h2>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">Institutional Library</h3>
                <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                    Access over 100,000 community-built indicators and strategies. Build your own with NeonScript (Pine Compatible).
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categories.map((cat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass p-8 rounded-3xl border-white/5 hover:border-primary/30 transition-all group"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                <cat.icon className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-black uppercase italic tracking-tighter">{cat.title}</h4>
                        </div>

                        <div className="space-y-6">
                            {cat.scripts.map((script, i) => (
                                <div key={i} className="flex flex-col gap-1 cursor-pointer group/script">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-bold group-hover/script:text-primary transition-colors">{script.name}</span>
                                        <div className="flex items-center gap-1 text-[10px] text-slate-500">
                                            <span>⭐ {script.rating}</span>
                                            <span>({script.users})</span>
                                        </div>
                                    </div>
                                    <span className="text-[10px] text-slate-600 font-mono uppercase">By {script.author}</span>
                                </div>
                            ))}
                        </div>

                        <button className="mt-8 pt-6 border-t border-white/5 w-full flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">
                            Explore {cat.title} <ChevronRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                ))}
            </div>

            <div className="mt-20 glass p-10 rounded-[3rem] border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Engineered for Speed</span>
                    <h4 className="text-3xl font-black italic tracking-tighter uppercase">Power your own analysis with NeonScript™</h4>
                    <p className="text-slate-400">Pine-compatible script editor with real-time backtesting and 0.01ms execution.</p>
                </div>
                <div className="flex gap-4">
                    <button className="bg-white text-black px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                        Start Coding
                    </button>
                    <button className="border border-white/10 px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:border-white transition-all">
                        Documentation
                    </button>
                </div>
            </div>
        </section>
    );
};

export default IndicatorsStrategies;
