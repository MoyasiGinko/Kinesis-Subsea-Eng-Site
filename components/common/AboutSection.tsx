"use client"
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Zap, Droplets, Sparkles } from "lucide-react";

export default function AboutSection() {
  const [activeService, setActiveService] = useState(0);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: React.MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      const handleMouseMoveEvent = (e: MouseEvent) => {
        // Type assertion to convert MouseEvent to React.MouseEvent
        handleMouseMove(e as unknown as React.MouseEvent);
      };
      
      container.addEventListener('mousemove', handleMouseMoveEvent);
      return () => container.removeEventListener('mousemove', handleMouseMoveEvent);
    }
  }, []);

  const services = [
    {
      id: 0,
      title: "Oil & Gas Solutions",
      subtitle: "Upstream • Midstream • Downstream",
      description: "Comprehensive engineering excellence delivering advanced solutions for complex oil and gas operations with proven methodology and cutting-edge technology integration.",
      icon: <Droplets className="w-6 h-6" />,
      features: [
        "Offshore Platform Engineering",
        "Pipeline Infrastructure Design", 
        "Refinery Process Optimization",
        "Environmental Compliance",
        "Asset Integrity Management",
        "Advanced Process Control",
      ],
      primaryColor: "#1e40af",
      secondaryColor: "#3b82f6",
      accentColor: "#60a5fa",
      hoverImage: "/services/service-1-1.jpg",
    },
    {
      id: 1,
      title: "Renewable Energy",
      subtitle: "Wind • Solar • Storage",
      description: "Leading sustainable energy transformation through innovative engineering solutions, advanced grid integration, and next-generation renewable technologies.",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Wind Farm Development",
        "Solar Installation Systems",
        "Energy Storage Solutions", 
        "Grid Integration Technology",
        "Smart Energy Management",
        "Carbon Footprint Reduction",
      ],
      primaryColor: "#059669",
      secondaryColor: "#10b981",
      accentColor: "#34d399",
      hoverImage: "/services/service-1-2.jpg",
    },
    // {
    //   id: 2,
    //   title: "Advanced Engineering",
    //   subtitle: "Innovation • Technology • Future",
    //   description: "Pioneering engineering solutions that push technological boundaries, delivering exceptional results through advanced methodologies and innovative approaches.",
    //   icon: <Sparkles className="w-6 h-6" />,
    //   features: [
    //     "Digital Twin Technology",
    //     "AI-Powered Analytics",
    //     "Automation Systems",
    //     "Advanced Materials",
    //     "Predictive Maintenance",
    //     "Industry 4.0 Integration",
    //   ],
    //   primaryColor: "#7c3aed",
    //   secondaryColor: "#8b5cf6",
    //   accentColor: "#a78bfa",
    //   hoverImage: "/services/service-1-1.jpg",
    // },
  ];

  const currentService = services[activeService];

  return (
    <div ref={containerRef} className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 transition-all duration-700 ease-in-out">
        {/* Faded background wallpaper */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/services/service-bg.jpg')",
          }}
        />
        {/* Service-specific background images */}
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
              activeService === index || hoveredService === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${service.hoverImage})`,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />
      </div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-gray-900" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-8">
        <div className="flex w-full max-w-7xl mx-auto flex-col lg:flex-row">
          {/* Left Navigation - 30% */}
          <div className="w-full lg:w-[30%] h-full flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 bg-white/90 backdrop-blur-sm border-r border-gray-200/50">
            <div className="space-y-2">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  className={`w-full text-left p-4 sm:p-6 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                    activeService === index
                      ? 'bg-white shadow-lg border border-gray-200/50'
                      : 'hover:bg-gray-50/50 border border-transparent'
                  }`}
                  onMouseEnter={() => {
                    setHoveredService(index);
                    setActiveService(index);
                  }}
                  onMouseLeave={() => setHoveredService(null)}
                  style={{
                    borderLeftColor: activeService === index ? service.primaryColor : 'transparent',
                    borderLeftWidth: activeService === index ? '4px' : '4px',
                  }}
                >
                  {/* Background Gradient on Active */}
                  {activeService === index && (
                    <div 
                      className="absolute inset-0 opacity-5"
                      style={{
                        background: `linear-gradient(135deg, ${service.primaryColor}, ${service.secondaryColor})`,
                      }}
                    />
                  )}

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`mb-3 transition-all duration-300 ${
                      activeService === index ? 'transform scale-110' : ''
                    }`}>
                      <div 
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          activeService === index ? 'shadow-md' : ''
                        }`}
                        style={{
                          backgroundColor: activeService === index ? service.primaryColor : '#f8fafc',
                          color: activeService === index ? 'white' : service.primaryColor,
                        }}
                      >
                        {service.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-lg sm:text-xl font-semibold mb-1 transition-colors duration-300 ${
                      activeService === index ? 'text-gray-900' : 'text-gray-700'
                    }`}>
                      {service.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">
                      {service.subtitle}
                    </p>

                    {/* Active Indicator */}
                    {activeService === index && (
                      <div className="mt-2 sm:mt-3">
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Content Area - 70% */}
          <div className="w-full lg:w-[70%] h-full flex items-center px-4 sm:px-5 py-8">
            <div className="max-w-3xl w-full">
              {/* Content Header */}
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${currentService.primaryColor}, ${currentService.secondaryColor})`,
                    }}
                  >
                    <div className="text-white">
                      {currentService.icon}
                    </div>
                  </div>
                  <div className="text-center sm:text-left">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                      {currentService.title}
                    </h1>
                    <div 
                      className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
                      style={{
                        backgroundColor: `${currentService.primaryColor}15`,
                        color: currentService.primaryColor,
                      }}
                    >
                      {currentService.subtitle}
                    </div>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {currentService.description}
                </p>
              </div>

              {/* Features Grid */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Expertise</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentService.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-200/30 transition-all duration-300 hover:shadow-md hover:bg-white/80"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        animation: 'slideInUp 0.6s ease-out forwards',
                      }}
                    >
                      <div 
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: currentService.primaryColor }}
                      />
                      <span className="font-medium text-gray-700 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button 
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-3"
                  style={{
                    background: `linear-gradient(135deg, ${currentService.primaryColor}, ${currentService.secondaryColor})`,
                  }}
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <button className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-gray-700 bg-white/60 backdrop-blur-sm border border-gray-200/50 transition-all duration-300 hover:bg-white/80 hover:shadow-md">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}