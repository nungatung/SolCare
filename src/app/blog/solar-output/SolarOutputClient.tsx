"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";


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
];

export default function BlogPostNZWeather() {
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
            {["Weather", "Performance"].map((tag) => (
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
            How NZ's weather patterns{" "}
            <span style={{ color: "#22C38E" }} className="italic">affect your solar output</span>
          </h1>
          <p className="text-lg leading-[1.75] mb-8" style={{ color: "#A09D96" }}>
            Auckland winters, Wellington winds, Christchurch frosts. Where you live in New Zealand shapes your solar system's behaviour more than most installers tell you.
          </p>

          <div className="flex items-center gap-2 text-xs pb-6" style={{ color: "#6B6860", borderBottom: "1px solid rgba(255,250,235,0.08)" }}>
            <span>SolCare Editorial</span>
            <span className="w-px h-3" style={{ background: "rgba(255,250,235,0.1)" }} />
            <span>April 2026</span>
            <span className="w-px h-3" style={{ background: "rgba(255,250,235,0.1)" }} />
            <Clock className="w-3.5 h-3.5" />
            <span>4 min read</span>
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
            40%
          </div>
          <div>
            <div className="font-semibold text-base sm:text-lg mb-2" style={{ color: "#F5F0E8" }}>
              Difference in annual solar generation between NZ's sunniest and least sunny regions
            </div>
            <div className="text-sm leading-relaxed" style={{ color: "#A09D96" }}>
              A 5kW system in Nelson generates significantly more over a year than the same system in Invercargill, yet both owners pay similar upfront costs. Understanding your local conditions is the first step to knowing what your system should actually be doing.
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
          <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.01em]" style={{ color: "#F5F0E8" }}>
            Solar irradiance across New Zealand
          </h2>
          <p className="text-sm sm:text-base leading-[1.75]" style={{ color: "#A09D96" }}>
            Solar irradiance, the amount of solar energy hitting a surface per square metre is the primary driver of how much your panels generate and the primary factor used to design a solar system. 
            In New Zealand, this varies considerably by region and season.
          </p>

          {/* IRRADIANCE TABLE */}
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,250,235,0.08)" }}>
            <div className="px-5 py-3.5 border-b flex items-center gap-2" style={{ background: "rgba(255,250,235,0.03)", borderColor: "rgba(255,250,235,0.08)" }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#22C38E" }} />
              <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#6B6860" }}>
                Approximate annual sunshine hours by region
              </span>
            </div>

            {[
              { region: "Nelson / Marlborough", hours: "2,400–2,500 hrs", output: "Excellent", badge: "green" },
              { region: "Hawke's Bay / Gisborne", hours: "2,200–2,400 hrs", output: "Very good", badge: "green" },
              { region: "Auckland", hours: "2,000–2,100 hrs", output: "Good", badge: "yellow" },
              { region: "Wellington", hours: "1,900–2,050 hrs", output: "Good", badge: "yellow" },
              { region: "Christchurch", hours: "1,950–2,100 hrs", output: "Good", badge: "yellow" },
              { region: "Dunedin / Southland", hours: "1,600–1,800 hrs", output: "Moderate", badge: "orange" },
            ].map((row) => (
              <div 
                key={row.region} 
                className="flex items-center justify-between px-5 py-4 border-b last:border-b-0 gap-3"
                style={{ borderColor: "rgba(255,250,235,0.06)" }}
              >
                <span className="text-xs sm:text-sm flex-1 min-w-0" style={{ color: "#F5F0E8" }}>{row.region}</span>
                
                <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                  <span className="font-mono text-xs sm:text-[13px]" style={{ color: "#A09D96" }}>{row.hours}</span>
                  
                  <span 
                    className="text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full border shrink-0 whitespace-nowrap"
                    style={
                      row.badge === "green"
                        ? { background: "rgba(34,195,142,0.08)", borderColor: "rgba(34,195,142,0.2)", color: "#22C38E" }
                        : row.badge === "yellow"
                        ? { background: "rgba(245,166,35,0.08)", borderColor: "rgba(245,166,35,0.2)", color: "#F5A623" }
                        : { background: "rgba(239,78,78,0.08)", borderColor: "rgba(239,78,78,0.2)", color: "#EF4E4E" }
                    }
                  >
                    {row.output}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm sm:text-base leading-[1.75]" style={{ color: "#A09D96" }}>
            These figures represent averages across the year. The seasonal swing matters just as much; an Auckland system might generate three times more output in January than in June. Sola accounts for this by comparing your actual generation against a localized daily irradiance model rather than a general regional average.
          </p>
        </div>

        {/* SECTION — REGIONAL WEATHER CARDS */}
        <div className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.01em]" style={{ color: "#F5F0E8" }}>
            What each region's weather actually means for your panels
          </h2>
          <p className="text-sm sm:text-base leading-[1.75]" style={{ color: "#A09D96" }}>
            Irradiance is just one part of the picture. Humidity, wind, salt, frost, and cloud patterns all influence both how much your system generates and how quickly it gets dirty.
          </p>

          <div className="flex flex-col gap-4">
            {[
              {
                icon: "rain.png", 
                region: "Auckland",
                headline: "High humidity, persistent overcast periods",
                paras: [
                  "Auckland's subtropical climate means humid summers and overcast winters. Output in June and July can drop significantly compared to summer peaks, this is normal and expected. What's less expected is how quickly pollen and salt air from the Waitematā coat panels in spring.",
                  "Auckland homeowners tend to need 3-4 cleans per year. PM10 levels in urbanised areas like South Auckland are consistently higher than the national average, which means soiling accumulates faster than in regional centres.",
                ],
              },
              {
                icon: "air.png", 
                region: "Wellington",
                headline: "Wind is a double edged sword",
                paras: [
                  "Wellington's notorious winds have a useful side effect: they can self clean panels to some degree. However, that same wind carries salt from Cook Strait and fine particulates from the urban basin. Salt deposits are particularly damaging because they attract further contaminants and reduce output progressively.",
                  "Wellington systems often show a characteristic output pattern: relatively stable through the wind-swept winter, then sharp soiling spikes in summer when winds ease and particulates settle. Sola's PM10 monitoring catches this pattern early.",
                ],
              },
              {
                icon: "temperature.png", 
                region: "Christchurch",
                headline: "Frost and winter fog affect more than you'd think",
                paras: [
                  "Canterbury's inland climate brings cold winters with frost and, in some areas, persistent morning fog that reduces effective irradiance hours. Frost on panels is less harmful than it sounds since it melts and generally rinses residue away. The bigger issue is the extended cloud cover and shorter winter days that reduce generation significantly from May to August.",
                  "Canterbury also experiences nor'west winds carrying dust from inland plains, which is a significant contributor to panel soiling in spring and early summer. Output often drops notably after a dry nor'west spell.",
                ],
              },
              {
                icon: "sunshine.png", 
                region: "Nelson / Marlborough",
                headline: "NZ's solar sweet spot",
                paras: [
                  "Nelson and Blenheim consistently record the highest sunshine hours in New Zealand. Low rainfall in summer, high irradiance, and relatively clean inland air mean panels in this region perform at or near their rated capacity for more of the year than anywhere else in the country.",
                  "That said, Marlborough's vineyard country means high pollen loads in spring. Systems near vineyards or orchards should plan for at least one additional clean during the October–November pollen season.",
                ],
              },
            ].map((item) => (
              <div 
                key={item.region} 
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
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 relative overflow-hidden" >
                    <Image
                      src={`/blog-icons/${item.icon}`}
                      alt={item.region}
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "#F5F0E8" }}>{item.region}</div>
                    <div className="text-xs" style={{ color: "#6B6860" }}>{item.headline}</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {item.paras.map((p, i) => (
                    <p key={i} className="text-xs sm:text-sm leading-relaxed" style={{ color: "#A09D96" }}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PULL QUOTE */}
        <div className="pl-6 py-1 border-l-2" style={{ borderColor: "#22C38E" }}>
          <p className="text-lg sm:text-xl font-medium leading-relaxed italic" style={{ color: "#F5F0E8" }}>
            "Your installer quoted you an annual output estimate. What they probably didn't mention is that estimate assumes average conditions, and NZ's conditions are anything but average, depending on where you live."
          </p>
          <cite className="block mt-3 text-xs not-italic tracking-wide uppercase" style={{ color: "#6B6860" }}>
            — SolCare Editorial
          </cite>
        </div>

        {/* SECTION — SEASONAL PATTERNS */}
        <div className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.01em]" style={{ color: "#F5F0E8" }}>
            The seasonal output pattern every NZ homeowner should know
          </h2>
          <p className="text-sm sm:text-base leading-[1.75]" style={{ color: "#A09D96" }}>
            Regardless of where you live in NZ, solar systems follow a predictable seasonal curve. Understanding this helps you distinguish between normal seasonal dips and genuine underperformance.
          </p>

          {/* SEASONAL CURVE TABLE */}
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,250,235,0.08)", background: "rgba(255,250,235,0.01)" }}>
            <div className="hidden md:grid md:grid-cols-4 border-b" style={{ background: "rgba(255,250,235,0.03)", borderColor: "rgba(255,250,235,0.08)" }}>
              {["Season", "Typical output", "Main factor", "Watch for"].map((h) => (
                <div key={h} className="px-4 py-3 text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#6B6860" }}>
                  {h}
                </div>
              ))}
            </div>

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
              <div 
                key={row.season} 
                className="flex flex-col p-5 md:p-0 md:grid md:grid-cols-4 border-b last:border-b-0 transition-colors" 
                style={{ borderColor: "rgba(255,250,235,0.06)" }}
              >
                <div className="md:px-4 md:py-4 text-sm font-semibold md:font-normal mb-2 md:mb-0 flex items-baseline gap-1.5" style={{ color: "#F5F0E8" }}>
                  {row.season} <span className="text-xs font-normal" style={{ color: "#6B6860" }}>{row.dates}</span>
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
                    {row.output}
                  </span>
                </div>

                <div className="md:px-4 md:py-4 text-xs leading-relaxed mb-2 md:mb-0" style={{ color: "#A09D96" }}>
                  <span className="md:hidden font-medium mr-1" style={{ color: "#3D3D38" }}>Factor:</span>
                  {row.factor}
                </div>

                <div className="md:px-4 md:py-4 text-xs leading-relaxed italic md:not-italic" style={{ color: "#6B6860" }}>
                  <span className="md:hidden not-italic font-medium mr-1" style={{ color: "#3D3D38" }}>Watch:</span>
                  {row.watch}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION — HOW SOLARPAL HANDLES IT */}
        <div className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.01em]" style={{ color: "#F5F0E8" }}>
            How Sola separates weather from soiling
          </h2>
          <p className="text-sm sm:text-base leading-[1.75]" style={{ color: "#A09D96" }}>
            The hardest thing about solar monitoring is knowing when a dip in output is just the weather and when it's something you should act on. A cloudy week looks identical to a soiling problem in your inverter data alone.
          </p>
          <p className="text-sm sm:text-base leading-[1.75]" style={{ color: "#A09D96" }}>
            Sola solves this by cross referencing live local models every day. If your actual generation matches what environmental factors forecast given that day's weather, everything is fine. If your generation is consistently below what clear sky conditions should produce, and that gap is widening, that's when Sola steps in.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {[
              {
                icon: "leaf.png", 
                label: "Weather adjusted baseline",
                desc: "Sola creates a custom baseline for your roof geometry and location. Actual generation is measured against live cloud factors, not fixed regional averages.",
              },
              {
                icon: "leaf.png", 
                label: "PM10 correlation",
                desc: "When particulate counts stay high for several days while an output gap grows, the software identifies the drop as physical dirt, not regular weather shifts.",
              },
              {
                icon: "leaf.png", 
                label: "Seasonal context",
                desc: "The tracking curves match seasonal trends. A deep output drop during July in Wellington is regular winter behavior; that same percentage drop in February raises a flag.",
              },
            ].map((item) => (
              <div 
                key={item.label} 
                className="p-5 rounded-xl" 
                style={{ border: "1px solid rgba(255,250,235,0.07)", background: "rgba(255,250,235,0.02)" }}
              >
                <div className="w-5 h-5 mb-3 relative overflow-hidden">
                  <Image
                    src={`/blog-icons/${item.icon}`}
                    alt={item.label}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
                <div className="text-sm font-semibold mb-2" style={{ color: "#F5F0E8" }}>{item.label}</div>
                <div className="text-xs leading-relaxed" style={{ color: "#6B6860" }}>{item.desc}</div>
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
            See how your location affects your output
          </h3>
          <p className="text-xs sm:text-sm mb-6 max-w-sm mx-auto leading-relaxed" style={{ color: "#A09D96" }}>
            Connect your inverter and Sola builds a weather adjusted baseline for your specific roof within 24 hours.
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