import { ArrowBackIosOutlined, ArrowForwardIos, ArrowForwardIosOutlined } from '@mui/icons-material'
import React, { useRef } from 'react'
import ListItem from '../ListItem/ListItem'
import "./list.scss"
const List = () => {
    const listRef=useRef()

    const handleClick=(direction)=>{
         let distance=listRef.current.getBoundingClientRect().x-50;

        if(direction ==="left")
        {
            listRef.current.style.transform=`translateX(${230+distance}px)`
        }
        
    }
  return (
    <div className='list'>
        <span className='listTitle'>Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className='sliderArrow Left' onClick={()=>handleClick("left")} />
            <div className="container" ref={listRef}>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
              
                
            </div>
            <ArrowForwardIosOutlined className='sliderArrow Right'onClick={()=>handleClick("right")}/>
        </div>
     
    </div>
  )
}

export default List
