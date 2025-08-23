import React from "react";

interface ServiceBannerProps {
  title?: string;
  breadcrumb?: string;
  subtitle?: string;
}

const ServiceBanner: React.FC<ServiceBannerProps> = ({
  title = "Services",
  breadcrumb = "Industrie - Industry and Engineering WordPress Theme",
  subtitle = "Services",
}) => {
  return (
    <div className="relative w-full h-96 md:h-[28rem] lg:h-[32rem] overflow-hidden">
      {/* Main container with parallel trapezoidal split */}
      <div className="flex h-full">
        {/* Left section - Orange with industrial silhouette */}
        <div className="relative w-1/2">
          {/* Left trapezoid orange panel */}
          <div
            className="absolute m-1 top-0 left-0 bottom-0 bg-primary-orange"
            style={{
              // Expand this trapezoid beyond the left container so it reaches further toward the middle-right
              width: "104.5%",
              // Trapezoid widened much further toward the middle-right:
              // top shared point moved to 95%, bottom shared to 90%
              clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)",
              WebkitClipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)",
              borderRadius: "10px",
            }}
          >
            {/* Industrial silhouette */}
            <div className="absolute bottom-0 left-0 right-0 h-40">
              <svg
                className="absolute bottom-0 w-full h-full text-black opacity-30"
                viewBox="0 0 800 200"
                fill="currentColor"
              >
                {/* Factory buildings and industrial elements */}
                <rect x="50" y="120" width="40" height="80" />
                <rect x="100" y="80" width="30" height="120" />
                <rect x="140" y="100" width="35" height="100" />
                <rect x="185" y="60" width="25" height="140" />
                <rect x="220" y="90" width="40" height="110" />
                <rect x="270" y="70" width="30" height="130" />
                <rect x="310" y="110" width="35" height="90" />
                <rect x="355" y="50" width="28" height="150" />
                <rect x="390" y="85" width="45" height="115" />
                <rect x="445" y="95" width="32" height="105" />
                <rect x="485" y="75" width="38" height="125" />
                <rect x="530" y="105" width="30" height="95" />
                <rect x="570" y="65" width="35" height="135" />
                <rect x="615" y="90" width="25" height="110" />
                <rect x="650" y="110" width="40" height="90" />
                <rect x="700" y="85" width="30" height="115" />

                {/* Smokestacks */}
                <rect x="80" y="40" width="8" height="80" />
                <rect x="160" y="30" width="10" height="70" />
                <rect x="250" y="35" width="8" height="75" />
                <rect x="370" y="25" width="12" height="75" />
                <rect x="460" y="45" width="8" height="80" />
                <rect x="550" y="30" width="10" height="75" />

                {/* Industrial equipment */}
                <circle cx="420" cy="160" r="20" />
                <circle cx="320" cy="170" r="15" />
                <circle cx="520" cy="155" r="18" />

                {/* Crane */}
                <line
                  x1="720"
                  y1="200"
                  x2="720"
                  y2="60"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <line
                  x1="720"
                  y1="60"
                  x2="780"
                  y2="80"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <line
                  x1="720"
                  y1="70"
                  x2="680"
                  y2="85"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Content overlay */}
            <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {title}
              </h1>
              <div className="flex items-center text-white text-sm md:text-base opacity-90">
                <span>{breadcrumb}</span>
                <span className="mx-2">›</span>
                <span>{subtitle}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right section - Professional women image */}
        <div className="relative w-1/2">
          {/* Right trapezoid with an image background */}
          <div
            className="absolute m-1 inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              width: "100%",
              // Replace the URL below with your actual image path
              backgroundImage: "url('/images/sector-banner-renewables.jpg')",
              // Keep the trapezoid shape reaching toward the center
              clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0% 100%)",
              WebkitClipPath: "polygon(5% 0, 100% 0, 100% 100%, 0% 100%)",
              borderRadius: "10px",
            }}
          />

          {/* Overlay for better text contrast if needed */}
          <div
            className="absolute m-1 inset-0 bg-black bg-opacity-25"
            style={{
              clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0% 100%)",
              WebkitClipPath: "polygon(5% 0, 100% 0, 100% 100%, 0% 100%)",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-8 right-8 w-16 h-16 border-2 border-white border-opacity-30 rounded-full hidden md:block" />
      <div className="absolute bottom-8 left-1/4 w-2 h-2 bg-white bg-opacity-60 rounded-full" />
      <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-white bg-opacity-40 rounded-full" />
    </div>
  );
};

export default ServiceBanner;
