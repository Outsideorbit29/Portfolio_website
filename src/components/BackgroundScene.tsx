"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion, useScroll } from "framer-motion";
import * as THREE from "three";

const FIELD_STAR_COUNT = 4000;
const FALLING_STAR_COUNT = 2500;

// Creates a circular radial gradient texture for glowing star sprites
function createStarTexture() {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d")!;
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1.0)");
    gradient.addColorStop(0.3, "rgba(160, 200, 255, 0.8)");
    gradient.addColorStop(0.7, "rgba(100, 160, 255, 0.3)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(canvas);
}

// Random points in a spherical shell around the group's center.
function createFieldPositions(count: number) {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const r = 4 + Math.random() * 6;
        const theta = 2 * Math.PI * Math.random();
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
}

function createFallingStars(count: number) {
    const base = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
        base[i * 3] = (Math.random() - 0.5) * 80;
        base[i * 3 + 1] = (Math.random() - 0.5) * 80;
        base[i * 3 + 2] = (Math.random() - 0.5) * 40;
        speeds[i] = Math.random() * 0.05 + 0.01;
    }
    return { base, speeds, offsets: new Float32Array(count), live: base.slice() };
}

function StarField({ count }: { count: number }) {
    const ref = useRef<THREE.Points>(null);
    const positions = useMemo(() => createFieldPositions(count), [count]);

    useFrame((_, delta) => {
        if (!ref.current) return;
        ref.current.rotation.x -= delta / 20;
        ref.current.rotation.y -= delta / 30;
    });

    return (
        // Sits just in front of the camera, so the viewer floats inside the star shell.
        <group position={[0, 0, 19]} rotation={[0, 0, Math.PI / 4]}>
            <points ref={ref} frustumCulled={false}>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" args={[positions, 3]} />
                </bufferGeometry>
                <pointsMaterial
                    transparent
                    color="#3b82f6"
                    size={0.02}
                    sizeAttenuation
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </points>
        </group>
    );
}

function FallingStars({ count }: { count: number }) {
    const ref = useRef<THREE.Points>(null);
    const { scrollYProgress } = useScroll();
    const texture = useMemo(() => createStarTexture(), []);
    const stars = useRef(createFallingStars(count));

    useFrame((_, delta) => {
        if (!ref.current) return;

        const { base, speeds, offsets, live } = stars.current;
        const scroll = scrollYProgress.get();
        // Stars drift toward the center and fall faster as the page scrolls.
        const spread = 1 - scroll * 0.85;
        const speedBoost = 1 + scroll * 2;

        for (let i = 0; i < count; i++) {
            offsets[i] -= speeds[i] * (delta * 4 * speedBoost);
            if (offsets[i] < -40) offsets[i] = 40;

            live[i * 3] = base[i * 3] * spread;
            live[i * 3 + 1] = (base[i * 3 + 1] + offsets[i]) * spread;
        }

        ref.current.geometry.attributes.position.needsUpdate = true;
        ref.current.rotation.z = scroll * 0.2;
        ref.current.rotation.y += delta * 0.005;
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[stars.current.live, 3]} />
            </bufferGeometry>
            <pointsMaterial
                size={0.16}
                map={texture}
                alphaTest={0.01}
                transparent
                depthWrite={false}
                opacity={0.8}
                sizeAttenuation
            />
        </points>
    );
}

export default function BackgroundScene() {
    return (
        <motion.div
            className="fixed inset-0 -z-30 pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <Canvas camera={{ position: [0, 0, 20], fov: 60 }} dpr={[1, 1.5]}>
                <StarField count={FIELD_STAR_COUNT} />
                <FallingStars count={FALLING_STAR_COUNT} />
            </Canvas>
        </motion.div>
    );
}
