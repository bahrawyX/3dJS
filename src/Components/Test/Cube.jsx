import React, { useRef } from 'react'
import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Cube = () => {
    const TextRef=useRef();
    useFrame(state=>(TextRef.current.position.x=Math.tan(state.clock.elapsedTime))*2)
return (
    <mesh>
    <boxGeometry  />
    <meshStandardMaterial>
      <RenderTexture attach="map">
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <color attach="background" args={['#BC7AF9']} />
        <Text
        ref={TextRef}
          fontSize={1.5} // Adjust the font size as needed
          color="#555">
            hello</Text>
      </RenderTexture>
    </meshStandardMaterial>
  </mesh>
)
}

export default Cube