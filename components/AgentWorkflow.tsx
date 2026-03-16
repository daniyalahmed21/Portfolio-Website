import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimationControls } from "framer-motion";

// Animated pulsing connector between nodes
const Connector: React.FC<{ vertical?: boolean; delay?: number }> = ({ vertical = false, delay = 0 }) => {
  return (
    <div className={`relative flex items-center justify-center ${vertical ? "flex-col w-[1px] h-8" : "flex-row h-[1px] flex-1"}`}>
      <div className={`${vertical ? "w-full h-full" : "w-full h-full"} bg-gradient-to-r from-transparent via-white/20 to-transparent`}></div>
      <motion.div
        className={`absolute ${vertical ? "w-[3px] h-[3px]" : "w-[3px] h-[3px]"} rounded-full bg-primary shadow-[0_0_8px_rgba(88,75,246,0.8)]`}
        animate={vertical ? { y: ["0%", "100%"] } : { x: ["0%", "100%"] }}
        transition={{ duration: 1.5, delay, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

const NodeBox: React.FC<{
  label: string;
  sublabel?: string;
  accent?: string;
  glow?: string;
  delay?: number;
}> = ({ label, sublabel, accent = "border-white/10 bg-[#131318]", glow = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={`relative border rounded-xl px-4 py-3 text-center min-w-[110px] ${accent} ${glow}`}
    >
      <div className="text-[11px] font-bold font-mono text-white uppercase tracking-wider leading-tight">{label}</div>
      {sublabel && <div className="text-[9px] text-gray-500 font-mono mt-0.5">{sublabel}</div>}
    </motion.div>
  );
};

const stats = [
  { value: "50%", label: "fewer manual decision steps" },
  { value: "40%", label: "better retrieval accuracy" },
  { value: "25%", label: "fewer hallucinations" },
];

const AgentWorkflow: React.FC = () => {
  return (
    <section className="w-full py-32 relative z-20 bg-background overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[140px] opacity-40"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 lg:px-24 relative z-10">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">Architecture</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">How I Think in Systems</h2>
          <p className="text-text-muted text-base leading-relaxed">
            Multi-agent orchestration built with LangGraph — autonomous task decomposition, parallel tool execution, and self-correcting reasoning loops.
          </p>
        </div>

        {/* Diagram + Stats layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">

          {/* Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex-1 w-full max-w-lg"
          >
            {/* LangGraph label */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0d0d12] border border-primary/30 rounded-full px-4 py-1 z-20">
              <span className="text-[10px] font-mono text-primary uppercase tracking-widest font-bold">LangGraph Workflow</span>
            </div>

            <div className="border border-white/8 rounded-2xl p-8 bg-[#0a0a0e] flex flex-col items-center gap-0 relative">

              {/* Row 1: User Input */}
              <NodeBox label="User Input" sublabel="Natural language task" accent="border-white/15 bg-[#1a1a24]" delay={0.1} />
              <Connector vertical delay={0} />

              {/* Row 2: Planner Agent */}
              <NodeBox
                label="Planner Agent"
                sublabel="Task decomposition & routing"
                accent="border-primary/40 bg-[#1a1830]"
                glow="shadow-[0_0_20px_rgba(88,75,246,0.2)]"
                delay={0.2}
              />
              <Connector vertical delay={0.3} />

              {/* Row 3: Parallel agents */}
              <div className="flex w-full items-center gap-0">
                {/* Left connector */}
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-white/15"></div>
                </div>
                <div className="w-[1px] h-8 bg-white/15 mx-auto"></div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full h-[1px] bg-gradient-to-l from-transparent via-white/15 to-white/15"></div>
                </div>
              </div>

              <div className="flex w-full gap-3 justify-between">
                <NodeBox label="RAG Agent" sublabel="Vector retrieval" accent="border-cyan-500/25 bg-[#051a1f]" delay={0.35} />
                <NodeBox label="Memory" sublabel="Mem0 / Redis" accent="border-green-500/25 bg-[#051a0e]" delay={0.4} />
                <NodeBox label="Executor" sublabel="Tool calls" accent="border-amber-500/25 bg-[#1f1508]" delay={0.45} />
              </div>

              {/* Bottom connectors merging back */}
              <div className="flex w-full items-center gap-0">
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-white/15"></div>
                </div>
                <div className="w-[1px] h-8 bg-white/15 mx-auto"></div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full h-[1px] bg-gradient-to-l from-transparent via-white/15 to-white/15"></div>
                </div>
              </div>

              {/* Row 4: Aggregator */}
              <NodeBox
                label="Aggregator Node"
                sublabel="Collects + validates results"
                accent="border-primary/30 bg-[#15142a]"
                glow="shadow-[0_0_15px_rgba(88,75,246,0.15)]"
                delay={0.55}
              />
              <Connector vertical delay={0.6} />

              {/* Row 5: Output */}
              <NodeBox
                label="Final Response"
                sublabel="Grounded, context-aware"
                accent="border-white/20 bg-[#1a1a24]"
                glow="shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                delay={0.65}
              />

              {/* Self-correction loop annotation */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1 opacity-50">
                <div className="w-[1px] h-12 bg-white/15"></div>
                <div className="text-[8px] text-gray-600 font-mono rotate-90 whitespace-nowrap">self-correct loop</div>
                <div className="w-[1px] h-12 bg-white/15"></div>
                <svg width="8" height="8" viewBox="0 0 8 8" className="text-gray-600 fill-current"><path d="M4 0l4 8H0z"/></svg>
              </div>
            </div>
          </motion.div>

          {/* Stats column */}
          <div className="flex flex-col gap-8 lg:pt-16 w-full lg:max-w-xs">
            {/* Tech badges */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {["LangGraph", "LangChain", "LangFuse", "Pinecone", "Mem0", "Vercel AI SDK"].map((t, i) => (
                <span key={i} className="text-[11px] font-mono text-primary/80 border border-primary/20 bg-primary/5 px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </motion.div>

            {/* Stat cards */}
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="border border-white/5 bg-[#0d0d12] rounded-xl p-6"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-text-muted leading-snug">{stat.label}</div>
              </motion.div>
            ))}

            {/* Experience tag */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="border border-white/5 bg-[#0d0d12] rounded-xl p-6"
            >
              <div className="text-[10px] font-mono text-primary uppercase tracking-widest mb-2">Current Role</div>
              <div className="text-white font-semibold text-base mb-1">GenAI Engineer Intern</div>
              <div className="text-text-muted text-sm">VanaciPrime · Lisbon, Portugal</div>
              <div className="text-[10px] text-gray-600 font-mono mt-2">Nov 2025 – Present</div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AgentWorkflow;
