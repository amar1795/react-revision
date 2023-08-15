import React from 'react'
import { styled } from 'styled-components'

const Container= styled.div`
    height:50px;
  /* color: #120606; */
`
const Wrapper= styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`

const Logo=styled.h1`
  text-decoration: underline crimson  ;
  font-weight: bold;
  
`
const Left=styled.div`
width: 60%;
display: flex;
align-items: center;
/* background-color: bisque; */
justify-content: space-between;
  
`
const Menu=styled.ul`
display: flex;
align-items: center;
`
const MenuItem=styled.li`
margin-right: 20px;
font-size: 20px;
list-style: none;
font-weight: bold;
color: grey ;
cursor: pointer;
  
`
const Button=styled.button`
padding :10px 20px ;
background-color: crimson;
font-weight: bold;
border: 2px solid white;
border-radius: 10px;
cursor: pointer;
font-size: 20px;
color: white;
border: none;
`


const Navbar = () => {
  return (
    <Container>
    <Wrapper>
    <Left><Logo>Digital Marketing Agency</Logo>
    <Menu>
      <MenuItem>Home</MenuItem>
      <MenuItem>Features</MenuItem>
      <MenuItem>Services</MenuItem>
      <MenuItem>Pricing</MenuItem>
      <MenuItem>Contacts</MenuItem>
   </Menu></Left>
    <Button>Join Today</Button>
    </Wrapper>
    </Container>
  )
}

export default Navbar
