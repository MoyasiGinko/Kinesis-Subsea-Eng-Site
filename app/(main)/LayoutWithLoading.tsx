"use client";
import React, { useEffect } from "react";
import { useLoading } from "@/app/context/LoadingContext";
import {
  SmoothScrollbarProvider,
  useSmoothScrollbarOptional,
} from "@/app/context/SmoothScrollbarContext";
import LoadingScreen from "@/components/common/LoadingScreen";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const ScrollableContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const scrollbarContext = useSmoothScrollbarOptional();

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
        <SmoothScrollbarProvider damping={0.01} alwaysShowTracks={true}>
          <ScrollableContent>{children}</ScrollableContent>
        </SmoothScrollbarProvider>
      </main>
    </>
  );
};

const NavbarWithScrollContext: React.FC = () => {
  const scrollbarContext = useSmoothScrollbarOptional();
  const [scrollY, setScrollY] = React.useState(0);

  // Track scroll from smooth scrollbar context
  React.useEffect(() => {
    if (scrollbarContext?.scrollY !== undefined) {
      setScrollY(scrollbarContext.scrollY);
    }
  }, [scrollbarContext?.scrollY]);

  // Also listen to window scroll events as fallback
  React.useEffect(() => {
    const handleWindowScroll = () => {
      const windowScrollY =
        window.scrollY || document.documentElement.scrollTop || 0;
      setScrollY(windowScrollY);
    };

    // Set initial value
    handleWindowScroll();

    // Listen for scroll events
    window.addEventListener("scroll", handleWindowScroll, { passive: true });

    // Listen for custom smooth-scroll events
    const handleCustomScroll = (e: CustomEvent) => {
      if (e.detail && typeof e.detail.scrollY === "number") {
        setScrollY(e.detail.scrollY);
      }
    };

    window.addEventListener(
      "smooth-scroll",
      handleCustomScroll as EventListener
    );

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
      window.removeEventListener(
        "smooth-scroll",
        handleCustomScroll as EventListener
      );
    };
  }, []);

  return <Navbar scrollY={scrollY} />;
};

export default LayoutWithLoading;
