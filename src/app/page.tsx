"use client";
import { motion } from 'framer-motion';
import { Sun, ShieldCheck, Zap, BarChart3, ChevronRight, Check, Club, Info, Droplets } from 'lucide-react';
import WaitlistForm from '../../components/WaitlistForm';
import Image from 'next/image';
import { Activity, Bell, CalendarCheck, Settings } from 'lucide-react';
import ImpactModal from '../../components/ImpactModal';
import TermsModal from '../../components/TermsModal';
import { useState } from 'react';
import Link from 'next/link';
import SolarDemo from '../../components/SolarDemo';

const tiers = [
  {
    name: "Precision Monitoring",
    price: "19",
    description: "Know exactly when to clean. Plant trees while you produce.",
    features: [
      "3-Layer Calibration (14-Day Roof Fingerprint)",
      "Real-Time Carbon Offset Tracking (HelioAPI)",
      "Thermal, Aerosol & Salt Mist Intelligence",
      "Precision Cleaning Alerts with ROI Math",
      "Impact Club: $1/kg CO₂ to Reforestation",
      "System Health Monitoring",
      "Email Support"
    ],
    popular: false
  },
  {
    name: "Zero-Touch + Impact",
    price: "30",
    description: "We handle everything. You watch the impact grow.",
    features: [
      "Everything in Monitor",
      "2 x Professional Cleans / Year (Scheduled & Managed)",
      "24/7 Smart Monitoring + Priority Response",
      "Full Mechanical & Safety Audit",
      "Impact Club with Project Selection ($10+ threshold)",
      "Priority Support & Concierge Booking"
    ],
    popular: true
  }
];

const steps = [
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Sync Your System",
    desc: "We sync directly with your inverter to pull real-time generation data. No hardware required, just a simple digital 'handshake'."
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Continuous Monitoring",
    desc: "Our platform analyzes your kWh output daily. We account for NZ weather patterns to ensure your panels are performing at their peak."
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Smart Notifications",
    desc: "When our system detects a performance gap of 15%, we send you a notification with a 'Request Clean' button. Tap it, and we dispatch a local vetted pro who already has your system details."
  },
  {
    icon: <CalendarCheck className="w-6 h-6" />,
    title: "Seamless Booking",
    desc: "One click in your notification schedules a vetted local pro. Since you're a subscriber, your service is prioritized and pre-approved."
  }
];

export default function Home() {
  const [isImpactModalOpen, setIsImpactModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-yellow-400 selection:text-black">

      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          {/* 1. The Yellow Lightbulb Icon */}
          <div className="relative w-20 h-20 flex-shrink-0 -mt-20 -ml-10 -mr-12">
            <Image
              src="/icon.png" // Your yellow lightbulb image
              alt="SolCare Icon"
              fill
              className="object-contain drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]"
            />
          </div>

          {/* 2. The "SolCare." Text (Inverted from black to white) */}
          <div className="relative w-55 h-55 -mt-15">
            <Image
              src="/solcare.png" // Your black text image
              alt="SolCare Logo"
              fill
              className="object-contain invert brightness-200"
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-20 pb-32 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          Now accepting early access in Auckland
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Your Solar, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">
            On Autopilot.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          NZ's salt, pollen, and dust steal 10-30% of your solar output.
          We fingerprint your roof's true potential, clean only when ROI is proven,
          and plant trees with every kilowatt recovered, automatically.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <WaitlistForm />
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-gray-400">Founding Member pricing, help shape SolCare from day one.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 ">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`relative p-8 rounded-3xl border ${tier.popular ? 'border-yellow-400 bg-yellow-400/5' : 'border-white/10 bg-white/[0.02]'} transition-transform hover:scale-[1.02]`}
              >
                {tier.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-xs font-bold uppercase">
                    Most Popular
                  </span>
                )}

                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold">${tier.price}</span>
                  <span className="text-gray-500">/month</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="flex flex-wrap items-center gap-x-2">
                        {feature}
                        {/* Logic to show the "What's this?" button next to the Impact feature */}
                        {feature.toLowerCase().includes("impact club") && (
                          <button
                            onClick={() => setIsImpactModalOpen(true)}
                            className="inline-flex items-center gap-1 text-[10px] text-green-500 font-bold uppercase tracking-tighter hover:text-green-400 transition-colors cursor-pointer"
                          >
                            <Info className="w-3 h-3" /> What's this?
                          </button>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-bold transition-colors ${tier.popular ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/10 cursor-pointer' : 'bg-white/10 hover:bg-white/20 cursor-pointer'}`}>
                  Go {tier.name}
                </button>
              </div>
            ))}
          </div>

          {/* Quick Legal Access */}
          <div className="mt-12 text-center">
            <button
              onClick={() => setIsTermsModalOpen(true)}
              className="text-gray-500 text-[11px] uppercase tracking-[0.2em] hover:text-white transition-colors cursor-pointer"
            >
              View Full Terms & Conditions
            </button>
          </div>
        </div>
      </section>



      {/* How it Works Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-jayagiri">How SolCare. Works</h2>
          <p className="text-gray-400">Total solar optimization in four simple steps.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              {/* Connector Line for Desktop */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gradient-to-r from-yellow-400/50 to-transparent z-0" />
              )}

              <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mb-6 relative z-10 bg-[#0A0A0A]">
                {step.icon}
              </div>
              <h3 className="font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>




      {/* About Section */}
      <section className="py-24 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 font-jayagiri">Maximum ROI, <br />Zero Effort.</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                SolCare. was founded on the principle that solar energy is an asset, not just a utility. We believe that a dirty panel isn't just a maintenance chore, it’s a silent leak in your financial and environmental investment.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We don't just provide a cleaning service. We are a **Solar Asset Management Platform**. By combining real-time production data, localized NZ weather patterns and national grid emission factors, we ensure your investment is protected and your system is running at peak performance.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                When our system detects a performance gap of 15% or more (Soiling Loss), we alert you and with one tap you can schedule a professional clean to recover your lost yield.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                By partnering with HelioAPI, we provide accurate carbon tracking in New Zealand. We don't just track your impact; we grow it. For every $10 of CO2 offset your system generates through our optimisation, we facilitate a donation to a Ekos reforestation project of your choosing, turning your roof into a literal engine for a greener New Zealand.
              </p>
              <div className="flex items-center gap-4 text-sm font-bold text-yellow-400 uppercase tracking-widest">
                <span>Data-Driven</span>
                <span className="w-1 h-1 rounded-full bg-gray-700" />
                <span>Vetted Pros</span>
                <span className="w-1 h-1 rounded-full bg-gray-700" />
                <span>100% Kiwi</span>
              </div>
            </div>

            {/* Decorative Brand Element */}
            <div className="w-full md:w-64 h-64 rounded-3xl border border-white/10 flex items-center justify-center bg-gradient-to-br from-yellow-400/10 to-transparent">
              <div className="relative w-32 h-32 opacity-50 grayscale contrast-125">
                <Image src="/icon.png" alt="SolCare Brand Icon" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Link */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <div className="flex flex-col items-center gap-4">
          <p className="text-gray-600 text-xs">© 2026 SolCare. All rights reserved.</p>
          <button
            onClick={() => setIsTermsModalOpen(true)}
            className="text-gray-500 text-[10px] uppercase tracking-widest hover:text-white transition-colors cursor-pointer"
          >
            Terms & Conditions
          </button>
        </div>
      </footer>

      <ImpactModal isOpen={isImpactModalOpen} onClose={() => setIsImpactModalOpen(false)} />
      <TermsModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
    </main>
  );
}
