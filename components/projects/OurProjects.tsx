"use client";
import React, { useState } from "react";
import {
  MapPin,
  Calendar,
  Users,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Filter,
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  client: string;
  location: string;
  duration: string;
  value: string;
  status: "completed" | "ongoing" | "upcoming";
  category: string;
  description: string;
  scope: string[];
  image: string;
  year: string;
}

interface FilterOption {
  label: string;
  value: string;
}

const OurProjects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Atlantic Deep Field Development",
      client: "North Sea Energy Consortium",
      location: "North Sea, UK",
      duration: "24 months",
      value: "$45M",
      status: "completed",
      category: "subsea",
      description:
        "Complete subsea infrastructure design and installation for a deepwater field development including 12 production wells and associated flowlines.",
      scope: [
        "Subsea tree design",
        "Manifold engineering",
        "Flowline routing",
        "Installation procedures",
      ],
      image: "deepwater-field",
      year: "2023",
    },
    {
      id: 2,
      title: "West Africa FPSO Mooring System",
      client: "Continental Oil & Gas",
      location: "Offshore Angola",
      duration: "18 months",
      value: "$32M",
      status: "completed",
      category: "mooring",
      description:
        "Design and analysis of turret mooring system for FPSO operation in 1,200m water depth with extreme environmental conditions.",
      scope: [
        "Mooring analysis",
        "Anchor design",
        "Installation aids",
        "Fatigue assessment",
      ],
      image: "fpso-mooring",
      year: "2023",
    },
    {
      id: 3,
      title: "Gulf of Mexico Pipeline Expansion",
      client: "Americas Pipeline Corp",
      location: "Gulf of Mexico, USA",
      duration: "15 months",
      value: "$28M",
      status: "ongoing",
      category: "pipeline",
      description:
        "Engineering support for 85km pipeline expansion including route optimization, stability analysis, and tie-in procedures.",
      scope: [
        "Route engineering",
        "On-bottom stability",
        "Buckle management",
        "Tie-in design",
      ],
      image: "pipeline-expansion",
      year: "2024",
    },
    {
      id: 4,
      title: "Brazilian Pre-Salt Riser Systems",
      client: "Petro Brasil Offshore",
      location: "Santos Basin, Brazil",
      duration: "30 months",
      value: "$67M",
      status: "ongoing",
      category: "riser",
      description:
        "Complex riser system design for ultra-deepwater pre-salt development with challenging VIV and fatigue requirements.",
      scope: [
        "Steel catenary risers",
        "VIV analysis",
        "Fatigue assessment",
        "Installation engineering",
      ],
      image: "pre-salt-risers",
      year: "2024",
    },
    {
      id: 5,
      title: "North Sea Topside Integration",
      client: "Nordic Energy Solutions",
      location: "Norwegian Sector",
      duration: "12 months",
      value: "$22M",
      status: "upcoming",
      category: "topside",
      description:
        "Topside modification and integration project for semi-submersible platform including new processing modules and lifting studies.",
      scope: [
        "Structural analysis",
        "Lift studies",
        "Integration design",
        "Procedures development",
      ],
      image: "topside-integration",
      year: "2025",
    },
    {
      id: 6,
      title: "Asia Pacific Wellhead Platform",
      client: "Eastern Seas Development",
      location: "South China Sea",
      duration: "20 months",
      value: "$38M",
      status: "upcoming",
      category: "wellhead",
      description:
        "Complete wellhead and conductor system design for shallow water platform development with challenging soil conditions.",
      scope: [
        "Conductor design",
        "Soil analysis",
        "Fatigue screening",
        "Installation support",
      ],
      image: "wellhead-platform",
      year: "2025",
    },
  ];

  const filterOptions: FilterOption[] = [
    { label: "All Projects", value: "all" },
    { label: "Subsea", value: "subsea" },
    { label: "Riser Systems", value: "riser" },
    { label: "Pipeline", value: "pipeline" },
    { label: "Mooring", value: "mooring" },
    { label: "Topside", value: "topside" },
    { label: "Wellhead", value: "wellhead" },
  ];

  const statusColors = {
    completed: "bg-green-600",
    ongoing: "bg-blue-600",
    upcoming: "bg-orange-600",
  };

  const statusLabels = {
    completed: "Completed",
    ongoing: "Ongoing",
    upcoming: "Upcoming",
  };

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Projects Overview - Extraordinary Design */}
      <div className="relative overflow-hidden bg-white">
        <div className="max-w-[1480px] mx-auto px-6 py-20">
          <div className="relative">
            {/* Background geometric patterns */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 border-l-8 border-b-8 border-blue-600"></div>
              <div className="absolute top-20 right-0 w-64 h-64 border-r-4 border-t-4 border-gray-800"></div>
              <div className="absolute bottom-0 right-1/3 w-80 h-80 border-r-6 border-blue-400"></div>
            </div>

            {/* Header content with diagonal arrangement */}
            <div className="relative z-10 grid grid-cols-12 gap-6 items-center min-h-[500px]">
              <div className="col-span-1">
                <div className="writing-mode-vertical text-gray-600 font-bold text-sm tracking-widest transform -rotate-90">
                  OUR PROJECTS
                </div>
              </div>

              <div className="col-span-6">
                <div className="space-y-6">
                  <h1 className="text-6xl font-black text-gray-900 leading-none">
                    PROJECT
                    <span className="block text-blue-600">PORTFOLIO</span>
                  </h1>
                  <div className="w-24 h-1 bg-blue-600"></div>
                </div>
              </div>

              <div className="col-span-5">
                <div className="relative">
                  {/* Stepped project stats */}
                  <div className="space-y-0">
                    <div className="bg-gray-900 text-white p-6 ml-0 transform -skew-x-6">
                      <div className="transform skew-x-6">
                        <p className="text-lg leading-relaxed">
                          Delivering world-class subsea engineering solutions
                          across diverse offshore environments and complex
                          technical challenges.
                        </p>
                      </div>
                    </div>

                    <div className="bg-blue-600 text-white p-6 ml-12 transform -skew-x-6">
                      <div className="transform skew-x-6">
                        <p className="text-lg leading-relaxed">
                          From concept to commissioning, our portfolio
                          demonstrates proven expertise in offshore project
                          execution.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Statistics */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-blue-600 mb-2">
                $250M+
              </div>
              <div className="text-gray-700 font-medium">
                Total Project Value
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-gray-900 mb-2">15+</div>
              <div className="text-gray-700 font-medium">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-blue-600 mb-2">50+</div>
              <div className="text-gray-700 font-medium">Major Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-gray-900 mb-2">100%</div>
              <div className="text-gray-700 font-medium">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">
                Filter by category:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setActiveFilter(option.value)}
                  className={`px-4 py-2 font-medium transition-all duration-300 ${
                    activeFilter === option.value
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-gray-50 border-2 border-gray-200 hover:border-blue-600 transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-gray-400 to-gray-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 text-white text-sm font-bold ${
                        statusColors[project.status]
                      }`}
                    >
                      {statusLabels[project.status]}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-white text-gray-900 px-3 py-1 text-sm font-bold">
                      {project.year}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>

                  <div className="text-blue-600 font-semibold mb-4">
                    {project.client}
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{project.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="w-4 h-4 mr-2" />
                      <span className="text-sm">{project.value}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">{project.category}</span>
                    </div>
                  </div>

                  {/* Scope List */}
                  <div className="space-y-2">
                    {project.scope.slice(0, 2).map((item, scopeIndex) => (
                      <div key={scopeIndex} className="flex items-start">
                        <div className="w-2 h-px bg-blue-600 mt-3 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                    {project.scope.length > 2 && (
                      <div className="text-blue-600 text-sm font-medium">
                        +{project.scope.length - 2} more services
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-6">
          <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Modal Header */}
              <div className="bg-gray-900 text-white p-8 relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
                >
                  ×
                </button>
                <h2 className="text-3xl font-bold mb-2">
                  {selectedProject.title}
                </h2>
                <div className="text-blue-400 text-lg">
                  {selectedProject.client}
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Project Overview
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center text-gray-700">
                        <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                        <span>{selectedProject.location}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Calendar className="w-5 h-5 mr-3 text-blue-600" />
                        <span>{selectedProject.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <DollarSign className="w-5 h-5 mr-3 text-blue-600" />
                        <span>{selectedProject.value}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Scope of Work
                    </h3>
                    <div className="space-y-3">
                      {selectedProject.scope.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center justify-center">
                  <div
                    className={`px-6 py-3 text-white font-bold ${
                      statusColors[selectedProject.status]
                    }`}
                  >
                    PROJECT STATUS:{" "}
                    {statusLabels[selectedProject.status].toUpperCase()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 border-l-4 border-t-4 border-blue-600 opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 border-r-4 border-b-4 border-blue-400 opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-8">
              <div className="relative">
                <div className="absolute -left-6 top-0 w-2 h-full bg-blue-600"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                  Start your next
                  <span className="block text-blue-400">offshore project</span>
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="bg-blue-600 text-white p-6 max-w-2xl transform -skew-x-3">
                    <div className="transform skew-x-3">
                      <p className="text-lg">
                        Join our portfolio of successful offshore developments
                        with proven engineering excellence.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-bold transition-all duration-300 transform hover:-translate-y-1">
                    DISCUSS YOUR PROJECT
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 font-bold transition-all duration-300">
                    REQUEST PROPOSAL
                  </button>
                </div>
              </div>
            </div>

            <div className="col-span-4">
              <div className="relative w-full h-80">
                <div className="absolute top-0 right-0 w-48 h-24 bg-blue-600 transform -skew-y-6"></div>
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

export default OurProjects;
