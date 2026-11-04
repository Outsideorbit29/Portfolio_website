"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useScroll, useTransform } from "framer-motion";
import * as THREE from "three";

function IcosahedronGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { scrollYProgress } = useScroll();

  // Map scroll progress to rotation and position
  const yRotation = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 4]);
  const xRotation = useTransform(scrollYProgress, [0, 1], [0, Math.PI]);
  const yPosition = useTransform(scrollYProgress, [0, 1], [0, -3]);

  useFrame((state) => {
    if (meshRef.current) {
      // Rotation from scroll, plus a slow continuous rotation over time
      meshRef.current.rotation.y = yRotation.get() + state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.x = xRotation.get() + 0.5 + state.clock.getElapsedTime() * 0.05;
      meshRef.current.position.y = yPosition.get();
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2, 1]} />
      <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.2} />
    </mesh>
  );
}

function InnerTorus() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { scrollYProgress } = useScroll();

  // Counter-rotate the inner torus
  const yRotation = useTransform(scrollYProgress, [0, 1], [0, -Math.PI * 3]);
  const xRotation = useTransform(scrollYProgress, [0, 1], [0, -Math.PI * 2]);
  const yPosition = useTransform(scrollYProgress, [0, 1], [0, -3]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = yRotation.get() - state.clock.getElapsedTime() * 0.08;
      meshRef.current.rotation.x = xRotation.get() - state.clock.getElapsedTime() * 0.12;
      meshRef.current.position.y = yPosition.get();
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1.2, 0.4, 16, 32]} />
      <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.3} />
    </mesh>
  );
}

export function Scrollable3DObject() {
  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none opacity-80">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 1.5]}>
        <IcosahedronGeometry />
        <InnerTorus />
      </Canvas>
    </div>
  );
}
