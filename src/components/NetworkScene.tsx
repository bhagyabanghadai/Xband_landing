"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, MeshTransmissionMaterial, Float, Bounds, useBounds } from "@react-three/drei";
import * as THREE from "three";

function MassiveGlassStructure() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  // Mouse interactivity logic
  useFrame((state) => {
    if (groupRef.current) {
      // The truck in Terminal spans the screen and reacts to the mouse.
      // We will make this geometric structure tilt and pan based on pointer.
      const targetX = (state.pointer.y * Math.PI) / 12;
      const targetY = (state.pointer.x * Math.PI) / 8;

      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.05);
    }

    if (meshRef.current) {
        // Slow continuous idle rotation
        meshRef.current.rotation.z += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
        <mesh ref={meshRef} position={[0, 0, 0]} scale={[4, 1.5, 2]}>
          {/* We use an Icosahedron stretched out to feel massive and horizontal, like a bridge or vehicle */}
          <icosahedronGeometry args={[1, 1]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={2}
            chromaticAberration={0.1}
            anisotropy={0.5}
            distortion={0.3}
            distortionScale={0.5}
            temporalDistortion={0.1}
            iridescence={1}
            iridescenceIOR={1.5}
            iridescenceThicknessRange={[100, 1000]}
            clearcoat={1}
            color="#ffffff"
          />
        </mesh>
      </Float>
    </group>
  );
}

// Separate component to handle bounds and camera fitting
function SceneContent() {
  return (
    <Bounds fit clip observe margin={1.2}>
      <MassiveGlassStructure />
    </Bounds>
  );
}

export default function NetworkScene() {
  return (
    <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={1.5} color="#ffffff" />

        {/* Vibrant colorful lights hitting the glass */}
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#3B82F6" />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={2} color="#8B5CF6" />
        <pointLight position={[0, -5, 5]} intensity={1.5} color="#10B981" />

        <SceneContent />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
