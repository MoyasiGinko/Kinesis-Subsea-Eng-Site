"use client"
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Wrench, Package, Search } from 'lucide-react';

interface ServiceCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  buttonText: string;
  theme: 'dark' | 'light';
}

const HorizontalServiceCards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const services: ServiceCard[] = [
    {
      id: 'mechanical',
      title: 'MECHANICAL',
      subtitle: 'CONSTRUCTIONS',
      description: 'We serve our clients top level of trusted advisor for their business & marketing progress.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop',
      icon: <Wrench className="w-8 h-8" />,
      buttonText: 'VIEW MORE',
      theme: 'dark'
    },
    {
      id: 'product-design',
      title: 'PRODUCT DESIGN &',
      subtitle: 'MANUFACTURE',
      description: 'We serve our clients top level of trusted advisor for their business & marketing progress.',
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&h=250&fit=crop',
      icon: <Package className="w-8 h-8" />,
      buttonText: 'VIEW MORE',
      theme: 'light'
    },
    {
      id: 'research',
      title: 'RESEARCH AND',
      subtitle: 'MANUFACTURE',
      description: 'We serve our clients top level of trusted advisor for their business & marketing progress.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop',
      icon: <Search className="w-8 h-8" />,
      buttonText: 'VIEW MORE',
      theme: 'light'
    },
    {
      id: 'consulting',
      title: 'BUSINESS',
      subtitle: 'CONSULTING',
      description: 'We serve our clients top level of trusted advisor for their business & marketing progress.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
      icon: <Wrench className="w-8 h-8" />,
      buttonText: 'VIEW MORE',
      theme: 'dark'
    }
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Auto-slide functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
                SERVICES
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Providing solutions of every kind
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              We serve our clients with top level trusted advisory services for their business and operational excellence.
            </p>

            {/* Navigation Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className="p-3 rounded-full border border-gray-300 hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 group disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
              </button>
              
              <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className="p-3 rounded-full border border-gray-300 hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 group disabled:opacity-50"
              >
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex 
                      ? 'w-8 h-2 bg-blue-600' 
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Service Counter */}
            <div className="text-gray-500 text-sm">
              {String(currentIndex + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
            </div>
          </div>

          {/* Right Content - Cards Container */}
          <div className="relative overflow-hidden">
            <div 
              ref={containerRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={service.id} className="w-full flex-shrink-0">
                  <div className={`relative rounded-t-3xl overflow-hidden shadow-2xl transform transition-all duration-500 ${
                    index === currentIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-90'
                  }`}>
                    {/* Image Section */}
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                    </div>

                    {/* Content Section */}
                    <div className={`relative ${
                      service.theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
                    }`}>
                      {/* Curved Top Border */}
                      <div className={`absolute top-0 left-0 right-0 h-6 ${
                        service.theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                      }`} style={{
                        clipPath: 'ellipse(70% 100% at 50% 0%)'
                      }} />
                      
                      <div className="relative pt-10 pb-6 px-6 sm:px-8">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            {/* Red accent line */}
                            <div className="w-8 h-0.5 bg-red-600 mb-3" />
                            
                            <h3 className="text-lg sm:text-xl font-bold mb-1 leading-tight">
                              {service.title}
                            </h3>
                            <h4 className="text-lg sm:text-xl font-bold mb-4 leading-tight">
                              {service.subtitle}
                            </h4>
                            
                            <p className={`text-sm leading-relaxed mb-6 ${
                              service.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              {service.description}
                            </p>

                            {/* Button */}
                            <button className={`group flex items-center space-x-2 px-6 py-3 rounded-none font-bold text-xs tracking-wider transition-all duration-300 ${
                              service.theme === 'dark' 
                                ? 'bg-red-600 hover:bg-red-700 text-white' 
                                : 'bg-gray-200 hover:bg-gray-300 text-gray-900 border border-gray-300 hover:border-gray-400'
                            }`}>
                              <span>{service.buttonText}</span>
                              <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                          </div>

                          {/* Icon */}
                          <div className={`p-3 rounded-lg ml-4 ${
                            service.theme === 'dark' ? 'text-red-400' : 'text-gray-600'
                          }`}>
                            {service.icon}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalServiceCards;