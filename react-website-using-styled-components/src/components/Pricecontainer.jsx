import React from 'react'
import Price from './Price'
import { styled } from 'styled-components'


const Container=styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;


`

const Pricecontainer = () => {
  return (
    <Container>
        <Price/>
        <Price/>
        <Price/>
      
    </Container>
  )
}

export default Pricecontainer
