import React from "react";
import { Anchor, Zap, Wrench, Navigation, Ship, Building2 } from "lucide-react";

interface Service {
  title: string;
  description: string;
  capabilities: string[];
  icon: React.ReactNode;
}

const OilAndGasPage: React.FC = () => {
  const services: Service[] = [
    {
      title: "Subsea",
      description:
        "Design, analysis and offshore execution for trees, manifolds, jumpers and controls. We optimise installation windows and mitigate clash, current and soil risks.",
      capabilities: [
        "FEED and detailed design",
        "Installation engineering & procedures",
        "Integrity, intervention and life-extension",
      ],
      icon: <Anchor className="w-8 h-8" />,
    },
    {
      title: "Riser systems",
      description:
        "End-to-end capability from concept selection through to offshore hook-up. We deliver robust fatigue, VIV and clearance envelopes to unlock uptime.",
      capabilities: [
        "Flexible, SCR, TTR and hybrid risers",
        "Global dynamic analysis & interference checks",
        "Installation and lay-down engineering",
      ],
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Wellhead, conductor and casing",
      description:
        "Conductor stability, fatigue and drivability assessments to safeguard the well through drilling and production phases.",
      capabilities: [
        "Soil–structure interaction & pile design",
        "VIV and fatigue screening",
        "Drilling support and contingency plans",
      ],
      icon: <Wrench className="w-8 h-8" />,
    },
    {
      title: "Pipeline",
      description:
        "Full-spectrum seabed and in-line engineering from routing and stability to buckle management and piggability.",
      capabilities: [
        "Route engineering & on-bottom stability",
        "Free-span, upheaval & lateral buckling",
        "Pre-commissioning and tie-in methods",
      ],
      icon: <Navigation className="w-8 h-8" />,
    },
    {
      title: "Mooring",
      description:
        "Station-keeping strategies for semi-submersibles, FPSOs and temporary spreads that drive operability and certification.",
      capabilities: [
        "Global performance & line sizing",
        "Anchor selection and holding capacity",
        "Installation aids & contingency analysis",
      ],
      icon: <Ship className="w-8 h-8" />,
    },
    {
      title: "Topside",
      description:
        "Practical topsides engineering to compress schedule: layout, handling, integration and commissioning— geared for safe, repeatable execution.",
      capabilities: [
        "Lift & deck handling studies",
        "Semi-sub integration & tie-ins",
        "Operations readiness & procedures",
      ],
      icon: <Building2 className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Project Overview - Extraordinary Design */}
      <div className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="relative">
            {/* Background geometric patterns */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 border-l-8 border-t-8 border-blue-600"></div>
              <div className="absolute top-20 right-0 w-64 h-64 border-r-4 border-b-4 border-gray-800"></div>
              <div className="absolute bottom-0 left-1/3 w-80 h-80 border-l-6 border-blue-400"></div>
            </div>

            {/* Diagonal text arrangement */}
            <div className="relative z-10 grid grid-cols-12 gap-6 items-center min-h-[600px]">
              <div className="col-span-1">
                <div className="writing-mode-vertical text-gray-600 font-bold text-sm tracking-widest transform -rotate-90">
                  SECTOR OVERVIEW
                </div>
              </div>

              <div className="col-span-5">
                <div className="space-y-6">
                  <h1 className="text-6xl font-black text-gray-900 leading-none">
                    OIL & GAS
                    <span className="block text-blue-600">SECTOR</span>
                  </h1>
                  <div className="w-24 h-1 bg-blue-600"></div>
                </div>
              </div>

              <div className="col-span-6">
                <div className="relative">
                  {/* Stepped content blocks */}
                  <div className="space-y-0">
                    <div className="bg-gray-900 text-white p-8 ml-0 transform -skew-x-6">
                      <div className="transform skew-x-6">
                        <p className="text-lg leading-relaxed">
                          The offshore oil and gas industry operates in some of
                          the world's most challenging environments, demanding
                          precision engineering solutions that ensure safety,
                          efficiency, and environmental stewardship.
                        </p>
                      </div>
                    </div>

                    <div className="bg-blue-600 text-white p-8 ml-16 transform -skew-x-6">
                      <div className="transform skew-x-6">
                        <p className="text-lg leading-relaxed">
                          Our comprehensive approach addresses the complex
                          interplay between subsea systems, structural
                          integrity, and operational excellence that defines
                          modern offshore development.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-800 text-white p-8 ml-32 transform -skew-x-6">
                      <div className="transform skew-x-6">
                        <p className="text-lg leading-relaxed">
                          Through rigorous analysis and field-proven
                          methodologies, we deliver solutions that minimize risk
                          while maximizing asset performance across the entire
                          project lifecycle.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Sectors - Asymmetrical Layout */}
      <div className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Left side - Offset content */}
            <div className="col-span-7">
              <div className="relative">
                <div className="absolute -left-8 top-0 w-2 h-32 bg-blue-600"></div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Our Sectors
                </h2>

                <div className="space-y-8">
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-2 w-4 h-4 bg-blue-600"></div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Subsea Engineering Excellence
                      </h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Our subsea capabilities encompass the complete spectrum
                        from conceptual design through to offshore execution. We
                        specialize in trees, manifolds, jumpers and control
                        systems, optimizing installation windows while
                        systematically mitigating clash, current and soil
                        interaction risks. Our FEED and detailed design services
                        are complemented by comprehensive installation
                        engineering procedures and long-term integrity
                        management strategies.
                      </p>
                    </div>
                  </div>

                  <div className="relative pl-8">
                    <div className="absolute left-0 top-2 w-4 h-4 bg-gray-800"></div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Integrated Riser & Pipeline Solutions
                      </h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        From flexible risers to steel catenary systems, our
                        end-to-end capabilities span concept selection through
                        offshore hook-up. We deliver robust fatigue analysis,
                        VIV assessments, and clearance envelopes that unlock
                        operational uptime. Our pipeline expertise covers
                        full-spectrum seabed engineering, routing optimization,
                        stability analysis, and advanced buckle management
                        strategies.
                      </p>
                    </div>
                  </div>

                  <div className="relative pl-8">
                    <div className="absolute left-0 top-2 w-4 h-4 bg-blue-400"></div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Topside & Mooring Integration
                      </h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Our topside engineering compresses project schedules
                        through optimized layout design, handling studies, and
                        seamless integration protocols. Combined with our
                        mooring expertise for FPSOs, semi-submersibles and
                        temporary spreads, we deliver station-keeping strategies
                        that drive operability and certification while ensuring
                        safe, repeatable execution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Visual element */}
            <div className="col-span-5">
              <div className="relative mt-16">
                {/* Stacked visualization blocks */}
                <div className="space-y-4">
                  <div className="bg-blue-600 h-20 w-full relative">
                    <div className="absolute right-0 top-0 w-16 h-full bg-blue-800"></div>
                    <div className="absolute left-8 top-6 text-white font-bold">
                      SUBSEA
                    </div>
                  </div>

                  <div className="bg-gray-800 h-24 w-4/5 ml-auto relative">
                    <div className="absolute left-0 top-0 w-16 h-full bg-gray-900"></div>
                    <div className="absolute right-8 top-8 text-white font-bold">
                      RISER SYSTEMS
                    </div>
                  </div>

                  <div className="bg-blue-400 h-16 w-3/4 relative">
                    <div className="absolute right-0 top-0 w-12 h-full bg-blue-600"></div>
                    <div className="absolute left-8 top-4 text-white font-bold text-sm">
                      PIPELINE
                    </div>
                  </div>

                  <div className="bg-gray-700 h-28 w-5/6 ml-auto relative">
                    <div className="absolute left-0 top-0 w-20 h-full bg-gray-900"></div>
                    <div className="absolute right-8 top-10 text-white font-bold">
                      MOORING & TOPSIDE
                    </div>
                  </div>
                </div>

                {/* Connecting lines */}
                <div className="absolute -left-8 top-0 bottom-0 w-px bg-gray-400"></div>
                <div className="absolute -left-12 top-8 w-4 h-px bg-gray-400"></div>
                <div className="absolute -left-12 top-28 w-4 h-px bg-gray-400"></div>
                <div className="absolute -left-12 top-44 w-4 h-px bg-gray-400"></div>
                <div className="absolute -left-12 top-64 w-4 h-px bg-gray-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Cards */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 border-2 border-gray-200 hover:border-blue-600 transition-all duration-300 group"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
                      {service.icon}
                    </div>
                    <div className="w-8 h-px bg-gray-300 group-hover:bg-blue-400 transition-colors"></div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-start">
                        <div className="w-2 h-px bg-blue-600 mt-3 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm font-medium">
                          {capability}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OilAndGasPage;
