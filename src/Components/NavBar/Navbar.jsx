import React from 'react'
import styled from 'styled-components'
const Section =styled.div`
display:flex;
justify-content:center;
scroll-snap-align: center;
@media only screen and (max-width: 796px) {
width:100%;
}

`
const Container =styled.div`
width:1400px;
display:flex;
justify-content:space-between;
align-items:center;
@media only screen and (max-width: 796px) {
    width:100%;
    padding:0 20px;
}

`
const Links =styled.div`
display:flex;
align-items:center;
gap:50px;
`
const Logo =styled.img`
width:100px;
`
const List =styled.ul`
list-style:none;
display:flex;
gap:50px;
align-items:center;
@media only screen and (max-width: 796px) {
    display:none;
    }

`

const ListItem =styled.li`
cursor:pointer;
transition:all 0.5s ;

&:hover{
    color:#BC7AF9;
    transform:scale(1.2);
}
`
const Icon =styled.img`

width:20px;
cursor:pointer;
`
const Icons =styled.div`
display:flex;
align-items:center;
gap:20px;
`
const Button =styled.button`
width:100px;
padding:10px ;
background-color:#BC7AF9;
color:white;
border:none;
border-radius:5px;
transition:all 0.5s ;
cursor:pointer;
    &:hover{
        background-color:white;
        color:#BC7AF9;
    }
`

const Navbar = () => {
return (
    <Section>
        <Container>
            <Links> 
                <Logo src="./img/UN-removebg-preview.png"/>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>About</ListItem>
                    <ListItem>Works</ListItem>
                    <ListItem>Contact</ListItem>

                </List>
            </Links>
            <Icons> 
                <Icon src="./img/search.png"/>
                <Button>Hire Now</Button> 

            </Icons>
        </Container>
    </Section>
)
}

export default Navbar