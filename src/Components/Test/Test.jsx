import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import styled from 'styled-components';
import Cube from './Cube';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`;

function Test() {
  return (
    <Container>
      <Canvas camera={{fov:25,position:[5,5,5]}}>
        <OrbitControls enableZoom={false}  />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} intensity={1} />
        <Cube />
      </Canvas>
    </Container>
  );
}

export default Test;
