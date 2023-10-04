import React from 'react'
import styled from 'styled-components'
import Navbar from '../NavBar/Navbar'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls,Sphere } from '@react-three/drei'

const Section =styled.div`
height:100vh;
scroll-snap-align: center;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
@media only screen and (max-width: 796px) {
    height:200vh;
}
`
const Container =styled.div`
    height:100%;
    width:70%;
    display:flex;
justify-content:space-between;
@media only screen and (max-width: 796px) {
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    width:100%;
}
    
`
const Left =styled.div`
display:flex;
flex-direction:column;
justify-content:center;
gap:20px;
flex:2;
@media only screen and (max-width: 796px) {
    flex:1;
    align-items:center;
    width:100%;
}
`
const Title =styled.h1`
font-size:70px;
@media only screen and (max-width: 796px) {
    text-align:center;
}

`
const WhatWeDo =styled.div`
display:flex;
align-items:center;
gap:20px;

`

const Line =styled.img`
height:5px;


`
const Subtitle =styled.h2`
color:#BC7AF9;
`
const Desc =styled.p`
font-size:24px;
color:lightgray;
@media only screen and (max-width: 796px) {

    text-align:center;
    padding:0 20px;
}


`
const Button =styled.button`
width:100px;
padding:10px ;
background-color:#BC7AF9;
color:white;
border:none;
border-radius:5px;
cursor:pointer;
cursor:pointer;
transition:all 0.5s ease;
    &:hover{
        background-color:white;
        color:#BC7AF9;
    }
`
const Img =styled.img`
width:800px;
height:600px;
object-fit:contain;
position:absolute;
top :0;
right:0;
left:0;
bottom:0;
margin:auto;
animation:float 2s infinite ease alternate;

@keyframes float{

    to{
        transform:translateY(30px);
    }
}
@media only screen and (max-width: 796px) {

    width:300px;
    height:300px;
}
`
const Right =styled.div`
position:relative;
flex:3;
@media only screen and (max-width: 796px) {
    flex:1;
}
`
function Landing() {
return (
    <Section>
        <Navbar />
        <Container>
            <Left>
                <Title>
                    You Wish ,<br/> We Make 
                </Title>
                <WhatWeDo>
                    <Line src="./img/line.png"/>
                    <Subtitle>
                    What We Do
                    </Subtitle>
                </WhatWeDo>
                <Desc>
                    we are a team of talanted designers making websites with Bootstrap
                </Desc>

                <Button>
                    Learn More
                </Button>
            </Left>       
            <Right>
                <Canvas >
                    <OrbitControls enableZoom={false}  autoRotate={true} />
                    <ambientLight intensity={1} />
                    <directionalLight position={[100,8,80]} intensity={1} />
                    <Sphere args={[1,80,200]}  scale={2}>
                        <MeshDistortMaterial color="#BC7AF9" attach="material" distort={0.2} speed={2} />
                    </Sphere>
                </Canvas>
                <Img src="./img/SpaceMan.png" alt="" />
            </Right>
        </Container>
    </Section>
)   
}

export default Landing