"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import NetworkScene from "./NetworkScene";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Deep parallax effect for the background image
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Cinematic typography effects
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={containerRef} className="relative min-h-[110svh] w-full overflow-hidden bg-white flex flex-col justify-center">

      {/* High-Res Photographic Background with Parallax */}
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-[-5%] w-[110%] h-[110%] z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=3000&auto=format&fit=crop"
          alt="Premium Architecture"
          fill
          className="object-cover opacity-50 grayscale contrast-125"
          priority
        />
        {/* Soft vignette gradients for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/60 to-transparent opacity-100 mix-blend-normal z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/40 via-transparent to-transparent opacity-100 mix-blend-normal z-10" />
      </motion.div>

      {/* 3D Glass Layer - Refracts the background */}
      <div className="absolute inset-0 z-10 pointer-events-auto mix-blend-luminosity">
         <NetworkScene />
      </div>

      {/* Extreme Editorial Typography Content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity, scale: textScale }}
        className="relative z-20 w-full flex flex-col items-center justify-center pt-32 px-4 pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[1600px] mx-auto flex flex-col items-center"
        >
          <h1 className="text-center font-display text-slate-900 font-medium leading-[0.9] tracking-[-0.06em] text-[5rem] sm:text-[7.5rem] md:text-[10rem] lg:text-[12rem] xl:text-[14rem] drop-shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
            Imagine the world<br />
            as an intelligent bridge<br />
            seamlessly connecting<br />
            business to global markets.
          </h1>
        </motion.div>
      </motion.div>

      {/* Cinematic scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 pointer-events-none"
      >
        <span className="text-mono-telemetry text-slate-500 tracking-[0.3em] text-[0.65rem]">SCROLL TO EXPLORE</span>
        <div className="w-[1px] h-16 bg-slate-300 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-blue-500"
            animate={{ top: ["-50%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
