import React, { useRef, useMemo, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Text } from "@react-three/drei";
import gsap from "gsap";

// Fix for IntrinsicElements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      shaderMaterial: any;
      group: any;
      mesh: any;
      boxGeometry: any;
    }
  }
}

// Vertex Shader
export const vertexShader = `
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vWorldPosition;

void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPosition.xyz;
  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
`;

// Fragment Shader
export const fragmentShader = `
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vWorldPosition;

uniform float uTime;
uniform vec3 uColorBase;
uniform vec3 uColorEdge;
uniform float uIndex;

void main() {
    vec3 normal = normalize(vNormal);
    vec3 viewDir = normalize(cameraPosition - vWorldPosition);

    // Light directions
    vec3 lightTop = normalize(vec3(0.2, 1.0, 0.5));
    vec3 lightSide = normalize(vec3(-1.0, 0.0, 0.5));

    // Diffuse
    float diffTop = max(dot(normal, lightTop), 0.0);
    float diffSide = max(dot(normal, lightSide), 0.0);
    
    // Fresnel for "Glassy/Metallic" edges
    float fresnel = pow(1.0 - abs(dot(normal, viewDir)), 2.5);
    
    // Dynamic shimmer/slit light
    float scan = sin(vWorldPosition.x * 2.0 + uTime * 2.0 - vWorldPosition.y);
    float highlight = smoothstep(0.95, 1.0, scan);

    // Base Color Mixing
    vec3 color = mix(uColorBase, uColorBase * 1.5, diffTop * 0.5);
    color += uColorEdge * diffSide * 0.3;
    
    // Add Rim Light
    color += uColorEdge * fresnel * 0.8;
    
    // Add Highlight
    color += vec3(1.0, 1.0, 1.0) * highlight * 0.3;

    // Subtle grain
    float noise = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);
    color += noise * 0.04;

    gl_FragColor = vec4(color, 1.0);
}
`;

// Using default font by not specifying a font URL, similar to TokenRing
const WORDS = [
    { primary: "Vibe Code", secondary: "AI Apps", label: "Flow" },
    { primary: "Three JS", secondary: "WebGL Scenes", label: "Spatial" },
    { primary: "React Stack", secondary: "Type Safe", label: "Frontend" },
    { primary: "Motion Design", secondary: "GSAP Flow", label: "Animation" },
    { primary: "Node APIs", secondary: "Fast Builds", label: "Backend" },
    { primary: "Creative Dev", secondary: "Ship Clean", label: "Craft" },
];

interface SliceProps {
  index: number;
  total: number;
  size: number;
  position?: [number, number, number];
  interactive?: boolean;
}

