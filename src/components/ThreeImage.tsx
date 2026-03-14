"use client";

import { useRef, useState, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const vertexShader = `
varying vec2 vUv;
uniform float uTime;
uniform float uHoverState;

void main() {
  vUv = uv;
  vec3 pos = position;
  
  // Wave deformation based on hover and time
  float noiseDist = sin(pos.x * 4.0 + uTime * 2.0) * 0.1 * uHoverState;
  pos.z += noiseDist;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
uniform sampler2D uTexture;
uniform float uTime;
uniform float uHoverState;

void main() {
  vec2 uv = vUv;
  
  // RGB shift on hover
  float shift = uHoverState * 0.02 * sin(uTime * 5.0 + uv.y * 20.0);
  
  float r = texture2D(uTexture, uv + vec2(shift, 0.0)).r;
  float g = texture2D(uTexture, uv).g;
  float b = texture2D(uTexture, uv - vec2(shift, 0.0)).b;
  
  gl_FragColor = vec4(r, g, b, 1.0);
}
`;

function Scene({ src, alt }: { src: string; alt: string }) {
    const meshRef = useRef<THREE.Mesh>(null!);
    const materialRef = useRef<THREE.ShaderMaterial>(null!);
    const texture = useTexture(src);
    const { viewport } = useThree();

    const [hovered, setHover] = useState(false);
    const hoverState = useRef(0);
    const mouse = useRef(new THREE.Vector2(0.5, 0.5));

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uTexture: { value: texture },
            uHoverState: { value: 0 }
        }),
        [texture]
    );

    useFrame((state) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
            // Smoothly interpolate hover state
            hoverState.current = THREE.MathUtils.lerp(hoverState.current, hovered ? 1 : 0, 0.1);
            materialRef.current.uniforms.uHoverState.value = hoverState.current;
        }
    });

    const scale = [viewport.width, viewport.height, 1] as [number, number, number];

    return (
        <mesh
            ref={meshRef}
            scale={scale}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <planeGeometry args={[1, 1, 32, 32]} />
            <shaderMaterial
                ref={materialRef}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                wireframe={false}
            />
        </mesh>
    );
}

// Fallback skeleton loader
function Fallback() {
    return <div className="w-full h-full bg-white/5 animate-pulse" />;
}

export function ThreeImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
    return (
        <div className={`relative overflow-hidden w-full h-full ${className}`}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Scene src={src} alt={alt} />
                </Suspense>
            </Canvas>
            {/* Interaction overlay to ensure canvas events trigger effectively */}
            <div className="absolute inset-0 pointer-events-none shadow-inner" />
        </div>
    );
}
