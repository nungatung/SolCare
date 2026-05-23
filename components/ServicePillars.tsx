"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const services = [
  {
    title: "Professional Cleaning",
    desc: "AI scheduled removal of NZ salt, pollen, and debris to maximise yield.",
    icon: "sunshine.png",
    color: "#F5A623",
    glow: "rgba(245,166,35,0.12)",
    border: "rgba(245,166,35,0.22)",
    hoverBorder: "rgba(245,166,35,0.4)",
  },
  {
    title: "Preventive Maintenance",
    desc: "Regular asset health checks to prevent hardware failure and downtime.",
    icon: "maintenance.png",
    color: "#22C38E",
    glow: "rgba(34,195,142,0.1)",
    border: "rgba(34,195,142,0.2)",
    hoverBorder: "rgba(34,195,142,0.38)",
  },
  {
    title: "Intelligence & Monitoring",
    desc: "Real time data analysis comparing your output to local weather baselines.",
    icon: "graph.png",
    color: "#60A5FA",
    glow: "rgba(96,165,250,0.1)",
    border: "rgba(96,165,250,0.2)",
    hoverBorder: "rgba(96,165,250,0.38)",
  },
  {
    title: "ROI Optimisation",
    desc: "Detailed reporting on energy recovered and actual financial performance.",
    icon: "shield.png",
    color: "#4FDBA8",
    glow: "rgba(79,219,168,0.1)",
    border: "rgba(79,219,168,0.2)",
    hoverBorder: "rgba(79,219,168,0.38)",
  },
];

export default function ServicePillars() {
  return (
    <section
      className="px-6 py-20 max-w-7xl mx-auto"
      style={{ borderTop: "1px solid rgba(255,250,235,0.06)", borderBottom: "1px solid rgba(255,250,235,0.06)" }}
    >
      {/* 4-column service grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.55, ease: EASE }}
            className="group flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 cursor-default"
            style={{
              background: "rgba(255,250,235,0.02)",
              border: `1px solid rgba(255,250,235,0.07)`,
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.background = service.glow;
              (e.currentTarget as HTMLDivElement).style.borderColor = service.hoverBorder;
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.background = "rgba(255,250,235,0.02)";
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,250,235,0.07)";
            }}
          >
            {/* Icon Box */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 relative overflow-hidden"
            >
              <Image
                src={`/blog-icons/${service.icon}`}
                alt={service.title}
                width={35}
                height={35}
                className="object-contain"
              />
            </div>

            {/* Divider */}
            <div
              className="w-8 h-px mb-5"
              style={{ background: `linear-gradient(90deg, transparent, ${service.color}60, transparent)` }}
            />

            <h3
              className="font-semibold text-base mb-2.5 tracking-[-0.01em]"
              style={{ color: "#F5F0E8" }}
            >
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#6B6860" }}>
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA pill — mailto link */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 8 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: EASE }}
        className="flex justify-center"
      >
        <a
          href="mailto:solcare.info@gmail.com"
          className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full transition-all duration-300"
          style={{
            background: "rgba(34,195,142,0.06)",
            border: "1px solid rgba(34,195,142,0.18)",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.background = "rgba(34,195,142,0.1)";
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(34,195,142,0.35)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.background = "rgba(34,195,142,0.06)",
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(34,195,142,0.18)"
          }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 relative overflow-hidden"
            
          >
            <Image
              src="/blog-icons/mail-icon.png"
              alt="Mail"
              width={35}
              height={35}
              className="object-contain"
            />
          </div>
          <span className="text-sm" style={{ color: "#A09D96" }}>
            Let's work together for the environment{" "}
            <strong
              className="font-semibold transition-colors duration-200"
              style={{ color: "#22C38E" }}
            >
              Get in touch
            </strong>
          </span>
        </a>
      </motion.div>
    </section>
  );
}