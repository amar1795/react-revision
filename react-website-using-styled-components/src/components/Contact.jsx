import React from 'react'
import { styled } from 'styled-components'
import map from '../images/map.png'
import phone from '../images/phone.png'
import send from '../images/send.png'


const Container=styled.div`
    height:90%;  
    
`
const Wrapper=styled.div`
height: 100vh;
display: flex;
align-items: center;
@media only screen and (max-width:480px)
  {
    height: 50vh;
   flex-direction: column;
  }
`
const Formcontainer=styled.div`
width: 50%;
display: flex;
flex-direction: column;
padding: 20px;
`


const Title=styled.h1`
padding: 20px;
font-size: 60px;
@media only screen and (max-width:480px)
  {
    font-size: 30px;
    width: 100%;
    padding: 0px;
  }
`

const Input=styled.input`
    padding: 20px;
    font-size: 20px;
    margin: 20px;
    @media only screen and (max-width:480px)
  {
   padding: 5px;
   margin: 5px;
   font-size: 15px;
  }     
`
const Textarea=styled.textarea`
   /* padding: 20px; */
   height: 200px;
   font-size: 20px;
   color: grey;
   @media only screen and (max-width:480px)
  {
        font-size: 15px;
        height: 80px;    
  }

`
const Leftform=styled.div`
width: 50%;
display: flex;
/* align-items: center; */
/* justify-content: center; */
flex-direction: column;
margin-right: 20px;
height: 100%;
@media only screen and (max-width:480px)
  {
    width: 120%;
    margin-left: 20px;

  }
    
`
const Form=styled.form`
display: flex;
align-items: center;
height: 100%;
/* justify-content: center; */
@media only screen and (max-width:480px)
  {
    height: 50%;

    flex-direction: column;
  }
    
`

const Rightform=styled.div`
display: flex;
flex-direction: column;
width: 50%;
height: 100%;
@media only screen and (max-width:480px)
  {
   width: 116%;
  }
    
`
const Button=styled.button`
margin-top: 20px;
padding: 20px 40px;
font-size: 20px;
font-weight: bold;
border-radius: 20px;
background-color: blueviolet;
border: none;
color: white;
cursor: pointer;
@media only screen and (max-width:480px)
  {
    margin-top: 10px;
    padding: 10px 20px;
    font-size: 10px;
    width: 50%;
    margin-left: 70px;
  }
`

const AdressItem=styled.div`
padding: 20px;
@media only screen and (max-width:480px)
  {
    width: 120%;
    padding: 10px;
  }
`
const Icon=styled.img`
   height: 40px;
   padding-right: 20px;
   @media only screen and (max-width:480px)
  {
    height: 25px;
    padding-right: 10px;

  }
   
`
const Text=styled.span`
font-size: 20px;
padding: 10px;
font-weight: bold;
@media only screen and (max-width:480px)
  {
    font-size: 15px;
    width: 100%;
   
  }

`

const Adrrescontainer=styled.div`
    width: 50%  ;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`



const Contact = () => {
  return (
    <Container>
        <Wrapper>
            <Formcontainer>
                <Title>
                    Questions? <br />Let's get in touch
                </Title>
            <Form>
                <Leftform>
                    <Input type="text" placeholder='Your Name'/>
                    <Input type="text" placeholder='Your Email'/>
                    <Input type="text" placeholder='Subject'/>

                </Leftform>
                <Rightform>
                    <Textarea  placeholder='message'>
                        Your Message
                    </Textarea>
                    <Button>
                        Send
                    </Button>

                </Rightform>
            </Form>
            </Formcontainer>
            <Adrrescontainer>
                <AdressItem>
                    <Icon src={map}/>
                    <Text>123 Park Avenue Street,New York, USA</Text>
                </AdressItem>
                <AdressItem>
                    <Icon src={phone}/>
                    <Text>+012 345 6789</Text>,
                    <Text>+012 345 6789</Text>
                </AdressItem>
                <AdressItem>
                    <Icon src={send}/>
                    <Text>Test@test.com</Text>,
                    <Text>Test@test.com</Text>
                </AdressItem>

            </Adrrescontainer>



        </Wrapper>
      
    </Container>
  )
}

export default Contact
