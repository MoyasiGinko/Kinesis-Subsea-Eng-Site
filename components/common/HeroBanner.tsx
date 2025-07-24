"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Zap, Play, Power, Cpu, Wrench } from "lucide-react";

const HeroBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroRef = useRef<HTMLElement | null>(null);

  // Content variations
  const contentVariations = [
    {
      icon: Zap,
      tagline: "Power & Infrastructure Engineering",
      title: {
        first: "Powering",
        highlight: "Tomorrow's",
        last: "Infrastructure",
      },
      description:
        "From electrical systems to structural foundations, we engineer the critical infrastructure that powers communities and drives industrial progress.",
      gif: "/service1.gif",
      altText: "Wind Turbine & Subsea Plant Engineering Schematic",
    },
    {
      icon: Power,
      tagline: "Industrial Automation & Control",
      title: {
        first: "Building",
        highlight: "Smart",
        last: "Solutions",
      },
      description:
        "Advanced automation systems and intelligent control networks that optimize industrial processes and enhance operational efficiency across all sectors.",
      gif: "/service2.gif",
      altText: "Industrial Automation Control Systems",
    },
    {
      icon: Cpu,
      tagline: "Digital Infrastructure & IoT",
      title: {
        first: "Connecting",
        highlight: "Digital",
        last: "Ecosystems",
      },
      description:
        "Cutting-edge IoT networks and digital infrastructure solutions that transform traditional systems into intelligent, connected environments.",
      gif: "/service3.gif",
      altText: "Digital Infrastructure & IoT Networks",
    },
  ];

  useEffect(() => {
    setIsVisible(true);

    // Shuffle content every 5 seconds
    const shuffleInterval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % contentVariations.length
      );
    }, 5000);

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

    return () => {
      clearInterval(shuffleInterval);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const currentContent = contentVariations[currentIndex];
  const IconComponent = currentContent.icon;

  return (
    <section
      ref={heroRef}
      className="relative text-white overflow-hidden pb-10 pt-28 px-4 h-full sm:max-h-full md:max-h-full lg:max-h-[900px] xl:h-[1080px] flex items-center"
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
              <div
                key={`tagline-${currentIndex}`}
                className="flex items-center gap-2 mb-6 justify-center lg:justify-start animate-fade-in"
              >
                <IconComponent className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium text-green-400 uppercase tracking-wider">
                  {currentContent.tagline}
                </span>
              </div>

              <h1
                key={`title-${currentIndex}`}
                className="text-5xl lg:text-7xl font-light mb-6 leading-tight animate-fade-in"
              >
                <span className="block text-slate-200">
                  {currentContent.title.first}
                </span>
                <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent font-medium">
                  {currentContent.title.highlight}
                </span>
                <span className="block text-slate-200">
                  {currentContent.title.last}
                </span>
              </h1>

              <p
                key={`description-${currentIndex}`}
                className="text-xl lg:text-2xl text-slate-300 mb-8 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in"
              >
                {currentContent.description}
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

              {/* Content Indicator Dots */}
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-4">
                {contentVariations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-green-400 w-8"
                        : "bg-slate-600 hover:bg-slate-500"
                    }`}
                  />
                ))}
              </div>
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
                {/* GIF Container */}
                <div className="bg-slate-800/80 rounded-lg p-4">
                  <img
                    key={`gif-${currentIndex}`}
                    src={currentContent.gif}
                    alt={currentContent.altText}
                    className="w-full h-auto rounded-lg animate-fade-in"
                  />
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

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroBanner;
