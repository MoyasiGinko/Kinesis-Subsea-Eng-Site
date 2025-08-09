"use client";
import React, { useEffect } from "react";
import { useLoading } from "@/app/context/LoadingContext";
import LoadingScreen from "@/components/common/LoadingScreen";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const ScrollableContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <div>{children}</div>
      <Footer />
    </>
  );
};

const LayoutWithLoading: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isLoading, setLoading } = useLoading();

  useEffect(() => {
    // Simulate loading for 1.2s, replace with real logic as needed
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <NavbarWithScrollContext />
      <main style={{ position: "relative", height: "100vh" }}>
        <ScrollableContent>{children}</ScrollableContent>
      </main>
    </>
  );
};

const NavbarWithScrollContext: React.FC = () => {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    // Listen for CSS variable updates from Lenis
    const checkScrollY = () => {
      const cssScrollY = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--scroll-y"
        ) || "0",
        10
      );
      if (!isNaN(cssScrollY)) {
        setScrollY(cssScrollY);
      } else {
        // Fallback to window scroll
        setScrollY(window.scrollY || document.documentElement.scrollTop || 0);
      }
    };

    // Set initial value
    checkScrollY();

    // Use both standard scroll events and a requestAnimationFrame loop
    // to ensure we catch updates from both Lenis and native scroll
    window.addEventListener("scroll", checkScrollY, { passive: true });

    let rafId: number;
    const raf = () => {
      checkScrollY();
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      window.removeEventListener("scroll", checkScrollY);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <Navbar scrollY={scrollY} />;
};

export default LayoutWithLoading;
