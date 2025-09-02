import React from "react";

const NewsHero = ({}) => {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/sector-right.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* subtle translucent overlay to keep text readable on the image */}
      <div className="absolute inset-0 bg-black opacity-30 pointer-events-none" />

      <div className="max-w-[1480px] mx-auto px-6 py-20 relative z-10">
        <div className="relative">
          {/* Background geometric patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 border-l-8 border-t-8 border-primary-blue"></div>
            <div className="absolute bottom-20 right-0 w-64 h-64 border-r-4 border-b-4 border-gray-800"></div>
            <div className="absolute top-1/2 right-1/3 w-80 h-80 border-r-6 border-blue-400"></div>
          </div>

          {/* Header content with diagonal arrangement */}
          <div className="relative z-10 grid grid-cols-12 gap-6 items-center min-h-[500px]">
            <div className="col-span-6">
              <div className="space-y-6 ml-8">
                <h1 className="text-6xl font-black text-white leading-none">
                  NEWS &<span className="block text-blue-300">INSIGHTS</span>
                </h1>
                <div className="w-24 h-1 bg-primary-blue"></div>
              </div>
            </div>

            <div className="col-span-5">
              <div className="relative">
                {/* Stepped content blocks */}
                <div className="space-y-0">
                  <div className="bg-gray-900 text-white p-6 ml-0 transform -skew-x-6">
                    <div className="transform skew-x-6">
                      <p className="text-lg leading-relaxed">
                        Stay informed with the latest developments in subsea
                        engineering, innovative technologies, and industry
                        insights.
                      </p>
                    </div>
                  </div>

                  <div className="bg-primary-blue text-white p-6 ml-12 transform -skew-x-6">
                    <div className="transform skew-x-6">
                      <p className="text-lg leading-relaxed">
                        From breakthrough research to major project
                        announcements, discover what's driving the future of
                        offshore engineering.
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
  );
};

export default NewsHero;
