"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Zap,
  Building,
  Power,
  Sparkles,
  ChevronDown,
  Play,
  Star,
  CheckCircle,
  Users,
  Award,
  Hammer,
  Cable,
  Factory,
  // Wind turbine and renewable energy icons
  Wind, // Wind icon (perfect for wind power)
  Fan, // Fan icon (can represent turbine blades)
  Leaf, // Eco-friendly/green energy
  Recycle, // Sustainability
  Sun, // Solar/renewable energy
  Battery, // Energy storage
  BatteryCharging, // Charging/power generation
  Globe, // Global/environmental
  TreePine, // Environmental/green
  Lightbulb, // Energy/power concept
  Gauge, // Performance monitoring
  Settings, // Control systems
  MapPin, // Location markers for plants
  BarChart3, // Energy output charts
  TrendingUp, // Performance/growth
  Shield, // Safety/reliability
  Wrench, // Maintenance
  Cog, // Operations/machinery
} from "lucide-react";

const HeroBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [energyFlow, setEnergyFlow] = useState(0);
  const heroRef = useRef<HTMLElement | null>(null);

  const testimonials = [
    {
      text: "Transformed our power grid infrastructure with cutting-edge solutions.",
      author: "Robert Chen",
      role: "Chief Engineer, PowerGrid Corp",
      rating: 5,
    },
    {
      text: "Outstanding structural engineering. Project completed ahead of schedule.",
      author: "Maria Rodriguez",
      role: "Project Manager, BuildTech",
      rating: 5,
    },
    {
      text: "Reliable electrical systems that power our entire facility efficiently.",
      author: "James Wilson",
      role: "Facility Director, Manufacturing Inc",
      rating: 5,
    },
  ];

  const stats = [
    {
      number: "250+",
      label: "Projects Completed",
      icon: <Building className="w-5 h-5" />,
    },
    {
      number: "99.8%",
      label: "System Reliability",
      icon: <Power className="w-5 h-5" />,
    },
    {
      number: "30+",
      label: "Licensed Engineers",
      icon: <Users className="w-5 h-5" />,
    },
    {
      number: "15+",
      label: "Years Excellence",
      icon: <Award className="w-5 h-5" />,
    },
  ];

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    // Testimonial rotation
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    // Energy flow animation
    const energyInterval = setInterval(() => {
      setEnergyFlow((prev) => (prev + 1) % 100);
    }, 50);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(testimonialInterval);
      clearInterval(energyInterval);
    };
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={heroRef}
      className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden pb-10 pt-28 px-4 h-full sm:max-h-full md:max-h-full lg:max-h-[900px] xl:h-[1080px] flex items-center"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          className="w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Optional: Overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-950/60 to-slate-900/80 pointer-events-none" />
      </div>
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-repeat transition-all duration-1000"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 197, 94, 0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.4) 1px, transparent 1px),
                linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px, 40px 40px, 120px 120px, 120px 120px",
              transform: `translateX(${mousePosition.x * 0.02}px) translateY(${
                mousePosition.y * 0.02
              }px) translateY(${scrollY * 0.3}px)`,
            }}
          />
        </div>

        {/* Power Lines */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <linearGradient
                id="powerGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path
              d="M0,400 Q300,200 600,400 T1200,400"
              stroke="url(#powerGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M0,500 Q400,300 800,500 T1200,500"
              stroke="url(#powerGradient)"
              strokeWidth="1.5"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </svg>
        </div>

        {/* Energy Particles */}
        {/* <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-green-400/40 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1.5 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div> */}

        {/* Industrial Gradient Orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-900/20 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translateY(${mousePosition.y * 0.1}px) translateX(${
              mousePosition.x * 0.1
            }px) scale(${1 + mousePosition.x * 0.002})`,
            opacity: 0.4 + mousePosition.x * 0.003,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translateY(${mousePosition.y * -0.1}px) translateX(${
              mousePosition.x * -0.1
            }px) scale(${1 + mousePosition.y * 0.002})`,
            opacity: 0.4 + mousePosition.y * 0.003,
          }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-yellow-900/15 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translateY(${mousePosition.y * 0.05}px) translateX(${
              mousePosition.x * 0.05
            }px)`,
            opacity: 0.3 + mousePosition.x * 0.002,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <div
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
                <Zap className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium text-green-400 uppercase tracking-wider">
                  Power & Infrastructure Engineering
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-light mb-6 leading-tight">
                <span className="block text-slate-200">Powering</span>
                <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent font-medium">
                  Tomorrow's
                </span>
                <span className="block text-slate-200">Infrastructure</span>
              </h1>

              <p className="text-xl lg:text-2xl text-slate-300 mb-8 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                From electrical systems to structural foundations, we engineer
                the critical infrastructure that powers communities and drives
                industrial progress.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
                <button className="group relative inline-flex px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg font-semibold text-white transition-all duration-500 hover:from-green-500 hover:to-blue-500 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105">
                  <span className="flex items-center gap-2">
                    Get Project Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>

                <button className="group relative inline-flex px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-lg font-semibold text-slate-200 transition-all duration-500 hover:bg-slate-800/80 hover:border-slate-500/80 hover:text-white hover:scale-105">
                  <span className="flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    View Services
                  </span>
                </button>
              </div>

              {/* Stats */}
              {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-1000 transform ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12"
                    }`}
                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                  >
                    <div className="text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                        <div className="text-green-400">{stat.icon}</div>
                        <div className="text-2xl lg:text-3xl font-bold text-white">
                          {stat.number}
                        </div>
                      </div>
                      <div className="text-slate-400 text-sm">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div> */}

              {/* Testimonial */}
              {/* <div
                className={`transition-all duration-1000 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: "900ms" }}
              >
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/40">
                  <div className="flex items-center mb-3">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      )
                    )}
                  </div>
                  <p className="text-slate-300 mb-4 italic">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                      {testimonials[currentTestimonial].author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-medium">
                        {testimonials[currentTestimonial].author}
                      </div>
                      <div className="text-slate-400 text-sm">
                        {testimonials[currentTestimonial].role}
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Content - Engineering Schematic */}
          <div className="lg:w-1/2 w-full">
            <div
              className={`transition-all duration-1200 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/40 shadow-2xl">
                {/* Wind Turbine Plant & Subsea Engineering Header */}
                <div className="flex items-center mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-slate-400 text-sm">
                      WIND_SUBSEA_OVERVIEW.dwg
                    </span>
                  </div>
                </div>

                {/* Wind Turbine & Subsea Schematic */}
                <div className="bg-slate-800/80 rounded-lg p-6 font-mono text-sm">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="col-span-3 text-center">
                      <div className="text-blue-400 font-bold text-lg mb-2">
                        WIND TURBINE & SUBSEA PLANT
                      </div>
                      <div className="h-1 bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 rounded-full mb-4"></div>
                    </div>

                    {/* Wind Turbine */}
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                        <Wind className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-blue-400 text-xs">TURBINE</div>
                      <div className="text-slate-400 text-xs">5 MW</div>
                    </div>

                    {/* Subsea Cable */}
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Cable className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-cyan-400 text-xs">SUBSEA CABLE</div>
                      <div className="text-slate-400 text-xs">66 kV</div>
                    </div>

                    {/* Offshore Substation */}
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-yellow-400 to-blue-400 rounded-lg flex items-center justify-center">
                        <Factory className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-yellow-400 text-xs">SUBSTATION</div>
                      <div className="text-slate-400 text-xs">220 kV</div>
                    </div>
                  </div>

                  {/* Power Flow Animation */}
                  <div className="mb-4">
                    <div className="text-slate-300 text-xs mb-2">
                      ENERGY TRANSMISSION STATUS:
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="flex-1 h-1 bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 rounded-full relative overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full w-4 bg-white/60 rounded-full"
                          style={{
                            transform: `translateX(${energyFlow * 4}px)`,
                            transition: "transform 0.05s linear",
                          }}
                        />
                      </div>
                      <div
                        className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>
                  </div>

                  {/* System Status */}
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="text-blue-400 mb-1">
                        ✓ TURBINE: ACTIVE
                      </div>
                      <div className="text-green-400 mb-1">
                        ✓ SUBSEA LINK: STABLE
                      </div>
                      <div className="text-yellow-400">✓ OUTPUT: 4.8 MW</div>
                    </div>
                    <div>
                      <div className="text-cyan-400 mb-1">
                        ⚡ VOLTAGE: 66 kV
                      </div>
                      <div className="text-cyan-400 mb-1">⚡ CURRENT: 72 A</div>
                      <div className="text-cyan-400">⚡ EFFICIENCY: 97.2%</div>
                    </div>
                  </div>
                </div>

                {/* Floating Engineering Icons */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-green-400 rounded-xl flex items-center justify-center animate-pulse">
                  <Fan className="w-8 h-8 text-white" />
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center animate-pulse"
                  style={{ animationDelay: "1s" }}
                >
                  <Fan className="w-6 h-6 text-white" />
                </div>
                <div
                  className="absolute top-1/2 -right-2 w-10 h-10 bg-gradient-to-r from-yellow-400 to-blue-400 rounded-full flex items-center justify-center animate-pulse"
                  style={{ animationDelay: "2s" }}
                >
                  <Recycle className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mouse Follower */}
      <div
        className="absolute w-60 h-60 bg-green-400/5 rounded-full blur-3xl pointer-events-none transition-all duration-700"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </section>
  );
};

export default HeroBanner;
