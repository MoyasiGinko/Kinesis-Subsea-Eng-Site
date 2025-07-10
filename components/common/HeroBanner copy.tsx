"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Code,
  Zap,
  Shield,
  Sparkles,
  ChevronDown,
  Play,
  Star,
  CheckCircle,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";

const HeroBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const heroRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLDivElement | null>(null);

  const testimonials = [
    {
      text: "Transformed our infrastructure completely. 10x performance improvement.",
      author: "Sarah Chen",
      role: "CTO, TechCorp",
      rating: 5,
    },
    {
      text: "Exceptional engineering expertise. Delivered ahead of schedule.",
      author: "Mike Johnson",
      role: "VP Engineering, StartupX",
      rating: 5,
    },
    {
      text: "Best decision we made. Scalable solutions that actually work.",
      author: "Lisa Rodriguez",
      role: "CEO, InnovateLabs",
      rating: 5,
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Projects Delivered",
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      number: "99.9%",
      label: "Uptime Achieved",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      number: "50+",
      label: "Expert Engineers",
      icon: <Users className="w-5 h-5" />,
    },
    {
      number: "5+",
      label: "Years Experience",
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(testimonialInterval);
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
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden min-h-screen flex items-center"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-grid-pattern bg-repeat transition-all duration-1000"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
              transform: `translateX(${mousePosition.x * 0.03}px) translateY(${
                mousePosition.y * 0.03
              }px) translateY(${scrollY * 0.5}px)`,
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Large Gradient Orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translateY(${mousePosition.y * 0.1}px) translateX(${
              mousePosition.x * 0.1
            }px) scale(${1 + mousePosition.x * 0.002})`,
            opacity: 0.4 + mousePosition.x * 0.003,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-900/20 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translateY(${mousePosition.y * -0.1}px) translateX(${
              mousePosition.x * -0.1
            }px) scale(${1 + mousePosition.y * 0.002})`,
            opacity: 0.4 + mousePosition.y * 0.003,
          }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-900/15 rounded-full blur-3xl transition-all duration-1000"
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
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-400 uppercase tracking-wider">
                  Premium Engineering Solutions
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-light mb-6 leading-tight">
                <span className="block text-slate-200">Build the</span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent font-medium">
                  Future
                </span>
                <span className="block text-slate-200">with Code</span>
              </h1>

              <p className="text-xl lg:text-2xl text-slate-300 mb-8 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Transform your ideas into scalable, high-performance solutions.
                We architect, build, and optimize systems that power tomorrow's
                innovations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
                <button className="group relative inline-flex px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-semibold text-white transition-all duration-500 hover:from-cyan-500 hover:to-blue-500 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105">
                  <span className="flex items-center gap-2">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>

                <button className="group relative inline-flex px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-lg font-semibold text-slate-200 transition-all duration-500 hover:bg-slate-800/80 hover:border-slate-500/80 hover:text-white hover:scale-105">
                  <span className="flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Watch Demo
                  </span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
                        <div className="text-cyan-400">{stat.icon}</div>
                        <div className="text-2xl lg:text-3xl font-bold text-white">
                          {stat.number}
                        </div>
                      </div>
                      <div className="text-slate-400 text-sm">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div
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
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
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
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Code/Tech Visual */}
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
                {/* Code Editor Mockup */}
                <div className="flex items-center mb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-slate-400 text-sm">
                      engineering-solutions.tsx
                    </span>
                  </div>
                </div>

                <div className="bg-slate-800/80 rounded-lg p-6 font-mono text-sm">
                  <div className="text-purple-400 mb-2">
                    <span className="text-slate-500">// </span>Building the
                    future, one line at a time
                  </div>
                  <div className="text-cyan-400 mb-1">
                    <span className="text-slate-400">const</span> solution ={" "}
                    <span className="text-slate-400">await</span>{" "}
                    <span className="text-green-400">engineer</span>({`{`}
                  </div>
                  <div className="text-slate-300 ml-4 mb-1">
                    <span className="text-orange-400">scalability</span>:{" "}
                    <span className="text-green-400">'enterprise'</span>,
                  </div>
                  <div className="text-slate-300 ml-4 mb-1">
                    <span className="text-orange-400">performance</span>:{" "}
                    <span className="text-green-400">'optimized'</span>,
                  </div>
                  <div className="text-slate-300 ml-4 mb-1">
                    <span className="text-orange-400">security</span>:{" "}
                    <span className="text-green-400">'bulletproof'</span>,
                  </div>
                  <div className="text-cyan-400 mb-2">{`}`});</div>
                  <div className="text-emerald-400">
                    <span className="text-slate-500">// </span>Success: System
                    deployed! 🚀
                  </div>
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center animate-pulse">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center animate-pulse"
                  style={{ animationDelay: "1s" }}
                >
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div
                  className="absolute top-1/2 -right-2 w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center animate-pulse"
                  style={{ animationDelay: "2s" }}
                >
                  <Shield className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mouse Follower */}
      <div
        className="absolute w-60 h-60 bg-blue-400/5 rounded-full blur-3xl pointer-events-none transition-all duration-700"
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
