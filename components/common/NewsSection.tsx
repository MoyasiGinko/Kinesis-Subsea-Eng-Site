"use client";
import React, { useState, useEffect, useRef } from "react";
import { Calendar, ArrowRight, Clock } from "lucide-react";

export default function NewsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const newsItems = [
    {
      id: 1,
      title: "Major Carbon Capture Project Contract Awarded",
      date: "March 15, 2024",
      category: "Press Release",
      image:
        "https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "5 min",
    },
    {
      id: 2,
      title: "Sustainability Report 2023: Net Zero Progress",
      date: "March 10, 2024",
      category: "Sustainability",
      image:
        "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "8 min",
    },
    {
      id: 3,
      title: "New Innovation Center Opens in Singapore",
      date: "March 5, 2024",
      category: "Company News",
      image:
        "https://images.pexels.com/photos/1537008/pexels-photo-1537008.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "4 min",
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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                Latest News
              </h2>
              <p className="text-[#FC5220] text-lg font-medium">
                Stay updated with our recent developments
              </p>
            </div>

            <button className="hidden lg:flex items-center gap-2 px-6 py-3 border border-[#FC5220] text-[#FC5220] hover:bg-[#FC5220] hover:text-white hover:border-[#FC5220] transition-all duration-300 group">
              <span className="font-semibold">View All</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={item.id}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-[#FC5220]/10 mb-6 ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 "
                />

                {/* Category Label */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#FC5220] text-white px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full shadow">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-blue-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{item.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-black leading-tight group-hover:text-[#FC5220] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Read More */}
                <div className="flex items-center justify-between pt-2">
                  <button className="flex items-center gap-2 text-blue-600 hover:text-[#FC5220] transition-colors duration-300 group/btn">
                    <span className="text-sm font-semibold">Read more</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>

                  {/* Progress indicator */}
                  <div className="w-12 h-0.5 bg-blue-600/20 overflow-hidden rounded-full">
                    <div
                      className={`h-full bg-[#FC5220] transition-all duration-500 ${
                        hoveredCard === index ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="flex justify-center mt-12 lg:hidden">
          <button className="flex items-center gap-2 px-6 py-3 border border-[#FC5220] text-[#FC5220] hover:bg-[#FC5220] hover:text-white hover:border-[#FC5220] transition-all duration-300 group rounded-lg">
            <span className="font-semibold">View All News</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
