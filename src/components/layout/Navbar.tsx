"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, PieChart, Newspaper, Menu, X, Rocket } from "lucide-react";
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
        { name: "News", href: "/news", icon: Newspaper },
        { name: "Market Insights", href: "/insights", icon: TrendingUp },
        { name: "Investments", href: "/investments", icon: PieChart },
        { name: "Guides", href: "/guides", icon: Rocket },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
                }`}
        >
            <TickerTape />
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center neon-border">
                        <TrendingUp className="text-white w-6 h-6" />
                    </div>
                    <span className="text-2xl font-bold gradient-text tracking-tighter">
                        NeonByte Capital AI
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                        >
                            <link.icon className="w-4 h-4" />
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/auth/signin"
                        className="px-6 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:neon-glow transition-all"
                    >
                        Get Started
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden glass absolute top-full left-0 right-0 p-6 flex flex-col space-y-4"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium flex items-center gap-3"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <link.icon className="w-5 h-5 text-primary" />
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/auth/signin"
                        className="w-full py-3 bg-primary text-center text-white rounded-xl font-bold"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Get Started
                    </Link>
                </motion.div>
            )}
        </header>
    );
};

export default Navbar;
