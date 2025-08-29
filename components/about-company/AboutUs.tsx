"use client";
import React from "react";
import { Users, Award, Globe, Target, Zap, Shield } from "lucide-react";

interface Stat {
  number: string;
  label: string;
  icon: React.ReactNode;
}

interface TeamMember {
  name: string;
  position: string;
  expertise: string;
}

interface Value {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const AboutKinesis: React.FC = () => {
  const stats: Stat[] = [
    {
      number: "150+",
      label: "Projects Delivered",
      icon: <Award className="w-8 h-8" />,
    },
    {
      number: "25+",
      label: "Years Combined Experience",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      number: "12",
      label: "Countries Operated",
      icon: <Users className="w-8 h-8" />,
    },
    {
      number: "99.8%",
      label: "Project Success Rate",
      icon: <Target className="w-8 h-8" />,
    },
  ];

  const leadership: TeamMember[] = [
    {
      name: "Dr. Sarah Mitchell",
      position: "Chief Executive Officer",
      expertise: "Subsea Systems & Strategic Leadership",
    },
    {
      name: "James Richardson",
      position: "Chief Technology Officer",
      expertise: "Riser Systems & Dynamic Analysis",
    },
    {
      name: "Maria Santos",
      position: "Head of Operations",
      expertise: "Project Management & Offshore Execution",
    },
    {
      name: "David Chen",
      position: "Principal Engineer",
      expertise: "Pipeline Engineering & Risk Assessment",
    },
  ];

