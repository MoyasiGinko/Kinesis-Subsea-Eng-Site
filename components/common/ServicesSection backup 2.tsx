// "use client"
// import React, { useState, useRef, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, ArrowRight, Wrench, Package, Search, Building2, Cog, Shield, Zap } from 'lucide-react';

// interface ServiceCard {
//   id: string;
//   title: string;
//   subtitle: string;
//   description: string;
//   features: string[];
//   image: string;
//   icon: React.ReactNode;
//   buttonText: string;
//   theme: 'primary' | 'secondary' | 'accent';
//   stats: {
//     projects: string;
//     experience: string;
//   };
// }

// const HorizontalServiceCards: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [hoveredService, setHoveredService] = useState<number | null>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const services: ServiceCard[] = [
//     {
//       id: 'mechanical',
//       title: 'MECHANICAL',
//       subtitle: 'ENGINEERING',
//       description: 'Advanced mechanical engineering solutions for complex industrial applications with precision manufacturing and system optimization.',
//       features: ['Structural Design', 'System Integration', 'Performance Analysis', 'Quality Assurance'],
//       image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
//       icon: <Wrench className="w-8 h-8" />,
//       buttonText: 'EXPLORE SERVICES',
//       theme: 'primary',
//       stats: {
//         projects: '250+',
//         experience: '15 Years'
//       }
//     },
//     {
//       id: 'product-design',
//       title: 'PRODUCT DESIGN',
//       subtitle: '& MANUFACTURING',
//       description: 'End-to-end product development from conceptual design through manufacturing with cutting-edge technology and innovation.',
//       features: ['Product Development', 'Prototype Testing', 'Manufacturing Setup', 'Quality Control'],
//       image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=400&fit=crop',
//       icon: <Package className="w-8 h-8" />,
//       buttonText: 'VIEW PORTFOLIO',
//       theme: 'secondary',
//       stats: {
//         projects: '180+',
//         experience: '12 Years'
//       }
//     },
//     {
//       id: 'research',
//       title: 'RESEARCH &',
//       subtitle: 'DEVELOPMENT',
//       description: 'Innovative R&D solutions driving technological advancement and breakthrough discoveries for next-generation applications.',
//       features: ['Technology Innovation', 'Process Optimization', 'Material Science', 'Testing & Validation'],
//       image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
//       icon: <Search className="w-8 h-8" />,
//       buttonText: 'DISCOVER MORE',
//       theme: 'accent',
//       stats: {
//         projects: '95+',
//         experience: '10 Years'
//       }
//     },
//     {
//       id: 'consulting',
//       title: 'ENGINEERING',
//       subtitle: 'CONSULTING',
//       description: 'Strategic engineering consultancy providing expert guidance for complex projects and operational excellence initiatives.',
//       features: ['Strategic Planning', 'Technical Analysis', 'Risk Assessment', 'Project Management'],
//       image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
//       icon: <Building2 className="w-8 h-8" />,
//       buttonText: 'GET CONSULTATION',
//       theme: 'primary',
//       stats: {
//         projects: '320+',
//         experience: '18 Years'
//       }
//     },
//     {
//       id: 'automation',
//       title: 'INDUSTRIAL',
//       subtitle: 'AUTOMATION',
//       description: 'Smart automation solutions for industrial processes with AI-driven control systems and IoT integration.',
//       features: ['Process Automation', 'Control Systems', 'IoT Integration', 'Predictive Maintenance'],
//       image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
//       icon: <Cog className="w-8 h-8" />,
//       buttonText: 'LEARN MORE',
//       theme: 'secondary',
//       stats: {
//         projects: '140+',
//         experience: '8 Years'
//       }
//     }
//   ];

//   const nextSlide = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentIndex((prev) => (prev + 1) % services.length);
//     setTimeout(() => setIsTransitioning(false), 800);
//   };

//   const prevSlide = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
//     setTimeout(() => setIsTransitioning(false), 800);
//   };

//   const goToSlide = (index: number) => {
//     if (isTransitioning || index === currentIndex) return;
//     setIsTransitioning(true);
//     setCurrentIndex(index);
//     setTimeout(() => setIsTransitioning(false), 800);
//   };

//   // Auto-slide functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (hoveredService === null) {
//         nextSlide();
//       }
//     }, 6000);
//     return () => clearInterval(interval);
//   }, [hoveredService]);

//   const currentService = services[currentIndex];

//   const getThemeColors = (theme: string) => {
//     switch (theme) {
//       case 'primary':
//         return {
//           bg: 'bg-slate-900',
//           text: 'text-white',
//           accent: 'bg-blue-500',
//           hover: 'hover:bg-blue-600'
//         };
//       case 'secondary':
//         return {
//           bg: 'bg-white',
//           text: 'text-slate-900',
//           accent: 'bg-slate-900',
//           hover: 'hover:bg-slate-800'
//         };
//       case 'accent':
//         return {
//           bg: 'bg-slate-800',
//           text: 'text-white',
//           accent: 'bg-emerald-500',
//           hover: 'hover:bg-emerald-600'
//         };
//       default:
//         return {
//           bg: 'bg-slate-900',
//           text: 'text-white',
//           accent: 'bg-blue-500',
//           hover: 'hover:bg-blue-600'
//         };
//     }
//   };

//   return (
//     <div className="bg-gradient-to-b from-slate-100 to-white py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="mb-16">
//           <div className="flex items-center mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mr-4"></div>
//             <span className="text-slate-600 font-bold tracking-widest uppercase text-sm flex items-center gap-2">
//               <Shield className="w-4 h-4" />
//               Our Services
//             </span>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-8 items-end">
//             <div>
//               <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
//                 ENGINEERING
//                 <span className="block text-slate-600">
//                   EXCELLENCE
//                 </span>
//               </h2>

