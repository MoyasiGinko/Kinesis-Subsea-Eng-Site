import type { Metadata } from "next";

// Import CSS normally but we'll also inline critical styles
import "../globals.css";
import { LoadingProvider } from "@/app/utils/context/LoadingContext";
import LayoutWithLoading from "@/app/utils/LayoutWithLoading";
import React from "react";
import { spaceMono } from "../utils/fonts";
import LenisProvider from "@/app/utils/context/LenisProvider";

export const metadata: Metadata = {
  title:
    "Kinesis Subsea Engineering | Global leader in integrated energy services",
  description:
    "Kinesis Subsea Engineering - Integrated energy services company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceMono.variable}>
      <body
        className={`antialiased bg-white text-black tracking-tighter ${spaceMono.className}`}
      >
        <LenisProvider>
          <LoadingProvider>
            <LayoutWithLoading>{children}</LayoutWithLoading>
          </LoadingProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
