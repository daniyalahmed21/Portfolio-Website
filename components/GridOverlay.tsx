import React from "react";

const GridOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none w-full h-full max-w-[1440px] mx-auto">
      {/* Vertical Lines - Global Left/Right Only - Hidden on mobile (md:block) */}
      
      {/* Left Margin Line: Positioned at left-12 (48px) on desktop */}
      <div className="hidden md:block absolute left-12 top-0 bottom-0 w-[1px] border-dashed-custom"></div>
      
      {/* Right Margin Line: Positioned at right-12 (48px) on desktop */}
      <div className="hidden md:block absolute right-12 top-0 bottom-0 w-[1px] border-dashed-custom"></div>

    </div>
  );
};

export default GridOverlay;