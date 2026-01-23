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

      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-primary-blue/5 to-slate-900/5"
        style={{ clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover pointer-events-none"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dvvcwzp4n/image/upload/v1754738820/5_yhjlu6.webp')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.18,
          mixBlendMode: "overlay",
        }}
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
        <div className="max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Tagline */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-px bg-gradient-to-r from-gray-50 to-slate-50" />
                <span className="text-sm font-semibold text-gray-50 uppercase tracking-widest">
                  {tagline}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                {headline}
              </h1>

              {/* Subheading */}
              <p className="text-lg lg:text-xl text-gray-50 leading-relaxed max-w-xl">
                {subheading}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button className="group inline-flex items-center justify-center px-8 py-4 bg-primary-blue hover:bg-primary-blue-hover text-white font-semibold text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2">
                  {primaryCTA}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                <button className="group inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-slate-50 text-white hover:text-black font-semibold text-lg border-2 border-white hover:border-slate-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  {secondaryCTA}
                </button>
              </div>

              {/* Company Logos */}
              {/* <div className="pt-12">
                <p className="text-sm font-medium text-white mb-6 uppercase tracking-wide">
                  Our Expertise
                </p>
                <div className="flex items-center space-x-8 opacity-60">
                  <div className="w-28 h-8 bg-slate-50 flex items-center justify-center">
                    <span className="text-xs font-bold text-slate-600">
                      SUBSEA
                    </span>
                  </div>
                  <div className="w-28 h-8 bg-slate-50 flex items-center justify-center">
                    <span className="text-xs font-bold text-slate-600">
                      RISER SYSTEMS
                    </span>
                  </div>
                  <div className="w-28 h-8 bg-slate-50 flex items-center justify-center">
                    <span className="text-xs font-bold text-slate-600">
                      PIPELINE
                    </span>
                  </div>
                  <div className="w-28 h-8 bg-slate-50 flex items-center justify-center">
                    <span className="text-xs font-bold text-slate-600">
                      MOORING
                    </span>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Right Side - Hero Image */}
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10">
                {(() => {
                  const images: string[] = [
                    "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1754738819/3_yp4wiw.webp",
                    "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1754738819/4_a40enk.webp",
                    "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1754738820/5_yhjlu6.webp",
                    "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1754738819/2_vfvnuz.webp",
                    "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1754738820/1_jvnjiz.webp",
                  ];

                  const [index, setIndex] = React.useState<number>(0);

                  // preload images
                  React.useEffect(() => {
                    images.forEach((src) => {
                      const img = new Image();
                      img.src = src;
                    });
                  }, []);

                  // cycle through images
                  React.useEffect(() => {
                    const id = setInterval(() => {
                      setIndex((i) => (i + 1) % images.length);
                    }, 4000);
                    return () => clearInterval(id);
                  }, []);

                  return (
                    <div className="w-full h-[500px] lg:h-[500px] relative overflow-hidden rounded-md shadow-2xl">
                      {images.map((src, i) => (
                        <div
                          key={src}
                          className={`absolute inset-0 bg-center bg-cover transition-opacity duration-700 ${
                            i === index ? "opacity-100" : "opacity-0"
                          }`}
                          style={{ backgroundImage: `url("${src}")` }}
                        />
                      ))}

                      {/* overlay content (caption / placeholder) */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

                      {/* indicators */}
                      <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
                        {images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              i === index ? "bg-white scale-125" : "bg-white/40"
                            }`}
                            aria-label={`Show image ${i + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-100 opacity-40 z-0" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-slate-100 opacity-60 z-0" />

              {/* Floating Stats Cards */}
              <div className="absolute top-12 -left-6 bg-white p-4 shadow-lg border border-slate-100 z-20">
                <div className="text-2xl font-bold text-primary-blue">24/7</div>
                <div className="text-sm text-slate-600 font-medium">
                  ROV Support
                </div>
              </div>

              <div className="absolute bottom-16 -right-6 bg-white p-4 shadow-lg border border-slate-100 z-20">
                <div className="text-2xl font-bold text-primary-blue">
                  ISO 9001
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  (ISO 9001 / ISO 14001)
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
