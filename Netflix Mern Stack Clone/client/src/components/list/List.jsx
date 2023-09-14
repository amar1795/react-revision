import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import React, { useRef, useState } from 'react'
import ListItem from '../ListItem/ListItem'
import "./list.scss"
const List = () => {
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
        <span className='listTitle'>Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className='sliderArrow Left' onClick={()=>handleClick("left")} 
            style={{display:!isMoved && "none"}}/>
            <div className="container" ref={listRef}>
                <ListItem index={0}/>
                <ListItem index={1}/>
                <ListItem index={2}/>
                <ListItem index={3}/>
                <ListItem index={4}/>
                <ListItem index={5}/>
                <ListItem index={6}/>
                <ListItem index={7}/>
                <ListItem index={8}/>
                <ListItem index={9}/>
                
                
                
                
              
                
            </div>
            <ArrowForwardIosOutlined className='sliderArrow Right'onClick={()=>handleClick("right")}/>
        </div>
     
    </div>
  )
}

export default List
