"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import ArchitecturalAccents from "./ArchitecturalAccents";
import ScrambleText from "./ScrambleText";
import StaggerReveal from "./StaggerReveal";
import TechGridBackground from "./TechGridBackground";

const GALLERY_ITEMS = [
  { 
    type: 'text', 
    title: 'Module Integration', 
    desc: 'Deep-level API synchronization with existing corporate stacks. Zero-latency dashboard control.', 
    colSpan: 'col-span-1 md:col-span-2', 
    rowSpan: 'row-span-1',
    technical: "API_V2_SYNC" 
  },
  { 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80', 
    alt: 'High-tech server infrastructure', 
    colSpan: 'col-span-1', 
    rowSpan: 'row-span-2',
    technical: "INFRA_CORE" 
  },
  { 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80', 
    alt: 'Digital network mesh', 
    colSpan: 'col-span-1 md:col-span-2', 
    rowSpan: 'row-span-1',
    technical: "NETWORK_MESH" 
  },
  { 
    type: 'text', 
    title: 'Protocol Banking', 
    desc: 'Multi-jurisdictional account provisioning with automated compliance routing.', 
    colSpan: 'col-span-1', 
    rowSpan: 'row-span-1',
    technical: "FIN_PROTOCOL" 
  },
  { 
    type: 'text', 
    title: 'Ingress Routing', 
    desc: 'Optimized corporate ingress strategies for tax-efficient operational clusters.', 
    colSpan: 'col-span-1', 
    rowSpan: 'row-span-1',
    technical: "ROUTING_V4" 
  },
];

function GalleryItem({ item, index }: { item: any; index: number }) {
  const isImage = item.type === 'image';
  const delay = index * 0.1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative bg-slate-50 border border-slate-100 overflow-hidden group ${item.colSpan} ${item.rowSpan} shadow-sm hover:shadow-2xl transition-all duration-700`}
    >
      <div className="absolute top-6 right-6 z-20 text-monodata text-blue-700/40 group-hover:text-blue-700 transition-colors text-[8px] tracking-[0.4em] font-mono font-bold">
        {item.technical}
      </div>

      {isImage ? (
        <>
          <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110">
            <Image 
              src={item.src} 
              alt={item.alt} 
              fill 
              className="object-cover opacity-60 group-hover:opacity-80 transition-opacity" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
          </div>
          {/* Scan Line Overlay */}
          <div className="absolute inset-x-0 h-[2px] bg-blue-700/40 top-0 group-hover:top-full transition-all duration-[3000ms] linear" />
          </>
      ) : (
        <div className="p-12 h-full flex flex-col justify-between items-start relative z-10 bg-white group-hover:bg-blue-50 transition-colors">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 bg-blue-50 rotate-45 group-hover:rotate-90 group-hover:bg-blue-200 transition-all duration-700" />
            <div className="absolute inset-0 flex items-center justify-center text-blue-700">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-display font-medium text-slate-900 mb-6 uppercase italic group-hover:text-blue-700 transition-colors">
              <ScrambleText text={item.title} duration={800} />
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed font-mono group-hover:text-slate-700 transition-colors">
              {item.desc}
            </p>
          </div>
        </div>
        )}

      {/* Bracket Accents */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-slate-300 transition-colors group-hover:border-blue-700/30" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-slate-300 transition-colors group-hover:border-blue-700/30" />
    </motion.div>
  );
}

export default function GallerySection() {
  return (
    <section className="py-48 px-5 md:px-12 lg:px-20 bg-white relative overflow-hidden">
      <ArchitecturalAccents id="XB_CAPABILITY_MATRIX" coordinates="1.3521° N / 103.8198° E" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="max-w-4xl mb-32">
          <StaggerReveal delay={0.1}>
            <span className="text-blue-700 font-mono tracking-[0.6em] uppercase text-[10px] mb-10 inline-block flex items-center gap-4">
              <span className="w-10 h-[1px] bg-blue-700/30" />
              INFRASTRUCTURE_ASSETS // Global Matrix
            </span>
          </StaggerReveal>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-medium text-slate-900 tracking-tighter leading-none mb-12 uppercase italic">
             <StaggerReveal delay={0.2}>
               <ScrambleText text="SYSTEM" duration={1000} />
             </StaggerReveal>
             <StaggerReveal delay={0.3} className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-slate-400">
               capability_
             </StaggerReveal>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item, index) => (
            <GalleryItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
    );
}
