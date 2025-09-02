import React from "react";

const NewsHero = ({}) => {
  return (
    <div
      className="relative min-h-[80vh] flex items-center"
      style={{
        backgroundImage: "url('/images/about3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px),
                           linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-[1480px] mx-auto px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-12">
            {/* Main headline */}
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.9] tracking-tight">
                <span className="block text-white">Latest</span>
                <span className="block text-black font-bold">Insights</span>
                <span className="block text-gray-50 text-4xl lg:text-5xl xl:text-6xl font-light mt-4">
                  in Engineering
                </span>
              </h1>

              <p className="text-xl text-gray-100 font-light leading-relaxed max-w-2xl">
                Professional analysis and breaking developments in subsea
                technology, offshore engineering, and marine innovation.
              </p>
            </div>

            {/* Clean CTA */}
            {/* <div className="flex items-center gap-6">
              <button className="bg-black text-white px-12 py-4 text-sm font-semibold tracking-wide hover:bg-gray-900 transition-colors duration-200">
                READ LATEST
              </button>
              <button className="text-black border-b-2 border-black pb-1 text-sm font-semibold tracking-wide hover:border-gray-600 hover:text-gray-600 transition-colors duration-200">
                VIEW ARCHIVE
              </button>
            </div> */}
          </div>

          {/* Right Side - Architectural geometric composition */}
          <div className="lg:col-span-5 relative h-96">
            {/* Main large hexagonal feature */}
            <div className="absolute top-0 right-0 w-72 h-72 group cursor-pointer">
              {/* Outermost white ring */}
              <div
                className="w-full h-full"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  backgroundColor: "#ffffff",
                  padding: "4px",
                }}
              >
                {/* Middle accent ring (same as bg accent color) */}
                <div
                  className="w-full h-full"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    backgroundColor: "var(--primary-blue, #0b5fff)", // try to use your Tailwind/custom var, fallback provided
                    padding: "4px",
                  }}
                >
                  {/* Inner content (slightly darker so the accent ring is visible) */}
                  <div
                    className="relative w-full h-full text-white overflow-hidden hover:bg-gray-900 transition-transform duration-300"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      backgroundColor: "#0845b8", // slightly darker than the accent ring so the ring shows
                    }}
                  >
                    <div className="p-6 h-full flex flex-col items-center justify-center gap-3 text-center">
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold leading-tight">
                          Deep Sea Innovation
                        </h3>
                      </div>
                      <div>
                        <p className="text-xs lg:text-sm text-gray-200">
                          Breakthrough autonomous systems reach unprecedented
                          depths in marine exploration
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping pentagon */}
            <div className="absolute top-24 left-0 w-60 h-48 group cursor-pointer">
              {/* Outermost white ring */}
              <div
                className="w-full h-full"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 35%, 85% 100%, 15% 100%, 0% 35%)",
                  backgroundColor: "#ffffff",
                  padding: "4px",
                }}
              >
                {/* Middle accent ring (same as bg accent color) */}
                <div
                  className="w-full h-full"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 35%, 85% 100%, 15% 100%, 0% 35%)",
                    backgroundColor: "var(--primary-orange, #ff7a00)",
                    padding: "4px",
                  }}
                >
                  {/* Inner content (slightly darker so the accent ring is visible) */}
                  <div
                    className="relative w-full h-full overflow-hidden hover:bg-gray-200 transition-colors duration-300"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 35%, 85% 100%, 15% 100%, 0% 35%)",
                      backgroundColor: "var(--primary-orange-hover, #e65a00)",
                    }}
                  >
                    <div className="p-6 h-full flex flex-col items-center justify-center text-center">
                      <div>
                        <h4 className="text-base lg:text-base font-semibold text-white">
                          Market Insights
                        </h4>
                      </div>
                      <div>
                        <p className="text-xs lg:text-sm text-gray-50">
                          Q4 offshore investment analysis shows 340% growth
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trapezoid accent piece */}
            <div className="absolute bottom-0 right-1/3 w-36 h-28 group cursor-pointer">
              {/* Outermost white ring */}
              <div
                className="w-full h-full"
                style={{
                  clipPath: "polygon(0 0, 100% 25%, 75% 100%, 0% 100%)",
                  backgroundColor: "#ffffff",
                  padding: "4px",
                }}
              >
                {/* Middle accent ring (same as bg accent color) */}
                <div
                  className="w-full h-full"
                  style={{
                    clipPath: "polygon(0 0, 100% 25%, 75% 100%, 0% 100%)",
                    backgroundColor: "var(--primary-yellow, #ffcc00)",
                    padding: "4px",
                  }}
                >
                  {/* Inner content (slightly darker so the accent ring is visible) */}
                  <div
                    className="relative w-full h-full text-black overflow-hidden hover:bg-gray-900 transition-colors duration-300"
                    style={{
                      clipPath: "polygon(0 0, 100% 25%, 75% 100%, 0% 100%)",
                      backgroundColor: "#e6b800",
                    }}
                  >
                    <div className="p-4 h-full flex items-center justify-center text-center">
                      <h5 className="text-lg lg:text-xl font-semibold leading-tight">
                        Research
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thin vertical accent bar */}
            <div className="absolute bottom-0 left-0 w-2 h-32 bg-black"></div>

            {/* Floating minimal element */}
            <div className="absolute top-12 -left-4 w-16 h-16 border-2 border-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHero;
