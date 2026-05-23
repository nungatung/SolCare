"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";


const heroImages = [
  { src: "/hero/hero-1.jpg", alt: "Solar panels on an Auckland home" },
  { src: "/hero/hero-2.jpg", alt: "Clean solar panels after a SolCare visit" },
  { src: "/hero/hero-3-.jpg", alt: "SolarPal monitoring dashboard" },
  { src: "/hero/hero-4-.jpg", alt: "Vetted cleaner on the job" },
  { src: "/hero/hero-5.jpg", alt: "Commercial system clean" },
  { src: "/hero/hero-6.jpg", alt: "Cleaner on the roof" }
];

const INTERVAL = 5000;

export default function HeroImageCarousel() {
  const [current, setCurrent] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    timer.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, INTERVAL);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timer.current) clearInterval(timer.current); };
  }, []);

  const goTo = (i: number) => {
    if (timer.current) clearInterval(timer.current);
    setCurrent(i);
    startTimer();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="relative w-full flex flex-col gap-4"
    >
      {/* Main image */}
      <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/8 bg-white/[0.03]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[current].src}
              alt={heroImages[current].alt}
              fill
              className="object-cover"
              priority={current === 0}
            />
            {/* subtle vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Dot indicators — bottom of image */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${i === current
                  ? "w-6 h-1.5 bg-yellow-400"
                  : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-2">
        {heroImages.map((img, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`View image ${i + 1}`}
            className={`relative flex-1 aspect-square rounded-xl overflow-hidden border transition-all duration-300 ${i === current
                ? "border-yellow-400/60 opacity-100"
                : "border-white/8 opacity-40 hover:opacity-70"
              }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
}