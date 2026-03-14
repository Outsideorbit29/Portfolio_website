"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, PerspectiveCamera, Sparkles } from "@react-three/drei";
import { useScroll, useTransform } from "framer-motion";
import * as THREE from "three";

function IcosahedronGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Use framer-motion to track scroll progress
  const { scrollYProgress } = useScroll();

  // Map scroll progress to rotation and position
  const yRotation = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 4]);
  const xRotation = useTransform(scrollYProgress, [0, 1], [0, Math.PI]);
  const yPosition = useTransform(scrollYProgress, [0, 1], [0, -3]);

  // Update Three.js object in the render loop based on framer-motion values
  // plus a constant rotation over time.
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Base rotation from scroll + continuous slow rotation over time
      meshRef.current.rotation.y = yRotation.get() + state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.x = xRotation.get() + 0.5 + state.clock.getElapsedTime() * 0.05;
      meshRef.current.position.y = yPosition.get();
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2, 1]} />
      <meshPhysicalMaterial
        color="#8b5cf6" // violet-500
        wireframe={true}
        transparent={true}
        opacity={0.2}
        roughness={0.2}
        metalness={0.8}
      />
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

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Base counter-rotation from scroll + continuous slow rotation
      meshRef.current.rotation.y = yRotation.get() - state.clock.getElapsedTime() * 0.08;
      meshRef.current.rotation.x = xRotation.get() - state.clock.getElapsedTime() * 0.12;
      meshRef.current.position.y = yPosition.get();
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1.2, 0.4, 16, 32]} />
      <meshPhysicalMaterial
        color="#3b82f6" // blue-500
        wireframe={true}
        transparent={true}
        opacity={0.3}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

export function Scrollable3DObject() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-80">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />

        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />

        <IcosahedronGeometry />
        <InnerTorus />

        <Sparkles
          count={100}
          scale={12}
          size={2}
          speed={0.4}
          opacity={0.1}
          color="#a78bfa"
        />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
