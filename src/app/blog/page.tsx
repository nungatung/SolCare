"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';
import { ArrowRight, Clock, Leaf, Zap, CloudRain, Sun, Mail } from "lucide-react";

const featuredPost = {
    slug: "dirty-panels",
    title: "What dirty panels are actually costing you",
    excerpt:
        "Most NZ homeowners have no idea their solar system is underperforming. Here's what the data says and what a single clean could recover.",
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
        excerpt:
            "Auckland winters, Wellington winds. Your location shapes your system's behaviour more than most installers tell you.",
        category: "Weather",
        tags: ["NZ Solar", "Weather"],
        date: "April 2026",
        readTime: "4 min read",
        icon: "sunshine.png", 
    },
    {
        slug: "impact-club",
        title: "Your panels and native forest: how the Impact Club works behind the scenes",
        excerpt:
            "For every 1kg of CO₂ your system offsets, SolCare donates $1 to a reforestation project of your choice. Here's exactly how we calculate it.",
        category: "Impact Club",
        tags: ["CO₂", "Environment"],
        date: "March 2026",
        readTime: "3 min read",
        icon: "forest.png", 
    },
    {
        slug: "cleaning-frequency",
        title: "How often should you clean your panels? It depends where you live",
        excerpt:
            "Coastal Auckland needs more frequent cleans than rural Canterbury. Here's a region by region guide based on real PM10 and weather data.",
        category: "Maintenance",
        tags: ["Cleaning", "NZ Solar"],
        date: "February 2026",
        readTime: "3 min read",
        icon: "cleaning.png", 
    },
    {
        slug: "output-gap",
        title: "What is an output gap and why should you care about yours",
        excerpt:
            "The difference between what your panels should produce and what they actually do is the number SolarPal watches most closely.",
        category: "Monitoring",
        tags: ["Data", "Performance"],
        date: "December 2025",
        readTime: "4 min read",
        icon: "monitoring.png",
    },
];

const categories = ["All", "Maintenance", "Monitoring", "Impact Club", "Weather"];

