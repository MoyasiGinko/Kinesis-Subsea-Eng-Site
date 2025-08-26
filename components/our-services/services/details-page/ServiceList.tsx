// components/sidebar/ServiceList.tsx
import React from "react";
import Link from "next/link";

interface ServiceItem {
  title: string;
  slug: string;
  isActive?: boolean;
}

const ServiceList: React.FC = () => {
  const services: ServiceItem[] = [
    { title: "Web Development", slug: "web-development", isActive: true },
    { title: "Mobile Applications", slug: "mobile-applications" },
    { title: "Cloud Solutions", slug: "cloud-solutions" },
    { title: "Digital Marketing", slug: "digital-marketing" },
    { title: "UI/UX Design", slug: "ui-ux-design" },
    { title: "Data Analytics", slug: "data-analytics" },
    { title: "Cybersecurity", slug: "cybersecurity" },
    { title: "Consulting Services", slug: "consulting-services" },
  ];

  return (
    <div className="bg-white shadow-sm border border-gray-200">
      <div className="px-4 py-4 border-b border-gray-200">
        <h3 className="text-lg font-bold text-gray-900">Our Services</h3>
      </div>
      <div className="p-0">
        {services.map((service, index) => (
          <Link
            key={index}
            href={`/services/${service.slug}`}
            className={`block px-4 py-3 border-b border-gray-100 last:border-b-0 transition-colors duration-200 ${
              service.isActive
                ? "bg-blue-50 text-blue-700 border-l-4 border-l-blue-600"
                : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
            }`}
          >
            <span className="font-medium">{service.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
