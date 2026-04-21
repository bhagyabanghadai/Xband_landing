import React from 'react';
import clsx from 'clsx';

export default function DecorationCross({ className }: { className?: string }) {
  return (
    <div className={clsx("absolute pointer-events-none hidden md:block", className)} aria-hidden="true">
      <div className="absolute w-[11px] h-[1px] bg-slate-300 top-[-1px] left-[-6px]" />
      <div className="absolute h-[11px] w-[1px] bg-slate-300 left-[-1px] top-[-6px]" />
    </div>
  );
}
