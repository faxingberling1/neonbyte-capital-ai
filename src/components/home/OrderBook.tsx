"use client";

import { motion } from "framer-motion";

const OrderBook = () => {
    const bids = [
        { price: "1.08452", size: "1.2M", total: "1.2M" },
        { price: "1.08451", size: "0.8M", total: "2.0M" },
        { price: "1.08450", size: "2.5M", total: "4.5M" },
        { price: "1.08449", size: "1.1M", total: "5.6M" },
        { price: "1.08448", size: "0.4M", total: "6.0M" },
    ];

    const asks = [
        { price: "1.08458", size: "0.5M", total: "0.5M" },
        { price: "1.08457", size: "1.4M", total: "1.9M" },
        { price: "1.08456", size: "2.1M", total: "4.0M" },
        { price: "1.08455", size: "0.9M", total: "4.9M" },
        { price: "1.08454", size: "0.6M", total: "5.5M" },
    ];

    return (
        <div className="glass rounded-3xl p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground">L2 Order Book</h3>
                <span className="text-[10px] font-mono bg-primary/20 text-primary px-2 py-0.5 rounded">LIVE</span>
            </div>

            <div className="flex-1 grid grid-rows-2 gap-4">
                {/* Asks (Sells) */}
                <div className="space-y-1">
                    {asks.reverse().map((ask, i) => (
                        <div key={i} className="grid grid-cols-3 text-[10px] font-mono py-1 border-b border-white/5 relative group">
                            <div className="absolute inset-y-0 right-0 bg-red-500/10 opacity-50 group-hover:bg-red-500/20 transition-all" style={{ width: `${(parseFloat(ask.total) / 6) * 100}%` }} />
                            <span className="text-red-500 font-bold relative z-10">{ask.price}</span>
                            <span className="text-right relative z-10">{ask.size}</span>
                            <span className="text-right text-muted-foreground relative z-10">{ask.total}</span>
                        </div>
                    ))}
                </div>

                {/* Spread */}
                <div className="flex items-center justify-between py-2 border-y border-white/10 my-2">
                    <span className="text-xs font-bold">SPREAD</span>
                    <span className="text-xs font-mono text-primary font-bold">0.8 PIPS</span>
                    <span className="text-xs font-mono">1.08453</span>
                </div>

                {/* Bids (Buys) */}
                <div className="space-y-1">
                    {bids.map((bid, i) => (
                        <div key={i} className="grid grid-cols-3 text-[10px] font-mono py-1 border-b border-white/5 relative group">
                            <div className="absolute inset-y-0 right-0 bg-green-500/10 opacity-50 group-hover:bg-green-500/20 transition-all" style={{ width: `${(parseFloat(bid.total) / 6) * 100}%` }} />
                            <span className="text-green-500 font-bold relative z-10">{bid.price}</span>
                            <span className="text-right relative z-10">{bid.size}</span>
                            <span className="text-right text-muted-foreground relative z-10">{bid.total}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OrderBook;
