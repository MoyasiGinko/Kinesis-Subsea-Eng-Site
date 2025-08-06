// "use client"

// import React, { useState } from 'react';
// import { ChevronRight, Zap, Settings, Brain, ArrowUpRight } from 'lucide-react';

// interface SectorData {
//   id: string;
//   title: string;
//   subtitle: string;
//   description: string;
//   icon: React.ReactNode;
//   keyPoints: string[];
//   sectorImage: string;
//   stats: { value: string; label: string }[];
// }

// const ThreeSectorLayout: React.FC = () => {
//   const [hoveredSector, setHoveredSector] = useState<string | null>(null);

//   const sectors: SectorData[] = [
//     {
//       id: 'smart-energy',
//       title: 'SMART ENERGY',
//       subtitle: 'Sustainable Power Solutions',
//       description: 'Advanced renewable energy systems and smart grid technology that revolutionizes power distribution and energy management across industrial and residential sectors.',
//       icon: <Zap className="w-10 h-10" />,
//       keyPoints: [
//         'Renewable Energy Integration',
//         'Smart Grid Technology',
//         'Energy Storage Systems',
//         'Power Distribution Networks',
//         'Real-time Energy Monitoring',
//         'Carbon Footprint Reduction'
//       ],
//       sectorImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=800&fit=crop&crop=center',
//       stats: [
//         { value: '95%', label: 'Energy Efficiency' },
//         { value: '500+', label: 'Projects Completed' },
//         { value: '24/7', label: 'System Monitoring' }
//       ]
//     },
//     {
//       id: 'intelligent-manufacturing',
//       title: 'INTELLIGENT MANUFACTURING',
//       subtitle: 'Industry 4.0 Solutions',
//       description: 'Comprehensive industrial automation systems featuring cutting-edge robotics, IoT integration, and intelligent manufacturing processes for maximum operational efficiency.',
//       icon: <Settings className="w-10 h-10" />,
//       keyPoints: [
//         'Intelligent Manufacturing Equipment',
//         'Industrial Robotics',
//         'Environmental Protection Systems',
//         'Automated Production Lines',
//         'Quality Control Systems',
//         'Predictive Maintenance'
//       ],
//       sectorImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop&crop=center',
//       stats: [
//         { value: '40%', label: 'Cost Reduction' },
//         { value: '300+', label: 'Installations' },
//         { value: '99.9%', label: 'Uptime Achieved' }
//       ]
//     },
//     {
//       id: 'digital-infrastructure',
//       title: 'DIGITAL INFRASTRUCTURE',
//       subtitle: 'Connected Ecosystems',
//       description: 'Next-generation digital infrastructure solutions that enable seamless connectivity, data analytics, and intelligent decision-making across complex industrial environments.',
//       icon: <Brain className="w-10 h-10" />,
//       keyPoints: [
//         'IoT Network Architecture',
//         'Cloud Computing Solutions',
//         'Data Analytics Platforms',
//         'Cybersecurity Systems',
//         'Edge Computing',
//         'Digital Twin Technology'
//       ],
//       sectorImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop&crop=center',
//       stats: [
//         { value: '1000+', label: 'Connected Devices' },
//         { value: '50TB', label: 'Data Processed Daily' },
//         { value: '99.99%', label: 'Network Reliability' }
//       ]
//     }
//   ];

//   return (
//     <section className="relative w-full min-h-screen bg-slate-900 overflow-hidden">
//       {/* Full Background Image */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=1920&h=1080&fit=crop&crop=center"
//           alt="Industrial Engineering Background"
//           className="w-full h-full object-cover"
//         />
//         {/* Dark overlay for better contrast */}
//         <div className="absolute inset-0 bg-slate-900/85" />

//         {/* Grid Pattern Overlay */}
//         <div className="absolute inset-0 opacity-10" style={{
//           backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px)',
//           backgroundSize: '40px 40px'
//         }} />
//       </div>

//       {/* Section Header */}
//       <div className="relative z-10 pt-20 pb-12 px-6 lg:px-8 max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-16 h-px bg-gradient-to-r from-transparent to-blue-500" />
//             <span className="text-sm font-bold text-blue-400 uppercase tracking-[0.3em]">
//               Our Expertise
//             </span>
//             <div className="w-16 h-px bg-gradient-to-l from-transparent to-blue-500" />
//           </div>

//           <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-none">
//             Engineering
//             <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//               Excellence
//             </span>
//           </h2>

//           <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//             Delivering cutting-edge solutions across three core sectors that drive industrial innovation and sustainable growth
//           </p>
//         </div>
//       </div>

