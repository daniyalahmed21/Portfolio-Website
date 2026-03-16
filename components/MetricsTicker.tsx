import React from "react";

const metrics = [
  "REACT", "NEXT JS", "TYPESCRIPT", "NODE JS", "LANGCHAIN", "LANGGRAPH",
  "RAG PIPELINES", "LANGFUSE", "VERCEL AI SDK", "PINECONE", "MULTI-AGENT SYSTEMS",
  "PROMPT ENGINEERING", "POSTGRESQL", "REDIS", "MONGODB", "DOCKER", "AWS",
  "MICROSERVICES", "EXPRESS JS", "TAILWIND CSS", "FRAMER MOTION", "GSAP"
];

const MetricsTicker: React.FC = () => {
  return (
    <div className="w-full bg-black py-4 overflow-hidden relative z-20 border-y border-white/5">
      <div className="flex w-full items-center">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-scroll whitespace-nowrap">
          {[...metrics, ...metrics, ...metrics].map((item, i) => (
            <div key={i} className="flex items-center mx-8">
              <span className="w-1.5 h-1.5 bg-white rounded-full mr-3 opacity-40"></span>
              <span className="text-white font-mono text-sm tracking-widest font-semibold opacity-60">
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
      `}</style>
    </div>
  );
};

export default MetricsTicker;
