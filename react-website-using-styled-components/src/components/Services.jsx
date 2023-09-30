import React, { useState } from 'react'
import { styled } from 'styled-components'
import women from '../images/pngwing.com(1).png'
import Minicard from './Minicard'

const Container=styled.div`
height: 100vh;
display: flex;    
/* background-color: ${(props) => (props.open ? "black" : "transparent")}; Conditional background color */

&.blackBackground {
  background-color:  rgba(0,0,0,0.5);
  
}

&.transparentBackground {
  background-color: transparent;
}
@media only screen and (max-width:480px)
  {
   flex-direction: column;

  }
`
const Left=styled.div`
    width: 50%;
    position: relative;
    
    @media only screen and (max-width:480px)
  {
   display: none;

  }
`
const Image=styled.img`
    height: 100%;
    display: ${(props)=> props.open && "none"}
 
`
const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 55%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 30px;
  margin: auto;
  border-radius: 20px;  
  
 

  @media only screen and (max-width:480px)
  {
    width: 100%;
    left: 0px;
  }

  /* video was not being displayed because of the not supported video link */
`;


const Right=styled.div`
    width: 50%;
    @media only screen and (max-width:480px)
  {
   width: 100%;

  }
`
const Wrapper=styled.div`
width: 100%;
@media only screen and (max-width:480px)
  {
    
    height: 100%;
}
`
const Title=styled.h1`
margin-top: 40px;
padding: 20px;
font-size: 50px;
@media only screen and (max-width:480px)
  {
  margin-top: 20px;
  }
`
const Description=styled.p`
font-size: 25px;
color: grey;
padding: 20px;
@media only screen and (max-width:480px)
  {
   font-size: 20px;
  }   
`

const Cardcontainer=styled.p`
width: 90%;
display: flex;
align-items: center;
/* justify-content: space-between; */
    
`
const Button=styled.button`
padding: 20px 30px;
font-size: 20px;
border-radius: 20px;
margin: 40px 20px;
border: none;
background-color: blueviolet;
color: white;
    cursor: pointer;
`
const Modal=styled.div`
height: 100vh;
width: 100vw;
/* why have we use absolute here and why the backround coloyr works with position absolute only */
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.5);
`
const Closebutton=styled.button`    
position: absolute;
right: 5px;
top: 140px;
font-size: 20px;
border-radius: 20px;
border: none;
`


const Services = () => {
    const [open,setopen]=useState(false)
    const smallscreen=window.screen.width <=480 ?true :false
    console.log(smallscreen)

    const toggleBackgroundClass = () => {
    return open ? 'blackBackground' : 'transparentBackground';
  };

    /* above usestate will be used in styled components */
  return (
    /* when we click on the button the entire page will re render and upon the first rerender this toggleBackgroundClass will be called  */
    <Container className={toggleBackgroundClass()}>
        <Left>
            <Image open={open} src={women} />
            <Video open={open} autoPlay loop controls    src='https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761'
            />
        </Left>
        <Right>
            <Wrapper>
                <Title>
                Simple process to Start
                </Title>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique voluptatibus ipsum necessitatibus, eos reprehenderit architecto sed iusto mollitia, ea nobis fuga voluptate assumenda explicabo molestiae et cum molestias. Inventore sapiente commodi placeat nemo quidem!
                </Description>
                <Cardcontainer>
                    <Minicard></Minicard>
                    <Minicard></Minicard>
                    <Minicard></Minicard>
                </Cardcontainer>
                <Button onClick={()=>setopen(!open)}>
                    How it Works
                </Button>
            </Wrapper>
            {smallscreen && open && <Modal>
                <Video open={open} autoPlay loop src='https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761'
            />
            <Closebutton onClick={()=>setopen(false)}>Close</Closebutton>
            </Modal>
        }
        </Right>
    </Container>
  )
}

export default Services
