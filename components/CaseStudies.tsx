import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- Visual Components ---

const VisualMonitoring = () => (
  <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-black p-6">
    <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] bg-[length:20px_20px]"></div>
    <div className="relative z-10 w-full max-w-[300px] flex flex-col gap-2 scale-90 md:scale-100">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-mono text-white uppercase tracking-widest font-bold opacity-50">Monitoring Dashboard</span>
        <span className="w-2 h-2 rounded-full bg-white opacity-60 animate-pulse"></span>
      </div>
      {[
        { name: "api.betterstack.dev", uptime: "99.9%", latency: "42ms", status: "up" },
        { name: "db.betterstack.dev", uptime: "100%", latency: "11ms", status: "up" },
        { name: "worker.betterstack.dev", uptime: "98.4%", latency: "—", status: "down" },
        { name: "heartbeat.monitor", uptime: "99.9%", latency: "8ms", status: "up" },
      ].map((svc, i) => (
        <div key={i} className="flex items-center gap-3 bg-[#0d0d0d] border border-white/5 rounded-lg px-3 py-2">
          <span className={`w-2 h-2 rounded-full flex-shrink-0 ${svc.status === "up" ? "bg-white opacity-70" : "bg-white opacity-20"}`}></span>
          <span className="text-[11px] text-gray-400 font-mono flex-1 truncate">{svc.name}</span>
          <span className="text-[10px] text-gray-600 font-mono">{svc.latency}</span>
          <span className={`text-[10px] font-bold font-mono ${svc.status === "up" ? "text-white opacity-60" : "text-gray-600"}`}>{svc.uptime}</span>
        </div>
      ))}
      <div className="mt-2 bg-[#0d0d0d] border border-white/5 rounded-lg px-3 py-2 flex items-center justify-between">
        <span className="text-[10px] text-gray-600 font-mono">Active Incidents</span>
        <span className="bg-white/5 text-white/50 border border-white/10 text-[10px] font-bold font-mono px-2 py-0.5 rounded-full">0 Open</span>
      </div>
    </div>
  </div>
);

