"use client";

import { useEffect, useRef } from "react";

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
                { description: "Gold", proName: "OANDA:XAUUSD" },
            ],
            showSymbolLogo: true,
            colorTheme: "dark",
            isTransparent: true,
            displayMode: "adaptive",
            locale: "en",
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
        <div className="w-full bg-black/40 border-b border-white/5 backdrop-blur-md overflow-hidden h-[40px] flex items-center">
            <div ref={containerRef} className="tradingview-widget-container">
                <div className="tradingview-widget-container__widget"></div>
            </div>
        </div>
    );
};

export default TickerTape;
