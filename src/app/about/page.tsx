"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, Zap, Shield, Heart, Mail, Menu, X, ChevronDown, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import TermsModal from '../../../components/TermsModal';
import styles from "../Navigation.module.css";

// ── Animation system ──────────────────────────────────────────────────────────
const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: EASE },
  }),
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.6, delay: 0.12, ease: EASE },
  },
};

// ── Data ──────────────────────────────────────────────────────────────────────
const values = [
  {
    icon: "bolt.png",
    color: "#F5A623",
    bg: "rgba(245,166,35,0.1)",
    border: "rgba(245,166,35,0.2)",
    title: "Proactive by design",
    desc: "Sola doesn't wait for you to notice a problem. It watches your system around the clock and tells you when your system needs attention before it costs you.",
  },
  {
    icon: "shield.png",
    color: "#22C38E",
    bg: "rgba(34,195,142,0.1)",
    border: "rgba(34,195,142,0.2)",
    title: "Honest about the data",
    desc: "Every recommendation Sola makes is grounded in your real production data, live weather readings, and NZ specific emission factors. No guesswork, no false positives.",
  },
  {
    icon: "environment.png",
    color: "#22C38E",
    bg: "rgba(34,195,142,0.1)",
    border: "rgba(34,195,142,0.2)",
    title: "Built for the environment",
    desc: "The Impact Club isn't a marketing feature. It's a genuine commitment, every kilogram of CO₂ your system offsets translates into a real donation to reforestation in New Zealand and the Pacific.",
  },
  {
    icon: "easy.png",
    color: "#F5A623",
    bg: "rgba(245,166,35,0.1)",
    border: "rgba(245,166,35,0.2)",
    title: "Simple for everyone",
    desc: "Most solar monitoring tools are built for engineers. SolCare is built for homeowners, people who want their system looked after without the industry jargon.",
  },
];

