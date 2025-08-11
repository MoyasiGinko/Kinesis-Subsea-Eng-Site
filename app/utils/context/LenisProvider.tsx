"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Lenis from "lenis";
// Optional: only used if you opt in
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ScrollToTarget = number | string | Element | null | undefined;
type ScrollToOptions = Parameters<Lenis["scrollTo"]>[1];

interface LenisContextType {
  lenis: Lenis | null;
  scrollY: number;
  scrollTo: (target: ScrollToTarget, opts?: ScrollToOptions) => void;
}

const LenisContext = createContext<LenisContextType>({
  lenis: null,
  scrollY: 0,
  scrollTo: () => {},
});

export const useLenis = () => useContext(LenisContext);

interface Props {
  children: React.ReactNode;
  /** Keep false to avoid touching GSAP/ScrollTrigger at all */
  integrateScrollTrigger?: boolean;
  /** Tuning */
  preset?: "responsive" | "balanced" | "floaty";
}

const PRESETS = {
  // Immediate, snappy response (recommended for wheel “lag” complaints)
  responsive: { duration: 0.7, wheel: 1.0, touch: 1.0, lerp: 0.08 },
  // Safe middle ground
  balanced: { duration: 0.9, wheel: 0.95, touch: 1.0, lerp: 0.1 },
  // More drift if you like it floaty
  floaty: { duration: 1.15, wheel: 1.05, touch: 1.05, lerp: 0.12 },
} as const;

// Fast-start ease-out (no sluggish ramp-up)
const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

const LenisProvider: React.FC<Props> = ({
  children,
  integrateScrollTrigger = false,
  preset = "responsive",
}) => {
  const [scrollY, setScrollY] = useState(0);
  const lenisRef = useRef<Lenis | null>(null);
  const rafIdRef = useRef<number | null>(null);

  const cfg = useMemo(() => PRESETS[preset], [preset]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Create Lenis with immediate-feel parameters
    const lenis = new Lenis({
      duration: prefersReduced ? 0.4 : cfg.duration,
      // critical: fast start -> no perceived input delay
      easing: easeOutExpo,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: !prefersReduced,
      wheelMultiplier: cfg.wheel,
      touchMultiplier: cfg.touch,
      syncTouch: true,
      syncTouchLerp: cfg.lerp,
      infinite: false,
      autoResize: true,
      // @ts-ignore lenis allows a function here
      prevent: (node: Element) =>
        node.hasAttribute("data-lenis-prevent") ||
        ["INPUT", "TEXTAREA", "SELECT"].includes(node.tagName),
    });

    lenisRef.current = lenis;

    // Drive via native rAF for the most responsive input path
    const loop = (time: number) => {
      lenis.raf(time); // rAF time is already in ms
      rafIdRef.current = requestAnimationFrame(loop);
    };
    rafIdRef.current = requestAnimationFrame(loop);

    // Cheap state sync
    const onScroll = ({ scroll }: { scroll: number }) => setScrollY(scroll);
    lenis.on("scroll", onScroll);

    // DO NOT touch ScrollTrigger by default; your GSAP code remains untouched.
    let detachST: (() => void) | null = null;
    if (integrateScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.scrollerProxy(document.documentElement, {
        scrollTop(value) {
          if (arguments.length && typeof value === "number") {
            lenis.scrollTo(value, { immediate: true });
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
        pinType: (document.documentElement.style as any).transform
          ? "transform"
          : "fixed",
      });
      const updateST = () => ScrollTrigger.update();
      lenis.on("scroll", updateST);
      const onResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", onResize);
      ScrollTrigger.refresh();
      detachST = () => {
        lenis.off("scroll", updateST);
        window.removeEventListener("resize", onResize);
        try {
          ScrollTrigger.getAll().forEach((t) => t.kill());
          ScrollTrigger.clearScrollMemory();
        } catch {}
      };
    }

    // Kill native smooth to avoid double easing
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";

    return () => {
      document.documentElement.style.scrollBehavior = prev;
      if (detachST) detachST();

      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      lenis.off("scroll", onScroll);
      lenis.destroy();
      lenisRef.current = null;
      rafIdRef.current = null;
    };
  }, [cfg.duration, cfg.wheel, cfg.touch, cfg.lerp, integrateScrollTrigger]);

  const scrollTo = (target: ScrollToTarget, opts?: ScrollToOptions) => {
    const lenis = lenisRef.current;
    if (!lenis || target == null) return;
    lenis.scrollTo(target as any, opts as any);
  };

  return (
    <LenisContext.Provider
      value={{ lenis: lenisRef.current, scrollY, scrollTo }}
    >
      {children}
    </LenisContext.Provider>
  );
};

export default LenisProvider;
