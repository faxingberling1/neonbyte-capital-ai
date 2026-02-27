"use client";

import { motion } from "framer-motion";
import { useCryptoStream } from "@/hooks/useCryptoStream";
import { useEffect, useState } from "react";

interface LiveStreamChartProps {
    symbol: string;
    color: string;
    height?: number;
}

const LiveStreamChart = ({ symbol, color, height = 200 }: LiveStreamChartProps) => {
    const { prices, history } = useCryptoStream([symbol]);
    const currentPrice = prices[symbol];
    const data = history[symbol] || [];
    const [points, setPoints] = useState<{ x: number, y: number }[]>([]);

    useEffect(() => {
        if (data.length < 2) return;

        const prices = data.map(d => d.price);
        const min = Math.min(...prices);
        const max = Math.max(...prices);
        const range = max - min || 1;
        const width = 800;

        const newPoints = data.map((d, i) => ({
            x: (i / (data.length - 1)) * width,
            y: height - ((d.price - min) / range) * height
        }));

        setPoints(newPoints);
    }, [data, height]);

    if (data.length === 0) return (
        <div className="flex items-center justify-center h-full text-slate-500 font-mono text-xs animate-pulse">
            CONNECTING TO NEONBRIDGE...
        </div>
    );

    const pathData = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`;
    const fillData = points.length > 0 ? `${pathData} L ${points[points.length - 1].x},${height} L 0,${height} Z` : '';

    return (
        <div className="relative w-full h-full">
            <div className="absolute top-0 left-0 z-10 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-red-500">Live Streaming</span>
            </div>

            <div className="absolute top-0 right-0 z-10 flex flex-col items-end">
                <span className="text-2xl font-black tracking-tighter italic">
                    {currentPrice?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">{symbol} / USDT</span>
            </div>

            <svg width="100%" height={height} viewBox={`0 0 800 ${height}`} className="overflow-visible" preserveAspectRatio="none">
                <linearGradient id={`gradient-live-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>

                <path
                    d={fillData}
                    fill={`url(#gradient-live-${color.replace('#', '')})`}
                    className="transition-all duration-300 ease-linear"
                />

                <path
                    d={pathData}
                    fill="none"
                    stroke={color}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-300 ease-linear"
                />

                {/* Real-time pulse point */}
                {points.length > 0 && (
                    <motion.circle
                        cx={points[points.length - 1].x}
                        cy={points[points.length - 1].y}
                        r="4"
                        fill={color}
                        className="shadow-2xl shadow-white"
                        animate={{ r: [4, 8, 4] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                    />
                )}
            </svg>
        </div>
    );
};

export default LiveStreamChart;
