"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useSmoothScrollbar } from "@/app/utils/SmoothScrollbarProvider";

type NavLink = { href: string; label: string };

interface SectorBannerProps {
  title: string;
  subtitle?: string;
  links?: NavLink[];
  bgImage?: string; // URL
  height?: string; // Tailwind height class or inline fallback
}

export default function SectorBanner({
  title,
  subtitle,
  links = [],
  bgImage,
  height = "h-72 sm:h-96 lg:h-[420px]",
}: SectorBannerProps): React.ReactElement {
  const { scrollbar } = useSmoothScrollbar();
  const bgRef = useRef<HTMLDivElement | null>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let attached = false;
    let listener: ((arg: any) => void) | null = null;

    if (scrollbar && bgRef.current) {
      listener = ({ offset }: { offset: { y: number } }) => {
        setOffsetY(offset.y);
      };
      scrollbar.addListener(listener);
      attached = true;
      // initial
      setOffsetY(scrollbar.offset.y ?? 0);
    }

    if (!attached) {
      // fallback to window scrolling
      const onScroll = () => setOffsetY(window.scrollY || 0);
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      listener = onScroll;
    }

    return () => {
      if (listener && scrollbar && (scrollbar as any).removeListener) {
        scrollbar.removeListener(listener as any);
      }
      if (!attached && typeof window !== "undefined") {
        window.removeEventListener("scroll", listener as any);
      }
    };
  }, [scrollbar]);

  // parallax strength
  const parallax = Math.min(
    0.18,
    0.12 + (Array.isArray(links) ? links.length * 0.01 : 0)
  );
  const translate = `translate3d(0, ${-offsetY * parallax}px, 0)`;

  return (
    <section
      className={`relative overflow-hidden ${height} w-full`}
      aria-labelledby="sector-title"
    >
      {/* Background image with parallax */}
      <div
        ref={bgRef}
        aria-hidden
        className="absolute bg-white inset-0 will-change-transform bg-center"
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : undefined,
          backgroundSize: "100% 100%", // stretch to fit container
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          transform: translate,
        }}
      >
        {/* Soft overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 h-full flex items-center">
        <div className="py-8 sm:py-12 md:py-16 w-full">
          <div className="max-w-3xl">
            <nav className="flex flex-wrap gap-2 mb-4" aria-label="breadcrumb">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="inline-block bg-white/10 text-white/90 px-3 py-1 rounded-md text-xs font-semibold hover:bg-white/20 transition"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <h1
              id="sector-title"
              className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-3"
            >
              {title}
            </h1>

            {subtitle && (
              <p className="text-white/90 max-w-2xl text-base sm:text-lg mb-6">
                {subtitle}
              </p>
            )}

            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-white text-black px-4 py-3 rounded-md font-semibold shadow-lg hover:shadow-xl transition"
                aria-label="Explore solutions"
              >
                Services
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              {/* <Link
                href="#contact"
                className="text-white/90 underline underline-offset-4 text-sm"
              >
                Contact us
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
