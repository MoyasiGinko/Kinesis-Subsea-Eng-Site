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
    <section className="relative py-16 text-gray-900 overflow-hidden bg-gradient-to-b from-white via-gray-100 to-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-200 mb-6">
            <Send className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
              Get in Touch
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Next Project?
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Transform your vision into reality with our expert team. We deliver innovative solutions 
            that drive success and exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="group relative bg-white p-6 border border-gray-200 hover:bg-gray-50 transition-all duration-300 shadow-sm">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
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
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    contact@kinesissubsea.com
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>

            <div className="group relative bg-white p-6 border border-gray-200 hover:bg-gray-50 transition-all duration-300 shadow-sm">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-600" />
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
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    +44 (0) 20 1234 5678
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>

            <div className="group relative bg-white p-6 border border-gray-200 hover:bg-gray-50 transition-all duration-300 shadow-sm">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-600" />
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
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    123 Ocean Drive, Aberdeen, UK
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative">
            <div className="relative bg-white p-8 border border-gray-200 shadow-sm">
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
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                      placeholder="Enter your name"
                      required
                    />
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
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
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
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="group relative w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
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
