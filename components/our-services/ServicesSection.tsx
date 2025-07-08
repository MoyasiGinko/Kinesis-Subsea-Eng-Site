import React, { useState, useEffect, useRef } from "react";
import {
  Cpu,
  Database,
  Cloud,
  Shield,
  Zap,
  Cog,
  Settings,
  Wrench,
  Monitor,
  Network,
  Code,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const serviceData = {
    title: "Comprehensive Engineering Solutions",
    description:
      "From concept to deployment, we deliver cutting-edge technology solutions that drive innovation and accelerate your business growth. Our expert team combines deep technical knowledge with industry best practices.",
    buttonText: "Schedule Consultation",
    services: [
      {
        id: 1,
        icon: <Cpu className="w-6 h-6" />,
        title: "System Architecture",
        description:
          "Design scalable, high-performance systems that grow with your business needs and handle enterprise-level demands.",
        color: "from-blue-500 to-cyan-500",
      },
      {
        id: 2,
        icon: <Database className="w-6 h-6" />,
        title: "Data Engineering",
        description:
          "Build robust data pipelines, optimize databases, and implement analytics solutions for data-driven decisions.",
        color: "from-emerald-500 to-teal-500",
      },
      {
        id: 3,
        icon: <Cloud className="w-6 h-6" />,
        title: "Cloud Solutions",
        description:
          "Migrate, deploy, and optimize cloud infrastructure with best-in-class security and performance standards.",
        color: "from-purple-500 to-indigo-500",
      },
      {
        id: 4,
        icon: <Shield className="w-6 h-6" />,
        title: "Security & Compliance",
        description:
          "Implement comprehensive security frameworks and ensure regulatory compliance across all systems.",
        color: "from-red-500 to-orange-500",
      },
      {
        id: 5,
        icon: <Zap className="w-6 h-6" />,
        title: "Performance Optimization",
        description:
          "Analyze and enhance system performance, reduce latency, and improve overall efficiency.",
        color: "from-yellow-500 to-amber-500",
      },
      {
        id: 6,
        icon: <Network className="w-6 h-6" />,
        title: "DevOps & Integration",
        description:
          "Streamline development workflows, automate deployments, and integrate complex systems seamlessly.",
        color: "from-pink-500 to-rose-500",
      },
    ],
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-grid-pattern bg-repeat transition-all duration-1000"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
              transform: `translateX(${mousePosition.x * 0.02}px) translateY(${
                mousePosition.y * 0.02
              }px)`,
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Ambient Light Effects */}
        <div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translateY(${mousePosition.y * 0.1}px) scale(${
              1 + mousePosition.x * 0.001
            })`,
            opacity: 0.3 + mousePosition.x * 0.002,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-emerald-900/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translateY(${mousePosition.y * -0.1}px) scale(${
              1 + mousePosition.y * 0.001
            })`,
            opacity: 0.3 + mousePosition.y * 0.002,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Sidebar */}
          <div className="lg:w-2/5">
            <div
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-400 uppercase tracking-wider">
                  Our Services
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-light mb-6 leading-tight">
                <span className="block text-slate-200">Comprehensive</span>
                <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent font-medium">
                  Engineering Solutions
                </span>
              </h2>

              <p className="text-slate-300 text-lg leading-relaxed mb-8 font-light">
                {serviceData.description}
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Expert technical consultation",
                  "Scalable system architecture",
                  "End-to-end implementation",
                  "Ongoing support & maintenance",
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 transition-all duration-500 delay-${
                      index * 100
                    }`}
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>

              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-medium text-white transition-all duration-500 hover:from-cyan-500 hover:to-blue-500 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105">
                <span className="flex items-center gap-2">
                  {serviceData.buttonText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="lg:w-3/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {serviceData.services.map((service, index) => (
                <div
                  key={service.id}
                  className={`group relative bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/40 p-6 hover:bg-slate-800/50 hover:border-slate-600/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/20 hover:scale-105 cursor-pointer transform ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Gradient Border Effect */}
                  <div
                    className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${service.color} p-px`}
                  >
                    <div className="w-full h-full bg-slate-800/90 rounded-xl" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-r ${service.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-slate-200 group-hover:text-white transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Hover Arrow */}
                    <div className="mt-4 flex items-center text-transparent group-hover:text-blue-400 transition-all duration-300">
                      <span className="text-sm font-medium mr-2">
                        Learn more
                      </span>
                      <ArrowRight className="w-4 h-4 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div
                    className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${service.color} blur-xl`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mouse Follower */}
      <div
        className="absolute w-40 h-40 bg-blue-400/5 rounded-full blur-2xl pointer-events-none transition-all duration-700"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </section>
  );
};

export default ServicesSection;
