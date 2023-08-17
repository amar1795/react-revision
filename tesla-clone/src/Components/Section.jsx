import React from 'react'

import { styled ,css} from 'styled-components'
import image from '../images/model-s.jpg'

const Wrapper=styled.div`
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-image: url(${image}) ;
`


const Header=styled.h1`
    
`


const Section = () => {
  return (
    <Wrapper>
     <Header>
        Model S
     </Header>
     <p>
        Order Online for Touchless Delivery
     </p>
     {/* <Image src={image}/> */}
        
   
    </Wrapper>
  )
}

export default Section
