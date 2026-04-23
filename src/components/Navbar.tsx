"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Menu, X, ChevronDown, Phone, ArrowRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-6 transition-all duration-300"
      >
        <div className="container mx-auto max-w-7xl flex justify-center">
          <div className={clsx(
            "flex items-center justify-between w-full rounded-[20px] transition-all duration-500 overflow-hidden",
            "bg-white/80 backdrop-blur-xl border border-slate-200 shadow-premium",
            "px-4 py-3 md:px-5 md:py-3.5"
          )}>
            {/* Logo */}
            <div className="flex items-center gap-2 z-50 shrink-0 mr-8">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-white font-bold font-display text-xl leading-none tracking-tighter">X</span>
              </div>
              <span className="font-display font-bold text-xl text-slate-900 tracking-tight">XBandGlobal</span>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-6 mr-auto">
              <a href="#" className="flex items-center gap-1.5 text-[13px] font-semibold text-slate-600 hover:text-slate-900 transition-colors">
                System <ChevronDown size={14} className="text-slate-400" />
              </a>
              <a href="#" className="flex items-center gap-1.5 text-[13px] font-semibold text-slate-600 hover:text-slate-900 transition-colors">
                Jurisdictions <ChevronDown size={14} className="text-slate-400" />
              </a>
              <a href="#" className="flex items-center gap-1.5 text-[13px] font-semibold text-slate-600 hover:text-slate-900 transition-colors">
                Insights <ChevronDown size={14} className="text-slate-400" />
              </a>
              <a href="#" className="flex items-center gap-1.5 text-[13px] font-semibold text-slate-600 hover:text-slate-900 transition-colors">
                Resources <ChevronDown size={14} className="text-slate-400" />
              </a>
              <a href="#" className="text-[13px] font-semibold text-slate-600 hover:text-slate-900 transition-colors">
                About
              </a>
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              {/* Ask Input */}
              <div className="hidden xl:flex items-center bg-slate-50/80 rounded-lg border border-slate-200 px-3 py-1.5 h-10 w-64 group hover:border-slate-300 hover:bg-white transition-colors cursor-text shadow-inner">
                <Sparkles size={14} className="text-blue-500 mr-2" />
                <span className="text-[13px] text-slate-400 font-mono flex-1">Ask XBand</span>
                <ArrowRight size={14} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
              </div>

              {/* Phone Button */}
              <button className="flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all shadow-sm">
                <Phone size={16} />
              </button>

              {/* Vibrant CTA */}
              <button className="px-5 h-10 bg-slate-900 hover:bg-slate-800 text-white text-[13px] font-bold tracking-wider rounded-lg transition-all flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                CONTACT
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden relative z-50 p-2 text-slate-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl pt-32 px-6 pb-6 flex flex-col lg:hidden"
          >
            <div className="flex flex-col gap-6 text-2xl font-display font-bold text-slate-900">
              <a href="#" className="border-b border-slate-100 pb-4 flex justify-between items-center">System <ChevronDown size={20} /></a>
              <a href="#" className="border-b border-slate-100 pb-4 flex justify-between items-center">Jurisdictions <ChevronDown size={20} /></a>
              <a href="#" className="border-b border-slate-100 pb-4 flex justify-between items-center">Insights <ChevronDown size={20} /></a>
              <a href="#" className="border-b border-slate-100 pb-4 flex justify-between items-center">Resources <ChevronDown size={20} /></a>
              <a href="#" className="border-b border-slate-100 pb-4">About</a>
            </div>
            <div className="mt-auto flex flex-col gap-4">
              <button className="w-full py-4 text-center text-lg font-bold text-white bg-slate-900 rounded-xl shadow-xl">
                CONTACT
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
