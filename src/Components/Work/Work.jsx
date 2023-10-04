import React, { useState } from 'react'
import styled from 'styled-components'
import Web from './Web'
import Product from './Product'
import Development from './Development'
import CarDesign from './CarDesign'
const Data=[
    {
        id:1,
        title:"Web Development"

    },
    {
        id :2,
        title:"Development"

    },
    {
        id:3,
        title:"illustration"
        
    },
    {
        id:4,
        title:"Car Design"
    }   ,
    {
        id:5,
        title:"Social Media"
    }
]

const Section =styled.div`
height:100vh;
scroll-snap-align: center;
display:flex;
justify-content:center;
position:relative;  
color:#000;
font-size: smaller;
font-weight: 400;





`
const Container =styled.div`
width:70%;
display:flex;
justify-content:space-between;
@media only screen and (max-width: 796px) {
  width:100%;
  flex-direction:column;
       
  }
`
const Left =styled.div`
display:flex;
align-items:center;
@media only screen and (max-width: 796px) {
padding:20;
justify-content:center;
text-align:center;
padding-top:20px;
margin-top:20px;
  }
`
const List =styled.ul`
list-style:none;
display:flex;
flex-direction:column;
gap:35px;

`
const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  &:after {
    content: '${(props) => props.text}';
    position: absolute;
    top: 0;
    left: 0;
    color: #BC7AF9;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
    -webkit-text-stroke: 1px transparent;
  }

  &:hover {
    &:after {
      animation: MoveText 0.8s linear forwards;
      -webkit-text-stroke: 0px #BC7AF9;

    }
  }

  @keyframes MoveText {
    to {
      width: 100%;
    }
  }
  @media only screen and (max-width: 796px) {
    font-size:24px;
    color:#fff;
    -webkit-text-stroke: 0px transparent;
         
    }
`;



const Right =styled.div`
display:flex;
align-items:center;
width:42%;
justify-content:center;
@media only screen and (max-width: 796px) {
  width:100%;
  padding:20;
  justify-content:center;
  font
  }
`

function Work() {
    const [selected,setSelected]=useState("Web Development")
    let componentToRender;

    if (selected === "Web Development") {
      componentToRender = <Web />;
    } else if (selected === "Development") {
      componentToRender = <Development />;
    } 
     else if (selected === "Car Design") {
      componentToRender = <CarDesign />;
    } else {
      componentToRender = <Product />;
    }
    
    return (
      <Section>
        <Container>
          <Left>
            <List>
              {Data.map((item) => (
                <ListItem
                  text={item.title}
                  key={item.id}
                  onClick={() => {
                    setSelected(item.title);
                  }}
                >
                  {item.title}
                </ListItem>
              ))}
            </List>
          </Left>
          <Right>{componentToRender}</Right>
        </Container>
      </Section>
    );
    
}

export default Work