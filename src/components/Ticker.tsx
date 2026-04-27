"use client";

import { motion } from "framer-motion";

const jurisdictions = [
  "United States", "Singapore", "United Kingdom", "Estonia", "Dubai",
  "Hong Kong", "Switzerland", "Cayman Islands", "Delaware", "Ireland"
];

export default function Ticker() {
  return (
    <div className="py-16 bg-white border-y border-slate-200 overflow-hidden flex flex-col items-center relative z-20 shadow-sm">
      <span className="text-mono-telemetry mb-10 text-slate-400 font-bold tracking-widest uppercase">Trusted in top jurisdictions</span>

      <div className="relative w-full flex overflow-x-hidden">
        {/* Left/Right Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex whitespace-nowrap gap-16 md:gap-24 px-8 items-center"
        >
          {/* Duplicate array for seamless looping */}
          {[...jurisdictions, ...jurisdictions].map((item, i) => (
            <div key={i} className="flex items-center gap-6 group cursor-default">
              <span className="text-3xl md:text-4xl font-display font-bold text-slate-300 group-hover:text-slate-800 transition-colors duration-500">{item}</span>
              {i % 2 === 0 && <div className="w-2 h-2 rounded-full bg-blue-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
