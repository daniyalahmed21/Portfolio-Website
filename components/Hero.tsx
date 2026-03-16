import React from "react";
import Logos from "./Logos";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-start w-full max-w-xl">
      {/* Badge */}
      <div className="flex items-center space-x-0 mb-10">
        <span className="bg-[#4840BB] text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
          Available
        </span>
        <span className="bg-[#1A1A24] text-gray-400 text-[10px] font-semibold px-3 py-1 uppercase tracking-widest border border-white/5">
          Open to Work
        </span>
      </div>

      {/* Main Heading - Added ID for FireGuide target */}
      <h1
        id="header-hero"
        className="text-5xl lg:text-7xl font-semibold leading-[1.1] tracking-tight mb-8 relative z-10"
      >
        <span className="text-[#3b3b4f] block">Hello, I'm 👋</span>
        <span className="text-[#dcdcf9] block">Daniyal Ahmed</span>
      </h1>

      {/* Subtext */}
      <p className="text-[#8888AA] text-lg leading-relaxed max-w-md mb-12">
        Full-Stack AI Engineer. I build production-grade SaaS platforms, design
        multi-agent AI workflows, and ship end-to-end systems that scale from
        idea to production.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <a
          href="#work"
          className="group relative px-8 py-4 bg-button-gradient rounded-sm text-white font-medium text-sm tracking-wide shadow-[0_0_20px_rgba(92,83,196,0.4)] overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(92,83,196,0.6)]"
        >
          <div className="absolute inset-0 border border-white/20 rounded-sm group-hover:border-white/40 transition-colors"></div>
          <span className="relative z-10">View Work</span>
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50 rounded-tl-sm opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50 rounded-br-sm opacity-50"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/50 rounded-tr-sm opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/50 rounded-bl-sm opacity-50"></div>
        </a>
        <a
          href="mailto:daniyalahmedd25@gmail.com"
          className="group px-8 py-4 rounded-sm text-[#8888AA] font-medium text-sm tracking-wide border border-white/10 hover:border-primary/40 hover:text-white transition-all duration-300"
        >
          Book a Call
        </a>
      </div>

      {/* Logos Section */}
      <div className="mt-20 w-full">
        <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-6 font-semibold">
          Core Stack
        </p>
        <Logos />
      </div>
    </div>
  );
};

export default Hero;
