"use client";
import CoreServicesCards from "@/components/our-services/services/CoreServiceCards";
import ServiceHero from "@/components/our-services/service-hero";
import OtherServicesCards from "@/components/our-services/services/OtherServiceCards";

export default function Page() {
  return (
    <>
      {/* <ServiceBanner /> */}
      <ServiceHero />
      <CoreServicesCards />
      <OtherServicesCards />
    </>
  );
}
