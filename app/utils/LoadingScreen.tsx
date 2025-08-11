import React from "react";

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        <div className="loading-spinner animate-gpu"></div>
        <span className="text-xl font-bold text-[#FC5220] tracking-wide">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen;
