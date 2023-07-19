import React, { useContext, useEffect } from 'react'
import Notecontext from './context/notes/Notecontext'
import NoteState from './context/notes/Notestate'
import { useState } from 'react'

const About = () => {
    const a =useContext(Notecontext);
    useEffect(()=>{
        a.update();
    },[])
  return (
    <div>
      this is {a.state.name} and he is {a.state.hobby}
    </div>
  )
}

export default About
