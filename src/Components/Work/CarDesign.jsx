import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Car from './3d/Car.jsx'
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
const CarDesign = () => {
return (
        <>

            <Canvas>

            <OrbitControls  enableZoom={false}/>
            <Stage environment={'city'} intensity={0.5}>
                    <Car  />
            </Stage>

            </Canvas>
                <Desc>
                    We Design 3D Cars With High Quality And Insure That They Are As Realistic As Possible To The Real World.
                </Desc>
        </>
)
}

export default CarDesign