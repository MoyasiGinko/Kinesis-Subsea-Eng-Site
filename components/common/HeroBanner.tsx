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
    },
  ];

  // Image slider data
  const sliderImages = [
    {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&crop=center",
      alt: "Modern Infrastructure Engineering",
      title: "Power Infrastructure",
    },
    {
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center",
      alt: "Industrial Automation Systems",
      title: "Smart Automation",
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
      alt: "Digital Infrastructure Network",
      title: "Digital Ecosystem",
    },
    {
      src: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop&crop=center",
      alt: "Engineering Excellence",
      title: "Engineering Excellence",
    },
    {
      src: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=800&h=600&fit=crop&crop=center",
      alt: "Advanced Technology Solutions",
      title: "Tech Solutions",
    },
  ];

  useEffect(() => {
    setIsVisible(true);

    // Content rotation every 8 seconds
    const contentInterval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % contentVariations.length
      );
    }, 8000);

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
      clearInterval(contentInterval);
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

  const currentContent = contentVariations[currentIndex];
  const IconComponent = currentContent.icon;

  return (
    <section
      ref={heroRef}
      className="relative text-white overflow-hidden min-h-screen flex items-center"
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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-slate-900/80" />
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                key={`title-${currentIndex}`}
                className="text-6xl lg:text-8xl font-black mb-8 leading-none animate-slide-in"
                style={{ animationDelay: "200ms" }}
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
                key={`description-${currentIndex}`}
                className="text-xl lg:text-2xl text-gray-300 mb-12 font-light leading-loose animate-slide-in"
                style={{ animationDelay: "400ms" }}
              >
                {currentContent.description}
              </p>

              {/* Action Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-6 mb-12 animate-slide-in"
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

              {/* Content Indicators */}
              {/* <div className="flex items-center gap-4 animate-slide-in" style={{ animationDelay: '800ms' }}>
                <div className="flex gap-2">
                  {contentVariations.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-12 h-1 transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-blue-500"
                          : "bg-gray-600 hover:bg-gray-500"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-400 font-mono">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(contentVariations.length).padStart(2, '0')}
                </div>
              </div> */}
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
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                {/* Image Title */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {sliderImages[currentImageIndex].title}
                  </h3>
                  <div className="w-16 h-1 bg-blue-500" />
                </div>

                {/* Navigation Arrows */}
                <button
                  title="Previous Image"
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 text-white hover:bg-black/70 transition-all duration-300 flex items-center justify-center"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  title="Next Image"
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 text-white hover:bg-black/70 transition-all duration-300 flex items-center justify-center"
                >
                  <ChevronRight className="w-6 h-6" />
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
              <div className="flex justify-center mt-4 gap-1">
                {sliderImages.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 transition-all duration-300 ${
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
        className="absolute w-96 h-96 bg-blue-500/5 blur-3xl pointer-events-none transition-all duration-1000"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-blue-500 animate-pulse" />
      <div
        className="absolute bottom-40 left-20 w-1 h-1 bg-cyan-400 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 animate-pulse"
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
