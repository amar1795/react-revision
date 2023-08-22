import React from 'react'
import { styled } from 'styled-components';
import linkedinlogo from "../images/LinkedIn-Logo.svg"
import articles from '../images/articles.svg'
import learning from '../images/learning.svg'
import jobs from '../images/job.svg'
import peopls from '../images/peopls.svg'


const Container =styled.div`
position: relative;
height: 100px;
width: 80%;
margin: auto;
display: flex;
justify-content: space-between;
background-color: #ffffff;
/* background-color: rebeccapurple; */
`



const Left =styled.div`

height:100px;
width: 100px;
`
const Img =styled.img`
height:100px;
width: 130px;

`


const Right =styled.div`
display: flex;
align-items: center;

`
const Div =styled.div`
display: flex;
align-items: center;
flex-direction: column-reverse;
margin: 0px 10px;
color: grey;
cursor: pointer;
&:hover {
   color: black;
  }

`
const Iconimg =styled.img`
  height: 21px;
  width: 20px;
  margin-bottom: 5px;

`
// const articles =styled.svg{
//     fill:re
// }


const Button =styled.button`
padding: 14px 24px;
    border-radius: 27px;
    margin: 0px 5px;
    cursor: pointer;
    border: none;
    color: #327fcc;
    font-weight: bold;
    font-size: 1rem;
    border: 1px solid #327fcc ;

`
const Buttonleft =styled.button`
padding: 14px 24px;
    border-radius: 27px;
    margin: 0px 5px;
    cursor: pointer;
    border: none; 
    font-weight: bold;
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.9);
    background-color: #ffffff;
    
    &:hover {
    /* Define the styles for the hover effect */
    background-color: rgba(1, 1, 1, 0.04);
    color: #024180;
    }

`

const Buttonright =styled.button`
padding: 14px 24px;
    border-radius: 27px;
    margin: 0px 5px;
    cursor: pointer;
    border: none;
    color: #327fcc;
    font-weight: bold;
    font-size: 1rem;
    border: 1px solid #327fcc ;
    background-color: #ffffff;
    &:hover {
    /* Define the styles for the hover effect */
    background-color: rgba(111, 180, 247, 0.1);
    color: #024180;
  }

`


const Hl =styled.div`
height: 5vh;
background-color: #615f5f;
width: 1px;
margin: 0px 20px;

`

const Navbar = () => {
  return (
    <Container>
      <Left>
      <Img src={linkedinlogo}></Img>

    </Left> 

    <Right>
        <Div><span>Articles</span><Iconimg src={articles}  alt="" /></Div>
        <Div><span>People</span><Iconimg src={peopls} alt="" /></Div>
        <Div><span>Learning</span><Iconimg src={learning} alt="" /></Div>
        <Div><span>Jobs</span><Iconimg src={jobs} alt="" /></Div>
           
           <Hl></Hl>
        <div>
        <Buttonleft>Join now</Buttonleft>
        <Buttonright>Sign in</Buttonright>
        </div>
        
    </Right> 


      </Container>
  )
}

export default Navbar

/* button hover bgcolor :rgba(111, 180, 247, 0.1) */
/* color:#024180 */
