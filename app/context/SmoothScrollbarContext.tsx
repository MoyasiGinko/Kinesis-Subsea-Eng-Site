"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  ReactNode,
} from "react";
import Scrollbar from "smooth-scrollbar";

interface SmoothScrollbarContextType {
  scrollbarInstance: any;
  scrollbarContainer: HTMLDivElement | null;
  scrollY: number;
}

const SmoothScrollbarContext = createContext<
  SmoothScrollbarContextType | undefined
>(undefined);

interface SmoothScrollbarProviderProps {
  children: ReactNode;
  damping?: number;
  alwaysShowTracks?: boolean;
}

export const SmoothScrollbarProvider: React.FC<
  SmoothScrollbarProviderProps
> = ({ children, damping = 0.05, alwaysShowTracks = false }) => {
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const scrollbarInstance = useRef<any>(null);
  const [scrollY, setScrollY] = React.useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && scrollbarRef.current) {
      console.log("SmoothScrollbarProvider: Initializing Smooth Scrollbar");

      scrollbarInstance.current = Scrollbar.init(scrollbarRef.current, {
        damping: 0.04, // Increased for ultra-smooth feel
        thumbMinSize: 20,
        renderByPixels: true,
        alwaysShowTracks,
        continuousScrolling: true,
        wheelEventTarget: null, // Use default
        plugins: {
          overscroll: {
            effect: "bounce",
            damping: 0.2,
            maxOverscroll: 200,
            glowColor: "#ffffff10",
          },
        },
      });

      const syncScroll = () => {
        if (scrollbarInstance.current) {
          const newScrollY = scrollbarInstance.current.scrollTop;
          // Use requestAnimationFrame for smoother updates
          requestAnimationFrame(() => {
            setScrollY(newScrollY);

            // Dispatch custom scroll event for components that need it
            const customEvent = new CustomEvent("smooth-scroll", {
              detail: { scrollY: newScrollY },
            });
            window.dispatchEvent(customEvent);

            // Also update CSS variable for potential CSS-based solutions
            document.documentElement.style.setProperty(
              "--scroll-y",
              `${newScrollY}px`
            );
          });
        }
      };

      scrollbarInstance.current.addListener(syncScroll);

      console.log("SmoothScrollbarProvider: Smooth Scrollbar initialized", {
        instance: scrollbarInstance.current,
        container: scrollbarRef.current,
      });
    }

    return () => {
      if (typeof window !== "undefined" && scrollbarRef.current) {
        const instance = Scrollbar.get(scrollbarRef.current);
        if (instance) {
          console.log("SmoothScrollbarProvider: Destroying Smooth Scrollbar");
          instance.destroy();
        }
      }
    };
  }, [damping, alwaysShowTracks]);

  const contextValue: SmoothScrollbarContextType = {
    scrollbarInstance: scrollbarInstance.current,
    scrollbarContainer: scrollbarRef.current,
    scrollY,
  };

  return (
    <SmoothScrollbarContext.Provider value={contextValue}>
      <div
        ref={scrollbarRef}
        style={{
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div>{children}</div>
      </div>
    </SmoothScrollbarContext.Provider>
  );
};

export const useSmoothScrollbar = (): SmoothScrollbarContextType => {
  const context = useContext(SmoothScrollbarContext);
  if (context === undefined) {
    throw new Error(
      "useSmoothScrollbar must be used within a SmoothScrollbarProvider"
    );
  }
  return context;
};

// Optional hook for components that may or may not have Smooth Scrollbar
export const useSmoothScrollbarOptional =
  (): SmoothScrollbarContextType | null => {
    const context = useContext(SmoothScrollbarContext);
    return context || null;
  };
