import { Space_Mono } from "next/font/google";

// Configure Space Mono as a variable font
export const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-space-mono",
  fallback: ["system-ui", "sans-serif"],
  preload: true,
  adjustFontFallback: true, // Automatically adjust the font fallback
});

// You can add more fonts here as needed
