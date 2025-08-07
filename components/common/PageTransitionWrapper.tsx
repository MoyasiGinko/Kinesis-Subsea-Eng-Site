"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageTransitionWrapperProps {
  children: ReactNode;
  className?: string;
}

export const PageTransitionWrapper: React.FC<PageTransitionWrapperProps> = ({
  children,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1.2,
          ease: "easeOut",
          staggerChildren: 0.15,
        },
      }}
      viewport={{
        once: true,
        amount: 0.1,
        margin: "-10% 0px -10% 0px", // Start animation earlier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PageTransitionWrapper;
