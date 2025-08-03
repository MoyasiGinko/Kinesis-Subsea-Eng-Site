"use client"
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Settings } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  location: string;
  image: string;
  category: string;
}

const RecentProjectsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 'chemical-refinery',
      title: 'Chemical Refinery',
      location: 'Michigan, US',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
      category: 'Industrial'
    },
    {
      id: 'manufacturing-plant',
      title: 'Manufacturing Plant',
      location: 'Texas, US',
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=400&fit=crop',
      category: 'Manufacturing'
    },
    {
      id: 'power-station',
      title: 'Power Station',
      location: 'California, US',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop',
      category: 'Energy'
    },
    {
      id: 'offshore-platform',
      title: 'Offshore Platform',
      location: 'Gulf of Mexico',
      image: 'https://images.unsplash.com/photo-1570208277776-4faec03db7c3?w=600&h=400&fit=crop',
      category: 'Oil & Gas'
    },
    {
      id: 'steel-mill',
      title: 'Steel Mill Complex',
      location: 'Pennsylvania, US',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      category: 'Steel Production'
    }
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      {/* Settings Icon - Top Left */}
      <div className="absolute top-8 left-8 p-3 bg-white/10 backdrop-blur-sm rounded-lg">
        <Settings className="w-6 h-6 text-white" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            RECENT PROJECTS
          </h2>
          {/* Yellow underline */}
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, mel postea mio liore corrupti ea. Affert partiendo vix eu. 
            Ei mea dolore democritum disu artio.
          </p>
        </div>

        {/* Projects Container */}
        <div className="relative">
          {/* Main Project Display */}
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <div 
              ref={containerRef}
              className="flex transition-transform duration-600 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={project.id} className="w-full flex-shrink-0 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/30"></div>
                  
                  {/* Project Info - Bottom Left */}
                  <div className="absolute bottom-0 left-0 p-8">
                    <div className="bg-black/40 backdrop-blur-sm border-2 border-yellow-400 p-6 rounded-lg max-w-sm">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-yellow-400 font-medium">
                        {project.location}
                      </p>
                    </div>
                  </div>

                  {/* Category Badge - Top Right */}
                  <div className="absolute top-6 right-6">
                    <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold text-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 group disabled:opacity-50"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 group disabled:opacity-50"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Thumbnail Strip */}
        <div className="mt-8">
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 600);
                  }
                }}
                className={`flex-shrink-0 relative group transition-all duration-300 ${
                  index === currentIndex ? 'scale-105' : 'scale-100 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="w-24 h-16 rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                {/* Active Indicator */}
                {index === currentIndex && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-yellow-400 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-12">
          <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-600 ease-in-out"
              style={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
            ></div>
          </div>
          
          {/* Project Counter */}
          <div className="flex justify-between items-center mt-4">
            <span className="text-gray-400 text-sm">
              {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </span>
            <span className="text-yellow-400 font-medium text-sm">
              {projects[currentIndex].category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjectsSection;