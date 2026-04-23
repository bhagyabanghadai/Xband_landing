"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

const features = [
  {
    id: "01",
    title: "Centralized Discovery",
    description: "Search and filter providers by country, service type, price, and rating. Eliminate the fragmentation of searching multiple directories.",
    gradient: "from-blue-500 to-cyan-400",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Structured Information",
    description: "Access transparent country-specific requirement checklists including documents, timelines, and costs. No more hidden fees.",
    gradient: "from-violet-500 to-fuchsia-400",
    image: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Trust & Verification",
    description: "Engage with confidence. Our manual verification of licenses, proof-of-transaction reviews ensure you only work with the best.",
    gradient: "from-emerald-500 to-teal-400",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2000&auto=format&fit=crop"
  }
];

function FeatureBackground({ image, index, progress, total }: { image: string, index: number, progress: MotionValue<number>, total: number }) {
  // Fix for "Offsets must be monotonically non-decreasing" error:
  // Ensure we clamp the animation bounds strictly between 0 and 1.
  const rawStart = (index - 0.5) * (1 / total);
  const rawMid = index * (1 / total);
  const rawEnd = (index + 0.5) * (1 / total);

  // Clamp values to ensure they are within [0, 1] range and strictly increasing
  const start = Math.max(0, rawStart);
  const end = Math.min(1, rawEnd);

  // Create safe stops. If the middle point falls outside [start, end], we adjust it.
  const mid = Math.max(start, Math.min(end, rawMid));

  // Ensure we have 3 distinct points. If the points overlap perfectly,
  // framer-motion might complain, so we ensure tiny deltas if necessary.
  const safeStops = [
    start,
    start === mid ? start + 0.001 : mid,
    mid === end ? end - 0.001 : end
  ].sort((a, b) => a - b); // Guarantee strictly monotonic

  // Crossfade opacity between sections
  const opacity = useTransform(progress, safeStops, [0, 1, 0]);
  const scale = useTransform(progress, [safeStops[0], safeStops[2]], [1.1, 1]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute inset-0 z-0 w-full h-full"
    >
      <Image
        src={image}
        alt="Feature Background"
        fill
        className="object-cover"
      />
      {/* Heavy gradient overlay so text remains readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA] via-[#FAFAFA]/90 to-transparent z-10" />
    </motion.div>
  );
}

function FeatureCardDesktop({ feature, index, progress, total }: { feature: typeof features[0], index: number, progress: MotionValue<number>, total: number }) {
  const start = index * (1 / total);
  const end = Math.min(start + (1 / total), 1);
  const fadeEnd = Math.min(end + 0.1, 1);

  const y = useTransform(progress, [start, end], ["100%", "0%"]);

  // Safely construct stops for opacity
  const safeOpacityStops = index === total - 1
    ? [start, end]
    : [start, end, fadeEnd];

  // Ensure monotonic progression just in case
  for (let i = 1; i < safeOpacityStops.length; i++) {
    if (safeOpacityStops[i] <= safeOpacityStops[i-1]) {
      safeOpacityStops[i] = safeOpacityStops[i-1] + 0.001;
    }
  }

  const opacityValues = index === total - 1 ? [0, 1] : [0, 1, 0];
  const opacity = useTransform(progress, safeOpacityStops, opacityValues);

  return (
    <motion.div
      style={{ y, opacity }}
      className="absolute inset-0 flex items-center justify-center p-8 lg:p-12 z-20"
    >
      <div className="w-full max-w-lg aspect-square p-8 lg:p-12 flex flex-col justify-between bg-white/60 backdrop-blur-3xl border border-white/50 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden group">
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
        <div className="relative z-10">
          <div className="text-mono-telemetry mb-6 text-blue-600 font-bold tracking-widest">Feature {feature.id}</div>
          <h3 className="text-3xl lg:text-5xl font-bold mb-6 text-slate-900 tracking-tight leading-tight">{feature.title}</h3>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            {feature.description}
          </p>
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
            XBandGlobal streamlines the complex process of international incorporation.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          {features.map((feature) => (
             <div key={feature.id} className="relative p-8 flex flex-col justify-between bg-white border border-slate-200 rounded-3xl shadow-lg overflow-hidden">
               <div className="relative z-10">
                 <div className="text-mono-telemetry mb-4 text-blue-600 font-bold">Feature {feature.id}</div>
                 <h3 className="text-2xl font-bold mb-4 text-slate-900">{feature.title}</h3>
                 <p className="text-base text-slate-600 leading-relaxed mb-8">
                   {feature.description}
                 </p>
               </div>
               <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 z-0">
                  <Image src={feature.image} alt="" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent" />
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

        {/* Dynamic Image Backgrounds */}
        {features.map((feature, index) => (
          <FeatureBackground key={`bg-${feature.id}`} image={feature.image} index={index} progress={scrollYProgress} total={features.length} />
        ))}

        {/* Left Side: Sticky Content */}
        <div className="w-[45%] h-full flex flex-col justify-center pl-12 lg:pl-24 pr-12 relative z-20">
          <div className="inline-block mb-8">
            <span className="text-mono-telemetry px-5 py-2.5 bg-white/80 backdrop-blur-md border border-slate-200 text-slate-900 rounded-full font-bold shadow-sm">Platform Capabilities</span>
          </div>
          <h2 className="text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.05] text-slate-900">
            The standard for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">global setup.</span>
          </h2>
          <p className="text-2xl text-slate-600 max-w-lg leading-relaxed font-medium">
            XBandGlobal streamlines the complex process of international incorporation into simple, secure, and verifiable steps.
          </p>
        </div>

        {/* Right Side: Scrolling Cinematic Cards */}
        <div className="w-[55%] h-full relative z-20">
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
