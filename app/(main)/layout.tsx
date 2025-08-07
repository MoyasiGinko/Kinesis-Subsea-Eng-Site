import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { LoadingProvider } from "@/app/context/LoadingContext";
import LayoutWithLoading from "@/app/(main)/LayoutWithLoading";
import React from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black font-sans`}
      >
        <LoadingProvider>
          <LayoutWithLoading>{children}</LayoutWithLoading>
        </LoadingProvider>
      </body>
    </html>
  );
}
