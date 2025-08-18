import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#ffffff",
        "primary-blue": "#005EB8",
        "primary-blue-hover": "#024690",
        "primary-orange": "#FC5220",
        "primary-orange-hover": "#e04b1c",
        "primary-yellow": "#FDC900",
        "primary-yellow-hover": "#e0b800",
        brand: {
          ink: "#0A1633",
          ocean: "#0E3A8A",
          cyan: "#06B6D4",
        },
      },
      boxShadow: {
        elevated:
          "0 10px 20px rgba(2, 6, 23, 0.18), 0 6px 8px rgba(2, 6, 23, 0.08)",
        "elevated-lg":
          "0 18px 28px rgba(2, 6, 23, 0.18), 0 10px 12px rgba(2, 6, 23, 0.08)",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        slowFloat: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        gradientShift: "gradientShift 18s ease-in-out infinite",
        slowFloat: "slowFloat 14s ease-in-out infinite alternate",
      },
      fontFamily: {
        sans: ["'Space Mono'", "monospace"],
        mono: ["'Space Mono'", "monospace"],
      },
      // Add fontWeight for variable font
      fontWeight: {
        normal: "400",
        bold: "700",
        // Add variable font weights if needed
        semi: "600",
      },
      maxWidth: {
        "7xl": "80rem",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
