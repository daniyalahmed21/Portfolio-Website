import React from "react";

const MobileApp: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-32 lg:py-40 z-30">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 lg:px-24 relative">
        <div className="relative border border-white/8 rounded-[32px]">
          <div className="relative overflow-hidden rounded-[32px] bg-[#080808]">
            <div className="absolute inset-x-0 top-0 h-px bg-white/10"></div>

            <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
              <div className="relative z-10 px-8 py-12 md:px-14 lg:px-16">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white/40">
                    <span className="h-1.5 w-1.5 rounded-full bg-white opacity-50"></span>
                    Daniyal Ahmed
                  </span>
                  <span className="text-[11px] font-mono text-white/20">portfolio v5.0</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white leading-[1.05]">
                  I ship agents,
                  <span className="block text-white/40">
                    not just apps.
                  </span>
                </h2>

                <p className="mt-6 text-lg text-white/40 leading-relaxed max-w-xl">
                  I'm <span className="text-white">Daniyal Ahmed</span> — a Full-Stack AI Engineer building production SaaS platforms and multi-agent systems that solve real problems at scale.
                </p>

                <div className="mt-8 grid gap-3 text-sm text-white/30">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-white opacity-40"></span>
                    SaaS platforms with billing, auth, and multi-tenant architecture.
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-white opacity-25"></span>
                    Agentic workflows with LangGraph, RAG, and tool orchestration.
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-white opacity-15"></span>
                    Microservices backends containerized and deployed on AWS.
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="https://github.com/daniyalahmed21"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-gray-100"
                  >
                    <span className="h-2 w-2 rounded-full bg-black opacity-40"></span>
                    Explore GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/daniyalahmed-dev"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white/50 transition-all duration-300 hover:border-white/20 hover:text-white/70"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-center px-8 pt-12 pb-12 lg:pt-16 lg:pb-16">
                <div className="relative w-[320px] md:w-[360px] lg:w-[380px]">
                  <div className="absolute -top-8 -left-10 rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-white/30 animate-[float-soft_10s_ease-in-out_infinite]">
                    Ship Log
                  </div>
                  <div className="absolute -bottom-10 right-4 rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 text-[11px] text-white/20 animate-[float-soft_11s_ease-in-out_infinite]" style={{ animationDelay: "1.5s" }}>
                    Stability 99%
                  </div>

                  <div className="relative overflow-hidden rounded-[28px] border border-white/8 bg-[#050505]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_65%)]"></div>
                    <div className="absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-white/10 to-transparent opacity-30 animate-[scan_7s_linear_infinite]"></div>

                    <div className="relative p-5">
                      <div className="flex items-center justify-between text-[11px] text-white/20 font-mono">
                        <span>daniyalahmed.dev</span>
                        <span>ship log</span>
                      </div>

                      <div className="mt-4 rounded-2xl border border-white/5 bg-[#0d0d0d] p-4">
                        <div className="flex items-center justify-between text-xs text-white/30">
                          <span>Deploy velocity</span>
                          <span className="text-white/60">86%</span>
                        </div>
                        <div className="mt-3 h-2 rounded-full bg-white/[0.04]">
                          <div className="h-2 w-[86%] rounded-full bg-white opacity-20"></div>
                        </div>
                        <div className="mt-4 flex justify-between text-[11px] text-white/15">
                          <span>Build</span>
                          <span>Test</span>
                          <span>Ship</span>
                        </div>
                      </div>

                      <div className="mt-4 rounded-2xl border border-white/5 bg-[#0a0a0a] p-4 font-mono text-[11px] text-white/30 leading-relaxed">
                        <div className="text-white/50">const daniyalAhmed = {"{"}</div>
                        <div className="pl-4 text-white/25">role: "AI Engineer"</div>
                        <div className="pl-4 text-white/25">stack: "Full-Stack + GenAI"</div>
                        <div className="pl-4 text-white/25">status: "shipping agents"</div>
                        <div className="text-white/50">{"}"}</div>
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-3">
                        <div className="rounded-xl border border-white/5 bg-white/[0.02] px-3 py-3">
                          <div className="text-[10px] uppercase tracking-[0.2em] text-white/20">Projects</div>
                          <div className="mt-2 text-lg font-semibold text-white">06</div>
                        </div>
                        <div className="rounded-xl border border-white/5 bg-white/[0.02] px-3 py-3">
                          <div className="text-[10px] uppercase tracking-[0.2em] text-white/20">AI Systems</div>
                          <div className="mt-2 text-lg font-semibold text-white">04</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
