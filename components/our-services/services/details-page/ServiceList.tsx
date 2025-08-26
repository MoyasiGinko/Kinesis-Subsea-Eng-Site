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
    { title: "Subsea Engineering", slug: "subsea-engineering", isActive: true },
    { title: "Oil & Gas Rig Services", slug: "oil-gas-rig" },
    { title: "Renewables", slug: "renewables-subsea" },
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
            href={`/our-services/${service.slug}`}
            className={`block px-4 py-3 border-b border-gray-100 last:border-b-0 transition-colors duration-200 ${
              service.isActive
                ? "bg-blue-50 text-blue-700 border-l-4 border-l-primary-blue"
                : "text-gray-700 hover:bg-gray-50 hover:text-primary-blue"
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
