"use client"
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Zap, Droplets, Sparkles } from "lucide-react";

export default function ProfessionalServiceSection() {
  const [activeService, setActiveService] = useState(0);
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
      backgroundImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2125&auto=format&fit=crop",
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
      backgroundImage: "https://images.unsplash.com/photo-1466611653911-95081537b5d7?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Advanced Engineering",
      subtitle: "Innovation • Technology • Future",
      description: "Pioneering engineering solutions that push technological boundaries, delivering exceptional results through advanced methodologies and innovative approaches.",
      icon: <Sparkles className="w-6 h-6" />,
      features: [
        "Digital Twin Technology",
        "AI-Powered Analytics",
        "Automation Systems",
        "Advanced Materials",
        "Predictive Maintenance",
        "Industry 4.0 Integration",
      ],
      primaryColor: "#7c3aed",
      secondaryColor: "#8b5cf6",
      accentColor: "#a78bfa",
      backgroundImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2125&auto=format&fit=crop",
    },
  ];

  const currentService = services[activeService];

  return (
    <div ref={containerRef} className="h-screen bg-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 transition-all duration-700 ease-in-out">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
          style={{
            backgroundImage: `url(${currentService.backgroundImage})`,
            transform: `scale(1.05)`,
          }}
        />
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
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="flex w-full max-w-7xl mx-auto">
          {/* Left Navigation - 30% */}
          <div className="w-[30%] h-full flex flex-col justify-center px-12 bg-white/90 backdrop-blur-sm border-r border-gray-200/50">
            <div className="space-y-2">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                    activeService === index
                      ? 'bg-white shadow-lg border border-gray-200/50'
                      : 'hover:bg-gray-50/50 border border-transparent'
                  }`}
                  onMouseEnter={() => setActiveService(index)}
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
                        className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
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
                    <h3 className={`text-xl font-semibold mb-1 transition-colors duration-300 ${
                      activeService === index ? 'text-gray-900' : 'text-gray-700'
                    }`}>
                      {service.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-sm text-gray-500 font-medium">
                      {service.subtitle}
                    </p>

                    {/* Active Indicator */}
                    {activeService === index && (
                      <div className="mt-3">
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Content Area - 70% */}
          <div className="w-[70%] h-full flex items-center px-16">
            <div className="max-w-3xl">
              {/* Content Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
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
                  <div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
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

                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                  {currentService.description}
                </p>
              </div>

              {/* Features Grid */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Expertise</h3>
                <div className="grid grid-cols-2 gap-4">
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
              <div className="flex items-center gap-4">
                <button 
                  className="px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-3"
                  style={{
                    background: `linear-gradient(135deg, ${currentService.primaryColor}, ${currentService.secondaryColor})`,
                  }}
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <button className="px-8 py-4 rounded-xl font-semibold text-gray-700 bg-white/60 backdrop-blur-sm border border-gray-200/50 transition-all duration-300 hover:bg-white/80 hover:shadow-md">
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