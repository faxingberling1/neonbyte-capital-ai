"use client";

import { motion } from "framer-motion";
import { BarChart3, ShieldCheck, Zap, Globe, Cpu, MousePointer2, Layers } from "lucide-react";

const Features = () => {
    const features = [
        {
            title: "Neural Engine",
            desc: "Our proprietary AI models detect patterns in high-frequency data across 250+ markets.",
            icon: Cpu,
            data: "98.2% LOAD"
        },
        {
            title: "Zero-Lag Feed",
            desc: "Direct market execution protocols ensuring sub-millisecond latency for every trade.",
            icon: Zap,
            data: "0.02ms LATENCY"
        },
        {
            title: "Proof of Reserve",
            desc: "Institutional-grade vault security with real-time on-chain transparency for all funds.",
            icon: ShieldCheck,
            data: "256-BIT ENCRYPT"
        },
        {
            title: "HFT Infrastructure",
            desc: "Built on high-performance architecture capable of millions of transactions per second.",
            icon: Layers,
            data: "3M+ TPS"
        },
        {
            title: "Predictive Analytics",
            desc: "Anticipate market volatility before it happens with our advanced sentiment analysis.",
            icon: BarChart3,
            data: "AI CONFIDENCE 94%"
        },
        {
            title: "Multi-Asset Hub",
            desc: "A unified liquidity pool for seamless transitions between Forex, Crypto, and Metals.",
            icon: Globe,
            data: "GLOBAL NODES"
        },
    ];

    return (
        <section className="container mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-16 px-4">
                <div className="w-px h-20 bg-gradient-to-b from-transparent to-primary mb-8" />
                <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase">
                    Technology <span className="text-muted-foreground">& Infrastructure</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto font-medium text-lg">
                    Neonbyte isn't just a platform; it's a high-performance trading ecosystem powered by artificial intelligence.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="group relative p-10 bg-zinc-950/40 border border-white/5 hover:border-primary/50 transition-all overflow-hidden"
                    >
                        {/* Background Accent */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[40px] rounded-full -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors" />

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-8">
                                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:neon-border transition-all">
                                    <feature.icon className="text-primary w-6 h-6" />
                                </div>
                                <span className="text-[10px] font-mono font-bold text-muted-foreground/50 tracking-widest">{feature.data}</span>
                            </div>

                            <h3 className="text-2xl font-black mb-4 tracking-tighter uppercase group-hover:text-primary transition-colors">{feature.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                {feature.desc}
                            </p>

                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map(dot => (
                                    <div key={dot} className={`h-1 flex-1 rounded-full ${dot <= 3 ? 'bg-primary' : 'bg-zinc-800'}`} />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;