//       {/* Sectors Grid */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20">
//         <div className="grid lg:grid-cols-3 gap-px bg-white/10">
//           {sectors.map((sector, index) => (
//             <div
//               key={sector.id}
//               className="relative group cursor-pointer bg-slate-900/90 backdrop-blur-sm min-h-[600px] overflow-hidden transition-all duration-500"
//               onMouseEnter={() => setHoveredSector(sector.id)}
//               onMouseLeave={() => setHoveredSector(null)}
//             >
//               {/* Sector-specific background image that appears on hover */}
//               <div className={`absolute inset-0 transition-all duration-700 ${
//                 hoveredSector === sector.id ? 'opacity-30' : 'opacity-0'
//               }`}>
//                 <img
//                   src={sector.sectorImage}
//                   alt={sector.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-600/60 via-slate-800/80 to-slate-900/90" />
//               </div>

//               {/* Content Container */}
//               <div className="relative z-10 h-full flex flex-col p-8 lg:p-10">
//                 {/* Icon and Title Section */}
//                 <div className="mb-8">
//                   <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
//                     <div className="text-white">
//                       {sector.icon}
//                     </div>
//                   </div>

//                   <h3 className="text-2xl lg:text-3xl font-black text-white mb-3 leading-tight">
//                     {sector.title}
//                   </h3>

//                   <div className="w-12 h-1 bg-blue-500 mb-4" />

//                   <h4 className="text-lg font-medium text-blue-400 mb-4">
//                     {sector.subtitle}
//                   </h4>
//                 </div>

//                 {/* Description */}
//                 <p className="text-gray-300 leading-relaxed mb-8 flex-grow">
//                   {sector.description}
//                 </p>

//                 {/* Key Points - Show on hover */}
//                 <div className={`transition-all duration-500 overflow-hidden ${
//                   hoveredSector === sector.id
//                     ? 'max-h-96 opacity-100 mb-8'
//                     : 'max-h-0 opacity-0 mb-0'
//                 }`}>
//                   <div className="space-y-2">
//                     <h5 className="text-sm font-bold text-white uppercase tracking-wide mb-4">
//                       Key Capabilities
//                     </h5>
//                     {sector.keyPoints.map((point, pointIndex) => (
//                       <div
//                         key={pointIndex}
//                         className="flex items-center gap-3 text-sm text-gray-300 transform transition-all duration-300"
//                         style={{
//                           transitionDelay: `${pointIndex * 50}ms`
//                         }}
//                       >
//                         <div className="w-1 h-1 bg-blue-400 flex-shrink-0" />
//                         {point}
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Stats */}
//                 <div className={`grid grid-cols-3 gap-4 mb-8 transition-all duration-500 ${
//                   hoveredSector === sector.id ? 'opacity-100' : 'opacity-60'
//                 }`}>
//                   {sector.stats.map((stat, statIndex) => (
//                     <div key={statIndex} className="text-center">
//                       <div className="text-xl lg:text-2xl font-black text-white mb-1">
//                         {stat.value}
//                       </div>
//                       <div className="text-xs text-gray-400 uppercase tracking-wide">
//                         {stat.label}
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Action Button */}
//                 <button className="group/btn flex items-center justify-between w-full bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 px-6 py-4 transition-all duration-300 backdrop-blur-sm">
//                   <span className="text-sm font-bold text-white uppercase tracking-wide">
//                     Explore Solutions
//                   </span>
//                   <ArrowUpRight className="w-5 h-5 text-white transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
//                 </button>
//               </div>

//               {/* Animated Border */}
//               <div className={`absolute inset-0 border-2 transition-all duration-500 pointer-events-none ${
//                 hoveredSector === sector.id
//                   ? 'border-blue-500'
//                   : 'border-transparent'
//               }`} />

//               {/* Corner Accent */}
//               <div className={`absolute top-0 right-0 w-20 h-20 transition-all duration-500 ${
//                 hoveredSector === sector.id ? 'opacity-100' : 'opacity-0'
//               }`}>
//                 <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-blue-500 to-transparent" />
//                 <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent" />
//               </div>

//               {/* Number Indicator */}
//               <div className="absolute top-8 right-8 text-6xl font-black text-white/10 transition-all duration-300 group-hover:text-white/20">
//                 {String(index + 1).padStart(2, '0')}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Decorative Elements */}
//       <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
//       <div className="absolute bottom-20 left-20 w-2 h-2 bg-blue-500 animate-pulse" />
//       <div className="absolute bottom-32 right-32 w-1 h-1 bg-cyan-400 animate-pulse" style={{ animationDelay: '1s' }} />
//     </section>
//   );
// };

// export default ThreeSectorLayout;
