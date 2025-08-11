"use client";
import React, { useEffect, useRef, useState } from "react";
import Scrollbar from "smooth-scrollbar";
import ScrollbarOptions from "smooth-scrollbar";

interface SmoothScrollbarProviderProps {
  children: React.ReactNode;
  options?: ScrollbarOptions;
}

const SmoothScrollbarProvider: React.FC<SmoothScrollbarProviderProps> = ({
  children,
  options,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollbarInstance = useRef<Scrollbar | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const node = scrollRef.current;
    // Always destroy and re-init on options change
    if (node) {
      if (Scrollbar.get(node)) {
        Scrollbar.get(node)?.destroy();
      }
      scrollbarInstance.current = Scrollbar.init(node, {
        damping: 0.1, // Higher = less inertia, just smooth
        alwaysShowTracks: true,
        ...options,
      });
    }
    return () => {
      if (node && Scrollbar.get(node)) {
        Scrollbar.get(node)?.destroy();
      }
      scrollbarInstance.current = null;
    };
  }, [mounted, options]);

  if (!mounted) {
    // Avoid rendering on server to prevent hydration mismatch
    return null;
  }

  return (
    <div
      ref={scrollRef}
      id="smooth-scroll"
      style={{ height: "100vh", width: "100vw", overflow: "hidden" }}
    >
      {children}
    </div>
  );
};

export default SmoothScrollbarProvider;
