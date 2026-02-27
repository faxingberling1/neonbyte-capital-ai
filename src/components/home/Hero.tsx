"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, ShieldCheck, Zap, TrendingUp, Activity, Terminal } from "lucide-react";
import Link from "next/link";
import MarketChart from "./MarketChart";

const Hero = () => {
    return (
        <section className="relative pt-44 pb-20 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -mr-40 -mt-20 opacity-50" />
            <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -ml-20 -mb-20 opacity-50" />

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 mb-8">
                            <Terminal className="w-3 h-3 text-primary" />
                            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                                Advanced Trading Terminal v3.0
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.9] uppercase">
                            Predict. <br />
                            <span className="gradient-text">Execute.</span> <br />
                            Dominate.
                        </h1>

                        <p className="max-w-md text-lg text-muted-foreground mb-10 leading-relaxed font-medium">
                            Join the elite. Harness neural-network driven market insights and high-frequency execution tools for Forex and Crypto.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <Link
                                href="/auth/signup"
                                className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:neon-glow transition-all flex items-center justify-center group"
                            >
                                Open Terminal
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <div className="flex items-center space-x-4 text-sm font-bold text-foreground/60 uppercase tracking-widest">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-zinc-800 flex items-center justify-center overflow-hidden">
                                            <div className="w-full h-full bg-gradient-to-br from-primary to-secondary opacity-50" />
                                        </div>
                                    ))}
                                </div>
                                <span>4.2k Active Now</span>
                            </div>
                        </div>

                        <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/5 pt-8">
                            <div>
                                <span className="block text-xs text-muted-foreground uppercase mb-1">Execution Speed</span>
                                <span className="text-xl font-mono font-bold text-secondary">0.02ms</span>
                            </div>
                            <div>
                                <span className="block text-xs text-muted-foreground uppercase mb-1">Pairs Supported</span>
                                <span className="text-xl font-mono font-bold">250+</span>
                            </div>
                            <div>
                                <span className="block text-xs text-muted-foreground uppercase mb-1">AI Accuracy</span>
                                <span className="text-xl font-mono font-bold text-primary">94.8%</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full -z-10 animate-pulse" />
                        <div className="aspect-[4/3] w-full">
                            <MarketChart />
                        </div>
                        {/* Floatings Elements */}
                        <div className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-2xl hidden md:block">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                                <span className="text-xs font-bold uppercase tracking-tighter">Live Market Feed</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
