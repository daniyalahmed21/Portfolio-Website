import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// --- Visual Components (Unchanged) ---

const VisualDictionary = () => (
  <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-[#131318]">
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] bg-[length:24px_24px]"></div>
    <div className="relative z-10 w-64 scale-75 md:scale-100 bg-[#1E1E26] border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col justify-between group-hover:rotate-1 transition-transform duration-500">
      <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-600 rounded-xl rotate-12 flex items-center justify-center text-3xl font-bold text-white shadow-xl border border-white/20">
        {"</>"}
      </div>
      <div className="space-y-4 mt-4">
         <div>
            <div className="text-[10px] text-amber-500 font-bold tracking-widest uppercase mb-1">Snippet of the Day</div>
            <div className="text-3xl font-serif text-white">useFetch</div>
            <div className="text-sm text-gray-400 font-serif italic">(custom hook)</div>
         </div>
         <div className="h-[1px] w-full bg-white/10"></div>
         <div className="space-y-3">
            <div className="flex items-center gap-3 bg-black/20 p-2 rounded-lg">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-xs text-gray-300">Pattern <span className="text-white font-bold">Cache</span> and SWR</span>
            </div>
            <div className="flex items-center gap-3 bg-black/20 p-2 rounded-lg">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="text-xs text-gray-300">Type <span className="text-white font-bold">TypeScript</span></span>
            </div>
         </div>
      </div>
    </div>
  </div>
);

