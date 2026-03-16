import React, { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Scene from "./components/Scene";
import GridOverlay from "./components/GridOverlay";
import MetricsTicker from "./components/MetricsTicker";
import Team from "./components/Team";
import CaseStudies from "./components/CaseStudies";
import TokenRing from "./components/TokenRing";
import HeritageScroll from "./components/HeritageScroll";
import CTA from "./components/CTA";
import MobileApp from "./components/MobileApp";
import FireGuide from "./components/FireGuide";

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      smoothWheel: true,
      lerp: 0.1,
      anchors: true,
    });

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };

    const onRefresh = () => lenis.resize();

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.addEventListener("refresh", onRefresh);
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      gsap.ticker.remove(onTick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-background text-white selection:bg-primary selection:text-white overflow-x-hidden font-sans">
      {/* Global 3D Fire Guide Cursor */}
      <FireGuide />

      {/* Grid System Overlay - Stretches with content - Global Left/Right Lines */}
      <GridOverlay />

      {/* Main Wrapper */}
      <div className="relative z-10 flex flex-col w-full">
        <Navbar />
        
        {/* Section 1: Hero & 3D */}
        {/* Updated grid/layout logic to strictly contain 3D model in right column */}
        <main id="home" className="relative w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)] border-b border-dashed border-white/5">
          
          {/* MIDDLE GRID LINE - Visible on Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] hidden lg:block bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxJyBoZWlnaHQ9JzEyJz48cmVjdCB3aWR0aD0nMScgaGVpZ2h0PSc2JyBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCkiIC8+PC9zdmc+')] z-0 pointer-events-none"></div>

          {/* Left Column: Content - Updated md:px-20 */}
          <div className="relative px-6 md:px-20 lg:px-24 flex flex-col justify-center py-16 lg:py-0 z-20 order-1">
             <Hero />
          </div>

          {/* Right Column: 3D Scene */}
          {/* Restricted to column width, strictly contained */}
          <div className="relative w-full h-[50vh] lg:h-auto min-h-[500px] lg:min-h-full flex items-center justify-center overflow-hidden z-10 order-2">
             <div className="w-full h-full relative">
                <Scene />
             </div>
          </div>
        </main>
        
        {/* Section 2: Metrics Ticker */}
        <div className="relative py-8">
            <MetricsTicker />
            {/* Separator */}
            <div className="absolute bottom-0 w-full max-w-[1440px] left-1/2 -translate-x-1/2 border-dashed-custom-h z-20"></div>
        </div>

        {/* Section 3: Case Studies (Stacked Cards) */}
        <div id="work" className="relative">
             <CaseStudies />
             {/* Separator */}
             <div className="absolute bottom-0 w-full max-w-[1440px] left-1/2 -translate-x-1/2 border-dashed-custom-h z-20"></div>
        </div>
        
        {/* Section 4: 3D Token Ring (Translation) */}
        <TokenRing />

        {/* Section 5: Heritage & Evolution (Shared 3D Scroll) */}
        <div className="relative">
            <HeritageScroll />
             {/* Separator */}
             <div className="absolute bottom-0 w-full max-w-[1440px] left-1/2 -translate-x-1/2 border-dashed-custom-h z-20"></div>
        </div>

        {/* Section 6: Team List (Coming Soon) */}
        <div className="relative">
            <Team />
            {/* Separator - After Coming Soon */}
            <div className="absolute bottom-0 w-full max-w-[1440px] left-1/2 -translate-x-1/2 border-dashed-custom-h z-20"></div>
        </div>
        
        {/* Section 7: Mobile App Download */}
        <div className="relative">
             <MobileApp />
             {/* Separator - After Mobile App */}
             <div className="absolute bottom-0 w-full max-w-[1440px] left-1/2 -translate-x-1/2 border-dashed-custom-h z-20"></div>
        </div>

        {/* Section 8: CTA */}
        <CTA />
        
        {/* Footer */}
        <footer className="w-full py-12 bg-background relative z-20">
             <div className="max-w-[1440px] mx-auto border-dashed-custom-h mb-12"></div>
             {/* Updated padding to md:px-20 */}
             <div className="max-w-[1440px] mx-auto px-6 md:px-20 lg:px-24 flex flex-col md:flex-row justify-between items-center text-text-muted text-sm">
                 <div>&copy; {new Date().getFullYear()} The Bugged Dev. All rights reserved.</div>
                 <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#home" className="hover:text-white transition-colors">Home</a>
                    <a href="#work" className="hover:text-white transition-colors">Work</a>
                    <a href="#stack" className="hover:text-white transition-colors">Stack</a>
                    <a href="https://x.com/thebuggeddev" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">X</a>
                    <a href="https://github.com/thebuggeddev" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
                 </div>
             </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