const VisualJudge = () => (
  <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-black p-6">
    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-black"></div>
    <div className="relative z-10 w-full max-w-[300px] scale-90 md:scale-100">
      <div className="bg-[#111111] border border-white/10 rounded-t-xl px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
        </div>
        <span className="text-[10px] text-gray-600 font-mono ml-2">solution.py</span>
      </div>
      <div className="bg-[#0a0a0a] border-x border-white/5 px-4 py-3 font-mono text-[11px] leading-relaxed">
        <div className="text-white/50">def <span className="text-white/80">twoSum</span><span className="text-white/60">(nums, target):</span></div>
        <div className="text-white/30 ml-4">seen = {"{}"}</div>
        <div className="text-white/30 ml-4">for i, n in <span className="text-white/50">enumerate</span>(nums):</div>
        <div className="text-white/50 ml-8">if target-n in seen:</div>
        <div className="text-white/70 ml-12">return [seen[target-n], i]</div>
      </div>
      <div className="bg-black border border-white/5 rounded-b-xl px-4 py-3">
        <div className="flex items-center gap-2 justify-between">
          {["Queued", "Docker Exec", "Accepted"].map((step, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${i === 2 ? "bg-white opacity-80" : "bg-white opacity-20"}`}></div>
                <span className={`text-[9px] font-mono ${i === 2 ? "text-white opacity-60" : "text-gray-600"}`}>{step}</span>
              </div>
              {i < 2 && <div className="flex-1 h-[1px] bg-white/5"></div>}
            </React.Fragment>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-[9px] text-gray-700 font-mono">Runtime: 52ms</span>
          <span className="text-[9px] text-gray-700 font-mono">·</span>
          <span className="text-[9px] text-gray-700 font-mono">Memory: 16.4 MB</span>
        </div>
      </div>
    </div>
  </div>
);

const VisualSaaS = () => (
  <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-black p-6">
    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(ellipse_at_50%_0%,#fff,transparent_70%)]"></div>
    <div className="relative z-10 w-full max-w-[300px] flex flex-col gap-3 scale-90 md:scale-100">
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-3">
          <div className="text-[10px] text-gray-600 font-mono mb-1">Active Users</div>
          <div className="text-xl font-bold text-white">1,284</div>
          <div className="text-[9px] text-white/40 font-mono mt-1">▲ 12% this week</div>
        </div>
        <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-3">
          <div className="text-[10px] text-gray-600 font-mono mb-1">MRR</div>
          <div className="text-xl font-bold text-white">$4.2k</div>
          <div className="text-[9px] text-white/40 font-mono mt-1">▲ 8% this month</div>
        </div>
      </div>
      {[
        { plan: "Free", users: "680", opacity: "opacity-30" },
        { plan: "Pro", users: "512", opacity: "opacity-60" },
        { plan: "Enterprise", users: "92", opacity: "opacity-90" },
      ].map((tier, i) => (
        <div key={i} className="flex items-center justify-between bg-[#0d0d0d] border border-white/5 rounded-lg px-3 py-2">
          <span className={`text-[11px] font-bold font-mono text-white ${tier.opacity}`}>{tier.plan}</span>
          <span className="text-[10px] text-gray-600 font-mono">{tier.users} users</span>
        </div>
      ))}
      <div className="flex items-center gap-2 bg-[#0d0d0d] border border-white/5 rounded-lg px-3 py-2">
        <span className="text-[10px] text-gray-600 font-mono">Billing via</span>
        <span className="text-[10px] font-bold text-white/60 font-mono">Stripe Webhooks</span>
        <span className="ml-auto text-[10px] text-white/30 font-mono">100% accurate</span>
      </div>
    </div>
  </div>
);

const VisualMicroservices = () => (
  <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-black p-4">
    <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] bg-[length:20px_20px]"></div>
    <div className="relative z-10 w-full max-w-[280px] flex flex-col items-center gap-2 scale-90 md:scale-100">
      <div className="bg-white text-black rounded-lg px-4 py-2 text-center">
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest">API Gateway</span>
      </div>
      <div className="w-[1px] h-4 bg-white/20"></div>
      <div className="flex gap-2 w-full justify-center">
        {["Flight", "User", "Notify"].map((svc, i) => (
          <div key={i} className="flex-1 bg-[#0d0d0d] border border-white/10 rounded-lg py-2 text-center">
            <span className="text-[10px] font-mono font-bold text-white/70">{svc}</span>
            <div className="text-[8px] text-gray-600 font-mono mt-0.5">Service</div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-around px-4">
        <div className="w-[1px] h-4 bg-white/20 ml-[10%]"></div>
        <div className="w-[1px] h-4 bg-white/20"></div>
      </div>
      <div className="flex gap-2 w-full justify-center">
        <div className="flex-1 bg-[#0d0d0d] border border-white/10 rounded-lg py-2 text-center">
          <span className="text-[10px] font-mono text-white/50 font-bold">MySQL</span>
          <div className="text-[8px] text-gray-700 font-mono mt-0.5">Flights · Users</div>
        </div>
        <div className="flex-1 bg-[#0d0d0d] border border-white/10 rounded-lg py-2 text-center">
          <span className="text-[10px] font-mono text-white/50 font-bold">MongoDB</span>
          <div className="text-[8px] text-gray-700 font-mono mt-0.5">Bookings</div>
        </div>
      </div>
      <div className="mt-1 flex items-center gap-2 bg-[#0d0d0d] border border-white/5 rounded-full px-3 py-1">
        <span className="text-[9px] text-gray-600 font-mono">Containerized with</span>
        <span className="text-[9px] text-white/40 font-bold font-mono">Docker Compose</span>
      </div>
    </div>
  </div>
);

const cases = [
  {
    title: "BetterStack Clone",
    category: "SaaS · Monitoring",
    description: "Production-grade uptime monitoring with multi-region health checks, real-time incident reporting, and Redis-backed worker queues. Achieved 99.9% system visibility with sub-second latency.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    Visual: VisualMonitoring,
  },
  {
    title: "LeetCode Style Platform",
    category: "Platform · Microservices",
    description: "High-performance online judge with decoupled microservices, Docker-sandboxed code execution for Python, Java and C++, and Socket.io for live submission updates.",
    stack: ["Node.js", "React", "MongoDB", "Docker"],
    Visual: VisualJudge,
  },
  {
    title: "PetSoft SaaS Platform",
    category: "SaaS · Full-Stack",
    description: "Subscription-based SaaS for pet care with multi-tenant architecture, NextAuth authentication, Prisma ORM, and fully automated Stripe billing lifecycles via webhooks.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    Visual: VisualSaaS,
  },
  {
    title: "Flight Booking System",
    category: "Microservices · Backend",
    description: "Horizontally scalable microservices backend with API Gateway, independent data stores per service, and full Docker Compose containerization reducing setup time by 80%.",
    stack: ["Node.js", "MySQL", "MongoDB", "Docker"],
    Visual: VisualMicroservices,
  },
];

const CaseStudies: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter((el): el is HTMLDivElement => el !== null);
      if (cards.length === 0) return;

      gsap.set(cards, { y: window.innerHeight * 1.2, scale: 0.9, rotation: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=350%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
        defaults: { ease: "power2.out", duration: 1 },
      });

      cards.forEach((card, index) => {
        const offset = index * 30;
        const rotationAngle = index === cards.length - 1 ? 0 : index % 2 === 0 ? -3 : 3;
        tl.to(card, { y: offset, scale: 1, rotation: rotationAngle, ease: "back.out(0.6)", duration: 1.5, force3D: true }, index * 1.2);
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full h-[110vh] relative bg-background z-10 overflow-hidden flex flex-col py-20">
      <div className="relative w-full pt-10 px-6 md:px-20 lg:px-24 z-20 shrink-0 text-center">
        <div className="max-w-[1440px] mx-auto">
          <span className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2 block">Selected Work</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white leading-[1.1]">
            Real products. <span className="text-white/30">Real scale.</span>
          </h2>
        </div>
      </div>

      <div className="flex-1 w-full relative max-w-[1440px] mx-auto flex items-center justify-center pointer-events-none z-10 pb-20">
        {cases.map((item, i) => (
          <div
            key={i}
            ref={(el) => { cardsRef.current[i] = el; }}
            className="absolute w-full px-6 md:px-20 lg:px-24 flex items-center justify-center will-change-transform pointer-events-auto"
            style={{ zIndex: i + 1 }}
          >
            <div className="relative w-full max-w-5xl h-[60vh] md:h-[55vh] min-h-[500px] md:min-h-[400px] max-h-[700px] bg-[#080808] border border-white/8 rounded-3xl overflow-hidden flex flex-col md:flex-row group ring-1 ring-white/5">
              {/* Text Content */}
              <div className="w-full h-1/2 md:h-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5 relative z-10 bg-[#080808]">
                <div className="inline-block bg-white/5 border border-white/8 rounded-full px-3 py-1 mb-4 md:mb-6 self-start group-hover:bg-white/8 transition-colors duration-300">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest group-hover:text-white/60 transition-colors duration-300">{item.category}</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4 tracking-tight">{item.title}</h3>
                <p className="text-white/40 text-sm md:text-base leading-relaxed group-hover:text-white/60 transition-colors duration-300 line-clamp-3 md:line-clamp-none mb-4 md:mb-6">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tech, j) => (
                    <span key={j} className="text-[10px] font-mono text-white/30 border border-white/5 bg-white/[0.02] px-2 py-1 rounded-md">{tech}</span>
                  ))}
                </div>
              </div>
              {/* Visual Content */}
              <div className="w-full h-1/2 md:h-full md:w-1/2 relative overflow-hidden bg-black flex items-center justify-center">
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
