import React from 'react'
import Price from './Price'
import { styled } from 'styled-components'


const Container=styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
@media only screen and (max-width:480px)
  {
   flex-direction: column;

  }

/* display: grid;
position: absolute;
top: 0;
left:25%;
grid-template-columns: repeat(4,1fr);
align-items: center; */


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
