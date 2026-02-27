"use client";

import { motion } from "framer-motion";
import { Newspaper, TrendingUp, Cpu, Globe, ArrowUpRight, ArrowDownRight, Clock } from "lucide-react";

const FeaturedNews = () => {
    const news = [
        {
            title: "Bitcoin Surges Past $100k as Institutional Adoption Peaks",
            category: "CRYPTO",
            time: "14:20 UTC",
            impact: "HIGH",
            change: "+5.2%",
            trend: "up",
        },
        {
            title: "Fed Interest Rate Decision: FOMC Minutes Reveal Hawkish Stance",
            category: "MARKET",
            time: "12:45 UTC",
            impact: "CRITICAL",
            change: "-0.4%",
            trend: "down",
        },
        {
            title: "ECB Signals Potential Policy Shift Amid Rising Inflation",
            category: "FOREX",
            time: "10:15 UTC",
            impact: "MEDIUM",
            change: "+0.1%",
            trend: "up",
        },
        {
            title: "Tech Giants See Volatility Increase Pre-Market Trading",
            category: "EQUITIES",
            time: "09:30 UTC",
            impact: "MEDIUM",
            change: "-1.2%",
            trend: "down",
        },
    ];

    return (
        <section className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                    <div className="flex items-center gap-2 text-primary mb-2">
                        <Activity className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Intelligence Feed</span>
                    </div>
                    <h2 className="text-4xl font-black uppercase tracking-tighter">
                        Market <span className="text-muted-foreground">Pulse</span>
                    </h2>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        SERVER STATUS: OPTIMAL
                    </div>
                    <button className="px-6 py-2 glass border border-white/5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                        Filter By Asset
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {news.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group flex items-start gap-6 p-6 glass rounded-2xl hover:bg-white/5 transition-all cursor-pointer border-l-2 border-transparent hover:border-primary"
                    >
                        <div className="flex flex-col items-center justify-center min-w-[80px] text-center border-r border-white/5 pr-6">
                            <span className="text-[10px] font-bold text-muted-foreground mb-1 uppercase">{item.category}</span>
                            <span className="text-sm font-mono font-bold">{item.time}</span>
                        </div>

                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <span className={`text-[8px] font-black px-2 py-0.5 rounded ${item.impact === 'CRITICAL' ? 'bg-red-500 text-white' :
                                        item.impact === 'HIGH' ? 'bg-orange-500 text-white' : 'bg-zinc-800 text-zinc-400'
                                    }`}>
                                    {item.impact}
                                </span>
                                <div className={`flex items-center text-xs font-mono font-bold ${item.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                                    {item.trend === 'up' ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                                    {item.change}
                                </div>
                            </div>
                            <h3 className="text-lg font-bold group-hover:text-primary transition-colors leading-tight">
                                {item.title}
                            </h3>
                        </div>

                        <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedNews;

import { Activity, ArrowRight } from "lucide-react";
