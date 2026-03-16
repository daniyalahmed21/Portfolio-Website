import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// --- Visual 1: Network (Glass Cluster) ---
const NetworkVisual = ({ scrollProgress }: { scrollProgress: MotionValue<number> }) => {
  // Parallax Movements
  const yMain = useTransform(scrollProgress, [0, 1], [20, -20]);
  const yPeer = useTransform(scrollProgress, [0, 1], [40, -60]);
  const yMentor = useTransform(scrollProgress, [0, 1], [0, -40]);
  
  const rotateMain = useTransform(scrollProgress, [0, 1], [-2, 2]);
  const rotatePeer = useTransform(scrollProgress, [0, 1], [5, 10]);
  const rotateMentor = useTransform(scrollProgress, [0, 1], [-5, -10]);

  return (
    <div className="w-full h-full min-h-[500px] bg-[#0e0e11] relative overflow-hidden flex items-center justify-center border-l border-white/5">
       {/* Background Ambience */}
       <div className="absolute inset-0 bg-gradient-to-tr from-[#0e0e11] via-[#111118] to-[#0e0e11]"></div>
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.03)_0%,transparent_50%)]"></div>

       {/* Connection Lines (SVG Background) */}
       <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30">
           <motion.path 
             d="M50% 50% L75% 30%" 
             stroke="url(#lineGrad)" 
             strokeWidth="2" 
             strokeDasharray="6 6"
             initial={{ pathLength: 0, opacity: 0 }}
             whileInView={{ pathLength: 1, opacity: 1 }}
             transition={{ duration: 1.5 }}
           />
           <motion.path 
             d="M50% 50% L25% 70%" 
             stroke="url(#lineGrad)" 
             strokeWidth="2" 
             strokeDasharray="6 6"
             initial={{ pathLength: 0, opacity: 0 }}
             whileInView={{ pathLength: 1, opacity: 1 }}
             transition={{ duration: 1.5, delay: 0.2 }}
           />
           <defs>
               <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                   <stop offset="0%" stopColor="rgba(255, 215, 0, 0)" />
                   <stop offset="50%" stopColor="rgba(255, 215, 0, 0.5)" />
                   <stop offset="100%" stopColor="rgba(255, 215, 0, 0)" />
               </linearGradient>
           </defs>
       </svg>

       <div className="relative w-[340px] h-[340px] z-10">
           
           {/* Card 2: Peer (Top Right) */}
           <motion.div 
             style={{ y: yPeer, rotate: rotatePeer, x: 80, scale: 0.85 }}
             className="absolute top-0 right-0 w-[220px] h-[160px] rounded-3xl bg-gradient-to-br from-[#1e1b4b] to-[#312e81] border border-white/10 shadow-2xl p-5 flex flex-col justify-between backdrop-blur-md opacity-90 z-0 origin-bottom-left"
           >
               <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-indigo-500/30 flex items-center justify-center text-indigo-200 text-xs border border-indigo-400/20">AK</div>
                   <div className="flex flex-col">
                       <span className="text-[10px] text-indigo-200 font-bold uppercase tracking-wider">Peer</span>
                       <span className="text-white text-xs font-medium">Code Review</span>
                   </div>
               </div>
               <div className="text-white/80 text-sm leading-tight">
                   How would you structure this hook
               </div>
               <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                   <div className="w-2/3 h-full bg-indigo-400 rounded-full"></div>
               </div>
           </motion.div>

           {/* Card 3: Mentor (Bottom Left) */}
           <motion.div 
             style={{ y: yMentor, rotate: rotateMentor, x: -60, scale: 0.85 }}
             className="absolute bottom-0 left-0 w-[220px] h-[160px] rounded-3xl bg-gradient-to-br from-[#3b0764] to-[#581c87] border border-white/10 shadow-2xl p-5 flex flex-col justify-between backdrop-blur-md opacity-90 z-0 origin-top-right"
           >
               <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-purple-500/30 flex items-center justify-center text-purple-200 text-xs border border-purple-400/20">Lead</div>
                   <div className="flex flex-col">
                       <span className="text-[10px] text-purple-200 font-bold uppercase tracking-wider">Mentor</span>
                       <span className="text-white text-xs font-medium">Feedback</span>
                   </div>
               </div>
               <div className="text-white/80 text-sm leading-tight">
                   Refactor this into a reusable component
               </div>
               <div className="flex -space-x-2">
                   <div className="w-5 h-5 rounded-full bg-purple-400 border border-[#3b0764]"></div>
                   <div className="w-5 h-5 rounded-full bg-purple-300 border border-[#3b0764]"></div>
               </div>
           </motion.div>

           {/* Card 1: Main Hub (Center) */}
           <motion.div 
             style={{ y: yMain, rotate: rotateMain }}
             className="absolute inset-0 m-auto w-[260px] h-[260px] rounded-[2.5rem] bg-gradient-to-br from-[#f59e0b] to-[#d97706] shadow-[0_20px_50px_rgba(245,158,11,0.3)] border border-white/20 p-8 flex flex-col justify-between backdrop-blur-xl z-20"
           >
               {/* Header */}
               <div className="flex justify-between items-center">
                   <span className="text-white/90 font-medium text-xs tracking-wide bg-black/10 px-2 py-1 rounded-lg">LIVE</span>
                   <div className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_10px_white]"></div>
               </div>

               {/* Content */}
               <div className="mt-2">
                   <h3 className="text-3xl font-serif font-bold text-white leading-none mb-2">
                       Build <br/> Studio
                   </h3>
                   <p className="text-white/80 text-xs">
                       Sprint 04 UI Systems
                   </p>
               </div>

               {/* Footer / Avatars */}
               <div>
                   <div className="flex items-center justify-between mb-3">
                       <div className="flex -space-x-3">
                           {[1,2,3,4].map(i => (
                               <div key={i} className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-[10px] text-white font-bold">
                                   {String.fromCharCode(64 + i)}
                               </div>
                           ))}
                       </div>
                       <span className="text-xs font-bold text-white">+24</span>
                   </div>
                   <div className="w-full h-10 bg-black/20 rounded-full flex items-center px-4 gap-2 backdrop-blur-sm cursor-pointer hover:bg-black/30 transition-colors">
                       <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                       <span className="text-xs font-medium text-white">Join Standup</span>
                   </div>
               </div>

               {/* Gloss Overlay */}
               <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/30 to-transparent pointer-events-none"></div>
           </motion.div>

       </div>

      
    </div>
  );
};

