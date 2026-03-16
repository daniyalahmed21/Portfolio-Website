import React from "react";
import { motion } from "framer-motion";

const features = [
  { name: "Interactive Web Apps", role: "Product", description: "Responsive interfaces with clean state flows and polished interactions.", imageColor: "bg-[#4338ca]" },
  { name: "Three Dimensional Scenes", role: "Experience", description: "Real time visuals and WebGL moments that feel smooth and alive.", imageColor: "bg-[#be185d]" },
  { name: "Motion Systems", role: "Animation", description: "Scroll linked motion and micro interactions powered by GSAP and Framer Motion.", imageColor: "bg-[#059669]" },
  { name: "Backend Foundations", role: "Platform", description: "Node and Express services with clear APIs and durable patterns.", imageColor: "bg-[#d97706]" },
];

const Team: React.FC = () => {
  return (
    <section id="capabilities" className="w-full py-40 relative z-20 overflow-hidden bg-background">
      {/* Updated padding md:px-20 */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 lg:px-24">
        
        {/* Header */}
        <div className="mb-20 max-w-2xl">
           <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">Capabilities</span>
           <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">What I Build</h2>
           <p className="text-text-muted text-base leading-relaxed">
             A quick look at the product and engineering work I love to ship.
           </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
           {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.01 }}
                className={`relative h-[300px] md:h-[380px] rounded-xl overflow-hidden border border-white/5 shadow-xl group ${feature.imageColor}`}
              >
                  {/* Background Detail */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/40 mix-blend-multiply"></div>
                  
                  {/* Subtle Grid Texture */}
                  <div className="absolute inset-0 opacity-[0.1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                  
                  {/* Hover Glow Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-xl transition-colors duration-300"></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 z-10">
                      <div className="absolute top-8 left-8 bg-black/30 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
                          <span className="text-xs font-mono text-white/90 uppercase tracking-wider">{feature.role}</span>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight group-hover:text-white transition-colors duration-300">
                          {feature.name}
                      </h3>
                      {/* Subtext always visible now */}
                      <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-md opacity-100 group-hover:text-white transition-colors duration-300">
                          {feature.description}
                      </p>
                  </div>

                  {/* Icon/Graphic Placeholder in Top Right - Scales on hover */}
                  <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                         <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/>
                      </svg>
                  </div>
              </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
