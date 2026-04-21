"use client";

import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PACKET_COLORS = {
  foreground: "#2563EB", // blue-600 (sharper)
  midground: "#3B82F6", // blue-500
  background: "#94A3B8", // slate-400
};

const GlowFilter = () => (
  <defs>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2.5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feColorMatrix type="matrix" values="0 0 0 0 0.15   0 0 0 0 0.4   0 0 0 0 0.9  0 0 0 1 0" />
      <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
);

const AmbientGlowLayer = () => {
  const lines = useMemo(() => {
    const l = [];
    for (let i = 0; i < 8; i++) {
      l.push({
        id: i,
        pos: 120 + i * 160,
        isHorizontal: i % 2 === 0,
        delay: i * 0.8
      });
    }
    return l;
  }, []);

  return (
    <g opacity="0.05">
      {lines.map((l) => (
        <motion.line
          key={l.id}
          x1={l.isHorizontal ? 0 : l.pos}
          y1={l.isHorizontal ? l.pos : 0}
          x2={l.isHorizontal ? 1400 : l.pos}
          y2={l.isHorizontal ? l.pos : 1400}
          stroke={PACKET_COLORS.midground}
          strokeWidth="1"
          animate={{ opacity: [0.3, 1, 0.3], strokeWidth: [1, 2, 1] }}
          transition={{ duration: 4, delay: l.delay, repeat: Infinity }}
        />
      ))}
    </g>
  );
};

const PacketLayer = ({ 
  count, 
  color, 
  blur, 
  speedMultiplier, 
  opacity,
  strokeWidth = 1.5
}: { 
  count: number; 
  color: string; 
  blur: number; 
  speedMultiplier: number;
  opacity: number;
  strokeWidth?: number;
}) => {
  const packets = useMemo(() => {
    const p = [];
    const gridSize = 40;
    const viewSize = 1400;

    for (let i = 0; i < count; i++) {
      const isHorizontal = Math.random() > 0.5;
      const coord = Math.floor(Math.random() * (viewSize / gridSize)) * gridSize;
      const start = -300;
      const end = viewSize + 300;
      
      const path = isHorizontal 
        ? `M ${start} ${coord} L ${end} ${coord}`
        : `M ${coord} ${start} L ${coord} ${end}`;

      p.push({
        id: i,
        path,
        delay: Math.random() * 10,
        duration: (3 + Math.random() * 7) / speedMultiplier,
        length: 200 + Math.random() * 400 // Massive trails to fill space
      });
    }
    return p;
  }, [count, speedMultiplier]);

  return (
    <g style={{ opacity, filter: blur > 0 ? `blur(${blur}px)` : 'none' }}>
      {packets.map((p) => (
        <React.Fragment key={p.id}>
          <motion.path
            d={p.path}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={`${p.length} 2000`}
            initial={{ strokeDashoffset: p.length + 2000 }}
            animate={{ strokeDashoffset: -2000 }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear"
            }}
            opacity={0.5}
            filter="url(#glow)"
          />
          <motion.circle
            r={strokeWidth * 1.5}
            fill={color}
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              offsetPath: `path('${p.path}')`,
              offsetRotate: "0deg",
            }}
            filter="url(#glow)"
          />
        </React.Fragment>
      ))}
    </g>
  );
};

export default function CinematicBackground() {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-slate-50">
      {/* Base Grid - slightly more visible for technical weight */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Scanline Sweep */}
      <motion.div
        className="absolute inset-0 z-10 w-full h-[2px] bg-blue-500/5 blur-[2px]"
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <motion.div 
        style={{ y: parallaxY }}
        className="absolute inset-0 h-[130%]"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1400 1400"
          preserveAspectRatio="xMidYMin slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <GlowFilter />
          <AmbientGlowLayer />
          
          {/* High-Density Layers */}
          <PacketLayer 
            count={50} 
            color={PACKET_COLORS.background} 
            blur={5} 
            speedMultiplier={0.4} 
            opacity={0.3} 
            strokeWidth={1}
          />
          
          <PacketLayer 
            count={70} 
            color={PACKET_COLORS.midground} 
            blur={1} 
            speedMultiplier={0.8} 
            opacity={0.5} 
            strokeWidth={1.5}
          />
          
          <PacketLayer 
            count={40} 
            color={PACKET_COLORS.foreground} 
            blur={0} 
            speedMultiplier={1.5} 
            opacity={0.9} 
            strokeWidth={2.5}
          />

          {/* Hub Nodes - Static pulsing anchors with soft glows */}
          {[...Array(16)].map((_, i) => (
            <motion.circle
              key={`hub-${i}`}
              cx={140 + (i % 4) * 360}
              cy={140 + Math.floor(i / 4) * 360}
              r="3"
              fill={PACKET_COLORS.foreground}
              filter="url(#softGlow)"
              initial={{ opacity: 0.1 }}
              animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.2, 1] }}
              transition={{
                duration: 5,
                delay: i * 0.4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Atmospheric finishers */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-transparent to-slate-50/90 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(248,250,252,0.6)_100%)]" />
    </div>
  );
}
