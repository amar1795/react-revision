import React, { useEffect ,useState,useRef} from 'react'
import Notecontext from './context/notes/Notecontext';
import { useContext } from 'react';
import Notesitem from './Notesitem';
import AddNote from './AddNote';
import {useNavigate} from 'react-router-dom';



const Note = (props) => {

  let navigate = useNavigate();
    const context=useContext(Notecontext);
    const {notes,getnotes,updatenote}=context;
    // use effect is called only once when the browser is refereshed
    // same as component did mount
    useEffect(()=>{
      if (localStorage.getItem("token")) {

        getnotes();  
        
      }
      
      else
      {
        navigate("/login");
        
      }
    },[])

    const[note,setnote]=useState({id:"",etitle:" ",edescription:" ",etag:" "})

    const handleclick=(e)=>{
        e.preventDefault();
        // ref.current.click(); 
        // above will also work fine
        refclose.current.click();
        
        updatenote(note.id,note.etitle,note.edescription,note.etag)
        console.log("your udpated notes are", note)
        props.showAlert("You have updated the note Successfully","success")
    
    }

    // without onchange you cannot edit or type in the input 
    const onchange=(e)=>{
        setnote({...note,[e.target.name]:e.target.value});
    }
    const ref=useRef(null);
    const refclose=useRef(null);

    const editnote=(currentnote)=>{
      ref.current.click();
      setnote({id:currentnote._id,etitle:currentnote.title,edescription:currentnote.description,etag:currentnote.tag});
    }
  return (
    <>
    <AddNote showAlert={props.showAlert}/>

{/* ref is used as a reference to make any element active  without actually clicking on it */}
<button type="button" ref={ref} class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Title</label>
    <input type="text" class="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" onChange={onchange} value={note.etitle} minLength={5} required/>
    {/*  value={note.etitle} this is written to keep the default value when the modal is opened*/}
  </div>
  <div class="mb-3">
    <label for="description" class="form-label">Description</label>
    <input type="text" class="form-control" id="edescription" name='edescription' aria-describedby="emailHelp" onChange={onchange} value={note.edescription } minLength={5} required/>
  </div>
  <div class="mb-3">
    <label for="tag" class="form-label" >Tag</label>
    <input type="text" class="form-control" id="etag" name='etag' value={note.etag} onChange={onchange}/>
  </div>
  
</form>
      </div>
      <div class="modal-footer">
        <button type="button" ref={refclose}  class="btn btn-secondary d-none" data-bs-dismiss="modal">Close</button>
        <button type="button" disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleclick} class="btn btn-primary">UpdateNote</button>
      </div>
    </div>
  </div>
</div>
    {/* AddNote contains the adding form and title */}
          <div className="container">
            {notes.length===0 && "no notes to display"}
          </div>
    <div className='row my-3'>
      
        
        {notes.map((note)=>{
          // const {showAlert}=props;
          // without note props the value will not polpulate
       return <Notesitem editnote={editnote}  note={note}/>;
     })}
      
    </div>
    </>
  )
}

export default Note
