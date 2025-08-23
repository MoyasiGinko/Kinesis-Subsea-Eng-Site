"use client";
import ServicesSection from "../../../components/our-services/ServicesSection";
import ServiceBanner from "../../../components/our-services/ServiceBanner";
import FAQSection from "../../../components/our-services/FAQSection";
import StatsSection from "../../../components/our-services/StatsSection";

export default function Page() {
  return (
    <>
      <ServiceBanner />
      <ServicesSection />
      <StatsSection />
      <FAQSection />
    </>
  );
}
