import React, { useState, useEffect, useRef } from "react";
import {
  Plus,
  Minus,
  MessageCircle,
  HelpCircle,
  Sparkles,
  Search,
  ChevronRight,
  Clock,
  Users,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";

const FAQSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openItem, setOpenItem] = useState<number | null>(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories = [
    {
      id: "general",
      label: "General",
      icon: <HelpCircle className="w-4 h-4" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "technical",
      label: "Technical",
      icon: <Zap className="w-4 h-4" />,
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: "security",
      label: "Security",
      icon: <Shield className="w-4 h-4" />,
      color: "from-purple-500 to-indigo-500",
    },
    {
      id: "support",
      label: "Support",
      icon: <Users className="w-4 h-4" />,
      color: "from-orange-500 to-red-500",
    },
  ];

  const faqData = [
    {
      id: 1,
      category: "general",
      question: "What types of engineering solutions do you provide?",
      answer:
        "We offer comprehensive engineering solutions including system architecture design, data engineering, cloud solutions, security implementation, performance optimization, and DevOps integration. Our team specializes in building scalable, high-performance systems that grow with your business needs and handle enterprise-level demands.",
      popular: true,
    },
    {
      id: 2,
      category: "general",
      question: "How long does a typical project take to complete?",
      answer:
        "Project timelines vary based on complexity and scope. Simple integrations might take 2-4 weeks, while comprehensive system overhauls can take 3-6 months. We provide detailed project timelines during our initial consultation phase and maintain transparent communication throughout the development process.",
      popular: false,
    },
    {
      id: 3,
      category: "technical",
      question: "What technologies and frameworks do you work with?",
      answer:
        "We work with modern technologies including React, Node.js, Python, AWS, Azure, Docker, Kubernetes, and various database systems. Our team stays current with emerging technologies and can recommend the best tech stack for your specific requirements and long-term goals.",
      popular: true,
    },
    {
      id: 4,
      category: "technical",
      question: "Do you provide system migration services?",
      answer:
        "Yes, we specialize in seamless system migrations including cloud migrations, database transitions, and platform upgrades. Our migration process includes thorough planning, risk assessment, data backup strategies, and minimal downtime deployment to ensure business continuity.",
      popular: false,
    },
    {
      id: 5,
      category: "security",
      question: "How do you ensure data security and compliance?",
      answer:
        "We implement comprehensive security frameworks including encryption, access controls, audit trails, and compliance monitoring. Our security protocols meet industry standards like SOC 2, GDPR, and HIPAA. We conduct regular security assessments and provide ongoing monitoring services.",
      popular: true,
    },
    {
      id: 6,
      category: "security",
      question: "What compliance standards do you support?",
      answer:
        "We support major compliance frameworks including GDPR, HIPAA, SOC 2, PCI DSS, and ISO 27001. Our team ensures your systems meet regulatory requirements and can assist with compliance audits and documentation.",
      popular: false,
    },
    {
      id: 7,
      category: "support",
      question: "What kind of ongoing support do you provide?",
      answer:
        "We offer comprehensive post-deployment support including 24/7 monitoring, regular maintenance, performance optimization, security updates, and technical support. Our support packages are customizable based on your specific needs and service level requirements.",
      popular: true,
    },
    {
      id: 8,
      category: "support",
      question: "Do you offer training for our team?",
      answer:
        "Yes, we provide comprehensive training programs tailored to your team's needs. This includes technical documentation, hands-on workshops, best practices training, and ongoing consultation to ensure your team can effectively maintain and operate the systems we build.",
      popular: false,
    },
  ];

  const [activeCategory, setActiveCategory] = useState("general");

  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.category === activeCategory &&
      (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-grid-pattern bg-repeat transition-all duration-1000"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
              transform: `translateX(${mousePosition.x * 0.02}px) translateY(${
                mousePosition.y * 0.02
              }px)`,
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Ambient Light Effects */}
        <div
          className="absolute top-1/4 right-1/3 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translateY(${mousePosition.y * 0.1}px) scale(${
              1 + mousePosition.x * 0.001
            })`,
            opacity: 0.3 + mousePosition.x * 0.002,
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translateY(${mousePosition.y * -0.1}px) scale(${
              1 + mousePosition.y * 0.001
            })`,
            opacity: 0.3 + mousePosition.y * 0.002,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400 uppercase tracking-wider">
                Frequently Asked Questions
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-light mb-6 leading-tight">
              <span className="block text-slate-200">Got Questions?</span>
              <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-medium">
                We've Got Answers
              </span>
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto font-light">
              Find answers to common questions about our engineering solutions,
              processes, and services. Can't find what you're looking for? Our
              team is here to help.
            </p>
          </div>
        </div>

        {/* Search and Categories */}
        <div className="mb-12">
          <div
            className={`transition-all duration-1000 delay-200 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {/* Search Bar */}
            <div className="relative mb-8 max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700/40 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className={`group relative px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-slate-700/50 text-white"
                      : "bg-slate-800/20 text-slate-400 hover:text-white hover:bg-slate-700/30"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`p-1 rounded ${
                        activeCategory === category.id
                          ? `bg-gradient-to-r ${category.color}`
                          : ""
                      }`}
                    >
                      {category.icon}
                    </div>
                    <span>{category.label}</span>
                  </div>

                  {/* Hover Effect */}
                  {hoveredCategory === category.id && (
                    <div
                      className={`absolute inset-0 rounded-lg opacity-20 bg-gradient-to-r ${category.color} -z-10`}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={faq.id}
              className={`transition-all duration-1000 delay-${
                index * 100
              } transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <div className="relative group">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/40 overflow-hidden hover:bg-slate-800/40 hover:border-slate-600/60 transition-all duration-300">
                  {/* Question */}
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-700/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      {faq.popular && (
                        <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-xs font-medium">
                          <Sparkles className="w-3 h-3" />
                          Popular
                        </div>
                      )}
                      <h3 className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors duration-300">
                        {faq.question}
                      </h3>
                    </div>

                    <div className="flex-shrink-0">
                      <div
                        className={`p-2 rounded-lg transition-all duration-300 ${
                          openItem === faq.id
                            ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white"
                            : "bg-slate-700/50 text-slate-400 group-hover:bg-slate-600/50 group-hover:text-white"
                        }`}
                      >
                        {openItem === faq.id ? (
                          <Minus className="w-5 h-5" />
                        ) : (
                          <Plus className="w-5 h-5" />
                        )}
                      </div>
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openItem === faq.id
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <div className="border-t border-slate-700/40 pt-4">
                        <p className="text-slate-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r from-emerald-500 to-cyan-500 blur-xl -z-10" />
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/40 p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageCircle className="w-6 h-6 text-emerald-400" />
              <h3 className="text-xl font-semibold text-slate-200">
                Still have questions?
              </h3>
            </div>

            <p className="text-slate-300 mb-6">
              Our technical experts are ready to help you find the perfect
              solution for your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg font-medium text-white transition-all duration-500 hover:from-emerald-500 hover:to-cyan-500 hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-105">
                <span className="flex items-center gap-2">
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>

              <button className="px-8 py-4 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg font-medium text-slate-200 hover:text-white transition-all duration-300 border border-slate-600/50 hover:border-slate-500/50">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mouse Follower */}
      <div
        className="absolute w-40 h-40 bg-emerald-400/5 rounded-full blur-2xl pointer-events-none transition-all duration-700"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </section>
  );
};

export default FAQSection;
