"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/pro/experience", label: "Experience" },
  { href: "/pro/projects", label: "Projects" },
  { href: "/pro/blog", label: "Signal / Noise" },
  { href: "/pro/contact", label: "Contact" },
];

export function ProNavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-terminal-bg/95 backdrop-blur-md border-b border-terminal-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/pro" className="flex flex-col group">
          <span className="font-sans font-semibold text-terminal-text text-base tracking-tight group-hover:text-white transition-colors">
            Ash Clements
          </span>
          <span className="font-sans text-xs text-terminal-muted tracking-wide">
            Palo Alto Networks · PCNSE
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "font-sans text-sm transition-colors pb-0.5",
                pathname === l.href
                  ? "text-white border-b border-[#0080ff]"
                  : "text-terminal-muted hover:text-terminal-text"
              )}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/ash-clements"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm px-4 py-1.5 rounded border border-[#0080ff]/40 text-[#0080ff] hover:bg-[#0080ff]/10 transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>

        <button
          className="md:hidden text-terminal-muted hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-terminal-surface border-b border-terminal-border px-6 pb-4 space-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block font-sans text-sm py-2 transition-colors",
                pathname === l.href ? "text-white" : "text-terminal-muted"
              )}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/ash-clements"
            target="_blank"
            rel="noopener noreferrer"
            className="block font-sans text-sm py-2 text-[#0080ff]"
          >
            LinkedIn ↗
          </a>
        </div>
      )}
    </nav>
  );
}
