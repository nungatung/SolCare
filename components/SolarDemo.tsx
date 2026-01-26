'use client';

import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Sun, Leaf, AlertCircle, TreeDeciduous, Car, Plane, Droplets } from 'lucide-react';

export default function SolarDemo({ data }: { data: any }) {
  const [isAnomalous, setIsAnomalous] = useState(false);
  
  // Destructuring our new API fields
  const { trees_planted_equivalent, miles_driving_avoided, passenger_flight_hours_avoided, plastic_bottles_avoided } = data?.equivalents || {};

  const chartData = [
    { time: '08:00', expected: 1.5, actual: 1.4 },
    { time: '10:00', expected: 3.8, actual: 3.6 },
    { time: '12:00', expected: 6.2, actual: isAnomalous ? 4.1 : 6.0 },
    { time: '14:00', expected: 5.5, actual: isAnomalous ? 3.8 : 5.3 },
    { time: '16:00', expected: 2.9, actual: isAnomalous ? 1.9 : 2.7 },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden text-slate-900">
      <div className="p-6 bg-slate-50 border-b flex justify-between items-center">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">Environmental Impact Dashboard</h3>
        <button onClick={() => setIsAnomalous(!isAnomalous)} className="text-[10px] bg-white border px-3 py-1 rounded-full font-bold">
           {isAnomalous ? 'Recover System' : 'Simulate Variance'}
        </button>
      </div>

      {/* Primary Stats */}
      <div className="grid grid-cols-2 gap-px bg-slate-100 border-b">
        <div className="bg-white p-6">
          <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">CO₂ Reduction</p>
          <p className="text-3xl font-mono font-bold text-emerald-600 leading-none">5.405 kg</p>
        </div>
        <div className="bg-white p-6 border-l border-slate-100">
          <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Efficiency</p>
          <p className={`text-3xl font-mono font-bold leading-none ${isAnomalous ? 'text-rose-500' : 'text-slate-900'}`}>
            {isAnomalous ? '82.1%' : '98.4%'}
          </p>
        </div>
      </div>

      {/* Impact Equivalents Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-100 border-b">
        <ImpactCard icon={<TreeDeciduous size={18} />} label="Trees" value={trees_planted_equivalent} />
        <ImpactCard icon={<Car size={18} />} label="Miles" value={miles_driving_avoided} />
        <ImpactCard icon={<Plane size={18} />} label="Flight Hrs" value={passenger_flight_hours_avoided} />
        <ImpactCard icon={<Droplets size={18} />} label="Bottles" value={plastic_bottles_avoided} />
      </div>

      {/* The Production Chart */}
      <div className="p-6 h-48 sm:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="time" hide />
            <YAxis hide />
            <Area type="monotone" dataKey="expected" stroke="#cbd5e1" fill="transparent" strokeDasharray="5 5" />
            <Area type="monotone" dataKey="actual" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.05} strokeWidth={2.5} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Professional Footer & Attribution */}
      <div className="p-4 bg-slate-50 border-t border-slate-100">
        <p className="text-[9px] leading-relaxed text-slate-400 font-medium">
          Data: Ember; Energy Institute - Statistical Review of World Energy (2025) - with major processing by Our World in Data (2024) • Emission Factor: 0.01201 kg CO2e/kWh
        </p>
      </div>
    </div>
  );
}

function ImpactCard({ icon, label, value }: { icon: any, label: string, value: number }) {
  return (
    <div className="bg-white p-4 flex flex-col items-center justify-center text-center">
      <div className="text-slate-400 mb-2">{icon}</div>
      <p className="text-sm font-bold text-slate-800">{value?.toLocaleString() || '0'}</p>
      <p className="text-[9px] uppercase font-bold text-slate-400 tracking-tighter">{label}</p>
    </div>
  );
}