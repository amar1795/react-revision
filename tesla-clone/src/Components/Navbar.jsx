import React, { useState } from 'react'
import { styled ,css} from 'styled-components'
import img from  "../images/logo.svg"
import { useSelector } from 'react-redux';
import { selectcars } from '../features/counter/counterSlice';


const Container=styled.div`
height: 60px;
position: fixed;
padding: 20px;
width: 100%; 

z-index: 1;
 /*either width can be set to 100% or  */
display: flex;
justify-content: space-between;
align-items: center;

`
const RightMenu=styled.ul`
display: flex;
align-items: center;


`
const MiddleMenu=styled.ul`
display: flex;
margin-left: 15%;
@media (max-width:768px){
        display: none;
}
`




const MenuItem=styled.li`
list-style: none;
padding: 10px;
cursor: pointer;
font-weight: bold;
font-size: 20px;

`

const Menuicon=styled.div`
padding-left: 10px;
cursor: pointer;


`
const BurgerNav=styled.div`

position: absolute;
top: 0;
right: 0;
background-color: white;
height: 100vh;
width: 320px;
padding: 0px 40px;
/* z-index: 16; */
transform: ${props=>props.show ? 'TranslateY(0)' :'TranslateX(100%)'};
transition: transform 0.2s ease-in;
/* can also put transition as transition : 0.2s , so any changes in the nav will be with the animation in the transition */
li{
    list-style: none;
    padding: 10px 0px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
   

};

a{
    text-decoration: none;
    
}


`

const Closewrapper=styled.div`

display: flex;
justify-content: flex-end;
`

const Closebutton=styled.div`
margin: 20px;
i {
    cursor: pointer;
    
}




`



const Navbar = () => {
        const cars=useSelector(selectcars)
    const [burgerstatus,setburgerstatus]=useState(false);
  return (
    <Container>
        <a>
            <img src={img} alt="" />
        </a>
        <MiddleMenu>
            {cars && cars.map((car,index)=>(
            <MenuItem  key={index}>{car}</MenuItem>
            ))}
               
        </MiddleMenu>
        <RightMenu>
           
        <MenuItem>SHOP </MenuItem>
        <MenuItem>TESLA ACCOUNT</MenuItem>
        <Menuicon><i class="fa-solid fa-bars fa-xl" onClick={()=>setburgerstatus(!burgerstatus)}></i></Menuicon>
        {/* if do not use a function inside a onclick funtion when passing parameter inside a function then will get the error Too many re-renders. React limits the number of renders to prevent an infinite loop. */}
        </RightMenu>

        <BurgerNav show={burgerstatus}>
            <Closewrapper>
                <Closebutton>
                <i style={{cursor:"pointer"}} class="fa-solid fa-xmark fa-2xl" onClick={()=>setburgerstatus(!burgerstatus)}></i>
                </Closebutton>
            </Closewrapper>
            {cars && cars.map((car,index)=>(
             <li><a href="#" key={index}>{car}</a></li>
            ))}
               
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-in</a></li>
            <li><a href="#">Cybertruck</a></li>
            <li><a href="#">Roadster</a></li>
            <li><a href="#">Cybertruck</a></li>
            <li><a href="#">Cybertruck</a></li>
            <li><a href="#">Cybertruck</a></li>

            
            
        </BurgerNav>

    </Container>
  )
}

export default Navbar
