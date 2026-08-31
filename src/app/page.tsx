"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Zap, BarChart3, Check, Mail, Menu, X, Activity, Bell, CalendarCheck, Settings, ArrowRight, ChevronDown, Instagram, Facebook } from 'lucide-react';
import WaitlistForm from '../../components/WaitlistForm';
import Image from 'next/image';
import TermsModal from '../../components/TermsModal';
import { useState } from 'react';
import Link from 'next/link';
import HeroImageCarousel from "../../components/HeroImageCarousel";
import ServicePillars from '../../components/ServicePillars';
import SolarPal from "../../components/SolarPal";
import styles from "./Navigation.module.css";

import { fadeUp, fadeIn } from "@/lib/variants";

const steps = [
  {
    icon: <Settings className="w-5 h-5" />,
    title: "Sync Your System",
    desc: "We sync directly with your inverter to pull real time peoduction data. No hardware required, just a simple digital 'handshake' and Sola gets to work."
  },
  {
    icon: <Activity className="w-5 h-5" />,
    title: "Sola Monitors 24/7",
    desc: "Sola analyses your output daily against live local weather, temperature, and air quality data so it knows the difference between an efficiency drop caused by a hot day and dirty panels."
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

const megaMenuSections = [
  {
    title: "Learn",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "How It Works", href: "#how-it-works" },
    ],
  },
  {
    title: "SolCare.",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Get in Touch", href: "mailto:solcare.info@gmail.com" },
    ],
  },
  {
    title: "Investors",
    links: [
      { label: "The Signal", href: "#the-signal" },
      { label: "Request the Deck", href: "mailto:solcare.info@gmail.com?subject=SolCare%20%E2%80%94%20Investor%20Inquiry" },
    ],
  },
];


