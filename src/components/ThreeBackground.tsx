"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Stars(props: any) {
    const ref = useRef<THREE.Points>(null!);

    // Generate a random spherical distribution of points for the stars
    const positions = useMemo(() => {
        const starCount = 4000;
        const coords = new Float32Array(starCount * 3);
        for (let i = 0; i < starCount; i++) {
            // Random spherical distribution
            const r = 4 + Math.random() * 6; // distance from center
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            coords[i * 3] = x;
            coords[i * 3 + 1] = y;
            coords[i * 3 + 2] = z;
        }
        return coords;
    }, []);

    // Frame loop for animating the starfield
    useFrame((state, delta) => {
        if (!ref.current) return;

        // Auto idle rotation
        ref.current.rotation.x -= delta / 20;
        ref.current.rotation.y -= delta / 30;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#3b82f6" // blue primary tint
                    size={0.02}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

export function ThreeBackground() {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-30 pointer-events-none bg-black">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
        </div>
    );
}
