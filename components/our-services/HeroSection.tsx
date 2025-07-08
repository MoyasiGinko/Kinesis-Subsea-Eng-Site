import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Zap,
  Cog,
  Settings,
  Wrench,
  ArrowRight,
} from "lucide-react";

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const createRipple = (e: React.MouseEvent) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      const newRipple = { id: Date.now(), x, y };
      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) =>
          prev.filter((ripple) => ripple.id !== newRipple.id)
        );
      }, 2000);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden flex flex-col justify-center items-center"
      onClick={createRipple}
    >
      {/* Technical Background Layers */}
      <div className="absolute inset-0">
        {/* Deep Technical Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-slate-900 to-emerald-950/20"></div>

        {/* Interactive Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-grid-pattern bg-repeat transition-all duration-1000"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
              transform: `translateX(${mousePosition.x * 0.05}px) translateY(${
                mousePosition.y * 0.03
              }px)`,
            }}
          ></div>
        </div>

        {/* Click Ripples */}
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="absolute w-0 h-0 border-2 border-blue-400/40 rounded-full animate-ping"
            style={{
              left: `${ripple.x}%`,
              top: `${ripple.y}%`,
              animationDuration: "2s",
            }}
          />
        ))}

        {/* Floating Tech Elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute transition-all duration-1000"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                transform: `translateX(${
                  mousePosition.x * 0.02
                }px) translateY(${mousePosition.y * 0.02}px)`,
              }}
            >
              <div
                className="w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"
                style={{
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-8 w-full">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center space-y-8">
          {/* Main Heading */}
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-light mb-4 leading-tight tracking-wide transition-all duration-1500 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span
              className={`block text-slate-200 font-thin transition-all duration-500 ${
                isHovered ? "text-blue-200" : ""
              }`}
            >
              Engineering Excellence
            </span>
            <span
              className={`block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent font-extralight mt-2 transition-all duration-500 ${
                isHovered ? "scale-105" : ""
              }`}
            >
              Delivered
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light transition-all duration-1500 delay-300 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{
              transform: `translateY(${Math.sin(scrollY * 0.01) * 2}px)`,
            }}
          >
            We design and build{" "}
            <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer">
              innovative
            </span>
            ,{" "}
            <span className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 cursor-pointer">
              scalable
            </span>
            , and{" "}
            <span className="text-slate-300 hover:text-blue-300 transition-colors duration-300 cursor-pointer">
              reliable
            </span>{" "}
            engineering solutions that drive your business forward and solve
            tomorrow's challenges today.
          </p>

          {/* CTA Buttons */}
          <div
            className={`pt-6 flex flex-col sm:flex-row gap-4 transition-all duration-1500 delay-500 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg font-medium text-white text-lg transition-all duration-500 hover:from-blue-500 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>

            <button className="group relative px-8 py-4 border border-slate-600/40 rounded-lg bg-transparent font-medium text-slate-200 text-lg transition-all duration-500 hover:border-blue-400/60 hover:bg-slate-800/30 hover:text-blue-200 hover:shadow-lg hover:shadow-slate-500/20">
              <span className="relative z-10 flex items-center gap-2">
                View Our Work
                <Zap className="w-4 h-4 group-hover:animate-pulse" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="w-full max-w-6xl px-4 z-20 flex justify-center">
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1500 delay-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {[
            {
              icon: <Cog className="w-6 h-6" />,
              title: "System Design",
              description: "Scalable architecture solutions",
            },
            {
              icon: <Settings className="w-6 h-6" />,
              title: "Process Optimization",
              description: "Efficiency through automation",
            },
            {
              icon: <Wrench className="w-6 h-6" />,
              title: "Technical Consulting",
              description: "Expert guidance & implementation",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-slate-800/20 backdrop-blur-sm rounded-lg border border-slate-700/30 hover:bg-slate-800/30 hover:border-blue-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/20 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium text-slate-200 group-hover:text-blue-200 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm font-light group-hover:text-slate-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-10 transform animate-bounce hover:animate-pulse cursor-pointer group">
        <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
      </div>

      {/* Ambient Light Effects */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl transition-all duration-1000"
        style={{
          transform: `translateY(${scrollY * 0.1}px) scale(${
            1 + mousePosition.x * 0.001
          })`,
          opacity: 0.3 + mousePosition.x * 0.002,
        }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-900/10 rounded-full blur-3xl transition-all duration-1000"
        style={{
          transform: `translateY(${scrollY * -0.1}px) scale(${
            1 + mousePosition.y * 0.001
          })`,
          opacity: 0.3 + mousePosition.y * 0.002,
        }}
      ></div>

      {/* Mouse Follower */}
      <div
        className="absolute w-32 h-32 bg-blue-400/5 rounded-full blur-xl pointer-events-none transition-all duration-500"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </section>
  );
};

export default HeroSection;
