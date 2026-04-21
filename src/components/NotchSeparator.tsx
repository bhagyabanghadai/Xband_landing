import React from "react";
import clsx from "clsx";
import DecorationCross from "./DecorationCross";

interface NotchSeparatorProps {
  fillColorClass?: string;
  className?: string;
}

export default function NotchSeparator({
  fillColorClass = "fill-white",
  className,
}: NotchSeparatorProps) {
  return (
    <div className={clsx("w-full h-12 relative z-10 -mb-12 pointer-events-none", className)}>
      <DecorationCross className="top-0 left-6 opacity-30" />
      <DecorationCross className="top-0 right-6 opacity-30" />
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        className={clsx("w-full h-full", fillColorClass)}
      >
        <path d="M0,0 L640,0 L720,24 L800,0 L1440,0 L1440,48 L0,48 Z" />
      </svg>
    </div>
  );
}
