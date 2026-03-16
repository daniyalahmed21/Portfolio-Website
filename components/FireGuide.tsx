import React, { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// --- Particle Trail System ---

const ParticleTrail: React.FC<{ targetPosition: React.MutableRefObject<THREE.Vector3> }> = ({ targetPosition }) => {
  const count = 20;
  const particlesRef = useRef<THREE.Group>(null);
  
  // Store history of positions
  const positions = useMemo(() => Array.from({ length: count }, () => new THREE.Vector3(0,0,0)), []);
  
  useFrame(() => {
    if (!particlesRef.current) return;
    
    // Shift positions
    for (let i = count - 1; i > 0; i--) {
        positions[i].copy(positions[i - 1]);
    }
    // Newest position is current target
    positions[0].copy(targetPosition.current);

    // Update instances
    particlesRef.current.children.forEach((child: any, i) => {
       const pos = positions[i];
       // Lerp towards history for smoother trail
       child.position.lerp(pos, 0.25); // Faster follow for cursor
       
       // Scale down based on age
       const scale = Math.max(0, 1 - i / count) * 0.4; 
       child.scale.setScalar(scale);
       
       // Add some random jitter for "fire" effect
       if (i > 0) {
           child.position.x += (Math.random() - 0.5) * 0.05;
           child.position.y += (Math.random() - 0.5) * 0.05;
       }
    });
  });

  return (
    <group ref={particlesRef}>
        {Array.from({ length: count }).map((_, i) => (
             <mesh key={i}>
                 <sphereGeometry args={[0.2, 8, 8]} />
                 <meshBasicMaterial color={i === 0 ? "#ffffff" : "#ff5722"} transparent opacity={i === 0 ? 0 : 0.6 * (1 - i / count)} />
             </mesh>
        ))}
    </group>
  );
};

// --- Main Firefly Core ---

const FireFly: React.FC = () => {
  const positionRef = useRef(new THREE.Vector3(0, 0, 0));
  const { viewport, size } = useThree();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates to [-1, 1]
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    // Convert normalized mouse to viewport coordinates
    const targetX = (mouseRef.current.x * viewport.width) / 2;
    const targetY = (mouseRef.current.y * viewport.height) / 2;

    // Smoothly interpolate current position to target
    positionRef.current.x = THREE.MathUtils.lerp(positionRef.current.x, targetX, delta * 5);
    positionRef.current.y = THREE.MathUtils.lerp(positionRef.current.y, targetY, delta * 5);
  });

  return (
    <>
        <group>
            {/* Core Bright Spot */}
            <mesh position={positionRef.current}>
                 <pointLight color="#ff5722" intensity={2} distance={5} decay={2} />
            </mesh>

            {/* Trail */}
            <ParticleTrail targetPosition={positionRef} />
        </group>
        <ambientLight intensity={0.5} />
    </>
  );
};

const FireGuide: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      <Canvas
        orthographic={false}
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
        style={{ pointerEvents: 'none' }}
        className="pointer-events-none"
      >
        <FireFly />
      </Canvas>
    </div>
  );
};

export default FireGuide;