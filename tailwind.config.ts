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
