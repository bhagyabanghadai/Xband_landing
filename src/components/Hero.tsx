"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import NetworkScene from "./NetworkScene";
import { useRef } from "react";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] w-full overflow-hidden bg-[#FAFAFA] flex items-center justify-center pt-24 pb-12">
      {/* 3D Background */}
      <NetworkScene />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-6 flex flex-col items-center mt-12 md:mt-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-blue-200 text-blue-700 text-sm font-semibold mb-8 backdrop-blur-md shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Global Incorporation Verified
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-fluid-h1 tracking-tight mb-6 max-w-5xl mx-auto text-center"
        >
          Reinventing global <br className="hidden md:block" />
          <span className="text-gradient">incorporation.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-10 font-medium text-center"
        >
          A specialized B2B marketplace connecting businesses with vetted, verified service providers across multiple jurisdictions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full md:w-auto"
        >
          <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/20 w-full sm:w-auto flex items-center justify-center gap-2 group">
            Find Providers
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-sm w-full sm:w-auto">
            Become a Partner
          </button>
        </motion.div>

        {/* Trust/Metric Badges floating over scene */}
        <div className="hidden md:flex gap-6 mt-20 relative w-full max-w-4xl justify-between px-10 pointer-events-none">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.8, duration: 1 }}
             className="premium-card p-4 flex items-center gap-4 bg-white/80"
           >
             <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center"><Globe size={20}/></div>
             <div>
               <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Jurisdictions</div>
               <div className="font-display font-bold text-xl text-slate-900">50+ Active</div>
             </div>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.9, duration: 1 }}
             className="premium-card p-4 flex items-center gap-4 bg-white/80 translate-y-12"
           >
             <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><Shield size={20}/></div>
             <div>
               <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Verified Partners</div>
               <div className="font-display font-bold text-xl text-slate-900">100% Vetted</div>
             </div>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 1.0, duration: 1 }}
             className="premium-card p-4 flex items-center gap-4 bg-white/80"
           >
             <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center"><Zap size={20}/></div>
             <div>
               <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Setup Time</div>
               <div className="font-display font-bold text-xl text-slate-900">3x Faster</div>
             </div>
           </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-mono-telemetry text-slate-400 hidden sm:block">Scroll to Explore</span>
        <div className="w-[1px] h-8 sm:h-12 bg-slate-200 overflow-hidden">
          <div className="w-full h-full bg-blue-500 animate-scan-y" />
        </div>
      </motion.div>
    </section>
  );
}
