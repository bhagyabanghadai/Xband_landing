"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Plane } from "@react-three/drei";
import * as THREE from "three";

function AbstractHorizon() {
  const meshRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.5 - 2;

      // React to pointer movement
      const targetX = state.pointer.y * 0.5; // Rotate up/down based on mouse Y
      const targetY = state.pointer.x * 0.5; // Rotate left/right based on mouse X

      // Smoothly interpolate current rotation to target rotation
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetX, 0.05);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetY, 0.05);
    }
  });

  return (
    <group ref={meshRef}>
      <Plane args={[100, 100, 64, 64]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <meshStandardMaterial
          ref={materialRef}
          color="#000000"
          roughness={0.1}
          metalness={0.9}
          wireframe={false}
          envMapIntensity={2}
        />
      </Plane>
      <SpotLight />
    </group>
  );
}

function SpotLight() {
  const lightRef = useRef<THREE.PointLight>(null);
  useFrame(({ clock, pointer }) => {
    if (lightRef.current) {
      // Light moves with the mouse and clock
      const targetX = Math.sin(clock.elapsedTime * 0.5) * 15 + pointer.x * 10;
      lightRef.current.position.x = THREE.MathUtils.lerp(lightRef.current.position.x, targetX, 0.05);
    }
  });
  return <pointLight ref={lightRef} position={[0, 0, -10]} intensity={150} color="#A3E635" distance={50} />;
}

export default function NetworkScene() {
  return (
    <div className="absolute inset-0 z-0 w-full h-full pointer-events-none" style={{ background: 'linear-gradient(to bottom, #101010, #000000)' }}>
      <Canvas camera={{ position: [0, 2, 10], fov: 45 }} dpr={[1, 2]}>
        <fog attach="fog" args={['#000000', 10, 30]} />
        <ambientLight intensity={0.1} />

        {/* Soft horizon glow */}
        <directionalLight position={[0, 5, -20]} intensity={2} color="#A3E635" />

        <AbstractHorizon />

        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
