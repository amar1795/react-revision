import Notecontext from "./Notecontext";
import { useState } from "react";
const host="http://localhost:3001"

const NoteState=(props)=>{

   let notesitem= []
   const [notes,setnotes]=useState(notesitem)

  //  getting notes fetchAPI
  const getnotes=async()=>{
    const response= await fetch(`${host}/api/notes/fetchallnotes`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiNzdiMzhmZjY4NjY5NDZmNWYwNjk2In0sImlhdCI6MTY4OTc0NjI1MX0.nXXBP5VFGdWTnWx27AFtS3TckYm-DJemT23nIcSfTKU"
      }
    })
    const json=await response.json();
    console.log(json);
    setnotes(json)
  }

   //update a note
   const updatenote=async(id,title,description,tag)=>{

    const response= await fetch(`${host}api/notes/updatenote/${id}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiNzdiMzhmZjY4NjY5NDZmNWYwNjk2In0sImlhdCI6MTY4OTc0NjI1MX0.nXXBP5VFGdWTnWx27AFtS3TckYm-DJemT23nIcSfTKU"
      },
      body:JSON.stringify({title,description,tag})
    })
    const json=await response.json();
    console.log(json);
    // setnotes(json)

      for (let index = 0; index < notesitem.length; index++) {
        const element = notesitem[index];
        if (element._id===id) {
          element.title=title;
          element.description=description;
          element.tag=tag;
            
        }
        
      }

   }

  //add a note
   const addnote=async(title,description,tag)=>{
    
    const response= await fetch(`${host}/api/notes/addnote`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiNzdiMzhmZjY4NjY5NDZmNWYwNjk2In0sImlhdCI6MTY4OTc0NjI1MX0.nXXBP5VFGdWTnWx27AFtS3TckYm-DJemT23nIcSfTKU"
      },
      body:JSON.stringify({title,description,tag})
    })
    const json=await response.json();
    console.log(json);
      setnotes(notes.concat(json));


   }

  //delete a note
   const deletenote=(id)=>{
    const newnotes=notes.filter((note)=>{
      return note._id!==id;
    })
    setnotes(newnotes);
    console.log("deleting note with the id" +id)
   
   }

    return(
        //we can also export functions as context like update function
        <Notecontext.Provider value={{notes,addnote,updatenote,deletenote,getnotes}}>
            {props.children}
        </Notecontext.Provider>
    )
}
export default NoteState;