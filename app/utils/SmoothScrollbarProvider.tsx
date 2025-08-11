"use client";


import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  type ReactNode
} from "react";
import Scrollbar from "smooth-scrollbar";
import type ScrollbarOptions from "smooth-scrollbar";

// Context to provide scrollbar instance
type SmoothScrollbarContextType = {
  scrollbar: Scrollbar | null;
};
const SmoothScrollbarContext = createContext<SmoothScrollbarContextType>({ scrollbar: null });
export const useSmoothScrollbar = () => useContext(SmoothScrollbarContext);

interface SmoothScrollbarProviderProps {
  children: ReactNode;
  options?: ScrollbarOptions;
  onScroll?: (scrollY: number) => void;
}

const SmoothScrollbarProvider: React.FC<SmoothScrollbarProviderProps> = ({
  children,
  options,
  onScroll,
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
      if (onScroll && scrollbarInstance.current) {
        const handleScroll = ({ offset }: { offset: { y: number } }) => {
          onScroll(offset.y);
        };
        scrollbarInstance.current.addListener(handleScroll);
        // Initial call
        onScroll(scrollbarInstance.current.offset.y);
        return () => {
          scrollbarInstance.current?.removeListener(handleScroll);
        };
      }
    }
    return () => {
      if (node && Scrollbar.get(node)) {
        Scrollbar.get(node)?.destroy();
      }
      scrollbarInstance.current = null;
    };
  }, [mounted, options, onScroll]);

  if (!mounted) {
    // Avoid rendering on server to prevent hydration mismatch
    return null;
  }

  return (
    <SmoothScrollbarContext.Provider value={{ scrollbar: scrollbarInstance.current }}>
      <div
        ref={scrollRef}
        id="smooth-scroll"
        style={{ height: "100vh", width: "100vw", overflow: "hidden" }}
      >
        {children}
      </div>
    </SmoothScrollbarContext.Provider>
  );
};

export default SmoothScrollbarProvider;
