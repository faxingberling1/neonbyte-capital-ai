"use client";

import { useState, useEffect, useRef } from 'react';

export interface StreamData {
    price: number;
    time: number;
    symbol: string;
}

export const useCryptoStream = (symbols: string[] = ['BTCUSDT']) => {
    const [prices, setPrices] = useState<Record<string, number>>({});
    const [history, setHistory] = useState<Record<string, StreamData[]>>({});
    const ws = useRef<WebSocket | null>(null);

    const lastUpdate = useRef<number>(0);

    useEffect(() => {
        const streams = symbols.map(s => `${s.toLowerCase()}@trade`).join('/');
        const streamUrl = `wss://stream.binance.com:9443/stream?streams=${streams}`;

        ws.current = new WebSocket(streamUrl);

        ws.current.onmessage = (event) => {
            const { data: rawData } = JSON.parse(event.data);
            const symbol = rawData.s;
            const price = parseFloat(rawData.p);

            const now = Date.now();
            if (now - lastUpdate.current > 500) { // Update at most every 500ms
                setPrices(prev => ({ ...prev, [symbol]: price }));
                setHistory(prev => {
                    const symbolHistory = prev[symbol] || [];
                    const updated = [...symbolHistory, { price, time: rawData.T, symbol }];
                    return { ...prev, [symbol]: updated.slice(-100) };
                });
                lastUpdate.current = now;
            }
        };

        // The onerror handler for the combined stream might need a different fallback strategy
        // or simply log the error, as a mock stream for multiple symbols would be more complex.
        ws.current.onerror = (error) => {
            console.error('WebSocket Error:', error);
        };

        return () => {
            if (ws.current) ws.current.close();
        };
    }, [symbols.join(',')]);

    return { prices, history };
};
