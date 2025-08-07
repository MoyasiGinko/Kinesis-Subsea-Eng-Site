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
> = ({ children, damping = 0.01, alwaysShowTracks = true }) => {
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const scrollbarInstance = useRef<any>(null);
  const [scrollY, setScrollY] = React.useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && scrollbarRef.current) {
      console.log("SmoothScrollbarProvider: Initializing Smooth Scrollbar");

      scrollbarInstance.current = Scrollbar.init(scrollbarRef.current, {
        damping,
        alwaysShowTracks,
      });

      const syncScroll = () => {
        if (scrollbarInstance.current) {
          setScrollY(scrollbarInstance.current.scrollTop);
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
