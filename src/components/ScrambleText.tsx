"use client";

import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+-_/*\\[]{}<>";

export default function ScrambleText({
  text,
  className = "",
  duration = 1000,
  delay = 0,
}: {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
}) {
  const [displayText, setDisplayText] = useState(text.replace(/./g, " "));
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    if (!isInView) return;

    let timeoutId: NodeJS.Timeout;
    timeoutId = setTimeout(() => {
      let iteration = 0;
      const length = text.length;
      
      const interval = setInterval(() => {
        setDisplayText((current) => {
          return current
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              if (text[index] === " ") return " ";
              return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
            })
            .join("");
        });

        // Speed of revealing characters
        if (iteration >= length) {
          clearInterval(interval);
        }
        
        iteration += 1 / (duration / 50 / length); // ~50ms per frame
      }, 50);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timeoutId);
  }, [text, duration, delay, isInView]);

  return (
    <motion.span ref={ref} className={className} initial={{ opacity: 0 }} animate={{ opacity: isInView ? 1 : 0 }} transition={{ duration: 0.1 }}>
      {displayText}
    </motion.span>
  );
}
