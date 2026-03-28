"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { TerminalBoot, LLMGUARDT2_LINES, CLOUDGUARD_LINES } from "./TerminalBoot";
import { TerminalWindow } from "@/components/shared/TerminalWindow";
import { ArrowRight, Shield, BookOpen } from "lucide-react";

export function HeroSection() {
  const [done1, setDone1] = useState(false);
  const [done2, setDone2] = useState(false);
  const bootDone = done1 && done2;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-14 relative overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute rounded-full animate-float-slow pointer-events-none" style={{ top: "-8rem", left: "-8rem", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(0,102,255,0.35) 0%, transparent 70%)", filter: "blur(80px)", willChange: "transform" }} />
      <div className="absolute animate-float-medium pointer-events-none" style={{ bottom: "-12rem", right: "-6rem", width: "280px", height: "700px", background: "radial-gradient(ellipse at 50% 100%, rgba(180,20,0,0.13) 0%, rgba(160,10,0,0.06) 40%, transparent 70%)", filter: "blur(60px)", willChange: "transform", borderRadius: "50% 50% 30% 30%" }} />
      <div className="absolute rounded-full animate-float-fast pointer-events-none" style={{ top: "35%", right: "22%", width: "320px", height: "320px", background: "radial-gradient(circle, rgba(0,80,255,0.18) 0%, transparent 70%)", filter: "blur(60px)", willChange: "transform" }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#0080ff 1px, transparent 1px), linear-gradient(90deg, #0080ff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Two terminal windows side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TerminalWindow title="ash@badash99:~$ ./llmguardt2 --boot" className="min-w-0">
            <TerminalBoot lines={LLMGUARDT2_LINES} title="llmguardt2 — AI security framework" onComplete={() => setDone1(true)} />
          </TerminalWindow>
          <TerminalWindow title="ash@badash99:~$ ./cloudguard --boot" className="min-w-0">
            <TerminalBoot lines={CLOUDGUARD_LINES} title="cloudguard — cloud security scanner" onComplete={() => setDone2(true)} />
          </TerminalWindow>
        </div>

        <AnimatePresence>
          {bootDone && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center"
            >
              <Link
                href="/playground"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-mono font-bold text-sm rounded hover:bg-blue-500 transition-all group"
              >
                <Shield size={16} />
                Enter Playground
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/blog"
                className="flex items-center gap-2 px-6 py-3 glass-card text-terminal-text font-mono text-sm rounded hover:text-terminal-green transition-all group"
              >
                <BookOpen size={16} />
                BadAshWednesdays
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {bootDone && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
            >
              {[
                { label: "OWASP LLM", value: "Top 10", sub: "Full coverage" },
                { label: "Attack Payloads", value: "35+", sub: "Semantic detection" },
                { label: "Cloud Providers", value: "3", sub: "AWS · Azure · GCP" },
                { label: "Published", value: "Weekly", sub: "BadAshWednesdays" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card rounded p-4">
                  <div className="font-mono text-xl font-bold text-terminal-green">{stat.value}</div>
                  <div className="font-mono text-xs text-terminal-text mt-1">{stat.label}</div>
                  <div className="font-mono text-xs text-terminal-muted mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {bootDone && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5 }}
            className="relative z-10 mt-2 text-center"
          >
            <a
              href="https://ashclements.dev"
              aria-hidden="true"
              tabIndex={-1}
              className="font-mono text-[10px] text-terminal-dim opacity-[0.09] hover:opacity-35 transition-opacity duration-1000 tracking-widest"
            >
              [SYS] ./connect --host 0x4153485f434c454d454e5453 --silent ↵
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {bootDone && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="font-mono text-xs text-terminal-dim">scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-0.5 h-6 bg-terminal-green/40 rounded"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
