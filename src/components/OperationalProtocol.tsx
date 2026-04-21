"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Globe2, Shield, Zap, LayoutPanelTop, Briefcase } from "lucide-react";
import ArchitecturalAccents from "./ArchitecturalAccents";
import TechGridBackground from "./TechGridBackground";
import ScrambleText from "./ScrambleText";
import StaggerReveal from "./StaggerReveal";

function ProtocolCard({ 
  title, 
  desc, 
  icon: Icon, 
  delay,
  data = ["ST_ACTIVE", "LAT_48MS"]
}: { 
  title: string, 
  desc: string, 
  icon: any, 
  delay: number,
  data?: string[]
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: delay % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: delay % 2 === 0 ? -40 : 40 }}
      transition={{ duration: 1, delay: delay * 0.5, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      style={{ "--mouse-x": `${mousePos.x}px`, "--mouse-y": `${mousePos.y}px` } as React.CSSProperties}
      className="relative bg-slate-900/40 backdrop-blur-xl border border-white/5 p-10 flex flex-col items-start overflow-hidden group h-[400px] cursor-default shadow-2xl hover:border-white/20 transition-all duration-500"
    >
      {/* Dynamic Background Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(37, 99, 235, 0.1), transparent 40%)`
        }}
      />

      {/* Top Telemetry */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-700/20 to-transparent" />
      <div className="absolute top-6 right-8 flex flex-col items-end gap-1">
        {data.map((d, i) => (
          <span key={i} className="text-[10px] font-mono font-bold text-blue-700/40 group-hover:text-blue-700 transition-colors duration-500 tracking-wider tracking-[0.2em]">
            {d}
          </span>
        ))}
      </div>

      {/* Icon Module */}
      <div className="relative w-16 h-16 mb-12">
        <div className="absolute inset-0 bg-blue-50 rotate-45 group-hover:rotate-90 group-hover:bg-blue-100 transition-all duration-700" />
        <div className="absolute inset-0 flex items-center justify-center text-blue-700 transition-colors duration-500">
          <Icon size={32} strokeWidth={1.2} />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full">
        <span className="text-[8px] font-mono tracking-[0.5em] text-blue-700/60 mb-4 inline-block uppercase italic">
          MODULE_INDEX // 0{Math.floor(delay * 10)}
        </span>
        <h3 className="text-3xl font-display font-medium text-white mb-6 tracking-tight uppercase italic underline decoration-blue-500/20 underline-offset-8">
          <ScrambleText text={title} duration={600} />
        </h3>
        <p className="text-slate-400 text-base leading-relaxed max-w-[95%] group-hover:text-slate-200 transition-colors duration-500 font-mono tracking-tight uppercase">
          {desc}
        </p>
      </div>

      {/* Animated Scan Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-700 opacity-0 group-hover:opacity-100 group-hover:animate-scan-x z-20" />
      
      {/* Decorative Brackets */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-slate-300 group-hover:border-blue-700/40 transition-colors" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-slate-300 group-hover:border-blue-700/40 transition-colors" />
    </motion.div>
  );
}



export default function OperationalProtocol() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="protocol" className="min-h-screen relative bg-slate-950 py-32 md:py-48 px-5 md:px-12 lg:px-20 overflow-hidden">
      {/* High-Fidelity OS Backdrop */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519003722824-192d9978e8ee?auto=format&fit=crop&q=80&w=2070" 
          alt="Operating System" 
          className="w-full h-full object-cover opacity-30 grayscale contrast-150"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
      </div>

      {/* Scanning HUD Overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-blue-500/30 animate-scan-y shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-blue-500/10" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-blue-500/10" />
      </div>

      <ArchitecturalAccents id="XB_PROTOCOL_CLUSTER" coordinates="40.71° N / 74.00° W" />
      
      <div className="max-w-[1400px] mx-auto z-10 relative">
        <div ref={ref} className="max-w-4xl mb-24 md:mb-32">
          <StaggerReveal delay={0.1}>
            <span className="text-blue-500 font-mono tracking-[0.6em] uppercase text-[10px] mb-8 inline-block flex items-center gap-4">
              <span className="w-10 h-[1px] bg-blue-500/30" />
              SYSTEM_CONFIGURATION // Standard v2.4a
            </span>
          </StaggerReveal>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white mb-8 tracking-tighter leading-none uppercase italic">
            <StaggerReveal delay={0.2}>
              <ScrambleText text="AUTONOMOUS" duration={800} />
            </StaggerReveal>
            <StaggerReveal delay={0.3} className="mt-4 block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-slate-400">
              execution protocol_
            </StaggerReveal>
          </h2>
          
          <StaggerReveal delay={0.4} className="max-w-2xl border-l-[1px] border-slate-700 pl-8 py-2">
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-mono tracking-tight uppercase">
              The XBand Protocol standardizes cross-border enterprise operations through a unified sovereign data layer, ensuring immutable compliance.
            </p>
          </StaggerReveal>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-slate-200 border border-slate-200">
          <ProtocolCard 
            title="Entity Mesh" 
            desc="Sovereign entity formation across 190+ jurisdictions. Unified legal architecture with native API integration."
            icon={Globe2}
            delay={0.1}
            data={["DEPLOY_TX: 0.1s", "NODES_SYNCED"]}
          />
          <ProtocolCard 
            title="Shield Layer" 
            desc="Continuous automated governance. Real-time compliance monitoring and automated regulatory filings globally."
            icon={Shield}
            delay={0.2}
            data={["SEC_HASH: SHA-512", "AES_ENCRYPTED"]}
          />
          <ProtocolCard 
            title="Vested Network" 
            desc="Elite local execution partners. Vetted on-chain for verification, performance, and cross-market reliability."
            icon={Briefcase}
            delay={0.3}
            data={["TRUST_SCORE: 99.8", "VERIFIED_PARTNER"]}
          />
          <ProtocolCard 
            title="Rapid Ingress" 
            desc="Low-latency market entry. Reduce time-to-operation by 85% compared to traditional jurisdictional setup."
            icon={Zap}
            delay={0.4}
            data={["TIME_OPS: 48H", "BANDWIDTH: ∞"]}
          />
        </div>
      </div>
    </section>
  );
}
