"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, ShieldCheck, Zap, TrendingUp, Activity, Rocket, Search } from "lucide-react";
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left"
                    >
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 mb-8 mx-auto lg:mx-0">
                            <Rocket className="w-3 h-3 text-primary" />
                            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                                $0 forever, no credit card needed
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-[5.5rem] font-black tracking-tighter mb-8 leading-[0.85] uppercase">
                            Where the <br />
                            world does <br />
                            <span className="gradient-text">markets.</span>
                        </h1>

                        <p className="max-w-xl text-xl text-muted-foreground mb-12 leading-relaxed font-medium mx-auto lg:mx-0">
                            Join 100 million traders and investors taking the future into their own hands. The best trades require research, then commitment.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                            <Link
                                href="/auth/signup"
                                className="w-full sm:w-auto px-12 py-5 bg-primary text-white rounded-xl font-black text-xl hover:neon-glow transition-all flex items-center justify-center group uppercase tracking-tighter"
                            >
                                Get started
                                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/features"
                                className="text-sm font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
                            >
                                Explore features
                            </Link>
                        </div>

                        <div className="mt-16 flex items-center justify-center lg:justify-start gap-8 opacity-40">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Institutional Grade</span>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">SEC Regulated</span>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">256-Bit Secured</span>
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
