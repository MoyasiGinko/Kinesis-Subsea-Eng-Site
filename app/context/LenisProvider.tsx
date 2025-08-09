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
      // Create Lenis instance with optimal settings
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        wheelMultiplier: 1,
        touchMultiplier: 2,
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

    // Set up the animation frame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      // Clean up
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

  return <>{children}</>;
};

export default LenisProvider;
