"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import ArchitecturalAccents from "./ArchitecturalAccents";
import ScrambleText from "./ScrambleText";
import StaggerReveal from "./StaggerReveal";
import TechGridBackground from "./TechGridBackground";

function StepCard({
  num,
  title,
  desc,
  progress,
  start,
  end,
  technical = "INIT_SEQUENCE"
}: {
  num: string;
  title: string;
  desc: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
  technical?: string;
}) {
  const opacity = useTransform(progress, [start, start + 0.1, end - 0.1, end], [0.1, 1, 1, 0.1]);
  const x = useTransform(progress, [start, start + 0.15], [20, 0]);
  const scale = useTransform(progress, [start, start + 0.1, end - 0.1, end], [0.98, 1, 1, 0.98]);

  return (
    <motion.div
      style={{ opacity, x, scale }}
      className="relative bg-slate-900/60 backdrop-blur-2xl border border-white/5 p-12 lg:p-20 flex flex-col mb-[40vh] last:mb-[10vh] border-l-4 border-l-emerald-500/20 group hover:border-l-emerald-400 transition-all duration-700 shadow-2xl hover:-translate-y-1"
    >
      {/* Top Left Telemetry */}
      <div className="absolute top-10 right-10 text-monodata text-emerald-500/40 text-[9px] tracking-[0.4em] font-mono font-bold group-hover:text-emerald-400 transition-colors">
        SEC_VALIDATION // {technical}
      </div>

      {/* Connection Node */}
      <div className="absolute -left-[44px] top-24 w-5 h-5 bg-slate-50 border-2 border-slate-300 rounded-full hidden lg:flex items-center justify-center group-hover:border-blue-700 group-hover:bg-blue-50 transition-all duration-700">
        <div className="w-1.5 h-1.5 bg-blue-700 rounded-full animate-pulse" />
      </div>

      <div className="flex items-center gap-4 mb-10">
        <span className="text-blue-700 font-mono text-xs font-bold tracking-[0.5em]">{num}</span>
        <span className="w-8 h-[1px] bg-blue-700/30" />
        <span className="text-slate-500 font-mono text-[9px] tracking-widest uppercase opacity-60">Operational Phase</span>
      </div>

      <h3 className="text-4xl md:text-6xl font-display font-medium text-white mb-10 tracking-tighter uppercase italic decoration-emerald-500/10 underline underline-offset-[12px] group-hover:decoration-emerald-500/40 transition-all">
        <ScrambleText text={title} duration={800} />
      </h3>
      
      <p className="text-lg md:text-xl text-slate-400 font-mono uppercase tracking-tight leading-relaxed group-hover:text-slate-200 transition-colors">
        {desc}
      </p>

      {/* Bracket Accents */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-slate-300 group-hover:border-blue-700/30" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-slate-300 group-hover:border-blue-700/30" />
    </motion.div>
  );
}



export default function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="how-it-works" ref={containerRef} className="h-[350vh] relative bg-slate-950 py-32 overflow-hidden mask-curve-top">
      {/* High-Fidelity Vault Backdrop */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
          alt="Security Vault" 
          className="w-full h-full object-cover opacity-10 mix-blend-screen grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />
      </div>

      <ArchitecturalAccents id="XB_SEQUENCE_ENGINE" coordinates="37.77° N / 122.41° W" />
      
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="max-w-[1400px] w-full mx-auto px-5 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 relative">
          
          {/* Left Column - Sticky */}
          <div className="flex flex-col justify-center h-full relative z-10 lg:pr-10">
            <span className="text-blue-700 font-mono tracking-[0.6em] uppercase text-[10px] mb-12 flex items-center gap-4">
              <span className="w-10 h-[1px] bg-blue-700/30" />
              PIPELINE_ORCHESTRATOR // v2.0
            </span>
            <div className="relative">
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-medium text-white tracking-tighter leading-none uppercase italic">
                SECURE
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400 lowercase">ingress_</span>
              </h2>
            </div>
            
            <div className="mt-16 border-l-2 border-slate-300 pl-10 py-2">
              <p className="text-xl text-slate-600 max-w-sm opacity-80 leading-relaxed font-mono uppercase tracking-tighter">
                Standardized jurisdictional onboarding through a unified technical interface. Secure. Peer-vetted. Global.
              </p>
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="relative h-full pt-[15vh]">
            {/* Animated Industrial Progress Line */}
            <div className="absolute left-[7px] top-[5vh] bottom-[5vh] hidden lg:block z-0 pointer-events-none w-[2px] bg-slate-200">
              <motion.div 
                className="w-full bg-gradient-to-b from-blue-700 to-blue-500 h-full origin-top shadow-[0_0_15px_rgba(37,99,235,0.2)]"
                style={{ scaleY: scrollYProgress }}
              />
            </div>

            <div className="lg:pl-20">
              <StepCard 
                num="01" 
                title="Node Discovery" 
                desc="Analyze and select from the mesh of 190+ jurisdictions. Data-driven comparative analysis based on target operational goals."
                technical="SCAN_GLOBAL_GATES"
                progress={scrollYProgress}
                start={0.0}
                end={0.33}
              />
              <StepCard 
                num="02" 
                title="Protocol Ingress" 
                desc="Secure documentation relay via encrypted channels. Automated legal pre-validation ensures zero-delay processing."
                technical="SEC_RELAY_UPLOAD"
                progress={scrollYProgress}
                start={0.33}
                end={0.66}
              />
              <StepCard 
                num="03" 
                title="Active Activation" 
                desc="Full network activation. Access your global toolkit, verified bank accounts, and jurisdictional gateways in 48 hours."
                technical="NET_CORE_UP"
                progress={scrollYProgress}
                start={0.66}
                end={1.0}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
