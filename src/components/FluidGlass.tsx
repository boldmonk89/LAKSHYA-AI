/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import { useRef, useState, memo } from 'react';
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber';
import {
  useFBO,
  useScroll,
  Image,
  Scroll,
  Preload,
  ScrollControls,
  MeshTransmissionMaterial,
  Text
} from '@react-three/drei';
import { easing } from 'maath';

export default function FluidGlass({ mode = 'lens', lensProps = {}, cubeProps = {} }: any) {
  const Wrapper = mode === 'cube' ? Cube : Lens;
  const modeProps = mode === 'cube' ? cubeProps : lensProps;

  return (
    <Canvas 
      camera={{ position: [0, 0, 25], fov: 25 }} 
      gl={{ alpha: true, antialias: true }}
      style={{ background: '#0a0a0a' }}
    >
      <color attach="background" args={['#050505']} />
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <ScrollControls damping={0.2} pages={3} distance={0.5}>
        <Wrapper modeProps={modeProps}>
          <Scroll>
            <Typography />
            <Images />
          </Scroll>
          <Scroll html />
          <Preload />
        </Wrapper>
      </ScrollControls>
    </Canvas>
  );
}

const ModeWrapper = memo(function ModeWrapper({
  children,
  geometry,
  followPointer = true,
  modeProps = {},
  ...props
}: any) {
  const ref = useRef<any>();
  const buffer = useFBO();
  const { viewport: vp } = useThree();
  const [scene] = useState(() => {
    const s = new THREE.Scene();
    s.background = new THREE.Color('#0a0a0a');
    return s;
  });

  useFrame((state, delta) => {
    const { gl, viewport, pointer, camera } = state;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);

    const destX = followPointer ? (pointer.x * v.width) / 2 : 0;
    const destY = followPointer ? (pointer.y * v.height) / 2 : 0;
    
    if (ref.current) {
        easing.damp3(ref.current.position, [destX, destY, 12], 0.1, delta);
        ref.current.rotation.x += delta * 0.2;
        ref.current.rotation.y += delta * 0.3;
    }

    // Capture the scene into the buffer
    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
  });

  const { ior, thickness, chromaticAberration, ...extraMat } = modeProps;

  return (
    <>
      {createPortal(
        <>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          {children}
        </>, 
        scene
      )}
      
      {/* The background plane that shows what's in the scene */}
      <mesh scale={[vp.width * 2, vp.height * 2, 1]} position={[0, 0, 0]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} />
      </mesh>

      {/* The Glass Lens */}
      <mesh ref={ref} scale={2} {...props}>
        {geometry}
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={ior ?? 1.2}
          thickness={thickness ?? 1.5}
          chromaticAberration={chromaticAberration ?? 0.05}
          transmission={1}
          background={new THREE.Color('#0a0a0a')}
          {...extraMat}
        />
      </mesh>
    </>
  );
});

function Lens({ modeProps, ...p }: any) {
  return (
    <ModeWrapper 
      geometry={<torusGeometry args={[2, 0.6, 32, 64]} />} 
      modeProps={modeProps} 
      {...p} 
    />
  );
}

function Cube({ modeProps, ...p }: any) {
  return (
    <ModeWrapper 
      geometry={<boxGeometry args={[3, 3, 3]} />} 
      modeProps={modeProps} 
      {...p} 
    />
  );
}

function Images() {
  const group = useRef<any>();
  const { height } = useThree(s => s.viewport);

  return (
    <group ref={group}>
      <Image position={[-3, 0, 0]} scale={[4, 6, 1]} url="/images/resources/ima-parade.jpeg" />
      <Image position={[3, 0, 2]} scale={4} url="/images/resources/you-belong-here.jpeg" />
      <Image position={[0, -height, 4]} scale={5} url="/images/resources/tat-1.jpg" />
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
      LAKSHYA AI
    </Text>
  );
}
