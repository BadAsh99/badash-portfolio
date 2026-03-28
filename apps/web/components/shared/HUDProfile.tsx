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
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <Image
          src="/ash-profile.jpeg"
          alt="Ash Clements — AI Security"
          width={dim}
          height={dim}
          className="object-cover w-full h-full"
          priority
        />
        {/* Vignette */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(4,4,14,0.55) 100%)" }} />
        {/* Blue tint */}
        <div className="absolute inset-0" style={{ background: "rgba(0,80,200,0.07)" }} />
      </div>

      {/* Corner bracket — TL */}
      <svg className="absolute top-0 left-0 w-12 h-12 pointer-events-none" viewBox="0 0 48 48" fill="none">
        <path d="M4 22 L4 4 L22 4" stroke="#0080ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {/* Corner bracket — TR */}
      <svg className="absolute top-0 right-0 w-12 h-12 pointer-events-none" viewBox="0 0 48 48" fill="none">
        <path d="M44 22 L44 4 L26 4" stroke="#0080ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {/* Corner bracket — BL */}
      <svg className="absolute bottom-0 left-0 w-12 h-12 pointer-events-none" viewBox="0 0 48 48" fill="none">
        <path d="M4 26 L4 44 L22 44" stroke="#0080ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {/* Corner bracket — BR */}
      <svg className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none" viewBox="0 0 48 48" fill="none">
        <path d="M44 26 L44 44 L26 44" stroke="#0080ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {/* Scan line */}
      <div
        className="absolute left-3 right-3 h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0,128,255,0.85), transparent)",
          animation: "scanLine 3s ease-in-out infinite",
          top: "50%",
        }}
      />

      {/* Top label */}
      <div className="absolute top-2 left-0 right-0 flex justify-center pointer-events-none">
        <span className="font-mono text-[9px] tracking-[0.25em] px-2 py-0.5 rounded" style={{ color: "rgba(0,180,255,0.9)", background: "rgba(4,4,14,0.7)" }}>
          IDENT_VERIFIED
        </span>
      </div>

      {/* Bottom data strip */}
      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between pointer-events-none">
        <div className="font-mono leading-tight" style={{ fontSize: "9px", color: "rgba(0,150,255,0.75)" }}>
          <div>SIG: PCNSE</div>
          <div>CLR: TOP</div>
        </div>
        <div className="font-mono leading-tight text-right" style={{ fontSize: "9px", color: "rgba(0,150,255,0.75)" }}>
          <div>AI_SEC</div>
          <div>SASE</div>
        </div>
      </div>

      {/* Left tick marks */}
      <div className="absolute left-1.5 top-1/4 bottom-1/4 flex flex-col justify-between pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-2 h-px" style={{ background: "rgba(0,128,255,0.4)" }} />
        ))}
      </div>

      {/* Right tick marks */}
      <div className="absolute right-1.5 top-1/4 bottom-1/4 flex flex-col justify-between pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-2 h-px" style={{ background: "rgba(0,128,255,0.4)" }} />
        ))}
      </div>

      {/* Border glow */}
      <div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          border: "1px solid rgba(0,128,255,0.28)",
          animation: "hudPulse 4s ease-in-out infinite",
        }}
      />
    </div>
  );
}
