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
`

const Input=styled.input`
    padding: 20px;
    font-size: 20px;
    margin: 20px;
   
`
const Textarea=styled.textarea`
   /* padding: 20px; */
   height: 200px;
   font-size: 20px;
   color: grey;

`


const Leftform=styled.div`
width: 50%;
display: flex;
/* align-items: center; */
/* justify-content: center; */
flex-direction: column;
margin-right: 20px;
height: 100%;
    
`
const Form=styled.form`
display: flex;
align-items: center;
height: 100%;
/* justify-content: center; */
    
`

const Rightform=styled.div`
display: flex;
flex-direction: column;
width: 50%;
height: 100%;
    
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
`

const AdressItem=styled.div`
padding: 20px;
`
const Icon=styled.img`
   height: 40px;
   padding-right: 20px;
   
`
const Text=styled.span`
font-size: 20px;
padding: 10px;
font-weight: bold;

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
