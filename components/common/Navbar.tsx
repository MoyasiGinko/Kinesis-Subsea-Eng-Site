"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Globe,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const menuItems = [
  {
    title: "Who We Are",
    href: "/who-we-are",
    // submenu: [
    //   {
    //     title: "Purpose",
    //     href: "/who-we-are/purpose-beliefs",
    //     description: "Our mission and core values",
    //   },
    //   {
    //     title: "History",
    //     href: "/who-we-are/our-history",
    //     description: "Journey through the years",
    //   },
    //   {
    //     title: "Team",
    //     href: "/who-we-are/meet-our-team",
    //     description: "Meet our experts",
    //   },
    // ],
  },

  {
    title: "Sectors",
    href: "/our-services",
    submenu: [
      {
        title: "Oil & Gas",
        href: "/our-services/engineering-analysis",
        description: "Technical engineering solutions",
      },
      {
        title: "Renewables",
        href: "/our-services/products",
        description: "Innovative product portfolio",
      },
    ],
  },
  { title: "Services", href: "/careers" },
  {
    title: "Projects",
    href: "/what-we-deliver",
    // submenu: [
    //   {
    //     title: "Insights",
    //     href: "/what-we-deliver/news-insights",
    //     description: "Latest industry insights",
    //   },
    //   {
    //     title: "Innovations",
    //     href: "/what-we-deliver/our-innovations",
    //     description: "Cutting-edge solutions",
    //   },
    //   {
    //     title: "Markets",
    //     href: "/what-we-deliver/our-markets",
    //     description: "Global market presence",
    //   },
    //   {
    //     title: "Events",
    //     href: "/what-we-deliver/events",
    //     description: "Industry events & conferences",
    //   },
    //   {
    //     title: "Academy",
    //     href: "/what-we-deliver/kinesis-academy-for-operational-readiness",
    //     description: "Training & development programs",
    //   },
    // ],
  },
  {
    title: "News",
    href: "/news",
    // submenu: [
    //   {
    //     title: "People",
    //     href: "/sustainability/people",
    //     description: "Our commitment to our team",
    //   },
    //   {
    //     title: "Planet",
    //     href: "/sustainability/planet",
    //     description: "Environmental responsibility",
    //   },
    //   {
    //     title: "Principles",
    //     href: "/sustainability/principles",
    //     description: "Sustainable business practices",
    //   },
    // ],
  },
  { title: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const router = useRouter();
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [clickedMenuIndex, setClickedMenuIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenuIndex(null);
        setClickedMenuIndex(null);
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (index: number) => {
    // Clear any existing timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    // Only set open if not already clicked
    if (clickedMenuIndex !== index) {
      setOpenMenuIndex(index);
    }
  };

  const handleMouseLeave = (index: number) => {
    // Only handle closing if the menu wasn't clicked
    if (clickedMenuIndex !== index) {
      // Set a timeout to close the menu after a delay
      closeTimeoutRef.current = setTimeout(() => {
        setOpenMenuIndex(null);
      }, 500); // 500ms delay before closing
    }
  };

  const toggleMenu = (index: number) => {
    if (openMenuIndex === index && clickedMenuIndex === index) {
      setOpenMenuIndex(null);
      setClickedMenuIndex(null);
    } else {
      setOpenMenuIndex(index);
      setClickedMenuIndex(index);
    }
  };

  const handleSearchSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
      setSearchFocused(false);
    }
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 mx-auto ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-gray-300/20"
          : "bg-transparent backdrop-blur-none"
      }`}
    >
      {/* Top Info Bar */}
      {/* <div
        className={`border-b border-slate-700/50 transition-all duration-300 ${
          isScrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 text-xs">
          <div className="flex items-center space-x-6 text-slate-300">
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3" />
              <span>info@kinesis.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-3 h-3" />
              <span>Global Operations</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Globe className="w-3 h-3" />
              <span>EN</span>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Navigation */}
      <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-12 py-2 sm:py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src={isScrolled ? "/logo-dark.svg" : "/logo-white.svg"}
              alt="Kinesis Subsea Engineering Logo"
              className={`w-auto transition-all duration-500 h-12 sm:h-14 md:h-16 lg:h-[86px] xl:h-[90px]`}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              {item.submenu ? (
                <>
                  <button
                    className={`flex items-center gap-1 px-3 xl:px-5 py-2 xl:py-3 rounded-lg font-medium text-base xl:text-[20px] transition-all duration-300 ${
                      isScrolled
                        ? openMenuIndex === index
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-800 hover:bg-blue-50 hover:text-blue-700"
                        : openMenuIndex === index
                        ? "bg-blue-50 text-blue-700"
                        : "text-white hover:text-gray-300"
                    }`}
                    onClick={() => toggleMenu(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    aria-label={`${item.title} menu`}
                  >
                    {item.title}
                    <ChevronDown
                      className={`w-4 h-4 xl:w-5 xl:h-5 transition-transform duration-300 ${
                        openMenuIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {/* Dropdown Menu */}
                  {openMenuIndex === index && (
                    <div
                      className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-xl py-3 z-50"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                    >
                      {item.submenu.map((subitem, subindex) => (
                        <Link
                          key={subindex}
                          href={subitem.href}
                          className="group/item px-5 py-3.5 hover:bg-blue-50 transition-colors duration-200 cursor-pointer block"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-gray-900 font-medium group-hover/item:text-blue-700 transition-colors duration-200 text-base xl:text-lg">
                                {subitem.title}
                              </div>
                              {subitem.description && (
                                <div className="text-gray-500 text-xs xl:text-sm mt-1">
                                  {subitem.description}
                                </div>
                              )}
                            </div>
                            <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5 text-gray-400 group-hover/item:text-blue-700 group-hover/item:translate-x-1 transition-all duration-200" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-3 xl:px-5 py-2 xl:py-3 rounded-lg font-medium text-base xl:text-lg transition-all duration-300 ${
                    isScrolled
                      ? openMenuIndex === index
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-800 hover:bg-blue-50 hover:text-blue-700"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Get in Touch Button and Grid Icon */}
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
          <button
            className={`hidden md:block font-medium py-3 md:py-4 px-6 md:px-10 xl:px-14 text-base xl:text-lg transition-all duration-300 transform hover:-translate-y-0.5 ${
              isScrolled
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-white hover:bg-gray-100 text-gray-900"
            }`}
          >
            <span className="flex items-center gap-1 text-base xl:text-[20px]">
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
          <button
            title="Grid View"
            className="p-2 md:p-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 md:p-3 rounded-lg bg-blue-50 text-gray-900 hover:bg-blue-100 transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 md:w-6 md:h-6" />
            ) : (
              <Menu className="w-5 h-5 md:w-6 md:h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-white border-t border-gray-200">
          {menuItems.map((item, index) => (
            <div key={index} className="border-b border-gray-100">
              {item.submenu ? (
                <>
                  <button
                    className="w-full flex items-center justify-between px-4 py-4 text-gray-900 hover:bg-blue-50 transition-colors duration-200"
                    onClick={() => toggleMenu(index)}
                    aria-label={`${item.title} submenu`}
                  >
                    <span className="font-medium text-xl">{item.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openMenuIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      openMenuIndex === index
                        ? "max-h-screen opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-gray-50">
                      {item.submenu.map((subitem, subindex) => (
                        <Link
                          key={subindex}
                          href={subitem.href}
                          className="px-6 py-3.5 text-gray-700 hover:bg-blue-50 transition-colors duration-200 cursor-pointer block"
                        >
                          <div className="font-medium">{subitem.title}</div>
                          {subitem.description && (
                            <div className="text-gray-500 text-sm mt-1">
                              {subitem.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="w-full flex items-center justify-between px-4 py-4 text-gray-900 hover:bg-blue-50 transition-colors duration-200"
                >
                  <span className="font-medium text-xl">{item.title}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
