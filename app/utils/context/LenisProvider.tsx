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
      // Create Lenis instance with settings optimized for low-powered devices
      lenisRef.current = new Lenis({
        duration: 0.8, // Even faster for smoother experience on older devices
        easing: (t: number) => t, // Linear easing is more performant than exponential
        orientation: "vertical",
        gestureOrientation: "vertical",
        wheelMultiplier: 0.8, // Lower multiplier for better performance
        touchMultiplier: 1.0, // Lower multiplier for better performance
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

    // Set up the animation frame loop with performance optimization
    let rafId: number;
    let lastTime = 0;
    const frameRate = 1000 / 50; // Cap at ~50fps for older devices

    function raf(time: number) {
      // Throttle to specified frame rate
      if (time - lastTime >= frameRate) {
        lastTime = time;
        lenis.raf(time);
      }
      rafId = requestAnimationFrame(raf);
    }

    // Start the animation loop (store ID for cleanup)
    rafId = requestAnimationFrame(raf);

    // Use a more aggressive throttling for scroll events on older devices
    let lastScrollTime = 0;
    lenis.on("scroll", () => {
      const now = performance.now();
      if (now - lastScrollTime > 200) {
        // Reduced to 5 events per second for better performance
        lastScrollTime = now;
        // Use requestAnimationFrame to ensure we're in sync with the browser's rendering
        requestAnimationFrame(() => {
          window.dispatchEvent(new Event("scroll"));
        });
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
