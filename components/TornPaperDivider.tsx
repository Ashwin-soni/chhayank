import React from "react";

interface TornPaperDividerProps {
  fillColor?: string;
  position?: "top" | "bottom";
  className?: string;
}

export default function TornPaperDivider({
  fillColor = "#fcf9f2",
  position = "bottom",
  className = "",
}: TornPaperDividerProps) {
  // SVG path creating a realistic deckle / torn paper edge
  const isTop = position === "top";

  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none z-10 relative ${className} ${
        isTop ? "-mb-[1px]" : "-mt-[1px]"
      }`}
      style={{ height: "28px" }}
    >
      <svg
        className={`w-full h-full block ${isTop ? "rotate-180" : ""}`}
        viewBox="0 0 1440 28"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,28 L0,12 
             C24,14 42,8 68,14 
             C94,19 122,9 148,15 
             C176,21 198,11 228,17 
             C262,23 286,8 316,13 
             C350,18 376,6 408,16 
             C440,24 466,10 498,18 
             C532,25 556,12 588,14 
             C620,16 648,7 678,16 
             C710,24 734,11 766,15 
             C800,19 828,8 858,16 
             C892,23 916,10 948,14 
             C982,18 1006,7 1038,15 
             C1070,22 1096,9 1128,16 
             C1160,22 1186,11 1218,17 
             C1252,23 1276,8 1308,14 
             C1340,19 1366,10 1398,15 
             C1420,18 1432,13 1440,14 
             L1440,28 Z"
          fill={fillColor}
        />
        {/* Subtle shadow line for natural paper depth */}
        <path
          d="M0,12 
             C24,14 42,8 68,14 
             C94,19 122,9 148,15 
             C176,21 198,11 228,17 
             C262,23 286,8 316,13 
             C350,18 376,6 408,16 
             C440,24 466,10 498,18 
             C532,25 556,12 588,14 
             C620,16 648,7 678,16 
             C710,24 734,11 766,15 
             C800,19 828,8 858,16 
             C892,23 916,10 948,14 
             C982,18 1006,7 1038,15 
             C1070,22 1096,9 1128,16 
             C1160,22 1186,11 1218,17 
             C1252,23 1276,8 1308,14 
             C1340,19 1366,10 1398,15 
             C1420,18 1432,13 1440,14"
          fill="none"
          stroke="rgba(0,0,0,0.15)"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}
