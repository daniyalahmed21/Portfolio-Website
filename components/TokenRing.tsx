import React, { useRef, useMemo, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Image, ContactShadows, Float, Cylinder, Torus, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

// Fix for IntrinsicElements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      cylinderGeometry: any;
      meshStandardMaterial: any;
      ambientLight: any;
      pointLight: any;
      boxGeometry: any;
    }
  }
}

const COINS = [
  { name: "React", icon: "https://cdn.simpleicons.org/react/ffffff" },
  { name: "Three.js", icon: "https://cdn.simpleicons.org/threedotjs/ffffff" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/ffffff" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/ffffff" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
  { name: "GSAP", icon: "https://cdn.simpleicons.org/greensock/ffffff" },
  { name: "Framer", icon: "https://cdn.simpleicons.org/framer/ffffff" },
  { name: "React Native", icon: "https://cdn.simpleicons.org/react/ffffff" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/ffffff" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/ffffff" },
];

const Coin: React.FC<{
  icon: string;
  position: [number, number, number];
  rotation: [number, number, number];
}> = ({ icon, position, rotation }) => {
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
        groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, hovered ? 0.5 : 0, delta * 10);
    }
  });

  return (
    <group
      ref={groupRef}
      position={position}
      rotation={rotation}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
    >
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[1, 1, 0.15, 64]} />
          <meshStandardMaterial color="#0a0a0f" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.08, 0]}>
          <cylinderGeometry args={[0.92, 0.92, 0.02, 64]} />
          <meshStandardMaterial
            color="#584bf6"
            metalness={0.4}
            roughness={0.2}
            emissive="#584bf6"
            emissiveIntensity={hovered ? 0.8 : 0.2}
          />
        </mesh>
        <mesh position={[0, -0.08, 0]}>
          <cylinderGeometry args={[0.92, 0.92, 0.02, 64]} />
          <meshStandardMaterial
            color="#584bf6"
            metalness={0.4}
            roughness={0.2}
            emissive="#584bf6"
            emissiveIntensity={0.2}
          />
        </mesh>
      </group>
      <group position={[0, 0, 0.13]}>
        <Image url={icon} transparent scale={0.9} />
      </group>
      <group position={[0, 0, -0.13]} rotation={[0, Math.PI, 0]}>
        <Image url={icon} transparent scale={0.9} />
      </group>
    </group>
  );
};

const AncientCoin: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Auto-rotate logic
  useFrame((state, delta) => {
    if (groupRef.current) {
        groupRef.current.rotation.y += delta * 0.5; // Slow steady rotation
    }
  });

  const goldMaterial = new THREE.MeshStandardMaterial({
    color: "#DAA520",
    roughness: 0.3,
    metalness: 1.0,
    envMapIntensity: 2.0,
  });

  return (
    <group ref={groupRef}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <Cylinder args={[1, 1, 0.2, 64]} material={goldMaterial} castShadow />
        <Torus args={[1, 0.05, 16, 64]} rotation={[Math.PI / 2, 0, 0]} material={goldMaterial} />
      </group>
      <group position={[0, 0, 0.16]}>
        <Image url="https://cdn.simpleicons.org/javascript/F7DF1E" transparent scale={1.0} />
      </group>
      <group position={[0, 0, -0.16]} rotation={[0, Math.PI, 0]}>
        <Image url="https://cdn.simpleicons.org/javascript/F7DF1E" transparent scale={1.0} />
      </group>
    </group>
  );
};

const RingScene: React.FC = () => {
  const ringRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  const isMobile = viewport.width < 7;
  const radius = isMobile ? 3.2 : 5.0;
  const centerScale = isMobile ? 1.8 : 2.5;

  const count = COINS.length;
  const coins = useMemo(() => {
    return COINS.map((item, i) => {
      const angle = (i / count) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      return {
        icon: item.icon,
        position: [x, y, 0] as [number, number, number],
        rotation: [0, 0, 0] as [number, number, number],
      };
    });
  }, [radius]);

  useFrame((state, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.1;
    }
  });

  return (
    <group>
      <group ref={ringRef}>
        {coins.map((coin, i) => (
          <Coin key={i} icon={coin.icon} position={coin.position} rotation={coin.rotation} />
        ))}
      </group>

      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <group scale={centerScale}>
            <AncientCoin />
        </group>
      </Float>
      
      {/* Enable rotating the view around the center. min/max PolarAngle limits the flip to keep it looking nice. */}
      <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 3} />
    </group>
  );
};

const TokenRing: React.FC = () => {
  return (
    <div className="w-full bg-background relative z-10">
      
      {/* SECTION 1: INTERFACE */}
      <section id="stack" className="relative w-full min-h-screen flex flex-col pb-20 pt-24">
        
        {/* Top: 3D Canvas Area */}
        <div className="w-full h-[60vh] relative z-0 mt-10 md:mt-0 mb-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
          
          <Canvas
            camera={{ position: [0, 0, 16], fov: 40 }}
            dpr={[1, 1.5]} 
            gl={{ powerPreference: "high-performance", alpha: true, antialias: false }}
            shadows
            className="!h-full !w-full"
          >
            <Suspense fallback={null}>
              <Environment preset="city" blur={1} />
              <ambientLight intensity={2.0} />
              <pointLight position={[10, 10, 10]} intensity={5} color="white" />
              <pointLight position={[-10, -10, -5]} intensity={5} color="#7c73ff" />

              <RingScene />

              <ContactShadows position={[0, -5, 0]} opacity={0.3} scale={30} blur={3} far={10} />
              <EffectComposer enableNormalPass={false}>
                <Bloom luminanceThreshold={0.8} intensity={0.6} radius={0.5} />
              </EffectComposer>
            </Suspense>
          </Canvas>
        </div>

        {/* Bottom: Text Content - Updated padding md:px-20 */}
        <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-start mt-4 px-6 md:px-20 lg:px-24 text-center pointer-events-none">
             <div className="inline-block border border-white/10 rounded-full px-4 py-1 mb-6 bg-white/5 backdrop-blur-sm pointer-events-auto">
                <span className="text-[10px] font-mono text-primary uppercase tracking-widest">Core Stack</span>
             </div>
            <h3 id="header-transliterate" className="text-white text-4xl md:text-6xl font-bold leading-tight tracking-tight drop-shadow-2xl">
              Build <span className="text-primary">Immersive</span> Experiences
            </h3>
            <p className="text-gray-400 text-sm md:text-base font-mono uppercase tracking-widest mt-6 drop-shadow-md max-w-xl mx-auto">
              React Next.js TypeScript Node Three.js
            </p>
        </div>
        
        {/* Separator */}
        <div className="absolute bottom-0 w-full max-w-[1440px] left-1/2 -translate-x-1/2 border-dashed-custom-h"></div>
      </section>
      
    </div>
  );
};

export default TokenRing;