const categoryIcons: Record<string, React.ReactNode> = {
    Maintenance: <Zap className="w-3 h-3" />,
    Monitoring: <Sun className="w-3 h-3" />,
    "Impact Club": <Leaf className="w-3 h-3" />,
    Weather: <CloudRain className="w-3 h-3" />,
};

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white">

            {/* Navbar */}
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

                {/* Nav links */}
                <div className="flex items-center gap-6">
                    <Link
                        href="/"
                        className="text-m text-gray-400 hover:text-white transition-colors"
                    >
                        Home
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

            {/* HERO */}
            <section className="px-6 pt-24 pb-16 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/8 mb-6">
                        <Leaf className="w-3 h-3 text-green-400" />
                        <span className="text-xs font-medium text-green-400 tracking-wide uppercase">SolCare Blog</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 tracking-tight">
                        Solar knowledge,<br />
                        <span className="text-green-400">built for NZ solar owners</span>
                    </h1>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        Data backed guides on getting the most from your solar system. Performance, preventive maintenance, and environmental impact.
                    </p>
                </motion.div>
            </section>

            {/* CATEGORY FILTER */}
            <section className="px-6 pb-10 max-w-7xl mx-auto">
                <div className="flex gap-2 flex-wrap">
                    {categories.map((cat, i) => (
                        <motion.button
                            key={cat}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border transition-all ${cat === "All"
                                ? "bg-green-500 border-green-500 text-black"
                                : "border-white/10 text-gray-400 hover:border-green-500/30 hover:text-green-400 bg-white/[0.03]"
                                }`}
                        >
                            {categoryIcons[cat] ?? null}
                            {cat}
                        </motion.button>
                    ))}
                </div>
            </section>

            {/* FEATURED POST */}
            <section className="px-6 pb-12 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Link href={`/blog/${featuredPost.slug}`} className="group block">
                        <div className="relative rounded-3xl border border-white/8 bg-white/[0.03] overflow-hidden hover:border-green-500/25 transition-all duration-300 hover:bg-white/[0.05]">

                            {/* Top accent line */}
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />

                            <div className="grid md:grid-cols-2 gap-0">
                                {/* Left — content */}
                                <div className="p-8 md:p-12 flex flex-direction-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-6">
                                            <span className="text-xs font-semibold uppercase tracking-widest text-green-400 px-2.5 py-1 rounded-full border border-green-500/20 bg-green-500/10">
                                                Featured
                                            </span>
                                            {featuredPost.tags.map((t) => (
                                                <span key={t} className="text-xs text-gray-500 px-2.5 py-1 rounded-full border border-white/8 bg-white/[0.03]">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-4 group-hover:text-green-300 transition-colors">
                                            {featuredPost.title}
                                        </h2>
                                        <p className="text-gray-500 leading-relaxed mb-8 text-sm">
                                            {featuredPost.excerpt}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-xs text-gray-600">
                                            <span>{featuredPost.date}</span>
                                            <span className="w-px h-3 bg-white/10" />
                                            <Clock className="w-6 h-5" />
                                            <span>{featuredPost.readTime}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs font-medium text-green-400 group-hover:gap-2.5 transition-all">
                                            Read article <ArrowRight className="w-5 h-4" />
                                        </div>
                                    </div>
                                </div>

                                {/* Right — stat panel with PNG icon */}
                                <div className="border-t md:border-t-0 md:border-l border-white/8 bg-white/[0.02] p-8 md:p-12 flex flex-col items-center justify-center text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-8">
                                        <Image
                                            src={`/blog-icons/${featuredPost.icon}`}
                                            alt={featuredPost.title}
                                            width={36}
                                            height={36}
                                            className="object-contain opacity-90"
                                        />
                                    </div>
                                    <div className="font-mono text-6xl font-bold text-green-400 mb-3 leading-none">
                                        {featuredPost.stat.value}
                                    </div>
                                    <div className="text-sm text-gray-500 max-w-[200px] leading-relaxed">
                                        {featuredPost.stat.label}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            </section>

            {/* POSTS GRID */}
            <section className="px-6 pb-24 max-w-7xl mx-auto">
                <div className="flex items-baseline justify-between mb-8">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-600">All articles</h2>
                    <span className="text-xs text-gray-700">{posts.length} articles</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {posts.map((post, i) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + i * 0.07 }}
                        >
                            <Link href={`/blog`} className="group block h-full">
                                <article className="h-full flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] overflow-hidden hover:border-green-500/25 hover:bg-white/[0.05] transition-all duration-300">

                                    {/* Thumb — PNG icon */}
                                    <div className="h-36 bg-white/[0.02] border-b border-white/8 flex items-center justify-center group-hover:bg-white/[0.04] transition-colors">
                                        <Image
                                            src={`/blog-icons/${post.icon}`}
                                            alt={post.title}
                                            width={52}
                                            height={52}
                                            className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                        />
                                    </div>

                                    <div className="p-6 flex flex-col flex-1">
                                        {/* Tags */}
                                        <div className="flex gap-2 mb-3">
                                            <span className="text-[10px] font-semibold uppercase tracking-widest text-green-500">
                                                {post.category}
                                            </span>
                                            {post.tags.slice(1).map((t) => (
                                                <span key={t} className="text-[10px] text-gray-600 uppercase tracking-widest">
                                                    · {t}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-sm font-semibold text-white leading-snug mb-3 flex-1 group-hover:text-green-300 transition-colors">
                                            {post.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-xs text-gray-600 leading-relaxed mb-5 line-clamp-2">
                                            {post.excerpt}
                                        </p>

                                        {/* Meta + arrow */}
                                        <div className="flex items-center justify-between pt-4 border-t border-white/8">
                                            <div className="flex items-center gap-2 text-[11px] text-gray-700">
                                                <span>{post.date}</span>
                                                <span className="w-px h-4 bg-white/10" />
                                                <Clock className="w-4 h-4" />
                                                <span>{post.readTime}</span>
                                            </div>
                                            <ArrowRight className="w-3.5 h-3.5 text-gray-700 group-hover:text-green-400 group-hover:translate-x-0.5 transition-all" />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* NEWSLETTER / CTA STRIP */}
            <section className="px-6 pb-24 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-3xl border border-green-500/15 bg-green-500/[0.06] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Leaf className="w-4 h-4 text-green-400" />
                            <span className="text-xs font-semibold uppercase tracking-widest text-green-400">SolCare Insights</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Want SolarPal to just tell you?
                        </h3>
                        <p className="text-sm text-gray-500 max-w-md leading-relaxed">
                            Connect your inverter and SolarPal sends you personalised insights about your system.
                        </p>
                    </div>
                    <Link
                        href="/"
                        className="flex-shrink-0 flex items-center gap-2 px-6 py-3.5 rounded-full bg-green-500 text-black text-sm font-semibold hover:bg-green-400 transition-colors"
                    >
                        Connect my system <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </section>

        </main>
    );
}