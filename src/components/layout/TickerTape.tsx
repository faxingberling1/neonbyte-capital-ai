"use client";

import { useEffect, useRef, memo } from "react";

const TickerTape = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbols: [
                { proName: "FOREXCOM:SPX500", title: "S&P 500" },
                { proName: "FOREXCOM:NSXUSD", title: "Nasdaq 100" },
                { proName: "FX_IDC:EURUSD", title: "EUR/USD" },
                { proName: "BITSTAMP:BTCUSD", title: "BTC/USD" },
                { proName: "BITSTAMP:ETHUSD", title: "ETH/USD" },
                { description: "NVIDIA", proName: "NASDAQ:NVDA" },
                { description: "Apple", proName: "NASDAQ:AAPL" },
                { description: "Tesla", proName: "NASDAQ:TSLA" },
                { description: "Gold", proName: "OANDA:XAUUSD" },
                { description: "Crude Oil", proName: "NYMEX:CL1!" },
            ],
            showSymbolLogo: true,
            colorTheme: "dark",
            isTransparent: true,
            displayMode: "adaptive",
            locale: "en",
        });

        if (containerRef.current) {
            containerRef.current.innerHTML = "";
            containerRef.current.appendChild(script);
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = "";
            }
        };
    }, []);

    return (
        <div className="w-full bg-[#03070E] border-b border-white/5 backdrop-blur-3xl h-[46px] flex items-center relative z-50 overflow-hidden">
            <div ref={containerRef} className="tradingview-widget-container flex-grow">
                <div className="tradingview-widget-container__widget"></div>
            </div>
            {/* Glossy Overlay to match premium aesthetic */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#03070E] via-transparent to-[#03070E] opacity-50" />
        </div>
    );
};

export default memo(TickerTape);