const commitments = [
  {
    stat: "$1",
    label: "donated per 1kg CO₂ offset",
    sub: "Via the Impact Club to reforestation projects of your choice",
  },
  {
    stat: "0.012",
    label: "kg CO₂e per kWh",
    sub: "New Zealand's grid emission factor",
  },
  {
    stat: "100%",
    label: "of donations reach the project",
    sub: "SolCare covers all processing costs",
  },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

const megaMenuSections = [

  {
    title: "Learn",
    links: [
      { label: "Blog", href: "/blog" },
      // { label: "FAQ", href: "/faq" },
      { label: "How It Works", href: "/#how-it-works" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About SolCare.", href: "/about" },
      { label: "Get in Touch", href: "mailto:solcare.info@gmail.com" },
    ],
  },
];


export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0D0D0B] text-[#F5F0E8] selection:bg-[#F5A623] selection:text-black overflow-x-hidden">

      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
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
                      className="absolute -left-1/2 -translate-x-1/2 mt-2 w-screen max-w-2xl mt-6"
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
                        <div className="grid grid-cols-3 gap-8 px-8 py-6">
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
                transition={{ duration: 0.18 }}
                className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.22, ease: EASE }}
                className="md:hidden absolute top-[52px] left-4 right-4 z-50 rounded-2xl shadow-2xl overflow-hidden"
                style={{ border: "1px solid rgba(255,250,235,0.1)", background: "rgba(26,26,22,0.98)" }}
              >
                <div className="flex flex-col py-2">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setIsMenuOpen(false)}
                      className="px-5 py-3.5 text-sm font-medium transition-colors"
                      style={{ color: href === "/about" ? "#F5F0E8" : "#A09D96" }}
                    >
                      {label}
                    </Link>
                  ))}
                  <div className="mx-4 my-1 h-px" style={{ background: "rgba(255,250,235,0.07)" }} />
                  <a
                    href="mailto:solcare.info@gmail.com"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-5 py-3.5 text-sm font-medium flex items-center gap-2 transition-colors"
                    style={{ color: "#A09D96" }}
                  >
                    <Mail className="w-3.5 h-3.5" style={{ color: "#22C38E" }} />
                    Get in Touch
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Hero */}
      <section className="relative px-6 pt-14 pb-20 max-w-7xl mx-auto">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute top-0 left-0 w-96 h-96 rounded-full blur-[100px] -translate-x-1/3 -translate-y-1/3" style={{ background: "rgba(34,195,142,0.06)" }} />
        <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3" style={{ background: "rgba(245,166,35,0.05)" }} />

        <div className="relative grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div variants={fadeLeft} initial="hidden" animate="visible">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-[-0.02em] mb-6">
              Solar that works{" "}
              <span className="italic" style={{ color: "#22C38E" }}>for you.</span>
              <br />Not the other way around.
            </h1>
            <p className="text-lg leading-[1.75]" style={{ color: "#A09D96" }}>
              SolCare was built around a simple observation: most solar owners aren't informed on how often their panels need cleaning and how dirty panels affect their system's performance.
              We built Sola to fix that. It works quietly in the background, without asking anything of you.
            </p>
          </motion.div>

          {/* Right — hero image */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden"
            style={{ border: "1px solid rgba(255,250,235,0.08)" }}
          >
            <Image
              src="/aboutHero.jpg"
              alt="Solar panels on a New Zealand home"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Accent line */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(34,195,142,0.25), transparent)" }} />
      </div>

      {/* ── ORIGIN STORY ───────────────────────────────────────────────────── */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-4 block" style={{ color: "#22C38E" }}>
              Where it all started
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 leading-snug tracking-[-0.02em]">
              A solar system quietly losing money, without anyone noticing
            </h2>
            <div className="space-y-4 text-[15px] leading-[1.8]" style={{ color: "#A09D96" }}>
              <p>
                The idea for SolCare came from a familiar story. A homeowner notices their power bill hasn't dropped as much as expected. They call their installer,
                the installer checks the panels and sees they are soiled, they have been for months. Hundreds of dollars in output, gone.
              </p>
              <p>
                There was no alert. No notification. No other way to know without climbing on the roof to inspect.
                The system kept running, just quietly underperforming month after month.
              </p>
              <p>
                SolCare was built to be the thing that should have existed already: an AI companion that closely watches your system every day, alerts you when something's wrong, and tells you exactly what it's worth to fix it.
              </p>
            </div>
          </motion.div>

          {/* Stat grid */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {[
              { value: "New Zealand", label: "Built specifically for the NZ market and NZ grid data", color: "#22C38E" },
              { value: "24h", label: "Sola monitors your system 24/7 from the moment of connection", color: "#F5A623" },
              { value: "~$78", label: "Average donated to reforestation per customer per year", color: "#22C38E" },
              { value: "1 tap", label: "All it takes to book a clean once Sola recommends it", color: "#F5A623" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-5 sm:p-6 rounded-2xl flex flex-col gap-3"
                style={{ border: "1px solid rgba(255,250,235,0.07)", background: "rgba(255,250,235,0.02)" }}
              >
                <div className="font-mono text-2xl sm:text-3xl font-bold leading-none" style={{ color: item.color }}>{item.value}</div>
                <div className="text-xs leading-relaxed" style={{ color: "#6B6860" }}>{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Misson */}
      <section className="px-6 py-6 max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-[28px] overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(34,195,142,0.07) 0%, rgba(34,195,142,0.03) 100%)",
            border: "1px solid rgba(34,195,142,0.18)",
          }}
        >
          <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full blur-[80px]" style={{ background: "rgba(34,195,142,0.07)" }} />
          <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(34,195,142,0.4), transparent)" }} />
          <div className="relative p-8 sm:p-10 md:p-14 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-4 block" style={{ color: "#22C38E" }}>Mission</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 leading-snug tracking-[-0.02em]">
              Make every solar system perform at its absolute best and give something back for every kilowatt it generates.
            </h2>
            <p className="text-[15px] leading-[1.8]" style={{ color: "#A09D96" }}>
              We believe the homeowners who invest in solar deserve more than a one time install. They deserve ongoing intelligence, effortless maintenance,
              and the knowledge that their system is doing everything it possibly can, both for their wallet and for the environment.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "#A09D96" }}>What we stand for</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em]">How we think about SolCare</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="group p-6 sm:p-7 rounded-2xl transition-all duration-300"
              style={{ border: "1px solid rgba(255,250,235,0.07)", background: "rgba(255,250,235,0.02)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = v.border;
                (e.currentTarget as HTMLDivElement).style.background = v.bg;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,250,235,0.07)";
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,250,235,0.02)";
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 relative overflow-hidden"
              >
                <Image
                  src={`/blog-icons/${v.icon}`}
                  alt={v.title}
                  width={35}
                  height={35}
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm sm:text-base font-semibold mb-2.5 tracking-[-0.01em]" style={{ color: "#F5F0E8" }}>{v.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6B6860" }}>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Environment */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-4" style={{ color: "#22C38E" }}>The environment</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 leading-snug tracking-[-0.02em]">
              Your panels are already performing. We take that performance a step further.
            </h2>
            <div className="space-y-4 text-[15px] leading-[1.8]" style={{ color: "#A09D96" }}>
              <p>
                New Zealand's electricity grid runs on roughly 85% renewable energy, one of the highest rates in the world! That means every kWh your solar system generates is genuinely displacing fossil fuel generation somewhere in the mix, even if modestly.
              </p>
              <p>
                Through the Impact Club, SolCare turns that displacement into something tangible. For every 1kg of CO₂ your system offsets, we donate $1 to a reforestation project in New Zealand or the Pacific.
                You choose the project. We handle the donation. Nothing comes out of your pocket.
              </p>
              <p>
                We're actively working to partner with Māori-led restoration initiatives alongside established organisations. The goal is to make sure the environmental impact of every SolCare system is felt locally.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            {/* Commitment stats */}
            {commitments.map((c, i) => (
              <motion.div
                key={c.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex items-center gap-5 p-5 sm:p-6 rounded-2xl"
                style={{ border: "1px solid rgba(255,250,235,0.07)", background: "rgba(255,250,235,0.02)" }}
              >
                <div className="font-mono text-2xl sm:text-3xl font-bold flex-shrink-0 w-16 sm:w-20 text-right" style={{ color: "#22C38E" }}>
                  {c.stat}
                </div>
                <div>
                  <div className="text-sm font-semibold mb-1" style={{ color: "#F5F0E8" }}>{c.label}</div>
                  <div className="text-xs leading-relaxed" style={{ color: "#6B6860" }}>{c.sub}</div>
                </div>
              </motion.div>
            ))}

            {/* Projects card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              className="p-5 sm:p-6 rounded-2xl"
              style={{ background: "rgba(34,195,142,0.06)", border: "1px solid rgba(34,195,142,0.15)" }}
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.12em] mb-4" style={{ color: "#22C38E" }}>
                Projects we're exploring
              </div>
              <div className="space-y-3">
                {[
                  { name: "Trees That Count", loc: "New Zealand" },
                  { name: "One Tree Planted", loc: "Pacific Islands" },
                  { name: "Māori-led restoration", loc: "Tāmaki Makaurau" },
                ].map((p) => (
                  <div key={p.name} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#22C38E" }} />
                    <div>
                      <span className="text-sm font-medium" style={{ color: "#F5F0E8" }}>{p.name}</span>
                      <span className="text-xs block mt-0.5" style={{ color: "#6B6860" }}>{p.loc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT SOLCARE DOES ──────────────────────────────────────────────── */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "#A09D96" }}>The product</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-2">What SolCare actually does</h2>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: "#6B6860" }}>Three things, done well.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            {
              number: "01",
              title: "Monitor",
              desc: "Sola connects to your inverter and closely watches your production against Solcast forecasts daily. When your output drops below what the weather explains, it flags it.",
              detail: "Powered by Enode + Solcast + OpenMeteo",
              accent: "#22C38E",
            },
            {
              number: "02",
              title: "Maintain",
              desc: "When a clean is due, Sola tells you what it's worth and offers available time slots. You tap once to confirm. SolCare handles everything else.",
              detail: "One tap to book. Post-clean report included.",
              accent: "#F5A623",
            },
            {
              number: "03",
              title: "Impact",
              desc: "Your CO₂ offset accumulates in real time via HelioAPI. Every milestone unlocks a donation to your chosen New Zealand or Pacific reforestation project.",
              detail: "Powered by HelioAPI with New Zealand emission factor data",
              accent: "#22C38E",
            },
          ].map((item, i) => (
            <motion.div
              key={item.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="p-6 sm:p-7 rounded-2xl flex flex-col gap-4"
              style={{ border: "1px solid rgba(255,250,235,0.07)", background: "rgba(255,250,235,0.02)" }}
            >
              <div className="font-mono text-m font-bold" style={{ color: item.accent }}>{item.number}</div>
              <h3 className="text-xl font-bold tracking-[-0.02em]" style={{ color: "#F5F0E8" }}>{item.title}</h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "#A09D96" }}>{item.desc}</p>
              <div
                className="pt-4 text-[11px] leading-relaxed"
                style={{ borderTop: "1px solid rgba(255,250,235,0.06)", color: "#3D3D38" }}
              >
                {item.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-[28px] overflow-hidden p-8 sm:p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          style={{
            background: "linear-gradient(135deg, rgba(34,195,142,0.07) 0%, rgba(34,195,142,0.03) 100%)",
            border: "1px solid rgba(34,195,142,0.18)",
          }}
        >
          <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full blur-[80px]" style={{ background: "rgba(34,195,142,0.06)" }} />
          <div className="relative max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 leading-snug tracking-[-0.02em]">
              Ready to see what your system is actually doing?
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#A09D96" }}>
              Connect your inverter and Sola gets to work immediately. Most users receive their first performance insight within 24 hours.
            </p>
          </div>
          <div className="relative flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0 w-full md:w-auto">
            <Link
              href="mailto:solcare.info@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-black transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #4FDBA8, #22C38E)", boxShadow: "0 4px 20px rgba(34,195,142,0.25)" }}
            >
              Connect my system <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:solcare.info@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium transition-all duration-200"
              style={{ border: "1px solid rgba(255,250,235,0.1)", color: "#A09D96" }}
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
          </div>
        </motion.div>
      </section>

      {/* footer */}
      <footer className="px-6 py-10 max-w-7xl mx-auto">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-5 pt-8"
          style={{ borderTop: "1px solid rgba(255,250,235,0.07)" }}
        >
          <div className="flex items-center gap-6">
            {[
            { href: "/", label: "Home" },
            { href: "/blog", label: "Blog" },
            { href: "/about", label: "About" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-m transition-colors duration-200"
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
            <a
              href="mailto:solcare.info@gmail.com"
              className="flex items-center gap-1.5 text-m transition-colors duration-200"
              style={{ color: "#6B6860" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#A09D96";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#6B6860";
              }}
            >
              <Mail className="w-5 h-5" />
              solcare.info@gmail.com
            </a>
          </div>

          <button
            onClick={() => setIsTermsModalOpen(true)}
            className="text-[11px] uppercase tracking-[0.16em] transition-colors duration-200 cursor-pointer"
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
            © 2026 SolCare. All rights reserved · Made in Aotearoa with ❤️
          </span>
        </div>

        {/* Social Media Links */}
        <div
          className="flex items-center gap-4 pt-4">
          <span
            className="text-xs font-semibold uppercase tracking-[0.1em]"
            style={{ color: "#6B6860" }}
          >
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
      </footer>

      <TermsModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
    </main>
  );
}