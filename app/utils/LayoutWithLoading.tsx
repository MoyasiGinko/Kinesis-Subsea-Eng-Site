"use client";
import React, { useEffect } from "react";
import { useLoading } from "@/app/utils/context/LoadingContext";
import LoadingScreen from "@/app/utils/LoadingScreen";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const ScrollableContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <>{children}</>;
};

const LayoutWithLoading: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isLoading, setLoading } = useLoading();

  useEffect(() => {
    // Use a shorter loading time for better perceived performance
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <NavbarWithScrollContext />
      <main style={{ position: "relative", minHeight: "100vh" }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

const NavbarWithScrollContext: React.FC = () => {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    let ticking = false;
    let lastKnownScrollY = 0;

    // More efficient scroll handling with throttling
    const handleScroll = () => {
      lastKnownScrollY =
        window.scrollY || document.documentElement.scrollTop || 0;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(lastKnownScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Set initial value
    handleScroll();

    // Only use the most efficient event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <Navbar scrollY={scrollY} />;
};

export default LayoutWithLoading;
