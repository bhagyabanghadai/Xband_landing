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
            "bg-[#1C1C1C]/90 backdrop-blur-md border border-white/10 shadow-2xl",
            "px-4 py-3 md:px-5 md:py-3.5"
          )}>
            {/* Logo */}
            <div className="flex items-center gap-2 z-50 shrink-0 mr-8">
              <div className="w-7 h-7 rounded bg-white flex items-center justify-center">
                <span className="text-black font-bold font-display text-lg leading-none tracking-tighter">X</span>
              </div>
              <span className="font-display font-semibold text-lg text-white tracking-tight">XBandGlobal</span>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-6 mr-auto">
              <a href="#" className="flex items-center gap-1.5 text-[13px] font-medium text-gray-300 hover:text-white transition-colors">
                System <ChevronDown size={14} className="text-gray-500" />
              </a>
              <a href="#" className="flex items-center gap-1.5 text-[13px] font-medium text-gray-300 hover:text-white transition-colors">
                Jurisdictions <ChevronDown size={14} className="text-gray-500" />
              </a>
              <a href="#" className="flex items-center gap-1.5 text-[13px] font-medium text-gray-300 hover:text-white transition-colors">
                Insights <ChevronDown size={14} className="text-gray-500" />
              </a>
              <a href="#" className="flex items-center gap-1.5 text-[13px] font-medium text-gray-300 hover:text-white transition-colors">
                Resources <ChevronDown size={14} className="text-gray-500" />
              </a>
              <a href="#" className="text-[13px] font-medium text-gray-300 hover:text-white transition-colors">
                About
              </a>
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              {/* Ask Input */}
              <div className="hidden xl:flex items-center bg-[#2A2A2A] rounded-lg border border-white/10 px-3 py-1.5 h-10 w-64 group hover:border-white/20 transition-colors cursor-text">
                <Sparkles size={14} className="text-[#A3E635] mr-2" />
                <span className="text-[13px] text-gray-400 font-mono flex-1">Ask XBand</span>
                <ArrowRight size={14} className="text-gray-500 group-hover:text-white transition-colors" />
              </div>

              {/* Phone Button */}
              <button className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-[#2A2A2A] text-gray-300 hover:bg-[#333] hover:text-white transition-all">
                <Phone size={16} />
              </button>

              {/* Neon CTA */}
              <button className="px-5 h-10 bg-[#A3E635] hover:bg-[#8fd02b] text-black text-[13px] font-bold tracking-wider rounded-lg transition-all flex items-center justify-center shadow-[0_0_20px_rgba(163,230,53,0.3)]">
                CONTACT
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden relative z-50 p-2 text-white"
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
            className="fixed inset-0 z-40 bg-[#1C1C1C] pt-32 px-6 pb-6 flex flex-col lg:hidden"
          >
            <div className="flex flex-col gap-6 text-2xl font-display font-medium text-white">
              <a href="#" className="border-b border-white/10 pb-4 flex justify-between items-center">System <ChevronDown size={20} /></a>
              <a href="#" className="border-b border-white/10 pb-4 flex justify-between items-center">Jurisdictions <ChevronDown size={20} /></a>
              <a href="#" className="border-b border-white/10 pb-4 flex justify-between items-center">Insights <ChevronDown size={20} /></a>
              <a href="#" className="border-b border-white/10 pb-4 flex justify-between items-center">Resources <ChevronDown size={20} /></a>
              <a href="#" className="border-b border-white/10 pb-4">About</a>
            </div>
            <div className="mt-auto flex flex-col gap-4">
              <button className="w-full py-4 text-center text-lg font-bold text-black bg-[#A3E635] rounded-xl">
                CONTACT
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
