"use client"
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Wrench, Package, Search, Building2, Cog, Shield } from 'lucide-react';

interface ServiceCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  icon: React.ReactNode;
  buttonText: string;
  theme: 'primary' | 'secondary' | 'accent';
  stats: {
    projects: string;
    experience: string;
  };
}

const HorizontalServiceCards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const services: ServiceCard[] = [
    {
      id: 'mechanical',
      title: 'MECHANICAL',
      subtitle: 'ENGINEERING',
      description: 'Advanced mechanical engineering solutions for complex industrial applications with precision manufacturing and system optimization.',
      features: ['Structural Design', 'System Integration', 'Performance Analysis', 'Quality Assurance'],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
      icon: <Wrench className="w-6 h-6" />,
      buttonText: 'EXPLORE SERVICES',
      theme: 'primary',
      stats: {
        projects: '250+',
        experience: '15 Years'
      }
    },
    {
      id: 'product-design',
      title: 'PRODUCT DESIGN',
      subtitle: '& MANUFACTURING',
      description: 'End-to-end product development from conceptual design through manufacturing with cutting-edge technology.',
      features: ['Product Development', 'Prototype Testing', 'Manufacturing Setup', 'Quality Control'],
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=400&fit=crop',
      icon: <Package className="w-6 h-6" />,
      buttonText: 'VIEW PORTFOLIO',
      theme: 'secondary',
      stats: {
        projects: '180+',
        experience: '12 Years'
      }
    },
    {
      id: 'research',
      title: 'RESEARCH &',
      subtitle: 'DEVELOPMENT',
      description: 'Innovative R&D solutions driving technological advancement and breakthrough discoveries for next-generation applications.',
      features: ['Technology Innovation', 'Process Optimization', 'Material Science', 'Testing & Validation'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      icon: <Search className="w-6 h-6" />,
      buttonText: 'DISCOVER MORE',
      theme: 'accent',
      stats: {
        projects: '95+',
        experience: '10 Years'
      }
    },
    {
      id: 'consulting',
      title: 'ENGINEERING',
      subtitle: 'CONSULTING',
      description: 'Strategic engineering consultancy providing expert guidance for complex projects and operational excellence.',
      features: ['Strategic Planning', 'Technical Analysis', 'Risk Assessment', 'Project Management'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      icon: <Building2 className="w-6 h-6" />,
      buttonText: 'GET CONSULTATION',
      theme: 'primary',
      stats: {
        projects: '320+',
        experience: '18 Years'
      }
    },
    {
      id: 'automation',
      title: 'INDUSTRIAL',
      subtitle: 'AUTOMATION',
      description: 'Smart automation solutions for industrial processes with AI-driven control systems and IoT integration.',
      features: ['Process Automation', 'Control Systems', 'IoT Integration', 'Predictive Maintenance'],
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
      icon: <Cog className="w-6 h-6" />,
      buttonText: 'LEARN MORE',
      theme: 'secondary',
      stats: {
        projects: '140+',
        experience: '8 Years'
      }
    }
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (hoveredCard === null) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [hoveredCard]);

  const getThemeStyles = (theme: string, isActive: boolean = false) => {
    switch (theme) {
      case 'primary':
        return {
          bg: 'bg-slate-900',
          text: 'text-white',
          accent: 'bg-blue-500',
          button: 'bg-blue-600 hover:bg-blue-700 text-white',
          border: 'border-slate-700'
        };
      case 'secondary':
        return {
          bg: 'bg-white',
          text: 'text-slate-900',
          accent: 'bg-slate-900',
          button: 'bg-slate-900 hover:bg-slate-700 text-white',
          border: 'border-slate-200'
        };
      case 'accent':
        return {
          bg: 'bg-slate-800',
          text: 'text-white',
          accent: 'bg-emerald-500',
          button: 'bg-emerald-600 hover:bg-emerald-700 text-white',
          border: 'border-slate-600'
        };
      default:
        return {
          bg: 'bg-slate-900',
          text: 'text-white',
          accent: 'bg-blue-500',
          button: 'bg-blue-600 hover:bg-blue-700 text-white',
          border: 'border-slate-700'
        };
    }
  };

  return (
    <div className="bg-gradient-to-b from-slate-100 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mr-4"></div>
                <span className="text-slate-600 font-bold tracking-widest uppercase text-sm flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Our Services
                </span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                ENGINEERING
                <span className="block text-slate-600">
                  SOLUTIONS
                </span>
              </h2>
              
              <p className="text-slate-600 text-xl leading-relaxed max-w-2xl">
                Comprehensive engineering services delivering innovation, 
                precision, and reliability across diverse industrial sectors.
              </p>
            </div>

            {/* Navigation Controls */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className="p-4 bg-white border-2 border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className="p-4 bg-white border-2 border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 disabled:opacity-50"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="ml-6 text-center">
                <div className="text-2xl font-bold text-slate-900">
                  {String(currentIndex + 1).padStart(2, '0')}
                </div>
                <div className="text-slate-500 text-xs uppercase tracking-wide">
                  of {String(services.length).padStart(2, '0')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Carousel */}
        <div className="relative overflow-hidden">
          <div 
            ref={containerRef}
            className="flex transition-transform duration-800 ease-out gap-8"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {services.map((service, index) => {
              const styles = getThemeStyles(service.theme);
              const isActive = index === currentIndex;
              const isVisible = index >= currentIndex && index < currentIndex + 3;
              
              return (
                <div 
                  key={service.id} 
                  className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/3 transition-all duration-800 ${
                    isActive ? 'scale-105 z-10' : 'scale-100'
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`h-full ${styles.bg} ${styles.border} border-2 overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-102`}>
                    {/* Image Section */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Icon Badge */}
                      <div className="absolute top-4 left-4">
                        <div className={`w-12 h-12 ${styles.accent} flex items-center justify-center text-white`}>
                          {service.icon}
                        </div>
                      </div>

                      {/* Service Number */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm px-3 py-1 text-slate-900 font-bold text-sm">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 space-y-6">
                      {/* Title */}
                      <div>
                        <div className={`w-8 h-0.5 ${styles.accent} mb-3`}></div>
                        <h3 className={`text-xl font-bold ${styles.text} leading-tight`}>
                          {service.title}
                        </h3>
                        <h4 className={`text-lg font-light ${styles.text} opacity-80`}>
                          {service.subtitle}
                        </h4>
                      </div>

                      {/* Description */}
                      <p className={`${styles.text} opacity-80 text-sm leading-relaxed`}>
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className={`w-1 h-1 ${styles.accent}`}></div>
                            <span className={`${styles.text} text-xs opacity-70`}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className={`text-lg font-bold ${styles.text}`}>
                            {service.stats.projects}
                          </div>
                          <div className={`text-xs ${styles.text} opacity-60 uppercase tracking-wide`}>
                            Projects
                          </div>
                        </div>
                        <div className="text-center">
                          <div className={`text-lg font-bold ${styles.text}`}>
                            {service.stats.experience}
                          </div>
                          <div className={`text-xs ${styles.text} opacity-60 uppercase tracking-wide`}>
                            Experience
                          </div>
                        </div>
                      </div>

                      {/* Button */}
                      <button className={`w-full px-4 py-3 ${styles.button} font-semibold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group/btn`}>
                        <span>{service.buttonText}</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>

                    {/* Hover Progress Bar */}
                    <div className="h-1 bg-black/20">
                      <div 
                        className={`h-full ${styles.accent} transition-all duration-500 ${
                          hoveredCard === index ? 'w-full' : 'w-0'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center justify-center space-x-4 mt-8">
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="p-3 bg-white border-2 border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="text-center">
            <div className="text-xl font-bold text-slate-900">
              {String(currentIndex + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
            </div>
          </div>
          
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="p-3 bg-white border-2 border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 disabled:opacity-50"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 h-1 bg-slate-900' 
                  : 'w-3 h-1 bg-slate-300 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6 text-lg">
            Ready to discuss your project requirements?
          </p>
          <button className="px-8 py-4 border-2 border-slate-900 text-slate-900 font-semibold hover:bg-slate-900 hover:text-white transition-all duration-300 transform hover:scale-105">
            SCHEDULE CONSULTATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalServiceCards;