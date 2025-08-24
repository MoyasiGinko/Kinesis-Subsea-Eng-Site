import React from "react";
import { ArrowRight, Play } from "lucide-react";

interface HeroProps {
  tagline?: string;
  headline?: string;
  subheading?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
}

const ServiceHero: React.FC<HeroProps> = ({
  tagline = "Kinesis Subsea",
  headline = "Subsea Services",
  subheading = "Specialist engineering, inspection and maintenance for offshore assets — ROV operations, pipeline integrity, structural analysis and installation support.",
  primaryCTA = "Request a Quote",
  secondaryCTA = "Watch Overview",
}) => {
  return (
    <section className="relative bg-primary-blue overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue via-white/50 to-blue-50/30" />

      {/* Diagonal Accent */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-primary-blue/5 to-slate-900/5"
        style={{ clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      />

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(15,23,42,1) 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative min-h-[700px] lg:min-h-[800px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Tagline */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-px bg-gradient-to-r from-primary-blue to-slate-600" />
                <span className="text-sm font-semibold text-slate-600 uppercase tracking-widest">
                  {tagline}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
                {headline}
              </h1>

              {/* Subheading */}
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl">
                {subheading}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button className="group inline-flex items-center justify-center px-8 py-4 bg-primary-blue hover:bg-primary-blue-hover text-white font-semibold text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2">
                  {primaryCTA}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                <button className="group inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-slate-50 text-slate-700 font-semibold text-lg border-2 border-slate-300 hover:border-slate-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  {secondaryCTA}
                </button>
              </div>

              {/* Company Logos */}
              <div className="pt-12">
                <p className="text-sm font-medium text-slate-500 mb-6 uppercase tracking-wide">
                  Our Expertise
                </p>
                <div className="flex items-center space-x-8 opacity-60">
                  <div className="w-28 h-8 bg-slate-300 flex items-center justify-center">
                    <span className="text-xs font-bold text-slate-600">
                      SUBSEA
                    </span>
                  </div>
                  <div className="w-28 h-8 bg-slate-300 flex items-center justify-center">
                    <span className="text-xs font-bold text-slate-600">
                      RISER SYSTEMS
                    </span>
                  </div>
                  <div className="w-28 h-8 bg-slate-300 flex items-center justify-center">
                    <span className="text-xs font-bold text-slate-600">
                      PIPELINE
                    </span>
                  </div>
                  <div className="w-28 h-8 bg-slate-300 flex items-center justify-center">
                    <span className="text-xs font-bold text-slate-600">
                      MOORING
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Hero Image */}
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-slate-200 via-slate-100 to-blue-100 w-full h-[500px] lg:h-[600px] flex items-center justify-center shadow-2xl">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary-blue mx-auto flex items-center justify-center">
                      <div className="w-8 h-8 bg-white"></div>
                    </div>
                    <p className="text-slate-600 font-medium text-lg">
                      Subsea Systems & ROV Operations
                    </p>
                    <p className="text-slate-500 text-sm max-w-xs mx-auto">
                      Replace with your project image, schematic, or subsea
                      equipment photo
                    </p>
                  </div>
                </div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-100 opacity-40 z-0" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-slate-100 opacity-60 z-0" />

              {/* Floating Stats Cards */}
              <div className="absolute top-12 -left-6 bg-white p-4 shadow-lg border border-slate-100 z-20">
                <div className="text-2xl font-bold text-primary-blue">24/7</div>
                <div className="text-sm text-slate-600 font-medium">
                  ROV & Subsea Operations Support
                </div>
              </div>

              <div className="absolute bottom-16 -right-6 bg-white p-4 shadow-lg border border-slate-100 z-20">
                <div className="text-2xl font-bold text-primary-blue">
                  ISO 9001
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  Quality & Environmental Management (ISO 9001 / ISO 14001)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
