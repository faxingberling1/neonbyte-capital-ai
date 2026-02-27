"use client";

import { motion } from "framer-motion";
import { Newspaper, TrendingUp, Cpu, Globe, ArrowUpRight, ArrowDownRight, Clock, Users, ArrowRight, Activity } from "lucide-react";

const FeaturedNews = () => {
    const news = [
        {
            title: "Bitcoin: Why $150k is the next psychological barrier",
            category: "IDEAS",
            time: "2h ago",
            impact: "HIGH",
            author: "NeonAlpha",
            engagement: "12.4k",
            trend: "up",
        },
        {
            title: "EURUSD: Bullish divergence on 4H - Execution plan inside",
            category: "ANALYSIS",
            time: "45m ago",
            impact: "CRITICAL",
            author: "MacroWiz",
            engagement: "8.2k",
            trend: "up",
        },
        {
            title: "Nvidia Earnings: Neural Network analysis of call options",
            category: "EQUITIES",
            time: "5h ago",
            impact: "HIGH",
            author: "QuantBot",
            engagement: "45.1k",
            trend: "down",
        },
        {
            title: "Gold: Central Bank accumulation reaching 50-year highs",
            category: "METALS",
            time: "1d ago",
            impact: "MEDIUM",
            author: "BullionKing",
            engagement: "1.2k",
            trend: "up",
        },
    ];

    return (
        <section className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                    <div className="flex items-center gap-2 text-primary mb-2">
                        <Users className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Community Intelligence</span>
                    </div>
                    <h2 className="text-4xl font-black uppercase tracking-tighter italic">
                        Trading <span className="text-muted-foreground">Ideas</span>
                    </h2>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-xs font-mono opacity-50">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        SYSTEM: ONLINE
                    </div>
                    <button className="px-6 py-2 glass border border-white/5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all italic">
                        View All Ideas
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {news.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group flex flex-col p-6 glass rounded-[2rem] hover:bg-white/5 transition-all cursor-pointer border-t border-white/5 hover:border-primary/50 relative overflow-hidden"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-[9px] font-black px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 uppercase tracking-widest">
                                {item.category}
                            </span>
                            <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 font-bold">
                                <Clock className="w-3 h-3" />
                                {item.time}
                            </div>
                        </div>

                        <h3 className="text-sm font-bold group-hover:text-primary transition-colors leading-snug mb-6 flex-1 italic">
                            {item.title}
                        </h3>

                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-black">
                                    {(item as any).author[0]}
                                </div>
                                <span className="text-[10px] font-bold text-slate-400">{(item as any).author}</span>
                            </div>
                            <div className="flex items-center gap-1 text-[9px] font-mono text-slate-500">
                                📊 {(item as any).engagement}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedNews;
