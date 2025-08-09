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
      src: "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1754738820/1_jvnjiz.webp",
      alt: "Modern Infrastructure Engineering",
      title: "Power Infrastructure",
    },
    {
      src: "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1754738819/2_vfvnuz.webp",
      alt: "Industrial Automation Systems",
      title: "Smart Automation",
    },
    {
      src: "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1754738819/3_yp4wiw.webp",
      alt: "Digital Infrastructure Network",
      title: "Digital Ecosystem",
    },
    {
      src: "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1754738819/4_a40enk.webp",
      alt: "Engineering Excellence",
      title: "Engineering Excellence",
    },
    {
      src: "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1754738820/5_yhjlu6.webp",
      alt: "Advanced Technology Solutions",
      title: "Tech Solutions",
    },
  ];

  // --- Auto slider pause/resume logic ---
  const autoSlideDelay = 4000; // ms
  const resumeDelay = 5000; // ms after user interaction
  const autoSlideTimeout = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setIsVisible(true);

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
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  // Auto-advance effect, respects pause/resume
  useEffect(() => {
    if (autoSlideTimeout.current) clearTimeout(autoSlideTimeout.current);
    // Only set auto-slide if not paused
    if (!isPaused) {
      autoSlideTimeout.current = setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % sliderImages.length
        );
      }, autoSlideDelay);
    }
    return () => {
      if (autoSlideTimeout.current) clearTimeout(autoSlideTimeout.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentImageIndex, isPaused]);

  // Resume auto-slide after delay when paused
  useEffect(() => {
    if (isPaused) {
      if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
      resumeTimeout.current = setTimeout(() => {
        setIsPaused(false);
      }, resumeDelay);
      return () => {
        if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
      };
    }
  }, [isPaused]);

  // Helper to pause auto-slide and schedule resume
  const pauseAutoSlide = () => {
    setIsPaused(true);
  };

  const nextImage = () => {
    pauseAutoSlide();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  const prevImage = () => {
    pauseAutoSlide();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  const currentContent = heroContent;
  const IconComponent = currentContent.icon;

  return (
    <section
      ref={heroRef}
      className="relative text-white overflow-hidden   h-full max-h-[1200px] lg:min-h-[600px] xl:min-h-[800px] 2xl:min-h-[1080px] flex flex-col justify-center items-center pt-32 pb-10 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20 lg:pt-40 lg:pb-20 "
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
      <div className="relative z-10 max-w-[1760px] mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center justify-center">
          {/* Left Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start space-y-8 max-w-[600px] w-full">
            <div
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              {/* Main Title */}
              <h1
                className="mb-6 animate-slide-in font-black leading-tight text-center lg:text-left"
                style={{
                  fontSize: "clamp(2.2rem, 6vw, 5rem)",
                  lineHeight: 1.1,
                  animationDelay: "200ms",
                }}
              >
                <span className="block text-white">
                  {currentContent.title.first}
                </span>
                <span className="block bg-gradient-to-r from-primary-blue  to-primary-blue-hover bg-clip-text text-transparent">
                  {currentContent.title.highlight}
                </span>
                <span className="block tracking-tighter text-gray-300 font-light">
                  {currentContent.title.last}
                </span>
              </h1>

              {/* Description */}
              <p
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-10 font-light leading-relaxed animate-slide-in text-center lg:text-left"
                style={{ animationDelay: "400ms" }}
              >
                {currentContent.description}
              </p>

              {/* Action Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-8 md:mb-12 animate-slide-in justify-center lg:justify-start"
                style={{ animationDelay: "600ms" }}
              >
                <button className="group relative px-10 py-5 bg-primary-blue hover:bg-primary-blue-hover font-bold text-white uppercase tracking-wide transition-all duration-300  hover:shadow-2xl hover:shadow-primary-blue/25 transform hover:-translate-y-1 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3">
                    Get Project Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </button>

                <button className="group relative px-10 py-5 border-2 border-gray-400 font-bold text-gray-300 uppercase tracking-wide transition-all duration-300 hover:border-white hover:text-white transform hover:-translate-y-1 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3">
                    <Play className="w-5 h-5" />
                    View Services
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Image Slider */}
          <div
            className={`flex-1 flex justify-center w-full max-w-[900px] transition-all duration-1200 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="relative w-full">
              {/* Main Image Container */}
              <div className="relative h-[340px] md:h-[480px] lg:h-[640px] bg-slate-800 overflow-hidden rounded-lg">
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
                  <div className="w-12 sm:w-16 h-1 bg-primary-blue" />
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

              {/* Slider Progress */}
              <div className="flex justify-center mt-5 gap-1">
                {sliderImages.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 transition-all duration-300 rounded-full ${
                      index === currentImageIndex
                        ? "w-8 bg-primary-blue"
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
        className="absolute w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary-blue/5 blur-3xl pointer-events-none transition-all duration-1000"
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
