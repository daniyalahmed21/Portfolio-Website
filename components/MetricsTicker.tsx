import React from "react";

const metrics = [
  "REACT", "THREE JS", "TYPESCRIPT", "NODE JS", "NEXT JS", "GSAP", "FRAMER MOTION", "REACT NATIVE",
  "JAVASCRIPT", "TAILWIND CSS", "DOCKER", "EXPRESS JS", "NEST JS", "CLOUD READY", "PERFORMANCE FOCUSED", "ACCESSIBILITY FIRST"
];

const MetricsTicker: React.FC = () => {
  return (
    <div className="w-full bg-[#0A0A0E] py-4 overflow-hidden relative z-20">
      <div className="flex w-full items-center">
        {/* Shadow gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0A0A0E] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0A0A0E] to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-scroll whitespace-nowrap">
          {[...metrics, ...metrics, ...metrics].map((item, i) => (
            <div key={i} className="flex items-center mx-8">
               <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e] mr-3"></span>
               <span className="text-[#dcdcf9] font-mono text-sm tracking-widest font-semibold shadow-glow">
                 {item}
               </span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .shadow-glow {
            text-shadow: 0 0 10px rgba(124, 115, 255, 0.3);
        }
      `}</style>
    </div>
  );
};

export default MetricsTicker;
