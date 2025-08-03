"use client"

import React, { useState } from 'react';
import { ChevronRight, Zap, Settings, Brain } from 'lucide-react';

interface SectorData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  keyPoints: string[];
  bgImage: string;
  hoverImage: string;
}

const ThreeSectorLayout: React.FC = () => {
  const [hoveredSector, setHoveredSector] = useState<string | null>(null);

  const sectors: SectorData[] = [
    {
      id: 'smart-energy',
      title: 'SMART ENERGY',
      subtitle: 'Sustainable Power Solutions',
      description: 'Sets the trend of multi-energy complementarity and connected energy network',
      icon: <Zap className="w-8 h-8" />,
      keyPoints: [
        'Renewable Energy Integration',
        'Smart Grid Technology',
        'Energy Storage Systems',
        'Power Distribution Networks',
        'Real-time Energy Monitoring',
        'Carbon Footprint Reduction'
      ],
      bgImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop'
    },
    {
      id: 'intelligent-manufacturing',
      title: 'INTELLIGENT MANUFACTURING',
      subtitle: 'Industry 4.0 Solutions',
      description: 'Boasts a full range of industrial automation systems and industrial equipment',
      icon: <Settings className="w-8 h-8" />,
      keyPoints: [
        'Intelligent Manufacturing Equipment',
        'Industrial Robots',
        'Environmental Protection Equipment',
        'Elevator Systems',
        'Basic Industrial Parts and Components',
        'Large and Medium Scale Motors'
      ],
      bgImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&h=600&fit=crop'
    },
  ];

  return (
    <div className="w-full h-screen flex">
      {sectors.map((sector, index) => (
        <div
          key={sector.id}
          className={`relative flex-1 transition-all duration-700 ease-in-out overflow-hidden cursor-pointer group ${
            hoveredSector === sector.id ? 'flex-[2]' : 'flex-1'
          }`}
          onMouseEnter={() => setHoveredSector(sector.id)}
          onMouseLeave={() => setHoveredSector(null)}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
            style={{
              backgroundImage: `url(${hoveredSector === sector.id ? sector.hoverImage : sector.bgImage})`
            }}
          />
          
          {/* Overlay */}
          <div className={`absolute inset-0 transition-all duration-700 ${
            hoveredSector === sector.id 
              ? 'bg-gradient-to-br from-blue-600/80 via-teal-500/70 to-green-500/80' 
              : index === 0 
                ? 'bg-orange-500/70' 
                : index === 1 
                  ? 'bg-gradient-to-br from-teal-500/80 to-green-500/80'
                  : 'bg-blue-600/70'
          }`} />
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-white p-8">
            {/* Icon */}
            <div className="mb-6 p-4 rounded-full bg-white/20 backdrop-blur-sm">
              {sector.icon}
            </div>
            
            {/* Title */}
            <h2 className="text-2xl font-bold text-center mb-4 leading-tight">
              {sector.title}
            </h2>
            
            {/* Subtitle - only show when not hovered or when this sector is hovered */}
            <h3 className={`text-lg font-medium text-center mb-6 transition-opacity duration-300 ${
              hoveredSector && hoveredSector !== sector.id ? 'opacity-0' : 'opacity-100'
            }`}>
              {sector.subtitle}
            </h3>
            
            {/* Description */}
            <p className={`text-center mb-8 leading-relaxed transition-all duration-300 ${
              hoveredSector === sector.id ? 'text-base' : 'text-sm'
            } ${hoveredSector && hoveredSector !== sector.id ? 'opacity-0' : 'opacity-100'}`}>
              {sector.description}
            </p>
            
            {/* Key Points - Show on hover */}
            <div className={`transition-all duration-500 transform ${
              hoveredSector === sector.id 
                ? 'opacity-100 translate-y-0 max-h-96' 
                : 'opacity-0 translate-y-4 max-h-0'
            } overflow-hidden`}>
              <div className="space-y-3 mb-8">
                {sector.keyPoints.map((point, pointIndex) => (
                  <div 
                    key={pointIndex}
                    className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 transform transition-all duration-300 hover:bg-white/20"
                    style={{
                      transitionDelay: `${pointIndex * 100}ms`
                    }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                    <span className="text-sm font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Read More Button */}
            <button className={`group/btn flex items-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full px-6 py-3 transition-all duration-300 border border-white/30 hover:border-white/50 ${
              hoveredSector && hoveredSector !== sector.id ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}>
              <span className="text-sm font-medium">Read more</span>
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </div>
          
          {/* Side Border Indicator */}
          <div className={`absolute top-0 bottom-0 w-1 bg-white transition-all duration-500 ${
            index === 0 ? 'right-0' : index === 2 ? 'left-0' : hoveredSector === sector.id ? 'right-0' : 'left-0'
          } ${hoveredSector === sector.id ? 'opacity-100' : 'opacity-30'}`} />
        </div>
      ))}
    </div>
  );
};

export default ThreeSectorLayout;