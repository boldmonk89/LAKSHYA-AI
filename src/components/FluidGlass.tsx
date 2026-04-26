/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import { useRef, useState, memo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  useScroll,
  Image,
  Scroll,
  ScrollControls,
  MeshTransmissionMaterial,
  Text,
  Float
} from '@react-three/drei';
import { easing } from 'maath';

// Error Boundary for WebGL/Three.js crashes
class SceneErrorBoundary extends React.Component<any, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return <div className="h-full w-full bg-black/20 flex items-center justify-center text-white/50 italic">3D Scene unavailable</div>;
    return this.props.children;
  }
}

import React from 'react';

export default function FluidGlass({ mode = 'lens', lensProps = {} }: any) {
  return (
    <div className="w-full h-full relative bg-black/5">
      <SceneErrorBoundary>
        <Suspense fallback={<div className="w-full h-full bg-black/10 animate-pulse" />}>
          <Canvas camera={{ position: [0, 0, 20], fov: 25 }} gl={{ alpha: true }}>
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <ScrollControls damping={0.2} pages={3} distance={0.5}>
              <Scroll>
                <Images />
                <Typography />
              </Scroll>
              <GlassLens modeProps={lensProps} />
            </ScrollControls>
          </Canvas>
        </Suspense>
      </SceneErrorBoundary>
    </div>
  );
}

function GlassLens({ modeProps }: any) {
  const ref = useRef<any>();
  const { viewport } = useThree();

  useFrame((state, delta) => {
    const { pointer } = state;
    const x = (pointer.x * viewport.width) / 2;
    const y = (pointer.y * viewport.height) / 2;
    
    if (ref.current) {
      easing.damp3(ref.current.position, [x, y, 10], 0.2, delta);
      ref.current.rotation.x += delta * 0.5;
      ref.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={ref} scale={2}>
        <torusGeometry args={[1.5, 0.4, 32, 100]} />
        <MeshTransmissionMaterial
          ior={modeProps.ior ?? 1.2}
          thickness={modeProps.thickness ?? 1.5}
          anisotropy={0.1}
          chromaticAberration={0.05}
          distortion={0.5}
          distortionScale={0.5}
          temporalDistortion={0.1}
          transmission={1}
          roughness={0.1}
        />
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
      fontSize={1.5}
      color="#ffffff"
      anchorX="center"
      anchorY="middle"
      fontWeight="bold"
    >
      LAKSHYA AI
    </Text>
  );
}
