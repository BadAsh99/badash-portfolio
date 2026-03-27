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
          surface: "#0d0d14",
          border: "#1a1a2e",
          green: "#0080ff",
          "green-dim": "#0055cc",
          cyan: "#ff2222",
          orange: "#ff6b35",
          red: "#ff2222",
          yellow: "#ffd700",
          dim: "#3a3a5a",
          text: "#e0e0e0",
          muted: "#8888aa",
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
        "float-slow": "floatOrb 12s ease-in-out infinite alternate",
        "float-medium": "floatOrb2 9s ease-in-out infinite alternate",
        "float-fast": "floatOrb3 7s ease-in-out infinite alternate",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        glow: {
          from: { textShadow: "0 0 5px #0080ff, 0 0 10px #0080ff" },
          to: { textShadow: "0 0 10px #0080ff, 0 0 25px #0080ff, 0 0 50px #0080ff" },
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
        floatOrb: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "100%": { transform: "translate(40px, -50px) scale(1.08)" },
        },
        floatOrb2: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "100%": { transform: "translate(-35px, 40px) scale(0.95)" },
        },
        floatOrb3: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "100%": { transform: "translate(25px, 30px) scale(1.05)" },
        },
      },
      boxShadow: {
        "glow-green": "0 0 10px rgba(0, 128, 255, 0.4), 0 0 20px rgba(0, 128, 255, 0.2)",
        "glow-cyan": "0 0 10px rgba(255, 34, 34, 0.4), 0 0 20px rgba(255, 34, 34, 0.2)",
        "glow-red": "0 0 10px rgba(255, 34, 34, 0.5), 0 0 20px rgba(255, 34, 34, 0.2)",
        "terminal": "inset 0 0 60px rgba(0, 128, 255, 0.04)",
      },
      typography: {
        terminal: {
          css: {
            "--tw-prose-body": "#e0e0e0",
            "--tw-prose-headings": "#0080ff",
            "--tw-prose-code": "#ff2222",
            "--tw-prose-links": "#0080ff",
            "--tw-prose-bold": "#ffffff",
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
