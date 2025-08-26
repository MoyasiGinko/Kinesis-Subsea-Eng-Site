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
    "web-development": {
      id: "1",
      slug: "web-development",
      title: "Professional Web Development Services",
      category: "Development",
      description:
        "Build powerful, scalable web applications with our expert development team. We specialize in modern technologies and deliver solutions that drive business growth and enhance user experiences.",
      features: [
        "Custom web application development",
        "Responsive design implementation",
        "Performance optimization and SEO",
        "Content management system integration",
        "E-commerce platform development",
        "API development and integration",
        "Database design and optimization",
        "Security implementation and testing",
        "Cross-browser compatibility testing",
        "Ongoing maintenance and support",
      ],
      image: "/images/web-development.jpg",
    },
    "mobile-applications": {
      id: "2",
      slug: "mobile-applications",
      title: "Mobile Application Development",
      category: "Development",
      description:
        "Create engaging mobile experiences with our native and cross-platform app development services. From concept to deployment, we deliver apps that users love.",
      features: [
        "Native iOS and Android development",
        "Cross-platform solutions with React Native",
        "UI/UX design and prototyping",
        "App store optimization",
        "Push notification implementation",
        "Offline functionality support",
        "Third-party API integrations",
        "Performance monitoring and analytics",
      ],
      image: "/images/mobile-apps.jpg",
    },
  };

  return services[slug] || services["web-development"];
};

export async function generateStaticParams() {
  return [
    { slug: "web-development" },
    { slug: "mobile-applications" },
    { slug: "cloud-solutions" },
    { slug: "digital-marketing" },
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
