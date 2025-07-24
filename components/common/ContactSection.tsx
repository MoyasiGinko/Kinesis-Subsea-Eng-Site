"use client";
import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, ArrowRight, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const sectionRef = useRef<HTMLElement | null>(null);

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

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formState);
    // Reset form
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 text-gray-900 overflow-hidden bg-white"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0 transition-all duration-1000"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
              transform: `translateX(${mousePosition.x * 0.02}px) translateY(${
                mousePosition.y * 0.02
              }px)`,
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
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
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translateX(${mousePosition.x * 0.15}px) translateY(${
              mousePosition.y * 0.1
            }px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-200/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translateX(${mousePosition.x * -0.1}px) translateY(${
              mousePosition.y * 0.15
            }px)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full mb-6">
            <Send className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 uppercase tracking-wider">
              Get in Touch
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">
            <span className="block text-gray-900">Ready to Transform</span>
            <span className="block bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 bg-clip-text text-transparent font-medium">
              Your Energy Future?
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Connect with our experts to discuss how we can help you achieve your
            sustainability goals and drive innovation in the energy sector.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Cards */}
            <div className="group relative bg-gray-100 rounded-2xl p-6 border border-gray-200 hover:bg-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-blue-200/20">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-100 to-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Email Us
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Our team is here to help with any questions
                  </p>
                  <a
                    href="mailto:contact@kinesissubsea.com"
                    className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    contact@kinesissubsea.com
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>

            <div className="group relative bg-gray-100 rounded-2xl p-6 border border-gray-200 hover:bg-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-200/20">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-100 to-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-cyan-500" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Call Us
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Available Monday to Friday, 9am-5pm
                  </p>
                  <a
                    href="tel:+442012345678"
                    className="inline-flex items-center text-cyan-500 hover:text-cyan-400 transition-colors"
                  >
                    +44 (0) 20 1234 5678
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>

            <div className="group relative bg-gray-100 rounded-2xl p-6 border border-gray-200 hover:bg-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-200/20">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-emerald-500" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Visit Us
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Our headquarters are located at
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-500 hover:text-emerald-400 transition-colors"
                  >
                    123 Ocean Drive, Aberdeen, UK
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-3 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-cyan-100 to-emerald-100 rounded-2xl opacity-20 blur-xl" />

            <div className="relative bg-white rounded-2xl p-8 border border-gray-200 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-100 rounded-full blur-3xl" />

              <div className="absolute top-4 left-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
              <div className="absolute top-4 left-4 w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent" />

              <div className="absolute bottom-4 right-4 w-8 h-0.5 bg-gradient-to-l from-emerald-500 to-transparent" />
              <div className="absolute bottom-4 right-4 w-0.5 h-8 bg-gradient-to-t from-emerald-500 to-transparent" />

              <h3 className="text-2xl font-medium text-gray-900 mb-6">
                Send Us a Message
              </h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                      placeholder="Enter your name"
                      required
                    />
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-emerald-500 group-focus-within:w-full transition-all duration-300" />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="group relative w-full px-6 py-3 rounded-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 transition-all duration-300 group-hover:scale-105" />
                  <div className="relative flex items-center justify-center gap-2 text-gray-900 font-medium">
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </form>
            </div>
          </div>
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
