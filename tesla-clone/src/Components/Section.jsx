import React from 'react'
import Fade from 'react-reveal/Fade';

import { styled ,css} from 'styled-components'
const Wrapper=styled.div`
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${props => props.bgimg});
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
margin: 10px 20px;
color: white;
border: none;
cursor: pointer;
`
const Rightbutton=styled(Leftbutton)`
background: white;
opacity: 0.65;
color: black;
  
`

const Buttons=styled.div`
display: flex;
flex-direction: column;
    
`
const Buttondiv=styled.div`
@media (max-width:768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
    
`



const Downarrow=styled.img`
height: 47px;
animation: animatedown infinite 1.5s;
    
`

const Para=styled.p`
font-size: 20px;
    
`




const Section = ({title,description,leftBtnText,rightBtnText,backgroundImg,arrowimg}) => {
  return (
    <>
    <Wrapper bgimg={backgroundImg}>
         <Fade bottom>
       <Top>
     <Header>
        {title}
     </Header>
     <Para>
        {description}
     </Para>
     </Top>
     </Fade>
     <Buttons>

     <Fade bottom>

        <Buttondiv>
        <Leftbutton>
            {leftBtnText}
        </Leftbutton>
        {rightBtnText && <Rightbutton>
        {rightBtnText}
        </Rightbutton>}
        {/* if the right btntext prop is there then and only show the right buttons .however if rightbutton props is not passed in that case right button will not be visible but the space would be there .like in the case of the arrow*/}
        </Buttondiv>
        <Downarrow src={arrowimg}></Downarrow>
        </Fade>
     </Buttons>
     
    </Wrapper>
    
    </>
  )
}

export default Section