export const Slice: React.FC<SliceProps> = ({ index, total, size, position, interactive = false }) => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const [showSecondary, setShowSecondary] = useState(false);
  const prevModTime = useRef(0);
  
  // Height calculation
  const height = size / total;
  const startY = -size / 2 + height / 2;
  const yPos = position ? position[1] : startY + index * height;
  const finalPos = position ? position : [0, yPos, 0];

  const wordData = WORDS[index % WORDS.length];
  const currentText = showSecondary ? wordData.secondary : wordData.primary;
  
  const textColor = showSecondary ? "#ffaa00" : "#a39bfb";

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorBase: { value: new THREE.Color("#1a1a2e") },
      uColorEdge: { value: new THREE.Color("#6b66ff") },
      uIndex: { value: index },
    }),
    [index]
  );

  useFrame((state) => {
    if (groupRef.current && meshRef.current) {
      const t = state.clock.elapsedTime;
      // Safety check for material
      if (meshRef.current.material && (meshRef.current.material as THREE.ShaderMaterial).uniforms) {
          const material = meshRef.current.material as THREE.ShaderMaterial;
          material.uniforms.uTime.value = t;
      }

      if (!interactive) {
          // Animation Logic
          const cycleDuration = 8.0; 
          const stagger = 0.25; 
          const rotationDuration = 2.0; 
          
          const modTime = t % cycleDuration;
          const myStartTime = index * stagger;
          
          if (modTime < prevModTime.current) {
             setShowSecondary(false);
          }
          prevModTime.current = modTime;

          let angle = 0;
          const easeInOutCubic = (x: number): number => {
            return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
          };

          if (modTime > myStartTime && modTime < myStartTime + rotationDuration) {
            const progress = (modTime - myStartTime) / rotationDuration;
            const eased = easeInOutCubic(progress);
            angle = eased * Math.PI * 2; 
            
            if (progress > 0.8 && !showSecondary) {
                setShowSecondary(true);
            }
          } else if (modTime >= myStartTime + rotationDuration) {
            angle = Math.PI * 2;
            if (!showSecondary) setShowSecondary(true);
          }
          
          groupRef.current.rotation.y = -Math.PI / 4 + angle;
      } else {
         groupRef.current.rotation.y = -Math.PI / 4 + Math.sin(t * 0.5 + index) * 0.1;
      }
    }
  });

  const textOffset = size / 2 + 0.06;
  const fontSize = 0.12;

  return (
    <group ref={groupRef} position={finalPos as any}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          if (interactive && meshRef.current) {
              document.body.style.cursor = "pointer";
              gsap.to(meshRef.current.scale, { x: 1.05, z: 1.05, duration: 0.4, ease: "back.out(1.7)" });
              const mat = meshRef.current.material as THREE.ShaderMaterial;
              if (mat.uniforms) mat.uniforms.uColorEdge.value.set("#a39bfb");
          }
        }}
        onPointerOut={(e) => {
          if (interactive && meshRef.current) {
              document.body.style.cursor = "auto";
              gsap.to(meshRef.current.scale, { x: 1, z: 1, duration: 0.4, ease: "power2.out" });
              const mat = meshRef.current.material as THREE.ShaderMaterial;
              if (mat.uniforms) mat.uniforms.uColorEdge.value.set("#6b66ff");
          }
        }}
      >
        <boxGeometry args={[size, height - 0.02, size]} />
        <shaderMaterial
          attach="material"
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
        />
      </mesh>

      {/* Edge Text */}
      {!interactive && (
        <group>
            {/* Front */}
            <Text 
                position={[0, 0, textOffset]} 
                fontSize={fontSize} 
                color={textColor} 
                anchorX="center" 
                anchorY="middle" 
            >
                {currentText}
            </Text>
            {/* Back */}
            <Text 
                position={[0, 0, -textOffset]} 
                rotation={[0, Math.PI, 0]} 
                fontSize={fontSize} 
                color={textColor} 
                anchorX="center" 
                anchorY="middle" 
            >
                {currentText}
            </Text>
            {/* Left */}
            <Text 
                position={[-textOffset, 0, 0]} 
                rotation={[0, -Math.PI / 2, 0]} 
                fontSize={fontSize} 
                color={textColor} 
                anchorX="center" 
                anchorY="middle" 
            >
                {currentText}
            </Text>
            {/* Right */}
            <Text 
                position={[textOffset, 0, 0]} 
                rotation={[0, Math.PI / 2, 0]} 
                fontSize={fontSize} 
                color={textColor} 
                anchorX="center" 
                anchorY="middle" 
            >
                {currentText}
            </Text>
        </group>
      )}
    </group>
  );
};

const Cube: React.FC = () => {
  const sliceCount = 6;
  const cubeSize = 3.2;

  const { viewport } = useThree();
  const scale = viewport.width < 5 ? (viewport.width / 5) * 0.9 : 1;

  return (
    <group rotation={[Math.PI / 6, 0, 0]} scale={[scale, scale, scale]}> 
      {Array.from({ length: sliceCount }).map((_, i) => (
        <Slice key={i} index={i} total={sliceCount} size={cubeSize} />
      ))}
    </group>
  );
};

export default Cube;
