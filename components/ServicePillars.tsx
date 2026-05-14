import { motion } from "framer-motion";
import { Sun, Wrench, BarChart3, ShieldCheck, Mail } from "lucide-react";
import Link from "next/link"; 

const services = [
  {
    title: "Professional Cleaning",
    desc: "AI scheduled removal of NZ salt, pollen, and debris to maximize yield.",
    icon: <Sun className="w-6 h-6 text-yellow-500" />,
  },
  {
    title: "Preventive Maintenance",
    desc: "Regular asset health checks to prevent hardware failure and downtime.",
    icon: <Wrench className="w-6 h-6 text-green-500" />,
  },
  {
    title: "Intelligence & Monitoring",
    desc: "Real time data analysis comparing your output to local weather baselines.",
    icon: <BarChart3 className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "ROI Optimization",
    desc: "Detailed reporting on energy recovered and actual financial performance.",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
  },
];

export default function ServicePillars() {
  return (
    <section className="px-6 py-24 max-w-7xl mx-auto border-y border-white/5">
      {/* 4-Column Service Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center text-center group"
          >
            {/* Icon Container with SolCare glow effect */}
            <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/8 flex items-center justify-center mb-6 group-hover:border-green-500/30 group-hover:bg-green-500/5 transition-all duration-300">
              {service.icon}
            </div>
            
            <h3 className="text-white font-bold text-lg mb-3 tracking-tight">
              {service.title}
            </h3>
            
            <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Floating CTA Pill (SolCare version of your reference) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/8 hover:border-green-500/40 hover:bg-white/[0.05] transition-all group"
        >
          <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
            <Mail className="w-4 h-4 text-green-500" />
          </div>
          <span className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors">
            Let's work together for the environment <strong className="text-white ml-1">Get in touch</strong>
          </span>
        </Link>
      </motion.div>
    </section>
  );
}