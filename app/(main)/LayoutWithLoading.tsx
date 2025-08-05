"use client";
import React, { useEffect } from "react";
import { useLoading } from "@/app/context/LoadingContext";
import LoadingScreen from "@/components/common/LoadingScreen";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

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
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default LayoutWithLoading;
