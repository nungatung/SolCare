"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Clock, AlertTriangle, Thermometer, Zap, TrendingDown } from "lucide-react";


const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: EASE },
  }),
};

const relatedPosts = [
  {
    slug: "dirty-panels",
    title: "What dirty panels are actually costing you",
    category: "Maintenance",
    date: "May 2026",
    readTime: "5 min read",
    icon: "cost.png",
  },
  {
        slug: "solar-output",
        title: "How NZ's weather patterns affect your solar output",
        excerpt: "Auckland winters, Wellington winds. Your location shapes your system's behaviour more than most installers tell you.",
        category: "Weather",
        tags: ["NZ Solar", "Weather"],
        date: "April 2026",
        readTime: "4 min read",
        icon: "sunshine.png",
    }
];

export default function BlogPostHotspots() {
  return (
    <main className="min-h-screen bg-[#0D0D0B] text-[#F5F0E8] selection:bg-[#F5A623] selection:text-black overflow-x-hidden relative">
      
      {/* Background Grain */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* BACK NAV */}
      <div className="relative z-10 px-6 pt-10 max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm transition-colors duration-200 hover:text-[#22C38E]"
          style={{ color: "#A09D96" }}
        >
          <ArrowLeft className="w-4 h-4" /> Back to blog
        </Link>
      </div>

      {/* ARTICLE HERO */}
      <section className="relative z-10 px-6 pt-10 pb-8 max-w-3xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span
              className="text-[10px] font-bold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full"
              style={{ color: "#22C38E", background: "rgba(34,195,142,0.1)", border: "1px solid rgba(34,195,142,0.2)" }}
            >
              NZ Solar
            </span>
            {["Maintenance", "Performance"].map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap"
                style={{ color: "#6B6860", border: "1px solid rgba(255,250,235,0.08)", background: "rgba(255,250,235,0.03)" }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold leading-[1.1] tracking-[-0.02em] mb-5">
            Solar panel hotspots: why that tiny problem is{" "}
            <span style={{ color: "#22C38E" }} className="italic">costing you real money</span>
          </h1>
          <p className="text-lg leading-[1.75] mb-8" style={{ color: "#A09D96" }}>
            One cracked or shaded cell doesn't just underperform. It turns into a power sink that damages your entire panel.
          </p>

          <div className="flex items-center gap-2 text-xs pb-6" style={{ color: "#6B6860", borderBottom: "1px solid rgba(255,250,235,0.08)" }}>
            <span>SolCare Editorial</span>
            <span className="w-px h-3" style={{ background: "rgba(255,250,235,0.1)" }} />
            <span>June 2026</span>
            <span className="w-px h-3" style={{ background: "rgba(255,250,235,0.1)" }} />
            <Clock className="w-3.5 h-3.5" />
            <span>3 min read</span>
          </div>
        </motion.div>
      </section>

      {/* ARTICLE BODY */}
      <article className="relative z-10 px-6 max-w-3xl mx-auto pb-20 space-y-12">

        {/* HERO STAT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="rounded-[22px] p-8 flex flex-col md:flex-row gap-6 items-start transition-all"
          style={{ border: "1px solid rgba(34,195,142,0.2)", background: "rgba(34,195,142,0.04)" }}
        >
          <div className="font-mono text-6xl md:text-7xl font-bold leading-none flex-shrink-0" style={{ color: "#22C38E" }}>
            15%
          </div>
          <div>
            <div className="font-semibold text-base sm:text-lg mb-2" style={{ color: "#F5F0E8" }}>
              Average output loss caused by hotspots in affected systems
            </div>
            <div className="text-sm leading-relaxed" style={{ color: "#A09D96" }}>
              For a typical 5kW home installation, that's roughly $250–$450 per year in electricity you should be generating but aren't.
            </div>
          </div>
        </motion.div>

        {/* INTRO */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="space-y-5 text-sm sm:text-base leading-[1.75]"
          style={{ color: "#A09D96" }}
        >
          <p>
            Your solar system is running right now. Your inverter lights up, your production ticks upward, everything looks normal. But somewhere inside one of your panels, electrical current is flowing backward, burning through solder joints at temperatures that would fry an egg.
          </p>
          <p>
            Hotspots are silent. They don't trigger alarms. Your system doesn't shut down. It just slowly hemorrhages performance, month after month, while you're losing money you should be earning.
          </p>
        </motion.div>

        {/* SECTION — WHAT CAUSES HOTSPOTS */}
        <div className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.01em]" style={{ color: "#F5F0E8" }}>
            What causes hotspots on your panels
          </h2>
          <p className="text-sm sm:text-base leading-[1.75]" style={{ color: "#A09D96" }}>
            Hotspots start when one or more cells in a panel stop playing their part properly. Here are the most common culprits:
          </p>

          {/* CAUSE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {[
              {
                icon: <AlertTriangle className="w-4 h-4" style={{ color: "#22C38E" }} />,
                title: "Partial shading",
                description: "A tree branch, roof fixture, or neighbor's extension can shadow just one corner of a panel. That shaded cell acts like a bottleneck.",
              },
              {
                icon: <TrendingDown className="w-4 h-4" style={{ color: "#22C38E" }} />,
                title: "Physical damage",
                description: "Hail, a branch strike, or mishandling during installation/transport can crack a cell. A hairline fracture won't be visible from the ground.",
              },
              {
                icon: <Zap className="w-4 h-4" style={{ color: "#22C38E" }} />,
                title: "Manufacturing defects",
                description: "Rarely, a cell leaves the factory with microscopic flaws. These usually show up in the first year or two of operation.",
              },
              {
                icon: <Thermometer className="w-4 h-4" style={{ color: "#22C38E" }} />,
                title: "Soiling & buildup",
                description: "Heavy bird droppings, salt spray in coastal areas, or industrial dust can create such high resistance that current can't flow normally.",
              },
            ].map((cause, i) => (
              <div
                key={i}
                className="rounded-xl p-4 transition-all"
                style={{ border: "1px solid rgba(255,250,235,0.08)", background: "rgba(255,250,235,0.02)" }}
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(34,195,142,0.1)" }}>
                    {cause.icon}
                  </div>
                  <h3 className="font-semibold text-sm" style={{ color: "#F5F0E8" }}>
                    {cause.title}
                  </h3>
                </div>
                <p className="text-xs leading-relaxed pl-8" style={{ color: "#A09D96" }}>
                  {cause.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION — HOW HOTSPOTS DAMAGE */}
        <div className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.01em]" style={{ color: "#F5F0E8" }}>
            How hotspots damage your system
          </h2>
          <p className="text-sm sm:text-base leading-[1.75]" style={{ color: "#A09D96" }}>
            The physics is straightforward, but the damage is real.
          </p>

          {/* DAMAGE MECHANISM CARDS */}
          <div className="space-y-4 pt-2">
            {[
              {
                title: "Energy reversal",
                description: "When a cell stops conducting properly, it has high electrical resistance. Current from healthy cells gets forced backward through that weak point. Instead of generating electricity, that reversed current turns into intense localized heat, 150°C or hotter. Hot enough to melt the solder that connects the cells together.",
              },
              {
                title: "The weakest link problem",
                description: "In a series circuit, the output of the whole string is limited by its worst performer. One bad cell doesn't just lose power on its own. It drags down the output of every healthy cell in that string. Your system generates at the rate of its weakest point.",
              },
              {
                title: "Permanent cell damage",
                description: "Repeated cycles of extreme heat crack glass, degrade protective materials, and break solder joints. Once a hotspot has been running for a while, the damage becomes irreversible. You're not just losing energy, you're permanently shortening the panel's lifespan.",
              },
            ].map((mechanism, i) => (
              <div
                key={i}
                className="rounded-xl p-5 transition-all"
                style={{ border: "1px solid rgba(255,250,235,0.08)", background: "rgba(255,250,235,0.02)" }}
              >
                <h3 className="font-semibold text-sm mb-2" style={{ color: "#F5F0E8" }}>
                  {mechanism.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#A09D96" }}>
                  {mechanism.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION — EARLY DETECTION */}
        <div className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.01em]" style={{ color: "#F5F0E8" }}>
            Why early detection actually matters
          </h2>
          <p className="text-sm sm:text-base leading-[1.75]" style={{ color: "#A09D96" }}>
            Hotspots develop silently. By the time they're visible in your performance data, they've often been running for months. Each month of operation at 150°C compounds the damage.
          </p>
          <p className="text-sm sm:text-base leading-[1.75]" style={{ color: "#A09D96" }}>
            The good news: hotspots found early can sometimes be fixed. If it's a shading issue, repositioning a fixture or trimming growth solves it completely. If it's a debris accumulation, a professional clean addresses it.
          </p>
          <p className="text-sm sm:text-base leading-[1.75]" style={{ color: "#A09D96" }}>
            If you wait until performance degradation is noticeable, you're often beyond repair. That panel becomes a liability, and replacement is your only option.
          </p>
        </div>

        {/* SECTION — HOW TO SPOT SIGNS */}
        <div className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.01em]" style={{ color: "#F5F0E8" }}>
            How to spot the signs
          </h2>
          <p className="text-sm sm:text-base leading-[1.75]" style={{ color: "#A09D96" }}>
            Most hotspots won't appear as a visible mark. But you can look for these patterns:
          </p>

          {/* SIGNS LIST */}
          <div className="space-y-2 pt-2">
            {[
              { icon: <TrendingDown className="w-3.5 h-3.5" style={{ color: "#22C38E" }} />, step: "Output underperformance that weather doesn't explain. If your system should generate 18 kWh on a clear sunny day but only produces 15–16 kWh consistently, that's worth investigating." },
              { icon: <Zap className="w-3.5 h-3.5" style={{ color: "#22C38E" }} />, step: "One string weaker than others. If you can access your inverter or monitoring app and see that one string produces consistently less than the others, focus on the weak one." },
              { icon: <AlertTriangle className="w-3.5 h-3.5" style={{ color: "#22C38E" }} />, step: "Recent physical incident. If something hit your roof (hail, branch) or a bird has been targeting one area repeatedly, that's a red flag." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 px-4 py-3 rounded-xl transition-all" style={{ background: "rgba(255,250,235,0.02)", border: "1px solid rgba(255,250,235,0.06)" }}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(34,195,142,0.1)" }}>
                  {item.icon}
                </div>
                <span className="text-xs sm:text-sm" style={{ color: "#A09D96" }}>{item.step}</span>
              </div>
            ))}
          </div>

          <p className="text-sm sm:text-base leading-[1.75] pt-4" style={{ color: "#A09D96" }}>
            Visual inspection from the ground rarely helps since hotspots are internal. But a thermal imaging scan (infrared camera) taken in bright sunlight will show hot cells clearly, confirming the diagnosis.
          </p>
        </div>

        {/* SECTION — HOW SOLCARE HELPS 
        <div className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.01em]" style={{ color: "#F5F0E8" }}>
            What to do next
          </h2>
          <p className="text-sm sm:text-base leading-[1.75]" style={{ color: "#A09D96" }}>
            If you're concerned your system might have a hotspot, don't wait. Each day of operation causes more damage.
          </p>
          <p className="text-sm sm:text-base leading-[1.75]" style={{ color: "#A09D96" }}>
            A professional solar inspection includes thermal imaging and electrical testing to identify any hotspots before they cause permanent damage. Early detection often means a simple fix—a clean, a trim, or repositioning something blocking light. Caught early, it's usually a $200–$500 problem. Caught late, it's a $2,000+ panel replacement.
          </p>
          <p className="text-sm sm:text-base leading-[1.75]" style={{ color: "#A09D96" }}>
            SolCare can send a technician to your property for a full system health check, thermal scan included. You'll get a clear before-and-after diagnosis and a concrete action plan—whether that's a clean, a maintenance visit, or a panel replacement assessment.
          </p>

          {/* HOW IT WORKS 
          <div className="space-y-2 pt-2">
            {[
              { icon: <Zap className="w-3.5 h-3.5" style={{ color: "#22C38E" }} />, step: "Schedule a thermal imaging inspection" },
              { icon: <Thermometer className="w-3.5 h-3.5" style={{ color: "#22C38E" }} />, step: "We scan your panels and test electrical performance" },
              { icon: <AlertTriangle className="w-3.5 h-3.5" style={{ color: "#22C38E" }} />, step: "You get a clear diagnosis and action plan" },
              { icon: <TrendingDown className="w-3.5 h-3.5" style={{ color: "#22C38E" }} />, step: "We handle the fix—clean, trim, or replacement" },
              { icon: <Zap className="w-3.5 h-3.5" style={{ color: "#22C38E" }} />, step: "Your system returns to full performance" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all" style={{ background: "rgba(255,250,235,0.02)", border: "1px solid rgba(255,250,235,0.06)" }}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(34,195,142,0.1)" }}>
                  {item.icon}
                </div>
                <span className="text-xs sm:text-sm" style={{ color: "#A09D96" }}>{item.step}</span>
              </div>
            ))}
          </div> 
        </div>

        {/* CTA */}
        <div 
          className="rounded-[28px] p-8 sm:p-10 text-center relative overflow-hidden" 
          style={{
            background: "linear-gradient(135deg, rgba(34,195,142,0.07) 0%, rgba(34,195,142,0.03) 100%)",
            border: "1px solid rgba(34,195,142,0.16)",
          }}
        >
          <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full blur-[60px]" style={{ background: "rgba(34,195,142,0.07)" }} />
          <div className="w-7 h-7 mx-auto mb-4 relative overflow-hidden">
            <Image
              src="/blog-icons/twin-leaf.png" 
              alt="SolCare Leaf"
              width={35}
              height={35}
              className="object-contain"
            />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.02em] mb-2" style={{ color: "#F5F0E8" }}>
            Protect your solar investment
          </h3>
          <p className="text-xs sm:text-sm mb-6 max-w-sm mx-auto leading-relaxed" style={{ color: "#A09D96" }}>
            Sign up to SolCare for professional cleaning and thermal imaging inspections to catch and prevent hotspots before they begin to cost you. Complete peace of mind, the SolCare way.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-black transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #4FDBA8, #22C38E)", boxShadow: "0 4px 20px rgba(34,195,142,0.25)" }}
          >
            Sign me up <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </article>

      {/* RELATED POSTS */}
      <section className="relative z-10 px-6 pb-24 max-w-3xl mx-auto">
        <div className="pt-12" style={{ borderTop: "1px solid rgba(255,250,235,0.07)" }}>
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-xs font-semibold uppercase tracking-[0.1em]" style={{ color: "#6B6860" }}>
              More from the blog
            </h2>
            <Link href="/blog" className="text-xs transition-colors duration-200 flex items-center gap-1" style={{ color: "#22C38E" }}>
              All articles <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
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
                  <div
                    className="h-28 flex items-center justify-center transition-colors duration-300"
                    style={{ borderBottom: "1px solid rgba(255,250,235,0.06)", background: "rgba(255,250,235,0.01)" }}
                  >
                    <Image
                      src={`/blog-icons/${post.icon}`}
                      alt={post.title}
                      width={44}
                      height={44}
                      className="object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="text-[10px] font-bold uppercase tracking-[0.08em] mb-2" style={{ color: "#22C38E" }}>
                      {post.category}
                    </div>
                    <h3 className="text-xs font-semibold leading-snug mb-4 flex-1 tracking-[-0.01em]" style={{ color: "#F5F0E8" }}>
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid rgba(255,250,235,0.06)" }}>
                      <div className="flex items-center gap-2 text-[10px]" style={{ color: "#6B6860" }}>
                        <span>{post.date}</span>
                        <span className="w-px h-2" style={{ background: "rgba(255,250,235,0.1)" }} />
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 transition-all duration-200 group-hover:translate-x-0.5" style={{ color: "#6B6860" }} />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}