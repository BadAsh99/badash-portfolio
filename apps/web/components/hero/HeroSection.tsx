"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { TerminalBoot } from "./TerminalBoot";
import { TerminalWindow } from "@/components/shared/TerminalWindow";
import { ArrowRight, Shield, BookOpen } from "lucide-react";

export function HeroSection() {
  const [bootDone, setBootDone] = useState(false);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-14 relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <TerminalWindow title="ash@badash99-lab:~$ boot" className="w-full">
          <TerminalBoot onComplete={() => setBootDone(true)} />
        </TerminalWindow>

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
                className="flex items-center gap-2 px-6 py-3 bg-terminal-green text-terminal-bg font-mono font-bold text-sm rounded hover:bg-terminal-green/90 transition-all shadow-glow-green group"
              >
                <Shield size={16} />
                Enter Playground
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/blog"
                className="flex items-center gap-2 px-6 py-3 border border-terminal-border text-terminal-text font-mono text-sm rounded hover:border-terminal-green hover:text-terminal-green transition-all group"
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
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
            >
              {[
                { label: "OWASP LLM", value: "Top 10", sub: "Full coverage" },
                { label: "Attack Payloads", value: "35+", sub: "Semantic detection" },
                { label: "Cloud Providers", value: "3", sub: "AWS · Azure · GCP" },
                { label: "Published", value: "Weekly", sub: "BadAshWednesdays" },
              ].map((stat) => (
                <div key={stat.label} className="border border-terminal-border rounded p-4 bg-terminal-surface/50">
                  <div className="font-mono text-xl font-bold text-terminal-green">{stat.value}</div>
                  <div className="font-mono text-xs text-terminal-text mt-1">{stat.label}</div>
                  <div className="font-mono text-xs text-terminal-muted mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
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
