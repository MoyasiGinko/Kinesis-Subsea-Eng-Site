"use client";
import React from "react";
import ServicesSection from "./ServicesSection";
import HeroSection from "./HeroSection";
import FAQSection from "./FAQSection";
import StatsSection from "./StatsSection";

const OurServices = () => {
  return (
    <div className=" bg-gray-900 text-white">
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <FAQSection />
    </div>
  );
};

export default OurServices;
