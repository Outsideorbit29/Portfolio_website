"use client";

import { useMemo, useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
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

function Scene({ src }: { src: string }) {
    const materialRef = useRef<THREE.ShaderMaterial>(null);
    const texture = useLoader(THREE.TextureLoader, src);
    const { viewport } = useThree();

    const [hovered, setHover] = useState(false);
    const hoverState = useRef(0);

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uTexture: { value: texture },
            uHoverState: { value: 0 },
        }),
        [texture],
    );

    useFrame((state) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
            hoverState.current = THREE.MathUtils.lerp(hoverState.current, hovered ? 1 : 0, 0.1);
            materialRef.current.uniforms.uHoverState.value = hoverState.current;
        }
    });

    return (
        <mesh
            scale={[viewport.width, viewport.height, 1]}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <planeGeometry args={[1, 1, 32, 32]} />
            <shaderMaterial
                ref={materialRef}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
            />
        </mesh>
    );
}

export default function ThreeImageCanvas({ src, active }: { src: string; active: boolean }) {
    return (
        <Canvas
            camera={{ position: [0, 0, 1] }}
            dpr={[1, 1.5]}
            frameloop={active ? "always" : "never"}
            style={{ position: "absolute", inset: 0 }}
        >
            <Suspense fallback={null}>
                <Scene src={src} />
            </Suspense>
        </Canvas>
    );
}
