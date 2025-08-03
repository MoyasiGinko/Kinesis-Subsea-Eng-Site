"use client";
import React, { useState, useEffect, useRef } from "react";
import { Calendar, Tag, ArrowRight, Clock, Eye, Share2, Bookmark, TrendingUp } from "lucide-react";

export default function NewsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const categories = ["All", "Press Release", "Sustainability", "Company News", "Technology"];

  const newsItems = [
    {
      id: 1,
      title: "Kinesis Subsea Engineering Awarded Major Contract for Carbon Capture Project",
      date: "March 15, 2024",
      category: "Press Release",
      image: "https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "5 min read",
      excerpt: "Groundbreaking partnership to develop innovative carbon capture solutions for offshore operations, representing a significant step forward in sustainable energy technology.",
      views: 1247,
      featured: true,
      categoryColor: "bg-red-500",
      urgent: false
    },
    {
      id: 2,
      title: "Sustainability Report 2023: Progress Towards Net Zero Emissions",
      date: "March 10, 2024",
      category: "Sustainability",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "8 min read",
      excerpt: "Comprehensive overview of our environmental initiatives and achievements in sustainable engineering practices across all operational sectors.",
      views: 892,
      featured: false,
      categoryColor: "bg-green-500",
      urgent: false
    },
    {
      id: 3,
      title: "Kinesis Opens New Innovation Center in Singapore",
      date: "March 5, 2024",
      category: "Company News",
      image: "https://images.pexels.com/photos/1537008/pexels-photo-1537008.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "4 min read",
      excerpt: "State-of-the-art facility will drive next-generation subsea technology development and regional expansion initiatives throughout Southeast Asia.",
      views: 654,
      featured: false,
      categoryColor: "bg-blue-500",
      urgent: true
    },
    {
      id: 4,
      title: "Advanced AI Integration in Subsea Operations",
      date: "February 28, 2024",
      category: "Technology",
      image: "https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "6 min read",
      excerpt: "Revolutionary artificial intelligence systems now monitor and optimize underwater operations in real-time, improving efficiency by 40%.",
      views: 1156,
      featured: true,
      categoryColor: "bg-purple-500",
      urgent: false
    },
    {
      id: 5,
      title: "Q4 Financial Results Exceed Expectations",
      date: "February 22, 2024",
      category: "Press Release",
      image: "https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "7 min read",
      excerpt: "Strong performance across all business units drives 23% revenue growth, positioning company for continued expansion in 2024.",
      views: 987,
      featured: false,
      categoryColor: "bg-red-500",
      urgent: false
    },
    {
      id: 6,
      title: "Partnership with Global Renewable Energy Leader",
      date: "February 18, 2024",
      category: "Company News",
      image: "https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "5 min read",
      excerpt: "Strategic alliance will accelerate development of offshore renewable energy infrastructure and expand market presence globally.",
      views: 743,
      featured: false,
      categoryColor: "bg-blue-500",
      urgent: false
    }
  ];

  const filteredNews = activeCategory === "All" 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2L78 40h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mr-4"></div>
            <span className="text-slate-600 font-bold tracking-widest uppercase text-sm flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Latest Updates
            </span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                NEWS &
                <span className="block text-slate-600">
                  INSIGHTS
                </span>
              </h2>
              
              <p className="text-slate-600 text-xl leading-relaxed">
                Stay informed with the latest developments, industry insights, 
                and strategic announcements from our organization.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white border-2 border-slate-200 p-4">
                <div className="text-2xl font-bold text-slate-900">24</div>
                <div className="text-sm text-slate-600 uppercase tracking-wide">Articles</div>
              </div>
              <div className="bg-white border-2 border-slate-200 p-4">
                <div className="text-2xl font-bold text-slate-900">12K</div>
                <div className="text-sm text-slate-600 uppercase tracking-wide">Readers</div>
              </div>
              <div className="bg-white border-2 border-slate-200 p-4">
                <div className="text-2xl font-bold text-slate-900">98%</div>
                <div className="text-sm text-slate-600 uppercase tracking-wide">Engagement</div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 font-semibold text-sm tracking-wide uppercase transition-all duration-300 border-2 ${
                  activeCategory === category
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-600 border-slate-300 hover:border-slate-900 hover:text-slate-900'
                }`}
              >
                {category}
                <span className="ml-2 text-xs opacity-70">
                  ({category === "All" ? newsItems.length : newsItems.filter(item => item.category === category).length})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        {filteredNews.find(item => item.featured) && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-red-500"></div>
              <span className="text-sm font-bold text-slate-600 uppercase tracking-wide">Featured Article</span>
            </div>
            
            {(() => {
              const featured = filteredNews.find(item => item.featured)!;
              return (
                <div className="grid lg:grid-cols-2 gap-8 bg-white border-2 border-slate-200 overflow-hidden group hover:border-slate-400 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`${featured.categoryColor} text-white px-3 py-1 text-xs font-bold uppercase tracking-wide`}>
                        {featured.category}
                      </span>
                    </div>
                    {featured.urgent && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-red-500 text-white px-2 py-1 text-xs font-bold uppercase tracking-wide animate-pulse">
                          Breaking
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featured.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featured.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {featured.views.toLocaleString()} views
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-slate-600 transition-colors duration-300">
                      {featured.title}
                    </h3>
                    
                    <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                      {featured.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold hover:bg-slate-700 transition-colors duration-300 group/btn">
                        <span>READ FULL ARTICLE</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                      
                      <div className="flex gap-2">
                        <button className="p-2 border-2 border-slate-200 hover:border-slate-900 hover:text-slate-900 transition-colors duration-300">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 border-2 border-slate-200 hover:border-slate-900 hover:text-slate-900 transition-colors duration-300">
                          <Bookmark className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.filter(item => !item.featured).map((item, index) => (
            <div
              key={item.id}
              className={`group relative flex flex-col h-full transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative flex flex-col h-full bg-white border-2 border-slate-200 overflow-hidden hover:border-slate-400 transition-all duration-300 cursor-pointer">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`${item.categoryColor} text-white px-2 py-1 text-xs font-bold uppercase tracking-wide`}>
                      {item.category}
                    </span>
                  </div>

                  {/* Urgent Badge */}
                  {item.urgent && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-red-500 text-white px-2 py-1 text-xs font-bold uppercase tracking-wide animate-pulse">
                        New
                      </span>
                    </div>
                  )}

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-300"></div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Meta Information */}
                  <div className="flex items-center gap-4 mb-3 text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {item.views}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-3 text-slate-900 group-hover:text-slate-600 transition-colors duration-300 leading-tight">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-3 flex-1">
                    {item.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <button className="flex items-center gap-2 text-slate-900 font-semibold text-sm hover:text-slate-600 transition-colors duration-300 group/btn">
                      <span>READ MORE</span>
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>

                    <div className="flex gap-1">
                      <button className="p-1 hover:bg-slate-100 transition-colors duration-300">
                        <Share2 className="w-3 h-3 text-slate-400" />
                      </button>
                      <button className="p-1 hover:bg-slate-100 transition-colors duration-300">
                        <Bookmark className="w-3 h-3 text-slate-400" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="h-1 bg-slate-200">
                  <div 
                    className={`h-full bg-slate-900 transition-all duration-500 ${
                      hoveredCard === index ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Stay Connected
            </h3>
            <p className="text-slate-600 mb-6">
              Subscribe to our newsletter for the latest updates and industry insights delivered directly to your inbox.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border-2 border-slate-200 focus:border-slate-900 focus:outline-none"
              />
              <button className="px-6 py-3 bg-slate-900 text-white font-semibold hover:bg-slate-700 transition-colors duration-300">
                SUBSCRIBE
              </button>
            </div>
          </div>

          <div className="text-center lg:text-right">
            <button className="px-8 py-4 border-2 border-slate-900 text-slate-900 font-semibold hover:bg-slate-900 hover:text-white transition-all duration-300 transform hover:scale-105">
              VIEW ALL ARTICLES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}