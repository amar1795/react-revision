import React from 'react'
import { keyframes, styled } from "styled-components";



const Square =styled.div`
width:60px ;
height: 60px;
background-color: blueviolet;
opacity: 0.7;
position: absolute;
top:-60px;
left:-60px;
z-index: -1;
animation: square 2s linear alternate infinite;
@keyframes square{
  to{
    transform: translate(100vw,20vw);
  }
}
`
const Circle =styled.div`
width:100px ;
height: 100px;
border-radius: 50%;
background-color: #5eba03;
position: absolute;
top:200px;
left:-100px;
z-index: -1;
animation: circle 2s linear alternate infinite;
@keyframes circle{
  to{
    transform: translate(100vw,-100vh);
  }
}
`
const Rectangle =styled.div`
width:100px ;
height: 50px;
background-color: #14e3dd;
opacity: 0.7;
position: absolute;
bottom:-0;
left:-0;
z-index: -1;
animation: Rectangle 2s linear alternate infinite;
@keyframes Rectangle{
  to{
    transform: translate(90vw,-90vh);
  }
}
`



const Animatedshapes = () => {
  return (
    <div>
      <Square/>
      <Circle/>
      <Rectangle/>
      
    </div>
  )
}

export default Animatedshapes
