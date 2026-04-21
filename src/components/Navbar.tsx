"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6",
          scrolled ? "py-4" : "py-6"
        )}
      >
        <div className="container mx-auto max-w-7xl">
          <div className={clsx(
            "flex items-center justify-between px-6 py-4 rounded-full transition-all duration-300",
            scrolled ? "bg-white/80 backdrop-blur-xl shadow-premium border border-white/40" : "bg-transparent"
          )}>
            {/* Logo */}
            <div className="flex items-center gap-2 z-50 relative">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-white font-bold font-display text-xl leading-none">X</span>
              </div>
              <span className="font-display font-bold text-xl text-slate-900 tracking-tight">XBandGlobal</span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              <a href="#" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Platform</a>
              <a href="#" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Jurisdictions</a>
              <a href="#" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Resources</a>
              <a href="#" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">About</a>
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <button className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
                Sign In
              </button>
              <button className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg">
                Get Started
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden relative z-50 p-2 text-slate-900"
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
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl pt-32 px-6 pb-6 flex flex-col md:hidden"
          >
            <div className="flex flex-col gap-6 text-2xl font-display font-bold text-slate-900">
              <a href="#" className="border-b border-slate-100 pb-4">Platform</a>
              <a href="#" className="border-b border-slate-100 pb-4">Jurisdictions</a>
              <a href="#" className="border-b border-slate-100 pb-4">Resources</a>
              <a href="#" className="border-b border-slate-100 pb-4">About</a>
            </div>
            <div className="mt-auto flex flex-col gap-4">
              <button className="w-full py-4 text-center text-lg font-bold text-slate-600 border border-slate-200 rounded-full">
                Sign In
              </button>
              <button className="w-full py-4 text-center text-lg font-bold bg-slate-900 text-white rounded-full shadow-lg">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
