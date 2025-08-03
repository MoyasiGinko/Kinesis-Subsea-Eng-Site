"use client"
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content - Left Side */}
          <div className="lg:w-1/2 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Next Project?
            </h2>
            
            <p className="text-xl text-blue-100 max-w-2xl">
              Transform your vision into reality with our expert team. We deliver innovative solutions 
              that drive success and exceed expectations.
            </p>
          </div>

          {/* Buttons - Right Side */}
          <div className="lg:w-1/2 flex flex-col sm:flex-row gap-4 justify-end">
            <button 
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              <div className="flex items-center space-x-3">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </button>

            <button 
              className="px-8 py-4 border-2 border-white/30 hover:border-white text-white font-semibold transition-all duration-300 hover:bg-white/10 whitespace-nowrap"
            >
              <div className="flex items-center space-x-3">
                <span>View Our Portfolio</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
