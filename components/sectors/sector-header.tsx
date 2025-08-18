import React from "react";

type NavItem = { href: string; label: string };

interface SectorHeaderProps {
  title?: string;
  subtitle?: string;
  navItems?: NavItem[];
  // allow overriding spacing/height and overall header classes if needed
  heightClass?: string;
  headerClasses?: string;
  borderGradientClass?: string;
  className?: string;
}

/**
 * Dynamic sector header
 * Usage:
 * <SectorHeader
 *   title="Oil & Gas"
 *   subtitle="High-impact subsea and topsides engineering—built for certainty."
 *   navItems={[{ href: '#subsea', label: 'Subsea' }, ...]}
 * />
 */
export default function SectorHeader({
  title = "Oil & Gas",
  subtitle = "High-impact subsea and topsides engineering—built for certainty.",
  navItems = [
    { href: "#subsea", label: "Subsea" },
    { href: "#riser", label: "Riser systems" },
    { href: "#wellhead", label: "Wellhead / conductor / casing" },
    { href: "#pipeline", label: "Pipeline" },
    { href: "#mooring", label: "Mooring" },
    { href: "#topside", label: "Topside" },
  ],
  heightClass = "h-72 sm:h-96 lg:h-[420px]",
  headerClasses = "text-white bg-gradient-to-r from-brand-ink via-brand-ocean to-brand-ink bg-[length:200%_200%] animate-gradientShift motion-reduce:animate-none",
  borderGradientClass = "h-0.5 sm:h-1 w-full bg-gradient-to-r from-brand-cyan via-blue-400 to-brand-cyan",
  className = "",
}: SectorHeaderProps) {
  return (
    <header className={`${headerClasses} ${className}`}>
      <div
        className={`${heightClass} flex flex-col justify-center items-start mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-14`}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-base sm:text-lg md:text-xl text-slate-100/90">
            {subtitle}
          </p>
        )}

        <nav
          className="mt-7 sm:mt-8 flex flex-wrap gap-2 sm:gap-3"
          aria-label="sector navigation"
        >
          {navItems.map(({ href, label }) => (
            <a
              key={href + label}
              href={href}
              className="bg-white/10 hover:bg-white/15 px-4 py-2 sm:px-5 text-xs sm:text-sm font-semibold uppercase tracking-wide text-white focus:outline-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-brand-ocean focus-visible:outline-offset-2"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      <div className={borderGradientClass} />
    </header>
  );
}
