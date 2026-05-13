"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, Zap, Shield, Heart, Mail, Menu, X } from "lucide-react";
import { useState} from "react"
import TermsModal from '../../../components/TermsModal';

const values = [
    {
        icon: <Zap className="w-5 h-5 text-yellow-400" />,
        title: "Proactive by design",
        desc: "SolarPal doesn't wait for you to notice a problem. It watches your system around the clock and tells you when your system needs attention before it costs you.",
    },
    {
        icon: <Shield className="w-5 h-5 text-green-400" />,
        title: "Honest about the data",
        desc: "Every recommendation SolarPal makes is grounded in your real generation data, live weather readings, and NZ specific emission factors. No guesswork, no false positives.",
    },
    {
        icon: <Leaf className="w-5 h-5 text-green-400" />,
        title: "Built for the environment",
        desc: "The Impact Club isn't a marketing feature. It's a genuine commitment, every kilogram of CO₂ your system offsets translates into a real donation to reforestation in New Zealand and the Pacific.",
    },
    {
        icon: <Heart className="w-5 h-5 text-green-400" />,
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
        sub: "NZ's grid emission factor, one of the lowest in the world",
    },
    {
        stat: "100%",
        label: "of donations reach the project",
        sub: "SolCare covers all processing costs",
    },
];

