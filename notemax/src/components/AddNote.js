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
    <input type="text" class="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onchange}/>
  </div>
  <div class="mb-3">
    <label for="description" class="form-label">Description</label>
    <input type="text" class="form-control" id="description" name='description' aria-describedby="emailHelp" onChange={onchange}/>
  </div>
  <div class="mb-3">
    <label for="tag" class="form-label" >Tag</label>
    <input type="text" class="form-control" id="tag" name='tag' onChange={onchange}/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" onClick={handleclick}>Submit</button>
</form>

     <h1>Your Notes</h1>
    </div>
  )
}

export default AddNote
