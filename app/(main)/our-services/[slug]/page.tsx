// app/services/[slug]/page.tsx
import React from "react";
import ServiceLayout from "@/components/our-services/services/details-page/ServiceLayout";
import ServiceContent from "@/components/our-services/services/details-page/ServiceContent";
import { Service } from "@/types/service";
import ServiceBanner from "@/components/our-services/ServiceBanner";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Sample service data - in production, this would come from an API or CMS
const getServiceData = (slug: string): Service => {
  const services: { [key: string]: Service } = {
    "subsea-engineering": {
      id: "1",
      slug: "subsea-engineering",
      title: "Subsea Engineering Services",
      category: "Subsea Engineering",
      description:
        "Comprehensive subsea engineering solutions for offshore projects — from concept and detailed design to installation support, inspection and maintenance. We combine engineering excellence with practical offshore experience to deliver safe, reliable subsea systems.",
      features: [
        "Subsea systems design and analysis",
        "ROV and trenching support",
        "Umbilical, riser and flowline engineering",
        "Geotechnical and pipeline route assessment",
        "Subsea installation engineering and oversight",
        "Inspection, repair and maintenance (IRM)",
        "Diver and non-diver intervention planning",
        "Subsea control systems and hydraulics",
      ],
      image:
        "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1754738820/1_jvnjiz.webp",
    },
    "oil-gas-rig": {
      id: "2",
      slug: "oil-gas-rig",
      title: "Oil & Gas Rig Services",
      category: "Oil & Gas",
      description:
        "End-to-end rig services for offshore and onshore drilling operations. We provide rig consulting, safety and performance optimisation, mobilisation support and lifecycle maintenance to maximise uptime and minimise operational risk.",
      features: [
        "Rig design review and fitness-for-purpose assessments",
        "Commissioning and mobilisation support",
        "Wellsite engineering and logistics",
        "Barrier management and HSE compliance",
        "Preventative maintenance planning",
        "Performance monitoring and optimisation",
        "Emergency response and contingency planning",
      ],
      image:
        "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1754738819/2_vfvnuz.webp",
    },
    "renewables-subsea": {
      id: "3",
      slug: "renewables-subsea",
      title: "Renewables & Offshore Wind Services",
      category: "Renewables",
      description:
        "Specialist services for the renewable energy sector, focusing on offshore wind and tidal projects. We support project development, foundation and array design, installation planning and long-term O&M strategies.",
      features: [
        "Offshore wind foundation and substructure engineering",
        "Array layout and wake-loss assessments",
        "Installation engineering and vessel selection",
        "Electrical balance-of-plant and export cable design",
        "Environmental and permitting support",
        "Operations & maintenance planning",
        "Lifetime assessment and decommissioning planning",
      ],
      image:
        "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1754738819/3_yp4wiw.webp",
    },
  };

  return services[slug] || services["web-development"];
};

export async function generateStaticParams() {
  return [
    { slug: "subsea-engineering" },
    { slug: "oil-gas-rig" },
    { slug: "renewables-subsea" },
  ];
}

const ServicePage: React.FC<ServicePageProps> = async ({ params }) => {
  const { slug } = await params;
  const service = getServiceData(slug);

  return (
    <ServiceLayout>
      {/* <ServiceBanner /> */}
      <ServiceContent service={service} />
    </ServiceLayout>
  );
};

export default ServicePage;
