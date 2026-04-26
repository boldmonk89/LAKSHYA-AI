/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import { useRef, useState, memo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  useScroll,
  Image,
  Scroll,
  ScrollControls,
  Text,
  Float
} from '@react-three/drei';

// Safe Material for Glass effect without crashing
const GlassMaterial = () => (
  <meshPhysicalMaterial
    transmission={1}
    thickness={2}
    roughness={0.05}
    ior={1.2}
    reflectivity={1}
    clearcoat={1}
    clearcoatRoughness={0.1}
    color="#ffffff"
    attenuationColor="#ffffff"
    attenuationDistance={1}
  />
);

export default function FluidGlass() {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '600px', background: '#050505' }}>
      <Suspense fallback={<div className="h-full w-full bg-black flex items-center justify-center text-primary animate-pulse">Loading Blueprint...</div>}>
        <Canvas camera={{ position: [0, 0, 20], fov: 20 }} gl={{ alpha: true }}>
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} intensity={2} />
          <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
          
          <ScrollControls damping={0.1} pages={3}>
            <Scroll>
              <Images />
              <Typography />
            </Scroll>
            <Lens />
          </ScrollControls>
        </Canvas>
      </Suspense>
    </div>
  );
}

function Lens() {
  const ref = useRef<any>();
  const { viewport } = useThree();

  useFrame((state) => {
    const { pointer } = state;
    // Follow mouse smoothly
    if (ref.current) {
        const targetX = (pointer.x * viewport.width) / 2;
        const targetY = (pointer.y * viewport.height) / 2;
        ref.current.position.x += (targetX - ref.current.position.x) * 0.1;
        ref.current.position.y += (targetY - ref.current.position.y) * 0.1;
        
        ref.current.rotation.x += 0.01;
        ref.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={ref} position={[0, 0, 10]}>
            <torusGeometry args={[1.5, 0.4, 32, 100]} />
            <GlassMaterial />
        </mesh>
    </Float>
  );
}

function Images() {
  const { height } = useThree(s => s.viewport);

  return (
    <group>
      <Image position={[-3, 0, 0]} scale={[4, 6, 1]} url="/images/resources/ima-parade.jpeg" />
      <Image position={[3, 0, 2]} scale={4} url="/images/resources/you-belong-here.jpeg" />
      <Image position={[0, -height, 4]} scale={6} url="/images/resources/tat-1.jpg" />
    </group>
  );
}

function Typography() {
  return (
    <Text
      position={[0, 2, 8]}
      fontSize={1.2}
      color="#ffffff"
      anchorX="center"
      anchorY="middle"
      fontWeight="bold"
    >
      LAKSHYA SELECTION BLUEPRINT
    </Text>
  );
}
