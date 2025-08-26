// components/service/ServiceContent.tsx
import React from "react";
import { Service } from "@/types/service";
import Image from "next/image";

interface ServiceContentProps {
  service: Service;
}

const ServiceContent: React.FC<ServiceContentProps> = ({ service }) => {
  return (
    <div className="bg-white shadow-sm border border-gray-200">
      {/* Header */}
      <div className="px-8 py-6 border-b border-gray-200">
        {/* <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-primary-blue text-white text-sm font-medium uppercase tracking-wide">
            {service.category}
          </span>
        </div> */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {service.title}
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Service Image */}
      <div className="px-8 py-6 border-b border-gray-200">
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
          {service.image ? (
            <div className="relative w-full h-64">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-300 mx-auto mb-3"></div>
              <p className="text-gray-500 font-medium">
                Service Image Placeholder
              </p>
              <p className="text-sm text-gray-400">1200x600 recommended</p>
            </div>
          )}
        </div>
      </div>

      {/* Features List */}
      <div className="px-8 py-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary-blue mt-2 flex-shrink-0"></div>
              <span className="text-gray-700 leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="px-8 py-6 border-t border-gray-200 bg-gray-50">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          Why Choose This Service?
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Our comprehensive approach ensures maximum efficiency and reliability.
          With over a decade of experience in the industry, we deliver solutions
          that exceed expectations and provide long-term value for your
          business.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-blue mb-1">
              99.9%
            </div>
            <div className="text-sm text-gray-600">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-blue mb-1">
              24/7
            </div>
            <div className="text-sm text-gray-600">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-blue mb-1">
              500+
            </div>
            <div className="text-sm text-gray-600">Satisfied Clients</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
