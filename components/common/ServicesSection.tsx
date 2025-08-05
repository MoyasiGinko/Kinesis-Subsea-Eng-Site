"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Wrench,
  Package,
  Search,
  Building2,
  Cog,
  Shield,
} from "lucide-react";

interface ServiceCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  icon: React.ReactNode;
  buttonText: string;
  theme: "primary" | "secondary" | "accent";
  stats: {
    projects: string;
    experience: string;
  };
}

import { useContext } from "react";

function HorizontalServiceCardsInner() {
  // Drag state for horizontal scroll
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const services: ServiceCard[] = [
    {
      id: "mechanical",
      title: "MECHANICAL",
      subtitle: "ENGINEERING",
      description:
        "Advanced mechanical engineering solutions for complex industrial applications with precision manufacturing and system optimization.",
      features: [
        "Structural Design",
        "System Integration",
        "Performance Analysis",
        "Quality Assurance",
      ],
      image: "/services/1.webp",
      icon: <Wrench className="w-6 h-6" />,
      buttonText: "LEARN MORE",
      theme: "primary",
      stats: {
        projects: "250+",
        experience: "15 Years",
      },
    },
    {
      id: "product-design",
      title: "PRODUCT DESIGN",
      subtitle: "& MANUFACTURING",
      description:
        "End-to-end product development from conceptual design through manufacturing with cutting-edge technology.",
      features: [
        "Product Development",
        "Prototype Testing",
        "Manufacturing Setup",
        "Quality Control",
      ],
      image: "/services/2.avif",
      icon: <Package className="w-6 h-6" />,
      buttonText: "LEARN MORE",
      theme: "secondary",
      stats: {
        projects: "180+",
        experience: "12 Years",
      },
    },
    {
      id: "research",
      title: "RESEARCH &",
      subtitle: "DEVELOPMENT",
      description:
        "Innovative R&D solutions driving technological advancement and breakthrough discoveries for next-generation applications.",
      features: [
        "Technology Innovation",
        "Process Optimization",
        "Material Science",
        "Testing & Validation",
      ],
      image: "/services/3.jpg",
      icon: <Search className="w-6 h-6" />,
      buttonText: "LEARN MORE",
      theme: "accent",
      stats: {
        projects: "95+",
        experience: "10 Years",
      },
    },
    {
      id: "consulting",
      title: "ENGINEERING",
      subtitle: "CONSULTING",
      description:
        "Strategic engineering consultancy providing expert guidance for complex projects and operational excellence.",
      features: [
        "Strategic Planning",
        "Technical Analysis",
        "Risk Assessment",
        "Project Management",
      ],
      image: "/services/4.jpg",
      icon: <Building2 className="w-6 h-6" />,
      buttonText: "LEARN MORE",
      theme: "primary",
      stats: {
        projects: "320+",
        experience: "18 Years",
      },
    },
    {
      id: "automation",
      title: "INDUSTRIAL",
      subtitle: "AUTOMATION",
      description:
        "Smart automation solutions for industrial processes with AI-driven control systems and IoT integration.",
      features: [
        "Process Automation",
        "Control Systems",
        "IoT Integration",
        "Predictive Maintenance",
      ],
      image: "/services/5.jpg",
      icon: <Cog className="w-6 h-6" />,
      buttonText: "LEARN MORE",
      theme: "secondary",
      stats: {
        projects: "140+",
        experience: "8 Years",
      },
    },
  ];

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);

    // Prevent text selection and change cursor
    document.body.style.userSelect = "none";
    if (containerRef.current) {
      containerRef.current.style.cursor = "grabbing";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.userSelect = "";
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
    }
  };

  // Touch drag handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;

    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Add global mouse event listeners
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;

      e.preventDefault();
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleGlobalMouseUp = () => {
      setIsDragging(false);
      document.body.style.userSelect = "";
      if (containerRef.current) {
        containerRef.current.style.cursor = "grab";
      }
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging, startX, scrollLeft]);

  const scrollToCard = (index: number) => {
    if (!containerRef.current) return;

    const cardWidth = 350 + 32; // minWidth + gap
    const targetScrollLeft = index * cardWidth;

    containerRef.current.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth",
    });
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const newIndex = (currentIndex + 1) % services.length;
    setCurrentIndex(newIndex);
    scrollToCard(newIndex);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const newIndex = (currentIndex - 1 + services.length) % services.length;
    setCurrentIndex(newIndex);
    scrollToCard(newIndex);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    scrollToCard(index);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  // Auto-slide functionality (paused when dragging or hovering)
  useEffect(() => {
    const interval = setInterval(() => {
      if (hoveredCard === null && !isDragging) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [hoveredCard, isDragging, currentIndex]);

  const getThemeStyles = (theme: string) => {
    switch (theme) {
      case "primary":
        return {
          bg: "bg-slate-900",
          text: "text-black",
          accent: "bg-blue-500",
          button: "bg-yellow-500 hover:bg-slate-950 text-white",
          border: "border-slate-700",
        };
      case "secondary":
        return {
          bg: "bg-slate-900",
          text: "text-black",
          accent: "bg-blue-500",
          button: "bg-yellow-500 hover:bg-slate-950 text-white",
          border: "border-slate-700",
        };
      case "accent":
        return {
          bg: "bg-slate-900",
          text: "text-black",
          accent: "bg-blue-500",
          button: "bg-yellow-500  hover:bg-slate-950 text-white",
          border: "border-slate-700",
        };
      default:
        return {
          bg: "bg-slate-900",
          text: "text-black",
          accent: "bg-blue-500",
          button: "bg-yellow-500  hover:bg-slate-950 text-white",
          border: "border-slate-700",
        };
    }
  };

  return (
    <div className="bg-gradient-to-b from-slate-100 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mr-4"></div>
                <span className="text-slate-600 font-bold tracking-widest uppercase text-sm flex items-center gap-2">
                  <Wrench className="w-4 h-4" />
                  Our Services
                </span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                ENGINEERING
                <span className="block text-yellow-500">SOLUTIONS</span>
              </h2>

              <p className="text-slate-600 text-xl leading-relaxed max-w-2xl">
                Comprehensive engineering services delivering innovation,
                precision, and reliability across diverse industrial sectors.
              </p>
            </div>

            {/* Navigation Controls */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                aria-label="Previous Slide"
                title="Previous Slide"
                onClick={prevSlide}
                disabled={isTransitioning}
                className="p-4 bg-white border-2 border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                aria-label="Next Slide"
                title="Next Slide"
                onClick={nextSlide}
                disabled={isTransitioning}
                className="p-4 bg-white border-2 border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 disabled:opacity-50"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="ml-6 text-center">
                <div className="text-2xl font-bold text-slate-900">
                  {String(currentIndex + 1).padStart(2, "0")}
                </div>
                <div className="text-slate-500 text-xs uppercase tracking-wide">
                  of {String(services.length).padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          <div
            ref={containerRef}
            className={`flex gap-8 overflow-x-auto pb-4 transition-all duration-200 ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {services.map((service, index) => {
              const styles = getThemeStyles(service.theme);
              // Card is highlighted if hovered or if it's the current index and no card is hovered
              const isActive =
                hoveredCard === index ||
                (hoveredCard === null && currentIndex === index);
              // When hovering, update currentIndex to match hovered card
              const handleMouseEnter = () => {
                if (!isDragging) {
                  setHoveredCard(index);
                  setCurrentIndex(index);
                }
              };
              const handleMouseLeave = () => {
                setHoveredCard(null);
              };
              return (
                <div
                  key={service.id}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 transition-all duration-300"
                  style={{ minWidth: "350px" }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className={`h-[520px] md:h-[600px] lg:h-[640px] flex flex-col relative overflow-hidden group transform transition-all duration-500 `}
                  >
                    {/* Image Section */}
                    <div
                      className="relative flex-shrink-0"
                      style={{ height: "50%" }}
                    >
                      <div
                        className="overflow-hidden rounded-tl-[80px] w-full h-full"
                        style={{ height: "100%" }}
                      >
                        <img
                          src={service.image}
                          alt={service.title}
                          className={`w-full h-full object-cover transition-transform duration-700 select-none ${
                            isActive ? "scale-110" : ""
                          }`}
                          style={{ height: "100%" }}
                          draggable={false}
                        />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div
                      className="absolute right-0 bottom-0"
                      style={{
                        height: "60%",
                        width: "90%",
                        zIndex: 2,
                      }}
                    >
                      <div
                        className={`
                      p-6 space-y-6 mb-2 h-full flex flex-col justify-between
                      rounded-br-[80px] shadow-md hover:shadow-xl
                      transition-all duration-500
                      ${
                        isActive
                          ? "bg-black bg-opacity-95 text-white"
                          : "bg-opacity-90"
                      }
                      `}
                        style={{
                          background: isActive
                            ? "rgba(0,0,0,0.95)"
                            : "rgba(255,255,255,0.92)",
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                          left: "auto",
                          height: "100%",
                          width: "100%",
                        }}
                      >
                        {/* Title */}
                        <div className="flex items-center justify-between relative">
                          {/* Decorative line to the left of the title container */}
                          <div
                            style={{
                              position: "absolute",
                              top: "110px", // moved further below
                              left: "-68px",
                              width: "68px",
                              height: "6px",
                              background: isActive ? "#facc15" : "#335dd1", // yellow-500 or slate-500
                              zIndex: 10,
                            }}
                          />
                          <div>
                            <div
                              className={`w-8 h-0.5 ${
                                isActive ? "bg-yellow-500" : styles.accent
                              } mb-3 transition-colors duration-300`}
                            ></div>
                            <h3
                              className={`text-xl font-bold leading-tight transition-colors duration-300 ${
                                isActive ? "text-white" : styles.text
                              }`}
                            >
                              {service.title}
                            </h3>
                            <h4
                              className={`text-lg font-light opacity-80 transition-colors duration-300 ${
                                isActive ? "text-yellow-500" : styles.text
                              }`}
                            >
                              {service.subtitle}
                            </h4>
                          </div>
                          <div
                            className={`ml-4 text-black flex-shrink-0 ${
                              isActive ? "text-yellow-500" : "text-black"
                            }`}
                          >
                            {service.icon}
                          </div>
                          {/* Removed right side decorative line */}
                        </div>

                        {/* Description */}
                        <p
                          className={`opacity-80 text-sm leading-relaxed transition-colors duration-300 ${
                            isActive ? "text-white" : styles.text
                          }`}
                        >
                          {service.description}
                        </p>

                        {/* Button */}
                        <button
                          title={service.buttonText}
                          className={`
                      px-8 py-4
                      rounded-tr-[30px]
                      font-semibold text-md tracking-wide
                      flex items-center gap-2
                      transition-all duration-300
                      border-2
                      ${styles.border}
                      bg-transparent
                      hover:bg-yellow-500 hover:text-black hover:border-yellow-500
                      rounded-none
                      group/btn
                      hover:shadow-[4px_4px_0_0_rgba(30,41,59,1)]
                      focus:outline-none
                      ${
                        isActive
                          ? "text-black border-yellow-500 bg-yellow-500"
                          : styles.text
                      }
                      `}
                          style={{ width: "fit-content" }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>{service.buttonText}</span>
                          <ArrowRight
                            className={`w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300 ${
                              isActive ? "text-black" : ""
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Hide scrollbar with CSS */}
          <style jsx>{`
            div[ref] {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            div[ref]::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {services.map((_, index) => (
            <button
              title={`Go to slide ${index + 1}`}
              key={index}
              onClick={() => goToSlide(index)}
              disabled={hoveredCard !== null}
              className={`transition-all duration-300 focus:outline-none ${
                hoveredCard === null && index === currentIndex
                  ? "w-8 h-1 bg-slate-900"
                  : "w-3 h-1 bg-slate-300 hover:bg-slate-500"
              } ${hoveredCard !== null ? "opacity-50 cursor-not-allowed" : ""}`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 border-2 border-slate-900 text-slate-900 font-semibold hover:bg-slate-900 hover:text-white transition-all duration-300 transform hover:scale-105">
            VIEW ALL SERVICES
          </button>
        </div>
      </div>
    </div>
  );
}

import { LoadingContext } from "@/app/context/LoadingContext";

const HorizontalServiceCards: React.FC = () => {
  const loadingContext = React.useContext(LoadingContext);
  if (!loadingContext) return null;
  if (loadingContext.isLoading) return null;
  return <HorizontalServiceCardsInner />;
};

export default HorizontalServiceCards;
