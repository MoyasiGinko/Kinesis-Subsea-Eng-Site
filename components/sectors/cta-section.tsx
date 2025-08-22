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
    <section className="bg-gradient-to-r from-emerald-400 to-green-400 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          {/* Expert Insights Section */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Expert industry insights and news
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-md">
              Sign up to get our latest insights and papers, plus 2H news,
              events and more.
            </p>
            <CTAButton onClick={handleSignUp}>Sign up</CTAButton>
          </div>

          {/* Talk to Us Section */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Talk to us about your project
            </h2>
            <div className="pt-8">
              <CTAButton onClick={handleGetInTouch}>Get in touch</CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