//               <p className="text-slate-600 text-xl leading-relaxed">
//                 Comprehensive engineering solutions delivering innovation,
//                 precision, and reliability across diverse industrial sectors.
//               </p>
//             </div>

//             {/* Service Counter & Navigation */}
//             <div className="flex items-center justify-between">
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-slate-900">
//                   {String(currentIndex + 1).padStart(2, '0')}
//                 </div>
//                 <div className="text-slate-500 text-sm uppercase tracking-wide">
//                   of {String(services.length).padStart(2, '0')}
//                 </div>
//               </div>

//               <div className="flex items-center space-x-3">
//                 <button
//                   onClick={prevSlide}
//                   disabled={isTransitioning}
//                   className="p-4 bg-white border-2 border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 group disabled:opacity-50"
//                 >
//                   <ChevronLeft className="w-5 h-5" />
//                 </button>

//                 <button
//                   onClick={nextSlide}
//                   disabled={isTransitioning}
//                   className="p-4 bg-white border-2 border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 group disabled:opacity-50"
//                 >
//                   <ChevronRight className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Service Showcase */}
//         <div className="grid lg:grid-cols-2 gap-12 mb-16">
//           {/* Service Image */}
//           <div className="relative overflow-hidden bg-slate-200 h-96 lg:h-[500px]">
//             <div
//               ref={containerRef}
//               className="flex transition-transform duration-800 ease-out h-full"
//               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//             >
//               {services.map((service, index) => (
//                 <div key={service.id} className="w-full flex-shrink-0 relative">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

//                   {/* Service Icon Overlay */}
//                   <div className="absolute top-6 left-6">
//                     <div className="w-16 h-16 bg-white/90 backdrop-blur-sm flex items-center justify-center">
//                       <div className="text-slate-900">
//                         {service.icon}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Service Details */}
//           <div className="space-y-8">
//             <div>
//               <div className="flex items-center gap-4 mb-4">
//                 <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">
//                   {currentService.title}
//                 </h3>
//                 <div className="text-slate-600">
//                   {currentService.icon}
//                 </div>
//               </div>
//               <h4 className="text-2xl lg:text-3xl font-light text-slate-600 mb-6">
//                 {currentService.subtitle}
//               </h4>

//               <p className="text-slate-700 text-lg leading-relaxed mb-8">
//                 {currentService.description}
//               </p>
//             </div>

//             {/* Features Grid */}
//             <div className="grid grid-cols-2 gap-4 mb-8">
//               {currentService.features.map((feature, index) => (
//                 <div key={index} className="flex items-center gap-3 p-3 bg-white border border-slate-200">
//                   <div className="w-2 h-2 bg-slate-900"></div>
//                   <span className="text-slate-700 font-medium text-sm">{feature}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-2 gap-6 mb-8">
//               <div className="text-center p-4 bg-slate-50 border border-slate-200">
//                 <div className="text-2xl font-bold text-slate-900">{currentService.stats.projects}</div>
//                 <div className="text-sm text-slate-600 uppercase tracking-wide">Projects</div>
//               </div>
//               <div className="text-center p-4 bg-slate-50 border border-slate-200">
//                 <div className="text-2xl font-bold text-slate-900">{currentService.stats.experience}</div>
//                 <div className="text-sm text-slate-600 uppercase tracking-wide">Experience</div>
//               </div>
//             </div>

//             {/* CTA Button */}
//             <button className="w-full lg:w-auto px-8 py-4 bg-slate-900 text-white font-semibold hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 group">
//               <span>{currentService.buttonText}</span>
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//             </button>
//           </div>
//         </div>

//         {/* Service Navigation Thumbnails */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//           {services.map((service, index) => {
//             const themeColors = getThemeColors(service.theme);
//             return (
//               <button
//                 key={service.id}
//                 onClick={() => goToSlide(index)}
//                 onMouseEnter={() => setHoveredService(index)}
//                 onMouseLeave={() => setHoveredService(null)}
//                 className={`text-left p-4 border-2 transition-all duration-300 group ${
//                   index === currentIndex
//                     ? 'border-slate-900 bg-slate-50'
//                     : 'border-slate-200 hover:border-slate-400 bg-white'
//                 }`}
//               >
//                 <div className="flex items-center gap-3 mb-2">
//                   <div className={`p-2 ${index === currentIndex ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'}`}>
//                     {service.icon}
//                   </div>
//                   <div className="text-xs text-slate-500 uppercase tracking-wide">
//                     {String(index + 1).padStart(2, '0')}
//                   </div>
//                 </div>

//                 <h4 className="font-bold text-sm text-slate-900 mb-1 leading-tight">
//                   {service.title}
//                 </h4>
//                 <p className="text-xs text-slate-600 leading-tight">
//                   {service.subtitle}
//                 </p>

//                 {/* Progress Bar */}
//                 <div className="mt-3 h-1 bg-slate-200 overflow-hidden">
//                   <div
//                     className={`h-full bg-slate-900 transition-all duration-500 ${
//                       index === currentIndex ? 'w-full' : 'w-0'
//                     }`}
//                   />
//                 </div>
//               </button>
//             );
//           })}
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-16">
//           <p className="text-slate-600 mb-6">
//             Ready to discuss your project requirements?
//           </p>
//           <button className="px-8 py-4 border-2 border-slate-900 text-slate-900 font-semibold hover:bg-slate-900 hover:text-white transition-all duration-300 transform hover:scale-105">
//             SCHEDULE CONSULTATION
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HorizontalServiceCards;
