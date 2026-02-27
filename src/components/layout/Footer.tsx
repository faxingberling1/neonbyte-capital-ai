import Link from "next/link";
import { TrendingUp, Github, Twitter, Cpu } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-background border-t border-border py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
                    <div className="col-span-2 md:col-span-1 space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                                <TrendingUp className="text-white w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold gradient-text">NeonByte</span>
                        </Link>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Where the world does markets. Global terminals for institutional and retail intelligence.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest mb-6">Products</h4>
                        <ul className="space-y-3 text-xs text-muted-foreground">
                            <li><Link href="/charts" className="hover:text-primary transition-colors">Supercharts</Link></li>
                            <li><Link href="/screeners" className="hover:text-primary transition-colors">Screeners</Link></li>
                            <li><Link href="/pine" className="hover:text-primary transition-colors">Pine Script</Link></li>
                            <li><Link href="/desktop" className="hover:text-primary transition-colors">Desktop App</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest mb-6">Community</h4>
                        <ul className="space-y-3 text-xs text-muted-foreground">
                            <li><Link href="/community" className="hover:text-primary transition-colors">Shared Ideas</Link></li>
                            <li><Link href="/wizards" className="hover:text-primary transition-colors">Wizards</Link></li>
                            <li><Link href="/scripts" className="hover:text-primary transition-colors">Indicators</Link></li>
                            <li><Link href="/house-rules" className="hover:text-primary transition-colors">House Rules</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest mb-6">Markets</h4>
                        <ul className="space-y-3 text-xs text-muted-foreground">
                            <li><Link href="/markets/stocks" className="hover:text-primary transition-colors">Stocks</Link></li>
                            <li><Link href="/markets/crypto" className="hover:text-primary transition-colors">Crypto</Link></li>
                            <li><Link href="/markets/forex" className="hover:text-primary transition-colors">Forex</Link></li>
                            <li><Link href="/markets/indices" className="hover:text-primary transition-colors">Indices</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest mb-6">Company</h4>
                        <ul className="space-y-3 text-xs text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="/news" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
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
