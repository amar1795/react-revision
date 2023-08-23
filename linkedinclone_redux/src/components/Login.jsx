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

export default Login
