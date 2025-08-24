"use client";
import ServicesSection from "../../../components/our-services/ServicesSection";
import ServiceBanner from "../../../components/our-services/ServiceBanner";
import FAQSection from "../../../components/our-services/FAQSection";
import StatsSection from "../../../components/our-services/StatsSection";
import ServicesCards from "@/components/our-services/ServiceCards";
import ServiceHeader from "@/components/our-services/service-hero";

export default function Page() {
  return (
    <>
      {/* <ServiceBanner /> */}
      <ServiceHeader
        title="Our Services"
        subtitle="High-impact subsea and topsides engineering—built for certainty."
        navItems={[
          { href: "#subsea", label: "Subsea" },
          { href: "#topsides", label: "Topsides" },
        ]}
      />
      <ServicesCards />
      {/* <ServicesSection />
      <StatsSection />
      <FAQSection /> */}
    </>
  );
}
