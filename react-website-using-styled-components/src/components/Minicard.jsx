import React from 'react'
import { styled } from 'styled-components'

import search from '../images/search.png'

const Container=styled.div`
/* height: 200px; */
width: 200px;
padding: 0 20px;
margin: 0px 20px;
border-radius: 10px;
-webkit-box-shadow: 11px 11px 41px -2px rgba(56,49,56,1);
-moz-box-shadow: 11px 11px 41px -2px rgba(56,49,56,1);
box-shadow: 11px 11px 41px -2px rgba(56,49,56,1);
display: flex;
flex-direction :column ;
align-items: center;
`
const Description=styled.p`
color: grey;
    
`
const Image=styled.img`
padding: 5px;

    
`

const Minicard = () => {
  return (
    <Container>
        <Image src={search}/> 
        <Description>
            Lorem ipsum dolor sit amet consectetur 
        </Description>
      
    </Container>
  )
}

export default Minicard
