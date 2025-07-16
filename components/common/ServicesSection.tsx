"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Play,
  Zap,
  Wrench,
  Settings,
  ChevronRight,
  Target,
  Award,
  TrendingUp,
  Sparkles,
  Flame,
  Star,
} from "lucide-react";

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [electricFlow, setElectricFlow] = useState(0);
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
      pathIcon: <Target className="w-5 h-5" />,
      phase: "Discovery",
      accentColor: "blue",
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
      pathIcon: <Award className="w-5 h-5" />,
      phase: "Implementation",
      accentColor: "orange",
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
      pathIcon: <TrendingUp className="w-5 h-5" />,
      phase: "Optimization",
      accentColor: "emerald",
    },
  ];

  const floatingElements = [
    {
      icon: <Sparkles className="w-4 h-4" />,
      delay: 0,
      color: "text-blue-400",
    },
    { icon: <Flame className="w-4 h-4" />, delay: 2, color: "text-orange-400" },
    { icon: <Star className="w-4 h-4" />, delay: 4, color: "text-emerald-400" },
    { icon: <Zap className="w-4 h-4" />, delay: 1, color: "text-purple-400" },
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

    // Animate electric flow
    const flowInterval = setInterval(() => {
      setElectricFlow((prev) => (prev + 1) % 100);
    }, 50);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(flowInterval);
    };
  }, []);

  const ElectricZigzagPath = () => (
    <div className="absolute left-1/2 top-0 bottom-0 w-2 -translate-x-1/2 z-0">
      <svg
        className="w-full h-full"
        viewBox="0 0 200 100"
        preserveAspectRatio="none"
      >
        {/* Main Zigzag Path */}
        <path
          d="M100 2 L100 8 L160 15 L40 22 L160 29 L40 36 L160 43 L40 50 L160 57 L40 64 L160 71 L40 78 L160 85 L40 92 L100 98"
          stroke="rgba(59, 130, 246, 0.3)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="3,3"
        />

        {/* Electric Flow Animation */}
        <path
          d="M100 2 L100 8 L160 15 L40 22 L160 29 L40 36 L160 43 L40 50 L160 57 L40 64 L160 71 L40 78 L160 85 L40 92 L100 98"
          stroke="url(#electricGradient)"
          strokeWidth="4"
          fill="none"
          strokeDasharray="15,10"
          strokeDashoffset={`${-electricFlow * 2}`}
          className="drop-shadow-lg"
        />

        {/* Electric Bolts */}
        <path
          d="M100 2 L100 8 L160 15 L40 22 L160 29 L40 36 L160 43 L40 50 L160 57 L40 64 L160 71 L40 78 L160 85 L40 92 L100 98"
          stroke="rgba(255, 255, 0, 0.9)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,15"
          strokeDashoffset={`${-electricFlow * 3}`}
          className="animate-pulse"
        />

        {/* Glowing Effect */}
        <path
          d="M100 2 L100 8 L160 15 L40 22 L160 29 L40 36 L160 43 L40 50 L160 57 L40 64 L160 71 L40 78 L160 85 L40 92 L100 98"
          stroke="rgba(59, 130, 246, 0.6)"
          strokeWidth="8"
          fill="none"
          strokeDasharray="8,12"
          strokeDashoffset={`${-electricFlow * 1.5}`}
          className="blur-sm opacity-70"
        />

        <defs>
          <linearGradient
            id="electricGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(59, 130, 246, 1)" />
            <stop offset="25%" stopColor="rgba(255, 255, 0, 1)" />
            <stop offset="50%" stopColor="rgba(16, 185, 129, 1)" />
            <stop offset="75%" stopColor="rgba(249, 115, 22, 1)" />
            <stop offset="100%" stopColor="rgba(147, 51, 234, 1)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Electric Sparks */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((spark) => (
        <div
          key={spark}
          className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-ping"
          style={{
            top: `${5 + spark * 7.5}%`,
            left: spark % 2 === 0 ? "50%" : spark % 4 === 1 ? "80%" : "20%",
            animationDelay: `${spark * 0.2}s`,
            animationDuration: "0.6s",
          }}
        />
      ))}

      {/* Path Nodes */}
      {services.map((service, index) => (
        <div
          key={index}
          className={`absolute w-10 h-10 rounded-full bg-gradient-to-r ${
            service.color
          } border-2 border-white shadow-lg transition-all duration-500 ${
            hoveredService === index ? "scale-125 shadow-xl" : ""
          }`}
          style={{
            top: `${20 + index * 30}%`,
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/40 to-blue-400/40 animate-pulse" />
          <div className="relative z-10 w-full h-full rounded-full bg-gradient-to-r from-white/20 to-white/40 flex items-center justify-center">
            {service.pathIcon}
          </div>

          {/* Electric Ring */}
          <div
            className="absolute -inset-2 rounded-full border-2 border-yellow-400/60 animate-spin"
            style={{ animationDuration: "3s" }}
          />

          {/* Power Indicator */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse shadow-lg" />
        </div>
      ))}

      {/* Flowing Electric Particles */}
      {[0, 1, 2, 3, 4, 5, 6].map((particle) => (
        <div
          key={particle}
          className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-full animate-pulse shadow-lg"
          style={{
            top: `${(electricFlow + particle * 15) % 100}%`,
            left: `${
              50 + Math.sin((electricFlow + particle * 15) * 0.12) * 30
            }%`,
            animationDelay: `${particle * 0.15}s`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );

  return (
    <section ref={sectionRef} className="relative py-32 px-4 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
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

        {/* Floating Particles */}
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.color} animate-bounce`}
            style={{
              top: `${20 + index * 20}%`,
              left: `${10 + index * 25}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: "3s",
            }}
          >
            {element.icon}
          </div>
        ))}

        {/* Enhanced Gradient Orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl transition-all duration-1000 animate-pulse"
          style={{
            transform: `translateY(${mousePosition.y * 0.05}px) translateX(${
              mousePosition.x * 0.05
            }px)`,
            animationDuration: "4s",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-600/20 rounded-full blur-3xl transition-all duration-1000 animate-pulse"
          style={{
            transform: `translateY(${mousePosition.y * -0.05}px) translateX(${
              mousePosition.x * -0.05
            }px)`,
            animationDelay: "2s",
            animationDuration: "4s",
          }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-orange-600/15 rounded-full blur-3xl transition-all duration-1000 animate-pulse"
          style={{
            transform: `translateY(${mousePosition.y * 0.03}px) translateX(${
              mousePosition.x * 0.03
            }px)`,
            animationDelay: "1s",
            animationDuration: "5s",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-slate-800/40 backdrop-blur-sm rounded-full text-sm font-medium text-slate-200 mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Play className="w-4 h-4 text-blue-400 animate-pulse" />
            Our Core Services
            <div className="ml-2 flex space-x-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>

          <h2
            className={`text-5xl md:text-6xl font-light text-white mb-6 leading-tight transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block">What We</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent font-medium animate-pulse">
              Deliver
            </span>
          </h2>

          {/* Roadmap Navigation */}
          {/* <div
            className={`flex justify-center items-center gap-8 mt-12 mb-16 transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 ${
                  hoveredService === index ? "scale-110" : ""
                }`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div
                  className={`p-3 rounded-full bg-gradient-to-r ${service.color} shadow-lg`}
                >
                  {service.pathIcon}
                </div>
                <span className="text-sm text-slate-300 font-medium">
                  {service.phase}
                </span>
                {index < services.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-slate-500 mt-2" />
                )}
              </div>
            ))}
          </div> */}
        </div>

        {/* Services with Electric Zigzag Path */}
        <div className="relative">
          <ElectricZigzagPath />

          <div className="flex flex-col gap-32 relative z-10">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative group transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                } ${index % 2 === 0 ? "md:mr-20" : "md:ml-20"}`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Enhanced Main Card Container */}
                <div
                  className={`relative bg-slate-900/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-slate-800/50 transition-all duration-500 hover:shadow-3xl ${
                    hoveredService === index
                      ? "scale-[1.02] border-slate-700/50 shadow-2xl"
                      : ""
                  }`}
                >
                  {/* Animated Border Effect */}
                  <div
                    className={`absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${service.color} p-px rounded-3xl`}
                  >
                    <div className="w-full h-full bg-slate-900/90 rounded-3xl" />
                  </div>

                  {/* Pulse Effect */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${service.color} animate-pulse rounded-3xl`}
                  />

                  {/* Content Layout */}
                  <div
                    className={`flex flex-col lg:flex-row ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    } min-h-[500px]`}
                  >
                    {/* Enhanced Image Side */}
                    <div className="relative lg:w-1/2 h-80 lg:h-auto overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${service.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/60 to-slate-800/20" />

                      {/* Enhanced Technical Grid Pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div
                          className="absolute inset-0 bg-repeat transition-all duration-700 group-hover:opacity-30"
                          style={{
                            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
                            backgroundSize: "20px 20px",
                            transform: `translateX(${
                              mousePosition.x * 0.02
                            }px) translateY(${mousePosition.y * 0.02}px)`,
                          }}
                        />
                      </div>

                      {/* Enhanced Floating Icon */}
                      {/* <div
                        className={`absolute top-8 left-8 p-4 rounded-xl bg-gradient-to-r ${service.color} text-white shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20 group-hover:animate-pulse`}
                      >
                        {service.icon}
                      </div> */}

                      {/* Enhanced Image Overlay Content */}
                      {/* <div className="absolute bottom-8 left-8 right-8">
                        <div className="mb-4">
                          <h4 className="text-white text-lg font-semibold mb-3 flex items-center gap-2">
                            Key Capabilities
                            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.features.map((feature, featureIndex) => (
                              <span
                                key={featureIndex}
                                className="px-3 py-1.5 bg-slate-800/80 backdrop-blur-sm rounded-lg text-sm text-slate-200 font-medium border border-slate-700/50 hover:bg-slate-700/80 transition-all duration-200 hover:scale-105"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div> */}

                      {/* Enhanced Technical Corner Accent */}
                      <div className="absolute top-0 left-0 w-16 h-16">
                        <div className="absolute top-4 left-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent animate-pulse"></div>
                        <div className="absolute top-4 left-4 w-0.5 h-8 bg-gradient-to-b from-blue-400 to-transparent animate-pulse"></div>
                      </div>
                    </div>

                    {/* Enhanced Content Side */}
                    <div className="flex flex-col justify-center lg:w-1/2 p-12 lg:p-16 bg-slate-900/40 relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div
                          className="absolute inset-0 bg-repeat"
                          style={{
                            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                            backgroundSize: "30px 30px",
                          }}
                        />
                      </div>

                      {/* Enhanced Professional Header */}
                      <div className="flex items-center gap-3 mb-4 relative z-10">
                        <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 animate-pulse"></div>
                        <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">
                          {index === 0
                            ? "Strategic"
                            : index === 1
                            ? "Technical"
                            : "Operational"}{" "}
                          Excellence
                        </span>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" />
                      </div>

                      <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 group-hover:text-slate-100 transition-colors duration-300 relative z-10">
                        {service.title}
                      </h3>

                      <p className="text-slate-300 text-xl mb-8 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed relative z-10">
                        {service.description}
                      </p>

                      {/* Enhanced Professional Feature List */}
                      <div className="mb-8 relative z-10">
                        <h4 className="text-slate-200 text-lg font-semibold mb-4 flex items-center gap-2">
                          Core Services
                          <Star className="w-4 h-4 text-yellow-400 animate-pulse" />
                        </h4>
                        <ul className="space-y-4">
                          {service.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start gap-3 text-slate-300 group-hover:text-slate-200 transition-colors duration-300"
                            >
                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                              </div>
                              <span className="text-lg font-medium">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Enhanced Industry Standards Badge */}
                      <div className="mb-8 p-4 bg-slate-800/60 rounded-xl border border-slate-700/50 group-hover:bg-slate-700/60 transition-colors duration-300 relative z-10">
                        <div className="flex items-center gap-2 text-slate-300">
                          <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                          <span className="text-sm font-medium">
                            {index === 0
                              ? "ISO 9001 Certified Consulting"
                              : index === 1
                              ? "ASME & IEEE Standards Compliant"
                              : "IEC 61850 & NERC CIP Compliant"}
                          </span>
                        </div>
                      </div>

                      {/* Enhanced CTA Button */}
                      <button
                        className={`group/btn relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r ${
                          service.color
                        } text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 transform w-fit text-lg shadow-xl border border-white/10 ${
                          hoveredService === index
                            ? "translate-y-0 opacity-100"
                            : "translate-y-1 opacity-90"
                        } relative z-10 overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                        <span className="relative z-10">Explore Solutions</span>
                        <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Mouse Followers */}
      <div
        className="absolute w-32 h-32 bg-blue-400/10 rounded-full blur-2xl pointer-events-none transition-all duration-700 animate-pulse"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </section>
  );
}