// --- Visual 2: Archive (Stacked Contribution Cards) ---
const ArchiveVisual = ({ scrollProgress }: { scrollProgress: MotionValue<number> }) => {
    // Parallax
    const y = useTransform(scrollProgress, [0, 1], [0, -50]);
    
    // Card Animations (Fan out effect on scroll)
    const rotate1 = useTransform(scrollProgress, [0, 1], [-5, 0]); 
    const x1 = useTransform(scrollProgress, [0, 1], [-20, 0]);

    const rotate2 = useTransform(scrollProgress, [0, 1], [5, 10]);
    const x2 = useTransform(scrollProgress, [0, 1], [0, 20]);
    
    const rotate3 = useTransform(scrollProgress, [0, 1], [15, 25]);
    const x3 = useTransform(scrollProgress, [0, 1], [20, 50]);

    return (
        <div className="w-full h-full min-h-[500px] bg-[#0e0e11] relative overflow-hidden flex items-center justify-center border-r border-white/5">
             <div className="absolute inset-0 bg-gradient-to-bl from-[#0e0e11] via-[#16161d] to-[#0e0e11]"></div>
             
             {/* Container for the stack */}
             <motion.div style={{ y }} className="relative w-[320px] h-[320px]">
                
                {/* Bottom Card - Purple */}
                <motion.div 
                    style={{ rotate: rotate3, x: x3, scale: 0.9 }}
                    className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#c084fc] to-[#e879f9] shadow-2xl opacity-60 flex flex-col p-8 justify-end origin-bottom-right border border-white/10"
                >
                     <div className="h-14 w-full bg-white/20 backdrop-blur-md rounded-full"></div>
                </motion.div>

                {/* Middle Card - Green */}
                <motion.div 
                    style={{ rotate: rotate2, x: x2, scale: 0.95 }}
                    className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#34d399] to-[#2dd4bf] shadow-2xl opacity-80 flex flex-col p-8 justify-end origin-bottom-center border border-white/10"
                >
                     <div className="h-14 w-full bg-white/20 backdrop-blur-md rounded-full"></div>
                </motion.div>

                {/* Top Card - Blue - Main UI */}
                <motion.div 
                    style={{ rotate: rotate1, x: x1 }}
                    className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#3b82f6] to-[#0ea5e9] shadow-[0_30px_60px_-10px_rgba(14,165,233,0.4)] flex flex-col p-8 text-white border border-white/10"
                >
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                        <span className="text-white/90 font-medium text-sm tracking-wide font-sans">Daily Progress</span>
                        <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm">
                             <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4V8"/></svg>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-bold leading-[1.15] mb-auto font-serif">
                        What are you <br/> shipping <br/> today
                    </h3>

                    {/* Button */}
                    <div className="w-full h-14 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-between px-6 transition-colors cursor-pointer group border border-white/10">
                        <span className="font-semibold text-white/90 text-sm">Ship Update</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>

                    {/* Gradient Overlay for Gloss */}
                    <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
                </motion.div>

             </motion.div>
        </div>
    );
};

