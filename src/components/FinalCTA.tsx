"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import ArchitecturalAccents from "./ArchitecturalAccents";
import ScrambleText from "./ScrambleText";
import StaggerReveal from "./StaggerReveal";
import TechGridBackground from "./TechGridBackground";

function TickerItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-6 mx-6">
      <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-slate-400">{text}</span>
      <div className="w-1 h-1 rounded-full bg-blue-700/20" />
    </div>
  );
}

function MagneticButton() {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const handlePointerLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      animate={{ x: position.x * 0.2, y: position.y * 0.2 }}
      transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.1 }}
      className="relative px-20 py-10 rounded-none bg-blue-700 text-white text-[10px] font-mono font-bold tracking-[0.5em] z-10 transition-all duration-700 hover:bg-blue-800 shadow-xl hover:shadow-2xl uppercase border border-blue-600 group"
    >
      <motion.span 
        animate={{ x: position.x * 0.1, y: position.y * 0.1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.1 }}
        className="relative z-20 flex items-center gap-4"
      >
        Execute_Scale_Sequence
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform duration-500"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
      </motion.span>
      {/* Button Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white opacity-40" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white opacity-40" />
    </motion.button>
  );
}

export default function FinalCTA() {
  return (
    <section className="relative min-h-screen bg-slate-950 flex flex-col items-center justify-center overflow-hidden py-48">
      {/* System Shutdown Backdrop */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
          alt="System Core" 
          className="w-full h-full object-cover opacity-10 mix-blend-screen scale-110"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]" />
      </div>

      <ArchitecturalAccents id="XB_TERMINAL_V3" coordinates="22.31° N / 114.16° E" />
       <div className="relative z-10 text-center max-w-6xl px-5">
        <StaggerReveal delay={0.1}>
          <span className="text-blue-400 font-mono tracking-[0.6em] uppercase text-[10px] mb-14 inline-block flex items-center justify-center gap-4">
            <span className="w-10 h-[1px] bg-blue-400/30" />
            FINAL_TERMINAL_STATE // Protocol Ready
            <span className="w-10 h-[1px] bg-blue-400/30" />
          </span>
        </StaggerReveal>
        
        <h2 className="text-7xl md:text-9xl lg:text-[12rem] font-display font-medium text-white tracking-tighter leading-none mb-24 uppercase italic">
          <StaggerReveal delay={0.2}>
            <ScrambleText text="READY TO" duration={1000} />
          </StaggerReveal>
          <StaggerReveal delay={0.3} className="block mt-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-slate-400 lowercase">
            activate?_
          </StaggerReveal>
        </h2>
        
        <div className="flex justify-center mt-12 mb-24">
           <MagneticButton />
        </div>

        <StaggerReveal delay={0.4} className="mt-20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" />
              <span className="text-slate-400 font-mono text-[9px] tracking-widest uppercase">System Online</span>
            </div>
            <p className="text-slate-500 font-mono text-[9px] tracking-[0.3em] uppercase underline decoration-slate-700 underline-offset-4">
              SEC_LEVEL: ALPHA // CLOUD_NODES: 194_STABLE
            </p>
            <p className="text-slate-500 font-mono text-[9px] tracking-[0.3em] uppercase underline decoration-slate-700 underline-offset-4">
              NET_LATENCY: 14MS // PROTOCOL: ACTIVATED
            </p>
          </div>
        </StaggerReveal>
        </div>

      {/* Industrial Footer Ticker */}
      <div className="absolute bottom-0 w-full overflow-hidden flex whitespace-nowrap border-t border-white/5 bg-slate-900/50 py-6 grayscale opacity-40">
        <motion.div 
           className="flex items-center"
           animate={{ x: [0, -1500] }}
           transition={{ ease: "linear", duration: 35, repeat: Infinity }}
        >
           {[...Array(30)].map((_, i) => (
             <TickerItem key={i} text={`XB_PROTOCOL_CLUSTER_${2048 + i}`} />
           ))}
        </motion.div>
      </div>
      </section>
  );
}
