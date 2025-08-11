"use client";
import React from "react";
import HeroBanner from "@/components/common/HeroBanner";
import NewsSection from "@/components/common/NewsSection";
import ContactSection from "@/components/common/ContactSection";
import SectorLayout from "@/components/common/SectorSection";
import ServicesSection from "@/components/common/ServicesSection";
import RecentProjectsSection from "@/components/common/RecentProjects";
import Footer from "@/components/common/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <HeroBanner />

      <SectorLayout />

      <ServicesSection />

      <RecentProjectsSection />

      <NewsSection />

      <ContactSection />

      <Footer />
    </div>
  );
}
