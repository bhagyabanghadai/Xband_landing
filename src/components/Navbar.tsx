"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = ["protocol", "jurisdictions", "how-it-works"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((o) => {
        if (o) o.observer.unobserve(o.el);
      });
    };
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 100) setActiveSection(""); // clear when at top
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > 50) {
      setScrolled(true);
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    } else {
      setScrolled(false);
      setHidden(false);
    }
  });

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center pointer-events-none">
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-150%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto transition-all duration-700 ease-out w-full font-mono ${
          scrolled
            ? "mt-4 max-w-[90%] md:max-w-4xl glass-pill py-3 px-6 md:px-10 rounded-full"
            : "mt-0 max-w-full bg-transparent py-8 px-5 md:px-12 lg:px-20 border-b border-transparent rounded-none"
        }`}
      >
        <div className="w-full flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-6 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <svg viewBox="0 0 40 40" className="w-full h-full fill-none stroke-blue-700 stroke-[1.5] group-hover:rotate-90 transition-transform duration-700">
              <path d="M4,4 L36,4 L36,36 L4,36 Z" className="opacity-20" />
              <path d="M4,10 L10,4 M30,4 L36,10 M36,30 L30,36 M10,36 L4,30" />
              <path d="M12,12 L28,28 M28,12 L12,28" className="stroke-slate-900 group-hover:stroke-blue-700 transition-colors" />
            </svg>
            <div className="absolute inset-0 bg-blue-700/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-2xl tracking-tighter text-slate-900 leading-none">
              XB_PROTOCOL
            </span>
            <span className="text-[7px] text-blue-700 font-bold tracking-[0.4em] uppercase">Jurisdictional_Gateway</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {["protocol", "jurisdictions", "how-it-works"].map((section) => (
            <Link 
              key={section}
              href={`#${section}`} 
              className={`relative text-[10px] font-mono font-bold tracking-[0.2em] uppercase transition-all px-2 py-1 ${activeSection === section ? "text-blue-700" : "text-slate-600 hover:text-blue-700"}`}
              onClick={() => setActiveSection(section)}
            >
              {section.replace("-", "_")}
              {activeSection === section && (
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-[1px] bg-blue-700 shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                  layoutId="nav-underline"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA & Technical Status */}
        <div className="flex items-center gap-8">
          <div className="hidden xl:flex items-center gap-3 border-l border-slate-300 pl-8 ml-2">
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2">
                <span className="text-[8px] font-mono text-emerald-500 animate-pulse">●</span>
                <span className="text-[9px] font-mono text-slate-500">NET_SIG: STABLE</span>
              </div>
              <span className="text-[7px] font-mono text-blue-700/80">LATENCY: 12.4ms</span>
            </div>
          </div>
          
          <Link
            href="/get-started"
            className="group relative bg-slate-900 border border-slate-800 hover:border-slate-700 text-white px-8 py-3 rounded-sm transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative text-[10px] font-mono font-bold tracking-[0.2em] uppercase">
              Terminal Access
            </span>
          </Link>
        </div>
        </div>
      </motion.header>
    </div>
  );
}
