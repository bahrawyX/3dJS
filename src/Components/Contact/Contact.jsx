import React, { useState } from 'react'
import styled from 'styled-components'
import Map from '../Map/Map.jsx'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Section =styled.div`
height:100vh;
scroll-snap-align: center;

`
const Container =styled.div`
width:100%;
display:flex;
height:100%;
justify-content:space-between;
gap:50px;
@media only screen and (max-width: 796px) {
    flex-direction:column;
}


`
const Title =styled.h1`
font-weight:200;`


const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%; /* Ensure the Left container takes full height */
  @media only screen and (max-width: 796px) {
    
    text-align: center; /* Center the form when screen width is below 796px */
    justify-content: center;
    align-items: center;

  }
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media only screen and (max-width: 796px) {
    width: 300px;
    margin: 0 auto; /* Center the form horizontally */
  }
`;



const Input =styled.input`
padding:20px;
background-color:#e8e6e6 ;
border:none;
border-radius:5px;
&:focus{
    outline:none;
}
&::placeholder{
    color: #999;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
}

`
const Textarea =styled.textarea`
padding:20px;
background-color:#e8e6e6 ;
border:none;
border-radius:5px;
resize:none;
&:focus{
    outline:none;
}
&::placeholder{
    color: #999;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
}


`
const Button =styled.button`
width:100px;
padding:10px ;
font-weight:bold;
background-color:#da4ea2;
color:white;
border:none;
border-radius:5px;
cursor:pointer;
padding:15px;
transition:all 0.5s ;
cursor:pointer;
    &:hover{
        background-color:white;
        color:#da4ea2;
    }
    @media only screen and (max-width: 796px) {
        width:100%
             
        }


`

const Right =styled.div`
flex:1;
@media only screen and (max-width: 796px) {
         text-align:center;
         justify-content:center;
        padding:22px;
    }

`
function Contact() {
    
    const ref=useRef();
    const [Success, SetSuccess]=useState(false);
    
    const handleSubmit=(e)=>{
        e.preventDefault()     
        emailjs.sendForm('service_d56hp4w', 'template_zq6b8yo', ref.current, 'hzi0DAICHZZ56HjX6')
        .then((result) => {
            console.log(result.text);
            SetSuccess(true);
        }, (error) => {
            console.log(error.text);
            SetSuccess(false);
        });
    }

return (
    <Section>
        <Container>
            <Left>
                <Form ref={ref} onSubmit={handleSubmit}>
                    <Title>
                        Contact
                    </Title>
                    <Input placeholder="Name" name='name'/>
                    <Input placeholder="Email" name='Email'/>
                    <Textarea placeholder="Write Your Message" name='message' rows={10}></Textarea>
                    <Button type='submit'>Send ^-^</Button>
                    {
                        Success && <span>Message Sent Successfully</span> 
                    }
                </Form>
            </Left>
            <Right>
                <Map />
            </Right>
        </Container>
    </Section>
)
}

export default Contact