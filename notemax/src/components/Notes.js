import React from 'react'
import Notecontext from './context/notes/Notecontext';
import { useContext } from 'react';
import Notesitem from './Notesitem';
import AddNote from './AddNote';


const Note = () => {
    const context=useContext(Notecontext);
    const {notes,setnotes}=context;
  return (
    <>
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
