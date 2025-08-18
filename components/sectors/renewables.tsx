"use client";

import React, { useEffect } from "react";
import SectorHeader from "./sector-header";

export default function RenewablesPage(): React.ReactElement {
  // Scroll-reveal: toggles data attribute for Tailwind’s arbitrary-variant classes
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.inview = "true";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document
      .querySelectorAll<HTMLElement>("[data-reveal]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div id="top" className="bg-slate-50 text-slate-900 antialiased">
        {/* Mast */}
        <SectorHeader
          title="Renewables"
          subtitle="Maximizing efficiency and safety in renewable energy operations"
          navItems={[
            { href: "#subsea", label: "Subsea" },
            { href: "#riser", label: "Riser systems" },
            { href: "#wellhead", label: "Wellhead / conductor / casing" },
            { href: "#pipeline", label: "Pipeline" },
            { href: "#mooring", label: "Mooring" },
            { href: "#topside", label: "Topside" },
          ]}
        />

        <main className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16">
          {/* Intro */}
          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-brand-ink text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">
              Scope
            </h2>
            <div className="mt-2 sm:mt-3 h-[2px] sm:h-[3px] w-36 sm:w-44 bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-700" />
            <p className="mt-5 sm:mt-6 max-w-3xl text-slate-700 text-[15px] sm:text-base md:text-lg">
              We deploy rigorous engineering, fast iteration and field-proven
              procedures to reduce risk, compress schedule and drive uptime
              across offshore assets.
            </p>
          </section>

          {/* Cards */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {/* Subsea */}
            <article
              id="subsea"
              data-reveal
              className="bg-white shadow-elevated transition-all duration-200 hover:-translate-y-0.5 hover:shadow-elevated-lg opacity-0 translate-y-4 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
            >
              <div className="grid md:grid-cols-2">
                <figure
                  aria-hidden
                  className="relative h-44 sm:h-56 md:h-full overflow-hidden"
                >
                  <svg
                    className="absolute inset-0 h-full w-full animate-slowFloat motion-reduce:animate-none"
                    viewBox="0 0 800 600"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <defs>
                      <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#0E3A8A" />
                        <stop offset="100%" stopColor="#06B6D4" />
                      </linearGradient>
                      <pattern
                        id="p1"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M0 40 L40 0 M-10 10 L10 -10"
                          stroke="#ffffff22"
                          strokeWidth="2"
                        />
                      </pattern>
                    </defs>
                    <rect width="800" height="600" fill="url(#g1)" />
                    <rect width="800" height="600" fill="url(#p1)" />
                    <g stroke="#ffffff55" strokeWidth="6" fill="none">
                      <path d="M40,520 C200,480 260,420 420,420 C600,420 640,520 760,520" />
                      <circle cx="200" cy="460" r="18" fill="#ffffff55" />
                      <circle cx="560" cy="460" r="18" fill="#ffffff55" />
                    </g>
                  </svg>
                </figure>
                <div className="p-6 sm:p-7 md:p-8 lg:p-10">
                  <h3 className="text-brand-ink text-xl sm:text-2xl font-bold">
                    Subsea
                  </h3>
                  <p className="mt-3 text-slate-700 text-[15px] sm:text-base">
                    Design, analysis and offshore execution for trees,
                    manifolds, jumpers and controls. We optimise installation
                    windows and mitigate clash, current and soil risks.
                  </p>
                  <ul className="mt-5 sm:mt-6 space-y-2 text-slate-800 text-[15px] sm:text-base">
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-1.5 h-2 w-2 bg-blue-600" />
                      FEED and detailed design
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-1.5 h-2 w-2 bg-blue-600" />
                      Installation engineering &amp; procedures
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-1.5 h-2 w-2 bg-blue-600" />
                      Integrity, intervention and life-extension
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Riser systems */}
            <article
              id="riser"
              data-reveal
              className="bg-white shadow-elevated transition-all duration-200 hover:-translate-y-0.5 hover:shadow-elevated-lg opacity-0 translate-y-4 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
            >
              <div className="grid md:grid-cols-2">
                <div className="order-2 md:order-1 p-6 sm:p-7 md:p-8 lg:p-10">
                  <h3 className="text-brand-ink text-xl sm:text-2xl font-bold">
                    Riser systems
                  </h3>
                  <p className="mt-3 text-slate-700 text-[15px] sm:text-base">
                    End-to-end capability from concept selection through to
                    offshore hook-up. We deliver robust fatigue, VIV and
                    clearance envelopes to unlock uptime.
                  </p>
                  <ul className="mt-5 sm:mt-6 space-y-2 text-slate-800 text-[15px] sm:text-base">
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-1.5 h-2 w-2 bg-cyan-600" />
                      Flexible, SCR, TTR and hybrid risers
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-1.5 h-2 w-2 bg-cyan-600" />
                      Global dynamic analysis &amp; interference checks
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-1.5 h-2 w-2 bg-cyan-600" />
                      Installation and lay-down engineering
                    </li>
                  </ul>
                </div>
                <figure
                  aria-hidden
                  className="order-1 md:order-2 relative h-44 sm:h-56 md:h-full overflow-hidden"
                >
                  <svg
                    className="absolute inset-0 h-full w-full animate-slowFloat motion-reduce:animate-none"
                    viewBox="0 0 800 600"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <defs>
                      <linearGradient id="g2" x1="1" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#06B6D4" />
                        <stop offset="100%" stopColor="#0E3A8A" />
                      </linearGradient>
                    </defs>
                    <rect width="800" height="600" fill="url(#g2)" />
                    <g stroke="#ffffff66" strokeWidth="12" fill="none">
                      <path d="M120,580 C140,300 180,80 260,60 C340,40 380,300 420,360 C460,420 520,460 600,480 C700,505 720,560 740,600" />
                    </g>
                  </svg>
                </figure>
              </div>
            </article>

            {/* Wellhead */}
            <article
              id="wellhead"
              data-reveal
              className="bg-white shadow-elevated transition-all duration-200 hover:-translate-y-0.5 hover:shadow-elevated-lg opacity-0 translate-y-4 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
            >
              <div className="grid md:grid-cols-2">
                <figure
                  aria-hidden
                  className="relative h-44 sm:h-56 md:h-full overflow-hidden"
                >
                  <svg
                    className="absolute inset-0 h-full w-full animate-slowFloat motion-reduce:animate-none"
                    viewBox="0 0 800 600"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <defs>
                      <linearGradient id="g3" x1="0" y1="0" x2="0.9" y2="1">
                        <stop offset="0%" stopColor="#0E3A8A" />
                        <stop offset="100%" stopColor="#22D3EE" />
                      </linearGradient>
                    </defs>
                    <rect width="800" height="600" fill="url(#g3)" />
                    <g stroke="#ffffff55" strokeWidth="8">
                      <line x1="120" y1="0" x2="120" y2="600" />
                      <line x1="200" y1="0" x2="200" y2="600" />
                      <line x1="280" y1="0" x2="280" y2="600" />
                    </g>
                  </svg>
                </figure>
                <div className="p-6 sm:p-7 md:p-8 lg:p-10">
                  <h3 className="text-brand-ink text-xl sm:text-2xl font-bold">
                    Wellhead, conductor and casing
                  </h3>
                  <p className="mt-3 text-slate-700 text-[15px] sm:text-base">
                    Conductor stability, fatigue and drivability assessments to
                    safeguard the well through drilling and production phases.
                  </p>
                  <ul className="mt-5 sm:mt-6 space-y-2 text-slate-800 text-[15px] sm:text-base">
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-1.5 h-2 w-2 bg-blue-600" />
                      Soil–structure interaction &amp; pile design
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-1.5 h-2 w-2 bg-blue-600" />
                      VIV and fatigue screening
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-1.5 h-2 w-2 bg-blue-600" />
                      Drilling support and contingency plans
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Pipeline */}
            <article
              id="pipeline"
              data-reveal
              className="bg-white shadow-elevated transition-all duration-200 hover:-translate-y-0.5 hover:shadow-elevated-lg opacity-0 translate-y-4 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
            >
              <div className="grid md:grid-cols-2">
                <div className="order-2 md:order-1 p-6 sm:p-7 md:p-8 lg:p-10">
                  <h3 className="text-brand-ink text-xl sm:text-2xl font-bold">
                    Pipeline
                  </h3>
                  <p className="mt-3 text-slate-700 text-[15px] sm:text-base">
                    Full-spectrum seabed and in-line engineering from routing
                    and stability to buckle management and piggability.
                  </p>
                  <ul className="mt-5 sm:mt-6 space-y-2 text-slate-800 text-[15px] sm:text-base">
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-1.5 h-2 w-2 bg-cyan-600" />
                      Route engineering &amp; on-bottom stability
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-1.5 h-2 w-2 bg-cyan-600" />
                      Free-span, upheaval &amp; lateral buckling
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-1.5 h-2 w-2 bg-cyan-600" />
                      Pre-commissioning and tie-in methods
                    </li>
                  </ul>
                </div>
                <figure
                  aria-hidden
                  className="order-1 md:order-2 relative h-44 sm:h-56 md:h-full overflow-hidden"
                >
                  <svg
                    className="absolute inset-0 h-full w-full animate-slowFloat motion-reduce:animate-none"
                    viewBox="0 0 800 600"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <defs>
                      <linearGradient id="g4" x1="1" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#06B6D4" />
                        <stop offset="100%" stopColor="#0E3A8A" />
                      </linearGradient>
                    </defs>
                    <rect width="800" height="600" fill="url(#g4)" />
                    <g stroke="#ffffffaa" strokeWidth="20" fill="none">
                      <path d="M-40,300 C120,300 200,220 360,220 C520,220 600,300 760,300" />
                    </g>
                  </svg>
                </figure>
              </div>
            </article>

            {/* Mooring */}
            <article
              id="mooring"
              data-reveal
              className="bg-white shadow-elevated transition-all duration-200 hover:-translate-y-0.5 hover:shadow-elevated-lg opacity-0 translate-y-4 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
            >
              <div className="grid md:grid-cols-2">
                <figure
                  aria-hidden
                  className="relative h-44 sm:h-56 md:h-full overflow-hidden"
                >
                  <svg
                    className="absolute inset-0 h-full w-full animate-slowFloat motion-reduce:animate-none"
                    viewBox="0 0 800 600"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <defs>
                      <linearGradient id="g5" x1="0" y1="0" x2="1" y2="0.8">
                        <stop offset="0%" stopColor="#0E3A8A" />
                        <stop offset="100%" stopColor="#22D3EE" />
                      </linearGradient>
                    </defs>
                    <rect width="800" height="600" fill="url(#g5)" />
                    <g stroke="#ffffff77" strokeWidth="8" fill="none">
                      <line x1="180" y1="0" x2="180" y2="600" />
                      <line x1="400" y1="0" x2="400" y2="600" />
                      <line x1="620" y1="0" x2="620" y2="600" />
                      <polyline points="180,120 400,260 620,120" />
                    </g>
                  </svg>
                </figure>
                <div className="p-6 sm:p-7 md:p-8 lg:p-10">
                  <h3 className="text-brand-ink text-xl sm:text-2xl font-bold">
                    Mooring
                  </h3>
                  <p className="mt-3 text-slate-700 text-[15px] sm:text-base">
                    Station-keeping strategies for semi-submersibles, FPSOs and
                    temporary spreads that drive operability and certification.
                  </p>
                  <ul className="mt-5 sm:mt-6 space-y-2 text-slate-800 text-[15px] sm:text-base">
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-1.5 h-2 w-2 bg-blue-600" />
                      Global performance &amp; line sizing
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-1.5 h-2 w-2 bg-blue-600" />
                      Anchor selection and holding capacity
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-1.5 h-2 w-2 bg-blue-600" />
                      Installation aids &amp; contingency analysis
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Topside */}
            <article
              id="topside"
              data-reveal
              className="bg-white shadow-elevated transition-all duration-200 hover:-translate-y-0.5 hover:shadow-elevated-lg opacity-0 translate-y-4 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
            >
              <div className="grid md:grid-cols-2">
                <div className="order-2 md:order-1 p-6 sm:p-7 md:p-8 lg:p-10">
                  <h3 className="text-brand-ink text-xl sm:text-2xl font-bold">
                    Topside (deck handling, semi-sub, production topside)
                  </h3>
                  <p className="mt-3 text-slate-700 text-[15px] sm:text-base">
                    Practical topsides engineering to compress schedule: layout,
                    handling, integration and commissioning— geared for safe,
                    repeatable execution.
                  </p>
                  <ul className="mt-5 sm:mt-6 space-y-2 text-slate-800 text-[15px] sm:text-base">
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-1.5 h-2 w-2 bg-cyan-600" />
                      Lift &amp; deck handling studies
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-1.5 h-2 w-2 bg-cyan-600" />
                      Semi-sub integration &amp; tie-ins
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-1.5 h-2 w-2 bg-cyan-600" />
                      Operations readiness &amp; procedures
                    </li>
                  </ul>
                </div>
                <figure
                  aria-hidden
                  className="order-1 md:order-2 relative h-44 sm:h-56 md:h-full overflow-hidden"
                >
                  <svg
                    className="absolute inset-0 h-full w-full animate-slowFloat motion-reduce:animate-none"
                    viewBox="0 0 800 600"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <defs>
                      <linearGradient id="g6" x1="1" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22D3EE" />
                        <stop offset="100%" stopColor="#0E3A8A" />
                      </linearGradient>
                    </defs>
                    <rect width="800" height="600" fill="url(#g6)" />
                    <g fill="#ffffff66">
                      <rect x="80" y="380" width="640" height="80" />
                      <rect x="140" y="340" width="140" height="40" />
                      <rect x="320" y="320" width="160" height="60" />
                      <rect x="520" y="300" width="120" height="80" />
                    </g>
                  </svg>
                </figure>
              </div>
            </article>
          </div>

          {/* Back to top */}
          <div className="mt-14 sm:mt-16 md:mt-20">
            <a
              href="#top"
              onClick={scrollTop}
              className="inline-flex items-center gap-2 bg-slate-900 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold uppercase tracking-wide text-white focus:outline-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-brand-ocean focus-visible:outline-offset-2"
            >
              Back to top
              <svg
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10 3l5 6H5l5-6zm0 14V9" />
              </svg>
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
