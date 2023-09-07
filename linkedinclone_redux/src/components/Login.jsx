import React from 'react'
import { styled } from 'styled-components'
const Login = () => {
  return (
    <Container>
        <Nav>
            <a href="/">
                <img src="/images/login-logo.svg" alt="" />
            </a>
            <div>
                <Join>Join now</Join>
                <Signin>Sign in</Signin>
            </div>
        </Nav>
        <Section>
            <Hero>
                <h1>Welcome to your professional Community</h1>
                <img src="/images/login-hero.svg" alt="" />
            </Hero>
            <Form>
                
                <Google>
                    <img src="/images/google.svg" alt="" />
                    Sign in with Google
                </Google>
            </Form>
        </Section>
    
    </Container>
  )
}

const Container=styled.div`
    
`
const Nav=styled.div`
     max-width: 1128px;
    margin: auto;
    width: 100%;
    padding: 12px 0px 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;

    & > a{
        width: 135px;
        height: 34px;
        @media (max-width:768px){
            padding: 0px 5px;
        }
    }
`
const Join=styled.a`
font-size: 16px;
padding: 10px 12px;
text-decoration: none;
border-radius: 4px;
color: rgba(0,0,0,0.6);
margin-right: 12px;
cursor: pointer;

&:hover{
    background-color: rgba(0,0,0,0.08);
    border-radius: 20px;
}

  
`
const Signin=styled.a`
box-shadow: inset  0 0 0 1px #0a66c2;
/* border: 1px solid #0a66c2; */
color: #0a66c2;
border-radius: 24px;
transition-duration: 137ms;
font-size: 16px;
font-weight: 600;
line-height: 40px;
padding: 10px 24px;
text-align: center;
background-color: rgba(0,0,0,0);
cursor: pointer;

&:hover{
    background-color: rgba(112,181,249,0.15);
    color: #0a66c2;
    
}
  
`

const Section=styled.div`
display: flex;
align-content: start;
min-height: 700px;
padding-bottom: 138px;
padding-top: 40px;
padding: 60px 0;
position: relative;
flex-wrap: wrap;
width: 100%;
max-width: 1128px;
align-items: center;
margin: auto;
@media(max-width:768px)
{
    margin: auto;
    min-height: 0px;
}
    
`

const Hero=styled.div`
width: 100%;
h1{
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media(max-width :768px)
    {
        text-align: center;
        font-size: 20px;
        width: 100%;
        line-height: 2;

    }
}

img{
        width: 700px;
        height: 670px;
        position: absolute;
        bottom: -2px;
        right:-150px;

        @media(max-width:768px)
        {
            top: 230px;
             width:initial ;
             position: initial;
             height: initial;
             /* the initial value reset it to its original place */
        }
    }

    
`

        const Form=styled.div`
        margin-top: 100px;
        width: 450px; 
       
            justify-content: center;
        @media(max-width:768px)
        {
        margin: auto;

        }  
`



    const Google=styled.button`
        display: flex;
        justify-content: center;
        background-color: #fff;
        align-items: center;
        height: 56px;
        width: 100%;
        border-radius: 28px;
        /* vertical-align: middle; */
        z-index: 0;
        transition-duration: 167ms;
        font-size: 20px;
        color: rgba(0,0,0,0.6);
        &:hover{
            background-color: rgba( 207,207,207,0.25);
            color: rgba(0,0,0,0.75);
        }
    `





export default Login
