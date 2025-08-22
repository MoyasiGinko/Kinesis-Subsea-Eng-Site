import { Work_Sans } from "next/font/google";

// Configure Work Sans as a variable font for global use
export const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-work-sans",
  fallback: ["system-ui", "sans-serif"],
  preload: true,
  adjustFontFallback: true,
});

// You can add more fonts here as needed
