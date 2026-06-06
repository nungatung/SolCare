"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Leaf, Zap, CloudRain, Wrench, Sun, Mail, Menu, X, ChevronDown, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import TermsModal from "../../../components/TermsModal";
import styles from "../Navigation.module.css";

// ── Animation system ──────────────────────────────────────────────────────────
const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.55, delay: i * 0.07, ease: EASE },
    }),
};

// ── Data ──────────────────────────────────────────────────────────────────────
const featuredPost = {
    slug: "dirty-panels",
    title: "What dirty panels are actually costing you",
    excerpt: "Most NZ homeowners have no idea their solar system is underperforming. Here's what the data says and what a single clean could recover.",
    category: "Maintenance",
    tags: ["NZ Solar", "Performance"],
    date: "May 2026",
    readTime: "5 min read",
    icon: "cost.png",
    stat: { value: "25%", label: "average output lost to soiling over 12 months" },
};

const posts = [
    {
        slug: "solar-output",
        title: "How NZ's weather patterns affect your solar output",
        excerpt: "Auckland winters, Wellington winds. Your location shapes your system's behaviour more than most installers tell you.",
        category: "Weather",
        tags: ["NZ Solar", "Weather"],
        date: "April 2026",
        readTime: "4 min read",
        icon: "sunshine.png",
    },

    {
        slug: "hot-spots",
        title: "Solar panel hotspots: why that tiny problem is costing you real money",
        excerpt: "The cause and effect of hotspots created by shading and the lack of knowledge surrounding the potential issue",
        category: "Maintenance",
        tags: ["NZ Solar", "Performance"],
        date: "June 2026",
        readTime: "3 min read",
        icon: "solar-panel.png"
    }
];

const categories = ["All", "Maintenance", "Monitoring", "Impact Club", "Weather"];

const categoryIcons: Record<string, React.ReactNode> = {
    Maintenance: <Zap className="w-3 h-3" />,
    Monitoring: <Sun className="w-3 h-3" />,
    "Impact Club": <Leaf className="w-3 h-3" />,
    Weather: <CloudRain className="w-3 h-3" />,
};

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


