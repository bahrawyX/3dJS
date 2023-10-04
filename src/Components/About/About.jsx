import React from 'react'
import styled from 'styled-components'
import Cube from '../Test/Cube'
import { OrbitControls} from '@react-three/drei';
import { Canvas} from '@react-three/fiber';
import Test from '../Test/Test';

const Section =styled.div`
height:100vh;
scroll-snap-align: center;
display:flex;
justify-content:center;
@media only screen and (max-width: 796px) {
    align-items:center;
    margin:10px;
}
`
const Container =styled.div`
    height:100vh;
    scroll-snap-align: center;
    width:70%;
    display:flex;
justify-content:space-between;
@media only screen and (max-width: 796px) {
    flex-direction:column-reverse;
}
    
`
const Left =styled.div`
width:45%;
@media only screen and (max-width: 796px) {
    width:100%;
    padding:0 ;
    margin:0;  
    display:none
    ;  
}
`
const Title =styled.h1`
font-size:70px;
@media only screen and (max-width: 796px) {
font-size:60px;
     
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
color:#da4ea2;
`
const Desc =styled.p`
font-size:24px;
color:lightgray;

`
const Button =styled.button`
width:120px;
padding:10px ;
background-color:#da4ea2;
color:white;
border:none;
border-radius:5px;
cursor:pointer;
transition:all 0.5s ;
    &:hover{
        background-color:white;
        color:#da4ea2;
    }
`

const Right =styled.div`
display:flex;
flex-direction:column;
justify-content:center;
gap:20px;
@media only screen and (max-width: 796px) {
        align-items:center;
        text-align:center;
        padding: 0 0 15px 0;
    ;  
}



`
function About() {
return (
    <Section>
        <Container>
            <Left>
                <Test/>
            </Left>       
            <Right>
                <Title>
                    Think OutSide The Box
                </Title>
                <WhatWeDo>
                    <Line src="./img/line.png"/>
                    <Subtitle>
                    What Are We
                    </Subtitle>
                </WhatWeDo>
                <Desc>
                    We Are A Group Of Developers Who Can Help you Achive Your Goals
                </Desc>

                <Button>
                    See Our Works
                </Button>
            </Right>
        </Container>
    </Section>
)
}

export default About