import React from 'react'
import img from '../images/app_phone.png'




import { styled } from 'styled-components'
import Animatedshapes from './Animatedshapes'
const Container= styled.div`
    height:100vh;
    display: flex;
  
`
const Left=styled.div`
/* background-color: beige; */
    width: 50%;
`
const Image=styled.img`

margin-top: 10px;
    height: 90%;
    /* overflow: hidden; */
`
const Right=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
/* background-color: #0482c6; */

    width: 50%;
`
const Title=styled.span`
font-size: 70px;

`
const Subtitle=styled.span`
font-size: 24px;
font-style:italic;
font-weight: 100;
margin-top: 20px;

`
const Description=styled.p`
font-size: 20px;
margin-top: 30px;


`
const Button=styled.button`
font-size: 20px;
padding: 15px 20px;
font-weight: bold;
cursor: pointer;
margin-top: 20px;
width: 150px;
border-radius: 20px;
border: none;
background-color:blueviolet;
`







const Feature = () => {
  return (
    <Container>
        <Left>
            <Image src={img} />

        </Left>
        <Right>
            <Title>
                <b>Good </b>Design
                <br />
                <b>Good </b>Business

            </Title>
            <Subtitle>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, consequuntur.

            </Subtitle>
            <Description>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita vel dolor dolore error, assumenda inventore debitis deserunt tempora, voluptatum quam animi et minima saepe? Earum.</p>   
            </Description>
            <Button>
                Learn More
            </Button>
        </Right>
        <Animatedshapes/>
      
    </Container>
  )
}

export default Feature
