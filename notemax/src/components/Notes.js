import React from 'react'
import Notecontext from './context/notes/Notecontext';
import { useContext } from 'react';
import Notesitem from './Notesitem';


const Note = () => {
    const context=useContext(Notecontext);
    const {notes,setnotes}=context;
  return (
    <div className='row my-3'>
        {notes.map((note)=>{
      return <Notesitem note={note}/>;
     })}
      
    </div>
  )
}

export default Note
