"use client";
import { motion } from 'framer-motion';
import { Sun, ShieldCheck, Zap, BarChart3, ChevronRight, Check, Club, Info, Droplets, Mail, Menu, X } from 'lucide-react';
import WaitlistForm from '../../components/WaitlistForm';
import Image from 'next/image';
import { Activity, Bell, CalendarCheck, Settings } from 'lucide-react';
import ImpactModal from '../../components/ImpactModal';
import TermsModal from '../../components/TermsModal';
import { useState } from 'react';
import Link from 'next/link';
import HeroImageCarousel from "../../components/HeroImageCarousel";
import ServicePillars from '../../components/ServicePillars';
import SolarPal from "../../components/SolarPal";

const features = [
  "SolarPal - Your Personal Solar Companion",
  "AI Powered Soiling Forecasts (Irradiance + Weather + PM2.5 Intelligence)",
  "Minimum 2 Professional Cleans / Year, more when SolarPal detects it's needed",
  "3 Layer Calibration (14 Day Roof Fingerprint)",
  "Real Time Carbon Offset Tracking (HelioAPI)",
  "One Tap Booking & Automatic Team Dispatch",
  "Post Clean Performance Validation",
  "Impact Club: $1/kg CO₂ to Reforestation",
  "System Health Monitoring",
  "Priority Support",
];

const steps = [
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Sync Your System",
    desc: "We sync directly with your inverter to pull real time generation data. No hardware required just a simple digital 'handshake' and SolarPal gets to work."
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "SolarPal Monitors 24/7",
    desc: "SolarPal analyses your output daily against live New Zealand weather, temperature, and air quality data so it knows the difference between an effiency drop caused by a hot day and dirty panels."
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Proactive Updates & Alerts",
    desc: "SolarPal messages you with regular performance updates, early soiling forecasts, and a clean recommendation, complete with ROI math before your output takes a real hit."
  },
  {
    icon: <CalendarCheck className="w-6 h-6" />,
    title: "One Tap Booking",
    desc: "SolarPal suggests the optimal clean date, you confirm the time, and it handles dispatch automatically. Your vetted local pro is sent out to you, no back and forth needed."
  }
];

