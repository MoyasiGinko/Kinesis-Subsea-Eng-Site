// components/layout/ServiceLayout.tsx
import React from "react";
import ServiceSidebar from "./ServiceSidebar";
import ServiceBanner from "../../ServiceBanner";

interface ServiceLayoutProps {
  children: React.ReactNode;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-500 shadow">
        <ServiceBanner />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area - 70% */}
          <div className="w-full lg:w-[70%]">{children}</div>

          {/* Sidebar - 30% */}
          <div className="w-full lg:w-[30%]">
            <ServiceSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;
