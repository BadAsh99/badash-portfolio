"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function CopyButton({ text, className }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className={cn(
        "p-1.5 rounded text-terminal-muted hover:text-terminal-green transition-colors",
        className
      )}
      title="Copy to clipboard"
    >
      {copied ? <Check size={14} className="text-terminal-green" /> : <Copy size={14} />}
    </button>
  );
}
