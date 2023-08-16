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
align-items: center;
list-style: none;
`
const Listitem=styled.li`
padding: 25px 10px;
font-size: 20px;
cursor: pointer;
`
const Copyright=styled.span`
padding-right: 20px;
font-size: 20px;
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
