import { X, Globe, TreePine, Info, HeartHandshake, Zap } from 'lucide-react';

interface ImpactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ImpactModal({ isOpen, onClose }: ImpactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-[#0F0F0F] rounded-3xl border border-white/10 p-6 md:p-10 overflow-y-auto max-h-[90vh] shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-green-500/20 rounded-2xl">
            <Globe className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold font-jayagiri text-white">The Impact Club</h2>
        </div>

        <div className="space-y-10 text-gray-400">
          <section>
            <h3 className="text-white font-bold mb-3 flex items-center gap-2 text-lg">
              <TreePine className="w-5 h-5 text-green-500" /> 1. Restoration on Autopilot
            </h3>
            <p className="leading-relaxed">
              The Impact Club turns your solar production into real world conservation. For every <strong>1kg of CO2 </strong> your system reduces, SolCare. donates <strong>$1</strong> to a certified Ekos project of your choosing.
            </p>
          </section>

          <section>
            <h3 className="text-white font-bold mb-4 flex items-center gap-2 text-lg">
              <Zap className="w-5 h-5 text-green-500" /> 2. How it works
            </h3>
            <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center justify-between p-4 bg-white/[0.03] border border-white/5 rounded-2xl">
                    <span className="text-xs font-bold uppercase tracking-wider">Production</span>
                    <span className="text-white font-mono">1000 kWh</span>
                </div>
                <div className="flex items-center justify-center py-1">
                    <div className="h-4 w-px bg-green-500/30"></div>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/[0.03] border border-white/5 rounded-2xl">
                    <span className="text-xs font-bold uppercase tracking-wider text-green-500">CO2 Reduced</span>
                    <span className="text-green-500 font-mono font-bold">~12.01kg</span>
                </div>
                <div className="flex items-center justify-center py-1">
                    <div className="h-4 w-px bg-green-500/30"></div>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-500/10 border border-green-500/20 rounded-2xl">
                    <span className="text-xs font-bold uppercase tracking-wider text-green-400">Total Donation</span>
                    <span className="text-green-400 font-mono font-bold">$12.01 NZD</span>
                </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed italic">
                We use <strong>HelioAPI</strong> to calculate your exact carbon offset based on your systems real time production.
            </p>
          </section>

          <section>
            <h3 className="text-white font-bold mb-3 flex items-center gap-2 text-lg">
              <HeartHandshake className="w-5 h-5 text-green-500" /> 3. You Choose the Impact
            </h3>
            <p className="leading-relaxed">
              When your fund hits the <strong>$10 threshold</strong>, you’ll be notified to "Allocate Your Impact." You decide which local or Pacific reforestation project receives the donation.
            </p>
          </section>
        </div>

        <section className="pt-6 mt-10 border-t border-white/5">
            <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-widest opacity-50">
                The Fine Print
            </h3>
            <ul className="space-y-2 text-[13px] text-gray-500 leading-relaxed italic">
                <li>• SolCare. is a commercial entity; we only facilitate donations to third-partys e.g <strong>Ekos</strong>.</li>
                <li>• $3.00 of the $10 threshold (or bundled equivalent) covers HelioAPI data and admin costs.</li>
                <li>• Donations are batched and processed once your fund reaches the $10 NZD partner minimum.</li>
                <li>• SolCredits represent environmental impact and have <strong>no cash or redeemable value.</strong></li>
            </ul>
        </section>
      </div>
    </div>
  );
}