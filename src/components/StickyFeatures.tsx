"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const features = [
  {
    id: "01",
    title: "Centralized Discovery",
    description: "Search and filter providers by country, service type, price, and rating. Eliminate the fragmentation of searching multiple directories and comparing unverified results.",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    id: "02",
    title: "Structured Information",
    description: "Access transparent country-specific requirement checklists including documents, timelines, and costs. No more hidden fees or unclear regulatory steps.",
    gradient: "from-violet-500 to-fuchsia-400"
  },
  {
    id: "03",
    title: "Trust & Verification",
    description: "Engage with confidence. Our manual verification of licenses, proof-of-transaction reviews, and performance metrics ensure you only work with the best.",
    gradient: "from-emerald-500 to-teal-400"
  }
];

function FeatureCardDesktop({ feature, index, progress, total }: { feature: typeof features[0], index: number, progress: MotionValue<number>, total: number }) {
  const start = index * (1 / total);
  const end = Math.min(start + (1 / total), 1);
  const fadeEnd = Math.min(end + 0.1, 1);

  const y = useTransform(progress, [start, end], ["100%", "0%"]);
  const scale = useTransform(progress, [start, end], [0.8, 1]);
  const opacityValues = index === total - 1 ? [0, 1] : [0, 1, 0];
  const opacityStops = index === total - 1 ? [start, end] : [start, end, fadeEnd];
  const opacity = useTransform(progress, opacityStops, opacityValues);

  return (
    <motion.div
      style={{ y, scale, opacity }}
      className="absolute inset-0 flex items-center justify-center p-8 lg:p-12"
    >
      <div className="w-full max-w-lg aspect-square p-8 lg:p-12 flex flex-col justify-between bg-white border border-slate-200 rounded-[2rem] shadow-2xl relative overflow-hidden group">
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />
        <div className="relative z-10">
          <div className="text-mono-telemetry mb-6 text-blue-600 font-bold">Feature {feature.id}</div>
          <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">{feature.title}</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            {feature.description}
          </p>
        </div>

        <div className="w-full h-40 rounded-2xl overflow-hidden relative bg-slate-50 border border-slate-100 mt-8 z-10 shadow-inner">
           <div className={`absolute inset-0 opacity-20 bg-gradient-to-r ${feature.gradient}`} />
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-20 h-20 rounded-full bg-white border border-slate-100 shadow-xl flex items-center justify-center p-2">
               <div className={`w-full h-full rounded-full bg-gradient-to-r ${feature.gradient} shadow-inner opacity-90`} />
             </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function StickyFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  if (isMobile) {
    return (
      <section ref={containerRef} className="py-24 bg-[#FAFAFA] px-6 border-t border-slate-200">
        <div className="mb-16">
          <span className="text-mono-telemetry block mb-4 text-blue-600">Platform Capabilities</span>
          <h2 className="text-4xl font-bold tracking-tight mb-6 text-slate-900">
            The standard for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">global setup.</span>
          </h2>
          <p className="text-lg text-slate-600">
            XBandGlobal streamlines the complex process of international incorporation into simple, secure, and verifiable steps.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          {features.map((feature) => (
             <div key={feature.id} className="p-8 flex flex-col justify-between bg-white border border-slate-200 rounded-3xl shadow-lg">
               <div>
                 <div className="text-mono-telemetry mb-4 text-blue-600 font-bold">Feature {feature.id}</div>
                 <h3 className="text-2xl font-bold mb-4 text-slate-900">{feature.title}</h3>
                 <p className="text-base text-slate-600 leading-relaxed mb-8">
                   {feature.description}
                 </p>
               </div>
               <div className="w-full h-32 rounded-xl overflow-hidden relative bg-slate-50 border border-slate-100 shadow-inner">
                  <div className={`absolute inset-0 opacity-20 bg-gradient-to-r ${feature.gradient}`} />
               </div>
             </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative bg-[#FAFAFA] border-t border-slate-200" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">

        {/* Left Side: Sticky Content */}
        <div className="w-1/2 h-full flex flex-col justify-center px-12 lg:px-24">
          <div className="inline-block mb-6">
            <span className="text-mono-telemetry px-4 py-2 bg-white border border-slate-200 text-slate-900 rounded-full font-bold shadow-sm">Platform Capabilities</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-slate-900">
            The standard for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">global setup.</span>
          </h2>
          <p className="text-xl lg:text-2xl text-slate-500 max-w-md leading-relaxed">
            XBandGlobal streamlines the complex process of international incorporation into simple, secure, and verifiable steps.
          </p>
        </div>

        {/* Right Side: Scrolling Cards */}
        <div className="w-1/2 h-full relative bg-white border-l border-slate-200 shadow-[-20px_0_40px_-10px_rgba(0,0,0,0.05)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {features.map((feature, index) => (
              <FeatureCardDesktop key={feature.id} feature={feature} index={index} progress={scrollYProgress} total={features.length} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
