"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500); // Small delay at 100%
          return 100;
        }
        // Ease-out curve simulation for the counter
        const increment = Math.max(1, Math.floor((100 - prev) * 0.15));
        return prev + increment;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[1000] bg-slate-900 flex flex-col items-center justify-center pointer-events-auto"
        >
          <div className="flex flex-col items-center gap-8">
             <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.5)]">
                <span className="text-white font-bold font-display text-3xl leading-none">X</span>
              </div>

             <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display font-medium text-white text-8xl tracking-tighter"
                >
                  {progress}%
                </motion.div>
             </div>
          </div>

          <div className="absolute bottom-12 w-64 h-1 bg-slate-800 rounded-full overflow-hidden">
             <motion.div
               className="h-full bg-gradient-to-r from-blue-500 to-violet-500"
               style={{ width: `${progress}%` }}
             />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