export default function BlogPage() {
    const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState("All");
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

    const filteredPosts = activeCategory === "All"
        ? posts
        : posts.filter(p => p.category === activeCategory);

    return (
        <main className="min-h-screen bg-[#0D0D0B] text-[#F5F0E8] selection:bg-[#F5A623] selection:text-black overflow-x-hidden">

            {/* Grain */}
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

                <AnimatePresence>
                    {isMenuOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
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
                                            style={{ color: href === "/blog" ? "#F5F0E8" : "#A09D96" }}
                                        >
                                            {label}
                                        </Link>
                                    ))}
                                    <div className="mx-4 my-1 h-px" style={{ background: "rgba(255,250,235,0.07)" }} />
                                    <a
                                        href="mailto:solcare.info@gmail.com"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="px-5 py-3.5 text-sm font-medium flex items-center gap-2"
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

            {/* HERO */}
            <section className="relative px-6 pt-20 pb-14 max-w-7xl mx-auto">
                <div className="pointer-events-none absolute top-0 left-0 w-96 h-64 rounded-full blur-[100px] -translate-x-1/3 -translate-y-1/2" style={{ background: "rgba(34,195,142,0.05)" }} />
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="relative max-w-2xl"
                >

                    <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-[-0.02em] mb-4">
                        Solar knowledge,
                        <br />
                        <span style={{ color: "#22C38E" }}>built for NZ solar owners</span>
                    </h1>
                    <p className="text-lg leading-[1.75]" style={{ color: "#A09D96" }}>
                        Data backed guides on getting the most from your solar system. Performance, preventive maintenance, and environmental impact.
                    </p>
                </motion.div>
            </section>

            {/* CATEGORY FILTER  */}
            <section className="px-6 pb-10 max-w-7xl mx-auto">
                <div className="flex gap-2 flex-wrap">
                    {categories.map((cat, i) => (
                        <motion.button
                            key={cat}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={i}
                            onClick={() => setActiveCategory(cat)}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer"
                            style={
                                cat === activeCategory
                                    ? { background: "linear-gradient(135deg, #4FDBA8, #22C38E)", color: "#000", border: "1px solid transparent" }
                                    : { background: "rgba(255,250,235,0.03)", border: "1px solid rgba(255,250,235,0.1)", color: "#A09D96" }
                            }
                        >
                            {categoryIcons[cat] ?? null}
                            {cat}
                        </motion.button>
                    ))}
                </div>
            </section>

            {/* FEATURED POST  */}
            <section className="px-6 pb-10 max-w-7xl mx-auto">
                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
                    <Link href={`/blog/${featuredPost.slug}`} className="group block">
                        <div
                            className="relative rounded-[28px] overflow-hidden transition-all duration-300"
                            style={{ border: "1px solid rgba(255,250,235,0.08)", background: "rgba(255,250,235,0.02)" }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(34,195,142,0.28)";
                                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,250,235,0.035)";
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,250,235,0.08)";
                                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,250,235,0.02)";
                            }}
                        >
                            {/* Top accent */}
                            <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(34,195,142,0.4), transparent)" }} />

                            <div className="grid md:grid-cols-2">
                                {/* Left — content */}
                                <div className="p-8 sm:p-10 md:p-12 flex flex-col justify-between min-h-[280px] md:min-h-0">
                                    <div>
                                        <div className="flex flex-wrap items-center gap-2 mb-5">
                                            <span
                                                className="text-[10px] font-bold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full"
                                                style={{ color: "#22C38E", background: "rgba(34,195,142,0.1)", border: "1px solid rgba(34,195,142,0.2)" }}
                                            >
                                                Featured
                                            </span>
                                            {featuredPost.tags.map((t) => (
                                                <span
                                                    key={t}
                                                    className="text-[10px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap"
                                                    style={{ color: "#6B6860", border: "1px solid rgba(255,250,235,0.08)", background: "rgba(255,250,235,0.03)" }}
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        <h2
                                            className="text-2xl sm:text-3xl font-bold leading-snug tracking-[-0.02em] mb-4 transition-colors duration-200"
                                            style={{ color: "#F5F0E8" }}
                                        >
                                            {featuredPost.title}
                                        </h2>
                                        <p className="text-sm leading-relaxed mb-6" style={{ color: "#A09D96" }}>
                                            {featuredPost.excerpt}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex items-center gap-2 text-xs" style={{ color: "#6B6860" }}>
                                            <span>{featuredPost.date}</span>
                                            <span className="w-px h-3" style={{ background: "rgba(255,250,235,0.1)" }} />
                                            <Clock className="w-3.5 h-3.5" />
                                            <span>{featuredPost.readTime}</span>
                                        </div>
                                        <div
                                            className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group-hover:gap-2.5"
                                            style={{ color: "#22C38E" }}
                                        >
                                            Read article <ArrowRight className="w-3.5 h-3.5" />
                                        </div>
                                    </div>
                                </div>

                                {/* Right — stat panel */}
                                <div
                                    className="border-t md:border-t-0 md:border-l p-8 sm:p-10 md:p-12 flex flex-col items-center justify-center text-center"
                                    style={{ borderColor: "rgba(255,250,235,0.07)", background: "rgba(255,250,235,0.015)" }}
                                >
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                                        style={{ background: "rgba(34,195,142,0.1)", border: "1px solid rgba(34,195,142,0.2)" }}
                                    >
                                        <Image
                                            src={`/blog-icons/${featuredPost.icon}`}
                                            alt={featuredPost.title}
                                            width={40}
                                            height={40}
                                            className="object-contain opacity-90"
                                        />
                                    </div>
                                    <div className="font-mono text-6xl sm:text-7xl font-bold leading-none mb-3" style={{ color: "#22C38E" }}>
                                        {featuredPost.stat.value}
                                    </div>
                                    <div className="text-sm max-w-[180px] leading-relaxed" style={{ color: "#6B6860" }}>
                                        {featuredPost.stat.label}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            </section>

            {/* POSTS GRID  */}
            <section className="px-6 pb-20 max-w-7xl mx-auto">
                <div className="flex items-baseline justify-between mb-7">
                    <h2 className="text-xs font-semibold uppercase tracking-[0.1em]" style={{ color: "#6B6860" }}>
                        All articles
                    </h2>
                    <span className="text-xs" style={{ color: "#3D3D38" }}>
                        {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
                    </span>
                </div>

                {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredPosts.map((post, i) => (
                            <motion.div
                                key={post.slug}
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={i}
                            >
                                <Link href={`/blog/${post.slug}`} className="group block h-full">
                                    <article
                                        className="h-full flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
                                        style={{ border: "1px solid rgba(255,250,235,0.07)", background: "rgba(255,250,235,0.02)" }}
                                        onMouseEnter={e => {
                                            (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,195,142,0.25)";
                                            (e.currentTarget as HTMLElement).style.background = "rgba(255,250,235,0.04)";
                                        }}
                                        onMouseLeave={e => {
                                            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,250,235,0.07)";
                                            (e.currentTarget as HTMLElement).style.background = "rgba(255,250,235,0.02)";
                                        }}
                                    >
                                        {/* Thumb */}
                                        <div
                                            className="h-36 flex items-center justify-center transition-colors duration-300"
                                            style={{ borderBottom: "1px solid rgba(255,250,235,0.06)", background: "rgba(255,250,235,0.01)" }}
                                        >
                                            <Image
                                                src={`/blog-icons/${post.icon}`}
                                                alt={post.title}
                                                width={52}
                                                height={52}
                                                className="object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                                            />
                                        </div>

                                        <div className="p-5 sm:p-6 flex flex-col flex-1">
                                            <div className="flex gap-2 mb-3">
                                                <span className="text-[10px] font-bold uppercase tracking-[0.08em]" style={{ color: "#22C38E" }}>
                                                    {post.category}
                                                </span>
                                                {post.tags.slice(1).map((t) => (
                                                    <span key={t} className="text-[10px] uppercase tracking-widest" style={{ color: "#6B6860" }}>
                                                        · {t}
                                                    </span>
                                                ))}
                                            </div>

                                            <h3
                                                className="text-sm font-semibold leading-snug mb-3 flex-1 transition-colors duration-200 tracking-[-0.01em]"
                                                style={{ color: "#F5F0E8" }}
                                            >
                                                {post.title}
                                            </h3>

                                            <p className="text-xs leading-relaxed mb-5 line-clamp-2" style={{ color: "#6B6860" }}>
                                                {post.excerpt}
                                            </p>

                                            <div
                                                className="flex items-center justify-between pt-4"
                                                style={{ borderTop: "1px solid rgba(255,250,235,0.06)" }}
                                            >
                                                <div className="flex items-center gap-2 text-[11px]" style={{ color: "#6B6860" }}>
                                                    <span>{post.date}</span>
                                                    <span className="w-px h-3" style={{ background: "rgba(255,250,235,0.1)" }} />
                                                    <Clock className="w-3 h-3" />
                                                    <span>{post.readTime}</span>
                                                </div>
                                                <ArrowRight
                                                    className="w-3.5 h-3.5 transition-all duration-200 group-hover:translate-x-0.5"
                                                    style={{ color: "#6B6860" }}
                                                />
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="py-16 text-center" style={{ color: "#6B6860" }}>
                        <p className="text-sm">No articles in this category yet.</p>
                    </div>
                )}
            </section>

            {/* CTA STRIP */}
            <section className="px-6 pb-20 max-w-7xl mx-auto">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative rounded-[28px] overflow-hidden p-8 sm:p-10 md:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-7"
                    style={{
                        background: "linear-gradient(135deg, rgba(34,195,142,0.07) 0%, rgba(34,195,142,0.03) 100%)",
                        border: "1px solid rgba(34,195,142,0.16)",
                    }}
                >
                    <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full blur-[60px]" style={{ background: "rgba(34,195,142,0.07)" }} />
                    <div className="relative">
                        <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.02em] mb-2">
                            Want regular notifications from Sola?
                        </h3>
                        <p className="text-sm leading-relaxed max-w-md" style={{ color: "#A09D96" }}>
                            Connect your inverter and Sola sends you personalised insights about your system.
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