export default function AboutPage() {
const [isMenuOpen, setIsMenuOpen] = useState(false)
const [isTermsModalOpen, setIsTermsModalOpen] = useState(false); 
    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white">

            {/* Navbar */}
        <div className="relative z-50">
            <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
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
                className="text-white p-2 md:hidden -mt-14 transition-all active:scale-95"
                aria-label="Toggle Mobile Menu"
            >
                {isMenuOpen ? (
                <X className="w-7 h-7" />
                ) : (
                <Menu className="w-7 h-7" />
                )}
            </button>

            {/* Desktop Nav links */}
            <div className="hidden md:flex items-center gap-6">
                <Link
                href="/"
                className="text-m text-gray-400 hover:text-white transition-colors"
                >
                Home
                </Link>
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

            {/* Mobile Menu Panel */}
            {isMenuOpen && (
            <div className="md:hidden absolute top-[45px] left-0 right-0 p-6 z-50 bg-[#121212]/95 backdrop-blur-md border-t border-b border-neutral-800 rounded-b-xl shadow-2xl flex flex-col gap-6 text-center animate-in fade-in slide-in-from-top-2 duration-200">
                <Link
                href="/"
                className="py-2 text-lg text-gray-400 hover:text-white transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
                >
                Home
                </Link>
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
            )}
        </div>

            {/* HERO */}
            <section className="px-6 pt-20 pb-20 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
 
                    {/* LEFT — heading and copy */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/8 mb-6">
                            <Leaf className="w-3 h-3 text-green-400" />
                            <span className="text-xs font-medium text-green-400 tracking-wide uppercase">About SolCare</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
                            Solar that works{" "}<br/>
                            <span className="text-green-400 italic">for you.</span>
                            <br />Not the other way around.
                        </h1>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            SolCare was built around a simple observation: most solar owners aren't informed on how often their panels are to be cleaned and how dirty panels affect their system's performance.
                            We built SolarPal to fix that. It works quietly in the background, without asking anything of you.
                        </p>
                    </motion.div>
 
                    {/* RIGHT — single image */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.55, delay: 0.15 }}
                        className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/8"
                    >
                        <Image
                            src="/aboutHero.jpg" 
                            alt="Solar panels on a New Zealand home"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </motion.div>
 
                </div>
            </section>
 
            {/* ACCENT LINE */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
            </div>

            {/* ORIGIN STORY */}
            <section className="px-6 py-20 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-xs font-semibold uppercase tracking-widest text-green-400 mb-4 block">
                            Where it started
                        </span>
                        <h2 className="text-3xl font-bold text-white mb-6 leading-snug">
                            A solar system quietly losing money, without anyone noticing
                        </h2>
                        <div className="space-y-4 text-gray-400 leading-relaxed text-[15px]">
                            <p>
                                The idea for SolCare came from a familiar story. A homeowner notices their power bill hasn't dropped as much as expected. They call their installer, 
                                the installer checks the panels and sees they are soiled, they have been for months. Hundreds of dollars in output gone.
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

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {[
                            { value: "New Zealand", label: "Built specifically for the NZ market and NZ grid data" },
                            { value: "24h", label: "SolarPal monitors your system 24/7 from the moment of connection" },
                            { value: "~$78", label: "Average donated to reforestation per customer per year" },
                            { value: "1 tap", label: "All it takes to book a clean once SolarPal recommends it" },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="p-6 rounded-2xl border border-white/8 bg-white/[0.03] flex flex-col gap-3"
                            >
                                <div className="font-mono text-3xl font-bold text-green-400">{item.value}</div>
                                <div className="text-xs text-gray-500 leading-relaxed">{item.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* MISSION */}
            <section className="px-6 py-20 max-w-7xl mx-auto">
                <div className="rounded-3xl border border-green-500/15 bg-green-500/[0.05] overflow-hidden">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />
                    <div className="p-10 md:p-16 max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-widest text-green-400 mb-4 block">
                            Mission
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
                            Make every solar system perform at its absolute best and give something back for every kilowatt it generates.
                        </h2>
                        <p className="text-gray-400 leading-relaxed text-[15px]">
                            We believe the homeowners who invest in solar deserve more than a one time install. They deserve ongoing intelligence, effortless maintenance, 
                            and the knowledge that their system is doing everything it possibly can, both for their wallet and for the environment.
                        </p>
                    </div>
                </div>
            </section>

            {/* VALUES */}
            <section className="px-6 py-10 max-w-7xl mx-auto">
                <div className="mb-10">
                    <span className="text-xs font-semibold uppercase tracking-widest text-green-400 mb-3 block">
                        What we stand for
                    </span>
                    <h2 className="text-3xl font-bold text-white">How we think about SolCare</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {values.map((v, i) => (
                        <motion.div
                            key={v.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="p-7 rounded-2xl border border-white/8 bg-white/[0.03] hover:border-green-500/20 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/8 flex items-center justify-center mb-5">
                                {v.icon}
                            </div>
                            <h3 className="text-base font-semibold text-white mb-3">{v.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ENVIRONMENT SECTION */}
            <section className="px-6 py-20 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-xs font-semibold uppercase tracking-widest text-green-400 mb-4 block">
                            The environment
                        </span>
                        <h2 className="text-3xl font-bold text-white mb-6 leading-snug">
                            Your panels are already performing. We take that performance a step further.
                        </h2>
                        <div className="space-y-4 text-gray-400 leading-relaxed text-[15px]">
                            <p>
                                New Zealand's electricity grid runs on roughly 85% renewable energy, one of the highest rates in the world! That means every kWh your solar system generates is genuinely displacing fossil fuel generation somewhere in the mix, even if modestly.
                            </p>
                            <p>
                                Through the Impact Club, SolCare turns that displacement into something tangible. For every 1kg of CO₂ your system offsets, we donate $1 to a reforestation project in New Zealand or the Pacific. 
                                You choose the project. We handle the donation. Nothing comes out of your pocket.
                            </p>
                            <p>
                                We're actively working to partner with Māori-led restoration initiatives alongside established organisations like. The goal is to make sure the environmental impact of every SolCare system is felt locally.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col gap-4"
                    >
                        {commitments.map((c) => (
                            <div
                                key={c.label}
                                className="flex items-center gap-6 p-6 rounded-2xl border border-white/8 bg-white/[0.03]"
                            >
                                <div className="font-mono text-3xl font-bold text-green-400 flex-shrink-0 w-20 text-right">
                                    {c.stat}
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-white mb-1">{c.label}</div>
                                    <div className="text-xs text-gray-600 leading-relaxed">{c.sub}</div>
                                </div>
                            </div>
                        ))}

                        <div className="p-6 rounded-2xl border border-green-500/15 bg-green-500/[0.06]">
                            <div className="text-xs font-semibold uppercase tracking-widest text-green-400 mb-3">
                                Projects we're exploring
                            </div>
                            <div className="space-y-2">
                                {[
                                    { name: "Trees That Count", loc: "New Zealand - native species restoration" },
                                    { name: "One Tree Planted", loc: "Pacific Islands - Fiji, Samoa, Tonga" },
                                    { name: "Māori-led restoration", loc: "Tāmaki Makaurau" },
                                ].map((p) => (
                                    <div key={p.name} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                                        <div>
                                            <span className="text-sm text-white font-medium">{p.name}</span>
                                            <span className="text-xs text-gray-600 block">{p.loc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* HOW SOLARPAL WORKS — brief */}
            <section className="px-6 py-10 max-w-7xl mx-auto">
                <div className="mb-10">
                    <span className="text-xs font-semibold uppercase tracking-widest text-green-400 mb-3 block">
                        The product
                    </span>
                    <h2 className="text-3xl font-bold text-white mb-3">What SolCare actually does</h2>
                    <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
                        Three things, done well.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        {
                            number: "01",
                            title: "Monitor",
                            desc: "SolarPal connects to your inverter and closely watches your production against Solcast forecasts daily. When your output drops below what the weather explains, it flags it.",
                            detail: "Powered by Enode + Solcast + OpenMeteo",
                        },
                        {
                            number: "02",
                            title: "Maintain",
                            desc: "When a clean is due, SolarPal tells you what it's worth and offers available time slots. You tap once to confirm. SolCare handles everything else.",
                            detail: "One tap to book. Post-clean report included.",
                        },
                        {
                            number: "03",
                            title: "Impact",
                            desc: "Your CO₂ offset accumulates in real time via HelioAPI. Every milestone unlocks a donation to your chosen New Zealand or Pacific reforestation project.",
                            detail: "Powered by HelioAPI with New Zealand emission factor data",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={item.number}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-7 rounded-2xl border border-white/8 bg-white/[0.03] flex flex-col gap-4"
                        >
                            <div className="font-mono text-xs text-green-500 font-semibold">{item.number}</div>
                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed flex-1">{item.desc}</p>
                            <div className="pt-4 border-t border-white/8 text-[11px] text-gray-700 leading-relaxed">
                                {item.detail}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 py-20 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-3xl border border-green-500/15 bg-green-500/[0.06] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10"
                >
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-bold text-white mb-4 leading-snug">
                            Ready to see what your system is actually doing?
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Connect your inverter and SolarPal gets to work immediately. Most users receive their first performance insight within 24 hours.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 flex-shrink-0">
                        <Link
                            href="/"
                            className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-green-500 text-black text-sm font-semibold hover:bg-green-400 transition-colors"
                        >
                            Connect my system <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                            href="mailto:solcare.info@gmail.com"
                            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-gray-400 text-sm hover:text-white hover:border-white/20 transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            Get in touch
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* FOOTER */}
            <footer className="border-t border-white/8 px-6 py-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                    <Link href="/" className="text-sm text-gray-600 hover:text-white transition-colors">Home</Link>
                    <Link href="/blog" className="text-sm text-gray-600 hover:text-white transition-colors">Blog</Link>
                    <Link href="/about" className="text-sm text-gray-600">About</Link>
                    <a
                    href="mailto:solcare.info@gmail.com"
                    className="flex items-center gap-1 text-m text-gray-400 hover:text-white transition-colors"
                    >
                    <Mail className="w-6 h-5" />
                    Get in Touch
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

            <TermsModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
        </main>
    );
}