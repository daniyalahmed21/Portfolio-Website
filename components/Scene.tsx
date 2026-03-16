import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import { Environment, OrbitControls } from "@react-three/drei";
import Cube from "./Cube";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
    }
  }
}

const Scene: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 35 }} 
        gl={{ antialias: false, stencil: false, depth: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
        className="!absolute inset-0"
      >
        <Suspense fallback={null}>
            {/* Environment for subtle reflections */}
            <Environment preset="city" />

            {/* User rotation for hero model */}
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              enableDamping
              dampingFactor={0.08}
              rotateSpeed={0.6}
              minPolarAngle={Math.PI * 0.2}
              maxPolarAngle={Math.PI * 0.8}
            />
            
            {/* The Stacked Slabs - Centered by default at 0,0,0 */}
            <group position={[0, 0, 0]}>
                 <Cube />
            </group>

            {/* Post Processing */}
            <EffectComposer enableNormalPass={false}>
                <Bloom 
                    luminanceThreshold={0.5} 
                    luminanceSmoothing={0.9} 
                    height={300} 
                    intensity={1.0} 
                    radius={0.5}
                />
                <Noise opacity={0.1} />
                <Vignette eskil={false} offset={0.1} darkness={0.5} />
            </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
