"use client";
import React, { useState, useEffect, useRef } from "react";
import { TrendingUp, Users, Globe, Briefcase } from "lucide-react";

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      number: "50+",
      label: "Years of Experience",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      finalValue: 50,
      suffix: "+",
    },
    {
      number: "12,000+",
      label: "Employees Worldwide",
      icon: <Users className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      finalValue: 12000,
      suffix: "+",
    },
    {
      number: "45+",
      label: "Countries",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      finalValue: 45,
      suffix: "+",
    },
    {
      number: "400+",
      label: "Active Projects",
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      finalValue: 400,
      suffix: "+",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      observer.disconnect();
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 2000;
        const steps = 60;
        const increment = stat.finalValue / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.finalValue) {
            current = stat.finalValue;
            clearInterval(timer);
          }

          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }, duration / steps);
      });
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 text-gray-900 overflow-hidden bg-white"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-grid-pattern bg-repeat transition-all duration-1000"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
              transform: `translateX(${mousePosition.x * 0.01}px) translateY(${
                mousePosition.y * 0.01
              }px)`,
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Dynamic Gradient Orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translateX(${mousePosition.x * 0.15}px) translateY(${
              mousePosition.y * 0.1
            }px) scale(${1 + mousePosition.x * 0.001})`,
            opacity: 0.4 + mousePosition.x * 0.002,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translateX(${mousePosition.x * -0.1}px) translateY(${
              mousePosition.y * 0.15
            }px) scale(${1 + mousePosition.y * 0.001})`,
            opacity: 0.4 + mousePosition.y * 0.002,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <TrendingUp className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 uppercase tracking-wider">
              Our Impact
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-light mb-4 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block text-gray-900">Delivering Excellence</span>
            <span className="block bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent font-medium">
              Across the Globe
            </span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${index * 200 + 400}ms`,
              }}
            >
              {/* Card Background */}
              <div className="relative bg-white backdrop-blur-sm rounded-2xl p-8 border border-gray-300 hover:border-gray-400 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-300/50 hover:scale-105 cursor-pointer">
                {/* Gradient Border Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${stat.color} p-px`}
                >
                  <div className="w-full h-full bg-white rounded-2xl" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </div>

                  {/* Number */}
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                    {index < 2 ? (
                      <>
                        {counters[index].toLocaleString()}
                        {stat.suffix}
                      </>
                    ) : (
                      <>
                        {counters[index]}
                        {stat.suffix}
                      </>
                    )}
                  </div>

                  {/* Label */}
                  <div className="text-sm md:text-base text-gray-700 group-hover:text-gray-800 transition-colors duration-300 font-medium">
                    {stat.label}
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4 w-full bg-gray-300 rounded-full h-1 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${
                        stat.color
                      } transition-all duration-2000 delay-${
                        index * 200 + 600
                      }`}
                      style={{
                        width: isVisible ? "100%" : "0%",
                      }}
                    />
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${stat.color} blur-xl`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mouse Follower */}
      <div
        className="absolute w-40 h-40 bg-blue-400/10 rounded-full blur-2xl pointer-events-none transition-all duration-700"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </section>
  );
}
