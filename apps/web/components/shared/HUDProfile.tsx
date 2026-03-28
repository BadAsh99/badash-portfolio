"use client";

import Image from "next/image";

interface HUDProfileProps {
  size?: "sm" | "lg";
}

export function HUDProfile({ size = "lg" }: HUDProfileProps) {
  const dim = size === "lg" ? 480 : 320;
  const containerCls = size === "lg"
    ? "w-[280px] h-[280px] md:w-[380px] md:h-[380px]"
    : "w-[220px] h-[220px]";

  return (
    <div className={`relative ${containerCls} select-none`}>
      {/* Image */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <Image
          src="/ash-profile.jpeg"
          alt="Ash Clements — AI Security"
          width={dim}
          height={dim}
          className="object-cover w-full h-full"
          priority
        />
        {/* Subtle dark vignette bottom */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(4,4,14,0.5) 0%, transparent 50%)" }} />
      </div>

      {/* Corner accent — TL */}
      <svg className="absolute top-0 left-0 w-8 h-8 pointer-events-none" viewBox="0 0 32 32" fill="none">
        <path d="M2 14 L2 2 L14 2" stroke="#0080ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      </svg>

      {/* Corner accent — TR */}
      <svg className="absolute top-0 right-0 w-8 h-8 pointer-events-none" viewBox="0 0 32 32" fill="none">
        <path d="M30 14 L30 2 L18 2" stroke="#0080ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      </svg>

      {/* Corner accent — BL */}
      <svg className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none" viewBox="0 0 32 32" fill="none">
        <path d="M2 18 L2 30 L14 30" stroke="#0080ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      </svg>

      {/* Corner accent — BR */}
      <svg className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none" viewBox="0 0 32 32" fill="none">
        <path d="M30 18 L30 30 L18 30" stroke="#0080ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      </svg>

      {/* Border + glow */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          border: "1px solid rgba(0,128,255,0.25)",
          boxShadow: "0 0 40px rgba(0,128,255,0.12), inset 0 0 40px rgba(0,128,255,0.04)",
        }}
      />
    </div>
  );
}
