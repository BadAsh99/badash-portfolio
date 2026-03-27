"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, Terminal } from "lucide-react";

const links = [
  { href: "/playground", label: "Playground" },
  { href: "/sandbox", label: "Sandbox" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function NavBar() {
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
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Terminal size={18} className="text-terminal-green group-hover:animate-glow-pulse" />
          <span className="font-mono font-bold text-terminal-green text-sm tracking-wider group-hover:text-glow-green transition-all">
            badash<span className="text-terminal-muted">.dev</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "font-mono text-sm transition-colors",
                pathname === l.href
                  ? "text-terminal-green text-glow-green"
                  : "text-terminal-muted hover:text-terminal-green"
              )}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://github.com/BadAsh99"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-terminal-muted hover:text-terminal-green transition-colors"
          >
            GitHub ↗
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-terminal-muted hover:text-terminal-green"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-terminal-surface border-b border-terminal-border px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block font-mono text-sm py-2 transition-colors",
                pathname === l.href ? "text-terminal-green" : "text-terminal-muted"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
