"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Zap,
  Play,
  Power,
  Cpu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const HeroBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef<HTMLElement | null>(null);

  // Static content (single variation)
  const heroContent = {
    icon: Zap,
    tagline: "Power & Infrastructure Engineering",
    title: {
      first: "Powering",
      highlight: "Tomorrow's",
      last: "Infrastructure",
    },
    description:
      "From electrical systems to structural foundations, we engineer the critical infrastructure that powers communities and drives industrial progress.",
  };

  // Image slider data
  const sliderImages = [
    {
      src: "/services/1.webp",
      alt: "Modern Infrastructure Engineering",
      title: "Power Infrastructure",
    },
    {
      src: "/services/2.avif",
      alt: "Industrial Automation Systems",
      title: "Smart Automation",
    },
    {
      src: "/services/3.jpg",
      alt: "Digital Infrastructure Network",
      title: "Digital Ecosystem",
    },
    {
      src: "/services/4.jpg",
      alt: "Engineering Excellence",
      title: "Engineering Excellence",
    },
    {
      src: "/services/5.jpg",
      alt: "Advanced Technology Solutions",
      title: "Tech Solutions",
    },
  ];

  useEffect(() => {
    setIsVisible(true);

    // Image slider auto-advance every 4 seconds
    const imageInterval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % sliderImages.length
      );
    }, 4000);

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
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      clearInterval(imageInterval);
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  const currentContent = heroContent;
  const IconComponent = currentContent.icon;

  return (
    <section
      ref={heroRef}
      className="relative text-white overflow-hidden min-h-[100vh] flex flex-col justify-center items-center pt-32 pb-10 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20 lg:pt-40 lg:pb-20 "
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
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-slate-800/20 to-slate-900/40" />
      </div>

      {/* Dynamic Grid Overlay */}
      <div className="absolute inset-0 opacity-10 z-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1560px] mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              {/* Tagline with Icon */}
              {/* <div
                key={`tagline-${currentIndex}`}
                className="flex items-center gap-3 mb-8 animate-slide-in"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="h-px bg-gradient-to-r from-blue-500 to-transparent flex-1 ml-4" />
                <span className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em]">
                  {currentContent.tagline}
                </span>
              </div> */}

              {/* Main Title */}
              <h1
                className="mb-6 animate-slide-in font-black leading-tight"
                style={{
                  fontSize: "clamp(2.2rem, 6vw, 5rem)",
                  lineHeight: 1.1,
                  animationDelay: "200ms",
                }}
              >
                <span className="block text-white">
                  {currentContent.title.first}
                </span>
                <span className="block bg-gradient-to-r from-blue-500 via-blue-600 to-blue-600 bg-clip-text text-transparent">
                  {currentContent.title.highlight}
                </span>
                <span className="block text-gray-300 font-light">
                  {currentContent.title.last}
                </span>
              </h1>

              {/* Description */}
              <p
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-10 font-light leading-relaxed animate-slide-in"
                style={{ animationDelay: "400ms" }}
              >
                {currentContent.description}
              </p>

              {/* Action Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-8 md:mb-12 animate-slide-in"
                style={{ animationDelay: "600ms" }}
              >
                <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 font-bold text-white uppercase tracking-wide transition-all duration-300 hover:from-blue-500 hover:to-blue-600 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3">
                    Get Project Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </button>

                <button className="group relative px-10 py-5 border-2 border-gray-400 font-bold text-gray-300 uppercase tracking-wide transition-all duration-300 hover:border-white hover:text-white transform hover:-translate-y-1 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3">
                    <Play className="w-5 h-5" />
                    View Services
                  </span>
                  <div className="absolute inset-0 bg-white/5 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Image Slider */}
          <div
            className={`transition-all duration-1200 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative h-[600px] bg-slate-800 overflow-hidden">
                <img
                  key={currentImageIndex}
                  src={sliderImages[currentImageIndex].src}
                  alt={sliderImages[currentImageIndex].alt}
                  className="w-full h-full object-cover animate-fade-in"
                  draggable={false}
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                {/* Image Title */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                    {sliderImages[currentImageIndex].title}
                  </h3>
                  <div className="w-12 sm:w-16 h-1 bg-blue-500" />
                </div>

                {/* Navigation Arrows */}
                <button
                  title="Previous Image"
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-black/50 text-white hover:bg-black/70 transition-all duration-300 flex items-center justify-center rounded-full"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <button
                  title="Next Image"
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-black/50 text-white hover:bg-black/70 transition-all duration-300 flex items-center justify-center rounded-full"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Thumbnail Strip */}
              {/* <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
                {sliderImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-16 overflow-hidden transition-all duration-300 ${
                      index === currentImageIndex
                        ? "ring-2 ring-blue-500 opacity-100"
                        : "opacity-60 hover:opacity-80"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div> */}

              {/* Slider Progress */}
              <div className="flex justify-center mt-3 gap-1">
                {sliderImages.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 transition-all duration-300 rounded-full ${
                      index === currentImageIndex
                        ? "w-8 bg-blue-500"
                        : "w-2 bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Mouse Follower */}
      <div
        className="absolute w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500/5 blur-3xl pointer-events-none transition-all duration-1000"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Decorative Elements */}
      <div className="hidden sm:block absolute top-10 right-10 w-2 h-2 bg-blue-500 animate-pulse" />
      <div
        className="hidden sm:block absolute bottom-20 left-10 w-1 h-1 bg-cyan-400 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="hidden sm:block absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-in {
          animation: slide-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroBanner;
