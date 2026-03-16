import React from "react";
import { motion } from "framer-motion";

const CTA: React.FC = () => {
  return (
    <section id="contact" className="w-full py-40 md:py-48 relative z-20 bg-background overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[120px] opacity-50"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-20 lg:px-24 relative z-10 flex flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-6 block">Get in Touch</span>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white tracking-tight mb-8">
            Have an idea for a <br />
            <span className="italic text-gray-500">product or agent?</span>
          </h2>

          <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto mb-4 leading-relaxed font-light">
            I build production-grade SaaS platforms and agentic AI systems that ship fast and scale further.
          </p>

          <p className="text-base text-gray-600 mb-12 font-mono">
            daniyalahmedd25@gmail.com · Lisbon, Portugal
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="mailto:daniyalahmedd25@gmail.com"
              className="group relative px-12 py-5 bg-white text-black text-lg font-bold rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 shadow-[0_0_50px_rgba(255,255,255,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10 flex items-center gap-2">
                Let's Build Together
              </span>
            </a>

            <a
              href="https://linkedin.com/in/daniyalahmed-dev"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 hover:text-white font-medium text-lg transition-colors px-6 py-4 flex items-center gap-2"
            >
              <span className="border-b border-transparent hover:border-white/50 pb-0.5 transition-all">Connect on LinkedIn</span>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default CTA;
