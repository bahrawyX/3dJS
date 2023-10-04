import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Setup from './3d/Setup.jsx'
import styled from 'styled-components'
const Desc=styled.div`
width: 130px;
padding: 20px;
background-color: #fff;
border-radius: 10px;
position: absolute;
top: 100px;
right: 100px;
@media only screen and (max-width: 796px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 50px;
    width: 80%; /* Adjust the width as needed */
  }
`

const Development = () => {
    
return (
            <>
                    <Canvas>
            
            <OrbitControls  enableZoom={false}/>
            <Stage environment={'city'} intensity={0.5}>
                <Setup/>
            </Stage>

        </Canvas>
            <Desc>
                We Have The Most Advanced Setup For Our Customers To Ensure The Best Quality Products And The Best Experience.
            </Desc>
            </>
)
}

export default Development