"use client";

import { motion } from "framer-motion";
import { Search, FileCheck, Building2, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-32 px-6 bg-[#FAFAFA] relative overflow-hidden">

      {/* Abstract Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px] mix-blend-multiply" />
        <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-violet-400/20 rounded-full blur-[120px] mix-blend-multiply" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Section Header */}
        <div className="mb-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm font-semibold text-slate-600 tracking-wide uppercase">Operational Flow</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 max-w-4xl"
          >
            Complexity distilled into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">simplicity.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 max-w-2xl font-medium"
          >
            A perfectly orchestrated workflow designed to eliminate friction from international expansion.
          </motion.p>
        </div>

        {/* Asymmetrical Elite Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">

          {/* Bento Box 1 - Wide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="premium-glass rounded-[2rem] p-10 md:col-span-2 group cursor-pointer flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 group-hover:to-blue-500/20 transition-all duration-700" />

            <div className="relative z-10 flex justify-between items-start">
               <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                 <Search size={24} />
               </div>
               <span className="text-7xl font-display font-bold text-slate-100 group-hover:text-blue-100 transition-colors duration-500 -mt-4 -mr-2">01</span>
            </div>

            <div className="relative z-10 mt-auto w-full md:w-3/4">
               <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Discover & Compare</h3>
               <p className="text-lg text-slate-600 font-medium leading-relaxed">
                 Access a global directory of vetted incorporation experts. Filter by jurisdiction, read verified reviews, and compare pricing transparently.
               </p>
               <div className="mt-8 flex items-center text-blue-600 font-semibold gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                 Explore Directory <ArrowRight size={16} />
               </div>
            </div>
          </motion.div>

          {/* Bento Box 2 - Tall (Implicit via auto-rows, but we span 1 col) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="premium-glass rounded-[2rem] p-10 group cursor-pointer flex flex-col justify-between relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-b from-violet-500/0 to-violet-500/5 group-hover:to-violet-500/20 transition-all duration-700" />

             {/* Decorative abstract UI element */}
             <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-64 h-64 border-[40px] border-violet-50 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-700" />

             <div className="relative z-10 flex justify-between items-start">
               <div className="w-14 h-14 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                 <FileCheck size={24} />
               </div>
               <span className="text-7xl font-display font-bold text-slate-100 group-hover:text-violet-100 transition-colors duration-500 -mt-4 -mr-2">02</span>
            </div>

            <div className="relative z-10 mt-auto">
               <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Streamlined Compliance</h3>
               <p className="text-lg text-slate-600 font-medium leading-relaxed">
                 Dynamic checklists auto-generate based on your specific operational jurisdiction.
               </p>
            </div>
          </motion.div>

          {/* Bento Box 3 - Spans full width bottom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="premium-glass rounded-[2rem] p-10 md:col-span-3 h-auto min-h-[300px] group cursor-pointer flex flex-col md:flex-row items-center gap-12"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 group-hover:to-emerald-500/10 transition-all duration-700" />

            <div className="flex-1 relative z-10 flex flex-col justify-center">
               <div className="flex justify-between items-start mb-8">
                 <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm group-hover:scale-110 transition-transform duration-500">
                   <Building2 size={24} />
                 </div>
                 <span className="text-7xl font-display font-bold text-slate-100 group-hover:text-emerald-100 transition-colors duration-500 -mt-4 -mr-2 md:hidden">03</span>
               </div>
               <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Incorporate & Scale</h3>
               <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
                 Track your application status in real-time. Once established, manage ongoing compliance, tax filings, and local directorships all from a single dashboard.
               </p>
            </div>

            <div className="hidden md:block relative z-10">
               <span className="text-[12rem] leading-none font-display font-bold text-slate-50 group-hover:text-emerald-50 transition-colors duration-700 tracking-tighter">03</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
