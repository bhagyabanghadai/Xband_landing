"use client";

import { motion } from "framer-motion";
import { Search, BarChart2, MessageSquare, ShieldCheck, ArrowRight, CheckCircle2, Building, FileText, Globe } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 transform skew-x-12 translate-x-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-mono-telemetry mb-4 block text-blue-600">The Process</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Global expansion, <br className="hidden md:block"/>
            <span className="text-gradient">simplified.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
            From discovering requirements to executing your setup, we handle the friction so you can focus on growth.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {/* Card 1: Large Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 premium-card p-8 md:p-10 flex flex-col justify-between group bg-white border border-slate-200"
          >
            <div>
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-blue-100">
                <Search size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">1. Search & Discover</h3>
              <p className="text-slate-500 text-lg max-w-md">
                Select your target country or browse requirements. Instantly access verified providers and transparent pricing.
              </p>
            </div>

            {/* Custom Micro-UI Illustration */}
            <div className="mt-10 h-64 rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden relative shadow-inner p-6">
              {/* Search Bar UI */}
              <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md border border-slate-100 flex items-center p-3 mb-6 relative z-10 transition-transform group-hover:scale-105 duration-300">
                <Search size={20} className="text-slate-400 mr-3" />
                <span className="text-slate-400 font-medium text-sm">Search jurisdictions (e.g., Singapore, Delaware)...</span>
                <div className="ml-auto flex gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-bold">Tech</span>
                    <span className="px-3 py-1 bg-violet-50 text-violet-700 rounded-md text-xs font-bold">SaaS</span>
                </div>
              </div>

              {/* Map/Nodes Abstract */}
              <div className="absolute inset-0 top-20 flex justify-center items-center opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                 <div className="relative w-full h-full max-w-md">
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50 Q 200 100, 300 50" stroke="#CBD5E1" strokeWidth="2" fill="none" strokeDasharray="4 4" className="animate-pulse" />
                      <path d="M100 50 Q 150 150, 200 200" stroke="#CBD5E1" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                    </svg>
                    <div className="absolute top-10 left-20 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                    <div className="absolute top-10 right-20 w-3 h-3 bg-violet-500 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
                    <div className="absolute bottom-10 left-1/2 w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)] transform -translate-x-1/2" />
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Small Right Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="premium-card p-8 flex flex-col justify-between bg-white border border-slate-200 group"
          >
            <div>
              <div className="w-12 h-12 bg-violet-50 text-violet-600 rounded-xl flex items-center justify-center mb-6 border border-violet-100">
                <BarChart2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Compare</h3>
              <p className="text-slate-500">
                Review verified providers side-by-side. Compare ratings, pricing, and service levels.
              </p>
            </div>
            {/* Custom UI: Comparison Table Abstract */}
            <div className="mt-8 bg-slate-50 rounded-xl p-4 border border-slate-100 transform group-hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-2">
                    <div className="w-1/3 h-2 bg-slate-200 rounded-full" />
                    <div className="w-1/4 h-2 bg-slate-200 rounded-full" />
                    <div className="w-1/4 h-2 bg-slate-200 rounded-full" />
                </div>
                <div className="flex items-center justify-between py-2">
                    <div className="w-1/3 h-2 bg-slate-300 rounded-full" />
                    <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center"><CheckCircle2 size={10} className="text-emerald-500"/></div>
                    <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center"><CheckCircle2 size={10} className="text-emerald-500"/></div>
                </div>
                <div className="flex items-center justify-between py-2">
                    <div className="w-1/2 h-2 bg-slate-300 rounded-full" />
                    <div className="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center"><div className="w-2 h-0.5 bg-slate-400 rounded-full" /></div>
                    <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center"><CheckCircle2 size={10} className="text-emerald-500"/></div>
                </div>
            </div>
          </motion.div>

          {/* Card 3: Small Right Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="premium-card p-8 flex flex-col justify-between bg-white border border-slate-200 group"
          >
            <div>
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 border border-emerald-100">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Contact</h3>
              <p className="text-slate-500">
                Purchase credits and send direct inquiries to chosen experts instantly.
              </p>
            </div>
             {/* Custom UI: Messaging Abstract */}
             <div className="mt-8 space-y-3">
              <div className="bg-slate-100 rounded-2xl rounded-tl-sm p-4 w-[85%] transform group-hover:translate-x-2 transition-transform duration-300">
                <div className="w-3/4 h-2 bg-slate-300 rounded-full mb-2" />
                <div className="w-1/2 h-2 bg-slate-300 rounded-full" />
              </div>
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl rounded-tr-sm p-4 w-[85%] ml-auto transform group-hover:-translate-x-2 transition-transform duration-300">
                <div className="w-full h-2 bg-emerald-300 rounded-full mb-2" />
                <div className="w-2/3 h-2 bg-emerald-300 rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Card 4: Full Width Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-3 premium-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-slate-900 text-white overflow-hidden relative"
          >
            {/* Background Gradient Effect */}
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-violet-500/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex-1 text-center md:text-left relative z-10">
              <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 backdrop-blur-md border border-white/10">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-3xl font-bold mb-4">4. Engage Securely</h3>
              <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto md:mx-0">
                Providers respond within 48 hours. Manage the entire process through our secure platform and leave verified reviews upon completion.
              </p>
              <button className="flex items-center gap-2 text-white font-bold mx-auto md:mx-0 group px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-all border border-white/10">
                Start your journey <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="w-full md:w-5/12 h-64 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center relative backdrop-blur-sm z-10 p-8 shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]" />

                {/* Abstract UI: Secure Transaction */}
                <div className="w-full space-y-4 relative z-10">
                  <div className="bg-white/10 border border-white/20 rounded-xl p-4 flex items-center gap-4 backdrop-blur-md">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <FileText size={18} className="text-emerald-400"/>
                    </div>
                    <div>
                        <div className="text-sm font-bold text-white mb-1">Company Incorporation docs</div>
                        <div className="text-xs text-slate-400">Verified & Signed</div>
                    </div>
                    <CheckCircle2 size={20} className="text-emerald-400 ml-auto" />
                  </div>

                  <div className="bg-white/10 border border-white/20 rounded-xl p-4 flex items-center gap-4 backdrop-blur-md">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Building size={18} className="text-blue-400"/>
                    </div>
                    <div>
                        <div className="text-sm font-bold text-white mb-1">Bank Account Setup</div>
                        <div className="text-xs text-slate-400">In Progress...</div>
                    </div>
                    <div className="w-5 h-5 rounded-full border-2 border-blue-400 border-t-transparent animate-spin ml-auto" />
                  </div>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
