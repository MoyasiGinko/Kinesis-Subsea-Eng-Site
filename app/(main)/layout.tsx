import type { Metadata } from "next";

import "../globals.css";
import { LoadingProvider } from "@/app/context/LoadingContext";
import LayoutWithLoading from "@/app/(main)/LayoutWithLoading";
import React from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

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
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-black font-sans">
        <LoadingProvider>
          <LayoutWithLoading>{children}</LayoutWithLoading>
        </LoadingProvider>
      </body>
    </html>
  );
}
