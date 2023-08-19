import React, { useState } from 'react'

const Inputform = ({add}) => {
    const [formvalue,setformvalue] =useState("")
     
    function handlesubmit(e) {
        e.preventDefault();
        add(formvalue);
        
        setformvalue(" ")
        
    }

  return (
    <form onSubmit={handlesubmit}>
        <button>+</button>
        <input type="text" placeholder='Enter your task' value={formvalue} onChange={e=>setformvalue(e.target.value)} />
        
    </form>
  )
}

export default Inputform