const VisualScripts = () => (
  <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-[#131318]">
     <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E26] to-[#131318]"></div>
     <div className="relative z-10 w-full max-w-[280px] scale-75 md:scale-100">
        <div className="absolute top-0 left-0 w-full transform translate-x-6 -translate-y-8 rotate-[8deg] opacity-60 scale-90 group-hover:translate-y-[-40px] transition-transform duration-500">
             <div className="bg-[#2a2a35] border border-white/10 p-5 rounded-xl flex justify-between items-center shadow-lg">
                 <span className="text-white/50 font-mono text-xs">SASS</span>
                 <span className="text-white/50 font-bold text-lg">$theme</span>
             </div>
        </div>
        <div className="absolute top-0 left-0 w-full transform -translate-x-4 -translate-y-4 -rotate-[4deg] opacity-80 scale-95 group-hover:translate-y-[-20px] transition-transform duration-500">
             <div className="bg-[#323242] border border-white/10 p-5 rounded-xl flex justify-between items-center shadow-lg">
                 <span className="text-white/70 font-mono text-xs">CSS</span>
                 <span className="text-white/70 font-bold text-lg">root vars</span>
             </div>
        </div>
        <div className="relative bg-[#4840BB] border border-white/20 p-6 rounded-xl flex justify-between items-center shadow-2xl shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-300">
             <div className="flex flex-col">
                 <span className="text-indigo-200 font-mono text-[10px] uppercase tracking-wider mb-1">Tokens</span>
                 <span className="text-white font-bold text-2xl">Design</span>
             </div>
             <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                 <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
             </div>
        </div>
     </div>
  </div>
);

const VisualCommunity = () => (
  <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center bg-[#131318] p-6">
      <div className="w-full max-w-[280px] flex flex-col gap-3 group-hover:scale-105 transition-transform duration-500 scale-90 md:scale-100">
          <div className="flex gap-3 items-end">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-8 h-8 rounded-full bg-gray-700 border border-white/10" />
             <div className="bg-[#2A2A35] border border-white/5 p-3 rounded-2xl rounded-bl-none text-xs text-gray-300 shadow-md">
                 Any tips on structuring this <span className="text-white font-bold">API</span>
             </div>
          </div>
          <div className="flex gap-3 items-end flex-row-reverse">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" alt="User" className="w-8 h-8 rounded-full bg-purple-900 border border-white/10" />
             <div className="bg-primary/20 border border-primary/30 p-3 rounded-2xl rounded-br-none text-xs text-white shadow-md">
                 Try REST with pagination then add filters
             </div>
          </div>
          <div className="flex gap-2 items-center mt-2 ml-11">
              <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-bounce delay-100"></div>
                  <div className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-bounce delay-200"></div>
              </div>
              <span className="text-[10px] text-gray-600">Teammate is typing</span>
          </div>
      </div>
  </div>
);

const VisualNotes = () => (
  <div className="w-full h-full relative overflow-hidden bg-[#131318] flex items-center justify-center">
      <div className="absolute inset-0 bg-[#0A0A0E]"></div>
      <div className="relative w-[260px] h-[340px] scale-75 md:scale-100 bg-[#1C1C1E] rounded-r-xl border border-white/10 shadow-2xl flex flex-col overflow-hidden group-hover:-rotate-2 transition-transform duration-500">
           <div className="absolute top-0 bottom-0 left-0 w-10 bg-[#151517] border-r border-white/5 flex flex-col items-center justify-evenly py-4 z-20 shadow-2xl">
               {[...Array(8)].map((_, i) => (
                   <div key={i} className="w-8 h-2 rounded-sm bg-gradient-to-r from-gray-700 to-gray-800 shadow-sm"></div>
               ))}
           </div>
           <div className="ml-10 p-6 flex-1 flex flex-col relative bg-[#1C1C1E]">
                <div className="text-[9px] text-gray-500 font-mono mb-6 uppercase tracking-widest border-b border-white/5 pb-2">Sprint 108</div>
                <h3 className="text-xl font-serif text-white mb-2">Release Notes</h3>
                <p className="text-xs text-gray-400 mb-6 leading-relaxed">Refactors performance wins and one bold UI shift</p>
                <div className="space-y-4 flex-1">
                    <div className="h-[1px] w-full bg-white/5"></div>
                    <div className="h-[1px] w-full bg-white/5"></div>
                    <div className="h-[1px] w-full bg-white/5"></div>
                    <div className="h-[1px] w-full bg-white/5"></div>
                    <div className="h-[1px] w-full bg-white/5"></div>
                </div>
                <div className="absolute bottom-6 right-6 w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center border border-yellow-500/40 rotate-12">
                    <span className="text-lg">★</span>
                </div>
           </div>
      </div>
  </div>
);

const cases = [
  { 
    title: "Design System Engine",
    category: "Systems",
    description: "Tokenized color type and spacing that stay consistent from Figma to production code.",
    Visual: VisualDictionary,
  },
  { 
    title: "Component Translation",
    category: "UI Engineering",
    description: "Convert layouts into accessible responsive React components with animation built in.",
    Visual: VisualScripts,
  },
  { 
    title: "Collaborative Build",
    category: "Teamwork",
    description: "Pair programming PR reviews and clear communication that keeps delivery fast and focused.",
    Visual: VisualCommunity,
  },
  { 
    title: "Ship Ready Docs",
    category: "Ops",
    description: "Readable documentation handoff guides and onboarding notes that scale beyond launch.",
    Visual: VisualNotes,
  }
];

const CaseStudies: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter((el): el is HTMLDivElement => el !== null);
      if (cards.length === 0) return;

      // Initial state: Cards start pushed down off-screen
      gsap.set(cards, { 
        y: window.innerHeight * 1.2, 
        scale: 0.9,
        rotation: 0
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top", 
          end: "+=350%", // Increased pin duration slightly
          pin: true,
          scrub: 1, // Smoother scrub
          anticipatePin: 1,
        },
        defaults: {
          ease: "power2.out", 
          duration: 1
        }
      });

      // Animation Sequence
      cards.forEach((card, index) => {
        // Calculate stacking offset
        const offset = index * 30; 
        
        // Alternating rotation for a natural "tossed stack" look
        // Last card stays straight
        const rotationAngle = index === cards.length - 1 ? 0 : (index % 2 === 0 ? -3 : 3);

        tl.to(card, {
          y: offset, 
          scale: 1,
          rotation: rotationAngle,
          ease: "back.out(0.6)", 
          duration: 1.5,
          force3D: true, 
        }, index * 1.2); 
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    // Increased height to 110vh to ensure ample bottom space for the last card
    <section ref={containerRef} className="w-full h-[110vh] relative bg-background z-10 overflow-hidden flex flex-col py-20">
        
        {/* Intro Header - Centered Alignment - Updated padding md:px-20 */}
        <div className="relative w-full pt-10 px-6 md:px-20 lg:px-24 z-20 shrink-0 text-center">
             <div className="max-w-[1440px] mx-auto">
                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">Selected Work</span>
                <h2 className="text-4xl md:text-5xl font-semibold text-white leading-[1.1]">
                Build cleaner. <span className="text-gray-500">Ship faster.</span>
                </h2>
            </div>
        </div>

        {/* Cards Wrapper */}
        <div className="flex-1 w-full relative max-w-[1440px] mx-auto flex items-center justify-center pointer-events-none z-10 pb-20">
            {cases.map((item, i) => (
                <div 
                    key={i}
                    ref={(el) => { cardsRef.current[i] = el; }}
                    // Updated padding md:px-20
                    className="absolute w-full px-6 md:px-20 lg:px-24 flex items-center justify-center will-change-transform pointer-events-auto"
                    style={{ 
                        zIndex: i + 1,
                    }}
                >
                    {/* Card Container */}
                    <div className="relative w-full max-w-5xl h-[60vh] md:h-[55vh] min-h-[500px] md:min-h-[400px] max-h-[700px] bg-[#131318] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row group ring-1 ring-white/5">
                        
                        {/* Text Content - Forces h-1/2 on mobile to avoid eating space */}
                        <div className="w-full h-1/2 md:h-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5 relative z-10 bg-[#131318]">
                            <div className="inline-block bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-4 md:mb-6 self-start group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors duration-300">
                                <span className="text-[10px] font-mono text-white/70 uppercase tracking-widest group-hover:text-primary transition-colors duration-300">{item.category}</span>
                            </div>
                            <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4 tracking-tight">{item.title}</h3>
                            <p className="text-gray-400 text-sm md:text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300 line-clamp-4 md:line-clamp-none">{item.description}</p>
                        </div>

                        {/* Visual Content - Forces h-1/2 on mobile */}
                        <div className="w-full h-1/2 md:h-full md:w-1/2 relative overflow-hidden bg-[#0e0e11] flex items-center justify-center">
                              <div className="w-full h-full absolute inset-0">
                                  <item.Visual />
                              </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default CaseStudies;
