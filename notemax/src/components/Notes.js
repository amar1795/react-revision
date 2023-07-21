import React, { useEffect } from 'react'
import Notecontext from './context/notes/Notecontext';
import { useContext } from 'react';
import Notesitem from './Notesitem';
import AddNote from './AddNote';


const Note = () => {
    const context=useContext(Notecontext);
    const {notes,getnotes}=context;
    // use effect is called only once when the browser is refereshed
    // same as component did mount
    useEffect(()=>{
      getnotes();
    },[])
  return (
    <>
    {/* AddNote contains the adding form and title */}
        <AddNote/>
    
    <div className='row my-3'>
        {notes.map((note)=>{
      return <Notesitem note={note}/>;
     })}
      
    </div>
    </>
  )
}

export default Note
