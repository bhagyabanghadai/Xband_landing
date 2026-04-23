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

  // Parallax effect for the background image
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Text effects
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[110svh] w-full overflow-hidden bg-black flex flex-col justify-center">

      {/* High-Res Photographic Background with Parallax */}
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-[-5%] w-[110%] h-[110%] z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=3000&auto=format&fit=crop"
          alt="Premium Architecture"
          fill
          className="object-cover opacity-60"
          priority
        />
        {/* Soft vignette gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-transparent opacity-100 mix-blend-normal z-10" />
        <div className="absolute inset-0 bg-[#FAFAFA]/40 backdrop-blur-[2px] z-10" />
      </motion.div>

      {/* 3D Glass Layer - Placed above image to refract it */}
      <div className="absolute inset-0 z-10 pointer-events-auto mix-blend-luminosity">
         <NetworkScene />
      </div>

      {/* Hero Typography Content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-20 w-full flex flex-col items-center justify-center pt-32 px-4 pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[1400px] mx-auto flex flex-col items-center"
        >
          <h1 className="text-center font-display text-[#0A1629] font-medium leading-[0.95] tracking-[-0.05em] text-[4.5rem] sm:text-[6.5rem] md:text-[8.5rem] lg:text-[10.5rem] xl:text-[12rem] drop-shadow-2xl">
            Imagine the world<br />
            as an intelligent bridge<br />
            seamlessly connecting<br />
            business to global markets.
          </h1>
        </motion.div>
      </motion.div>
    </section>
  );
}
