import React from 'react'
import Section from './Section'
import { styled } from 'styled-components'
import models from '../images/model-s.jpg'
import model3 from '../images/model-3.jpg'
import modelx from '../images/model-x.jpg'
import modely from '../images/model-y.jpg'
import solarroof from '../images/solar-roof.jpg'
import arrowimg from '../images/down-arrow.svg'


const Container=styled.div`
    height: 100vh;
    /* background-color: rebeccapurple; */
`

const Home = () => {
  return (
    <Container>
      <Section
      title="Model S"
      backgroundImg={models}
      arrowimg={arrowimg}
      description="Order online for touchless delivery"
      leftBtnText="Custom Order"
      rightBtnText="Existing Inventory"
      
      />
    <Section
        title="Model Y"
        backgroundImg={modely}
        arrowimg={arrowimg}
        description="Order online for touchless delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        
        />
    <Section
        title="Model 3"
        backgroundImg={model3}
        arrowimg={arrowimg}
        description="Order online for touchless delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        
        />
        <Section
        title="Model X"
        backgroundImg={modelx}
        arrowimg={arrowimg}
        description="Order online for touchless delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"

        />


    <Section
        title="Accesorries"
        backgroundImg={solarroof}
        description="Order online for touchless delivery"
        leftBtnText="Custom Order"
        
        
        />

      
    </Container>



  )
}

export default Home
