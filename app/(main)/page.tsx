"use client";
import React from "react";
import { motion } from "framer-motion";
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
import PageTransitionWrapper from "@/components/common/PageTransitionWrapper";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <HeroBanner />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
      >
        <SectorLayout />
      </motion.div>

      <PageTransitionWrapper>
        <ServicesSection />
      </PageTransitionWrapper>

      <PageTransitionWrapper>
        <RecentProjectsSection />
      </PageTransitionWrapper>

      <PageTransitionWrapper>
        <NewsSection />
      </PageTransitionWrapper>

      <PageTransitionWrapper>
        <ContactSection />
      </PageTransitionWrapper>
    </div>
  );
}