export default function Home() {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0D0D0B] text-[#F5F0E8] selection:bg-[#F5A623] selection:text-black overflow-x-hidden">

      {/* Subtle background overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* Nav */}
      <div className="relative z-50">
        <nav className="px-6 py-5 flex justify-between items-center max-w-7xl mx-auto relative z-50">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-25 h-25 flex-shrink-0 -mt-22 -ml-10 -mr-16">
              <Image
                src="/icon.png"
                alt="SolCare Icon"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
                style={{ filter: 'drop-shadow(0 0 18px rgba(245,166,35,0.55))' }}
              />
            </div>
            <div className="relative w-70 h-70 -mt-15">
              <Image
                src="/solcare.png"
                alt="SolCare Logo"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
                style={{ filter: 'invert(1) brightness(2)' }}
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
          <div className="hidden md:flex items-center gap-8">
            {/* Main nav links */}
            <div className="flex items-center gap-7">
              <Link
                href="/"
                className="text-m font-medium -mt-20 text-[#A09D96] hover:text-[#F5F0E8] transition-colors duration-200 tracking-wide"
              >
                Home
              </Link>

              {/* Mega Menu Trigger */}
              <div className="relative group">
                <div className={`relative -mt-15 p-0.5 rounded-full overflow-hidden hover:scale-105 transition duration-300 active:scale-100 ${styles.buttonWrapper}`}>
                  <button
                    onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                    onMouseEnter={() => setIsMegaMenuOpen(true)}
                    onMouseLeave={() => setIsMegaMenuOpen(false)}
                    className="relative z-10 bg-[#0D0D0B] rounded-full px-4 py-2 flex items-center gap-1.5 text-m font-medium text-[#A09D96] hover:text-[#F5F0E8] transition-colors duration-200 tracking-wide cursor-pointer"
                  >
                    Menu
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {isMegaMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.15 }}
                      onMouseEnter={() => setIsMegaMenuOpen(true)}
                      onMouseLeave={() => setIsMegaMenuOpen(false)}
                      className="absolute right-0 mt-2 w-[min(calc(100vw-3rem),42rem)]"
                    >
                      <div
                        className="rounded-2xl border shadow-xl overflow-hidden"
                        style={{
                          background: "#1A1A18",
                          borderColor: "rgba(34, 195, 142, 0.15)",
                          boxShadow: "0 20px 60px rgba(34, 195, 142, 0.1)",
                        }}
                      >
                        {/* Social Icons Header */}
                        <div
                          className="px-8 py-4 flex items-center gap-4"
                          style={{ borderBottom: "1px solid rgba(255, 250, 235, 0.08)" }}
                        >
                          <span className="text-xs font-semibold uppercase tracking-[0.1em]" style={{ color: "#6B6860" }}>
                            Follow Us
                          </span>
                          <div className="flex gap-3">
                            <a
                              href="https://instagram.com/solcare.nz"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg transition-all duration-200"
                              style={{
                                color: "#A09D96",
                                background: "rgba(34, 195, 142, 0.08)",
                              }}
                              onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.background = "rgba(34, 195, 142, 0.15)";
                                (e.currentTarget as HTMLElement).style.color = "#22C38E";
                              }}
                              onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.background = "rgba(34, 195, 142, 0.08)";
                                (e.currentTarget as HTMLElement).style.color = "#A09D96";
                              }}
                              aria-label="Instagram"
                            >
                              <Instagram className="w-4 h-4" />
                            </a>
                            <a
                              href="https://www.facebook.com/share/1CjZJ9wdcn/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg transition-all duration-200"
                              style={{
                                color: "#A09D96",
                                background: "rgba(34, 195, 142, 0.08)",
                              }}
                              onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.background = "rgba(34, 195, 142, 0.15)";
                                (e.currentTarget as HTMLElement).style.color = "#22C38E";
                              }}
                              onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.background = "rgba(34, 195, 142, 0.08)";
                                (e.currentTarget as HTMLElement).style.color = "#A09D96";
                              }}
                              aria-label="Facebook"
                            >
                              <Facebook className="w-4 h-4" />
                            </a>
                          </div>
                        </div>

                        {/* Menu Columns */}
                        <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-6 md:px-8 py-6">
                          {megaMenuSections.map((section, idx) => (
                            <div key={idx}>
                              <h3 className="text-xs font-bold uppercase tracking-[0.1em] mb-4" style={{ color: "#22C38E" }}>
                                {section.title}
                              </h3>
                              <ul className="space-y-2.5">
                                {section.links.map((link) => (
                                  <li key={link.href}>
                                    <Link
                                      href={link.href}
                                      className="text-sm transition-colors duration-200 block"
                                      style={{ color: "#A09D96" }}
                                      onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.color = "#22C38E";
                                      }}
                                      onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.color = "#A09D96";
                                      }}
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>

              </div>
            </div>
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
                className="md:hidden absolute top-[52px] left-4 right-6 z-50 rounded-2xl border border-[rgba(255,250,235,0.1)] bg-[#1A1A16]/98 backdrop-blur-xl shadow-2xl overflow-hidden"
              >
                <div className="flex flex-col py-2">
                  {[
                    { href: "/blog", label: "Blog" },
                    { href: "/about", label: "About Us" },
                    { href: "/#the-signal", label: "Investors" },
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
                  <div className="px-5 py-1 flex items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.1em]" style={{ color: "#6B6860" }}>
                      Follow Us
                    </span>
                    <a
                      href="https://instagram.com/solcare.nz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg transition-all duration-200"
                      style={{ color: "#A09D96", background: "rgba(34, 195, 142, 0.08)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(34, 195, 142, 0.15)";
                        (e.currentTarget as HTMLElement).style.color = "#22C38E";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(34, 195, 142, 0.08)";
                        (e.currentTarget as HTMLElement).style.color = "#A09D96";
                      }}
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.facebook.com/share/1CjZJ9wdcn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg transition-all duration-200"
                      style={{ color: "#A09D96", background: "rgba(34, 195, 142, 0.08)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(34, 195, 142, 0.15)";
                        (e.currentTarget as HTMLElement).style.color = "#22C38E";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(34, 195, 142, 0.08)";
                        (e.currentTarget as HTMLElement).style.color = "#A09D96";
                      }}
                      aria-label="Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Hero */}
      <section
        className="relative px-6 pt-16 pb-28 max-w-7xl mx-auto"

      >

        <div className="relative grid md:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div className="flex flex-col items-start">

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-5xl md:text-[64px] -mt-32 font-bold tracking-[-0.02em] leading-[1.08] mb-6"
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


      <ServicePillars />

      {/* Feature Highlight */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-[28px] overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(245,166,35,0.07) 0%, rgba(34,195,142,0.05) 100%), radial-gradient(ellipse 300px 250px at 100% 0%, rgba(245,166,35,0.08) 0%, transparent 70%), radial-gradient(ellipse 300px 250px at 0% 100%, rgba(34,195,142,0.07) 0%, transparent 70%)",
            border: "1px solid rgba(245,166,35,0.18)",
          }}
        >

          <div className="relative p-10 md:p-16">
            <div className="max-w-3xl mx-auto text-center">

              {/* Character */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-center justify-center mb-6"
              >
                <SolarPal state="idle" size={250} />
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-5">
                The AI that talks to your roof.
              </h2>
              <p className="text-[#A09D96] text-lg leading-[1.75] mb-12 max-w-2xl mx-auto">
                Sola is your always on personal AI companion at the core of SolCare. It reads your live inverter data,
                cross references live local weather conditions, particulate matter (PM), and temperature data daily, and notifies
                you directly, not just when something's wrong, but to keep you informed about how your system is
                performing and what it's worth.
              </p>

              {/* capability cards */}
              <div className="grid md:grid-cols-3 gap-4 text-left">
                {[
                  {
                    icon: <Activity className="w-4 h-4" />,
                    title: "Diligent Analysis",
                    desc: "Sola monitors your output daily and separates real soiling from hot weather, shading, and seasonal dips, so you never get a false alarm.",
                  },
                  {
                    icon: <Bell className="w-4 h-4" />,
                    title: "Accurate Forecasting",
                    desc: "Rather than waiting for a problem, Sola predicts when soiling will cross the threshold and suggests the optimal clean date before output takes a real hit.",
                  },
                  {
                    icon: <CalendarCheck className="w-4 h-4" />,
                    title: "Suggestive Booking",
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

      {/* Investor Deck */}
      <section
        id="the-signal"
        className="px-6 py-28"
        style={{ background: "rgba(255,250,235,0.015)", borderTop: "1px solid rgba(255,250,235,0.06)", borderBottom: "1px solid rgba(255,250,235,0.06)" }}
      >
        <div className="max-w-4xl mx-auto">

          {/* Section header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] mb-5" style={{ color: "#22C38E" }}>
              Pre-seed
            </p>
            <p className="text-[#A09D96] text-lg leading-[1.75] max-w-2xl">
              AI powered solar asset management, built for the world. Seeking investment to complete the product build, launch in New Zealand, and establish the model before scaling.
            </p>
          </motion.div>

          {/* Slides */}
          <div>

            {/* 01 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="py-14 border-t"
              style={{ borderColor: "rgba(255,250,235,0.07)" }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.14em] mb-5" style={{ color: "#22C38E" }}>01 · The problem</p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-5">A silent leak in every solar system.</h3>
              <p className="text-[#A09D96] leading-[1.8] mb-8 max-w-2xl">
                Soiling from salt, pollen, dust, and debris cuts solar output by 10-30%. Most owners never know it's happening. They clean when it looks dirty, or when someone knocks on the door. No data. No timing. No verification that the clean actually worked.
              </p>
              <ul className="space-y-3">
                {[
                  "Soiling reduces output by 10-30%, continuously",
                  "Owners rely on guesswork to decide when to clean",
                  "Cleaning is reactive and uncoordinated",
                  "Lost yield compounds over weeks and months",
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#A09D96]">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(34,195,142,0.15)", border: "1px solid rgba(34,195,142,0.3)" }}>
                      <Check className="w-2.5 h-2.5" style={{ color: "#22C38E" }} />
                    </div>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 02 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="py-14 border-t"
              style={{ borderColor: "rgba(255,250,235,0.07)" }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.14em] mb-5" style={{ color: "#22C38E" }}>02 · The product</p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-5">Sola. The intelligence layer your solar system never had.</h3>
              <p className="text-[#A09D96] leading-[1.8] mb-8 max-w-2xl">
                Sola connects to your inverter, reads your system's production, irradiance, live weather and air quality data, and tells you exactly what your system should be producing, and precisely when soiling is to blame. Then it books the clean
              </p>
              <ul className="space-y-3">
                {[
                  "Direct inverter sync, no hardware required",
                  "Daily output compared against modelled irradiance and local conditions",
                  "Soiling isolated from heat loss, shading, and seasonal variation",
                  "Forecasts the optimal clean window 5-14 days out",
                  "One tap booking, automatic dispatch via local partner network",
                  "Cleaner reports back with thermal imaging checks and maintenance notes",
                  "CO₂ offset logged for every kilowatt recovered",
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#A09D96]">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(34,195,142,0.15)", border: "1px solid rgba(34,195,142,0.3)" }}>
                      <Check className="w-2.5 h-2.5" style={{ color: "#22C38E" }} />
                    </div>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 03 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="py-14 border-t"
              style={{ borderColor: "rgba(255,250,235,0.07)" }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.14em] mb-5" style={{ color: "#22C38E" }}>03 · Market opportunity</p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-5">Residential and commercial solar is scaling. Maintenance hasn't caught up.</h3>
              <p className="text-[#A09D96] leading-[1.8] mb-8 max-w-2xl">
                Millions of solar systems are installed each year, yet the maintenance market remains largely undigitised. No AI native platform to close the loop from performance monitoring to managed cleaning.
              </p>
              <ul className="space-y-3">
                {[
                  "Australia has 4 million+ rooftop solar installations, the immediate adjacent market",
                  "The solar maintenance market is untouched by software",
                  "No platform combines AI monitoring, soiling forecasting, and clean dispatch in a single product",
                  "SolCare enters as the category defining platform",
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#A09D96]">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(34,195,142,0.15)", border: "1px solid rgba(34,195,142,0.3)" }}>
                      <Check className="w-2.5 h-2.5" style={{ color: "#22C38E" }} />
                    </div>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 04 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="py-14 border-t"
              style={{ borderColor: "rgba(255,250,235,0.07)" }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.14em] mb-5" style={{ color: "#22C38E" }}>04 · Where we are</p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-5">Building now.</h3>
              <p className="text-[#A09D96] leading-[1.8] mb-8 max-w-2xl">
                SolCare is in active development. We're building the core architecture, inverter sync, AI output model, and the Sola conversational interface for a New Zealand waitlist launch.
              </p>
              <ul className="space-y-3">
                {[
                  "Inverter integration and output modelling: in development",
                  "Sola conversational interface: in development",
                  "Cleaner network: recruiting operators in Auckland",
                  "Waitlist live, NZ established as initial launch market",
                  "Australia scoped as the next market",
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#A09D96]">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(34,195,142,0.15)", border: "1px solid rgba(34,195,142,0.3)" }}>
                      <Check className="w-2.5 h-2.5" style={{ color: "#22C38E" }} />
                    </div>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 05 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="py-14 border-t"
              style={{ borderColor: "rgba(255,250,235,0.07)" }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.14em] mb-5" style={{ color: "#22C38E" }}>05 · Go-to-market</p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-8">Start focused. Scale regionally.</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    phase: "Phase 1",
                    title: "NZ Launch",
                    desc: "Waitlist driven controlled rollout. Target solar owner communities, residential and commercial. Validate unit economics and train the AI model with real world data.",
                  },
                  {
                    phase: "Phase 2",
                    title: "Australia",
                    desc: "4M+ rooftop solar installations. Same soiling conditions, same language, same maintenance gap. Expand with a proven model and a trained cleaner network.",
                  },
                  {
                    phase: "Phase 3",
                    title: "Platform",
                    desc: "Open the infrastructure to installers who want to offer monitoring as a service. Scale the cleaner network through a mix of contracted teams and local partnerships.",
                  },
                ].map((p, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl"
                    style={{ background: "rgba(255,250,235,0.03)", border: "1px solid rgba(255,250,235,0.08)" }}
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.1em] mb-2" style={{ color: "#22C38E" }}>{p.phase}</p>
                    <h4 className="font-semibold text-[#F5F0E8] mb-3 tracking-[-0.01em]">{p.title}</h4>
                    <p className="text-sm text-[#6B6860] leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 06 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="py-14 border-t"
              style={{ borderColor: "rgba(255,250,235,0.07)" }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.14em] mb-5" style={{ color: "#22C38E" }}>06 · The founder</p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-8">Built by someone who's done the work.</h3>
              <div
                className="p-8 rounded-2xl"
                style={{ background: "rgba(255,250,235,0.03)", border: "1px solid rgba(255,250,235,0.08)" }}
              >
                <p className="font-semibold text-[#F5F0E8] mb-1 tracking-[-0.01em]">Shalum Samuels</p>
                <p className="text-xs uppercase tracking-[0.1em] mb-5" style={{ color: "#22C38E" }}>Founder</p>
                <p className="text-sm text-[#A09D96] leading-[1.8] mb-4">
                  7+ years in New Zealand's solar industry, from technician to system design, across residential, off-grid and RV installations. I observed how soiling silently erodes panel performance and how disconnected the maintenance side of the industry was from real performance data.
                </p>
                <p className="text-sm text-[#A09D96] leading-[1.8]">
                  That technical experience pushed me into software development. As a solo founder and developer building SolCare from scratch, bringing industry expertise and product building experience to solve the same problem.
                </p>
              </div>
            </motion.div>

            {/* 07 
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="py-14 border-t"
              style={{ borderColor: "rgba(255,250,235,0.07)" }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.14em] mb-5" style={{ color: "#22C38E" }}>07 · Funding ask</p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-5">Seeking investment.</h3>
              <p className="text-[#A09D96] leading-[1.8] mb-8 max-w-2xl">
                To complete the product build, activate the NZ waitlist, establish the cleaner partner network, and lay the groundwork for the Australian market.
              </p>
              <ul className="space-y-3">
                {[
                  "Product & infrastructure — complete Sola and the inverter sync layer",
                  "Launch & go-to-market — NZ waitlist activation and early user acquisition",
                  "Cleaner partner network — onboard and vet local cleaning partners",
                  "Foundation for Australian market entry",
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#A09D96]">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(34,195,142,0.15)", border: "1px solid rgba(34,195,142,0.3)" }}>
                      <Check className="w-2.5 h-2.5" style={{ color: "#22C38E" }} />
                    </div>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div> */}

          </div>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6 pt-12 border-t flex flex-col sm:flex-row items-start sm:items-center gap-4"
            style={{ borderColor: "rgba(255,250,235,0.07)" }}
          >
            <a
              href="mailto:solcare.info@gmail.com?subject=SolCare%20%E2%80%94%20Investor%20Inquiry"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-black transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #FFD166, #F5A623)",
                boxShadow: "0 4px 24px rgba(245,166,35,0.25)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 32px rgba(245,166,35,0.4)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 24px rgba(245,166,35,0.25)"; }}
            >
              Request the full deck
              <ArrowRight className="w-4 h-4" />
            </a>
            <span className="text-sm" style={{ color: "#6B6860" }}>solcare.info@gmail.com</span>
          </motion.div>

        </div>
      </section>

      {/* how it works*/}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <section id="how-it-works">
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
      </section>



      {/* about */}
      <section
        className="py-28 px-6"
        style={{ background: "rgba(255,250,235,0.015)", borderTop: "1px solid rgba(255,250,235,0.06)", borderBottom: "1px solid rgba(255,250,235,0.06)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-14 items-center">
            <div className="flex-1">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-7 font-jayagiri leading-tight">
                  Maximum ROI,{" "}<br />Zero Effort.
                </h2>
              </motion.div>

              {[
                "SolCare was founded on the principle that solar energy is an asset, not just a utility. A dirty panel isn't just a maintenance chore, it's a silent leak in your financial and environmental investment. Over time, debris build up can lead to permanent surface degradation, decreasing your panels lifespan.",
                null,
                "When Sola confirms a clean is worth it, it tells you why with the ROI worked out and handles the booking from end to end. Your vetted local pro is dispatched automatically. No forms, no phone calls, no guesswork.",
                "Through our carbon tracking integration, every kilowatt you recover from soiling is logged as a real CO₂ offset, putting a number on what clean panels actually contribute to a cleaner grid.",
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
                      We are a{" "}
                      <span className="text-[#F5F0E8] font-semibold">Solar Asset Management and Preventive Maintenance Platform</span>{" "}
                      and Sola is the intelligence at the centre of it. By combining your live inverter data with local weather patterns,
                      particulate matter readings, temperature derating models, and regional grid emission factors, Sola knows exactly
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
                {["AI Powered", "Vetted Pros", "Climate Positive"].map((label, i) => (
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

      {/* footer */}
      <footer className="px-6 py-8 md:py-10 max-w-7xl mx-auto">
        <div
          className="pt-6 md:pt-8"
          style={{ borderTop: "1px solid rgba(255,250,235,0.07)" }}
        >
          {/* Main Footer - Responsive Layout */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
            {/* Links Section - Stacks vertically on mobile, horizontally on md+ */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              {[
                { href: "/", label: "Home" },
                { href: "/blog", label: "Blog" },
                { href: "/about", label: "About Us" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm transition-colors duration-200 whitespace-nowrap"
                  style={{ color: "#6B6860" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#A09D96";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#6B6860";
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Email & Contact */}
            <a
              href="mailto:solcare.info@gmail.com"
              className="flex items-center gap-1.5 text-sm transition-colors duration-200 truncate"
              style={{ color: "#6B6860" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#A09D96";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#6B6860";
              }}
              title="solcare.info@gmail.com"
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="hidden sm:inline">solcare.info@gmail.com</span>
              <span className="sm:hidden text-xs">Get in Touch</span>
            </a>

            {/* Terms & Copyright - Stack on mobile */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <button
                onClick={() => setIsTermsModalOpen(true)}
                className="text-xs uppercase tracking-[0.16em] transition-colors duration-200 cursor-pointer text-left sm:text-right"
                style={{ color: "#6B6860" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "#A09D96";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "#6B6860";
                }}
              >
                Terms & Conditions
              </button>

              <span className="text-xs" style={{ color: "#3D3D38" }}>
                © 2026 SolCare. All rights reserved.
              </span>
            </div>
          </div>

          {/* Social Media Links - Below main footer */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-4 md:pt-6">
            <span
              className="text-xs font-semibold uppercase tracking-[0.1em] order-2 sm:order-1"
              style={{ color: "#6B6860" }}
            >
              Follow Us
            </span>
            <div className="flex gap-3 order-1 sm:order-2">
              <a
                href="https://instagram.com/solcare.nz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all duration-200"
                style={{
                  color: "#A09D96",
                  background: "rgba(34, 195, 142, 0.08)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(34, 195, 142, 0.15)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#22C38E";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(34, 195, 142, 0.08)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#A09D96";
                }}
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/1CjZJ9wdcn/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all duration-200"
                style={{
                  color: "#A09D96",
                  background: "rgba(34, 195, 142, 0.08)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(34, 195, 142, 0.15)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#22C38E";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(34, 195, 142, 0.08)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#A09D96";
                }}
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* <TermsModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} /> */}
    </main>
  );
}