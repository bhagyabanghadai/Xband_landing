"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Environment, Sphere, Box, Torus } from "@react-three/drei";
import * as THREE from "three";

function BuildingBlocks() {
  const group = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  // Handle mouse movement
  useFrame((state) => {
    if (group.current) {
      const { x, y } = state.pointer;

      // Smoothly interpolate rotation based on mouse position
      const targetX = (y * Math.PI) / 6;
      const targetY = (x * Math.PI) / 6;

      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.05);
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.05);

      // Add continuous slow rotation
      group.current.rotation.z += 0.001;
    }

    if (coreRef.current) {
        coreRef.current.rotation.y += 0.005;
        coreRef.current.rotation.x += 0.002;
    }
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Core Element - Represents the central platform */}
        <mesh ref={coreRef} position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.8, 0]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={2.5}
            chromaticAberration={0.05}
            anisotropy={0.3}
            distortion={0.2}
            distortionScale={0.2}
            temporalDistortion={0.1}
            iridescence={1}
            iridescenceIOR={1.5}
            iridescenceThicknessRange={[100, 1000]}
            clearcoat={1}
            color="#ffffff"
          />
        </mesh>

        {/* Orbiting Elements - Representing different regions/services */}
        <Float speed={4} rotationIntensity={2} floatIntensity={2}>
            <Box args={[0.5, 0.5, 0.5]} position={[2.5, 1.5, 1]}>
              <meshPhysicalMaterial
                color="#3B82F6"
                metalness={0.9}
                roughness={0.1}
                clearcoat={1}
                envMapIntensity={2}
              />
            </Box>
        </Float>

        <Float speed={3} rotationIntensity={1.5} floatIntensity={1.5}>
            <Sphere args={[0.3, 32, 32]} position={[-2.5, -1, 1.5]}>
              <meshPhysicalMaterial
                color="#8B5CF6"
                metalness={0.8}
                roughness={0.2}
                clearcoat={1}
                envMapIntensity={2}
              />
            </Sphere>
        </Float>

        <Float speed={5} rotationIntensity={1} floatIntensity={2}>
            <Torus args={[0.3, 0.1, 16, 32]} position={[1, -2.5, -1]} rotation={[Math.PI/4, 0, 0]}>
              <meshPhysicalMaterial
                color="#F59E0B"
                metalness={0.9}
                roughness={0.1}
                clearcoat={1}
                envMapIntensity={2}
              />
            </Torus>
        </Float>

        <Float speed={3.5} rotationIntensity={2} floatIntensity={1}>
            <Sphere args={[0.2, 32, 32]} position={[-1.5, 2, -2]}>
              <meshPhysicalMaterial
                color="#10B981"
                metalness={0.7}
                roughness={0.3}
                clearcoat={1}
                envMapIntensity={2}
              />
            </Sphere>
        </Float>

        {/* Connecting Network Lines */}
        <lineSegments>
          <edgesGeometry args={[new THREE.IcosahedronGeometry(2.0, 0)]} />
          <lineBasicMaterial color="#3B82F6" transparent opacity={0.15} />
        </lineSegments>

        {/* Outer Halo */}
        <mesh position={[0, 0, -2]}>
            <ringGeometry args={[3.5, 3.55, 64]} />
            <meshBasicMaterial color="#8B5CF6" transparent opacity={0.1} side={THREE.DoubleSide} />
        </mesh>
      </Float>
    </group>
  );
}

export default function NetworkScene() {
  return (
    <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 9], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={2.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#8B5CF6" />
        <pointLight position={[0, 0, 0]} intensity={1} color="#3B82F6" />

        <BuildingBlocks />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
