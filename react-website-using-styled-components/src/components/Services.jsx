import React from 'react'
import { styled } from 'styled-components'
import women from '../images/pngwing.com(1).png'
import Minicard from './Minicard'

const Container=styled.div`
height: 100vh;
display: flex;    
`
const Left=styled.div`
    width: 50%;
    
    /* background-color: bisque; */
`
const Image=styled.img`
    height: 100%;
    
    /* overflow: hidden; */
`
const Right=styled.div`
    width: 50%;
    /* background-color: aquamarine; */
`
const Wrapper=styled.div`
width: 100%;

    
`
const Title=styled.h1`
margin-top: 40px;
padding: 20px;
font-size: 50px;

    
`
const Description=styled.p`
font-size: 25px;
color: grey;
padding: 20px;
    
`

const Cardcontainer=styled.p`
width: 90%;
display: flex;
align-items: center;
/* justify-content: space-between; */
    
`
const Button=styled.button`
padding: 20px 30px;
font-size: 20px;
border-radius: 20px;
margin: 20px;
border: none;
background-color: blueviolet;
color: white;
    cursor: pointer;
`
const Services = () => {
  return (
    <Container>
        <Left>
            <Image src={women} />
        </Left>
        <Right>
            <Wrapper>
                <Title>
                Simple process to Start
                </Title>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique voluptatibus ipsum necessitatibus, eos reprehenderit architecto sed iusto mollitia, ea nobis fuga voluptate assumenda explicabo molestiae et cum molestias. Inventore sapiente commodi placeat nemo quidem!
                </Description>
                <Cardcontainer>
                    <Minicard></Minicard>
                    <Minicard></Minicard>
                    <Minicard></Minicard>
                </Cardcontainer>
                <Button>
                    How it Works
                </Button>
            </Wrapper>

        </Right>
    </Container>
  )
}

export default Services
