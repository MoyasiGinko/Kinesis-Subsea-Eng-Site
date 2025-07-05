"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const menuItems = [
  {
    title: "Who We Are",
    href: "/who-we-are",
    submenu: [
      { title: "Purpose", href: "/who-we-are/purpose-beliefs" },
      { title: "History", href: "/who-we-are/our-history" },
      { title: "Team", href: "/who-we-are/meet-our-team" },
    ],
  },
  {
    title: "What We Do",
    href: "/what-we-deliver",
    submenu: [
      { title: "Insights", href: "/what-we-deliver/news-insights" },
      { title: "Innovations", href: "/what-we-deliver/our-innovations" },
      { title: "Markets", href: "/what-we-deliver/our-markets" },
      { title: "Events", href: "/what-we-deliver/events" },
      {
        title: "Academy",
        href: "/what-we-deliver/kinesis-academy-for-operational-readiness",
      },
    ],
  },
  {
    title: "Sustainability",
    href: "/sustainability",
    submenu: [
      { title: "People", href: "/sustainability/people" },
      { title: "Planet", href: "/sustainability/planet" },
      { title: "Principles", href: "/sustainability/principles" },
    ],
  },
  {
    title: "Services",
    href: "/our-services",
    submenu: [
      {
        title: "Engineering & Analysis",
        href: "/our-services/engineering-analysis",
      },
      { title: "Products", href: "/our-services/products" },
      { title: "Software", href: "/our-services/software" },
      { title: "Renewables", href: "/our-services/renewables" },
      { title: "Testing", href: "/our-services/testing" },
      { title: "Past Projects", href: "/our-services/past-projects" },
      { title: "Training", href: "/our-services/training" },
    ],
  },
  { title: "Contact", href: "/contact-us" },
  { title: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const toggleMenu = (index: number) => {
    if (openMenuIndex === index) {
      setOpenMenuIndex(null);
    } else {
      setOpenMenuIndex(index);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-3 md:p-4">
        <Link href="/" className="flex items-center">
          <img
            src="/logo-white.svg"
            alt="Kinesis Subsea Engineering Logo"
            className="h-10 md:h-12  w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 text-sm font-medium">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group flex items-center">
              <Link
                href={item.href}
                className="hover:text-gray-300 transition px-1 py-2"
                onClick={(e) => {
                  if (item.submenu) e.preventDefault();
                }}
                onMouseEnter={() => setOpenMenuIndex(index)}
                onMouseLeave={() => setOpenMenuIndex(null)}
              >
                {item.title}
              </Link>
              {item.submenu && openMenuIndex === index && (
                <div
                  onMouseEnter={() => setOpenMenuIndex(index)}
                  onMouseLeave={() => setOpenMenuIndex(null)}
                  className="absolute top-full left-0 bg-black border border-gray-700 rounded shadow-lg py-2 min-w-[160px] z-50"
                >
                  {item.submenu.map((subitem, subindex) => (
                    <Link
                      key={subindex}
                      href={subitem.href}
                      className="block px-4 py-2 hover:bg-gray-800 whitespace-nowrap"
                    >
                      {subitem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Search Form */}
        <form
          onSubmit={handleSearchSubmit}
          className="hidden md:flex items-center ml-2"
        >
          <input
            type="text"
            placeholder="Search..."
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-2 py-1 rounded-l bg-white text-black focus:outline-none text-sm"
          />
          <button
            type="submit"
            className="bg-white text-black px-2 py-1 rounded-r hover:bg-gray-200 text-sm"
          >
            Search
          </button>
        </form>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none ml-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-black border-t border-gray-700">
          {menuItems.map((item, index) => (
            <div key={index} className="border-b border-gray-700">
              <button
                className="w-full text-left px-4 py-3 flex justify-between items-center text-white"
                onClick={() => toggleMenu(index)}
              >
                <span>{item.title}</span>
                {item.submenu && (
                  <svg
                    className={`w-4 h-4 transform transition-transform ${
                      openMenuIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>
              {item.submenu && openMenuIndex === index && (
                <div className="bg-gray-900">
                  {item.submenu.map((subitem, subindex) => (
                    <Link
                      key={subindex}
                      href={subitem.href}
                      className="block px-6 py-2 text-gray-300 hover:bg-gray-800"
                    >
                      {subitem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
