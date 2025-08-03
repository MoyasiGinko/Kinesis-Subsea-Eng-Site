"use client";
import React, { useState } from "react";
import { Mail, Phone, ArrowRight, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

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
    <section className="relative py-20 text-gray-900 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500"></div>
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-widest">CONTACT US</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-blue-500 to-teal-500"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Start a <span className="text-blue-600">Conversation</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reach out to us for inquiries, partnerships, or to discuss how we can help transform your business with our innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <div>
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
              
              <div className="space-y-10">
                {/* Email Card */}
                <div className="group relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Email</h4>
                      <p className="text-gray-600 mb-3">We'll respond within 24 hours</p>
                      <a href="mailto:contact@kinesissubsea.com" className="inline-flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform duration-300">
                        contact@kinesissubsea.com
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="group relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Phone</h4>
                      <p className="text-gray-600 mb-3">Mon-Fri from 8am to 5pm</p>
                      <a href="tel:+442012345678" className="inline-flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform duration-300">
                        +44 (0) 20 1234 5678
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address Card */}
                <div className="group relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Office</h4>
                      <p className="text-gray-600 mb-3">Visit our headquarters</p>
                      <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform duration-300">
                        123 Ocean Drive, Aberdeen, UK
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Motto Section */}
            <div className="pt-8 border-t border-gray-200">
              <div className="relative">
                <div className="absolute top-0 left-0 w-16 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-16 h-0.5 bg-gradient-to-l from-teal-500 to-transparent"></div>
                <blockquote className="text-2xl font-bold text-gray-900 italic text-center py-6">
                  "Engineering solutions for a sustainable tomorrow"
                </blockquote>
                <cite className="block text-center text-gray-600 mt-4">
                  — Our Commitment to Innovation
                </cite>
              </div>
              
              {/* Unique Visual Element */}
              <div className="mt-10 grid grid-cols-4 gap-3">
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i} 
                    className="h-2 bg-gradient-to-r from-blue-500 to-teal-500 opacity-20"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative">
            <div className="relative bg-white border border-gray-300 p-10">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-24 h-24">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 right-0 w-24 h-24">
                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-teal-500 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-teal-500 to-transparent"></div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                      placeholder="John Smith"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center gap-3">
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
