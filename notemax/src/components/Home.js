import React from 'react'
import Notecontext from './context/notes/Notecontext';
// importing notecontext
import { useContext } from 'react';
//using notext


const Home = () => {
  const context=useContext(Notecontext);
  const {notes,setnotes}=context;

  return (
    <div>
     <h1>Add a Note</h1>
     <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

     <h1>Your Notes</h1>
     {notes.map((note)=>{
      return note.title;
     })}
    </div>
  )
}

export default Home