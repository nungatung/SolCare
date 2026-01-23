import { X, Shield } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-[#0F0F0F] rounded-3xl border border-white/10 p-8 overflow-y-auto max-h-[80vh]">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-500 hover:text-white cursor-pointer"><X /></button>
        
        <div className="flex items-center gap-3 mb-8">
          <Shield className="w-6 h-6 text-yellow-400" />
          <h2 className="text-2xl font-bold font-jayagiri text-white">Terms & Conditions</h2>
        </div>

        <div className="space-y-6 text-sm text-gray-400 leading-relaxed">
          <div>
            <h4 className="text-white font-bold mb-2">1. Service Scope</h4>
            <p>SolCare. provides solar monitoring and maintenance coordination. Cleaning services are performed by independent, vetted contractors.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-2">2. Impact Club & Donations</h4>
            <p>Donations are made to Ekos on behalf of the user. SolCare. retains a $0.50 administrative fee per $3.00 transaction to cover data processing and verification through HelioAPI.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-2">3. Subscription & Billing</h4>
            <p>Memberships are billed monthly. You can cancel at any time, however, accumulated SolCredits that have not reached the $10 donation threshold will be forfeited upon cancellation.</p>
          </div>
          {/* Add more legal sections as needed */}
        </div>
      </div>
    </div>
  );
}