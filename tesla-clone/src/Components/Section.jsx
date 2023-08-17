import React from 'react'

import { styled ,css} from 'styled-components'
import image from '../images/model-s.jpg'
import arrowimg from '../images/down-arrow.svg'
const Wrapper=styled.div`
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${image}) ;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Top=styled.div`
  padding-top: 20vh;
`
const Header=styled.h1`
font-weight: bold;
`

const Leftbutton=styled.button`
text-transform: uppercase;
padding: 15px 20px;
background-color: rgba(23,36,32,0.8);
width: 220px;
margin: auto;
border-radius:20px;
margin: 20px;
color: white;
border: none;
cursor: pointer;
`
const Rightbutton=styled(Leftbutton)`

  
`

const Buttons=styled.div`
display: flex;
flex-direction: column;
    
`
const Downarrow=styled.img`
height: 47px;
animation: animatedown infinite 1.5s;
    
`

const Para=styled.p`
font-size: 20px;
    
`




const Section = () => {
  return (
    <Wrapper>
     <Top>
     <Header>
        Model S
     </Header>
     <Para>
        Order Online for Touchless Delivery
     </Para>
     </Top>
     <Buttons>
        <div>
        <Leftbutton>
            custom order
        </Leftbutton>
        <Rightbutton>
        Existing Inventory
        </Rightbutton>
        </div>
        <Downarrow src={arrowimg}></Downarrow>
     </Buttons>
        
   
    </Wrapper>
  )
}

export default Section
