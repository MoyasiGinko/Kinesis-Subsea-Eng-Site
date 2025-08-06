"use client";
import React, { useState, useEffect, useRef } from "react";
import { Calendar, Tag, ArrowRight, Clock, Eye } from "lucide-react";

export default function NewsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement | null>(null);

  const newsItems = [
    {
      title:
        "Kinesis Subsea Engineering Awarded Major Contract for Carbon Capture Project",
      date: "March 15, 2024",
      category: "Press Release",
      image:
        "https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "5 min read",
      excerpt:
        "Groundbreaking partnership to develop innovative carbon capture solutions for offshore operations...",
      categoryColor: "from-emerald-500 to-teal-500",
    },
    {
      title: "Sustainability Report 2023: Progress Towards Net Zero",
      date: "March 10, 2024",
      category: "Sustainability",
      image:
        "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "8 min read",
      excerpt:
        "Comprehensive overview of our environmental initiatives and achievements in sustainable engineering...",
      categoryColor: "from-green-500 to-emerald-500",
    },
    {
      title:
        "Kinesis Subsea Engineering Opens New Innovation Center in Singapore",
      date: "March 5, 2024",
      category: "Company News",
      image:
        "https://images.pexels.com/photos/1537008/pexels-photo-1537008.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "4 min read",
      excerpt:
        "State-of-the-art facility will drive next-generation subsea technology development and regional expansion...",
      categoryColor: "from-blue-500 to-cyan-500",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-white"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0 transition-all duration-1000"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
              transform: `translateX(${mousePosition.x * 0.02}px) translateY(${
                mousePosition.y * 0.02
              }px)`,
            }}
          />
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Dynamic Gradient Backgrounds */}
        <div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translateX(${mousePosition.x * 0.1}px) translateY(${
              mousePosition.y * 0.05
            }px)`,
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translateX(${mousePosition.x * -0.05}px) translateY(${
              mousePosition.y * 0.1
            }px)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-gray-100 backdrop-blur-sm border border-gray-200 rounded-full mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              Latest Updates
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-light mb-4 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block text-gray-900">News &</span>
            <span className="block bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent font-medium">
              Industry Insights
            </span>
          </h2>

          <p
            className={`text-gray-500 text-lg max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Stay updated with the latest developments, industry insights, and
            company news
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className={`group relative flex flex-col h-full transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${index * 200 + 600}ms`,
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className="relative flex flex-col h-full bg-white backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-300/40 hover:scale-[1.02] cursor-pointer">
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden flex-shrink-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${item.categoryColor} shadow-lg`}
                    >
                      {item.category}
                    </div>
                  </div>

                  {/* Read Time Badge */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center gap-1 px-2 py-1 bg-gray-900/70 backdrop-blur-sm rounded-full text-xs font-medium text-gray-200">
                      <Clock className="w-3 h-3" />
                      {item.readTime}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Meta Information */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Eye className="w-4 h-4" />
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {Math.floor(Math.random() * 500) + 100} views
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-500 transition-colors duration-300 leading-tight">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.excerpt}
                  </p>

                  {/* Spacer to push button to bottom */}
                  <div className="flex-1" />

                  {/* Read More Button */}
                  <div className="flex items-center justify-between mt-2">
                    <button className="group/btn flex items-center gap-2 text-blue-500 font-semibold hover:text-blue-400 transition-colors duration-300">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>

                    {/* Hover Indicator */}
                    <div className="w-12 h-1 bg-gray-300 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${
                          item.categoryColor
                        } transition-all duration-500 ${
                          hoveredCard === index ? "w-full" : "w-0"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r ${item.categoryColor} blur-xl`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full text-white font-semibold text-lg transition-all duration-500 hover:from-blue-400 hover:to-emerald-400 hover:shadow-xl hover:shadow-blue-300/25 hover:scale-105 overflow-hidden">
            <span className="relative z-10">View All News</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />

            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>
      </div>

      {/* Mouse Follower */}
      <div
        className="absolute w-32 h-32 bg-blue-400/10 rounded-full blur-2xl pointer-events-none transition-all duration-700"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </section>
  );
}
