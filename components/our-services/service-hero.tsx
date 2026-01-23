import React, { useEffect, useState } from "react";
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
  const coreHighlights = [
    {
      title: "Engineering Design & Simulation",
      summary:
        "Conceptual, optioneering, FEED and detailed design with advanced simulation to de-risk delivery.",
      bullets: [
        "Conceptual & optioneering",
        "FEED and detailed design",
        "Advanced simulation and analysis",
      ],
      bg: "from-sky-500/10",
      colorChip: "bg-sky-500",
    },
    {
      title: "System Optimisation",
      summary:
        "We combine advanced simulation tools with deep domain knowledge to optimize system performance, reduce risk, and support efficient offshore operations.",
      bullets: [
        "Integrated system design",
        "Performance & risk optimisation",
        "Interface & operability assurance",
      ],
      bg: "from-emerald-500/10",
      colorChip: "bg-emerald-500",
    },
    {
      title: "Fatigue & Life Extension",
      summary:
        "Global and local fatigue analysis to plan interventions and extend asset life with confidence.",
      bullets: [
        "Global and local fatigue",
        "Life extension strategies",
        "Integrity & reliability planning",
      ],
      bg: "from-amber-500/10",
      colorChip: "bg-amber-500",
    },
    {
      title: "Operations Support",
      summary:
        "Provide technical support to offshore operation. Things does not always go according to plan on the of the operation day, maybe equipment breakdown, or extreme weather. Carried out simulation based on live weather condition or short term weather forecast.",
      bullets: [
        "Live/forecast-based simulations",
        "Rapid contingency response",
        "Technical support offshore",
      ],
      bg: "from-indigo-500/10",
      colorChip: "bg-indigo-500",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % coreHighlights.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

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
              <p className="text-lg lg:text-xl text-gray-50 leading-relaxed max-w-2xl">
                We are specialists in Subsea Engineering, with a core focus on
                Design, Analysis, and Simulation. We combine advanced simulation
                tools with deep domain knowledge to optimize system performance,
                reduce risk, and support efficient offshore operations.
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

              {/* core services chips */}
              <div className="pt-6 flex flex-wrap gap-3">
                {coreHighlights.map((item, idx) => (
                  <button
                    key={item.title}
                    onClick={() => setActiveIndex(idx)}
                    className={`inline-flex items-center gap-2 px-3 py-2  text-sm font-medium transition-colors duration-200 ${
                      activeIndex === idx
                        ? "bg-white text-primary-blue"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${item.colorChip}`}
                      aria-hidden="true"
                    />
                    <span className="uppercase tracking-wide">
                      {item.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Single Active Card */}
            <div className="relative">
              <div className="relative text-left bg-white/95 z-[10] border border-white/60 shadow-2xl rounded-md p-6 md:p-8 overflow-hidden backdrop-blur-sm min-h-[360px] flex flex-col gap-4">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${coreHighlights[activeIndex].bg} to-transparent`}
                  aria-hidden="true"
                />
                <div className="relative space-y-4">
                  <h3 className="text-2xl font-bold text-primary-blue">
                    {coreHighlights[activeIndex].title}
                  </h3>
                  <p className="text-base text-slate-700 leading-relaxed">
                    {coreHighlights[activeIndex].summary}
                  </p>
                  <ul className="space-y-2 text-base text-slate-800">
                    {coreHighlights[activeIndex].bullets.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span
                          className="mt-2 inline-block h-2 w-2 rounded-full bg-primary-blue"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-100 opacity-40 z-[-0]" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-slate-100 opacity-60 z-[-0]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
