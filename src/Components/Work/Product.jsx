import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Nike from './3d/Nike.jsx'
import styled from 'styled-components'
const Product = () => {
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
return (
    <>
    <Canvas>

        <OrbitControls  enableZoom={false}/>
        <Stage environment={'city'} intensity={0.5}>
                <Nike  />
        </Stage>

    </Canvas>
    <Desc>
    We Guarantee The Best Quality Products That Are Made With Love And Care For Our Customers And Their Needs.    
    </Desc>
    </>
)
}

export default Product