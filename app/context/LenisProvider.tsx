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
      // Create Lenis instance with performance-optimized settings
      lenisRef.current = new Lenis({
        duration: 1.0, // Slightly faster for better performance perception
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        wheelMultiplier: 1.0, // Reduced for better performance
        touchMultiplier: 1.5, // Reduced for better performance
        infinite: false, // Allow scrolling to the end of the page
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
      pinType: "transform",
    });

    // Update ScrollTrigger on Lenis scroll
    lenis.on("scroll", ScrollTrigger.update);

    // Set up the animation frame loop - more optimized implementation
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    // Start the animation loop (store ID for cleanup)
    rafId = requestAnimationFrame(raf);

    // Use a throttled scroll event dispatch to reduce event firing frequency
    let lastScrollTime = 0;
    lenis.on("scroll", () => {
      const now = performance.now();
      if (now - lastScrollTime > 100) {
        // Throttle to max 10 events per second
        lastScrollTime = now;
        window.dispatchEvent(new Event("scroll"));
      }
    });

    return () => {
      // Clean up properly
      cancelAnimationFrame(rafId);
      lenis.destroy();
      // Remove proxy without passing null (TypeScript fix)
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
