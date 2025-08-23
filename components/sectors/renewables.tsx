"use client";
import React from "react";
import {
  Anchor,
  Zap,
  Wrench,
  Navigation,
  Ship,
  Building2,
  Leaf,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  capabilities: string[];
  icon: React.ReactNode;
}

const RenewablesPage: React.FC = () => {
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
      {/* this section will serve as the welcome section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left - visually appealing, symmetric, colored title + summary */}
            <div className="md:col-span-7">
              <div className="relative">
                {/* subtle vertical divider for symmetric visual on wide screens */}

                <div className="bg-white p-8 md:pr-12 rounded-none">
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    <span className="block text-primary-blue text-4xl md:text-5xl">
                      OVERVIEW
                    </span>
                  </h2>

                  <p className="text-gray-600 max-w-2xl mb-8 text-lg">
                    Integrated subsea, riser, pipeline, mooring and topside
                    engineering — blended FEED, detailed design and offshore
                    execution to maximise uptime, reduce whole-life costs and
                    de-risk complex developments.
                  </p>

                  {/* symmetric features layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-none w-12 h-12 rounded-none bg-blue-50 text-primary-blue flex items-center justify-center font-semibold shadow-sm">
                        FE
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800">
                          FEED & Concept
                        </h4>
                        <p className="text-sm text-gray-500">
                          Rapid concept iteration with quantifiable risk & cost
                          metrics.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-none w-12 h-12 rounded-none bg-emerald-50 text-emerald-600 flex items-center justify-center font-semibold shadow-sm">
                        IN
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800">
                          Installation Planning
                        </h4>
                        <p className="text-sm text-gray-500">
                          Installation engineering, clash mitigation & vessel
                          optimisation.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-none w-12 h-12 rounded-none bg-sky-50 text-sky-600 flex items-center justify-center font-semibold shadow-sm">
                        MA
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800">
                          Marine Analysis
                        </h4>
                        <p className="text-sm text-gray-500">
                          Global dynamic analysis, VIV and fatigue screening.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-none w-12 h-12 rounded-none bg-gray-100 text-gray-700 flex items-center justify-center font-semibold shadow-sm">
                        OP
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800">
                          Operations Readiness
                        </h4>
                        <p className="text-sm text-gray-500">
                          Procedures, commissioning and lifecycle integrity
                          planning.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - solid-color CTA panel appearing to float */}
            <div className="md:col-span-5 relative flex justify-end">
              {/* decorative floating accent behind CTA */}
              <div className="absolute -right-6 -top-6 w-56 h-56 bg-gradient-to-tr from-blue-100 to-white rounded-none opacity-60 transform rotate-6 blur-xl pointer-events-none"></div>

              <div
                className="relative z-20 w-full max-w-md transform -translate-y-6 shadow-2xl rounded-none"
                aria-hidden="false"
              >
                <div className="bg-primary-blue rounded-none p-6 border border-primary-blue-hover">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-white text-lg font-semibold">
                        Talk to our team
                      </h3>
                      <p className="text-blue-100 text-sm mt-1">
                        Discuss your project requirements and get a tailored
                        subsea engineering approach.
                      </p>
                    </div>

                    <div className="hidden sm:flex items-center">
                      <svg
                        className="w-12 h-12 text-white/20"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <rect
                          x="4"
                          y="6"
                          width="40"
                          height="28"
                          rx="3"
                          stroke="currentColor"
                          strokeWidth="2"
                          opacity="0.12"
                        />
                        <circle
                          cx="14"
                          cy="20"
                          r="2.5"
                          fill="currentColor"
                          opacity="0.08"
                        />
                      </svg>
                    </div>
                  </div>

                  <form onSubmit={(e) => e.preventDefault()} className="mt-4">
                    <div className="space-y-3">
                      <div>
                        <label htmlFor="name" className="sr-only">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          required
                          className="w-full rounded-none px-3 py-2 text-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-blue"
                          type="text"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="sr-only">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          required
                          className="w-full rounded-none px-3 py-2 text-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-blue"
                          type="email"
                          placeholder="you@example.com"
                        />
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <button
                          type="submit"
                          className="inline-flex items-center gap-3 px-4 py-2 bg-white text-primary-blue-hover text-sm font-medium rounded-none shadow-sm hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-blue"
                        >
                          Contact our experts
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              d="M5 12h14"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 5l7 7-7 7"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>

                        <div className="flex items-center gap-3">
                          <svg
                            className="w-10 h-10 text-white/20"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              d="M24 6v12"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              opacity="0.12"
                            />
                            <circle
                              cx="24"
                              cy="20"
                              r="4"
                              fill="currentColor"
                              opacity="0.08"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                {/* subtle shadowed outline to enhance floating look */}
                <div className="absolute -inset-1 rounded-none pointer-events-none blur-[6px] opacity-10 bg-gradient-to-tr from-primary-blue-hover to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About sector Extraordinary Design */}
      <div className="relative overflow-hidden bg-white">
        <div className="max-w-[1480px] mx-auto px-6 py-20">
          <div className="relative">
            {/* Trapezium-shaped image container (replace URL with your image) */}
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 h-full w-[800px] pointer-events-none"
            >
              <div
                className="h-full w-full bg-cover bg-center bg-no-repeat"
                style={{
                  clipPath: "polygon(0 0, 85% 4%, 75% 100%, 0% 100%)",
                  backgroundImage:
                    "url('/images/sector-banner-renewables.jpg')",
                }}
              />
            </div>

            {/* subtle left-side trapezium gradient overlay for depth */}
            <svg
              className="absolute left-0 top-0 h-full w-[880px] pointer-events-none"
              viewBox="0 0 200 800"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="trapezGrad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#0369a1" stopOpacity="0.06" />
                </linearGradient>
              </defs>
              <polygon
                points="0,0 160,40 140,760 0,800"
                fill="url(#trapezGrad)"
              />
            </svg>

            {/* Diagonal text arrangement */}
            <div className="relative z-10 grid grid-cols-12 gap-6 items-center min-h-[600px]">
              {/* Left column with watermark */}
              <div className="col-span-1 relative flex items-center justify-center">
                {/* use imported Leaf icon from lucide-react (add `Leaf` to your imports) */}
                <Leaf
                  className="absolute left-4 -top-14 w-24 h-24 opacity-100 pointer-events-none text-white"
                  aria-hidden="true"
                />
              </div>

              <div className="col-span-5">
                <div className="space-y-6">
                  <h1 className="text-6xl font-black text-white leading-none">
                    RENEWABLES
                    <span className="block text-white">SECTOR</span>
                  </h1>
                  <div className="w-24 h-1 bg-white"></div>
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

                    <div className="bg-primary-blue text-white p-8 ml-16 transform -skew-x-6">
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
                <div className="absolute -left-8 top-0 w-2 h-32 bg-primary-blue"></div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Our Sectors
                </h2>

                <div className="space-y-8">
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-2 w-4 h-4 bg-primary-blue"></div>
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

            {/* Right side - Visual element with aligned connectors */}
            <div className="col-span-5">
              <div className="relative mt-16">
                {/* Vertical spine that horizontal connectors will meet */}
                {/* <div className="absolute left-[-64px] top-0 bottom-0 w-px bg-gray-400" /> */}

                {/* Stacked visualization blocks */}
                <div className="space-y-12">
                  <div className="relative bg-primary-blue h-20 w-full">
                    <div className="absolute right-0 top-0 w-16 h-full bg-primary-blue"></div>
                    <div className="absolute left-8 top-6 text-white font-bold">
                      SUBSEA
                    </div>

                    {/* horizontal connector aligned to vertical spine */}
                    <div className="absolute left-[-64px] top-1/2 transform -translate-y-1/2 w-20 h-px bg-gray-400" />
                    {/* small node at spine for visual connection */}
                    <div className="absolute left-[-64px] top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full" />
                  </div>

                  <div className="relative bg-gray-800 h-24 w-4/5 ml-auto">
                    <div className="absolute left-0 top-0 w-16 h-full bg-gray-900"></div>
                    <div className="absolute right-8 top-8 text-white font-bold">
                      RISER SYSTEMS
                    </div>

                    <div className="absolute left-[-64px] top-1/2 transform -translate-y-1/2 w-20 h-px bg-gray-400" />
                    <div className="absolute left-[-64px] top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full" />
                  </div>

                  <div className="relative bg-blue-400 h-16 w-3/4">
                    <div className="absolute right-0 top-0 w-12 h-full bg-primary-blue"></div>
                    <div className="absolute left-8 top-4 text-white font-bold ">
                      PIPELINE
                    </div>

                    <div className="absolute left-[-64px] top-1/2 transform -translate-y-1/2 w-20 h-px bg-gray-400" />
                    <div className="absolute left-[-64px] top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full" />
                  </div>

                  <div className="relative bg-gray-700 h-28 w-5/6 ml-auto">
                    <div className="absolute left-0 top-0 w-20 h-full bg-gray-900"></div>
                    <div className="absolute right-8 top-10 text-white font-bold">
                      MOORING & TOPSIDE
                    </div>

                    <div className="absolute left-[-64px] top-1/2 transform -translate-y-1/2 w-20 h-px bg-gray-400" />
                    <div className="absolute left-[-64px] top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services Cards */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center mb-12 gap-6">
            {/* Left - CTA text and button (wider now) */}
            <div className="md:col-span-2 flex flex-col items-start">
              <div className="relative w-full max-w-lg">
                <div className="bg-white p-6 rounded-none shadow-sm">
                  <p className="text-gray-700 mb-4 text-lg font-medium">
                    Let’s craft a bespoke subsea plan — practical, fast and
                    cost-aware.
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-blue to-primary-blue-hover text-white text-sm font-semibold rounded-none shadow-lg border-2 border-primary-blue hover:brightness-95 transform hover:-translate-y-1 transition-all"
                  >
                    Contact our experts
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12h14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Title styled like "Our Sectors" (accent bar + offset) */}
            <div className="md:col-span-1 flex justify-end">
              <div className="relative w-full max-w-xs">
                {/* <div className="absolute -right-8 top-0 w-2 h-24 bg-primary-blue" /> */}
                <div className="text-right pr-6">
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">
                    What We Offer
                  </h2>
                  <p className="text-sm text-gray-500 mb-3">
                    Subtle, tailored services designed to meet your project's
                    objectives.
                  </p>
                  <div className="inline-block w-16 h-1  rounded-full opacity-60 ml-auto" />
                </div>

                {/* subtle decorative dot cluster for texture */}
                <svg
                  className="absolute -right-2 bottom-0 w-20 h-20 opacity-10 pointer-events-none text-primary-blue"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  {/* <circle cx="3" cy="3" r="0.9" fill="currentColor" /> */}
                  {/* <circle cx="9" cy="3" r="0.9" fill="currentColor" /> */}
                  <circle cx="15" cy="3" r="0.9" fill="currentColor" />
                  {/* <circle cx="3" cy="9" r="0.9" fill="currentColor" /> */}
                  {/* <circle cx="9" cy="9" r="0.9" fill="currentColor" /> */}
                  <circle cx="15" cy="9" r="0.9" fill="currentColor" />
                  <circle cx="3" cy="15" r="0.9" fill="currentColor" />
                  <circle cx="9" cy="15" r="0.9" fill="currentColor" />
                  <circle cx="15" cy="15" r="0.9" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 border-2 border-gray-200 hover:border-primary-blue transition-all duration-300 group h-full flex flex-col overflow-hidden"
              >
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="text-primary-blue group-hover:text-primary-blue-hover transition-colors">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>

                    <div className="w-8 h-px bg-gray-300 group-hover:bg-blue-400 transition-colors" />
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed text-sm flex-1">
                    {service.description}
                  </p>

                  <ul className="space-y-2 m-0 p-0 mt-2">
                    {service.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="flex items-start">
                        <span
                          className="flex-none w-2 h-2 bg-primary-blue mr-3  mt-1"
                          aria-hidden="true"
                        />
                        <span className="text-gray-700 text-xs leading-tight">
                          {capability}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-1 bg-primary-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenewablesPage;
