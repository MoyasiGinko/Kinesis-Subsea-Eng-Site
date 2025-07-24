"use client";
import React, { useState, useRef } from "react";
import {
  ArrowRight,
  Zap,
  Wrench,
  Target,
  Award,
  Star,
  Sparkles,
} from "lucide-react";

export default function HoverCardsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const services = [
    {
      title: "Turbine Wind Plant Solutions",
      description:
        "Comprehensive services for wind turbine plant development, operation, and optimization with cutting-edge technology.",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Site Assessment & Feasibility",
        "Turbine Selection & Sizing",
        "Grid Integration",
        "Performance Monitoring",
      ],
      color: "from-blue-600 to-cyan-500",
      backgroundImage:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1920&h=1080&fit=crop",
      accentColor: "blue",
    },
    {
      title: "Subsea Engineering",
      description:
        "Specialized engineering for subsea systems, including design, installation, and maintenance of complex underwater infrastructure.",
      icon: <Wrench className="w-8 h-8" />,
      features: [
        "Subsea System Design",
        "Installation & Commissioning",
        "Integrity Management",
        "Remote Operations",
      ],
      color: "from-orange-600 to-red-500",
      backgroundImage:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop",
      accentColor: "orange",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 overflow-hidden min-h-screen flex items-center"
    >
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

      {/* Static Background for when nothing is hovered */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          hoveredCard === null ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-repeat animate-pulse"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full text-sm font-medium text-slate-300 mb-8 border border-white/10">
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
            Our Core Services
            <div className="ml-2 flex space-x-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
            <span className="block">What We</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent font-medium">
              Deliver
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive engineering solutions for renewable energy and subsea
            infrastructure
          </p>
        </div>

        {/* Cards Row */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 cursor-pointer ${
                hoveredCard === index
                  ? "scale-105 z-20"
                  : hoveredCard !== null
                  ? "scale-95 opacity-75"
                  : "scale-100"
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                {/* Animated Border Effect */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${service.color} p-px rounded-3xl`}
                >
                  <div className="w-full h-full bg-slate-900/90 rounded-3xl" />
                </div>

                {/* Card Content */}
                <div className="relative z-10 p-8 lg:p-12 min-h-[600px] flex flex-col">
                  {/* Icon Header */}
                  <div className="mb-8">
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white shadow-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 group-hover:text-slate-100 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-lg mb-8 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-slate-200 text-lg font-semibold mb-4 flex items-center gap-2">
                      Key Features
                      <Star className="w-4 h-4 text-yellow-400 animate-pulse" />
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-3 text-slate-300 group-hover:text-slate-200 transition-colors duration-300"
                        >
                          <div
                            className={`flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r ${service.color} group-hover:scale-125 transition-transform duration-300`}
                          />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Industry Badge */}
                  <div className="mb-8 p-4 bg-white/5 rounded-xl border border-white/5 group-hover:bg-white/10 transition-colors duration-300">
                    <div className="flex items-center gap-2 text-slate-300">
                      <div
                        className={`w-3 h-3 bg-gradient-to-r ${service.color} rounded-full animate-pulse`}
                      />
                      <span className="text-sm font-medium">
                        {index === 0
                          ? "ISO 9001 Certified Solutions"
                          : "ASME & IEEE Standards Compliant"}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${service.color} text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 transform w-fit shadow-lg border border-white/10 overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                    <span className="relative z-10">Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" />
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${service.color} rounded-3xl blur-xl`}
                />
              </div>

              {/* External Glow */}
              <div
                className={`absolute -inset-4 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r ${service.color} rounded-3xl blur-2xl -z-10`}
              />
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 text-slate-400">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
            <span className="text-sm font-medium">
              Hover to explore our capabilities
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
