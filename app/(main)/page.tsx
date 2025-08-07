"use client";
import React from "react";
import HeroBanner from "@/components/common/HeroBanner";
import AboutSection from "@/components/common/AboutSection";
import StatsSection from "@/components/common/StatsSection";
import NewsSection from "@/components/common/NewsSection";
import ContactSection from "@/components/common/ContactSection";
import SectorLayout from "@/components/common/SectorSection";
import ServicesSection from "@/components/common/ServicesSection";
import RecentProjectsSection from "@/components/common/RecentProjects";
import CTASection from "@/components/common/CTAsection";
import Footer from "@/components/common/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-950 to-slate-900">
      <HeroBanner />
      <SectorLayout />
      {/* <AboutSection /> */}
      <ServicesSection />
      {/* <StatsSection /> */}
      <RecentProjectsSection />
      <NewsSection />
      <ContactSection />
    </div>
  );
}
