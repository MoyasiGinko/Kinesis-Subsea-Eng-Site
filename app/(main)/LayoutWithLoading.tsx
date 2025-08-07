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
  const scrollY = scrollbarContext?.scrollY || 0;

  return <Navbar scrollY={scrollY} />;
};

export default LayoutWithLoading;
