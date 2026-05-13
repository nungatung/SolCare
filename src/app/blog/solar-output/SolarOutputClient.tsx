"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Clock, Leaf, CloudRain, Wind, Sun, Thermometer } from "lucide-react";


const relatedPosts = [
  {
    slug: "dirty-panels",
    title: "What dirty panels are actually costing you",
    category: "Maintenance",
    date: "May 2026",
    readTime: "5 min read",
    icon: "cost.png",
  },
];

export default function BlogPostNZWeather() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">

      {/* BACK NAV */}
      <div className="px-6 pt-10 max-w-7xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-green-400 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Back to blog
        </Link>
      </div>

      {/* ARTICLE HERO */}
      <section className="px-6 pt-10 pb-12 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex flex-wrap gap-2 mb-6">
            {["NZ Solar", "Weather", "Performance"].map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-green-500/20 bg-green-500/8 text-green-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5 tracking-tight">
            How NZ's weather patterns{" "}
            <span className="text-green-400 italic">affect your solar output</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Auckland winters, Wellington winds, Christchurch frosts. Where you live in New Zealand shapes your solar system's behaviour more than most installers tell you.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-600 pb-8 border-b border-white/8">
            <span>SolCare Editorial</span>
            <span className="w-px h-3 bg-white/10" />
            <span>April 2026</span>
            <span className="w-px h-3 bg-white/10" />
            <Clock className="w-3 h-3" />
            <span>4 min read</span>
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
            40%
          </div>
          <div>
            <div className="text-white font-semibold text-lg mb-2">
              Difference in annual solar generation between NZ's sunniest and least sunny regions
            </div>
            <div className="text-gray-500 text-sm leading-relaxed">
              A 5kW system in Nelson generates significantly more over a year than the same system in Invercargill yet both owners pay similar upfront costs. Understanding your local conditions is the first step to knowing what your system should actually be doing.
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
            New Zealand sits in a unique position for solar. The country runs from roughly 34°S in Northland to 46°S in Southland, a span of nearly 1,500km. 
            That latitude range, combined with two mountain ranges, a coastline on every side, and the Roaring Forties sweeping up from the Southern Ocean, creates dramatically different solar environments across a relatively small country.
          </p>
          <p>
            Most solar installers give homeowners a single annual estimate based on standard irradiance tables. 
            What they rarely explain is how NZ's specific weather patterns, seasonal cloud cover, humidity, salt air, frost, and wind interact with panel performance throughout the year. That's what this article is for.
          </p>
        </motion.div>

        {/* SECTION — IRRADIANCE ACROSS NZ */}
        <div className="space-y-5">
        <h2 className="text-2xl font-bold text-white">Solar irradiance across New Zealand</h2>
        <p className="text-gray-400 leading-relaxed text-[15px]">
            Solar irradiance: the amount of solar energy hitting a surface per square metre is the primary driver of how much your panels generate and the primary factor used to design a solar system. 
            In New Zealand, this varies considerably by region and season.
        </p>

        <div className="rounded-2xl border border-white/8 overflow-hidden bg-white/[0.01]">
            {/* Header */}
            <div className="px-5 py-3.5 bg-white/[0.04] border-b border-white/8 flex items-center gap-3">
            {/* Added shrink-0 to keep the dot circular if the text wraps */}
            <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gray-500">
                Approximate annual sunshine hours by region
            </span>
            </div>

            {/* Table Rows */}
            {[
            { region: "Nelson / Marlborough", hours: "2,400–2,500 hrs", output: "Excellent", badge: "green" },
            { region: "Hawke's Bay / Gisborne", hours: "2,200–2,400 hrs", output: "Very good", badge: "green" },
            { region: "Auckland", hours: "2,000–2,100 hrs", output: "Good", badge: "yellow" },
            { region: "Wellington", hours: "1,900–2,050 hrs", output: "Good", badge: "yellow" },
            { region: "Christchurch", hours: "1,950–2,100 hrs", output: "Good", badge: "yellow" },
            { region: "Dunedin / Southland", hours: "1,600–1,800 hrs", output: "Moderate", badge: "orange" },
            ].map((row) => (
            <div key={row.region} className="flex items-center justify-between px-5 py-4 border-b border-white/8 last:border-b-0 gap-3">
                {/* UPDATED: Added flex-1 and min-w-0 to let the region name wrap properly if space is tight */}
                <span className="text-sm text-white flex-1 min-w-0">{row.region}</span>
                
                {/* UPDATED: Container for hours and badge with fixed widths */}
                <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                {/* Added whitespace-nowrap to prevent 'hrs' from dropping to a new line */}
                <span className="font-mono text-[13px] text-gray-400 whitespace-nowrap">{row.hours}</span>
                
                {/* THE FIX: Added shrink-0 and whitespace-nowrap to preserve the pill shape */}
                <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full border shrink-0 whitespace-nowrap ${
                    row.badge === "green"
                    ? "bg-green-500/10 border-green-500/20 text-green-400"
                    : row.badge === "yellow"
                        ? "bg-yellow-500/10 border-yellow-500/20 text-yellow-400"
                        : "bg-orange-500/10 border-orange-500/20 text-orange-400"
                }`}>
                    {row.output}
                </span>
                </div>
            </div>
            ))}
        </div>

        <p className="text-gray-400 leading-relaxed text-[15px]">
            These figures represent averages across the year. The seasonal swing matters just as much, an Auckland system might generate three times more output in January than in June. 
            SolarPal accounts for this by comparing your actual generation against Solcast's daily irradiance forecast for your exact location, not a regional average.
        </p>
        </div>

        {/* SECTION — REGIONAL WEATHER CARDS */}
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-white">What each region's weather actually means for your panels</h2>
          <p className="text-gray-400 leading-relaxed text-[15px]">
            Irradiance is just one part of the picture. Humidity, wind, salt, frost, and cloud patterns all influence both how much your system generates and how quickly it gets dirty.
          </p>

          <div className="flex flex-col gap-4">
            {[
              {
                icon: <CloudRain className="w-5 h-5 text-blue-400" />,
                region: "Auckland",
                headline: "High humidity, persistent overcast periods",
                paras: [
                  "Auckland's subtropical climate means humid summers and overcast winters. Output in June and July can drop significantly compared to summer peaks, this is normal and expected. What's less expected is how quickly pollen and salt air from the Waitemata coat panels in spring.",
                  "Auckland homeowners tend to need 3-4 cleans per year. PM10 levels in urbanised areas like South Auckland are consistently higher than the national average, which means soiling accumulates faster than in regional centres.",
                ],
              },
              {
                icon: <Wind className="w-5 h-5 text-gray-400" />,
                region: "Wellington",
                headline: "Wind is a double edged sword",
                paras: [
                  "Wellington's notorious winds have a useful side effect, they can self clean panels to some degree. However, that same wind carries salt from Cook Strait and fine particulates from the urban basin. Salt deposits are particularly damaging because they attract further contaminants and reduce output progressively.",
                  "Wellington systems often show a characteristic output pattern: relatively stable through the wind swept winter, then sharp soiling spikes in summer when winds ease and particulates settle. SolarPal's PM10 monitoring catches this pattern early.",
                ],
              },
              {
                icon: <Thermometer className="w-5 h-5 text-yellow-400" />,
                region: "Christchurch",
                headline: "Frost and winter fog affect more than you'd think",
                paras: [
                  "Canterbury's inland climate brings cold winters with frost and in some areas persistent morning fog that reduces effective irradiance hours. Frost on panels is less harmful than it sounds, it melts and generally rinses residue away. The bigger issue is the extended cloud cover and shorter winter days that reduce generation significantly from May to August.",
                  "Canterbury also experiences nor'west winds carrying dust from inland plains, which is a significant contributor to panel soiling in spring and early summer. Output often drops notably after a dry nor'west spell.",
                ],
              },
              {
                icon: <Sun className="w-5 h-5 text-yellow-400" />,
                region: "Nelson / Marlborough",
                headline: "NZ's solar sweet spot",
                paras: [
                  "Nelson and Blenheim consistently record the highest sunshine hours in New Zealand. Low rainfall in summer, high irradiance, and relatively clean inland air mean panels in this region perform at or near their rated capacity for more of the year than anywhere else in the country.",
                  "That said, Marlborough's vineyard country means high pollen loads in spring. Systems near vineyards or orchards should plan for at least one additional clean during the October–November pollen season.",
                ],
              },
            ].map((item) => (
              <div key={item.region} className="p-6 rounded-2xl border border-white/8 bg-white/[0.03] hover:border-green-500/20 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/8 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{item.region}</div>
                    <div className="text-xs text-gray-500">{item.headline}</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {item.paras.map((p, i) => (
                    <p key={i} className="text-sm text-gray-500 leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PULL QUOTE */}
        <div className="border-l-2 border-green-500 pl-6 py-2">
          <p className="text-white text-xl font-medium leading-relaxed italic">
            "Your installer quoted you an annual output estimate. What they probably didn't mention is that estimate assumes average conditions, and NZ's conditions are anything but average, depending on where you live."
          </p>
          <cite className="block mt-3 text-sm text-gray-600 not-italic tracking-wide">
            - SolCare Editorial
          </cite>
        </div>

        {/* SECTION — SEASONAL PATTERNS */}
        <div className="space-y-5">
        <h2 className="text-2xl font-bold text-white">The seasonal output pattern every NZ homeowner should know</h2>
        <p className="text-gray-400 leading-relaxed text-[15px]">
            Regardless of where you live in NZ, solar systems follow a predictable seasonal curve. Understanding this helps you distinguish between normal seasonal dips and genuine underperformance.
        </p>

        <div className="rounded-2xl border border-white/8 overflow-hidden bg-white/[0.01]">
            {/* Header Row - Hidden on mobile, Grid on desktop */}
            <div className="hidden md:grid md:grid-cols-4 bg-white/[0.04] border-b border-white/8">
            {["Season", "Typical output", "Main factor", "Watch for"].map((h) => (
                <div key={h} className="px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-gray-600">
                {h}
                </div>
            ))}
            </div>

            {/* Data Rows */}
            {[
            {
                season: "Summer",
                dates: "(Dec–Feb)",
                output: "Peak",
                factor: "Long days, high irradiance",
                watch: "Soiling accumulates fast in dry spells",
                badge: "green",
            },
            {
                season: "Autumn",
                dates: "(Mar–May)",
                output: "Declining",
                factor: "Shorter days, pollen settling",
                watch: "Post summer soiling often peaking",
                badge: "yellow",
            },
            {
                season: "Winter",
                dates: "(Jun–Aug)",
                output: "Lowest",
                factor: "Short days, cloud cover, low sun angle",
                watch: "Normal, not to be confused with a fault",
                badge: "orange",
            },
            {
                season: "Spring",
                dates: "(Sep–Nov)",
                output: "Recovering",
                factor: "Longer days, improving irradiance",
                watch: "Heavy pollen season, output gap widens",
                badge: "yellow",
            },
            ].map((row) => (
            <div key={row.season} className="flex flex-col p-6 md:p-0 md:grid md:grid-cols-4 border-b border-white/8 last:border-b-0 hover:bg-white/[0.02] transition-colors">
                
                {/* Season Column */}
                <div className="md:px-4 md:py-4 text-base md:text-sm text-white font-semibold md:font-medium flex items-center gap-2 mb-3 md:mb-0 whitespace-nowrap">
                {row.season} <span className="text-gray-500 font-normal text-sm">{row.dates}</span>
                </div>

                {/* Output Column */}
                <div className="md:px-4 md:py-4 mb-4 md:mb-0">
                <span className={`text-[11px] inline-flex items-center justify-center font-medium px-3 py-1 rounded-full border w-fit whitespace-nowrap ${
                    row.badge === "green"
                    ? "bg-green-500/10 border-green-500/20 text-green-400"
                    : row.badge === "yellow"
                        ? "bg-yellow-500/10 border-yellow-500/20 text-yellow-400"
                        : "bg-orange-500/10 border-orange-500/20 text-orange-400"
                }`}>
                    {row.output}
                </span>
                </div>

                {/* Factor Column */}
                <div className="md:px-4 md:py-4 text-xs text-gray-400 leading-relaxed mb-2 md:mb-0">
                <span className="md:hidden text-gray-600 font-medium mr-1 uppercase tracking-tighter text-[10px]">Factor:</span>
                {row.factor}
                </div>

                {/* Watch For Column */}
                <div className="md:px-4 md:py-4 text-xs text-gray-500 leading-relaxed italic md:not-italic">
                <span className="md:hidden text-gray-700 not-italic font-medium mr-1 uppercase tracking-tighter text-[10px]">Watch:</span>
                {row.watch}
                </div>
            </div>
            ))}
        </div>
        </div>

        {/* SECTION — HOW SOLARPAL HANDLES IT */}
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-white">How SolarPal separates weather from soiling</h2>
          <p className="text-gray-400 leading-relaxed text-[15px]">
            The hardest thing about solar monitoring is knowing when a dip in output is just the weather and when it's something you should act on. 
            A cloudy week looks identical to a soiling problem in your inverter data alone.
          </p>
          <p className="text-gray-400 leading-relaxed text-[15px]">
            SolarPal solves this by pulling Solcast irradiance forecasts for your specific location every day. 
            If your actual generation matches what Solcast expected given that day's weather, everything is fine. If your generation is consistently below what clear sky conditions should produce, and that gap is widening, that's when SolarPal steps in.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {[
              {
                label: "Weather adjusted baseline",
                desc: "Solcast provides a daily expected output figure for your roof, angle, and location. SolarPal compares your actual generation against this, not a generic national average.",
              },
              {
                label: "PM10 correlation",
                desc: "When PM10 levels have been elevated in your area for several days and your output gap is growing, SolarPal recognises the pattern as soiling, not cloud cover.",
              },
              {
                label: "Seasonal context",
                desc: "SolarPal knows what time of year it is. A 30% output drop in July in Wellington is normal. The same drop in February is not. It only alerts you when something is genuinely off.",
              },
            ].map((item) => (
              <div key={item.label} className="p-5 rounded-xl border border-white/8 bg-white/[0.03]">
                <Leaf className="w-4 h-4 text-green-400 mb-3" />
                <div className="text-sm font-semibold text-white mb-2">{item.label}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl border border-green-500/15 bg-green-500/[0.06] p-10 text-center">
          <Leaf className="w-8 h-8 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">
            See how your location affects your output
          </h3>
          <p className="text-sm text-gray-500 mb-8 max-w-sm mx-auto leading-relaxed">
            Connect your inverter and SolarPal builds a weather adjusted baseline for your specific roof within 24 hours.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-green-500 text-black text-sm font-semibold hover:bg-green-400 transition-colors"
          >
            Connect my system <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </article>

      {/* RELATED POSTS */}
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