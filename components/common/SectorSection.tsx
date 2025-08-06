"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Leaf, ArrowUpRight } from "lucide-react";

interface SectorData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  keyPoints: string[];
  sectorImage: string;
  color: string;
}

const SectorLayout: React.FC = () => {
  const [hoveredSector, setHoveredSector] = useState<string | null>(null);

  const sectors: SectorData[] = [
    {
      id: "oil-gas",
      title: "OIL & GAS",
      subtitle: "Sustainable Power Solutions",
      description:
        "Advanced renewable energy systems and smart grid technologies for sustainable power distribution and management across industrial sectors.",
      icon: <Flame className="w-8 h-8" />,
      keyPoints: [
        "Renewable Energy Integration",
        "Smart Grid Technology",
        "Energy Storage Systems",
        "Power Distribution Networks",
        "Real-time Energy Monitoring",
        "Carbon Footprint Reduction",
      ],
      sectorImage: "/images/sector-left.png",
      color: "#FF6B35",
    },
    {
      id: "renewable-energy",
      title: "RENEWABLE ENERGY",
      subtitle: "Clean Technology Innovation",
      description:
        "Comprehensive renewable energy solutions including solar, wind, and hydroelectric systems for sustainable industrial operations.",
      icon: <Leaf className="w-8 h-8" />,
      keyPoints: [
        "Solar Power Systems",
        "Wind Energy Solutions",
        "Hydroelectric Technology",
        "Energy Efficiency Optimization",
        "Green Infrastructure",
        "Sustainable Manufacturing",
      ],
      sectorImage: "/images/sector-right.png",
      color: "#4ECDC4",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const sectorVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  const keyPointVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="relative w-full min-h-[600px] h-full lg:max-h-[1000px] xl:max-h-[960px] pt-0 lg:pt-20 bg-black overflow-hidden flex items-start justify-center">
      {/* Main Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('/services/sector-bg3.jpg')`,
          }}
        />
        {/* <div className="absolute inset-0 bg-black/5" /> */}
      </motion.div>

      {/* Dynamic Background Images on Hover with Slide Animation (no wait mode) */}
      <AnimatePresence>
        {hoveredSector &&
          (() => {
            const hoveredIndex = sectors.findIndex(
              (s) => s.id === hoveredSector
            );
            const isLeft = hoveredIndex === 0;
            return (
              <motion.div
                key={hoveredSector}
                className="absolute inset-0"
                initial={{
                  opacity: 0,
                  scale: 1.05,
                  filter: "blur(2px)",
                  x: isLeft ? "-100vw" : "100vw",
                }}
                animate={{
                  opacity: 0.9,
                  scale: 1,
                  filter: "blur(0px)",
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                  filter: "blur(1px)",
                  x: isLeft ? "-100vw" : "100vw",
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                }}
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${sectors[hoveredIndex]?.sectorImage})`,
                  }}
                />
              </motion.div>
            );
          })()}
      </AnimatePresence>

      {/* Grid Pattern Overlay */}
      {/* <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </motion.div> */}

      {/* Main Content - Centered */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
        {/* Sectors Grid - 2 Columns Centered */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.id}
              className={`relative group cursor-pointer transition-all duration-1000 ease-out ${
                hoveredSector === sector.id ? "bg-white/5" : "bg-transparent"
              }`}
              variants={sectorVariants}
              onHoverStart={() => setHoveredSector(sector.id)}
              onHoverEnd={() => setHoveredSector(null)}
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.8, ease: "easeInOut" },
              }}
            >
              {/* Sector Divider */}
              {index === 0 && (
                <motion.div
                  className="absolute right-0 top-[10%] bottom-[10%] w-px bg-gradient-to-b from-transparent via-white/30 to-transparent z-20"
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  transition={{
                    delay: 1.5,
                    duration: 1.2,
                    ease: "easeInOut",
                  }}
                />
              )}

              {/* Content Container */}
              <div className="relative z-20 p-16 h-full flex flex-col min-h-screen justify-start items-center text-center">
                {/* Icon Container */}
                <motion.div
                  className="mb-8 flex justify-center"
                  // whileHover={{
                  //   rotate: 8,
                  //   scale: 1.15,
                  //   transition: {
                  //     duration: 0.8,
                  //     ease: [0.25, 0.46, 0.45, 0.94],
                  //   },
                  // }}
                >
                  <motion.div
                    className="inline-flex p-6 backdrop-blur-md border border-white/20 relative overflow-hidden"
                    style={{ backgroundColor: `${sector.color}20` }}
                    animate={{
                      borderColor:
                        hoveredSector === sector.id
                          ? sector.color
                          : "rgba(255,255,255,0.2)",
                      backgroundColor:
                        hoveredSector === sector.id
                          ? `${sector.color}30`
                          : `${sector.color}20`,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br opacity-20"
                      style={{
                        background: `linear-gradient(135deg, ${sector.color}40, transparent)`,
                      }}
                      animate={{
                        scale: hoveredSector === sector.id ? 1.8 : 1,
                        rotate: hoveredSector === sector.id ? 90 : 0,
                        opacity: hoveredSector === sector.id ? 0.4 : 0.2,
                      }}
                      transition={{
                        duration: 1.2,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    />
                    <motion.div
                      className="relative z-10"
                      style={{ color: sector.color }}
                      animate={{
                        color:
                          hoveredSector === sector.id
                            ? "#ffffff"
                            : sector.color,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {sector.icon}
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Title */}
                <motion.h2
                  className="text-4xl font-bold text-white mb-4 tracking-wider"
                  animate={{
                    color:
                      hoveredSector === sector.id ? sector.color : "#ffffff",
                    scale: hoveredSector === sector.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {sector.title}
                </motion.h2>

                {/* Description */}
                <motion.p
                  className="text-gray-400 mb-8 leading-relaxed text-lg"
                  animate={{
                    color: hoveredSector === sector.id ? "#e5e7eb" : "#9ca3af",
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {sector.description}
                </motion.p>

                {/* Key Points - Dropdown Animation */}
                <motion.div
                  className="overflow-hidden w-full flex flex-col items-center"
                  animate={{
                    height: hoveredSector === sector.id ? "auto" : 0,
                    marginBottom: hoveredSector === sector.id ? 32 : 0,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                  }}
                  style={{ transformOrigin: "top" }}
                >
                  <motion.div
                    className="space-y-3 w-full flex flex-col items-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                      opacity: hoveredSector === sector.id ? 1 : 0,
                      y: hoveredSector === sector.id ? 0 : -20,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: hoveredSector === sector.id ? 0.3 : 0,
                      ease: "easeInOut",
                    }}
                  >
                    {sector.keyPoints.map((point, pointIndex) => (
                      <motion.div
                        key={pointIndex}
                        custom={pointIndex}
                        variants={keyPointVariants}
                        initial="hidden"
                        animate={
                          hoveredSector === sector.id ? "visible" : "hidden"
                        }
                        className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm border w-[300px] border-white/10 px-4 py-3 justify-left"
                        whileHover={{
                          backgroundColor: "rgba(255,255,255,0.1)",
                          borderColor: "rgba(255,255,255,0.2)",
                          x: 8,
                          transition: { duration: 0.4 },
                        }}
                      >
                        <motion.div
                          className="w-2 h-2 flex-shrink-0"
                          style={{ backgroundColor: sector.color }}
                          transition={{
                            duration: 2,
                            delay: pointIndex * 0.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <span className="text-sm font-medium text-white">
                          {point}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  className="group/btn inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/30 px-8 py-4 font-medium tracking-wide text-white relative overflow-hidden self-center mt-4"
                  whileHover={{
                    backgroundColor: `${sector.color}20`,
                    borderColor: sector.color,
                    scale: 1.03,
                    transition: {
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  }}
                  whileTap={{
                    scale: 0.97,
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r opacity-0"
                    style={{
                      background: `linear-gradient(90deg, ${sector.color}30, transparent)`,
                    }}
                    animate={{
                      opacity: hoveredSector === sector.id ? 0.3 : 0,
                      x: hoveredSector === sector.id ? 0 : "-100%",
                    }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                  <span className="relative z-10">EXPLORE SOLUTIONS</span>
                  <motion.div
                    className="relative z-10"
                    animate={{
                      x: hoveredSector === sector.id ? 6 : 0,
                      rotate: hoveredSector === sector.id ? 45 : 0,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Ambient Light Effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default SectorLayout;
