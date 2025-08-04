"use client"

import React, { useState } from 'react';
import { ChevronRight, Zap, Settings } from 'lucide-react';

interface SectorData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  keyPoints: string[];
  sectorImage: string;
}

const SectorLayout: React.FC = () => {
  const [hoveredSector, setHoveredSector] = useState<string | null>(null);

  const sectors: SectorData[] = [
    {
      id: 'smart-energy',
      title: 'SMART ENERGY',
      subtitle: 'Sustainable Power Solutions',
      description: 'Advanced renewable energy systems and smart grid technologies for sustainable power distribution and management.',
      icon: <Zap className="w-10 h-10" />,
      keyPoints: [
        'Renewable Energy Integration',
        'Smart Grid Technology',
        'Energy Storage Systems',
        'Power Distribution Networks',
        'Real-time Energy Monitoring',
        'Carbon Footprint Reduction'
      ],
      sectorImage: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&h=800&fit=crop&q=80'
    },
    {
      id: 'intelligent-manufacturing',
      title: 'INTELLIGENT MANUFACTURING',
      subtitle: 'Industry 4.0 Solutions',
      description: 'Comprehensive industrial automation systems and advanced manufacturing equipment for next-generation production.',
      icon: <Settings className="w-10 h-10" />,
      keyPoints: [
        'Intelligent Manufacturing Equipment',
        'Industrial Robotics Systems',
        'Environmental Protection Technology',
        'Advanced Elevator Systems',
        'Precision Industrial Components',
        'High-Performance Motor Systems'
      ],
      sectorImage: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=1200&h=800&fit=crop&q=80'
    }
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Full Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Sector Images - Animated on Hover */}
      {sectors.map((sector, index) => (
        <div
          key={`image-${sector.id}`}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            hoveredSector === sector.id 
              ? 'opacity-90 transform translate-x-0' 
              : index === 0 
                ? 'opacity-0 transform -translate-x-full' 
                : 'opacity-0 transform translate-x-full'
          }`}
          style={{
            backgroundImage: `url(${sector.sectorImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 5
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        </div>
      ))}
      
      {/* Main Content Grid */}
      <div className="relative z-10 h-full flex">
        {sectors.map((sector, index) => (
          <div
            key={sector.id}
            className={`flex-1 flex flex-col justify-center items-center text-white transition-all duration-700 ease-in-out cursor-pointer group relative ${
              hoveredSector === sector.id ? 'flex-[1.2]' : 'flex-1'
            }`}
            onMouseEnter={() => setHoveredSector(sector.id)}
            onMouseLeave={() => setHoveredSector(null)}
          >
            {/* Sector Divider Line */}
            {index === 0 && (
              <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-white/30 z-20" />
            )}
            
            {/* Content Container */}
            <div className="relative z-20 max-w-md px-8 text-center">
              {/* Icon Container */}
              <div className={`mb-8 mx-auto transition-all duration-500 ${
                hoveredSector === sector.id 
                  ? 'transform scale-110' 
                  : 'transform scale-100'
              }`}>
                <div className="inline-flex p-6 bg-white/10 backdrop-blur-md border border-white/20">
                  {sector.icon}
                </div>
              </div>
              
              {/* Title */}
              <h2 className={`font-bold mb-4 tracking-wider transition-all duration-500 ${
                hoveredSector === sector.id 
                  ? 'text-4xl mb-6' 
                  : 'text-3xl'
              }`}>
                {sector.title}
              </h2>
              
              {/* Subtitle */}
              <h3 className={`font-medium text-white/90 mb-8 transition-all duration-300 ${
                hoveredSector === sector.id 
                  ? 'text-xl opacity-100' 
                  : 'text-lg opacity-80'
              }`}>
                {sector.subtitle}
              </h3>
              
              {/* Description */}
              <p className={`leading-relaxed text-white/80 mb-10 transition-all duration-500 ${
                hoveredSector === sector.id 
                  ? 'text-base opacity-100' 
                  : 'text-sm opacity-70'
              }`}>
                {sector.description}
              </p>
              
              {/* Key Points - Show on hover */}
              <div className={`transition-all duration-700 transform origin-top ${
                hoveredSector === sector.id 
                  ? 'opacity-100 scale-y-100 max-h-96 mb-10' 
                  : 'opacity-0 scale-y-0 max-h-0 mb-0'
              } overflow-hidden`}>
                <div className="grid grid-cols-1 gap-3">
                  {sector.keyPoints.map((point, pointIndex) => (
                    <div 
                      key={pointIndex}
                      className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-3 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                      style={{
                        transitionDelay: `${pointIndex * 80}ms`
                      }}
                    >
                      <div className="w-1 h-1 bg-white flex-shrink-0" />
                      <span className="text-sm font-medium text-left">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* CTA Button */}
              <button className={`group/btn inline-flex items-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 hover:border-white/50 px-8 py-4 transition-all duration-500 font-medium tracking-wide ${
                hoveredSector === sector.id 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-80 transform translate-y-2'
              }`}>
                <span>EXPLORE SOLUTIONS</span>
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </div>
            
            {/* Hover Indicator */}
            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white transition-all duration-500 ${
              hoveredSector === sector.id 
                ? 'opacity-100 w-24' 
                : 'opacity-30 w-12'
            }`} />
          </div>
        ))}
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent z-1" />
    </div>
  );
};

export default SectorLayout;