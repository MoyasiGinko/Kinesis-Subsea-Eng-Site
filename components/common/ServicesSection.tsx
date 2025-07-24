"use client";
import React, { useState } from "react";
import { ArrowRight, Zap, Wrench } from "lucide-react";

export default function HoverCardsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: "Turbine Wind Plant Solutions",
      description:
        "Comprehensive services for wind turbine plant development, operation, and optimization with cutting-edge technology.",
      icon: <Zap className="w-10 h-10" />,
      features: [
        "Site Assessment & Feasibility",
        "Turbine Selection & Sizing",
        "Grid Integration",
        "Performance Monitoring",
      ],
      color: "from-blue-600 to-cyan-500",
      backgroundImage:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1920&h=1080&fit=crop",
    },
    {
      title: "Subsea Engineering",
      description:
        "Specialized engineering for subsea systems, including design, installation, and maintenance of complex underwater infrastructure.",
      icon: <Wrench className="w-10 h-10" />,
      features: [
        "Subsea System Design",
        "Installation & Commissioning",
        "Integrity Management",
        "Remote Operations",
      ],
      color: "from-orange-600 to-red-500",
      backgroundImage:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop",
    },
  ];

  return (
    <section className="relative h-screen max-h-[800px] overflow-hidden">
      {/* Dynamic Background Images */}
      {services.map((service, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            hoveredCard === index
              ? "opacity-20 scale-105"
              : "opacity-0 scale-100"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${service.backgroundImage}')` }}
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
      ))}

      {/* Static Background */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          hoveredCard === null ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="relative z-10 h-full flex">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-1/2 h-full cursor-pointer transition-all duration-500"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Card Content */}
            <div className="h-full flex flex-col justify-center items-center p-16 bg-white/5 backdrop-blur-sm border-r border-white/10 hover:bg-white/10 transition-all duration-500 relative">
              {/* Subtle Border Effect */}
              <div
                className={`absolute inset-0 opacity-0 transition-opacity duration-500 bg-gradient-to-r ${
                  service.color
                } ${hoveredCard === index ? "opacity-100" : ""}`}
                style={{
                  background: `linear-gradient(135deg, ${
                    service.color.includes("blue")
                      ? "rgba(59, 130, 246, 0.1)"
                      : "rgba(249, 115, 22, 0.1)"
                  } 0%, transparent 50%)`,
                }}
              />

              {/* Content Container */}
              <div className="relative z-10 w-full max-w-lg text-center">
                {/* Icon */}
                <div className="mb-8">
                  <div
                    className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${service.color} text-white shadow-2xl transition-all duration-300`}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List - Shows on Hover */}
                <div
                  className={`mb-8 transition-all duration-700 ease-out ${
                    hoveredCard === index
                      ? "max-h-64 opacity-100 transform translate-y-0"
                      : "max-h-0 opacity-0 transform translate-y-4 overflow-hidden"
                  }`}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h4 className="text-white text-lg font-semibold mb-4 text-left">
                      Key Services
                    </h4>
                    <ul className="space-y-3 text-left">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className={`flex items-start gap-3 text-slate-300 transition-all duration-500 ${
                            hoveredCard === index
                              ? "opacity-100 transform translate-x-0"
                              : "opacity-0 transform translate-x-4"
                          }`}
                          style={{
                            transitionDelay: `${200 + featureIndex * 100}ms`,
                          }}
                        >
                          <div
                            className={`flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-r ${service.color} mt-1.5`}
                          />
                          <span className="font-medium leading-tight">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Read More Button */}
                <button
                  className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${service.color} text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-xl transform shadow-lg border border-white/20 relative overflow-hidden group`}
                >
                  <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative z-10 text-lg">Read More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                </button>
              </div>

              {/* Professional Corner Accents */}
              <div className="absolute top-8 left-8">
                <div className="w-12 h-0.5 bg-gradient-to-r from-white/30 to-transparent"></div>
                <div className="w-0.5 h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
              </div>

              <div className="absolute bottom-8 right-8">
                <div className="w-12 h-0.5 bg-gradient-to-l from-white/30 to-transparent"></div>
                <div className="w-0.5 h-12 bg-gradient-to-t from-white/30 to-transparent ml-auto"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
