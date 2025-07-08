"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroBanner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="hero"
      className="w-full min-h-[80vh] sm:min-h-[90vh] md:min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A1B39] via-[#1D1D1D] to-[#2A2A2A] text-white relative overflow-hidden"
    >
      {/* Background Image/Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/images/hero-engineering-bg.jpg')", // Replace with a relevant engineering/tech-themed image
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>

      <div className="max-w-[90%] sm:max-w-[85%] md:max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Headline */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight text-white"
            variants={itemVariants}
          >
            Engineering the Future with Sustainable Solutions
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-[90%] sm:max-w-3xl md:max-w-4xl mb-6 sm:mb-8 md:mb-10"
            variants={itemVariants}
          >
            Delivering innovative, reliable, and comprehensive technical
            consulting to build a thriving society through cutting-edge
            infrastructure and technology.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <Link href="/contact">
              <button className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-gradient-to-r from-[#BB6FFB] via-[#FC5F67] to-[#FFB054] rounded-full shadow-[0px_0px_20px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-300">
                Get Started
              </button>
            </Link>
          </motion.div>

          {/* Decorative Element (Gradient Circle) */}
          <motion.div
            className="absolute -bottom-20 -right-20 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-[#BB6FFB]/30 to-[#FFB054]/30 rounded-full blur-[100px] z-0"
            variants={itemVariants}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
