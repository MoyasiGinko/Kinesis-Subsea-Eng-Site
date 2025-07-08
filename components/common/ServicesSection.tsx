"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Play,
  Zap,
  Wrench,
  Settings,
  ChevronRight,
} from "lucide-react";

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement | null>(null);

  const services = [
    {
      title: "Consulting",
      description:
        "Strategic advisory and technical consulting services across the energy sector.",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Market Analysis",
        "Technology Strategy",
        "Regulatory Compliance",
        "Risk Assessment",
      ],
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "Engineering & Projects",
      description: "End-to-end project delivery from concept to commissioning.",
      image:
        "https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Wrench className="w-6 h-6" />,
      features: [
        "Design & Planning",
        "Project Management",
        "Quality Assurance",
        "Commissioning",
      ],
      color: "from-orange-600 to-red-500",
    },
    {
      title: "Operations",
      description: "Asset optimization and operational excellence solutions.",
      image:
        "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Settings className="w-6 h-6" />,
      features: [
        "Performance Optimization",
        "Maintenance Planning",
        "Digital Solutions",
        "Training",
      ],
      color: "from-emerald-600 to-teal-500",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-4 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0 bg-grid-pattern bg-repeat transition-all duration-1000"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
              transform: `translateX(${mousePosition.x * 0.01}px) translateY(${
                mousePosition.y * 0.01
              }px)`,
            }}
          />
        </div>

        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translateY(${mousePosition.y * 0.05}px) translateX(${
              mousePosition.x * 0.05
            }px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-600/20 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translateY(${mousePosition.y * -0.05}px) translateX(${
              mousePosition.x * -0.05
            }px)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-slate-800/40 backdrop-blur-sm rounded-full text-sm font-medium text-slate-200 mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Play className="w-4 h-4 text-blue-400" />
            Our Core Services
          </div>

          <h2
            className={`text-5xl md:text-6xl font-light text-white mb-6 leading-tight transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block">What We</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent font-medium">
              Deliver
            </span>
          </h2>

          {/* <p
            className={`text-xl text-slate-300 max-w-2xl mx-auto font-light transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Comprehensive energy solutions that drive innovation, efficiency,
            and sustainable growth across the entire energy value chain.
          </p> */}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${400 + index * 150}ms`,
              }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Image Container */}
              <div className="relative m-1 rounded-xl h-80 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />

                {/* Floating Icon */}
                <div className="absolute top-6 left-6">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${service.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Play Button Overlay */}
                {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div> */}
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-slate-100 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features List */}
                {/* <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className={`flex items-center gap-3 text-sm text-slate-400 transition-all duration-300 delay-${
                        featureIndex * 50
                      } ${
                        hoveredService === index
                          ? "opacity-100 translate-x-0"
                          : "opacity-70 translate-x-2"
                      }`}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div> */}

                {/* CTA Button */}
                <div className="flex items-center justify-between">
                  <button
                    className={`group/btn relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${
                      service.color
                    } text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 transform ${
                      hoveredService === index
                        ? "translate-y-0 opacity-100"
                        : "translate-y-2 opacity-80"
                    }`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Gradient Border on Hover */}
              <div
                className={`absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${service.color} p-px`}
              >
                <div className="w-full h-full bg-slate-900/80 rounded-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div
          className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-slate-300 mb-6">
            Ready to transform your energy operations?
          </p>
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-xl font-medium hover:bg-gradient-to-r hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div> */}
      </div>

      {/* Mouse Follower */}
      <div
        className="absolute w-32 h-32 bg-blue-400/10 rounded-full blur-2xl pointer-events-none transition-all duration-700"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </section>
  );
}
