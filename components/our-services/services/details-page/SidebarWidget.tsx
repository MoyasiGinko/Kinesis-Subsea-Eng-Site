// components/sidebar/SidebarWidget.tsx
import React from "react";

interface SidebarWidgetProps {
  type: "testimonial" | "contact" | "download";
  title: string;
  content: string;
  author?: string;
  downloadText?: string;
}

const SidebarWidget: React.FC<SidebarWidgetProps> = ({
  type,
  title,
  content,
  author,
  downloadText,
}) => {
  const renderWidget = () => {
    switch (type) {
      case "testimonial":
        return (
          <div className="bg-blue-50 p-4">
            <div className="text-2xl text-primary-blue mb-2">"</div>
            <p className="text-gray-700 italic mb-3 text-sm leading-relaxed">
              {content}
            </p>
            {author && (
              <div className="text-sm font-medium text-gray-900">
                — {author}
              </div>
            )}
          </div>
        );

      case "contact":
        return (
          <div className="p-4">
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              {content}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary-blue"></span>
                <span className="text-gray-600">Phone: +1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary-blue"></span>
                <span className="text-gray-600">
                  Email: contact@company.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary-blue"></span>
                <span className="text-gray-600">Hours: Mon-Fri 9AM-6PM</span>
              </div>
            </div>
          </div>
        );

      case "download":
        return (
          <div className="p-4">
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              {content}
            </p>
            <button className="w-full bg-gray-800 text-white py-2 px-4 text-sm font-medium hover:bg-gray-900 transition-colors">
              {downloadText || "Download"}
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white shadow-sm border border-gray-200">
      <div className="px-4 py-3 border-b border-gray-200">
        <h4 className="font-bold text-gray-900">{title}</h4>
      </div>
      {renderWidget()}
    </div>
  );
};

export default SidebarWidget;
