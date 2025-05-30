"use client";
import type React from "react";
import { Boxes } from "../ui/background-boxes";

export function BackgroundBoxesDemo({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      {children}
    </div>
  );
}
