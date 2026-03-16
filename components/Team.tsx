import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    name: "SaaS Platforms",
    role: "Product",
    description: "Full-stack subscription products with Next.js, Prisma, Stripe billing, and multi-tenant auth — ready to ship from day one.",
    icon: (
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8h10M7 11h6" />
      </svg>
    ),
  },
  {
    name: "AI Agents & Automation",
    role: "Intelligence",
    description: "Agentic systems built with LangChain and LangGraph — autonomous task decomposition, tool orchestration, and high-conversion sales agents.",
    icon: (
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
        <circle cx="12" cy="12" r="8" strokeDasharray="4 2" />
      </svg>
    ),
  },
  {
    name: "Agentic Workflows",
    role: "Orchestration",
    description: "Multi-step reasoning pipelines with context engineering, memory systems, and self-correction loops that cut manual decision-making by 50%.",
    icon: (
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
        <rect x="2" y="9" width="6" height="6" rx="1" />
        <rect x="16" y="9" width="6" height="6" rx="1" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    name: "Full-Stack Architecture",
    role: "Platform",
    description: "Microservices, REST APIs, Redis queues, and Docker Compose deployments on AWS — horizontally scalable and production-hardened.",
    icon: (
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="8" height="5" rx="1" />
        <rect x="14" y="3" width="8" height="5" rx="1" />
        <rect x="8" y="16" width="8" height="5" rx="1" />
        <path d="M6 8v4M18 8v4M6 12h12M12 12v4" />
      </svg>
    ),
  },
];

const Team: React.FC = () => {
  return (
    <section id="capabilities" className="w-full py-40 relative z-20 overflow-hidden bg-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 lg:px-24">

        <div className="mb-20 max-w-2xl">
          <span className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4 block">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">What I Build</h2>
          <p className="text-[#666666] text-base leading-relaxed">
            From SaaS subscriptions to autonomous AI agents — the full spectrum of modern product engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.01 }}
              className="relative h-[300px] md:h-[380px] rounded-xl overflow-hidden border border-white/5 group bg-[#080808]"
            >
              {/* Subtle dot-grid texture */}
              <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] bg-[length:20px_20px]"></div>

              {/* Hover border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/10 rounded-xl transition-colors duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 z-10">
                <div className="absolute top-8 left-8 bg-white/5 border border-white/8 px-3 py-1 rounded-full">
                  <span className="text-xs font-mono text-white/40 uppercase tracking-wider">{feature.role}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{feature.name}</h3>
                <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-md group-hover:text-white/60 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Icon top-right */}
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 text-white">
                {feature.icon}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
