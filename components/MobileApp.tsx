import React from "react";

const MobileApp: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-32 lg:py-40 z-30">

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 lg:px-24 relative">
        <div className="relative rounded-[32px] bg-white/10 p-[1px] shadow-[0_40px_120px_-60px_rgba(0,0,0,0.9)]">
          <div className="relative overflow-hidden rounded-[32px] bg-[#0A0A0E] border border-white/5">
            <div className="absolute inset-x-0 top-0 h-px bg-white/20"></div>

            <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
              <div className="relative z-10 px-8 py-12 md:px-14 lg:px-16">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7c73ff] shadow-[0_0_10px_rgba(124,115,255,0.8)]"></span>
                    The Bugged Dev
                  </span>
                  <span className="text-[11px] font-mono text-white/40">portfolio v4.2</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white leading-[1.05]">
                  I break the bugs,
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#7c73ff]">
                    then ship the fix.
                  </span>
                </h2>

                <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl">
                  I am <span className="text-white">The Bugged Dev</span> a developer who lives in the edge cases.
                  This portfolio captures the experiments the fixes and the systems that made it stable.
                </p>

                <div className="mt-8 grid gap-3 text-sm text-white/60">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#7c73ff]"></span>
                    Case studies that document the bug the diagnosis and the fix.
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#22c55e]"></span>
                    Systems minded engineering with a love for shipping.
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-white/30"></span>
                    Modular layout that reads like release notes.
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="https://github.com/thebuggeddev"
                    target="_blank"
                    rel="noreferrer"
                    className="group relative inline-flex items-center gap-3 rounded-2xl bg-gradient-to-br from-[#7c73ff] via-[#5c53c4] to-[#4338ca] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(88,75,246,0.8)] transition-transform duration-300 hover:-translate-y-1"
                  >
                    <span className="h-2 w-2 rounded-full bg-white"></span>
                    Explore GitHub
                  </a>
                  <a
                    href="https://x.com/thebuggeddev"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-white/35 hover:bg-white/10"
                  >
                    Follow on X
                  </a>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-center px-8 pt-12 pb-12 lg:pt-16 lg:pb-16">
                <div className="relative w-[320px] md:w-[360px] lg:w-[380px]">
                  <div className="absolute -top-8 -left-10 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-white/60 backdrop-blur animate-[float-soft_10s_ease-in-out_infinite]">
                    Bug Log
                  </div>
                  <div className="absolute -bottom-10 right-4 rounded-full border border-white/10 bg-[rgba(255,255,255,0.06)] px-4 py-2 text-[11px] text-white/60 backdrop-blur animate-[float-soft_11s_ease-in-out_infinite]" style={{ animationDelay: "1.5s" }}>
                    Stability 92 percent
                  </div>

                  <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0c0c12] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_65%)]"></div>
                    <div className="absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-white/20 to-transparent opacity-50 animate-[scan_7s_linear_infinite]"></div>

                    <div className="relative p-5">
                      <div className="flex items-center justify-between text-[11px] text-white/40 font-mono">
                        <span>thebugged.dev</span>
                        <span>fix log</span>
                      </div>

                      <div className="mt-4 rounded-2xl border border-white/10 bg-[#11121a] p-4">
                        <div className="flex items-center justify-between text-xs text-white/60">
                          <span>Patch velocity</span>
                          <span className="text-white">86 percent</span>
                        </div>
                        <div className="mt-3 h-2 rounded-full bg-white/5">
                          <div className="h-2 w-[86%] rounded-full bg-gradient-to-r from-[#7c73ff] to-[#5c53c4]"></div>
                        </div>
                        <div className="mt-4 flex justify-between text-[11px] text-white/35">
                          <span>Trace</span>
                          <span>Patch</span>
                          <span>Ship</span>
                        </div>
                      </div>

                      <div className="mt-4 rounded-2xl border border-white/10 bg-[#0f1017] p-4 font-mono text-[11px] text-white/70 leading-relaxed">
                        <div className="text-white/80">const buggedDev equals {"{"}</div>
                        <div className="pl-4 text-white/50">signal steady</div>
                        <div className="pl-4 text-white/50">stack frontend 3D systems</div>
                        <div className="pl-4 text-white/50">status shipping fixes</div>
                        <div className="text-white/80">{"}"};</div>
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-3">
                        <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                          <div className="text-[10px] uppercase tracking-[0.2em] text-white/35">fix reports</div>
                          <div className="mt-2 text-lg font-semibold text-white">04</div>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                          <div className="text-[10px] uppercase tracking-[0.2em] text-white/35">hotfixes</div>
                          <div className="mt-2 text-lg font-semibold text-white">18</div>
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
