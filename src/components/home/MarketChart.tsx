"use client";

import { useEffect, useRef } from "react";

const MarketChart = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.async = true;
        script.innerHTML = JSON.stringify({
            autosize: true,
            symbol: "OANDA:EURUSD",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            enable_publishing: false,
            allow_symbol_change: true,
            calendar: false,
            support_host: "https://www.tradingview.com"
        });

        if (containerRef.current) {
            containerRef.current.appendChild(script);
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = "";
            }
        };
    }, []);

    return (
        <div className="w-full h-full min-h-[400px] glass rounded-[2.5rem] overflow-hidden p-1 border-primary/20 neon-border">
            <div ref={containerRef} className="tradingview-widget-container h-full">
                <div className="tradingview-widget-container__widget h-full"></div>
            </div>
        </div>
    );
};

export default MarketChart;
