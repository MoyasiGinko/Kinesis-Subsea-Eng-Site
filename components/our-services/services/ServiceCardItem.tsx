"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface ServiceCardItemProps {
  card: ServiceCard;
  index: number;
  className?: string;
}

export default function ServiceCardItem({
  card,
  index,
  className = "",
}: ServiceCardItemProps) {
  return (
    <div
      key={card.id}
      className="group relative bg-white overflow-hidden transition-all duration-300 flex flex-col h-full hover:bg-black"
    >
      {/* Image Section */}
      <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-colors duration-300"></div>
      </div>

      {/* Content Section */}
      <div className="p-6 relative flex-1 flex flex-col transition-colors duration-300 bg-gray-100 text-gray-900 group-hover:bg-black group-hover:text-primary-orange-hover">
        {/* Background Pattern/Texture Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none group-hover:opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        </div>

        {/* Main text area (takes available space so footer stays pinned to bottom) */}
        <div className="relative z-10 flex-1">
          <h3 className="text-lg font-semibold mb-3 leading-tight text-gray-900 group-hover:text-primary-orange-hover min-h-[3rem]">
            {card.title}
          </h3>

          <p className="text-sm opacity-90 leading-relaxed text-gray-700 group-hover:text-white min-h-[3.5rem]">
            {card.description}
          </p>
        </div>

        {/* Footer: numbering and View Details button pinned to the bottom */}
        <div className="relative z-10 mt-4 mt-auto flex flex-col items-start">
          {/* Numbering above the View Details button */}
          <div className="mb-2 relative w-full">
            {/* default faint stroked number */}
            <span
              aria-hidden
              className="block text-5xl font-extrabold leading-none text-transparent"
              style={{
                WebkitTextStroke: "1px rgba(0,0,0,0.2)",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* highlighted stroked number on hover (uses group-hover on the parent .group) */}
            <span
              aria-hidden
              className="absolute inset-0 block text-5xl font-extrabold leading-none text-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
              style={{
                WebkitTextStroke: "2px #e04b1c", // orange highlight
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* View Details Button */}
          <button className="flex items-center justify-between w-full text-left transition-colors duration-200 p-2 -m-2 text-gray-900 group-hover:text-white">
            <span className="text-sm font-medium">View Details</span>
            <div className="flex items-center justify-center w-6 h-6">
              <ArrowRight className="w-3 h-3 text-gray-900 group-hover:text-primary-orange" />
            </div>
          </button>
        </div>
      </div>

      {/* Subtle border highlight */}
      <div className="absolute inset-0 pointer-events-none"></div>
    </div>
  );
}
