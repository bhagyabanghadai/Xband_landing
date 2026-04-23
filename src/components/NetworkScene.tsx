"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshTransmissionMaterial, Float, Bounds } from "@react-three/drei";
import * as THREE from "three";

function MassiveGlassStructure() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  // Deep interactive rotation based on mouse
  useFrame((state) => {
    if (groupRef.current) {
      const targetX = (state.pointer.y * Math.PI) / 6;
      const targetY = (state.pointer.x * Math.PI) / 4;

      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.05);
    }

    if (meshRef.current) {
        meshRef.current.rotation.z += 0.001;
        meshRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1}>
        <mesh ref={meshRef} position={[0, -0.5, 0]} scale={[6, 2, 3]}>
          <torusKnotGeometry args={[1, 0.3, 256, 32]} />
          {/* Elite physical glass material that will refract the hero image behind it */}
          <MeshTransmissionMaterial
            backside
            samples={6}
            thickness={3}
            chromaticAberration={0.4}
            anisotropy={0.8}
            distortion={0.5}
            distortionScale={0.5}
            temporalDistortion={0.2}
            iridescence={1}
            iridescenceIOR={1.5}
            iridescenceThicknessRange={[100, 1000]}
            clearcoat={1}
            roughness={0.05}
            transmission={1}
            ior={1.5}
            color="#ffffff"
          />
        </mesh>
      </Float>
    </group>
  );
}

function SceneContent() {
  return (
    <Bounds fit clip observe margin={1.2}>
      <MassiveGlassStructure />
    </Bounds>
  );
}

export default function NetworkScene() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={2} color="#ffffff" />

        {/* Lights placed to catch the edges of the complex glass geometry */}
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={4} color="#3B82F6" />
        <spotLight position={[-10, -10, -10]} angle={0.3} penumbra={1} intensity={3} color="#8B5CF6" />
        <pointLight position={[0, 0, 5]} intensity={2} color="#ffffff" />

        <SceneContent />

        {/* Using a highly reflective environment map to make the glass pop */}
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
