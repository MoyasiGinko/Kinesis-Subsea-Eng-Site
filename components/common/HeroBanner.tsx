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
      if (typeof window !== "undefined") {
        setScrollY(window.scrollY);
      }
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

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      clearInterval(shuffleInterval);
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const scrollToNext = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  const currentContent = contentVariations[currentIndex];
  const IconComponent = currentContent.icon;

  return (
    <section
      ref={heroRef}
      className="relative text-gray-900 overflow-hidden pb-10 pt-28 px-4 h-full sm:max-h-full md:max-h-full lg:max-h-[900px] xl:h-[1080px] flex items-center"
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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-500/50 via-slate-600/40 to-slate-600/60 pointer-events-none" />
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
                <IconComponent className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-white uppercase tracking-wider">
                  {currentContent.tagline}
                </span>
              </div>

              <h1
                key={`title-${currentIndex}`}
                className="text-5xl lg:text-7xl font-light mb-6 leading-tight animate-fade-in"
              >
                <span className="block text-white">
                  {currentContent.title.first}
                </span>
                <span className="block bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 bg-clip-text text-transparent font-medium">
                  {currentContent.title.highlight}
                </span>
                <span className="block text-white">
                  {currentContent.title.last}
                </span>
              </h1>

              <p
                key={`description-${currentIndex}`}
                className="text-xl lg:text-2xl text-gray-200 mb-8 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in"
              >
                {currentContent.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
                <button className="group relative inline-flex px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-700  font-semibold text-white transition-all duration-500 hover:from-blue-600 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-600/25 hover:scale-105">
                  <span className="flex items-center gap-2">
                    Get Project Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>

                <button className="group relative inline-flex px-8 py-4 bg-gray-200 border border-gray-300  font-semibold text-gray-900 transition-all duration-500 hover:bg-gray-300 hover:border-gray-400 hover:scale-105">
                  <span className="flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    View Services
                  </span>
                </button>
              </div>

              {/* Content Indicator Dots */}
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-4">
                {contentVariations.map((variation, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    title={variation.tagline}
                    aria-label={variation.tagline}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-blue-600 w-8"
                        : "bg-gray-400 hover:bg-gray-500"
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
              <div className="relative bg-transparent  rounded-2xl p-8 ">
                {/* GIF Container */}
                <div className=" rounded-lg p-4">
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
        className="absolute w-60 h-60 bg-blue-600/10 rounded-full blur-3xl pointer-events-none transition-all duration-700"
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
