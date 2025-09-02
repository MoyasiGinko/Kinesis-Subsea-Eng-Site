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
              {/* animation + hover rules for the vapour layers */}
              <style>{`
                @keyframes vapour1 {
                  0%   { transform: scale(1) rotate(0deg);   opacity: 0.5; filter: blur(6px);  }
                  50%  { transform: scale(1.12) rotate(2deg); opacity: 0.16; filter: blur(18px); }
                  100% { transform: scale(1.25) rotate(-1deg); opacity: 0; filter: blur(28px); }
                }
                @keyframes vapour2 {
                  0%   { transform: scale(0.98) rotate(0deg);  opacity: 0.42; filter: blur(8px);  }
                  50%  { transform: scale(1.18) rotate(-1.2deg); opacity: 0.12; filter: blur(16px); }
                  100% { transform: scale(1.32) rotate(1.6deg);  opacity: 0; filter: blur(26px); }
                }
                @keyframes vapour3 {
                  0%   { transform: scale(1.04) rotate(0deg);  opacity: 0.36; filter: blur(4px);  }
                  50%  { transform: scale(1.2) rotate(1deg);   opacity: 0.1;  filter: blur(12px); }
                  100% { transform: scale(1.36) rotate(-1.4deg); opacity: 0;  filter: blur(22px); }
                }

                /* gentle scale-up of vapour on hover to emphasize "vaporating" effect */
                .group:hover .vapour {
                  animation-play-state: running;
                  transform-origin: 50% 50%;
                }
                .group:hover .vapour1 { transform: scale(1.08); }
                .group:hover .vapour2 { transform: scale(1.06); }
                .group:hover .vapour3 { transform: scale(1.1); }
              `}</style>

              {/* Vapour layers (behind the clipped shape) */}
              <div
                aria-hidden
                className="vapour vapour1"
                style={{
                  position: "absolute",
                  top: "-10px",
                  left: "-10px",
                  right: "-10px",
                  bottom: "-10px",
                  zIndex: 0,
                  pointerEvents: "none",
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  background:
                    "radial-gradient(60% 60% at 30% 30%, rgba(11,95,255,0.9), rgba(11,95,255,0.02))",
                  mixBlendMode: "screen",
                  animation: "vapour1 4.6s ease-in-out infinite",
                  willChange: "transform, opacity, filter",
                }}
              />

              <div
                aria-hidden
                className="vapour vapour2"
                style={{
                  position: "absolute",
                  top: "-14px",
                  left: "-14px",
                  right: "-14px",
                  bottom: "-14px",
                  zIndex: 0,
                  pointerEvents: "none",
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  background:
                    "radial-gradient(70% 70% at 70% 40%, rgba(0,220,200,0.55), rgba(0,120,180,0.02))",
                  mixBlendMode: "screen",
                  animation: "vapour2 5.4s ease-in-out infinite",
                  willChange: "transform, opacity, filter",
                }}
              />

              <div
                aria-hidden
                className="vapour vapour3"
                style={{
                  position: "absolute",
                  top: "-20px",
                  left: "-6px",
                  right: "-6px",
                  bottom: "-20px",
                  zIndex: 0,
                  pointerEvents: "none",
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  background:
                    "radial-gradient(80% 80% at 50% 60%, rgba(255,160,90,0.5), rgba(255,120,40,0.02))",
                  mixBlendMode: "screen",
                  animation: "vapour3 6s ease-in-out infinite",
                  willChange: "transform, opacity, filter",
                }}
              />

              {/* Outermost white ring (on top of the vapour layers) */}
              <div
                className="w-full h-full"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  backgroundColor: "#ffffff",
                  padding: "4px",
                  position: "relative",
                  zIndex: 20,
                }}
              >
                {/* Middle accent ring (same as bg accent color) */}
                <div
                  className="w-full h-full"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    backgroundColor: "var(--primary-blue, #0b5fff)",
                    padding: "4px",
                  }}
                >
                  {/* Inner content (slightly darker so the accent ring is visible) */}
                  <div
                    className="relative w-full h-full text-white overflow-hidden transition-transform duration-300"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      backgroundColor: "#0845b8",
                      zIndex: 30,
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
            <div className="absolute top-24 left-0 w-60 h-48 group cursor-pointer ">
              {/* Vaporating animated glow layers behind the clipped shape */}
              <style>{`
              @keyframes vapourC {
                0%   { transform: scale(1) translateZ(0); opacity: 0.45; filter: blur(6px); }
                50%  { transform: scale(1.12) translateZ(0); opacity: 0.14; filter: blur(18px); }
                100% { transform: scale(1.22) translateZ(0); opacity: 0; filter: blur(26px); }
              }
              @keyframes vapourD {
                0%   { transform: scale(1.02) translateZ(0); opacity: 0.38; filter: blur(8px); }
                50%  { transform: scale(1.2) translateZ(0);  opacity: 0.12; filter: blur(16px); }
                100% { transform: scale(1.35) translateZ(0); opacity: 0; filter: blur(28px); }
              }
              @keyframes vapourE {
                0%   { transform: scale(0.98) translateZ(0); opacity: 0.28; filter: blur(4px); }
                50%  { transform: scale(1.06) translateZ(0); opacity: 0.09; filter: blur(12px); }
                100% { transform: scale(1.18) translateZ(0); opacity: 0; filter: blur(20px); }
              }
              `}</style>

              {/* Layer A - warmer, closer glow */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 0,
                  pointerEvents: "none",
                  clipPath:
                    "polygon(50% 0%, 100% 35%, 85% 100%, 15% 100%, 0% 35%)",
                  background:
                    "radial-gradient(60% 60% at 30% 30%, rgba(255,122,0,0.9), rgba(255,122,0,0.06))",
                  transformOrigin: "50% 50%",
                  animation: "vapourC 3.6s ease-in-out infinite",
                  willChange: "transform, opacity, filter",
                  mixBlendMode: "screen",
                }}
              />

              {/* Layer B - cooler extended halo */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 0,
                  pointerEvents: "none",
                  clipPath:
                    "polygon(50% 0%, 100% 35%, 85% 100%, 15% 100%, 0% 35%)",
                  background:
                    "radial-gradient(70% 70% at 70% 40%, rgba(255,160,90,0.6), rgba(230,120,40,0.03))",
                  transformOrigin: "50% 50%",
                  animation: "vapourD 4.6s ease-in-out infinite",
                  willChange: "transform, opacity, filter",
                  mixBlendMode: "screen",
                }}
              />

              {/* Layer C - faint long tail */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 0,
                  pointerEvents: "none",
                  clipPath:
                    "polygon(50% 0%, 100% 35%, 85% 100%, 15% 100%, 0% 35%)",
                  background:
                    "radial-gradient(80% 80% at 50% 60%, rgba(255,200,140,0.45), rgba(255,200,140,0.02))",
                  transformOrigin: "50% 50%",
                  animation: "vapourE 5.2s ease-in-out infinite",
                  willChange: "transform, opacity, filter",
                  mixBlendMode: "screen",
                }}
              />

              {/* Outermost white ring (on top of the vapour layers) */}
              <div
                className="w-full h-full"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 35%, 85% 100%, 15% 100%, 0% 35%)",
                  backgroundColor: "#ffffff",
                  padding: "4px",
                  position: "relative",
                  zIndex: 10,
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
                      zIndex: 20,
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
            <div className="absolute bottom-0 right-1/3 w-36 h-28 group cursor-pointer ">
              {/* animated vapor glow layers (behind content) */}
              <style>{`
              @keyframes vapourA {
                0% { transform: scale(0.95); opacity: 0.6; filter: blur(4px); }
                50% { transform: scale(1.25); opacity: 0.16; filter: blur(12px); }
                100% { transform: scale(1.6); opacity: 0; filter: blur(20px); }
              }
              @keyframes vapourB {
                0% { transform: scale(1.05); opacity: 0.45; filter: blur(6px); }
                50% { transform: scale(1.5); opacity: 0.12; filter: blur(14px); }
                100% { transform: scale(2); opacity: 0; filter: blur(24px); }
              }
              `}</style>

              {/* Layer 1 - warm yellow vapor */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  clipPath: "polygon(0 0, 100% 25%, 75% 100%, 0% 100%)",
                  background:
                    "linear-gradient(120deg, rgba(255,204,0,0.95), rgba(230,184,0,0.9))",
                  zIndex: 0,
                  transformOrigin: "50% 50%",
                  animation: "vapourA 3s linear infinite",
                }}
              />

              {/* Layer 2 - softer gold echo with offset timing */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  clipPath: "polygon(0 0, 100% 25%, 75% 100%, 0% 100%)",
                  background:
                    "linear-gradient(60deg, rgba(255,204,0,0.7), rgba(255,170,0,0.55))",
                  zIndex: 0,
                  transformOrigin: "50% 50%",
                  animation: "vapourB 4.2s linear infinite",
                  opacity: 0.9,
                }}
              />

              {/* Outermost white ring */}
              <div
                className="w-full h-full relative"
                style={{
                  clipPath: "polygon(0 0, 100% 25%, 75% 100%, 0% 100%)",
                  backgroundColor: "#ffffff",
                  padding: "4px",
                  zIndex: 10,
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
                    <div className="p-4 h-full flex items-center justify-center text-center z-20 relative">
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
            <div
              className="absolute top-12 -left-4 w-16 h-16 group"
              style={{ position: "relative" }}
            >
              <style>{`
              @keyframes vapourOut1 {
                0%   { transform: scale(1);    opacity: 0.55; filter: blur(4px);  }
                60%  { transform: scale(1.6);  opacity: 0.10; filter: blur(18px); }
                100% { transform: scale(2.4);  opacity: 0;    filter: blur(28px); }
              }
              @keyframes vapourOut2 {
                0%   { transform: scale(0.95); opacity: 0.45; filter: blur(6px);  }
                50%  { transform: scale(1.4);  opacity: 0.12; filter: blur(14px); }
                100% { transform: scale(2.2);  opacity: 0;    filter: blur(24px); }
              }
              @keyframes vapourOut3 {
                0%   { transform: scale(1.05); opacity: 0.36; filter: blur(3px);  }
                50%  { transform: scale(1.25); opacity: 0.10; filter: blur(12px); }
                100% { transform: scale(2.0);  opacity: 0;    filter: blur(20px); }
              }

              /* keep animations running continuously; subtle slow staggering */
              .vapour-1 { animation: vapourOut1 4.6s ease-in-out infinite; }
              .vapour-2 { animation: vapourOut2 5.2s ease-in-out infinite; }
              .vapour-3 { animation: vapourOut3 6s ease-in-out infinite; }

              /* optional: slightly intensify on hover */
              .group:hover .vapour-1 { transform: scale(1.08); }
              .group:hover .vapour-2 { transform: scale(1.06); }
              .group:hover .vapour-3 { transform: scale(1.1); }
              `}</style>

              {/* Vapour layers - placed behind the visible border, allow them to bleed out */}
              <div
                aria-hidden
                className="vapour-1"
                style={{
                  position: "absolute",
                  inset: "-10px",
                  zIndex: 0,
                  pointerEvents: "none",
                  borderRadius: 6,
                  background:
                    "radial-gradient(50% 50% at 30% 30%, rgba(11,95,255,0.95), rgba(11,95,255,0.02))",
                  mixBlendMode: "screen",
                  willChange: "transform, opacity, filter",
                }}
              />
              <div
                aria-hidden
                className="vapour-2"
                style={{
                  position: "absolute",
                  inset: "-14px",
                  zIndex: 0,
                  pointerEvents: "none",
                  borderRadius: 6,
                  background:
                    "radial-gradient(60% 60% at 70% 40%, rgba(0,220,200,0.65), rgba(0,120,180,0.03))",
                  mixBlendMode: "screen",
                  willChange: "transform, opacity, filter",
                  opacity: 0.9,
                }}
              />
              <div
                aria-hidden
                className="vapour-3"
                style={{
                  position: "absolute",
                  inset: "-20px",
                  zIndex: 0,
                  pointerEvents: "none",
                  borderRadius: 6,
                  background:
                    "radial-gradient(70% 70% at 50% 60%, rgba(255,160,90,0.55), rgba(255,120,40,0.02))",
                  mixBlendMode: "screen",
                  willChange: "transform, opacity, filter",
                  opacity: 0.85,
                }}
              />

              {/* Visible border square (keeps the original look) */}
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  position: "relative",
                  zIndex: 10,
                  border: "2px solid rgba(209,213,219,1)", // tailwind gray-300
                  background: "rgba(255,255,255,0.50)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHero;
