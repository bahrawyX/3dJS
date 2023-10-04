import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import ReactIcon from './3d/ReactIcon.jsx'
import styled from 'styled-components'
const Desc = styled.div`
  width: 130px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;
  text-align: center;
  @media only screen and (max-width: 796px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 50px;
    width: 80%; /* Adjust the width as needed */
  }
`;

const Web = () => {
return (
    <>
    <Canvas >
        <OrbitControls  enableZoom={false}/>
        <Stage  environment={'city'} intensity={0.6} >
        <ReactIcon  />


        </Stage>

    </Canvas>
        <Desc>
            We Design Products With High Quality Standards And Aesthetics That Are Pleasing To The Eye. 
    </Desc>
    </>
)
}

export default Web