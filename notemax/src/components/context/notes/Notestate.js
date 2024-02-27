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
        "auth-token":localStorage.getItem("token")
      }
      // no need to add headers and method if we are storing the token information in the cookies 
    })
    
    const json=await response.json();
    console.log(json);
    setnotes(json)
  }
   //update a note
   const updatenote=async(id,title,description,tag)=>{

    const response= await fetch(`${host}/api/notes/updatenote/${id}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
        "auth-token":localStorage.getItem("token")
      },
      body:JSON.stringify({title,description,tag})
    })
    const json=await response.json();
    console.log("this is my updated function ",json );
    // can also call the below function as well
    getnotes();

    // another approach 

    // setnotes((prev) => {
    //   const updatedNotes = prev.map((note) =>
    //     note._id === id ? { ...note, ...json } : note
    //   );
    //   return updatedNotes;
    // });
  
    // let newnotes=JSON.parse(JSON.stringify(notes))

    //   for (let index = 0; index < newnotes.length; index++) {
    //     const element = newnotes[index];
    //     if (element._id===id) {
    //       newnotes[index].title=title;
    //       newnotes[index].description=description;
    //       newnotes[index].tag=tag;
            
    //       break;
    //     }
    //   }

    //   setnotes(newnotes)

   }

  //add a note
  
   const addnote=async(title,description,tag)=>{
    
    const response= await fetch(`${host}/api/notes/addnote`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "auth-token":localStorage.getItem("token")
      },
      body:JSON.stringify({title,description,tag})
    })
    const json=await response.json();
    console.log(json);
      setnotes(notes.concat(json));
   }

  //delete a note Api
   const deletenote=async(id)=>{  
    console.log("deleting note with the id" +id)
    const response= await fetch(`${host}/api/notes/deletenote/${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json",
        "auth-token":localStorage.getItem("token")
      },
    })
    const newnotes=notes.filter((note)=>{
      return note._id!==id;
    })
    const json=await response.json();
    console.log(json);
    setnotes(newnotes);
    props.showAlert("You have deleted the note Successfully","success")

  }

    return(
        //we can also export functions as context like update function
        <Notecontext.Provider value={{notes,addnote,updatenote,deletenote,getnotes}}>
            {props.children}
        </Notecontext.Provider>
    )
}
export default NoteState;