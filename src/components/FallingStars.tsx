"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import * as THREE from "three";

// Creates a circular radial gradient texture for glowing star sprites
function createStarTexture() {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d")!;
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1.0)"); // Bright white center
    gradient.addColorStop(0.3, "rgba(160, 200, 255, 0.8)"); // Light blue mid
    gradient.addColorStop(0.7, "rgba(100, 160, 255, 0.3)"); // Soft glow outer
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)"); // Fully transparent edge
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(canvas);
}

function Stars() {
    const pointsRef = useRef<THREE.Points>(null);
    const { scrollYProgress } = useScroll();

    // Generate circular glowing star sprite texture
    const starTexture = useMemo(() => createStarTexture(), []);

    // Generate random positions and speeds for thousands of stars
    const particleCount = 2500;
    
    // We store 'base' coordinates to calculate convergence relative to
    const [basePositions, speeds] = useMemo(() => {
        const positions = new Float32Array(particleCount * 3);
        const speeds = new Float32Array(particleCount);

        for (let i = 0; i < particleCount; i++) {
            // Spread stars widely across X, Y, and Z axes
            positions[i * 3] = (Math.random() - 0.5) * 80; // X
            positions[i * 3 + 1] = (Math.random() - 0.5) * 80; // Y
            positions[i * 3 + 2] = (Math.random() - 0.5) * 40; // Z

            // Random speed for parallax effect
            speeds[i] = Math.random() * 0.05 + 0.01;
        }

        return [positions, speeds];
    }, []);

    // Current animated Y offsets (independent of convergence)
    const yOffsets = useMemo(() => new Float32Array(particleCount), []);

    useFrame((state, delta) => {
        if (!pointsRef.current) return;

        const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
        const scroll = scrollYProgress.get();
        
        // Convergence factor: how much to move toward the center (0,0)
        // 0 at top of page, 0.8 (mostly converged) at bottom
        const convergenceFactor = scroll * 0.85;
        
        // Scroll velocity boost for falling speed
        const speedBoost = 1 + scroll * 2;

        for (let i = 0; i < particleCount; i++) {
            // 1. Update the vertical falling offset
            yOffsets[i] -= speeds[i] * (delta * 4 * speedBoost);

            // Reset offset if it falls too far
            if (yOffsets[i] < -40) {
                yOffsets[i] = 40;
            }

            // 2. Base position + Falling offset
            const initialX = basePositions[i * 3];
            const initialY = basePositions[i * 3 + 1] + yOffsets[i];
            const initialZ = basePositions[i * 3 + 2];

            // 3. Apply convergence towards (0,0) based on scroll
            // We multiply X and Y by (1 - convergenceFactor)
            positions[i * 3] = initialX * (1 - convergenceFactor);
            positions[i * 3 + 1] = initialY * (1 - convergenceFactor);
            positions[i * 3 + 2] = initialZ;
        }

        pointsRef.current.geometry.attributes.position.needsUpdate = true;

        // Subtle rotation changes based on scroll
        pointsRef.current.rotation.z = scroll * 0.2;
        pointsRef.current.rotation.y += delta * 0.005;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particleCount}
                    args={[new Float32Array(particleCount * 3), 3]}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.16}
                map={starTexture}
                alphaTest={0.01}
                transparent
                depthWrite={false}
                opacity={0.8}
                sizeAttenuation={true}
                vertexColors={false}
            />
        </points>
    );
}

export function FallingStars() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none w-full h-full overflow-hidden">
            <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
                <Stars />
            </Canvas>
        </div>
    );
}

