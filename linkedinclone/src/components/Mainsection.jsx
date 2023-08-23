import React from 'react'
import { styled } from 'styled-components';
import backgroundimg from "../images/manthinking.svg"

const Container =styled.div`
position: relative;
height: 120vh;
/* width: 80%; */
/* margin: auto; */
top: 40px;


/* background-color: #579933; */
`
const Section1 =styled.div`
    max-width: 1128px;
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    margin: 0 auto;
    /* margin: auto; */

`
const Left =styled.div`
background-color: red;
width: 50%;
height: 100%;

`

const Right =styled.div`
background-color: green;
width: 50%;
/* background: green; */
height: 100%;
`



const H1 =styled.h1`
font-size: 56px;
font-weight: 100;
color: #8d5748;
`
const Button =styled.button`

height: 50px;
border-radius: 30px;

`


const Signin =styled.button`

height: 50px;
border-radius: 30px;
margin-top: 30px;
background-color:  #327fcc ;
border: none;
color: white;
font-size: 16px;


`
const Googlebtn =styled.button`

height: 50px;
border-radius: 30px;
margin-top: 10px;
background: white;
font-size: 16px;


`
const Joinnowbtn =styled.button`

height: 50px;
border-radius: 30px;
margin-top: 30px;
background: white;
font-size: 16px;
`





const Hr =styled.div`
display: inline-block;
width: 100%;
height: 1px;
background-color: black;

`
const Ordiv =styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 20px 0px;


`
const Form =styled.form`
display: flex;
margin-top: 25px;
flex-direction: column;
padding-right: 30%;

`
const A =styled.a`
margin: 20px 0px;
text-decoration: none;
font-weight: bold;
font-size: 20px;
color:  #327fcc ;

`
const Mainsectionimg =styled.img`
height: 600px;
/* position: relative;
top: 0;
right: -13%; */
`

const Input =styled.input`
display: flex;
margin-top: 15px;
flex-direction: column;
height: 30px;
margin: 10px 0px;
padding: 10px 18px;
border: 2px solid black;
border-radius: 10px;
 
&:hover{
    outline: 2px solid blue;
    outline-offset: -15px;
}

`





const Mainsection = () => {
  return (
    <Container>
     <Section1>
        <Left>
          <H1>Welcome to your professional community</H1>
          <Form action="">
          <label >Email address</label>
              <Input type="text" />
          <label>Password</label>    
              <Input type="password" />
          

          <A href="#">forgot Password ?</A>
          <Signin>Sign in</Signin>
    
          <Ordiv>
          <Hr></Hr> or <Hr></Hr>
          </Ordiv>
          
          <Googlebtn>Continue With Google</Googlebtn>
          <Joinnowbtn>New to Linkedin ? Join now </Joinnowbtn>
          </Form>
        </Left>

        <Right>
      
          <Mainsectionimg src={backgroundimg}>

          </Mainsectionimg>
        </Right>
    </Section1>
    </Container>
  )
}

export default Mainsection
