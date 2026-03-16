import React, { Suspense } from "react";
import { Canvas, ThreeElements } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Slice } from "./Cube";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

// Fix for IntrinsicElements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      group: any;
    }
  }
}

const SlabItem: React.FC<{ index: number }> = ({ index }) => {
  return (
    <div className="w-full h-[320px] relative border border-white/5 bg-white/[0.02] rounded-2xl overflow-hidden hover:border-primary/30 transition-colors duration-500 group">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>
      
      <Canvas
        camera={{ position: [0, 3, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        className="z-10"
      >
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <group rotation={[0.2, 0, 0]}>
             <Slice 
                index={index} 
                total={1} 
                size={2.2} 
                position={[0, 0, 0]} 
                interactive={true} 
             />
          </group>
          {/* Allow user to rotate individual pieces */}
          <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
          <EffectComposer enableNormalPass={false}>
            <Bloom luminanceThreshold={0.5} intensity={1.0} radius={0.5} />
          </EffectComposer>
        </Suspense>
      </Canvas>
      
      {/* Label */}
      <div className="absolute bottom-6 left-6 pointer-events-none z-20">
          <span className="text-[10px] font-mono text-primary/80 uppercase tracking-widest block mb-1">Module 0{index + 1}</span>
          <span className="text-white font-medium text-lg tracking-tight group-hover:text-primary transition-colors">System Core</span>
      </div>
    </div>
  );
};

const SlabGrid: React.FC = () => {
  return (
    <section className="w-full py-32 bg-background relative z-10 border-b border-dashed border-white/5">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        
        <div className="mb-20">
            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">Exploration</span>
            <h2 className="text-4xl md:text-5xl font-semibold text-white">
                Independent <span className="text-gray-500">Components</span>
            </h2>
             <p className="text-text-muted mt-6 max-w-lg leading-relaxed">
                Interact with the core building blocks of our design system. Each layer operates independently to create a cohesive whole.
             </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <SlabItem key={i} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SlabGrid;