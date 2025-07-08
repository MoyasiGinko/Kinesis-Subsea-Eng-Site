import React, { useState, useEffect, useRef } from "react";
import {
  TrendingUp,
  Users,
  Award,
  Globe,
  Sparkles,
  Target,
  Clock,
  Shield,
  Zap,
  Star,
  ChevronUp,
  Building,
  Code,
  Database,
} from "lucide-react";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [animatedValues, setAnimatedValues] = useState<{
    [key: number]: number;
  }>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  const statsData = [
    {
      id: 1,
      icon: <Building className="w-8 h-8" />,
      value: 250,
      suffix: "+",
      label: "Projects Completed",
      description: "Successfully delivered enterprise solutions",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      glowColor: "shadow-blue-500/20",
    },
    {
      id: 2,
      icon: <Users className="w-8 h-8" />,
      value: 150,
      suffix: "+",
      label: "Happy Clients",
      description: "Trusted by businesses worldwide",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10",
      glowColor: "shadow-emerald-500/20",
    },
    {
      id: 3,
      icon: <Clock className="w-8 h-8" />,
      value: 99.9,
      suffix: "%",
      label: "Uptime Achieved",
      description: "Reliable system performance",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-500/10",
      glowColor: "shadow-purple-500/20",
    },
    {
      id: 4,
      icon: <Award className="w-8 h-8" />,
      value: 5,
      suffix: " Years",
      label: "Industry Experience",
      description: "Proven track record of excellence",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      glowColor: "shadow-orange-500/20",
    },
  ];

  const achievements = [
    {
      icon: <Star className="w-5 h-5" />,
      label: "Top Rated Agency",
      color: "text-yellow-400",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: "Global Reach",
      color: "text-blue-400",
    },
    {
      icon: <Target className="w-5 h-5" />,
      label: "100% Success Rate",
      color: "text-emerald-400",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      label: "Lightning Fast",
      color: "text-purple-400",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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

  // Animated counter effect
  useEffect(() => {
    if (isVisible) {
      statsData.forEach((stat) => {
        const startValue = 0;
        const endValue = stat.value;
        const duration = 2000; // 2 seconds
        const startTime = Date.now();

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Easing function for smooth animation
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentValue = startValue + (endValue - startValue) * easeOut;

          setAnimatedValues((prev) => ({
            ...prev,
            [stat.id]: currentValue,
          }));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        // Delay each counter animation slightly
        setTimeout(() => {
          animate();
        }, stat.id * 200);
      });
    }
  }, [isVisible]);

  const formatValue = (value: number, stat: any) => {
    if (stat.suffix === "+") {
      if (value >= 1000000) {
        return (value / 1000000).toFixed(1) + "M";
      } else if (value >= 1000) {
        return (value / 1000).toFixed(0) + "K";
      }
      return Math.floor(value).toString();
    } else if (stat.suffix === "%") {
      return value.toFixed(1);
    } else if (stat.suffix === " Years") {
      return Math.floor(value).toString();
    }
    return Math.floor(value).toString();
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
              backgroundSize: "80px 80px",
              transform: `translateX(${mousePosition.x * 0.03}px) translateY(${
                mousePosition.y * 0.03
              }px)`,
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Dynamic Background Orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translateY(${mousePosition.y * 0.1}px) scale(${
              1 + mousePosition.x * 0.001
            })`,
            opacity: 0.4 + mousePosition.x * 0.002,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translateY(${mousePosition.y * -0.1}px) scale(${
              1 + mousePosition.y * 0.001
            })`,
            opacity: 0.4 + mousePosition.y * 0.002,
          }}
        />
        <div
          className="absolute top-1/2 right-1/2 w-72 h-72 bg-emerald-900/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translateX(${mousePosition.x * 0.05}px) translateY(${
              mousePosition.y * 0.05
            }px)`,
            opacity: 0.3 + (mousePosition.x + mousePosition.y) * 0.001,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
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
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400 uppercase tracking-wider">
                Our Impact
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-light mb-6 leading-tight">
              <span className="block text-slate-200">Numbers That</span>
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">
                Speak for Themselves
              </span>
            </h2>

            {/* <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto font-light mb-8">
              Our track record demonstrates our commitment to excellence and
              innovation. These metrics reflect the trust our clients place in
              our expertise.
            </p> */}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div
              key={stat.id}
              className={`group relative bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/40 p-8 hover:bg-slate-800/50 hover:border-slate-600/60 transition-all duration-500 hover:scale-105 cursor-pointer transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
              onMouseEnter={() => setHoveredStat(stat.id)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              {/* Gradient Border Effect */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${stat.color} p-px`}
              >
                <div className="w-full h-full bg-slate-800/90 rounded-2xl" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon & Value Row */}
                <div className="flex items-center gap-4 mb-4">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${stat.color} text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </div>

                  {/* Value */}
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl lg:text-5xl font-bold text-white">
                        {formatValue(animatedValues[stat.id] || 0, stat)}
                      </span>
                      <span className="text-2xl font-semibold text-slate-400">
                        {stat.suffix}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-3 w-full bg-slate-700/30 rounded-full h-1">
                  <div
                    className={`h-1 rounded-full bg-gradient-to-r ${stat.color} transition-all duration-2000 ease-out`}
                    style={{
                      width: `${isVisible ? 100 : 0}%`,
                      transitionDelay: `${index * 200}ms`,
                    }}
                  />
                </div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-slate-200 group-hover:text-white transition-colors duration-300 my-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {stat.description}
                </p>

                {/* Trend Indicator */}
                <div className="mt-4 flex items-center text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronUp className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">Trending up</span>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${stat.color} blur-xl`}
              />

              {/* Floating Icon Effect */}
              {hoveredStat === stat.id && (
                <div className="absolute -top-2 -right-2 animate-bounce">
                  <div
                    className={`p-2 rounded-full bg-gradient-to-r ${stat.color} text-white shadow-lg`}
                  >
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mouse Follower */}
      <div
        className="absolute w-48 h-48 bg-cyan-400/5 rounded-full blur-2xl pointer-events-none transition-all duration-700"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </section>
  );
};

export default StatsSection;