export default function Home() {
  const [isImpactModalOpen, setIsImpactModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-yellow-400 selection:text-black">

      {/* Navbar */}
      <div className="relative z-50">
        <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto relative z-50">
          <div className="flex items-center gap-3">
            {/* 1. The Yellow Lightbulb Icon */}
            <div className="relative w-20 h-20 flex-shrink-0 -mt-20 -ml-10 -mr-12">
              <Image
                src="/icon.png"
                alt="SolCare Icon"
                fill
                className="object-contain drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]"
              />
            </div>

            {/* 2. The "SolCare." Text */}
            <div className="relative w-55 h-55 -mt-15">
              <Image
                src="/solcare.png"
                alt="SolCare Logo"
                fill
                className="object-contain invert brightness-200"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 md:hidden -mt-14 transition-all active:scale-100 relative z-[100]"
            aria-label="Toggle Mobile Menu"

          >
            {isMenuOpen ? (
              <X className="w-7 h-7 text-gray-400 hover:text-white" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>



          {/* Desktop Nav links */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/blog"
              className="text-m text-gray-400 hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-m text-gray-400 hover:text-white transition-colors"
            >
              About
            </Link>
            <a
              href="mailto:solcare.info@gmail.com"
              className="flex items-center gap-1 text-m text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-6 h-5" />
              Get in Touch
            </a>
          </div>
        </nav>

        {/* Mobile Menu Panel & Backdrop */}
        {isMenuOpen && (
          <>
            {/* 1. Transparent Backdrop to catch "clicks outside" */}
            <div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* 2. Menu Panel */}
            <div className="md:hidden absolute top-[45px] left-0 right-0 p-6 z-50 bg-[#0E0E0E]/95 backdrop-blur-xl border-t border-b border-neutral-800 rounded-b-2xl shadow-2xl flex flex-col gap-6 text-center animate-in fade-in slide-in-from-top-4 duration-300">
              <Link
                href="/blog"
                className="py-2 text-lg text-gray-400 hover:text-white transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="py-2 text-lg text-gray-400 hover:text-white transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <a
                href="mailto:solcare.info@gmail.com"
                className="flex items-center justify-center gap-2 py-2 text-lg text-gray-400 hover:text-white transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Mail className="w-6 h-5" />
                Get in Touch
              </a>
            </div>
          </>
        )}
      </div>

      {/* Hero Section */}
      <section className="px-6 pt-20 pb-32 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          

          {/* LEFT — heading, copy, form */}
          <div className="flex flex-col items-start">
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
              className="text-gray-400 text-lg md:text-xl mb-6 leading-relaxed"
            >
              Protect and maximize your solar investment with SolCare.
              We ensure that your solar panels operate at optimal effiency with our smart AI Powered
              montoring, preventive maintenance and professional cleaning.
            </motion.p>

            {/* SolarPal intro pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-sm font-medium mb-10"
            >
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              Powered by SolarPal, your AI solar companion
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full"
            >
              <WaitlistForm />
            </motion.div>
          </div>

          {/* RIGHT — auto-scrolling image stack */}
          <HeroImageCarousel />

        </div>
      </section>

      <ServicePillars />

      {/* Solar Pal Feature Highlight Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-10 md:p-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-6">
              Meet SolarPal
            </div>

            {/* SolarPal character — sits between heading and body copy */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
              className="mb-4 -ml-2 flex items-center justify-center"
            >
              <SolarPal state="idle" size={200} />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The AI that talks to your roof.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              SolarPal is your always on personal AI companion inside SolCare. It reads your live inverter data,
              cross references New Zealand weather patterns, particulate matter (PM), and temperature conditions daily, and notifies
              you directly not just when something's wrong, but to keep you informed about how your system is
              performing and what it's worth.
            </p>

            {/* Three Solar Pal capabilities */}
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mb-4">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="font-bold mb-2">Watches, not waits</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  SolarPal monitors your output daily and separates real soiling from hot weather, shading, and seasonal dips, so you never get a false alarm.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mb-4">
                  <Bell className="w-5 h-5" />
                </div>
                <h3 className="font-bold mb-2">Forecasts, not reacts</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Rather than waiting for a problem, SolarPal predicts when soiling will cross the threshold and suggests the optimal clean date before output takes a real hit.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mb-4">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold mb-2">Books, not asks</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  SolarPal suggests a date, you pick a time and confirm the booking in chat. One tap and your vetted pro is dispatched automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
              One plan. No surprises.
            </p>
          </div>

          {/* Single Pricing Card */}
          <div className="max-w-2xl mx-auto">
            <div className="relative p-10 rounded-3xl border border-yellow-400 bg-yellow-400/5 transition-transform hover:scale-[1.01]">

              {/* Founding Member Badge */}
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-5 py-1 rounded-full text-xs font-bold uppercase tracking-wide whitespace-nowrap">
                Founding Member Pricing
              </span>

              {/* Plan name + description */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-3">SolCare. Complete</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
                  SolarPal monitors your system year round, forecasts the optimal clean window, and dispatches a vetted pro automatically, all for less than the cost of a single one off clean.
                </p>
              </div>

              {/* Price */}
              <div className="flex flex-col items-center mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-bold">$30</span>
                  <span className="text-gray-500 text-lg">/month</span>
                </div>
                <span className="text-gray-500 text-xs mt-2">GST included · Billed monthly · Cancel anytime</span>
              </div>

              {/* Value anchor */}
              <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 mb-8 text-center">
                <p className="text-sm text-gray-400 leading-relaxed">
                  A single professional clean in NZ costs{" "}
                  <span className="text-white font-medium">$100-$300+</span>.
                  {" "}SolCare is{" "}
                  <span className="text-yellow-400 font-medium">$360/year</span>
                  {" "}that's a minimum of 2 managed cleans, plus SolarPal watching your system 365 days a year.
                  Most members receive more than 2 cleans annually as SolarPal detects what their system actually needs.
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="flex flex-wrap items-center gap-x-2">
                      {feature}
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

              {/* CTA */}
              <button className="w-full py-4 rounded-xl font-bold bg-yellow-400 text-black shadow-lg shadow-yellow-400/10 hover:bg-yellow-300 transition-colors cursor-pointer text-lg">
                Get Early Access
              </button>

            </div>
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
          <p className="text-gray-400">SolarPal handles the complexity. You stay in control.</p>
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

      {/* Solar Pal Chat Preview Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Real notifications. Plain English. No fluff.</h2>
          </div>

          <div className="space-y-4">

            {/* AI — routine update */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3 items-start"
            >
              <div className="w-8 h-8 rounded-full bg-yellow-400/20 border border-yellow-400/30 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-yellow-400 text-xs font-bold">SP</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 max-w-sm">
                <p className="text-sm text-gray-300 leading-relaxed">Good week! Your panels hit 96% of expected output. You've offset 21kg of CO₂ this month. All good here. 🌿</p>
              </div>
            </motion.div>

            {/* AI — recommendation + slot picker */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex gap-3 items-start"
            >
              <div className="w-8 h-8 rounded-full bg-yellow-400/20 border border-yellow-400/30 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-yellow-400 text-xs font-bold">SP</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 max-w-sm space-y-3">
                <p className="text-sm text-gray-300 leading-relaxed">
                  PM10 elevated 6 days, output gap at 11%. <span className="text-yellow-400 font-medium">Wednesday 23 April</span> is your best clean window. Pick a time:
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {["9:00 AM", "10:00 AM", "12:00PM", "1:00 PM"].map((slot) => (
                    <button
                      key={slot}
                      className="bg-white/5 border border-white/10 rounded-lg py-1.5 text-xs text-gray-300 hover:border-yellow-400/40 hover:text-yellow-400 transition-colors"
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* User - tapped 1 PM */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex justify-end"
            >
              <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                <p className="text-sm text-gray-300">1:00 PM</p>
              </div>
            </motion.div>

            {/* AI booking summary + confirm */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-3 items-start"
            >
              <div className="w-8 h-8 rounded-full bg-yellow-400/20 border border-yellow-400/30 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-yellow-400 text-xs font-bold">SP</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 max-w-sm space-y-3">
                <p className="text-sm text-gray-300 leading-relaxed">Here's your booking summary:</p>
                <div className="bg-white/5 rounded-xl p-3 text-xs space-y-1.5 text-gray-400">
                  <div className="flex justify-between"><span>📅 Date</span><span className="text-white">Wednesday 23 April</span></div>
                  <div className="flex justify-between"><span>⏰ Time</span><span className="text-white">1:00 PM</span></div>
                  <div className="flex justify-between"><span>💰 Est. recovery</span><span className="text-yellow-400">~$22 / 30 days</span></div>
                  <div className="flex justify-between"><span>🌿 CO₂ recovered</span><span className="text-green-400">~14kg</span></div>
                </div>
                <button className="w-full bg-yellow-400 text-black text-xs font-bold py-2 rounded-lg">
                  Confirm Booking
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 font-jayagiri">Maximum ROI, <br />Zero Effort.</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                SolCare was founded on the principle that solar energy is an asset, not just a utility. A dirty panel isn't just a maintenance chore, it's a silent leak in your financial and environmental investment.
                Over time, debris build up can lead to permanent surface degradation, decreasing your panels lifespan.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We're not just a cleaning booking app. We're a <span className="text-white font-medium">Solar Asset Management and Preventive Maintenance Platform</span> and SolarPal is the intelligence at the centre of it. By combining your live inverter data with NZ weather patterns, particulate matter readings, temperature derating models, and national grid emission factors, SolarPal knows exactly what your system should be producing at any given moment and flags the difference when soiling is genuinely to blame.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                When SolarPal confirms a clean is worth it, it tells you why with the ROI worked out and handles the booking from end to end. Your vetted local pro is dispatched automatically. No forms, no phone calls, no guesswork.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Through our HelioAPI carbon integration, every kilowatt you recover gets tracked as a real CO₂ offset. And for every $10 of CO₂ your system saves, we facilitate a donation to a reforestation project of your choosing, turning your roof into a literal engine for a greener New Zealand.
              </p>
              <div className="flex items-center gap-4 text-sm font-bold text-yellow-400 uppercase tracking-widest">
                <span>AI Powered</span>
                <span className="w-1 h-1 rounded-full bg-gray-700" />
                <span>Vetted Pros</span>
                <span className="w-1 h-1 rounded-full bg-gray-700" />
                <span>Kiwi Owned</span>
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

      {/* FOOTER */}
      <footer className="px-6 py-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link href="/blog" className="text-sm text-gray-600 hover:text-white transition-colors">Blog</Link>
          <Link href="/about" className="text-sm text-gray-600">About</Link>
          <a
            href="mailto:solcare.info@gmail.com"
            className="flex items-center gap-1 text-m text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="w-6 h-5" />
            solcare.info@gmail.com
          </a>
        </div>
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => setIsTermsModalOpen(true)}
            className="text-gray-500 text-[10px] uppercase tracking-widest hover:text-white transition-colors cursor-pointer"
          >
            Terms & Conditions
          </button>
        </div>
        <span className="text-xs text-gray-700">© 2026 SolCare. All rights reserved · Made in Aotearoa with ❤️</span>
      </footer>

      <ImpactModal isOpen={isImpactModalOpen} onClose={() => setIsImpactModalOpen(false)} />
      <TermsModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
    </main>
  );
}