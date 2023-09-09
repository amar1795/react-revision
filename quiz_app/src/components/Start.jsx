import React, { useState } from 'react'
import {useRef} from "react";


const Start = ({setUsername}) => {
    const inputRef = useRef();
    // const [name,setName] =useState(null)
    
  const handleClick = () => {
    console.log("the output value is"+ inputRef.current.value)
    // {name && setUsername(name)  }
    inputRef.current.value && setUsername(inputRef.current.value);
  };
  return (
    <div className='start'>
              <input
        className="startInput"
        placeholder="enter your name"
        ref={inputRef}
        // onChange={(e)=>{setName(e.target.value)}}
        // we can also use usestae and onchange for the specific valhue of input
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
      
    </div>
  )
}

export default Start
