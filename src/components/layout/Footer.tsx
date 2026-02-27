import Link from "next/link";
import { TrendingUp, Github, Twitter, Cpu } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-background border-t border-border py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                                <TrendingUp className="text-white w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold gradient-text">NeonByte Capital AI</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Intelligent market analysis and investment management powered by Next-Gen AI.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Platform</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/news">News</Link></li>
                            <li><Link href="/insights">Market Insights</Link></li>
                            <li><Link href="/investments">Investments</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/compliance">Compliance</Link></li>
                            <li><Link href="/contact">Support</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Newsletter</h4>
                        <div className="flex space-x-2">
                            <input
                                type="email"
                                placeholder="email@example.com"
                                className="bg-muted border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-1 ring-primary"
                            />
                            <button className="bg-primary px-4 py-2 rounded-lg text-sm font-bold">Join</button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
                    <p>© 2026 Neonbyte Capital AI. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
