"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Facebook,
  Globe,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: "https://twitter.com",
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-5 h-5" />,
      url: "https://youtube.com",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://instagram.com",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      url: "https://facebook.com",
    },
  ];

  const mainLocations = [
    "Aberdeen, UK",
    "Houston, USA",
    "Singapore",
    "Dubai, UAE",
    "Perth, Australia",
  ];

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white py-16 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0 transition-all duration-1000"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
              transform: `translateX(${mousePosition.x * 0.02}px) translateY(${
                mousePosition.y * 0.02
              }px)`,
            }}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/80 to-slate-950"></div>

        {/* Dynamic Gradient Orbs */}
        <div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translateX(${mousePosition.x * 0.1}px) translateY(${
              mousePosition.y * 0.05
            }px)`,
          }}
        />
        <div
          className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translateX(${mousePosition.x * -0.05}px) translateY(${
              mousePosition.y * 0.1
            }px)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo and About */}
          <div className="md:col-span-4 lg:col-span-4">
            <Link href="/" className="inline-block mb-6 group">
              <div className="relative">
                <img
                  src="/logo-white.svg"
                  alt="Kinesis Subsea Engineering"
                  className="h-16 w-auto transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute -inset-1 -z-10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-sm"></div>
              </div>
            </Link>

            <p className="text-slate-400 text-sm mb-6">
              Driving innovation in subsea engineering and sustainable energy
              solutions across the globe.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/50 hover:bg-slate-700/80 transition-all duration-300 relative overflow-hidden"
                  aria-label={social.name}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-cyan-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative text-slate-400 group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-2 text-sm">
              <Globe className="w-4 h-4 text-slate-400" />
              <span className="text-slate-300">Available Worldwide</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-white font-medium text-lg mb-5 relative inline-block">
              Explore
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
            </h3>

            <ul className="space-y-3">
              {[
                { name: "What We Deliver", href: "/what-we-deliver" },
                { name: "Who We Are", href: "/who-we-are" },
                { name: "Sustainability", href: "/sustainability" },
                { name: "Join Us", href: "/careers" },
                { name: "News & Insights", href: "/news-insights" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-white font-medium text-lg mb-5 relative inline-block">
              Global Locations
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400"></div>
            </h3>

            <div className="space-y-4">
              {mainLocations.map((location, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-800/70 flex items-center justify-center mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                  </div>
                  <div className="text-slate-400 text-sm">{location}</div>
                </div>
              ))}

              {/* <Link
                href="/contact-us"
                className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300 mt-2"
              >
                <span>View all locations</span>
                <ArrowUpRight className="ml-1 w-3 h-3" />
              </Link> */}
            </div>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-white font-medium text-lg mb-5 relative inline-block">
              Legal
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-400"></div>
            </h3>

            <div className="grid grid-cols-1 gap-3">
              {[
                { name: "Terms", href: "/terms-conditions" },
                { name: "Privacy Policy", href: "/privacy-policy" },
                {
                  name: "Code of Conduct",
                  href: "https://code.apps.kinesissubsea.com",
                },
                {
                  name: "Safety & Sustainability",
                  href: "/safety-sustainability-policy",
                },
                { name: "Quality Policy", href: "/quality-policy" },
                {
                  name: "Inclusion & Belonging",
                  href: "/inclusion-belonging-policy",
                },
                {
                  name: "Modern Slavery Statement",
                  href: "/sustainability/principles/modern-slavery-statement",
                },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-slate-400 hover:text-white text-sm transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="relative mt-16 mb-8">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-px bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400"></div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
          <p>
            © {new Date().getFullYear()} Kinesis Subsea Engineering. All rights
            reserved.
          </p>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <p className="relative group">
              Website by{" "}
              <a
                href="https://github.com/MoyasiGinko"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                MoyasiGinko
                <span className="absolute -bottom-0.5 left-0 w-full h-px bg-blue-400/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Mouse Follower */}
      <div
        className="absolute w-32 h-32 bg-blue-400/5 rounded-full blur-2xl pointer-events-none transition-all duration-700"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </footer>
  );
}
