import React from 'react';
import clsx from 'clsx';
import CinematicBackground from './CinematicBackground';

export default function TechGridBackground({ className, opacity = 0.03, showFlow = false }: { className?: string; opacity?: number; showFlow?: boolean }) {
  return (
    <div 
      className={clsx("absolute inset-0 z-0 pointer-events-none overflow-hidden", className)}
      style={{ opacity }}
    >
      <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="techGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            {/* Inner cross pattern for technical look */}
            <circle cx="0" cy="0" r="1.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#techGrid)" />
      </svg>
      {showFlow && <CinematicBackground />}
      {/* Subtle vignettes to fade out edges */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent" />
    </div>
  );
}
