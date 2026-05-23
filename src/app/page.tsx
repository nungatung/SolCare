"use client";

// ─────────────────────────────────────────────────────────────────────────────
// Design tokens — warm dark palette, solar-inspired
// bg-[#0D0D0B]   warm near-black background
// bg-[#161612]   card surface
// bg-[#1E1E19]   elevated surface
// #F5A623        solar amber — primary accent
// #22C38E        green primary — brighter / more saturated
// #F5F0E8        warm off-white text
// #A09D96        warm secondary text
// ─────────────────────────────────────────────────────────────────────────────

import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Zap, BarChart3, Check, Info, Mail, Menu, X, Activity, Bell, CalendarCheck, Settings, ArrowRight } from 'lucide-react';
import WaitlistForm from '../../components/WaitlistForm';
import Image from 'next/image';
import ImpactModal from '../../components/ImpactModal';
import TermsModal from '../../components/TermsModal';
import { useState } from 'react';
import Link from 'next/link';
import HeroImageCarousel from "../../components/HeroImageCarousel";
import ServicePillars from '../../components/ServicePillars';
import SolarPal from "../../components/SolarPal";

import { fadeUp, fadeIn } from "@/lib/variants";



// ─── Data ─────────────────────────────────────────────────────────────────────
const features = [
  "Sola - Your Personal Solar Companion",
  "AI Powered Soiling Forecasts (Irradiance + Weather + PM2.5 Intelligence)",
  "Minimum 2 Professional Cleans / Year, more when Sola detects it's needed",
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
    icon: <Settings className="w-5 h-5" />,
    title: "Sync Your System",
    desc: "We sync directly with your inverter to pull real time peoduction data. No hardware required, just a simple digital 'handshake' and Sola gets to work."
  },
  {
    icon: <Activity className="w-5 h-5" />,
    title: "Sola Monitors 24/7",
    desc: "Sola analyses your output daily against live New Zealand weather, temperature, and air quality data so it knows the difference between an efficiency drop caused by a hot day and dirty panels."
  },
  {
    icon: <Bell className="w-5 h-5" />,
    title: "Proactive Updates & Alerts",
    desc: "Sola messages you with regular performance updates, early soiling forecasts, and a clean recommendation, complete with ROI math before your output takes a real hit."
  },
  {
    icon: <CalendarCheck className="w-5 h-5" />,
    title: "One Tap Booking",
    desc: "Sola suggests the optimal clean date, you confirm the time, and it handles dispatch automatically. Your vetted local cleaner is sent out to you, no back and forth needed."
  }
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Home() {
  const [isImpactModalOpen, setIsImpactModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0D0D0B] text-[#F5F0E8] selection:bg-[#F5A623] selection:text-black overflow-x-hidden">

      {/* ─── Subtle background grain overlay ───────────────────────────────── */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* ─── NAVBAR ─────────────────────────────────────────────────────────── */}
      <div className="relative z-50">
        <nav className="px-6 py-5 flex justify-between items-center max-w-7xl mx-auto">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-25 h-25 flex-shrink-0 -mt-22 -ml-10 -mr-16">
              <Image
                src="/icon.png"
                alt="SolCare Icon"
                fill
                className="object-contain drop-shadow-[0_0_18px_rgba(245,166,35,0.55)]"
              />
            </div>
            <div className="relative w-70 h-70 -mt-15">
              <Image
                src="/solcare.png"
                alt="SolCare Logo"
                fill
                className="object-contain invert brightness-200"
              />
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 md:hidden -mt-14 transition-all active:scale-100 relative z-[100] cursor-pointer"
            aria-label="Toggle Mobile Menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {[
              { href: "/blog", label: "Blog" },
              { href: "/about", label: "About" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-[#A09D96] hover:text-[#F5F0E8] transition-colors duration-200 tracking-wide"
              >
                {label}
              </Link>
            ))}
            <a
              href="mailto:solcare.info@gmail.com"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#A09D96] hover:text-[#F5F0E8] transition-colors duration-200"
            >
              <Mail className="w-3.5 h-3.5" />
              Get in Touch
            </a>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="md:hidden absolute top-[52px] left-4 right-4 z-50 rounded-2xl border border-[rgba(255,250,235,0.1)] bg-[#1A1A16]/98 backdrop-blur-xl shadow-2xl overflow-hidden"
              >
                <div className="flex flex-col py-2">
                  {[
                    { href: "/blog", label: "Blog" },
                    { href: "/about", label: "About" },
                  ].map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setIsMenuOpen(false)}
                      className="px-5 py-3.5 text-sm font-medium text-[#A09D96] hover:text-[#F5F0E8] hover:bg-white/[0.04] transition-colors"
                    >
                      {label}
                    </Link>
                  ))}
                  <div className="mx-4 my-1 h-px bg-[rgba(255,250,235,0.07)]" />
                  <a
                    href="mailto:solcare.info@gmail.com"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-5 py-3.5 text-sm font-medium text-[#A09D96] hover:text-[#F5F0E8] hover:bg-white/[0.04] transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#22C38E]" />
                    Get in Touch
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* ─── HERO ────────────────────────────────────────────────────────────── */}
      <section className="relative px-6 pt-16 pb-28 max-w-7xl mx-auto">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#F5A623]/[0.06] blur-[120px] -translate-x-1/4 -translate-y-1/4" />
        <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#22C38E]/[0.05] blur-[100px] translate-x-1/4 -translate-y-1/4" />

        <div className="relative grid md:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div className="flex flex-col items-start">

            {/* Eyebrow pill */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-3.5 py-1.5  mb-7
                text-[#F5A623] text-xs font-semibold tracking-[0.06em] uppercase"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5A623] animate-pulse" />
              Powered by Sola, your AI solar companion
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-5xl md:text-[64px] font-bold tracking-[-0.02em] leading-[1.08] mb-6"
            >
              Your Solar,{" "}
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #FFD166 0%, #F5A623 55%, #E8920A 100%)" }}
              >
                On Autopilot.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-[#A09D96] text-lg leading-[1.75] mb-8 max-w-lg"
            >
              Protect and maximize your solar investment with SolCare.
              We ensure that your solar panels operate at optimal efficiency with our smart AI powered
              monitoring, preventive maintenance and professional cleaning.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="w-full"
            >
              <WaitlistForm />
            </motion.div>
          </div>

          {/* Right — carousel */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <HeroImageCarousel />
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICE PILLARS ─────────────────────────────────────────────────── */}
      <ServicePillars />

      {/* ─── SOLARPAL FEATURE HIGHLIGHT ──────────────────────────────────────── */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-[28px] overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(245,166,35,0.07) 0%, rgba(34,195,142,0.05) 100%)",
            border: "1px solid rgba(245,166,35,0.18)",
          }}
        >
          {/* Corner glow */}
          <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#F5A623]/[0.08] blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#22C38E]/[0.07] blur-[80px]" />

          <div className="relative p-10 md:p-16">
            <div className="max-w-3xl mx-auto text-center">

              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8
                  text-m italic font-bold uppercase tracking-[0.1em]"
                style={{
                  background: "rgba(245,166,35,0.1)",
                  border: "1px solid rgba(245,166,35,0.25)",
                  color: "#F5A623",
                }}
              >
                Say Hi to Sola
              </div>

              {/* Character */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-center mb-6"
              >
                <SolarPal state="idle" size={200} />
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-5">
                The AI that talks to your roof.
              </h2>
              <p className="text-[#A09D96] text-lg leading-[1.75] mb-12 max-w-2xl mx-auto">
                Sola is your always on personal AI companion at the core of SolCare. It reads your live inverter data,
                cross references New Zealand weather patterns, particulate matter (PM), and temperature conditions daily, and notifies
                you directly, not just when something's wrong, but to keep you informed about how your system is
                performing and what it's worth.
              </p>

              {/* Three capability cards */}
              <div className="grid md:grid-cols-3 gap-4 text-left">
                {[
                  {
                    icon: <Activity className="w-4 h-4" />,
                    title: "Watches, not waits",
                    desc: "Sola monitors your output daily and separates real soiling from hot weather, shading, and seasonal dips, so you never get a false alarm.",
                  },
                  {
                    icon: <Bell className="w-4 h-4" />,
                    title: "Forecasts, not reacts",
                    desc: "Rather than waiting for a problem, Sola predicts when soiling will cross the threshold and suggests the optimal clean date before output takes a real hit.",
                  },
                  {
                    icon: <CalendarCheck className="w-4 h-4" />,
                    title: "Books, not asks",
                    desc: "Sola suggests a date, you pick a time and confirm the booking in chat. One tap and your vetted pro is dispatched automatically.",
                  },
                ].map((card, i) => (
                  <motion.div
                    key={card.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    className="p-6 rounded-2xl"
                    style={{
                      background: "rgba(255,250,235,0.03)",
                      border: "1px solid rgba(255,250,235,0.08)",
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        background: "rgba(245,166,35,0.1)",
                        border: "1px solid rgba(245,166,35,0.2)",
                        color: "#F5A623",
                      }}
                    >
                      {card.icon}
                    </div>
                    <h3 className="font-semibold text-[#F5F0E8] mb-2 tracking-[-0.01em]">{card.title}</h3>
                    <p className="text-sm text-[#6B6860] leading-relaxed">{card.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── PRICING ─────────────────────────────────────────────────────────── */}
      <section
        className="px-6 py-28"
        style={{ background: "rgba(255,250,235,0.015)", borderTop: "1px solid rgba(255,250,235,0.06)", borderBottom: "1px solid rgba(255,250,235,0.06)" }}
      >
        <div className="max-w-7xl mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-3">Transparent Pricing</h2>
            <p className="text-[#A09D96] max-w-md mx-auto leading-relaxed">One plan. No surprises.</p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div
              className="relative p-10 rounded-[28px] transition-transform duration-300 hover:scale-[1.005]"
              style={{
                background: "linear-gradient(160deg, rgba(245,166,35,0.08) 0%, rgba(245,166,35,0.03) 100%)",
                border: "1.5px solid rgba(245,166,35,0.35)",
                boxShadow: "0 0 60px rgba(245,166,35,0.08), inset 0 1px 0 rgba(255,250,235,0.06)",
              }}
            >
              {/* Founding member badge */}
              <div className="absolute -top-[14px] left-1/2 -translate-x-1/2">
                <span
                  className="px-5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.08em] text-black whitespace-nowrap"
                  style={{ background: "linear-gradient(135deg, #FFD166, #F5A623)" }}
                >
                  Founding Member Pricing
                </span>
              </div>

              {/* Plan header */}
              <div className="text-center mb-8 pt-3">
                <h3 className="text-2xl font-bold tracking-[-0.02em] mb-3">SolCare. Complete</h3>
                <p className="text-[#A09D96] text-sm leading-relaxed max-w-md mx-auto">
                  Sola monitors your system year round, forecasts the optimal clean window, and dispatches a vetted cleaner automatically, all for less than the cost of a single one off clean.
                </p>
              </div>

              {/* Price */}
              <div className="flex flex-col items-center mb-5">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[64px] font-bold tracking-[-0.04em] leading-none" style={{ color: "#F5A623" }}>$30</span>
                  <span className="text-[#6B6860] text-lg font-medium">/month</span>
                </div>
                <span className="text-[#6B6860] text-xs mt-2.5 tracking-wide">GST included · Billed monthly · Cancel anytime</span>
              </div>

              {/* Value anchor */}
              <div
                className="rounded-2xl px-6 py-4 mb-9 text-center"
                style={{
                  background: "rgba(255,250,235,0.04)",
                  border: "1px solid rgba(255,250,235,0.08)",
                }}
              >
                <p className="text-sm text-[#A09D96] leading-relaxed">
                  A single professional clean in NZ costs{" "}
                  <span className="text-[#F5F0E8] font-semibold">$100–$300+</span>.{" "}
                  SolCare is{" "}
                  <span style={{ color: "#F5A623" }} className="font-semibold">$360/year</span>
                  {" "}, that's a minimum of 2 managed cleans, plus Sola watching your system 365 days a year.
                  Most members receive more than 2 cleans annually as Sola detects what their system actually needs.
                </p>
              </div>

              {/* Feature list */}
              <ul className="space-y-3.5 mb-10">
                {features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-[#A09D96]">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(34,195,142,0.15)", border: "1px solid rgba(34,195,142,0.3)" }}
                    >
                      <Check className="w-2.5 h-2.5" style={{ color: "#22C38E" }} />
                    </div>
                    <span className="flex flex-wrap items-center gap-x-2 leading-relaxed">
                      {feature}
                      {feature.toLowerCase().includes("impact club") && (
                        <button
                          onClick={() => setIsImpactModalOpen(true)}
                          className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide hover:opacity-80 transition-opacity cursor-pointer"
                          style={{ color: "#22C38E" }}
                        >
                          <Info className="w-2.5 h-2.5" /> What's this?
                        </button>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a 
              href="#">
              <button
                className="w-full py-4 rounded-xl font-bold text-base text-black transition-all duration-200 cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #FFD166, #F5A623)",
                  boxShadow: "0 4px 24px rgba(245,166,35,0.25)",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 32px rgba(245,166,35,0.4)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 24px rgba(245,166,35,0.25)"; }}
              >
                Join the Waitlist             
              </button>
              </a>
            </div>
          </motion.div>

          <div className="mt-10 text-center">
            <button
              onClick={() => setIsTermsModalOpen(true)}
              className="text-[11px] uppercase tracking-[0.18em] transition-colors duration-200 cursor-pointer"
              style={{ color: "#6B6860" }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = "#A09D96"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = "#6B6860"; }}
            >
              View Full Terms & Conditions
            </button>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ────────────────────────────────────────────────────── */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-3 font-jayagiri">How SolCare. Works</h2>
          <p className="text-[#A09D96] max-w-md mx-auto leading-relaxed">Sola handles the complexity. You stay in control.</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="relative flex flex-col items-center text-center"
            >
              {/* Connector */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-7 left-[62%] w-full h-px z-0"
                  style={{ background: "linear-gradient(90deg, rgba(245,166,35,0.4) 0%, rgba(245,166,35,0) 100%)" }}
                />
              )}

              {/* Step number */}
              <div className="relative z-10 mb-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-0"
                  style={{
                    background: "rgba(245,166,35,0.08)",
                    border: "1px solid rgba(245,166,35,0.22)",
                    boxShadow: "0 0 20px rgba(245,166,35,0.06)",
                    color: "#F5A623",
                  }}
                >
                  {step.icon}
                </div>
                <div
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-black"
                  style={{ background: "linear-gradient(135deg, #FFD166, #F5A623)" }}
                >
                  {i + 1}
                </div>
              </div>

              <h3 className="font-semibold text-[#F5F0E8] mb-2.5 tracking-[-0.01em]">{step.title}</h3>
              <p className="text-sm text-[#6B6860] leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CHAT PREVIEW ────────────────────────────────────────────────────── */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A09D96] mb-3">In practice</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em]">Real notifications. Plain English. No fluff.</h2>
          </div>

          {/* Chat thread */}
          <div
            className="rounded-[24px] overflow-hidden"
            style={{ border: "1px solid rgba(255,250,235,0.08)", background: "rgba(255,250,235,0.02)" }}
          >
            {/* Chat header */}
            <div
              className="px-5 py-3 flex items-center gap-3"
              style={{ borderBottom: "1px solid rgba(255,250,235,0.06)", background: "rgba(255,250,235,0.03)" }}
            >
              {/* SolarPal avatar in header — small size */}
              <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                <SolarPal state="idle" size={80} />
              </div>
              <span className="text-m font-medium text-[#F5F0E8]">Sola</span>
            </div>

            <div className="p-5 space-y-4">

              {/* AI message 1 */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
                className="flex gap-2.5 items-end"
              >
                {/* SolarPal avatar — inline with bubble */}
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                  <SolarPal state="idle" size={80} />
                </div>
                <div
                  className="px-4 py-3 rounded-2xl rounded-bl-sm max-w-sm"
                  style={{ background: "rgba(255,250,235,0.05)", border: "1px solid rgba(255,250,235,0.08)" }}
                >
                  <p className="text-sm text-[#A09D96] leading-relaxed">Good week! Your panels hit 96% of expected output. You've offset 21kg of CO₂ this month. All good here. 🌿</p>
                </div>
              </motion.div>

              {/* AI message 2 — slot picker */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
                className="flex gap-2.5 items-end"
              >
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                  <SolarPal state="idle" size={80} />
                </div>
                <div
                  className="px-4 py-3 rounded-2xl rounded-bl-sm max-w-sm space-y-3"
                  style={{ background: "rgba(255,250,235,0.05)", border: "1px solid rgba(255,250,235,0.08)" }}
                >
                  <p className="text-sm text-[#A09D96] leading-relaxed">
                    PM10 elevated 6 days, output gap at 11%.{" "}
                    <span className="font-semibold" style={{ color: "#F5A623" }}>Wednesday 23 April</span>{" "}
                    is your best clean window. Pick a time:
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {["9:00 AM", "10:00 AM", "12:00 PM", "1:00 PM"].map((slot) => (
                      <button
                        key={slot}
                        className="py-1.5 text-xs font-medium rounded-lg transition-all duration-200"
                        style={{
                          background: "rgba(255,250,235,0.04)",
                          border: "1px solid rgba(255,250,235,0.1)",
                          color: "#A09D96",
                        }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(245,166,35,0.4)";
                          (e.currentTarget as HTMLButtonElement).style.color = "#F5A623";
                          (e.currentTarget as HTMLButtonElement).style.background = "rgba(245,166,35,0.06)";
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,250,235,0.1)";
                          (e.currentTarget as HTMLButtonElement).style.color = "#A09D96";
                          (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,250,235,0.04)";
                        }}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* User reply */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                className="flex justify-end"
              >
                <div
                  className="px-4 py-3 rounded-2xl rounded-br-sm max-w-xs"
                  style={{ background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)" }}
                >
                  <p className="text-sm text-[#F5F0E8]">1:00 PM</p>
                </div>
              </motion.div>

              {/* AI booking summary */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
                className="flex gap-2.5 items-end"
              >
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                  <SolarPal state="idle" size={80} />
                </div>
                <div
                  className="px-4 py-3 rounded-2xl rounded-bl-sm max-w-sm space-y-3"
                  style={{ background: "rgba(255,250,235,0.05)", border: "1px solid rgba(255,250,235,0.08)" }}
                >
                  <p className="text-sm text-[#A09D96]">Here's your booking summary:</p>
                  <div
                    className="rounded-xl p-3 text-xs space-y-2"
                    style={{ background: "rgba(255,250,235,0.04)", border: "1px solid rgba(255,250,235,0.07)" }}
                  >
                    {[
                      { label: "Date", value: "Wednesday 23 April", color: "#F5F0E8" },
                      { label: "Time", value: "1:00 PM", color: "#F5F0E8" },
                      { label: "Est. Recovery", value: "~$22 / 30 days", color: "#F5A623" },
                      { label: "CO₂ recovered", value: "~14kg", color: "#22C38E" },
                    ].map(row => (
                      <div key={row.label} className="flex justify-between items-center">
                        <span className="text-[#6B6860]"> {row.label}</span>
                        <span className="font-medium" style={{ color: row.color }}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-black transition-all duration-200"
                    style={{ background: "linear-gradient(135deg, #FFD166, #F5A623)", boxShadow: "0 2px 12px rgba(245,166,35,0.2)" }}
                  >
                    Confirm Booking
                  </button>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── ABOUT / ROI SECTION ─────────────────────────────────────────────── */}
      <section
        className="py-28 px-6"
        style={{ background: "rgba(255,250,235,0.015)", borderTop: "1px solid rgba(255,250,235,0.06)", borderBottom: "1px solid rgba(255,250,235,0.06)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-14 items-center">
            <div className="flex-1">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A09D96] mb-3">About SolCare</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-7 font-jayagiri leading-tight">
                  Maximum ROI,{" "}<br />Zero Effort.
                </h2>
              </motion.div>

              {[
                "SolCare was founded on the principle that solar energy is an asset, not just a utility. A dirty panel isn't just a maintenance chore, it's a silent leak in your financial and environmental investment. Over time, debris build up can lead to permanent surface degradation, decreasing your panels lifespan.",
                null, // special paragraph
                "When Sola confirms a clean is worth it, it tells you why with the ROI worked out and handles the booking from end to end. Your vetted local pro is dispatched automatically. No forms, no phone calls, no guesswork.",
                "Through our HelioAPI carbon integration, every kilowatt you recover gets tracked as a real CO₂ offset. And for every $10 of CO₂ your system saves, we facilitate a donation to a reforestation project of your choosing, turning your roof into a literal engine for a greener New Zealand.",
              ].map((para, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  {para === null ? (
                    <p className="text-[#A09D96] mb-5 leading-[1.8] text-[15px]">
                      We're not just a cleaning booking app. We're a{" "}
                      <span className="text-[#F5F0E8] font-semibold">Solar Asset Management and Preventive Maintenance Platform</span>{" "}
                      and Sola is the intelligence at the centre of it. By combining your live inverter data with NZ weather patterns,
                      particulate matter readings, temperature derating models, and national grid emission factors, Sola knows exactly
                      what your system should be producing at any given moment and flags the difference when soiling is genuinely to blame.
                    </p>
                  ) : (
                    <p className="text-[#A09D96] mb-5 leading-[1.8] text-[15px]">{para}</p>
                  )}
                </motion.div>
              ))}

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-5 mt-2"
              >
                {["AI Powered", "Vetted Pros", "Kiwi Owned"].map((label, i) => (
                  <span key={label} className="flex items-center gap-3">
                    <span
                      className="text-xs font-bold uppercase tracking-[0.1em]"
                      style={{ color: "#F5A623" }}
                    >
                      {label}
                    </span>
                    {i < 2 && <span className="w-1 h-1 rounded-full bg-[#2E2E28]" />}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Brand element */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full md:w-64 h-64 rounded-3xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, rgba(245,166,35,0.08) 0%, rgba(34,195,142,0.06) 100%)",
                border: "1px solid rgba(255,250,235,0.08)",
              }}
            >
              <div className="relative w-28 h-28 opacity-40">
                <Image src="/icon.png" alt="SolCare Brand Icon" fill className="object-contain" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer className="px-6 py-10 max-w-7xl mx-auto">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-5 pt-8"
          style={{ borderTop: "1px solid rgba(255,250,235,0.07)" }}
        >
          <div className="flex items-center gap-6">
            {[
              { href: "/blog", label: "Blog" },
              { href: "/about", label: "About" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm transition-colors duration-200"
                style={{ color: "#6B6860" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#A09D96"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#6B6860"; }}
              >
                {label}
              </Link>
            ))}
            <a
              href="mailto:solcare.info@gmail.com"
              className="flex items-center gap-1.5 text-sm transition-colors duration-200"
              style={{ color: "#6B6860" }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#A09D96"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#6B6860"; }}
            >
              <Mail className="w-3.5 h-3.5" />
              solcare.info@gmail.com
            </a>
          </div>

          <button
            onClick={() => setIsTermsModalOpen(true)}
            className="text-[11px] uppercase tracking-[0.16em] transition-colors duration-200 cursor-pointer"
            style={{ color: "#6B6860" }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = "#A09D96"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = "#6B6860"; }}
          >
            Terms & Conditions
          </button>

          <span className="text-xs" style={{ color: "#3D3D38" }}>
            © 2026 SolCare. All rights reserved · Made in Aotearoa with ❤️
          </span>
        </div>
      </footer>

      <ImpactModal isOpen={isImpactModalOpen} onClose={() => setIsImpactModalOpen(false)} />
      <TermsModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
    </main>
  );
}