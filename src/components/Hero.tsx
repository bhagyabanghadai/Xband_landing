"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import NetworkScene from "./NetworkScene";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-center bg-black">
      {/* Background and Scene Wrapper */}
      <div className="absolute inset-0 z-0">
         <NetworkScene />
      </div>

      {/* Hero Typography Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full flex flex-col items-center justify-center pt-32 px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[1400px] mx-auto flex flex-col items-center"
        >
          <h1 className="text-center font-display text-white font-medium leading-[0.95] tracking-[-0.05em] text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[11rem]">
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
