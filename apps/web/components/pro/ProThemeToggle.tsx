"use client";

import { Sun, Moon } from "lucide-react";
import { useProTheme } from "./ProThemeProvider";

export function ProThemeToggle() {
  const { theme, toggle } = useProTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="p-2 rounded-full transition-colors hover:bg-black/5 text-terminal-muted hover:text-white"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
