import React from 'react'
import { styled } from 'styled-components'

const Container=styled.div`
height: 10%;
border: 2px solid black;
background-color: blueviolet;

`
const Wrapper=styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`
const List=styled.ul`
display: flex;
list-style: none;
@media only screen and (max-width:480px)
  {
    margin-right: 5px;
    padding: 0px;

  }
`
const Listitem=styled.li`
padding: 25px 10px;
font-size: 20px;
cursor: pointer;
@media only screen and (max-width:480px)
  {
    padding:20px 5px;
  
    font-size: 14px;

  }
`
const Copyright=styled.span`
padding-right: 20px;
font-size: 20px;
@media only screen and (max-width:480px)
  {
    padding-right: 10px;
    font-size: 12px;
  }
`

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <Listitem>Guide</Listitem>
          <Listitem>Support</Listitem>
          <Listitem>API</Listitem>
          <Listitem>Community</Listitem>
        </List>
        <Copyright>
          Copyright &copy;Digital Marketting Agency
        </Copyright>
      </Wrapper>
      
    </Container>
  )
}

export default Footer
