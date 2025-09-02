"use client";
import React, { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  Search,
  Filter,
  ChevronDown,
} from "lucide-react";
import NewsHero from "./NewsHero";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  image: string;
}

interface Category {
  label: string;
  value: string;
  count: number;
}

const NewsArticle: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const articles: Article[] = [
    {
      id: 1,
      title:
        "Revolutionizing Deepwater Riser Design: Next-Generation VIV Suppression Technology",
      excerpt:
        "Kinesis pioneers breakthrough VIV suppression technology that reduces fatigue damage by up to 40% in ultra-deepwater applications.",
      content:
        "Our latest research and development initiative has yielded significant advances in vortex-induced vibration suppression for deepwater risers...",
      author: "Dr. Sarah Mitchell",
      date: "2024-08-15",
      readTime: "8 min read",
      category: "innovation",
      tags: ["Riser Systems", "VIV", "Technology", "R&D"],
      featured: true,
      image: "viv-suppression",
    },
    {
      id: 2,
      title:
        "Kinesis Secures Major North Sea Contract for Subsea Infrastructure Development",
      excerpt:
        "£45M contract awarded for comprehensive subsea engineering services on the Atlantic Deep field development project.",
      content:
        "We are proud to announce the award of a major engineering contract for the Atlantic Deep field development...",
      author: "James Richardson",
      date: "2024-08-10",
      readTime: "5 min read",
      category: "projects",
      tags: ["North Sea", "Contract", "Subsea", "FEED"],
      featured: true,
      image: "north-sea-contract",
    },
    {
      id: 3,
      title:
        "Sustainable Offshore Engineering: Reducing Carbon Footprint in Subsea Operations",
      excerpt:
        "Exploring innovative approaches to minimize environmental impact while maintaining operational excellence in offshore projects.",
      content:
        "The offshore energy industry is undergoing a transformation towards more sustainable practices...",
      author: "Maria Santos",
      date: "2024-08-05",
      readTime: "6 min read",
      category: "sustainability",
      tags: ["Environment", "Sustainability", "Carbon Reduction"],
      featured: false,
      image: "sustainability",
    },
    {
      id: 4,
      title: "Digital Twin Technology Transforms Subsea Asset Management",
      excerpt:
        "How advanced digital modeling is revolutionizing predictive maintenance and asset optimization in subsea systems.",
      content:
        "The integration of digital twin technology in subsea engineering represents a paradigm shift...",
      author: "David Chen",
      date: "2024-07-28",
      readTime: "7 min read",
      category: "technology",
      tags: [
        "Digital Twin",
        "Asset Management",
        "AI",
        "Predictive Maintenance",
      ],
      featured: false,
      image: "digital-twin",
    },
    {
      id: 5,
      title: "Industry Insight: The Future of Floating Production Systems",
      excerpt:
        "Analysis of emerging trends and technologies shaping the next generation of FPSO and semi-submersible designs.",
      content:
        "Floating production systems continue to evolve as the industry pushes into deeper waters...",
      author: "Dr. Sarah Mitchell",
      date: "2024-07-20",
      readTime: "10 min read",
      category: "industry",
      tags: ["FPSO", "Floating Systems", "Future Tech", "Industry Analysis"],
      featured: false,
      image: "fpso-future",
    },
    {
      id: 6,
      title: "Kinesis Expands Global Presence with New Rio de Janeiro Office",
      excerpt:
        "Strategic expansion into the Brazilian market to serve growing demand for pre-salt development projects.",
      content:
        "We are excited to announce the opening of our new office in Rio de Janeiro, Brazil...",
      author: "Corporate Communications",
      date: "2024-07-15",
      readTime: "4 min read",
      category: "company",
      tags: ["Expansion", "Brazil", "Office Opening", "Pre-Salt"],
      featured: false,
      image: "rio-office",
    },
    {
      id: 7,
      title:
        "Advanced Pipeline Integrity Management in Challenging Environments",
      excerpt:
        "New methodologies for ensuring long-term pipeline integrity in harsh offshore conditions and corrosive environments.",
      content:
        "Pipeline integrity management has become increasingly critical as offshore developments...",
      author: "Engineering Team",
      date: "2024-07-08",
      readTime: "9 min read",
      category: "technology",
      tags: ["Pipeline", "Integrity", "Corrosion", "Inspection"],
      featured: false,
      image: "pipeline-integrity",
    },
    {
      id: 8,
      title: "Mooring System Innovation: Reducing Installation Costs by 25%",
      excerpt:
        "Breakthrough mooring design methodology achieves significant cost savings while improving safety and reliability.",
      content:
        "Our innovative approach to mooring system design has yielded remarkable results...",
      author: "James Richardson",
      date: "2024-06-30",
      readTime: "6 min read",
      category: "innovation",
      tags: ["Mooring", "Cost Reduction", "Innovation", "Safety"],
      featured: false,
      image: "mooring-innovation",
    },
  ];

  const categories: Category[] = [
    { label: "All Articles", value: "all", count: articles.length },
    {
      label: "Innovation",
      value: "innovation",
      count: articles.filter((a) => a.category === "innovation").length,
    },
    {
      label: "Projects",
      value: "projects",
      count: articles.filter((a) => a.category === "projects").length,
    },
    {
      label: "Technology",
      value: "technology",
      count: articles.filter((a) => a.category === "technology").length,
    },
    {
      label: "Sustainability",
      value: "sustainability",
      count: articles.filter((a) => a.category === "sustainability").length,
    },
    {
      label: "Industry Insights",
      value: "industry",
      count: articles.filter((a) => a.category === "industry").length,
    },
    {
      label: "Company News",
      value: "company",
      count: articles.filter((a) => a.category === "company").length,
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      activeCategory === "all" || article.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = articles.filter((article) => article.featured);
  const regularArticles = filteredArticles.filter(
    (article) => !article.featured
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* News Header - Extraordinary Design */}
      <NewsHero />
      {/* Search and Filter Section */}
      <div className="bg-gray-100 py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, topics, or technologies..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 focus:border-primary-blue focus:outline-none transition-colors bg-white"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-6 py-3 bg-white border-2 border-gray-200 hover:border-primary-blue transition-colors"
            >
              <Filter className="w-5 h-5 mr-2" />
              <span className="font-medium">Categories</span>
              <ChevronDown
                className={`w-4 h-4 ml-2 transform transition-transform ${
                  showFilters ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Category Filters */}
          {showFilters && (
            <div className="mt-6 flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  className={`px-4 py-2 font-medium transition-all duration-300 ${
                    activeCategory === category.value
                      ? "bg-primary-blue text-white"
                      : "bg-white text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Featured Articles */}
      {featuredArticles.length > 0 &&
        activeCategory === "all" &&
        searchQuery === "" && (
          <div className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Featured Articles
                </h2>
                <div className="w-24 h-1 bg-primary-blue"></div>
              </div>

              {/* Make all featured cards symmetric by using a consistent card structure and fixed image height */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredArticles.map((article) => (
                  <div
                    key={article.id}
                    className="bg-gray-50 border-2 border-gray-200 hover:border-primary-blue transition-all duration-300 group cursor-pointer h-full flex flex-col"
                    onClick={() => setSelectedArticle(article)}
                  >
                    {/* Article Image Placeholder - fixed height for symmetry */}
                    <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-400 to-gray-600">
                      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary-blue text-white px-3 py-1 text-sm font-bold uppercase">
                          {article.category}
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-2 bg-primary-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </div>

                    {/* Article Content - flex layout so content areas match height */}
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-blue transition-colors mb-4">
                        {article.title}
                      </h3>

                      <p className="text-gray-700 mb-6 leading-relaxed flex-1">
                        {article.excerpt}
                      </p>

                      {/* Article Meta */}
                      <div className="flex items-center justify-between gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{formatDate(article.date)}</span>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {article.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-200 text-gray-700 px-3 py-1 text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      {/* Regular Articles Grid */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {(featuredArticles.length === 0 ||
            activeCategory !== "all" ||
            searchQuery !== "") && (
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {activeCategory === "all"
                  ? "All Articles"
                  : categories.find((c) => c.value === activeCategory)?.label}
              </h2>
              <div className="w-24 h-1 bg-primary-blue"></div>
              {searchQuery && (
                <p className="text-gray-600 mt-4">
                  {filteredArticles.length} result
                  {filteredArticles.length !== 1 ? "s" : ""} for "{searchQuery}"
                </p>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <div
                key={article.id}
                className="bg-gray-50 border-2 border-gray-200 hover:border-primary-blue transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedArticle(article)}
              >
                {/* Article Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-blue text-white px-3 py-1 text-sm font-bold uppercase">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-primary-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-blue transition-colors mb-3">
                    {article.title}
                  </h3>

                  <p className="text-gray-700 mb-4 leading-relaxed text-sm line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Article Meta */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600 mb-4">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{formatDate(article.date)}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {article.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-200 text-gray-700 px-2 py-1 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-600">
                  No articles found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search terms or category filters.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-6">
          <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Modal Header */}
              <div className="bg-gray-900 text-white p-8 relative">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
                >
                  ×
                </button>

                <div className="mb-4">
                  <span className="bg-primary-blue text-white px-3 py-1 text-sm font-bold uppercase">
                    {selectedArticle.category}
                  </span>
                </div>

                <h2 className="text-3xl font-bold mb-4">
                  {selectedArticle.title}
                </h2>

                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-6 text-blue-400">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span>{selectedArticle.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{formatDate(selectedArticle.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{selectedArticle.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                {/* Article Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-blue-400 to-gray-600 mb-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>

                {/* Article Content */}
                <div className="prose max-w-none mb-8">
                  <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                    {selectedArticle.excerpt}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedArticle.content}
                  </p>
                </div>

                {/* Tags */}
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedArticle.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 text-sm font-medium flex items-center"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Signup CTA */}
      <div className="relative bg-white overflow-hidden">
        {/* <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 border-l-4 border-t-4 border-primary-blue opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 border-r-4 border-b-4 border-blue-400 opacity-20"></div>
        </div> */}

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-8">
              <div className="relative">
                <div className="absolute -left-6 top-0 w-2 h-full bg-primary-blue"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-8">
                  Stay informed with
                  <span className="block text-blue-400">industry insights</span>
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="bg-primary-blue text-white p-6 max-w-2xl transform -skew-x-3">
                    <div className="transform skew-x-3">
                      <p className="text-lg">
                        Subscribe to our newsletter for the latest developments
                        in subsea engineering and offshore technology.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary-blue hover:bg-primary-blue-hover text-white px-8 py-4 font-bold transition-all duration-300 transform hover:-translate-y-1">
                    SUBSCRIBE TO NEWSLETTER
                  </button>
                  <button className="border-2 border-black text-black hover:bg-white hover:text-primary-blue hover:border-primary-blue-hover px-8 py-4 font-bold transition-all duration-300">
                    VIEW ALL ARTICLES
                  </button>
                </div>
              </div>
            </div>

            <div className="col-span-4">
              <div className="relative w-full h-80">
                <div className="absolute top-0 right-0 w-48 h-24 bg-primary-blue transform -skew-y-6"></div>
                <div className="absolute top-16 right-8 w-40 h-20 bg-blue-400 transform -skew-y-6"></div>
                <div className="absolute bottom-20 right-0 w-56 h-28 bg-gray-700 transform -skew-y-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
