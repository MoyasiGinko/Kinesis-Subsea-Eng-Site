"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface LenisContextType {
  lenis: Lenis | null;
  scrollY: number;
}

const LenisContext = createContext<LenisContextType>({
  lenis: null,
  scrollY: 0,
});

export const useLenis = () => useContext(LenisContext);

interface LenisProviderProps {
  children: React.ReactNode;
}

const LenisProvider: React.FC<LenisProviderProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    if (!lenisRef.current) {
      // Use a smooth cubic easing for buttery scroll
      lenisRef.current = new Lenis({
        duration: 1.8, // Ultra-slow, luxurious smoothness
        // easeOutQuart for even gentler deceleration
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
        orientation: "vertical",
        gestureOrientation: "vertical",
        wheelMultiplier: 1.0, // Maximum control
        touchMultiplier: 1.0,
        infinite: false,
      });
    }

    const lenis = lenisRef.current;

    // Setup GSAP ScrollTrigger integration
    lenis.on("scroll", ({ scroll }: { scroll: number }) => {
      setScrollY(scroll);
      document.documentElement.style.setProperty("--scroll-y", `${scroll}px`);
    });

    // Connect Lenis to ScrollTrigger
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length && typeof value === "number") {
          lenis.scrollTo(value);
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: "fixed", // More reliable for Next.js layouts
    });

    // Set up the animation frame loop at native refresh rate for smoothness
    let rafId: number;
    let isActive = true;
    function raf(time: number) {
      if (!isActive) return;
      lenis.raf(time);
      ScrollTrigger.update(); // Update ScrollTrigger after Lenis raf
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Pause animation loop when tab is not visible
    const handleVisibility = () => {
      isActive = !document.hidden;
      if (isActive) {
        rafId = requestAnimationFrame(raf);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      // Clean up properly
      cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", handleVisibility);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current, scrollY }}>
      {children}
    </LenisContext.Provider>
  );
};

export default LenisProvider;
