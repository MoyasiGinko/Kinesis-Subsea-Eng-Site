import React, { useState, useEffect, useRef } from "react";
import {
  Award,
  Users,
  Calendar,
  TrendingUp,
  Target,
  Globe,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Cpu,
  Shield,
  Zap,
} from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      id: 1,
      number: "150+",
      label: "Projects Delivered",
      icon: <Award className="w-5 h-5" />,
    },
    {
      id: 2,
      number: "50+",
      label: "Enterprise Clients",
      icon: <Users className="w-5 h-5" />,
    },
    {
      id: 3,
      number: "12+",
      label: "Years Experience",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      id: 4,
      number: "99%",
      label: "Success Rate",
      icon: <TrendingUp className="w-5 h-5" />,
    },
  ];

  const features = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation-Driven",
      description: "We leverage cutting-edge technologies and methodologies",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security-First",
      description:
        "Every solution built with enterprise-grade security standards",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance-Optimized",
      description: "Engineered for speed, scalability, and reliability",
    },
  ];

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
      className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-repeat transition-all duration-1000"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 2px, transparent 2px)`,
              backgroundSize: "50px 50px",
              transform: `translateX(${mousePosition.x * 0.02}px) translateY(${
                mousePosition.y * 0.02
              }px)`,
            }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Ambient Light Effects */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translateY(${mousePosition.y * 0.1}px) scale(${
              1 + mousePosition.x * 0.001
            })`,
            opacity: 0.3 + mousePosition.x * 0.002,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translateY(${mousePosition.y * -0.1}px) scale(${
              1 + mousePosition.y * 0.001
            })`,
            opacity: 0.3 + mousePosition.y * 0.002,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium text-yellow-400 uppercase tracking-wider">
                  About Technical Consulting
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-light mb-6 leading-tight">
                <span className="block text-white">Reliable engineering</span>
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-medium">
                  takes many forms
                </span>
              </h2>

              <p className="text-teal-100 text-lg leading-relaxed mb-8 font-light">
                With over a decade of experience delivering mission-critical
                solutions, we combine deep technical expertise with industry
                best practices.
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-4 p-4 rounded-lg bg-teal-800/30 backdrop-blur-sm border border-teal-700/40 hover:bg-teal-800/50 transition-all duration-300 transform ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-12"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="text-yellow-400 flex-shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-teal-200 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-teal-900 rounded-lg font-medium transition-all duration-500 hover:from-yellow-300 hover:to-orange-300 hover:shadow-lg hover:shadow-yellow-500/25 hover:scale-105">
                  <span className="flex items-center gap-2">
                    Start Your Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>

                <button className="group px-8 py-4 border border-teal-600/40 rounded-lg bg-transparent font-medium text-teal-100 transition-all duration-500 hover:border-yellow-400/60 hover:bg-teal-800/30 hover:text-yellow-100">
                  <span className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    View Case Studies
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Visual Section */}
          <div className="lg:w-1/2">
            <div
              className={`relative transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              {/* Main Visual Card */}
              <div className="relative bg-gradient-to-br from-teal-700/5 to-emerald-700/5 backdrop-blur-sm rounded-2xl p-8 border border-teal-600/30 transform  transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20">
                {/* Tech Pattern Overlay */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-emerald-500/10">
                    <div className="absolute inset-0 bg-circuit-pattern opacity-20"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 ">
                    {stats.map((stat, index) => (
                      <div
                        key={stat.id}
                        className={`text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                          hoveredStat === stat.id
                            ? "ring-2 ring-yellow-400/50"
                            : ""
                        }`}
                        onMouseEnter={() => setHoveredStat(stat.id)}
                        onMouseLeave={() => setHoveredStat(null)}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className="flex justify-center mb-2 text-yellow-400">
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">
                          {stat.number}
                        </div>
                        <div className="text-sm text-teal-200">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400/20 rounded-full animate-bounce"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-teal-400/20 rounded-full animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-8 right-8 w-32 h-32 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-2xl"></div>
              <div className="absolute -z-10 bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-teal-400/10 to-emerald-400/10 rounded-full blur-2xl"></div>
            </div>
            {/* Central Tech Icon */}
            <div className="flex justify-center mt-8">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-pulse">
                  <Cpu className="w-10 h-10 text-teal-900" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mouse Follower */}
      <div
        className="absolute w-40 h-40 bg-yellow-400/5 rounded-full blur-2xl pointer-events-none transition-all duration-700"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </section>
  );
};

export default AboutSection;
