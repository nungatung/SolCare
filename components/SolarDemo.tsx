'use client';
import React, { useState, useEffect, useRef } from 'react';
import { AlertTriangle, CheckCircle, Droplets, TrendingDown, Sun, Zap, Trash2 } from 'lucide-react';

export default function SolarDemo({ apiData }: { apiData: any }) {
    // 1. Meter State (Ticks every second)
    const [liveStats, setLiveStats] = useState({
        currentKw: 0,
        totalKwh: 0,
        co2Saved: 0,
        efficiency: 100,
        status: 'Healthy'
    });

    // 2. Alert Management
    const [alert, setAlert] = useState<{ type: string, message: string } | null>(null);

    const SYSTEM_SIZE = 5.0;
    const EMISSION_FACTOR = apiData?.input_data?.emission_factor_used || 0.12;

    useEffect(() => {
        // MAIN SIMULATION LOOP
        const interval = setInterval(() => {
            const now = new Date();
            const hour = now.getHours() + (now.getMinutes() / 60);

            // Helio Sine Logic: Simulated Time (demo peak sun at 12:00)
            const simulatedTime = (hour < 6 || hour > 18) ? 12 : hour;
            const solarAngle = ((simulatedTime - 6) / 12) * Math.PI;
            let genFactor = Math.sin(solarAngle);

            // Real-time fluctuation (97% to 103%)
            const jitter = 0.97 + Math.random() * 0.06;

            setLiveStats(prev => {
                // Efficiency Logic: Randomly trigger a "Drop" for demo purposes
                const shouldDrop = Math.random() > 0.98 && prev.status === 'Healthy';
                const newStatus = shouldDrop ? 'Maintenance Required' : prev.status;
                const currentEff = newStatus === 'Healthy' ? 98 : 74;

                if (shouldDrop) {
                    setAlert({
                        type: 'warning',
                        message: 'Significant output drop detected! Efficiency fell to 74%.'
                    });
                }

                const currentKw = SYSTEM_SIZE * genFactor * (currentEff / 100) * jitter;
                const newTotal = prev.totalKwh + (currentKw / 3600); // 1-second energy increment

                return {
                    currentKw: currentKw,
                    totalKwh: newTotal,
                    co2Saved: newTotal * EMISSION_FACTOR,
                    efficiency: currentEff,
                    status: newStatus
                };
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [EMISSION_FACTOR]);

    // Handle "Clean" Action
    const handleClean = () => {
        setAlert(null); // Clear alert first
        // Simulate a 1-second "Cleaning" delay before UI updates
        setTimeout(() => {
            setLiveStats(prev => ({ ...prev, status: 'Healthy', efficiency: 100 }));
        }, 1000);
    };

    return (
        <div className="space-y-6 relative">
            {/* PACE-CONTROLLED NOTIFICATION */}
            {alert && (
                <div className="fixed top-8 left-1/2 -translate-x-1/2 w-full max-w-lg z-50 animate-in fade-in slide-in-from-top-4 duration-700">
                    <div className="bg-white border-l-4 border-amber-500 p-4 shadow-2xl rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-amber-100 rounded-full text-amber-600">
                                <AlertTriangle className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 text-sm">{alert.message}</p>
                                <p className="text-xs text-slate-500">Soiling detected. Estimated $1.20/day loss.</p>
                            </div>
                        </div>
                        <button
                            onClick={handleClean}
                            className="bg-black text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-slate-800 transition"
                        >
                            Schedule Clean
                        </button>
                    </div>
                </div>
            )}

            {/* 3. THE "METER" UI */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-1 flex items-center gap-1">
                        <Zap className="w-3 h-3" /> Live Generation
                    </div>
                    <div className="text-2xl font-black">{liveStats.currentKw.toFixed(3)} kW</div>
                    <p className="text-[10px] text-slate-500 mt-1">Efficiency: {liveStats.efficiency}%</p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-1 flex items-center gap-1">
                        <Sun className="w-3 h-3" /> Total Offset
                    </div>
                    <div className="text-2xl font-black text-green-600">{liveStats.co2Saved.toFixed(5)} kg</div>
                    <p className="text-[10px] text-slate-400 mt-1">CO₂ Avoided this session <br/> Data: Ember; Energy Institute - Statistical Review of World Energy (2025) - with major processing by Our World in Data (2024) • Emission Factor: 0.01201 kg CO2e/kWh</p>
                </div>

                {/* HEALTH STATUS CARD */}
                <div className={`col-span-1 md:col-span-2 p-6 rounded-2xl border transition-all duration-1000 ${liveStats.status === 'Healthy' ? 'bg-white border-slate-200' : 'bg-amber-50 border-amber-300 shadow-inner'}`}>
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="font-bold text-slate-900">System Intelligence</h3>
                            <p className="text-xs text-slate-500 mt-1">
                                {liveStats.status === 'Healthy' ? 'System is operating at peak efficiency.' : 'Panel soiling detected. Maintenance recommended.'}
                            </p>
                        </div>
                        {liveStats.status === 'Healthy' ?
                            <div className="bg-green-100 p-2 rounded-full text-green-600"><CheckCircle className="w-6 h-6" /></div> :
                            <div className="bg-amber-100 p-2 rounded-full text-amber-600 animate-pulse"><TrendingDown className="w-6 h-6" /></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}