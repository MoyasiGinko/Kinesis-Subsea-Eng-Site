"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { serviceData } from "./sampleData";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
}

interface CertificationItem {
  id: number;
  title: string;
  description: string;
}

interface ContactItem {
  title: string;
  description: string;
  email: string;
  buttonText: string;
}

interface Service {
  id: number;
  name: string;
  slug: string;
  tagline: string;
  servicesTitle: string;
  services: ServiceItem[];
  certificationsTitle: string;
  certifications: CertificationItem[];
  contact: ContactItem;
  images: string[];
}

const OurServices: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [activeCert, setActiveCert] = useState<number | null>(null);

  // Get the current pathname
  const pathname = usePathname();

  // Extract slug from pathname (e.g., "/our-services/engineering-analysis" -> "engineering-analysis")
  const slug = pathname.split("/").pop() || "";

  // Find the service that matches the slug
  const service = serviceData.find((s) => s.slug === slug);

  // If no service is found, render a fallback
  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-800">
            Service Not Found
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            The service you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-800">
            {service.name}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {service.tagline}
          </p>
        </div>

        {/* Images Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={image}
                  alt={`${service.name} image ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-10">
            {service.servicesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.services.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setActiveService(item.id)}
                onMouseLeave={() => setActiveService(null)}
                className={`p-6 rounded-lg bg-white shadow-md border border-gray-200 transition-all duration-300 ${
                  activeService === item.id ? "shadow-lg border-blue-300" : ""
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-10">
            {service.certificationsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.certifications.map((cert) => (
              <div
                key={cert.id}
                onMouseEnter={() => setActiveCert(cert.id)}
                onMouseLeave={() => setActiveCert(null)}
                className={`p-6 rounded-lg bg-white shadow-md border border-gray-200 transition-all duration-300 ${
                  activeCert === cert.id ? "shadow-lg border-blue-300" : ""
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {cert.title}
                </h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            {service.contact.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            {service.contact.description}
          </p>
          <a
            href={`mailto:${service.contact.email}`}
            className="inline-block px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {service.contact.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
