import React from 'react'
import Notecontext from './context/notes/Notecontext';
import { useContext } from 'react';

const Notesitem = (props) => {
  const context=useContext(Notecontext);
  const {deletenote}=context;
    const{note,editnote}= props
    
  return (
    //col md-3 creates the column and it should be inside a row class to get that effect
    <div className='col-md-3 my-3'>
        
        <div class="card" >
    <div class="card-body ">

    <div className="container ">    
    
    <h5 class="card-title">{note.title}</h5>
    </div>
    <div className="container">

    <p class="card-text">{note.description}</p>
    
    {/* since  we are passing parameters in the functions hence a function inside onclick*/}
    <i class="fa-regular fa-pen-to-square " onClick={()=>{editnote(note)}}></i>
    <i class="fa-solid fa-trash mx-3"  onClick={()=>{deletenote(note._id)}}></i>
    </div>
    
    
  </div>
</div>
      
    </div>
  )
}

export default Notesitem
