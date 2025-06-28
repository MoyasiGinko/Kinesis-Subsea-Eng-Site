"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const menuItems = [
  {
    title: "Who We Are",
    href: "/who-we-are",
    submenu: [
      { title: "Purpose & Beliefs", href: "/who-we-are/purpose-beliefs" },
      { title: "Our History", href: "/who-we-are/our-history" },
      { title: "Meet Our Team", href: "/who-we-are/meet-our-team" },
    ],
  },
  {
    title: "What We Deliver",
    href: "/what-we-deliver",
    submenu: [
      { title: "Our Services", href: "/what-we-deliver/our-services" },
      { title: "Our Innovations", href: "/what-we-deliver/our-innovations" },
      { title: "Our Markets", href: "/what-we-deliver/our-markets" },
      {
        title: "Kent Academy for Operational Readiness",
        href: "/what-we-deliver/kent-academy-for-operational-readiness",
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
  { title: "Careers", href: "/careers" },
  { title: "News & Insights", href: "/news-insights" },
  { title: "Events", href: "/events" },
  { title: "Contact Us", href: "/contact-us" },
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
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <img
            src="https://kentplc.com/dist/images/logo-white-alt.png"
            alt="Kent Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                href={item.href}
                className="hover:text-gray-300 transition"
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
                  className="absolute top-full left-0 bg-black border border-gray-700 rounded shadow-lg py-2 min-w-[200px] z-50"
                >
                  {item.submenu.map((subitem, subindex) => (
                    <Link
                      key={subindex}
                      href={subitem.href}
                      className="block px-4 py-2 hover:bg-gray-800"
                    >
                      {subitem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
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

        {/* Search Form */}
        <form
          onSubmit={handleSearchSubmit}
          className="hidden md:flex items-center ml-6"
        >
          <input
            type="text"
            placeholder="Search..."
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-1 rounded-l bg-white text-black focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-black px-3 py-1 rounded-r hover:bg-gray-200"
          >
            Search
          </button>
        </form>
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
