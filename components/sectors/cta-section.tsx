"use client";
import React from "react";
import { ChevronRight } from "lucide-react";

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center gap-2 px-6 py-3
        bg-gray-900 text-white font-medium rounded-full
        hover:bg-gray-800 transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-emerald-400
        ${className}
      `}
    >
      {children}
      <ChevronRight className="w-4 h-4" />
    </button>
  );
};

const CTASection: React.FC = () => {
  const handleSignUp = () => {
    // Handle newsletter signup
    console.log("Sign up clicked");
  };

  const handleGetInTouch = () => {
    // Handle get in touch
    console.log("Get in touch clicked");
  };

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 mb-20">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Left side - Stepped content */}
          <div className="col-span-8">
            <div className="relative">
              {/* Main heading with geometric accent */}
              <div className="relative mb-8">
                <div className="absolute -left-6 top-0 w-2 h-full bg-primary-blue"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Ready to optimize your
                  <span className="block text-primary-blue">
                    offshore operations?
                  </span>
                </h2>
              </div>

              {/* Staggered text blocks */}
              <div className="space-y-4 mb-8">
                <div className="bg-blue-50 text-blue-900 p-6 max-w-2xl transform -skew-x-3">
                  <div className="transform skew-x-3">
                    <p className="text-lg">
                      Deploy field-proven engineering solutions that reduce risk
                      and compress project schedules.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-100 text-gray-900 p-6 max-w-xl ml-8 transform -skew-x-3">
                  <div className="transform skew-x-3">
                    <p className="text-lg">
                      Connect with our technical team to discuss your next
                      offshore project.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact-us"
                  className="bg-primary-blue hover:bg-primary-blue-hover text-white px-8 py-4 font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  SCHEDULE CONSULTATION
                </a>
                <a
                  href="/projects"
                  className="border-2 border-gray-900 text-gray-900 hover:bg-gray-100 px-8 py-4 font-bold transition-all duration-300"
                >
                  VIEW CASE STUDIES
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Angular visual element */}
          <div className="col-span-4">
            <div className="relative">
              {/* Layered angular shapes */}
              <div className="relative w-full h-80">
                <div className="absolute top-0 right-0 w-60 h-24 bg-blue-100 transform -skew-y-6"></div>
                <div className="absolute top-16 right-8 w-56 h-20 bg-blue-200 transform -skew-y-6"></div>
                {/* <div className="absolute top-28 right-12 w-32 h-16 bg-blue-100 shadow-sm transform -skew-y-6"></div> */}
                <div className="absolute bottom-20 right-0 w-72 h-28 bg-gray-100 transform -skew-y-6"></div>
                <div className="absolute bottom-0 right-12 w-56 h-24 bg-gray-200 transform -skew-y-6"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        {/* <div className="mt-16 flex items-center">
          <div className="flex-1 h-px bg-gray-200"></div>
          <div className="mx-4">
            <div className="w-4 h-4 bg-primary-blue transform rotate-45"></div>
          </div>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div> */}
      </div>
    </div>
  );
};

export default CTASection;
