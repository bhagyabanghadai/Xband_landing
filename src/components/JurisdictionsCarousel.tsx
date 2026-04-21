"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import ArchitecturalAccents from "./ArchitecturalAccents";
import ScrambleText from "./ScrambleText";
import StaggerReveal from "./StaggerReveal";
import TechGridBackground from "./TechGridBackground";

const CARDS = [
  { id: 1, region: "EU_WEST", country: "Estonia", url: "https://images.unsplash.com/photo-1541846430310-48ee732782e4?auto=format&fit=crop&q=80", color: "from-blue-500", stats: ["TAX: 0%", "SET_UP: 4D"] },
  { id: 2, region: "ASIA_SOUTH", country: "Singapore", url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80", color: "from-blue-600", stats: ["TAX: 8%", "SET_UP: 2D"] },
  { id: 3, region: "USA_EAST", country: "Delaware", url: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80", color: "from-indigo-500", stats: ["TAX: VAR", "SET_UP: 1D"] },
  { id: 4, region: "ME_EAST", country: "UAE", url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80", color: "from-cyan-500", stats: ["TAX: 0%", "SET_UP: 5D"] },
  { id: 5, region: "EU_NORTH", country: "UK", url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80", color: "from-blue-700", stats: ["TAX: 19%", "SET_UP: 3D"] },
  { id: 6, region: "ASIA_EAST", country: "Hong Kong", url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80", color: "from-purple-500", stats: ["TAX: 0.5%", "SET_UP: 7D"] },
];

export default function JurisdictionsCarousel() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={targetRef} className="relative h-[350vh] bg-white py-48 overflow-hidden">
      {/* Blueprint Map Backdrop */}
      <div className="absolute inset-0 z-0 opacity-[0.07] grayscale contrast-150">
        <img 
          src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1974" 
          alt="Network Map" 
          className="w-full h-full object-cover"
        />
      </div>

      <ArchitecturalAccents id="XB_GEO_ROUTING_GRID" coordinates="51.50° N / 0.12° W" />
      
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="px-5 md:px-12 lg:px-20 mb-24 max-w-[1400px] mx-auto w-full relative z-10">
          <span className="text-blue-700 font-mono tracking-[0.6em] uppercase text-[10px] mb-10 inline-block flex items-center gap-4">
            <span className="w-10 h-[1px] bg-blue-700/30" />
            GEO_DISTRIBUTION // Universal Access Active
          </span>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-medium text-slate-900 tracking-tighter uppercase leading-none italic">
            NODE <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-slate-400 lowercase">selection_</span>
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-12 px-5 md:px-12 lg:px-20 w-max">
          {CARDS.map((card) => (
            <div 
              key={card.id} 
              className="relative w-[300px] md:w-[450px] h-[500px] md:h-[600px] group flex-shrink-0 border border-slate-100 bg-white/50 backdrop-blur-sm overflow-hidden shadow-sm hover:shadow-2xl hover:border-blue-700/20 transition-all duration-700 hover:-translate-y-2"
            >
              {/* Image Layer with high-fidelity overlay */}
              <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105">
                <Image 
                  src={card.url} 
                  alt={card.country} 
                  fill 
                  className="object-cover opacity-30 group-hover:opacity-40 transition-opacity" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
                <div className="absolute inset-0 bg-blue-700/5 mix-blend-overlay" />
              </div>

              {/* Scanning Line Animation */}
              <div className="absolute inset-x-0 h-[2px] bg-blue-700/50 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-20 top-[-100%] group-hover:top-[100%] transition-all duration-[3000ms] ease-linear repeat-infinite" />

              {/* Top Telemetry */}
              <div className="absolute top-8 right-8 flex flex-col items-end gap-2 text-monodata text-slate-500 opacity-60 group-hover:opacity-100 transition-opacity duration-700">
                {card.stats.map((s, i) => (
                  <span key={i} className="text-[10px] font-mono tracking-[0.2em] uppercase border-r border-blue-600/40 pr-3">
                    {s}
                  </span>
                ))}
              </div>

              {/* Content Holder */}
              <div className="absolute inset-0 p-12 flex flex-col justify-end z-10">
                <div className="mb-6 flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-blue-700/50" />
                  <span className="text-blue-700 font-mono text-[9px] tracking-[0.4em] uppercase">
                    {card.region}
                  </span>
                </div>
                
                <h3 className="text-5xl md:text-7xl font-display font-medium text-slate-900 tracking-tighter uppercase italic group-hover:text-blue-700 transition-colors duration-500">
                  {card.country}
                </h3>
                
                <div className="mt-10 pt-10 border-t border-slate-200 transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-150 flex justify-between items-center text-slate-900">
                  <div className="flex flex-col">
                    <span className="text-[8px] font-mono tracking-[0.3em] uppercase text-slate-500 mb-1">Status</span>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-600">Ready for Access</span>
                  </div>
                  <div className="w-14 h-14 rounded-full border border-slate-300 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white group-hover:border-blue-700 transition-all duration-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </div>
                </div>
              </div>

              {/* Bracket Accents */}
              <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-slate-300 group-hover:border-blue-700/40 transition-colors" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-slate-300 group-hover:border-blue-700/40 transition-colors" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
