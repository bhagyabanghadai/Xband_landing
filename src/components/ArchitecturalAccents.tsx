import React from 'react';
import { motion } from 'framer-motion';

export default function ArchitecturalAccents({ 
  id, 
  coordinates = "0.00° / 0.00°" 
}: { 
  id: string; 
  coordinates?: string 
}) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none p-6 md:p-12 overflow-hidden opacity-40">
      {/* Grid Overlay for Accents Area */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03)_0%,transparent_100%)]" />

      {/* Top Left: System ID */}
      <div className="absolute top-6 left-6 md:top-12 md:left-12 flex flex-col gap-1.5 border-l border-blue-700/30 pl-4 py-1">
        <span className="text-[7px] font-mono tracking-[0.4em] uppercase text-slate-500">SYSTEM_NODE_ID</span>
        <span className="text-[10px] font-mono text-blue-700 font-bold tracking-widest uppercase">{id}</span>
        <div className="flex gap-1 mt-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-1.5 h-0.5 bg-blue-700/20" />
          ))}
        </div>
      </div>

      {/* Top Right: Coordinates */}
      <div className="absolute top-6 right-6 md:top-12 md:right-12 flex flex-col items-end gap-1.5 border-r border-blue-700/30 pr-4 py-1">
        <span className="text-[7px] font-mono tracking-[0.4em] uppercase text-slate-500">LOC_COORD_SYSTEM</span>
        <span className="text-[10px] font-mono text-slate-600 tracking-wider">{coordinates}</span>
        <span className="text-[7px] font-mono text-emerald-600/60 uppercase font-bold">Link: [SIGNAL_CLEAN]</span>
      </div>

      {/* Bottom Left: Status */}
      <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 flex items-center gap-4 bg-slate-100 border border-slate-200 px-4 py-2 rounded-sm skew-x-[-12deg]">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-700 animate-pulse shadow-[0_0_8px_rgba(29,78,216,0.4)]" />
        <span className="text-[9px] font-mono text-slate-800 font-bold tracking-[0.2em] uppercase skew-x-[12deg]">PROT_STATUS // ACTIVATED</span>
      </div>

      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-300" />
        <div className="absolute top-0 left-0 w-[1px] h-full bg-slate-300" />
      </div>
      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-[1px] bg-slate-300" />
        <div className="absolute top-0 right-0 w-[1px] h-full bg-slate-300" />
      </div>
      <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-300" />
        <div className="absolute bottom-0 left-0 w-[1px] h-full bg-slate-300" />
      </div>
      <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-slate-300" />
        <div className="absolute bottom-0 right-0 w-[1px] h-full bg-slate-300" />
      </div>
    </div>
  );
}
