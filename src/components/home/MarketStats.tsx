"use client";

import { motion } from "framer-motion";
import { Terminal, ShieldCheck, Activity, Cpu } from "lucide-react";

const MarketStats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Network Status */}
            <div className="glass p-6 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                        <Activity className="text-green-500 w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="text-xs font-bold uppercase text-muted-foreground">Network Status</h4>
                        <div className="text-lg font-mono font-bold uppercase">Optimal / 100%</div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-[10px] font-mono text-muted-foreground">UPTIME</div>
                    <div className="text-xs font-bold">99.999%</div>
                </div>
            </div>

            {/* Security Status */}
            <div className="glass p-6 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <ShieldCheck className="text-primary w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="text-xs font-bold uppercase text-muted-foreground">System Integrity</h4>
                        <div className="text-lg font-mono font-bold uppercase">Secured / AES-256</div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-[10px] font-mono text-muted-foreground">AUDITED</div>
                    <div className="text-xs font-bold">ISO-27001</div>
                </div>
            </div>
        </div>
    );
};

export default MarketStats;