const HeritageScroll: React.FC = () => {
  // We need separate refs to track scroll progress for each section individually
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);

  const { scrollYProgress: scrollProgress1 } = useScroll({
    target: section1Ref,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: scrollProgress2 } = useScroll({
    target: section2Ref,
    offset: ["start end", "end start"]
  });

  return (
    <div id="process" className="relative w-full bg-background z-10 border-b border-white/5">
      
      {/* SECTION 1: THE MODERN GURUKULAM (Text Left, Visual Right) */}
      <section ref={section1Ref} className="w-full max-w-[1440px] mx-auto min-h-screen lg:min-h-[80vh] flex flex-col lg:flex-row relative">
         
         {/* Left: Text Content */}
         <div className="w-full lg:w-1/2 flex flex-col justify-center items-start px-6 md:px-20 lg:px-24 py-20 order-1 relative z-10">
            <span className="text-[#ffd700] text-xs font-bold uppercase tracking-widest mb-4 border border-[#ffd700]/30 px-3 py-1 rounded-full bg-[#ffd700]/10 backdrop-blur-md">
              Process
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-6 drop-shadow-2xl">
              A Calm <br /> <span className="text-[#ffd700] italic">Build Flow</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-8">
              I work in quick cycles that keep feedback clear and momentum steady from prototype to release.
            </p>
            <a href="#contact" className="flex items-center gap-4 text-sm text-[#ffd700] hover:underline group">
              Start a build
            </a>
         </div>

         {/* Right: Visual (Parallaxed) */}
         <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-auto order-2 border-l border-white/5 overflow-hidden">
            <NetworkVisual scrollProgress={scrollProgress1} />
         </div>

      </section>

      {/* SECTION 2: THE ETERNAL ARCHIVE (Visual Left, Text Right) */}
      <section ref={section2Ref} className="w-full max-w-[1440px] mx-auto min-h-screen lg:min-h-[80vh] flex flex-col lg:flex-row relative border-t border-white/5">
         
         {/* Left: Visual (Parallaxed) */}
         <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto order-2 lg:order-1 border-r border-white/5 overflow-hidden">
            <ArchiveVisual scrollProgress={scrollProgress2} />
         </div>
         
         {/* Right: Text Content */}
         <div className="w-full lg:w-1/2 flex flex-col justify-center items-end text-right px-6 md:px-20 lg:px-24 py-20 order-1 lg:order-2 relative z-10">
            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 border border-blue-400/30 px-3 py-1 rounded-full bg-blue-400/10 backdrop-blur-md">
              Delivery
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-6 drop-shadow-2xl">
              A Release <br /> <span className="text-blue-400 italic">Journal</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-8">
               Each release is documented and each prototype becomes a reusable module with clear notes.
            </p>
            <a href="#work" className="flex items-center gap-4 text-sm text-blue-400 hover:underline group">
              Browse releases
            </a>
         </div>

      </section>

    </div>
  );
};

export default HeritageScroll;
