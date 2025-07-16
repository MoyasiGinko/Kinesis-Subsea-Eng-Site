"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
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
    title: "What We Do",
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
    title: "Services",
    href: "/our-services",
    submenu: [
      {
        title: "Engineering & Analysis",
        href: "/our-services/engineering-analysis",
        description: "Technical engineering solutions",
      },
      {
        title: "Products",
        href: "/our-services/products",
        description: "Innovative product portfolio",
      },
      {
        title: "Software",
        href: "/our-services/software",
        description: "Digital solutions & platforms",
      },
      {
        title: "Renewables",
        href: "/our-services/renewables",
        description: "Clean energy solutions",
      },
      {
        title: "Testing",
        href: "/our-services/testing",
        description: "Quality assurance services",
      },
      {
        title: "Past Projects",
        href: "/our-services/past-projects",
        description: "Success stories & case studies",
      },
      {
        title: "Training",
        href: "/our-services/training",
        description: "Professional development",
      },
    ],
  },
  {
    title: "News",
    href: "/sustainability",
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
  { title: "Careers", href: "/careers" },
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
      className={`fixed top-0 left-0 right-0 z-50 mx-auto max-w-7xl rounded-xl mt-1 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-950/95 backdrop-blur-xl  shadow-xl  shadow-slate-900/20"
          : "bg-slate-900/5 backdrop-blur-sm "
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
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logo-white.svg"
              alt="Kinesis Subsea Engineering Logo"
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              {item.submenu ? (
                <>
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-slate-800/50 hover:text-cyan-400 ${
                      openMenuIndex === index
                        ? "bg-slate-800/50 text-cyan-400"
                        : "text-slate-300"
                    }`}
                    onClick={() => toggleMenu(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    aria-label={`${item.title} menu`}
                  >
                    {item.title}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openMenuIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {/* Dropdown Menu */}
                  {openMenuIndex === index && (
                    <div
                      className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl py-2 z-50"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                    >
                      {item.submenu.map((subitem, subindex) => (
                        <Link
                          key={subindex}
                          href={subitem.href}
                          className="group/item px-4 py-3 hover:bg-slate-800/50 transition-colors duration-200 cursor-pointer block"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-white font-medium text-sm group-hover/item:text-cyan-400 transition-colors duration-200">
                                {subitem.title}
                              </div>
                              {subitem.description && (
                                <div className="text-slate-400 text-xs mt-1">
                                  {subitem.description}
                                </div>
                              )}
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-500 group-hover/item:text-cyan-400 group-hover/item:translate-x-1 transition-all duration-200" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-slate-800/50 hover:text-cyan-400 ${
                    openMenuIndex === index
                      ? "bg-slate-800/50 text-cyan-400"
                      : "text-slate-300"
                  }`}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Search and Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <div
              className={`flex items-center transition-all duration-300 ${
                searchFocused ? "w-64" : "w-48"
              }`}
            >
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearchSubmit(e);
                  }
                }}
                className="w-full px-4 py-2 pr-10 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleSearchSubmit(e as any);
                }}
                className="absolute right-2 p-1 text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg bg-slate-800/50 text-white hover:bg-slate-700/50 transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
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
        <nav className="bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50">
          {menuItems.map((item, index) => (
            <div key={index} className="border-b border-slate-700/30">
              {item.submenu ? (
                <>
                  <button
                    className="w-full flex items-center justify-between px-4 py-4 text-white hover:bg-slate-800/50 transition-colors duration-200"
                    onClick={() => toggleMenu(index)}
                    aria-label={`${item.title} submenu`}
                  >
                    <span className="font-medium">{item.title}</span>
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
                    <div className="bg-slate-800/30">
                      {item.submenu.map((subitem, subindex) => (
                        <Link
                          key={subindex}
                          href={subitem.href}
                          className="px-6 py-3 text-slate-300 hover:bg-slate-700/30 hover:text-white transition-colors duration-200 cursor-pointer block"
                        >
                          <div className="font-medium text-sm">
                            {subitem.title}
                          </div>
                          {subitem.description && (
                            <div className="text-xs text-slate-400 mt-1">
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
                  className="w-full flex items-center justify-between px-4 py-4 text-white hover:bg-slate-800/50 transition-colors duration-200"
                >
                  <span className="font-medium">{item.title}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
