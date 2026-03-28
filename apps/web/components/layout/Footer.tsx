import Link from "next/link";
import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-terminal-border mt-32 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-terminal-green" />
          <span className="font-mono text-sm text-terminal-muted">
            <span className="text-terminal-green">Ash</span>
            <span className="text-red-500 opacity-75"> C̷̡̛l̸̨͝ȩ̵͘m̷͝͠ȩ̴̛n̵͘͝t̷̡͘s̸͠</span>
            {" — "}
            <span className="opacity-50 tracking-tight">░▒ 0x[̴R̵̢̈́Ě̸D̴̡̾Ā̷C̷̈T̵͒Ě̴D̷̕]̵ ▒░</span>
          </span>
        </div>
        <div className="flex items-center gap-6 font-mono text-xs text-terminal-dim">
          <a href="https://github.com/BadAsh99" target="_blank" rel="noopener noreferrer" className="hover:text-terminal-green transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/ash-clements" target="_blank" rel="noopener noreferrer" className="hover:text-terminal-green transition-colors">LinkedIn</a>
          <Link href="/blog" className="hover:text-terminal-green transition-colors">Blog</Link>
        </div>
        <span className="font-mono text-xs text-terminal-dim">
          {new Date().getFullYear()} — Built with Next.js + Railway
        </span>
      </div>
    </footer>
  );
}
