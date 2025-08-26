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
    <div className="relative pt-40 w-full h-80 md:h-[24rem] lg:h-[28rem] overflow-hidden">
      {/* Main container with parallel trapezoidal split */}
      <div className="flex h-full">
        {/* Left section - Orange with industrial silhouette */}
        <div className="relative w-1/2">
          {/* Left trapezoid orange panel with background image + overlay */}
          <div
            className="absolute mr-1 top-0 left-0 bottom-0"
            style={{
              // Expand this trapezoid beyond the left container so it reaches further toward the middle-right
              width: "104.5%",
              // Trapezoid widened much further toward the middle-right:
              // top shared point moved to 95%, bottom shared to 90%
              clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)",
              WebkitClipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)",
              // Background image with a semi-transparent overlay for better text contrast
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url('/images/sector-banner-renewables.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Industrial silhouette (optional) */}

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

          {/* Optional subtle pattern/colour overlay if you need additional tint:
              keep commented out or adjust opacity
          */}
          {/* <div
            className="absolute mr-1 top-0 left-0 bottom-0"
            style={{
              clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)",
              WebkitClipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)",
              background: "rgba(0,0,0,0.15)",
            }}
          /> */}
        </div>

        {/* Right section - Professional women image */}
        <div className="relative w-1/2">
          {/* Right trapezoid with an image background */}
          <div
            className="absolute  ml-1 inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              width: "100%",
              // Replace the URL below with your actual image path
              backgroundImage: "url('/images/service-banner-right.avif')",
              // Keep the trapezoid shape reaching toward the center
              clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0% 100%)",
              WebkitClipPath: "polygon(5% 0, 100% 0, 100% 100%, 0% 100%)",
              // borderRadius: "10px",
              // borderBottomLeftRadius: "10px",
            }}
          />

          {/* Overlay for better text contrast if needed */}
          {/* <div
            className="absolute  ml-1 inset-0 bg-black bg-opacity-25"
            style={{
              clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0% 100%)",
              WebkitClipPath: "polygon(5% 0, 100% 0, 100% 100%, 0% 100%)",
              // borderRadius: "10px",
              // borderBottomLeftRadius: "10px",
            }}
          /> */}
        </div>
      </div>

      {/* Decorative elements */}
      {/* <div className="absolute top-8 right-8 w-16 h-16 border-2 border-white border-opacity-30 rounded-full hidden md:block" />
      <div className="absolute bottom-8 left-1/4 w-2 h-2 bg-white bg-opacity-60 rounded-full" />
      <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-white bg-opacity-40 rounded-full" /> */}
    </div>
  );
};

export default ServiceBanner;
