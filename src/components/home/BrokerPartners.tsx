"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe, Star, ChevronRight } from "lucide-react";
import Link from "next/link";

const BrokerPartners = () => {
    const brokers = [
        {
            name: "OANDA",
            type: "Forex / CFDs",
            rating: 4.8,
            feature: "Low Spreads",
            status: "Verified",
            logoBg: "bg-blue-500/20"
        },
        {
            name: "Interactive Brokers",
            type: "Global Multi-Asset",
            rating: 4.9,
            feature: "Pro Execution",
            status: "Verified",
            logoBg: "bg-red-500/20"
        },
        {
            name: "Pepperstone",
            type: "Forex / Stocks",
            rating: 4.7,
            feature: "Fast Speed",
            status: "Verified",
            logoBg: "bg-slate-500/20"
        },
        {
            name: "Eightcap",
            type: "Crypto / FX",
            rating: 4.6,
            feature: "Institutional",
            status: "Verified",
            logoBg: "bg-orange-500/20"
        }
    ];

    return (
        <section className="container mx-auto px-6 py-24 mb-20">
            <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
                <div className="max-w-xl">
                    <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-4">Execution Venues</h2>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic leading-[0.9]">Trade with your favorite broker. Directly.</h3>
                </div>
                <div className="flex flex-col gap-2 text-right">
                    <div className="flex items-center gap-2 justify-end">
                        <ShieldCheck className="w-5 h-5 text-green-500" />
                        <span className="text-xs font-bold uppercase tracking-widest">100+ Verified Partners</span>
                    </div>
                    <p className="text-xs text-slate-500">Regulated execution via NeonBridge™ protocol.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {brokers.map((broker, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-[#111A2E]/50 border border-white/5 p-8 rounded-3xl hover:border-primary/50 transition-all group cursor-pointer"
                    >
                        <div className={`w-14 h-14 ${broker.logoBg} rounded-2xl mb-6 flex items-center justify-center font-black text-xl tracking-tighter italic`}>
                            {broker.name[0]}
                        </div>

                        <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-black uppercase tracking-tight italic">{broker.name}</h4>
                            <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                <span className="text-[10px] font-bold">{broker.rating}</span>
                            </div>
                        </div>

                        <p className="text-xs text-slate-500 mb-6 uppercase font-bold tracking-widest">{broker.type}</p>

                        <div className="space-y-4 pt-6 border-t border-white/5">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Pricing</span>
                                <span className="text-[10px] font-black text-primary uppercase">{broker.feature}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Status</span>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1 h-1 rounded-full bg-green-500" />
                                    <span className="text-[10px] font-black uppercase text-green-500">{broker.status}</span>
                                </div>
                            </div>
                        </div>

                        <button className="w-full mt-8 py-4 bg-white/5 border border-white/10 rounded-xl text-xs font-black uppercase tracking-widest group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                            Connect Account
                        </button>
                    </motion.div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <Link href="/brokers" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors group">
                    View all supported brokers <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </section>
    );
};

export default BrokerPartners;
