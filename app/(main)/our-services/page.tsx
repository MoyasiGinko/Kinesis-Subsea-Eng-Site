"use client";
import ServicesSection from "../../../components/our-services/ServicesSection";
import ServiceBanner from "../../../components/our-services/ServiceBanner";
import FAQSection from "../../../components/our-services/FAQSection";
import StatsSection from "../../../components/our-services/StatsSection";
import ServicesCards from "@/components/our-services/ServiceCards";
import ServiceHero from "@/components/our-services/service-hero";

export default function Page() {
  return (
    <>
      {/* <ServiceBanner /> */}
      <ServiceHero />
      <ServicesCards />
      {/* <ServicesSection />
      <StatsSection />
      <FAQSection /> */}
    </>
  );
}
