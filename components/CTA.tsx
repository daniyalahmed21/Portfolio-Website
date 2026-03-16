import React from "react";
import { motion } from "framer-motion";

const CTA: React.FC = () => {
  return (
    <section id="contact" className="w-full py-40 md:py-48 relative z-20 bg-background overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-20 lg:px-24 relative z-10 flex flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-white text-xs font-bold uppercase tracking-widest mb-6 block opacity-40">Get in Touch</span>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white tracking-tight mb-8">
            Have an idea for a <br />
            <span className="italic text-white/40">product or agent?</span>
          </h2>

          <p className="text-xl md:text-2xl text-[#666666] max-w-2xl mx-auto mb-4 leading-relaxed font-light">
            I build production-grade SaaS platforms and agentic AI systems that ship fast and scale further.
          </p>

          <p className="text-sm text-[#444444] mb-12 font-mono">
            daniyalahmedd25@gmail.com · Lisbon, Portugal
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="mailto:daniyalahmedd25@gmail.com"
              className="group relative px-12 py-5 bg-white text-black text-lg font-bold rounded-full overflow-hidden transition-all duration-300 hover:bg-gray-100"
            >
              <span className="relative z-10 flex items-center gap-2">
                Let's Build Together
              </span>
            </a>

            <a
              href="https://linkedin.com/in/daniyalahmed-dev"
              target="_blank"
              rel="noreferrer"
              className="text-white/40 hover:text-white font-medium text-lg transition-colors px-6 py-4 flex items-center gap-2"
            >
              <span className="border-b border-transparent hover:border-white/30 pb-0.5 transition-all">Connect on LinkedIn</span>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default CTA;
