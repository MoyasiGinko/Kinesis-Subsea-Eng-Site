import React from "react";

const NewsHero = ({}) => {
  return (
    <div
      className="relative overflow-hidden py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-blue-950 min-h-[600px]"
      style={{
        backgroundImage: "url('/images/about3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Animated floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-blue-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-blue-200 rounded-full animate-ping"></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-blue-900/30"></div>

      {/* Main content container */}
      <div className="max-w-[1480px] mx-auto px-6 py-16 relative z-20">
        {/* Hero content layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Main heading */}
          <div className="space-y-8">
            <div className="relative">
              {/* Background accent shape */}
              <div className="absolute -left-6 -top-6 w-32 h-32 border-4 border-blue-400/20 rounded-tl-3xl"></div>

              <h1 className="text-7xl xl:text-8xl font-black text-white leading-none relative z-10">
                NEWS
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 mt-2">
                  INSIGHTS
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Your gateway to the latest in subsea engineering innovation and
              industry developments
            </p>

            {/* Call to action */}
            <div className="flex items-center gap-6">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
                Explore Stories
              </button>
              <button className="border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-300 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>

          {/* Right side - Feature cards */}
          <div className="space-y-6">
            {/* Featured article card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Breaking Technology
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Revolutionary advances in deep-sea exploration equipment are
                    transforming offshore operations worldwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Industry insights card */}
            <div className="bg-blue-600/20 backdrop-blur-md border border-blue-400/30 rounded-2xl p-6 hover:bg-blue-600/30 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Market Analysis
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    In-depth analysis of market trends and strategic insights
                    shaping the future of subsea engineering.
                  </p>
                </div>
              </div>
            </div>

            {/* Research updates card */}
            <div className="bg-gray-800/40 backdrop-blur-md border border-gray-600/50 rounded-2xl p-6 hover:bg-gray-800/60 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Research Updates
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Latest research findings and breakthrough discoveries from
                    leading marine engineering laboratories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-20 text-blue-900/20">
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default NewsHero;
