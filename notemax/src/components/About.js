import React, { useContext, useEffect } from 'react'
import Notecontext from './context/notes/Notecontext'


const About = () => {
    const a =useContext(Notecontext);
    //useeffect does the same thing as component did mount
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
