import React from "react";
import { styled } from "styled-components";

import woman from '../images/pngegg.png'
import Animatedshapes from "./Animatedshapes";


const Container = styled.div`
  padding-top: 20px;
  height: calc(100vh - 50px);
  display: flex;
`;

const Left = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
font-size: 60px;
width: 60%;
 
`;
const Desc = styled.p`
width: 60%;
font-size: 20px;
padding: 20px;

`;
const Contact = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`;
const Info = styled.div`
width: 60%;
margin-top: 50px;
display: flex;
align-items: center;
justify-content: space-between;

`;



const Phone = styled.span`
font-size:20px;

`;
const ContactText = styled.span`


`;

const Button = styled.button`
font-size: 30px;
font-weight: bold;
padding: 20px;
background-color: darkblue;
border: none;
border-radius: 20px;
color: white;
cursor: pointer;
letter-spacing: 1px;

`;

const Right = styled.div`
  width: 40%;
  height: 100%;

`;
const Image = styled.img`
  /* background: no-repeat center center/cover; */
  height: 100%;
  overflow: hidden;

`;

const Intro = () => {
    
  return (
    <Container>
      <Left>
        <Title>Adventures in creative Age</Title>
        <Desc>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, deserunt! Rem, amet quaerat sapiente excepturi facere ipsum fugit laborum doloremque fuga vitae nobis?
        </Desc>
        <Info>
        <Button>Start a Project</Button>
        <Contact>
            <Phone>
                Call us on (012) 345 -6789
            </Phone>
            <ContactText>
                For any Question or Concern
            </ContactText>
        </Contact>
        </Info>
      </Left>
      <Right><Image src={woman} ></Image></Right>
      <Animatedshapes/>
    </Container>
  );
};

export default Intro;
