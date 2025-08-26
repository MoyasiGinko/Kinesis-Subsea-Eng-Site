// components/sidebar/ServiceSidebar.tsx
import React from "react";
import ServiceList from "./ServiceList";
import CtaForm from "./CtaForm";
import SidebarWidget from "./SidebarWidget";

const ServiceSidebar: React.FC = () => {
  return (
    <div className="space-y-6">
      <ServiceList />
      <CtaForm />
      <SidebarWidget
        type="testimonial"
        title="Client Testimonial"
        content="Working with this team has been exceptional. They delivered exactly what we needed on time and within budget."
        author="Sarah Johnson, CEO"
      />
      <SidebarWidget
        type="contact"
        title="Get In Touch"
        content="Ready to discuss your project? Contact our expert team today."
      />
      <SidebarWidget
        type="download"
        title="Service Brochure"
        content="Download our comprehensive service guide and pricing information."
        downloadText="Download PDF"
      />
    </div>
  );
};

export default ServiceSidebar;
