import React from 'react'
import Notecontext from './context/notes/Notecontext';
import { useContext,useState } from 'react';

const AddNote = () => {
    const context=useContext(Notecontext);
    const {addnote}=context;

    
    const[note,setnote]=useState({title:" ",description:" ",tag:" "})

    const handleclick=(e)=>{
        e.preventDefault();
        addnote(note.title,note.description,note.tag);
        setnote({title:" ",description:" ",tag:" "})
    }
    const onchange=(e)=>{
        setnote({...note,[e.target.name]:e.target.value});
    }

  return (
    <div>
       <h1>Add a Note</h1>
     <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Title</label>
    <input type="text" class="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onchange} minLength={5} required value={note.title}/>
  </div>
  <div class="mb-3">
    <label for="description" class="form-label">Description</label>
    <input type="text" class="form-control" id="description" name='description' aria-describedby="emailHelp" onChange={onchange} minLength={5} required value={note.description}/>
  </div>
  <div class="mb-3">
    <label for="tag" class="form-label" >Tag</label>
    <input type="text" class="form-control" id="tag" name='tag' onChange={onchange}  value={note.tag}/>
  </div>
  
  <button type="submit" disabled={note.title.length<5 || note.description.length<5}  class="btn btn-primary" onClick={handleclick}>Submit</button>
</form>

     <h1 style={{"marginTop":"25px"}}>Your Notes</h1>
    </div>
  )
}

export default AddNote
