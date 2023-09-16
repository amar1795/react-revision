import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import React, { useRef, useState } from 'react'
import ListItem from '../ListItem/ListItem'
import "./list.scss"
const List = ({list}) => {
    const listRef=useRef()
    // using use ref to translate x axis when using slider
    const[isMoved,setIsMoved]=useState(false);
    const [slideNumber,SetslideNumber]=useState(0);

    const handleClick=(direction)=>{
         let distance=listRef.current.getBoundingClientRect().x-58;
         setIsMoved(true)
        if(direction ==="left" && slideNumber>0)
        {
            SetslideNumber(slideNumber-1)
            listRef.current.style.transform=`translateX(${230+ distance}px)`
        }

        if(direction ==="right" && slideNumber<4)
        {
            SetslideNumber(slideNumber+1)
            listRef.current.style.transform=`translateX(${-230 +distance}px)`
        }
        
        console.log(distance)
    }
    return (
    <div className='list'>
        <span className='listTitle'>{list.title}</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className='sliderArrow Left' onClick={()=>handleClick("left")} 
            style={{display:!isMoved && "none"}}/>
            <div className="container" ref={listRef}>
                {list.content.map((item,index)=>
                {
                    return  <ListItem index={index} item={item}/>
               
                })}
                
                
                
                
                
              
                
            </div>
            <ArrowForwardIosOutlined className='sliderArrow Right'onClick={()=>handleClick("right")}/>
        </div>
     
    </div>
  )
}

export default List
