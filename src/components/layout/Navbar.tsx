"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, PieChart, Newspaper, Menu, X, Rocket, Activity, Globe, Users, Search, ChevronDown, BarChart3 } from "lucide-react";
import TickerTape from "./TickerTape";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Charts", href: "/charts", icon: Activity },
        { name: "Markets", href: "/markets", icon: Globe },
        { name: "News", href: "/news", icon: Newspaper },
        { name: "Screeners", href: "/screeners", icon: BarChart3 },
        { name: "Community", href: "/community", icon: Users },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
            <div className="pointer-events-auto">
                <TickerTape />
            </div>

            <div className="container mx-auto px-6 mt-4 pointer-events-auto">
                <nav
                    className={`transition-all duration-500 rounded-full border border-white/10 flex items-center justify-between px-8 py-3 mx-auto max-w-7xl shadow-2xl ${isScrolled
                        ? "bg-black/60 backdrop-blur-2xl px-6 py-2 mt-2"
                        : "bg-white/5 backdrop-blur-md"
                        }`}
                >
                    <Link href="/" className="flex items-center space-x-2 shrink-0">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center neon-border">
                            <TrendingUp className="text-white w-5 h-5" />
                        </div>
                        <span className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-primary tracking-tighter hidden sm:block italic">
                            NeonByte
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden xl:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link
                                    href={link.href}
                                    className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-white px-4 py-2 rounded-full hover:bg-white/5 transition-all flex items-center gap-1.5"
                                >
                                    {link.name}
                                    <ChevronDown className="w-3 h-3 opacity-30 group-hover:opacity-100 transition-opacity" />
                                </Link>
                                <div className="absolute top-[calc(100%+8px)] left-0 w-48 bg-[#0D1B2D] border border-white/5 p-2 rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 shadow-2xl backdrop-blur-3xl">
                                    <div className="text-[9px] font-black text-primary px-3 py-1 uppercase tracking-[0.2em] mb-1">Explore {link.name}</div>
                                    <div className="space-y-0.5">
                                        <div className="px-3 py-2 hover:bg-white/5 rounded-xl text-[11px] font-bold cursor-pointer transition-colors">Overview</div>
                                        <div className="px-3 py-2 hover:bg-white/5 rounded-xl text-[11px] font-bold cursor-pointer transition-colors">Advanced Tools</div>
                                        <div className="px-3 py-2 hover:bg-white/5 rounded-xl text-[11px] font-bold cursor-pointer transition-colors">Performance</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center space-x-4">
                        <div className="relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500 group-focus-within:text-primary transition-colors" />
                            <input
                                type="text"
                                placeholder="Search markets..."
                                className="bg-white/5 border border-white/10 rounded-full pl-9 pr-4 py-1.5 text-xs w-40 focus:w-56 focus:border-primary/50 transition-all outline-none"
                            />
                        </div>
                        <Link
                            href="/auth/signin"
                            className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
                        >
                            Log in
                        </Link>
                        <Link
                            href="/auth/signup"
                            className="px-6 py-2 bg-primary text-white rounded-full text-[11px] font-black uppercase tracking-widest hover:neon-glow transition-all"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="xl:hidden text-foreground w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="container mx-auto px-6 mt-2 pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="xl:hidden bg-[#0D1B2D]/95 backdrop-blur-3xl border border-white/10 p-8 rounded-[2rem] flex flex-col space-y-6 shadow-3xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xl font-black uppercase tracking-widest flex items-center gap-4 group"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                                    <link.icon className="w-5 h-5" />
                                </div>
                                <span>{link.name}</span>
                            </Link>
                        ))}
                        <div className="pt-6 border-t border-white/5 flex flex-col gap-4">
                            <Link
                                href="/auth/signin"
                                className="w-full py-4 text-center text-sm font-black uppercase tracking-widest border border-white/10 rounded-2xl hover:bg-white/5"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Log in
                            </Link>
                            <Link
                                href="/auth/signup"
                                className="w-full py-4 bg-primary text-center text-white rounded-2xl font-black uppercase tracking-widest hover:neon-glow"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