  const values: Value[] = [
    {
      title: "Innovation",
      description:
        "Pioneering advanced engineering solutions that push the boundaries of subsea technology.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Safety First",
      description:
        "Unwavering commitment to safety standards that protect our people and the environment.",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "Technical Excellence",
      description:
        "Delivering engineering solutions with precision, reliability, and uncompromising quality.",
      icon: <Target className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Company Overview - Extraordinary Design */}
      <div
        className="relative overflow-hidden bg-white bg-fit cove bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/service2.gif')" }}
      >
        {/* optional overlay for better contrast */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

        <div className="max-w-[1480px] mx-auto px-6 py-20">
          <div className="relative">
            {/* Background geometric patterns */}
            {/* <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 border-r-8 border-t-8 border-primary-blue"></div>
          <div className="absolute bottom-20 left-0 w-64 h-64 border-l-4 border-b-4 border-gray-800"></div>
          <div className="absolute top-1/2 right-1/3 w-80 h-80 border-r-6 border-primary-blue"></div>
        </div> */}

            {/* Main content with diagonal arrangement */}
            <div className="relative z-10 grid grid-cols-12 gap-6 items-center min-h-[600px]">
              <div className="col-span-6">
                <div className="relative">
                  {/* Company name with geometric accent */}
                  <div className="relative mb-8">
                    <div className="absolute -left-8 top-0 w-2 h-32 bg-primary-blue"></div>
                    <h1 className="text-6xl font-black text-gray-900 leading-none">
                      KINESIS
                      <span className="block text-primary-blue">SUBSEA</span>
                      <span className="block text-gray-700 text-3xl font-normal mt-2">
                        ENGINEERING
                      </span>
                    </h1>
                  </div>

                  {/* Stepped content blocks */}
                  <div className="space-y-0 mb-8">
                    <div className="bg-gray-900 text-white p-6 ml-0 transform -skew-x-6">
                      <div className="transform skew-x-6">
                        <p className="text-lg leading-relaxed">
                          Founded on the principle of delivering exceptional
                          subsea engineering solutions, Kinesis represents the
                          dynamic force driving offshore innovation.
                        </p>
                      </div>
                    </div>

                    <div className="bg-primary-blue text-white p-6 ml-12 transform -skew-x-6">
                      <div className="transform skew-x-6">
                        <p className="text-lg leading-relaxed">
                          Our multidisciplinary team combines decades of
                          industry experience with cutting-edge technology to
                          tackle the most complex offshore challenges.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-1">
                {/* <div className="writing-mode-vertical text-gray-600 font-bold text-sm tracking-widest transform rotate-0">
          ABOUT KINESIS
            </div> */}
              </div>

              <div className="col-span-5">
                <div className="relative">
                  {/* Angular visual representation */}
                  <div className="space-y-4">
                    <div className="bg-primary-blue h-24 w-full relative">
                      <div className="absolute right-0 top-0 w-20 h-full bg-primary-blue-hover"></div>
                      <div className="absolute left-8 top-8 text-white font-bold">
                        ESTABLISHED 2018
                      </div>
                    </div>

                    <div className="bg-gray-800 h-28 w-4/5 ml-auto relative">
                      <div className="absolute left-0 top-0 w-16 h-full bg-gray-900"></div>
                      <div className="absolute right-8 top-10 text-white font-bold">
                        GLOBAL REACH
                      </div>
                    </div>

                    <div className="bg-primary-blue h-20 w-3/4 relative">
                      <div className="absolute right-0 top-0 w-12 h-full bg-primary-blue"></div>
                      <div className="absolute left-8 top-6 text-white font-bold">
                        INNOVATION FOCUSED
                      </div>
                    </div>
                  </div>

                  {/* Connecting elements */}
                  <div className="absolute -right-8 top-0 bottom-0 w-px bg-gray-400"></div>
                  <div className="absolute -right-12 top-12 w-4 h-px bg-gray-400"></div>
                  <div className="absolute -right-12 top-36 w-4 h-px bg-gray-400"></div>
                  <div className="absolute -right-12 top-60 w-4 h-px bg-gray-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision - Asymmetrical Layout */}
      <div className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-8">
            {/* Mission */}
            <div className="col-span-5">
              <div className="relative">
                <div className="absolute -left-6 top-0 w-1 h-24 bg-primary-blue"></div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <div className="bg-white p-8 border-l-4 border-primary-blue">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To revolutionize subsea engineering through innovative
                    solutions that enhance safety, efficiency, and environmental
                    responsibility while delivering measurable value to our
                    clients across the global offshore energy sector.
                  </p>
                </div>
              </div>
            </div>

            {/* Spacer with visual element */}
            <div className="col-span-2 flex items-center justify-center">
              <div className="w-16 h-16 bg-primary-blue transform rotate-45 relative">
                <div className="absolute inset-2 bg-white transform -rotate-45"></div>
              </div>
            </div>

            {/* Vision */}
            <div className="col-span-5">
              <div className="relative">
                <div className="absolute -right-6 top-0 w-1 h-24 bg-gray-800"></div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-right">
                  Our Vision
                </h2>
                <div className="bg-white p-8 border-r-4 border-gray-800">
                  <p className="text-lg text-gray-700 leading-relaxed text-right">
                    To be the world's most trusted partner in subsea
                    engineering, setting new industry standards through
                    technical excellence, sustainable practices, and
                    transformative innovation that shapes the future of offshore
                    development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <div className="w-24 h-1 bg-primary-blue mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="relative group">
                <div className="bg-gray-50 border-2 border-gray-200 hover:border-primary-blue transition-all duration-300 p-8 text-center">
                  <div className="text-primary-blue mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-black text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <div className="w-24 h-1 bg-primary-blue"></div>
            <p className="text-lg text-gray-700 mt-6 max-w-3xl">
              Our leadership team brings together world-class expertise in
              subsea engineering, combining academic excellence with hands-on
              offshore experience to drive innovation and deliver exceptional
              results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((member, index) => (
              <div
                key={index}
                className="bg-white border-l-4 border-primary-blue p-8 relative group hover:border-gray-800 transition-colors duration-300"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gray-50 transform -skew-y-12 group-hover:bg-blue-50 transition-colors duration-300"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div className="text-primary-blue font-semibold mb-3">
                  {member.position}
                </div>
                <p className="text-gray-700">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-primary-blue mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="relative group">
                <div className="bg-gray-50 p-8 border-2 border-gray-200 hover:border-primary-blue transition-all duration-300 h-full">
                  <div className="text-primary-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-8 h-8 bg-primary-blue transform rotate-45 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-white overflow-hidden">
        {/* <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 border-l-4 border-t-4 border-primary-blue opacity-30"></div>
          <div className="absolute top-0 right-0 w-48 h-48 border-r-4 border-b-4 border-primary-blue opacity-20"></div>
        </div> */}

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-8">
              <div className="relative">
                <div className="absolute -left-6 top-0 w-2 h-full bg-primary-blue"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-8">
                  Partner with
                  <span className="block text-primary-blue">
                    Kinesis Subsea
                  </span>
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="bg-primary-blue text-white p-6 max-w-2xl transform -skew-x-3">
                    <div className="transform skew-x-3">
                      <p className="text-lg">
                        Experience the difference that innovative engineering
                        and proven expertise can make to your offshore projects.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary-blue hover:bg-primary-blue-hover text-white px-8 py-4 font-bold transition-all duration-300 transform hover:-translate-y-1">
                    START YOUR PROJECT
                  </button>
                  <button className="border-2 border-black text-black hover:bg-white hover:text-primary-blue-hover hover:border-primary-blue-hover px-8 py-4 font-bold transition-all duration-300">
                    MEET OUR TEAM
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

export default AboutKinesis;
