"use client";
import CoreServicesCards from "@/components/our-services/services/CoreServiceCards";
import ServiceHero from "@/components/our-services/service-hero";
import OtherServicesCards from "@/components/our-services/services/OtherServiceCards";
import ProjectProcess from "@/components/our-services/ProjectProcess";

export default function Page() {
  return (
    <>
      {/* <ServiceBanner /> */}
      <ServiceHero />
      <CoreServicesCards />
      <OtherServicesCards />
      <ProjectProcess />
    </>
  );
}
