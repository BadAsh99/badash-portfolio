import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        primary: { DEFAULT: "var(--primary)", foreground: "var(--primary-foreground)" },
        secondary: { DEFAULT: "var(--secondary)", foreground: "var(--secondary-foreground)" },
        muted: { DEFAULT: "var(--muted)", foreground: "var(--muted-foreground)" },
        accent: { DEFAULT: "var(--accent)", foreground: "var(--accent-foreground)" },
        destructive: { DEFAULT: "var(--destructive)" },
        card: { DEFAULT: "var(--card)", foreground: "var(--card-foreground)" },
        terminal: {
          bg: "#0a0a0a",
          surface: "#111111",
          border: "#1f1f1f",
          green: "#00ff41",
          "green-dim": "#00cc33",
          cyan: "#00d4ff",
          orange: "#ff6b35",
          red: "#ff3333",
          yellow: "#ffd700",
          dim: "#4a4a4a",
          text: "#e0e0e0",
          muted: "#888888",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "Cascadia Code", "Consolas", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "cursor-blink": "blink 1s step-end infinite",
        "glow-pulse": "glow 2s ease-in-out infinite alternate",
        "scanline": "scanline 8s linear infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.4s ease-out",
        "matrix-fall": "matrixFall 3s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        glow: {
          from: { textShadow: "0 0 5px #00ff41, 0 0 10px #00ff41" },
          to: { textShadow: "0 0 10px #00ff41, 0 0 25px #00ff41, 0 0 50px #00ff41" },
        },
        scanline: {
          "0%": { top: "-5%" },
          "100%": { top: "105%" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        matrixFall: {
          "0%": { transform: "translateY(-100%)", opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
      },
      boxShadow: {
        "glow-green": "0 0 10px rgba(0, 255, 65, 0.3), 0 0 20px rgba(0, 255, 65, 0.1)",
        "glow-cyan": "0 0 10px rgba(0, 212, 255, 0.3), 0 0 20px rgba(0, 212, 255, 0.1)",
        "glow-red": "0 0 10px rgba(255, 51, 51, 0.3)",
        "terminal": "inset 0 0 60px rgba(0, 255, 65, 0.03)",
      },
      typography: {
        terminal: {
          css: {
            "--tw-prose-body": "#e0e0e0",
            "--tw-prose-headings": "#00ff41",
            "--tw-prose-code": "#00d4ff",
            "--tw-prose-links": "#00d4ff",
            "--tw-prose-bold": "#ffffff",
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
