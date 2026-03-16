import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// --- Visual 1: Network (Glass Cluster) ---
const NetworkVisual = ({ scrollProgress }: { scrollProgress: MotionValue<number> }) => {
  const yMain = useTransform(scrollProgress, [0, 1], [20, -20]);
  const yPeer = useTransform(scrollProgress, [0, 1], [40, -60]);
  const yMentor = useTransform(scrollProgress, [0, 1], [0, -40]);

  const rotateMain = useTransform(scrollProgress, [0, 1], [-2, 2]);
  const rotatePeer = useTransform(scrollProgress, [0, 1], [5, 10]);
  const rotateMentor = useTransform(scrollProgress, [0, 1], [-5, -10]);

  return (
    <div className="w-full h-full min-h-[500px] bg-black relative overflow-hidden flex items-center justify-center border-l border-white/5">
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#0a0a0a] to-black"></div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-15">
        <motion.path
          d="M50% 50% L75% 30%"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1"
          strokeDasharray="6 6"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.path
          d="M50% 50% L25% 70%"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1"
          strokeDasharray="6 6"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
      </svg>

      <div className="relative w-[340px] h-[340px] z-10">

        {/* Card 2: Peer (Top Right) */}
        <motion.div
          style={{ y: yPeer, rotate: rotatePeer, x: 80, scale: 0.85 }}
          className="absolute top-0 right-0 w-[220px] h-[160px] rounded-3xl bg-[#111111] border border-white/8 p-5 flex flex-col justify-between opacity-70 z-0 origin-bottom-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 text-xs border border-white/10">AK</div>
            <div className="flex flex-col">
              <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider">Peer</span>
              <span className="text-white text-xs font-medium">Code Review</span>
            </div>
          </div>
          <div className="text-white/50 text-sm leading-tight">
            How would you structure this hook
          </div>
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <div className="w-2/3 h-full bg-white/20 rounded-full"></div>
          </div>
        </motion.div>

        {/* Card 3: Mentor (Bottom Left) */}
        <motion.div
          style={{ y: yMentor, rotate: rotateMentor, x: -60, scale: 0.85 }}
          className="absolute bottom-0 left-0 w-[220px] h-[160px] rounded-3xl bg-[#111111] border border-white/8 p-5 flex flex-col justify-between opacity-70 z-0 origin-top-right"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 text-xs border border-white/10">Lead</div>
            <div className="flex flex-col">
              <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider">Mentor</span>
              <span className="text-white text-xs font-medium">Feedback</span>
            </div>
          </div>
          <div className="text-white/50 text-sm leading-tight">
            Refactor this into a reusable component
          </div>
          <div className="flex -space-x-2">
            <div className="w-5 h-5 rounded-full bg-white/20 border border-black"></div>
            <div className="w-5 h-5 rounded-full bg-white/10 border border-black"></div>
          </div>
        </motion.div>

        {/* Card 1: Main Hub (Center) */}
        <motion.div
          style={{ y: yMain, rotate: rotateMain }}
          className="absolute inset-0 m-auto w-[260px] h-[260px] rounded-[2.5rem] bg-white border border-white/20 p-8 flex flex-col justify-between z-20"
        >
          <div className="flex justify-between items-center">
            <span className="text-black/60 font-medium text-xs tracking-wide bg-black/10 px-2 py-1 rounded-lg">LIVE</span>
            <div className="w-2 h-2 rounded-full bg-black opacity-40 animate-pulse"></div>
          </div>
          <div className="mt-2">
            <h3 className="text-3xl font-serif font-bold text-black leading-none mb-2">
              Build <br /> Studio
            </h3>
            <p className="text-black/50 text-xs">
              Sprint 04 · AI Systems
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-black/10 border border-black/10 flex items-center justify-center text-[10px] text-black/60 font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-xs font-bold text-black/50">+24</span>
            </div>
            <div className="w-full h-10 bg-black/10 rounded-full flex items-center px-4 gap-2 cursor-pointer hover:bg-black/15 transition-colors">
              <div className="w-2 h-2 bg-black/40 rounded-full"></div>
              <span className="text-xs font-medium text-black/70">Join Standup</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

// --- Visual 2: Archive (Stacked Cards) ---
const ArchiveVisual = ({ scrollProgress }: { scrollProgress: MotionValue<number> }) => {
  const y = useTransform(scrollProgress, [0, 1], [0, -50]);

  const rotate1 = useTransform(scrollProgress, [0, 1], [-5, 0]);
  const x1 = useTransform(scrollProgress, [0, 1], [-20, 0]);

  const rotate2 = useTransform(scrollProgress, [0, 1], [5, 10]);
  const x2 = useTransform(scrollProgress, [0, 1], [0, 20]);

  const rotate3 = useTransform(scrollProgress, [0, 1], [15, 25]);
  const x3 = useTransform(scrollProgress, [0, 1], [20, 50]);

  return (
    <div className="w-full h-full min-h-[500px] bg-black relative overflow-hidden flex items-center justify-center border-r border-white/5">
      <div className="absolute inset-0 bg-gradient-to-bl from-black via-[#0a0a0a] to-black"></div>

      <motion.div style={{ y }} className="relative w-[320px] h-[320px]">

        {/* Bottom Card */}
        <motion.div
          style={{ rotate: rotate3, x: x3, scale: 0.9 }}
          className="absolute inset-0 rounded-[2.5rem] bg-[#1a1a1a] border border-white/5 opacity-40 flex flex-col p-8 justify-end origin-bottom-right"
        >
          <div className="h-14 w-full bg-white/5 rounded-full"></div>
        </motion.div>

        {/* Middle Card */}
        <motion.div
          style={{ rotate: rotate2, x: x2, scale: 0.95 }}
          className="absolute inset-0 rounded-[2.5rem] bg-[#222222] border border-white/5 opacity-60 flex flex-col p-8 justify-end origin-bottom-center"
        >
          <div className="h-14 w-full bg-white/5 rounded-full"></div>
        </motion.div>

        {/* Top Card */}
        <motion.div
          style={{ rotate: rotate1, x: x1 }}
          className="absolute inset-0 rounded-[2.5rem] bg-white flex flex-col p-8 text-black border border-white/10"
        >
          <div className="flex justify-between items-start mb-6">
            <span className="text-black/60 font-medium text-sm tracking-wide font-sans">Daily Progress</span>
            <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-black/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4V8"/></svg>
            </div>
          </div>
          <h3 className="text-3xl font-bold leading-[1.15] mb-auto font-serif text-black">
            What are you <br /> shipping <br /> today
          </h3>
          <div className="w-full h-14 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-between px-6 transition-colors cursor-pointer group border border-black/8">
            <span className="font-semibold text-black/70 text-sm">Ship Update</span>
            <svg className="w-5 h-5 text-black/40 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

const HeritageScroll: React.FC = () => {
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);

  const { scrollYProgress: scrollProgress1 } = useScroll({
    target: section1Ref,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollProgress2 } = useScroll({
    target: section2Ref,
    offset: ["start end", "end start"],
  });

  return (
    <div id="process" className="relative w-full bg-background z-10 border-b border-white/5">

      {/* SECTION 1: Text Left, Visual Right */}
      <section ref={section1Ref} className="w-full max-w-[1440px] mx-auto min-h-screen lg:min-h-[80vh] flex flex-col lg:flex-row relative">

        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start px-6 md:px-20 lg:px-24 py-20 order-1 relative z-10">
          <span className="text-white text-xs font-bold uppercase tracking-widest mb-4 border border-white/10 px-3 py-1 rounded-full bg-white/[0.03] opacity-60">
            Process
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-6">
            A Calm <br /> <span className="italic text-white/40">Build Flow</span>
          </h2>
          <p className="text-[#666666] text-lg leading-relaxed max-w-md mb-8">
            I work in quick cycles that keep feedback clear and momentum steady from prototype to release.
          </p>
          <a href="#contact" className="flex items-center gap-4 text-sm text-white/40 hover:text-white transition-colors group">
            Start a build
          </a>
        </div>

        <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-auto order-2 border-l border-white/5 overflow-hidden">
          <NetworkVisual scrollProgress={scrollProgress1} />
        </div>

      </section>

      {/* SECTION 2: Visual Left, Text Right */}
      <section ref={section2Ref} className="w-full max-w-[1440px] mx-auto min-h-screen lg:min-h-[80vh] flex flex-col lg:flex-row relative border-t border-white/5">

        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto order-2 lg:order-1 border-r border-white/5 overflow-hidden">
          <ArchiveVisual scrollProgress={scrollProgress2} />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center items-end text-right px-6 md:px-20 lg:px-24 py-20 order-1 lg:order-2 relative z-10">
          <span className="text-white text-xs font-bold uppercase tracking-widest mb-4 border border-white/10 px-3 py-1 rounded-full bg-white/[0.03] opacity-60">
            Delivery
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-6">
            A Release <br /> <span className="italic text-white/40">Journal</span>
          </h2>
          <p className="text-[#666666] text-lg leading-relaxed max-w-md mb-8">
            Each release is documented and each prototype becomes a reusable module with clear notes.
          </p>
          <a href="#work" className="flex items-center gap-4 text-sm text-white/40 hover:text-white transition-colors group">
            Browse releases
          </a>
        </div>

      </section>

    </div>
  );
};

export default HeritageScroll;
