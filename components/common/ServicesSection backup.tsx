// "use client"
// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight, ArrowRight, Building2, Hammer, FileText } from 'lucide-react';

// interface ServiceData {
//   id: string;
//   title: string;
//   description: string;
//   image: string;
//   number: string;
//   icon: React.ReactNode;
// }

// const ServicesSection: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const services: ServiceData[] = [
//     {
//       id: 'architecture',
//       title: 'Architecture Services',
//       description: 'Consectetur project contracting involves various elements, including comprehensive design solutions and planning.',
//       image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop',
//       number: '01',
//       icon: <Building2 className="w-6 h-6" />
//     },
//     {
//       id: 'civil-engineering',
//       title: 'Civil Engineering',
//       description: 'Project contracting involves various elements, including the selection of materials, structural analysis, and implementation.',
//       image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop',
//       number: '02',
//       icon: <Hammer className="w-6 h-6" />
//     },
//     {
//       id: 'pre-construction',
//       title: 'Pre-construction',
//       description: 'Consectetur project contracting involves various elements, including feasibility studies and detailed planning phases.',
//       image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
//       number: '03',
//       icon: <FileText className="w-6 h-6" />
//     },
//     {
//       id: 'project-management',
//       title: 'Project Management',
//       description: 'Comprehensive project oversight involving coordination, timeline management, and quality assurance throughout the process.',
//       image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
//       number: '04',
//       icon: <Building2 className="w-6 h-6" />
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % Math.max(1, services.length - 2));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + Math.max(1, services.length - 2)) % Math.max(1, services.length - 2));
//   };

//   const visibleServices = services.slice(currentSlide, currentSlide + 3);

//   return (
//     <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           {/* Left Content */}
//           <div className="space-y-8">
//             <div>
//               <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
//                 SERVICES
//               </p>
//               <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                 Providing solutions of every kind
//               </h2>
//             </div>

//             <p className="text-gray-600 text-lg leading-relaxed">
//               Engines prime movers and exhaust gas turbochargers.
//             </p>

//             {/* Navigation Controls */}
//             <div className="flex items-center space-x-4">
//               <button
//                 onClick={prevSlide}
//                 className="p-3 rounded-full border border-gray-300 hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 group"
//                 disabled={currentSlide === 0}
//               >
//                 <ChevronLeft className={`w-5 h-5 transition-colors duration-300 ${
//                   currentSlide === 0 ? 'text-gray-400' : 'text-gray-600 group-hover:text-blue-600'
//                 }`} />
//               </button>

//               <button
//                 onClick={nextSlide}
//                 className="p-3 rounded-full border border-gray-300 hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 group"
//                 disabled={currentSlide >= services.length - 3}
//               >
//                 <ChevronRight className={`w-5 h-5 transition-colors duration-300 ${
//                   currentSlide >= services.length - 3 ? 'text-gray-400' : 'text-gray-600 group-hover:text-blue-600'
//                 }`} />
//               </button>
//             </div>

//             {/* Slide Indicators */}
//             <div className="flex space-x-2">
//               {Array.from({ length: Math.max(1, services.length - 2) }, (_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentSlide(index)}
//                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                     index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Right Content - Service Cards */}
//           <div className="space-y-6">
//             {visibleServices.map((service, index) => (
//               <div
//                 key={service.id}
//                 className={`group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden ${
//                   index === 0 ? 'ring-2 ring-blue-100' : ''
//                 }`}
//               >
//                 <div className="flex flex-col sm:flex-row">
//                   {/* Image */}
//                   <div className="relative w-full sm:w-48 h-48 sm:h-32 overflow-hidden">
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent" />

//                     {/* Icon Overlay */}
//                     <div className="absolute top-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-lg">
//                       {service.icon}
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="flex-1 p-6 flex flex-col justify-between">
//                     <div>
//                       <div className="flex items-start justify-between mb-3">
//                         <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
//                           {service.title}
//                         </h3>
//                         <div className={`text-2xl font-bold transition-colors duration-300 ${
//                           index === 0 ? 'text-blue-600' : 'text-gray-300'
//                         }`}>
//                           {service.number}
//                         </div>
//                       </div>

//                       <p className="text-gray-600 text-sm leading-relaxed mb-4">
//                         {service.description}
//                       </p>
//                     </div>

//                     {/* View Details Button */}
//                     <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-all duration-300 group/btn">
//                       <span>View Details</span>
//                       <div className="p-1 bg-blue-600 text-white rounded transition-all duration-300 group-hover/btn:bg-blue-700">
//                         <ArrowRight className="w-3 h-3" />
//                       </div>
//                     </button>
//                   </div>
//                 </div>

//                 {/* Number Line Indicator */}
//                 {index === 0 && (
//                   <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesSection;
