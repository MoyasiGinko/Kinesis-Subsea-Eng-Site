"use client";
import React, { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import { useLoading } from "@/app/context/LoadingContext";
import LoadingScreen from "@/components/common/LoadingScreen";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const LayoutWithLoading: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const scrollbarRef = useRef<HTMLDivElement>(null);
  // Store scrollbar instance for children if needed
  const scrollbarInstance = useRef<any>(null);
  const [scrollY, setScrollY] = React.useState(0);
  useEffect(() => {
    if (typeof window !== "undefined" && scrollbarRef.current) {
      scrollbarInstance.current = Scrollbar.init(scrollbarRef.current, {
        damping: 0.07, // lower is slower and more inertia
        alwaysShowTracks: true,
      });
      const syncScroll = () => {
        if (scrollbarInstance.current) {
          setScrollY(scrollbarInstance.current.scrollTop);
        }
      };
      scrollbarInstance.current.addListener(syncScroll);
    }
    return () => {
      if (typeof window !== "undefined" && scrollbarRef.current) {
        const instance = Scrollbar.get(scrollbarRef.current);
        if (instance) instance.destroy();
      }
    };
  }, []);

  const { isLoading, setLoading } = useLoading();
  useEffect(() => {
    // Simulate loading for 1.2s, replace with real logic as needed
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, [setLoading]);
  return (
    <>
      {isLoading && <LoadingScreen />}
      <Navbar scrollY={scrollY} />
      {/* Navbar is now outside the scrollable area */}
      <main style={{ position: "relative" }}>
        <div ref={scrollbarRef} style={{ height: "100vh", overflow: "hidden" }}>
          <div>{children}</div>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default LayoutWithLoading;
