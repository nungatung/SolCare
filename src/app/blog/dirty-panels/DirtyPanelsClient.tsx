"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Clock, Leaf, AlertTriangle, TrendingDown, DollarSign, Zap } from "lucide-react";

// ── Animation system ──────────────────────────────────────────────────────────
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
    slug: "solar-output",
    title: "How NZ's weather patterns affect your solar output",
    category: "Weather",
    date: "April 2026",
    readTime: "4 min read",
    icon: "sunshine.png", 
  },
];

export default function BlogPostDirtyPanels() {
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
            What dirty solar panels are{" "}
            <span style={{ color: "#22C38E" }} className="italic">actually</span> costing you
          </h1>
          <p className="text-lg leading-[1.75] mb-8" style={{ color: "#A09D96" }}>
            Quite often NZ homeowners are not aware that their solar system is quietly underperforming. Here's what the data shows and what a single clean is genuinely worth.
          </p>

          <div className="flex items-center gap-2 text-xs pb-6" style={{ color: "#6B6860", borderBottom: "1px solid rgba(255,250,235,0.08)" }}>
            <span>SolCare Editorial</span>
            <span className="w-px h-3" style={{ background: "rgba(255,250,235,0.1)" }} />
            <span>May 2026</span>
            <span className="w-px h-3" style={{ background: "rgba(255,250,235,0.1)" }} />
            <Clock className="w-3.5 h-3.5" />
            <span>5 min read</span>
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
            25%
          </div>
          <div>
            <div className="font-semibold text-base sm:text-lg mb-2" style={{ color: "#F5F0E8" }}>
              Average output lost to soiling on an uncleaned NZ system over 12 months
            </div>
            <div className="text-sm leading-relaxed" style={{ color: "#A09D96" }}>
              For a typical 5kW system in Auckland, that's roughly $200-$350 in lost generation per year, silently leaking from a system you've already paid for.
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
            Solar panels are a set and forget investment for most homeowners. You get the install, watch your power bill decrease over time, and don't think much about it again. And that's where the problem begins to arise.
          </p>
          <p>
            Panels degrade gradually. Dust settles, pollen coats the glass, bird droppings create localised hot spots. None of it triggers an alarm. Your system keeps generating, just less and less, quietly month after month. By the time the loss is reflected on your bill, you've already handed back hundreds of dollars in output you paid for when you bought the system.
          </p>
        </motion.div>

        {/* SECTION — WHY NZ IS WORSE THAN YOU'D EXPECT */}
        <div className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.01em]" style={{ color: "#F5F0E8" }}>
            Why NZ panels get dirty faster than you'd expect
          </h2>
          <p className="text-sm sm:text-base leading-[1.75]" style={{ color: "#A09D96" }}>
            New Zealand's climate is often assumed to be clean and rainy, panels should wash themselves, right? Not quite. Rainfall deposits a residue film as water evaporates, especially in urban areas with traffic pollution or coastal zones with salt spray. In many cases, light rain makes soiling worse, not better.
          </p>

          {/* CONTAMINANT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {[
              {
                icon: "pollen.png", 
                title: "Pollen and organic debris",
                desc: "New Zealand's native trees deposit heavy pollen in spring that forms a fine film across panel surfaces. In leafy suburbs this is the primary seasonal culprit and one of the hardest to rinse clean.",
              },
              {
                icon: "bird1.png", 
                title: "Bird droppings",
                desc: "The most damaging single contaminant. One dropping creates a shaded area that drags down the entire string of panels, not just the affected panel. It also accelerates cell degradation through localised overheating.",
              },
              {
                icon: "air.png", 
                title: "Coastal salt and sea air",
                desc: "For homes within a few kilometres of the coast, salt particles deposit on panel surfaces and attract further particulates. Coastal installations degrade faster and clean far less effectively from rain alone.",
              },
              {
                icon: "dust.png", 
                title: "Urban dust and PM10",
                desc: "Fine particulate matter from traffic sticks to panel glass, especially during dry stretches. SolCare monitors PM10 levels in real time and factors this directly into when Sola recommends a clean.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl transition-all duration-300"
                style={{ border: "1px solid rgba(255,250,235,0.07)", background: "rgba(255,250,235,0.02)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(34,195,142,0.25)";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,250,235,0.04)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,250,235,0.07)";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,250,235,0.02)";
                }}
              >
                <div className="mb-4">
                  <Image
                    src={`/blog-icons/${item.icon}`}
                    alt={item.title}
                    width={32}
                    height={32}
                    className="object-contain opacity-80"
                  />
                </div>
                <div className="text-sm font-semibold mb-2" style={{ color: "#F5F0E8" }}>{item.title}</div>
                <div className="text-xs leading-relaxed" style={{ color: "#6B6860" }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* PULL QUOTE */}
        <div className="pl-6 py-1 border-l-2" style={{ borderColor: "#22C38E" }}>
          <p className="text-lg sm:text-xl font-medium leading-relaxed italic" style={{ color: "#F5F0E8" }}>
            "Rain alone won't clean panels effectively, it just moves the dirt around. The only way to know your system is running clean is to measure what it's actually producing versus what it should be."
          </p>
          <cite className="block mt-3 text-xs not-italic tracking-wide uppercase" style={{ color: "#6B6860" }}>
            - Sola, after 6 consecutive elevated PM10 days in Auckland
          </cite>
        </div>

        {/* SECTION — FINANCIAL IMPACT */}
        <div className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.01em]" style={{ color: "#F5F0E8" }}>
            What the output gap actually costs
          </h2>
          <p className="text-sm sm:text-base leading-[1.75]" style={{ color: "#A09D96" }}>
            The financial impact of soiling depends on your system size, your local electricity rate, and how long panels have been dirty. Here's a conservative estimate for a 5kW system in the Auckland region:
          </p>

          {/* CALC TABLE */}
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,250,235,0.08)" }}>
            <div className="px-5 py-3.5 border-b flex items-center gap-2" style={{ background: "rgba(255,250,235,0.03)", borderColor: "rgba(255,250,235,0.08)" }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#22C38E" }} />
              <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#6B6860" }}>
                Example: 5kW system, Auckland
              </span>
            </div>
            {[
              { label: "Annual generation (clean system)", value: "~6,500 kWh", highlight: false },
              { label: "Output lost to soiling (est. 15%)", value: "~975 kWh", highlight: false },
              { label: "Value at $0.28/kWh (avoided import rate)", value: "~$273", highlight: false },
              { label: "Cost of one professional clean", value: "$89–$149", highlight: false },
              { label: "Net recovery after clean", value: "$124–$184", highlight: true },
            ].map((row, index) => (
              <div
                key={row.label}
                className="flex justify-between items-center px-5 py-4 border-b last:border-b-0"
                style={{ 
                  borderColor: "rgba(255,250,235,0.06)",
                  background: row.highlight ? "rgba(34,195,142,0.07)" : "transparent"
                }}
              >
                <span className="text-xs sm:text-sm" style={{ color: row.highlight ? "#22C38E" : "#A09D96", fontWeight: row.highlight ? 600 : 400 }}>
                  {row.label}
                </span>
                <span className="font-mono text-xs sm:text-sm font-medium" style={{ color: row.highlight ? "#22C38E" : "#F5F0E8", fontSize: row.highlight ? "15px" : "14px" }}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          <p className="text-sm sm:text-base leading-[1.75]" style={{ color: "#A09D96" }}>
            That's a clear return but most homeowners never see it because there's no before and after measurement. SolCare tracks your output gap in real time, so Sola can tell you not just that a clean is due, but <strong style={{ color: "#F5F0E8" }}>exactly what it's worth</strong> before you book it.
          </p>
        </div>

        {/* STAT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: <TrendingDown className="w-4 h-4" style={{ color: "#F5A623" }} />,
              value: "15%",
              label: "Typical output gap before a clean",
              sub: "Measured across monitored NZ systems with 5+ days of elevated PM10",
              color: "#F5A623",
            },
            {
              icon: <DollarSign className="w-4 h-4" style={{ color: "#22C38E" }} />,
              value: "$124+",
              label: "Net recovery after a single clean",
              sub: "5kW Auckland system at current avoided import rates",
              color: "#22C38E",
            },
            {
              icon: <Leaf className="w-4 h-4" style={{ color: "#22C38E" }} />,
              value: "~$78",
              label: "Reforestation donated per year",
              sub: "Via the Impact Club, $1 per 1kg CO₂ your system offsets",
              color: "#22C38E",
            },
          ].map((stat) => (
            <div key={stat.label} className="p-5 rounded-2xl" style={{ border: "1px solid rgba(255,250,235,0.07)", background: "rgba(255,250,235,0.02)" }}>
              <div className="mb-3">{stat.icon}</div>
              <div className="font-mono text-2xl sm:text-3xl font-bold mb-2" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-xs sm:text-sm font-medium mb-1" style={{ color: "#F5F0E8" }}>{stat.label}</div>
              <div className="text-[11px] leading-relaxed" style={{ color: "#6B6860" }}>{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* SECTION — THE HOT SPOT PROBLEM */}
        <div className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.01em]" style={{ color: "#F5F0E8" }}>
            The hot spot problem and why it matters long-term
          </h2>
          <p className="text-sm sm:text-base leading-[1.75]" style={{ color: "#A09D96" }}>
            There's a secondary cost to dirty panels that many solar owners never factor in: <span style={{ color: "#22C38E" }} className="italic">Panel Degradation.</span> When part of a panel's surface is shaded whether by a bird dropping, a patch of pollen, or a build up of debris, the unshaded cells try to push current through the shaded ones. This creates localised overheating, known as a hot spot.
          </p>
          <p className="text-sm sm:text-base leading-[1.75]" style={{ color: "#A09D96" }}>
            Hot spots accelerate the degradation of solar cells permanently. A panel that degrades faster means a shorter effective lifespan and solar panel replacements can be costly. Majority of New Zealand solar installers ensure a 25-30 year panel lifespan under normal manufacture warranty conditions. Persistent soiling can meaningfully shorten that.
          </p>

          <div className="rounded-2xl p-6 flex gap-4" style={{ border: "1px solid rgba(245,166,35,0.15)", background: "rgba(245,166,35,0.04)" }}>
            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#F5A623" }} />
            <div>
              <div className="text-xs sm:text-sm font-semibold mb-1" style={{ color: "#F5A623" }}>Warranty risk</div>
              <div className="text-xs leading-relaxed" style={{ color: "#A09D96" }}>
                Some panel manufacturers include maintenance clauses in their warranties. Persistent soiling that leads to hot spot damage may not be covered if there's no evidence of regular cleaning. SolCare's post clean job reports serve as your maintenance record.
              </div>
            </div>
          </div>
        </div>

        {/* SECTION — CLEANING FREQUENCY */}
        <div className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.01em]" style={{ color: "#F5F0E8" }}>
            How often should New Zealand solar owners clean their panels?
          </h2>
          <p className="text-sm sm:text-base leading-[1.75]" style={{ color: "#A09D96" }}>
            The honest answer: it depends on where you live and what your data shows. A blanket schedule misses the point, a system in Remuera surrounded by pōhutukawa trees needs more attention than a system on open farmland in the Waikato.
          </p>
          <p className="text-sm sm:text-base leading-[1.75]" style={{ color: "#A09D96" }}>
            Sola tracks this dynamically using your real generation data, live PM10 readings, and Solcast irradiance forecasts. But if you're working without monitoring, here's a rough guide by NZ context:
          </p>

          {/* FREQUENCY TABLE */}
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,250,235,0.08)", background: "rgba(255,250,235,0.01)" }}>
            <div className="hidden md:grid md:grid-cols-3 border-b" style={{ background: "rgba(255,250,235,0.03)", borderColor: "rgba(255,250,235,0.08)" }}>
              {["Location", "Frequency", "Main risk"].map((h) => (
                <div key={h} className="px-4 py-3 text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#6B6860" }}>
                  {h}
                </div>
              ))}
            </div>

            {[
              {
                loc: "Urban Auckland / Wellington",
                freq: "Every 3–4 months",
                risk: "PM10, pollen, traffic residue",
                badge: "yellow",
              },
              {
                loc: "Coastal (within 3km of coast)",
                freq: "Every 2–3 months",
                risk: "Salt deposition, wind particles",
                badge: "orange",
              },
              {
                loc: "Leafy suburban / near native bush",
                freq: "Every 3–4 months",
                risk: "Pollen, birds, organic debris",
                badge: "yellow",
              },
              {
                loc: "Rural / open farmland",
                freq: "Every 6 months",
                risk: "Dust, lower pollution pressure",
                badge: "green",
              },
            ].map((row) => (
              <div key={row.loc} className="flex flex-col p-5 md:p-0 md:grid md:grid-cols-3 border-b last:border-b-0 transition-colors" style={{ borderColor: "rgba(255,250,235,0.06)" }}>
                <div className="md:px-4 md:py-4 text-sm font-semibold md:font-normal mb-2 md:mb-0" style={{ color: "#F5F0E8" }}>
                  {row.loc}
                </div>

                <div className="md:px-4 md:py-4 mb-3 md:mb-0 flex items-center">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full border whitespace-nowrap"
                    style={
                      row.badge === "green"
                        ? { background: "rgba(34,195,142,0.08)", borderColor: "rgba(34,195,142,0.2)", color: "#22C38E" }
                        : { background: "rgba(245,166,35,0.08)", borderColor: "rgba(245,166,35,0.2)", color: "#F5A623" }
                    }
                  >
                    {row.freq}
                  </span>
                </div>

                <div className="md:px-4 md:py-4 text-xs leading-relaxed italic md:not-italic" style={{ color: "#6B6860" }}>
                  <span className="md:hidden not-italic font-medium mr-1" style={{ color: "#3D3D38" }}>Risk:</span>
                  {row.risk}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION — HOW SOLARPAL HANDLES IT */}
        <div className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.01em]" style={{ color: "#F5F0E8" }}>
            How Sola handles this for you
          </h2>
          <p className="text-sm sm:text-base leading-[1.75]" style={{ color: "#A09D96" }}>
            SolCare connects directly to your inverter and cross references your actual generation against what Solcast forecasts you should be producing for that day's irradiance, temperature, and cloud cover. When there's a persistent gap that weather doesn't explain, that's soiling.
          </p>
          <p className="text-sm sm:text-base leading-[1.75]" style={{ color: "#A09D96" }}>
            Sola also monitors PM10 air quality in your region in real time. When particulate levels have been elevated for several days and your output gap is widening, it notifies you directly, not with a generic alert but with the specific dollar value of what you're losing and a suggested clean window based on upcoming weather.
          </p>
          <p className="text-sm sm:text-base leading-[1.75]" style={{ color: "#A09D96" }}>
            You pick a time. SolCare dispatches a vetted local cleaner. After the job, Sola sends you a before and after performance report so you can see exactly what the clean recovered. The whole thing takes one tap to book and nothing else from you.
          </p>

          {/* HOW IT FLOWS */}
          <div className="space-y-2 pt-2">
            {[
              { icon: <Zap className="w-3.5 h-3.5" style={{ color: "#22C38E" }} />, step: "Sola detects output gap + elevated PM10" },
              { icon: <Zap className="w-3.5 h-3.5" style={{ color: "#22C38E" }} />, step: "Notifies you with the $ value and best clean window" },
              { icon: <Zap className="w-3.5 h-3.5" style={{ color: "#22C38E" }} />, step: "You pick a time slot with one tap" },
              { icon: <Zap className="w-3.5 h-3.5" style={{ color: "#22C38E" }} />, step: "SolCare dispatches a vetted local cleaner" },
              { icon: <Leaf className="w-3.5 h-3.5" style={{ color: "#22C38E" }} />, step: "Sola sends you a before and after performance report" },
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
          <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full blur-[60px]" />
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
            See what your panels are actually doing
          </h3>
          <p className="text-xs sm:text-sm mb-6 max-w-sm mx-auto leading-relaxed" style={{ color: "#A09D96" }}>
            Connect your inverter and Sola starts monitoring immediately. Most users see their first insight within 24 hours.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-black transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #4FDBA8, #22C38E)", boxShadow: "0 4px 20px rgba(34,195,142,0.25)" }}
          >
            Connect my system <ArrowRight className="w-4 h-4" />
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