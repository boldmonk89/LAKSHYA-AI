/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import { useRef, useState, memo, useMemo } from 'react';
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
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <Canvas camera={{ position: [0, 0, 20], fov: 15 }} gl={{ alpha: true }}>
        <ScrollControls damping={0.2} pages={3} distance={0.4}>
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
    </div>
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
  const [scene] = useState(() => new THREE.Scene());

  useFrame((state, delta) => {
    const { gl, viewport, pointer, camera } = state;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);

    const destX = followPointer ? (pointer.x * v.width) / 2 : 0;
    const destY = followPointer ? (pointer.y * v.height) / 2 : 0;
    
    if (ref.current) {
        easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);
        ref.current.rotation.x += delta * 0.2;
        ref.current.rotation.y += delta * 0.3;
    }

    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
  });

  const { ior, thickness, anisotropy, chromaticAberration, ...extraMat } = modeProps;

  return (
    <>
      {createPortal(
        <>
          <ambientLight intensity={1.5} />
          {children}
        </>, 
        scene
      )}
      <mesh scale={[vp.width, vp.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} transparent />
      </mesh>
      <mesh ref={ref} scale={1.5} {...props}>
        {geometry}
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={ior ?? 1.15}
          thickness={thickness ?? 2}
          anisotropy={anisotropy ?? 0.01}
          chromaticAberration={chromaticAberration ?? 0.1}
          {...extraMat}
        />
      </mesh>
    </>
  );
});

function Lens({ modeProps, ...p }: any) {
  return (
    <ModeWrapper 
        geometry={<torusGeometry args={[2, 0.4, 32, 100]} />} 
        followPointer 
        modeProps={modeProps} 
        {...p} 
    />
  );
}

function Cube({ modeProps, ...p }: any) {
  return (
    <ModeWrapper 
        geometry={<boxGeometry args={[2, 2, 2]} />} 
        followPointer 
        modeProps={modeProps} 
        {...p} 
    />
  );
}

function Images() {
  const group = useRef<any>();
  const data = useScroll();
  const { height } = useThree(s => s.viewport);

  useFrame(() => {
    if (!group.current || !group.current.children[0]) return;
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
  });

  return (
    <group ref={group}>
      <Image position={[-2, 0, 0]} scale={[3, height / 1.1, 1]} url="/images/resources/ima-parade.jpeg" />
      <Image position={[2, 0, 3]} scale={3} url="/images/resources/you-belong-here.jpeg" />
      <Image position={[-2.05, -height, 6]} scale={[1, 3, 1]} url="/images/resources/tat-1.jpg" />
    </group>
  );
}

function Typography() {
  return (
    <Text
      position={[0, 0, 12]}
      fontSize={0.8}
      letterSpacing={-0.05}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      LAKSHYA AI
    </Text>
  );
}
