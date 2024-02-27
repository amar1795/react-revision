import React, { useState } from 'react'

const Inputform = ({add}) => {
    const [formvalue,setformvalue] =useState("")
     
    function handlesubmit(e) {
        e.preventDefault();
        if (formvalue.trim().length !== 0 ){
          add(formvalue);
          setformvalue("")
        }
        else
        {
          alert ("please enter some task first ")
        }


    }

  return (
    <form onSubmit={handlesubmit}>
        <button>+</button>
        <input type="text"  placeholder='Enter your task' value={formvalue} onChange={e=>setformvalue(e.target.value)} />
     
        
    </form>
  )
}

export default Inputform
