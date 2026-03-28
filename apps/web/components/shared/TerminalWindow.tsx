"use client";

import { cn } from "@/lib/utils";

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  headerActions?: React.ReactNode;
}

export function TerminalWindow({ title, children, className, headerActions }: TerminalWindowProps) {
  return (
    <div className={cn("terminal-chrome", className)}>
      <div className="terminal-chrome-header overflow-hidden">
        <span className="terminal-dot bg-[#ff5f57]" />
        <span className="terminal-dot bg-[#febc2e]" />
        <span className="terminal-dot bg-[#28c840]" />
        {title && (
          <span className="flex-1 text-center text-xs text-terminal-muted font-mono truncate">
            {title}
          </span>
        )}
        {headerActions && <div className="ml-auto">{headerActions}</div>}
      </div>
      <div className="p-4 overflow-hidden">{children}</div>
    </div>
  );
}
