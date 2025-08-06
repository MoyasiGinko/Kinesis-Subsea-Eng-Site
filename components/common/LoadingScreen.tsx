import React from "react";

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white backdrop-blur-sm">
      <div className="flex flex-col items-center gap-6">
        <svg
          className="animate-spin w-16 h-16 text-[#FC5220]"
          viewBox="0 0 50 50"
        >
          <circle
            className="opacity-20"
            cx="25"
            cy="25"
            r="20"
            stroke="#FC5220"
            strokeWidth="5"
            fill="none"
          />
          <circle
            className="opacity-100"
            cx="25"
            cy="25"
            r="20"
            stroke="#FC5220"
            strokeWidth="5"
            fill="none"
            strokeDasharray="90 150"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-xl font-bold text-[#FC5220] tracking-wide">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen;
