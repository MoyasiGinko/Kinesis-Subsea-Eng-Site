"use client";
import React, { useState } from "react";
import { ArrowRight, Zap, Droplets } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HoverCardsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: "Oil & Gas",
      subtitle: "Upstream • Midstream • Downstream",
      description:
        "Comprehensive engineering solutions for oil & gas operations with proven expertise and cutting-edge technology.",
      icon: <Droplets className="w-8 h-8 md:w-10 lg:w-12 xl:w-14" />,
      features: [
        "Offshore Platform Design",
        "Pipeline Engineering",
        "Refinery Optimization",
        "Safety & Environmental",
        "Asset Integrity Management",
        "Process Engineering",
      ],
      color: "from-amber-600 to-orange-500",
      backgroundImage: "/service2.gif",
    },
    {
      title: "Renewables",
      subtitle: "Wind • Solar • Green Hydrogen",
      description:
        "Leading the transition to sustainable energy with innovative solutions for a cleaner, greener future.",
      icon: <Zap className="w-8 h-8 md:w-10 lg:w-12 xl:w-14" />,
      features: [
        "Wind Turbine Engineering",
        "Solar Farm Development",
        "Energy Storage Systems",
        "Grid Integration Solutions",
        "Green Hydrogen Production",
        "Sustainability Consulting",
      ],
      color: "from-emerald-600 to-teal-500",
      backgroundImage: "/service1.gif",
    },
  ];

  const drawVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.5 },
      },
    },
  };

  const imageRevealVariants = {
    hidden: (cardIndex: number) => ({
      clipPath:
        cardIndex === 0
          ? "circle(0% at 25% 50%)" // Reveal from left card center
          : "circle(0% at 75% 50%)", // Reveal from right card center
      scale: 1.1,
      opacity: 0.8,
    }),
    visible: (cardIndex: number) => ({
      clipPath:
        cardIndex === 0
          ? "circle(150% at 25% 50%)" // Expand from left card
          : "circle(150% at 75% 50%)", // Expand from right card
      scale: 1,
      opacity: 1,
      transition: {
        clipPath: { duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] },
        scale: { duration: 1.4, ease: "easeOut" },
        opacity: { duration: 0.8, ease: "easeOut" },
      },
    }),
  };

  const titleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.1,
      },
    },
  };

  const subtitleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const descriptionVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const featureItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.4 + i * 0.08,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  return (
    <section className="relative h-screen max-h-none lg:h-screen lg:max-h-[900px] overflow-hidden bg-transparent">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <motion.path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgb(59, 130, 246)"
                strokeWidth="1"
                variants={drawVariants}
                initial="hidden"
                animate="visible"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Dynamic Background Images */}
      <AnimatePresence>
        {services.map(
          (service, index) =>
            hoveredCard === index && (
              <motion.div
                key={index}
                className="absolute inset-0"
                custom={index}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={imageRevealVariants}
              >
                <div
                  className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('${service.backgroundImage}')`,
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-slate-900/75"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Layout Container */}
      <div className="relative z-10 h-full flex flex-col lg:flex-row">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="w-full lg:w-1/2 min-h-[50vh] lg:h-full cursor-pointer"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ scale: window.innerWidth >= 1024 ? 1.02 : 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Card Content */}
            <div className="h-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 md:py-12 lg:py-16 relative">
              {/* Backdrop with subtle border */}
              <motion.div
                className="absolute inset-2 sm:inset-3 lg:inset-4 rounded-xl lg:rounded-2xl backdrop-blur-sm border border-white/10"
                style={{
                  background:
                    hoveredCard === index
                      ? `linear-gradient(135deg, ${
                          service.color.includes("amber")
                            ? "rgba(245, 158, 11, 0.08)"
                            : "rgba(16, 185, 129, 0.08)"
                        } 0%, transparent 60%)`
                      : "rgba(255, 255, 255, 0.03)",
                }}
                animate={{
                  borderColor:
                    hoveredCard === index
                      ? "rgba(255, 255, 255, 0.2)"
                      : "rgba(255, 255, 255, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Content Container */}
              <div className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl text-center">
                {/* Icon */}
                <motion.div
                  className="mb-4 md:mb-6 lg:mb-8"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  variants={titleVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div
                    className={`inline-flex p-3 sm:p-4 lg:p-5 xl:p-6 rounded-xl lg:rounded-2xl bg-gradient-to-r ${service.color} text-white shadow-2xl`}
                  >
                    {service.icon}
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 md:mb-3 lg:mb-4 leading-tight tracking-tight"
                  whileHover={{ scale: window.innerWidth >= 1024 ? 1.05 : 1 }}
                  transition={{ duration: 0.2 }}
                  variants={titleVariants}
                  initial="hidden"
                  animate="visible"
                  style={{
                    fontFamily:
                      "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                    fontWeight: 700,
                    letterSpacing: "-0.025em",
                  }}
                >
                  {service.title}
                </motion.h3>

                {/* Subtitle */}
                <motion.div
                  className="mb-4 md:mb-5 lg:mb-6"
                  variants={subtitleVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <span
                    className={`inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r ${service.color} bg-opacity-20 text-xs sm:text-sm md:text-base font-medium text-white/90 tracking-wide uppercase`}
                  >
                    {service.subtitle}
                  </span>
                </motion.div>

                {/* Description */}
                <motion.p
                  className="text-slate-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light max-w-xs sm:max-w-sm lg:max-w-lg mx-auto mb-6 md:mb-8 lg:mb-10"
                  animate={{
                    color:
                      hoveredCard === index
                        ? "rgb(226, 232, 240)"
                        : "rgb(148, 163, 184)",
                  }}
                  transition={{ duration: 0.3 }}
                  variants={descriptionVariants}
                  initial="hidden"
                  animate="visible"
                  style={{
                    fontFamily:
                      "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                    lineHeight: "1.6",
                  }}
                >
                  {service.description}
                </motion.p>

                {/* Features List - Shows on Hover */}
                <AnimatePresence>
                  {hoveredCard === index && (
                    <motion.div
                      className="mb-6 md:mb-8 lg:mb-10"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <div className="bg-white/5 backdrop-blur-md rounded-lg lg:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10 shadow-2xl">
                        <motion.h4
                          className="text-white text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 lg:mb-6 text-left"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.4 }}
                          style={{
                            fontFamily:
                              "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                            fontWeight: 600,
                          }}
                        >
                          Our Expertise
                        </motion.h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                          {service.features.map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              className="flex items-start gap-2 sm:gap-3 text-slate-300"
                              custom={featureIndex}
                              variants={featureItemVariants}
                              initial="hidden"
                              animate="visible"
                            >
                              <motion.div
                                className={`flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r ${service.color} mt-2 sm:mt-2.5`}
                                whileHover={{ scale: 1.5 }}
                                transition={{ duration: 0.2 }}
                              />
                              <span
                                className="font-medium leading-relaxed text-xs sm:text-sm lg:text-base"
                                style={{
                                  fontFamily:
                                    "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                                  fontWeight: 500,
                                }}
                              >
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Read More Button */}
                <motion.button
                  className={`inline-flex items-center gap-2 sm:gap-3 lg:gap-4 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r ${service.color} text-white rounded-lg lg:rounded-xl font-semibold text-sm sm:text-base lg:text-lg shadow-2xl border border-white/20 relative overflow-hidden group`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span
                    className="relative z-10"
                    style={{
                      fontFamily:
                        "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Learn More
                  </span>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                  </motion.div>
                </motion.button>
              </div>

              {/* Professional Corner Accents - Hidden on mobile */}
              <motion.div
                className="absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8 hidden sm:block"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="w-8 sm:w-12 lg:w-16 h-0.5 bg-gradient-to-r from-white/40 to-transparent"></div>
                <div className="w-0.5 h-8 sm:h-12 lg:h-16 bg-gradient-to-b from-white/40 to-transparent"></div>
              </motion.div>

              <motion.div
                className="absolute bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 hidden sm:block"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="w-0.5 h-8 sm:h-12 lg:h-16 bg-gradient-to-t from-white/40 to-transparent ml-auto"></div>
                <div className="w-8 sm:w-12 lg:w-16 h-0.5 bg-gradient-to-l from-white/40 to-transparent"></div>
              </motion.div>

              {/* Separator Line - Only on desktop horizontal layout */}
              {index === 0 && (
                <motion.div
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-3/4 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
