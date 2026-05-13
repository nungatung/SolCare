"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Clock, Leaf, AlertTriangle, TrendingDown, DollarSign, Zap } from "lucide-react";

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
    <main className="min-h-screen bg-[#0A0A0A] text-white">

      {/* BACK NAV */}
      <div className="px-6 pt-10 max-w-7xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-m text-gray-600 hover:text-green-400 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Back to blog
        </Link>
      </div>

      {/* ARTICLE HERO */}
      <section className="px-6 pt-10 pb-12 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["NZ Solar", "Maintenance", "Performance"].map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-green-500/20 bg-green-500/8 text-green-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5 tracking-tight">
            What dirty solar panels are{" "}
            <span className="text-green-400 italic">actually</span> costing you
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Quite often NZ homeowners are not aware that their solar system is quietly underperforming. Here's what the data shows and what a single clean is genuinely worth.
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-600 pb-8 border-b border-white/8">
            <span>SolCare Editorial</span>
            <span className="w-px h-3 bg-white/10" />
            <span>May 2026</span>
            <span className="w-px h-3 bg-white/10" />
            <Clock className="w-3 h-3" />
            <span>5 min read</span>
          </div>
        </motion.div>
      </section>

      {/* ARTICLE BODY */}
      <article className="px-6 max-w-3xl mx-auto pb-20 space-y-10">

        {/* HERO STAT */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl border border-green-500/20 bg-green-500/[0.07] p-8 flex flex-col md:flex-row gap-6 items-start"
        >
          <div className="font-mono text-6xl md:text-7xl font-bold text-green-400 leading-none flex-shrink-0">
            25%
          </div>
          <div>
            <div className="text-white font-semibold text-lg mb-2">
              Average output lost to soiling on an uncleaned NZ system over 12 months
            </div>
            <div className="text-gray-500 text-sm leading-relaxed">
              For a typical 5kW system in Auckland, that's roughly $200–$350 in lost generation per year, silently leaking from a system you've already paid for.
            </div>
          </div>
        </motion.div>

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-5 text-gray-400 leading-relaxed text-[15px]"
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
          <h2 className="text-2xl font-bold text-white">Why NZ panels get dirty faster than you'd expect</h2>
          <p className="text-gray-400 leading-relaxed text-[15px]">
            New Zealand's climate is often assumed to be clean and rainy, panels should wash themselves, right? Not quite. Rainfall deposits a residue film as water evaporates, especially in urban areas with traffic pollution or coastal zones with salt spray. In many cases, light rain makes soiling worse, not better.
          </p>

          {/* CONTAMINANT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
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
                desc: "Fine particulate matter from traffic sticks to panel glass, especially during dry stretches. SolCare monitors PM10 levels in real time and factors this directly into when SolarPal recommends a clean.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl border border-white/8 bg-white/[0.03] hover:border-green-500/20 transition-colors"
              >
                <div className="mb-3">
                  <Image
                    src={`/blog-icons/${item.icon}`}
                    alt={item.title}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div className="text-sm font-semibold text-white mb-2">{item.title}</div>
                <div className="text-sm text-gray-500 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* PULL QUOTE */}
        <div className="border-l-2 border-green-500 pl-6 py-2">
          <p className="text-white text-xl font-medium leading-relaxed italic">
            "Rain alone won't clean panels effectively, it just moves the dirt around. The only way to know your system is running clean is to measure what it's actually producing versus what it should be."
          </p>
          <cite className="block mt-3 text-sm text-gray-600 not-italic tracking-wide">
            — SolarPal, after 6 consecutive elevated PM10 days in Auckland
          </cite>
        </div>

        {/* SECTION — FINANCIAL IMPACT */}
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-white">What the output gap actually costs</h2>
          <p className="text-gray-400 leading-relaxed text-[15px]">
            The financial impact of soiling depends on your system size, your local electricity rate, and how long panels have been dirty. Here's a conservative estimate for a 5kW system in the Auckland region:
          </p>

          {/* CALC TABLE */}
          <div className="rounded-2xl border border-white/8 overflow-hidden">
            <div className="px-5 py-3.5 bg-white/[0.04] border-b border-white/8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                Example: 5kW system, Auckland
              </span>
            </div>
            {[
              { label: "Annual generation (clean system)", value: "~6,500 kWh", highlight: false },
              { label: "Output lost to soiling (est. 15%)", value: "~975 kWh", highlight: false },
              { label: "Value at $0.28/kWh (avoided import rate)", value: "~$273", highlight: false },
              { label: "Cost of one professional clean", value: "$89–$149", highlight: false },
              { label: "Net recovery after clean", value: "$124–$184", highlight: true },
            ].map((row) => (
              <div
                key={row.label}
                className={`flex justify-between items-center px-5 py-4 border-b border-white/8 last:border-b-0 ${
                  row.highlight ? "bg-green-500/[0.07]" : ""
                }`}
              >
                <span className={`text-sm ${row.highlight ? "text-green-400 font-semibold" : "text-gray-500"}`}>
                  {row.label}
                </span>
                <span className={`font-mono text-sm font-medium ${row.highlight ? "text-green-400 text-base" : "text-white"}`}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          <p className="text-gray-400 leading-relaxed text-[15px]">
            That's a clear return but most homeowners never see it because there's no before and after measurement. SolCare tracks your output gap in real time, so SolarPal can tell you not just that a clean is due, but <strong className="text-white">exactly what it's worth</strong> before you book it.
          </p>
        </div>

        {/* STAT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: <TrendingDown className="w-4 h-4 text-yellow-400" />,
              value: "15%",
              label: "Typical output gap before a clean",
              sub: "Measured across monitored NZ systems with 5+ days of elevated PM10",
              color: "text-yellow-400",
            },
            {
              icon: <DollarSign className="w-4 h-4 text-green-400" />,
              value: "$124+",
              label: "Net recovery after a single clean",
              sub: "5kW Auckland system at current avoided import rates",
              color: "text-green-400",
            },
            {
              icon: <Leaf className="w-4 h-4 text-green-400" />,
              value: "~$78",
              label: "Reforestation donated per year",
              sub: "Via the Impact Club, $1 per 1kg CO₂ your system offsets",
              color: "text-green-400",
            },
          ].map((stat) => (
            <div key={stat.label} className="p-5 rounded-xl border border-white/8 bg-white/[0.03]">
              <div className="mb-3">{stat.icon}</div>
              <div className={`font-mono text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-sm font-medium text-white mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600 leading-relaxed">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* SECTION — THE HOT SPOT PROBLEM */}
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-white">The hot spot problem and why it matters long-term</h2>
          <p className="text-gray-400 leading-relaxed text-[15px]">
            There's a secondary cost to dirty panels that many solar owners never factor in: <span className="text-green-400 italic"> Panel Degradation.</span> When part of a panel's surface is shaded whether by a bird dropping, a patch of pollen, or a build up of debris, the unshaded cells try to push current through the shaded ones. This creates localised overheating, known as a hot spot.
          </p>
          <p className="text-gray-400 leading-relaxed text-[15px]">
            Hot spots accelerate the degradation of solar cells permanently. A panel that degrades faster means a shorter effective lifespan and solar panel replacements can be costly. Majority of New Zealand solar installers ensure a 25-30 year panel lifespan under normal manufacture warranty conditions. Persistent soiling can meaningfully shorten that.
          </p>

          <div className="rounded-2xl border border-yellow-500/15 bg-yellow-500/[0.05] p-6 flex gap-4">
            <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-yellow-300 mb-1">Warranty risk</div>
              <div className="text-sm text-gray-500 leading-relaxed">
                Some panel manufacturers include maintenance clauses in their warranties. Persistent soiling that leads to hot spot damage may not be covered if there's no evidence of regular cleaning. SolCare's post clean job reports serve as your maintenance record.
              </div>
            </div>
          </div>
        </div>

        {/* SECTION — CLEANING FREQUENCY */}
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-white">How often should New Zealand solar owners clean their panels?</h2>
          <p className="text-gray-400 leading-relaxed text-[15px]">
            The honest answer: it depends on where you live and what your data shows. A blanket schedule misses the point, a system in Remuera surrounded by pōhutukawa trees needs more attention than a system on open farmland in the Waikato.
          </p>
          <p className="text-gray-400 leading-relaxed text-[15px]">
            SolarPal tracks this dynamically using your real generation data, live PM10 readings, and Solcast irradiance forecasts. But if you're working without monitoring, here's a rough guide by NZ context:
          </p>

          {/* FREQUENCY TABLE */}
<div className="rounded-2xl border border-white/8 overflow-hidden bg-white/[0.02]">
  {/* Header Row - Hidden on mobile, shown on desktop */}
  <div className="hidden md:grid md:grid-cols-3 bg-white/[0.04] border-b border-white/8">
    {["Location", "Frequency", "Main risk"].map((h) => (
      <div key={h} className="px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-gray-600">
        {h}
      </div>
    ))}
  </div>

  {/* Data Rows */}
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
    /* UPDATED: Flex-col on mobile, Grid-cols-3 on desktop */
    <div key={row.loc} className="flex flex-col p-5 md:p-0 md:grid md:grid-cols-3 border-b border-white/8 last:border-b-0 hover:bg-white/[0.02] transition-colors">
      
      {/* Location Column */}
      <div className="md:px-4 md:py-4 text-sm font-semibold md:font-normal text-white mb-2 md:mb-0">
        {row.loc}
      </div>

      {/* Frequency Column - THE FIX */}
      <div className="md:px-4 md:py-4 mb-3 md:mb-0">
        <span
          className={`text-[11px] font-medium px-3 py-1 rounded-full border w-fit whitespace-nowrap inline-flex items-center justify-center ${
            row.badge === "green"
              ? "bg-green-500/10 border-green-500/20 text-green-400"
              : row.badge === "yellow"
                ? "bg-yellow-500/10 border-yellow-500/20 text-yellow-400"
                : "bg-orange-500/10 border-orange-500/20 text-orange-400"
          }`}
        >
          {row.freq}
        </span>
      </div>

      {/* Risk Column */}
      <div className="md:px-4 md:py-4 text-xs text-gray-500 leading-relaxed italic md:not-italic">
        <span className="md:hidden text-gray-700 not-italic font-medium mr-1">Risk:</span>
        {row.risk}
      </div>
    </div>
  ))}
</div>
        </div>

        {/* SECTION — HOW SOLARPAL HANDLES IT */}
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-white">How SolarPal handles this for you</h2>
          <p className="text-gray-400 leading-relaxed text-[15px]">
            SolCare connects directly to your inverter and cross references your actual generation against what Solcast forecasts you should be producing for that day's irradiance, temperature, and cloud cover. When there's a persistent gap that weather doesn't explain, that's soiling.
          </p>
          <p className="text-gray-400 leading-relaxed text-[15px]">
            SolarPal also monitors PM10 air quality in your region in real time. When particulate levels have been elevated for several days and your output gap is widening, it notifies you directly, not with a generic alert but with the specific dollar value of what you're losing and a suggested clean window based on upcoming weather.
          </p>
          <p className="text-gray-400 leading-relaxed text-[15px]">
            You pick a time. SolCare dispatches a vetted local cleaner. After the job, SolarPal sends you a before and after performance report so you can see exactly what the clean recovered. The whole thing takes one tap to book and nothing else from you.
          </p>

          {/* HOW IT FLOWS */}
          <div className="space-y-2 pt-2">
            {[
              { icon: <Zap className="w-3.5 h-3.5 text-green-400" />, step: "SolarPal detects output gap + elevated PM10" },
              { icon: <Zap className="w-3.5 h-3.5 text-green-400" />, step: "Notifies you with the $ value and best clean window" },
              { icon: <Zap className="w-3.5 h-3.5 text-green-400" />, step: "You pick a time slot with one tap" },
              { icon: <Zap className="w-3.5 h-3.5 text-green-400" />, step: "SolCare dispatches a vetted local cleaner" },
              { icon: <Leaf className="w-3.5 h-3.5 text-green-400" />, step: "SolarPal sends you a before and after performance report" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/8">
                <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <span className="text-sm text-gray-300">{item.step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl border border-green-500/15 bg-green-500/[0.06] p-10 text-center">
          <Leaf className="w-8 h-8 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">
            See what your panels are actually doing
          </h3>
          <p className="text-sm text-gray-500 mb-8 max-w-sm mx-auto leading-relaxed">
            Connect your inverter and SolarPal starts monitoring immediately. Most users see their first insight within 24 hours.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-green-500 text-black text-sm font-semibold hover:bg-green-400 transition-colors"
          >
            Connect my system <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </article>

      {/* RELATED POSTS — PNG icons */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="border-t border-white/8 pt-16">
          <div className="flex items-baseline justify-between mb-8 max-w-3xl mx-auto">
            <h2 className="text-lg font-semibold text-white">More from the blog</h2>
            <Link href="/blog" className="text-xs text-green-400 hover:text-green-300 transition-colors flex items-center gap-1">
              All articles <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {relatedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="h-full rounded-2xl border border-white/8 bg-white/[0.03] overflow-hidden hover:border-green-500/20 hover:bg-white/[0.05] transition-all">
                  <div className="h-28 bg-white/[0.02] border-b border-white/8 flex items-center justify-center group-hover:bg-white/[0.04] transition-colors">
                    <Image
                      src={`/blog-icons/${post.icon}`}
                      alt={post.title}
                      width={44}
                      height={44}
                      className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-green-500 mb-2">{post.category}</div>
                    <div className="text-sm font-medium text-white leading-snug mb-3 group-hover:text-green-300 transition-colors">{post.title}</div>
                    <div className="flex items-center gap-2 text-[11px] text-gray-700">
                      <span>{post.date}</span>
                      <span className="w-px h-3 bg-white/10" />
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}