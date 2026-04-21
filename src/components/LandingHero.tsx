"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import clsx from "clsx";

const CinematicBackground = dynamic(() => import("./CinematicBackground"), { ssr: false });
import ArchitecturalAccents from "./ArchitecturalAccents";
import ScrambleText from "./ScrambleText";

function CopyBeat({
  scrollProgress,
  fadeIn,
  peak,
  fadeOut,
  className,
  children,
  isFirst,
}: {
  scrollProgress: MotionValue<number>;
  fadeIn: number;
  peak: number;
  fadeOut: number;
  className?: string;
  isFirst?: boolean;
}) {
  const opacity = useTransform(
    scrollProgress,
    isFirst ? [0, fadeOut - 0.05, fadeOut] : [fadeIn, peak, peak + 0.05, fadeOut],
    isFirst ? [1, 1, 0] : [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollProgress,
    isFirst ? [0, fadeOut] : [fadeIn, peak, fadeOut],
    isFirst ? [0, -30] : [40, 0, -30]
  );
  const blur = useTransform(
    scrollProgress,
    isFirst ? [0, fadeOut - 0.05, fadeOut] : [fadeIn, fadeIn + 0.02, peak],
    isFirst ? [0, 0, 4] : [8, 4, 0]
  );

  return (
    <motion.div
      style={{
        opacity,
        y,
        filter: useTransform(blur, (v) => `blur(${v}px)`),
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}



export default function LandingHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Background radial gradients opacity based on scroll
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.6, 1]);

  return (
    <section ref={containerRef} className="relative h-[400vh] w-full">
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-[100vh] w-full overflow-hidden bg-slate-50 flex items-center justify-center">
        {/* Parallax Image Backdrop */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <img 
            src="/images/hero-backdrop.png" 
            alt="Infrastructure" 
            className="w-full h-full object-cover opacity-20 filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/10 to-slate-50" />
        </motion.div>

        <div className="absolute inset-0 z-[1] pointer-events-none mix-blend-multiply opacity-60">
          <CinematicBackground />
        </div>
        
        {/* Cinematic Lens Overlay */}
        <div className="absolute inset-0 z-[5] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.03)_100%)]" />
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </div>

        <ArchitecturalAccents id="XB_NODE_01_CORE" coordinates="59.43° N / 24.75° E" />

        {/* Technical Wireframe Labels (Terminal Industries style) */}
        <div className="absolute top-12 left-12 z-20 pointer-events-none opacity-40 hidden md:block">
          <p className="font-mono text-[9px] text-blue-700 tracking-widest uppercase">System_State: ACTIVE</p>
          <p className="font-mono text-[9px] text-slate-400 tracking-widest uppercase mt-1">Ref_ID: 9822.04X</p>
        </div>
        <div className="absolute bottom-12 right-12 z-20 pointer-events-none opacity-40 hidden md:block text-right">
          <p className="font-mono text-[9px] text-blue-700 tracking-widest uppercase mb-1">Grid_Lock: ENABLED</p>
          <p className="font-mono text-[9px] text-slate-400 tracking-widest uppercase">X_COORD: 01.32.99</p>
        </div>
        
        {/* Copy Beats Layer */}
        <div className="relative z-10 w-full max-w-7xl px-5 mx-auto h-full">
          {/* BEAT 1: SOVEREIGN */}
          <CopyBeat
            scrollProgress={scrollYProgress}
            fadeIn={0}
            peak={0}
            fadeOut={0.28}
            isFirst={true}
          >
            <span className="text-blue-700 font-mono tracking-[0.5em] uppercase text-[10px] mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-blue-700/40" />
              Infrastructure Protocol // v1.0.4
              <span className="w-8 h-[1px] bg-blue-700/40" />
            </span>
            <h1 className="font-display font-medium text-6xl md:text-8xl lg:text-9xl text-slate-900 tracking-tighter text-center leading-none uppercase italic">
              <ScrambleText text="SOVEREIGN" duration={800} />
            </h1>
            <p className="mt-8 text-lg md:text-xl text-slate-600 font-mono tracking-wide max-w-2xl text-center uppercase opacity-80 decoration-blue-700/30 underline decoration-2 underline-offset-8">
              Digital infrastructure built for the borderless enterprise.
            </p>
          </CopyBeat>

          {/* BEAT 2: GLOBAL NODES */}
          <CopyBeat
            scrollProgress={scrollYProgress}
            fadeIn={0.22}
            peak={0.32}
            fadeOut={0.48}
          >
            <h2 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-slate-900 tracking-tighter text-center uppercase">
              <ScrambleText text="GLOBAL NODES" duration={800} />
            </h2>
            <div className="mt-6 flex flex-col items-center">
              <p className="text-[10px] font-mono tracking-[0.4em] uppercase text-blue-700 mb-2">Network_Reach</p>
              <p className="text-xl md:text-2xl text-slate-600 font-mono tracking-[0.1em] uppercase bg-blue-700/5 border-x border-blue-700/20 px-8 py-2">
                190+ Jurisdictional Endpoints
              </p>
            </div>
          </CopyBeat>

          {/* BEAT 3: VALIDATED partners */}
          <CopyBeat
            scrollProgress={scrollYProgress}
            fadeIn={0.42}
            peak={0.52}
            fadeOut={0.68}
          >
            <h2 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-slate-900 tracking-tighter text-center uppercase">
              <ScrambleText text="VERIFIED VEST" duration={800} />
            </h2>
            <div className="mt-6 flex flex-col items-center">
              <p className="text-[10px] font-mono tracking-[0.4em] uppercase text-emerald-600 mb-2">Auth_Status: Cleared</p>
              <p className="text-xl md:text-2xl text-slate-600 font-mono tracking-[0.1em] uppercase bg-emerald-500/5 border-x border-emerald-500/20 px-8 py-2">
                Validated Execution Partners
              </p>
            </div>
          </CopyBeat>

          {/* BEAT 4: VELOCITY */}
          <CopyBeat
            scrollProgress={scrollYProgress}
            fadeIn={0.62}
            peak={0.72}
            fadeOut={0.88}
          >
            <h2 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-slate-900 tracking-tighter text-center uppercase">
              <ScrambleText text="RAPID VELOCITY" duration={800} />
            </h2>
            <div className="mt-6 flex flex-col items-center">
              <p className="text-[10px] font-mono tracking-[0.4em] uppercase text-blue-700 mb-2">Deployment_Cycle</p>
              <p className="text-xl md:text-2xl text-slate-600 font-mono tracking-[0.1em] uppercase bg-blue-700/5 border-x border-blue-700/20 px-8 py-2">
                48-Hour Network Response
              </p>
            </div>
          </CopyBeat>

          {/* BEAT 5: FINAL CTA */}
          <CopyBeat
            scrollProgress={scrollYProgress}
            fadeIn={0.82}
            peak={0.9}
            fadeOut={0.99}
            className="pointer-events-auto"
          >
            <div className="mb-4 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-blue-700/30" />
              <span className="text-[10px] font-mono text-blue-700 tracking-[0.3em] uppercase">Ready_to_scale</span>
              <span className="w-12 h-[1px] bg-blue-700/30" />
            </div>
            <h2 className="font-display font-bold text-6xl md:text-8xl text-slate-900 tracking-tighter text-center mb-4 uppercase italic">
              <ScrambleText text="OPERATE NOW" duration={1000} />
            </h2>
            <p className="text-3xl md:text-4xl text-blue-600/80 font-serif italic mb-12 tracking-tight">
              borderless execution systems.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <Link
                href="/get-started"
                className="group relative bg-blue-700 text-white px-12 py-6 rounded-sm text-[11px] font-mono font-bold tracking-[0.3em] shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all duration-500 hover:scale-[1.05] uppercase overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                Launch Protocol
              </Link>
              <Link
                href="/demo"
                className="text-[11px] font-mono font-bold text-slate-500 hover:text-slate-900 px-10 py-5 transition-all duration-500 uppercase tracking-[0.3em] border-b border-slate-300 hover:border-blue-700"
              >
                Access Terminal
              </Link>
            </div>
          </CopyBeat>
        </div>

        {/* Stats Bar (Bottom Fixed) */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0.1, 0.15, 0.9, 0.95], [0, 1, 1, 0]),
            y: useTransform(scrollYProgress, [0.1, 0.15], [20, 0]),
          }}
          className="absolute bottom-8 inset-x-0 z-20"
        >
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 lg:px-20">
            <div className="glass-card-light rounded-2xl py-6 px-8 flex justify-between items-center max-w-4xl mx-auto divide-x divide-border-subtle">
              <div className="flex flex-col items-center flex-1 text-center px-4">
                <span className="font-mono text-3xl font-bold text-blue-700">190+</span>
                <span className="text-[10px] font-display uppercase tracking-widest text-slate-500 mt-1">Countries</span>
              </div>
              <div className="flex flex-col items-center flex-1 text-center px-4">
                <span className="font-mono text-3xl font-bold text-blue-700">50+</span>
                <span className="text-[10px] font-display uppercase tracking-widest text-slate-500 mt-1">Vendors</span>
              </div>
              <div className="flex flex-col items-center flex-1 text-center px-4">
                <span className="font-mono text-3xl font-bold text-blue-700">120+</span>
                <span className="text-[10px] font-display uppercase tracking-widest text-slate-500 mt-1">Clients</span>
              </div>
              <div className="flex flex-col items-center flex-1 text-center px-4">
                <span className="font-mono text-3xl font-bold text-blue-700">1hr</span>
                <span className="text-[10px] font-display uppercase tracking-widest text-slate-500 mt-1">Response</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
