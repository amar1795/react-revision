import Notecontext from "./Notecontext";
import { useState } from "react";

const NoteState=(props)=>{

   let notesitem=
    [
        {
          "_id": "64b796d56cba0454eadf4dcc",
          "user": "64b77b38ff6866946f5f0696",
          "title": "this is my note",
          "description": "this is a cool project",
          "tag": "react",
          "date": "2023-07-19T07:55:01.574Z",
          "__v": 0
        },
        {
          "_id": "64b796d56cba0454eadf4dce",
          "user": "64b77b38ff6866946f5f0696",
          "title": "this is my note",
          "description": "this is a cool project",
          "tag": "react",
          "date": "2023-07-19T07:55:01.713Z",
          "__v": 0
        },
        {
          "_id": "64b796d56cba0454eadf4dd0",
          "user": "64b77b38ff6866946f5f0696",
          "title": "this is my note",
          "description": "this is a cool project",
          "tag": "react",
          "date": "2023-07-19T07:55:01.844Z",
          "__v": 0
        },
        {
          "_id": "64b796d66cba0454eadf4dd2",
          "user": "64b77b38ff6866946f5f0696",
          "title": "this is my note",
          "description": "this is a cool project",
          "tag": "react",
          "date": "2023-07-19T07:55:02.067Z",
          "__v": 0
        },
        {
          "_id": "64b799676b8a56d4c3ecd7e7",
          "user": "64b77b38ff6866946f5f0696",
          "title": "this is my note",
          "description": "this is a cool project",
          "tag": "react",
          "date": "2023-07-19T08:05:59.782Z",
          "__v": 0
        },
        {
          "_id": "64b7996b6b8a56d4c3ecd7e9",
          "user": "64b77b38ff6866946f5f0696",
          "title": "this is my note",
          "description": "this is a cool project",
          "tag": "react",
          "date": "2023-07-19T08:06:03.874Z",
          "__v": 0
        },
        {
          "_id": "64b7996c6b8a56d4c3ecd7eb",
          "user": "64b77b38ff6866946f5f0696",
          "title": "this is my note",
          "description": "this is a cool project",
          "tag": "react",
          "date": "2023-07-19T08:06:04.971Z",
          "__v": 0
        },
        {
          "_id": "64b7996d6b8a56d4c3ecd7ed",
          "user": "64b77b38ff6866946f5f0696",
          "title": "this is my updated note",
          "description": "this is updated cool project",
          "tag": "react",
          "date": "2023-07-19T08:06:05.574Z",
          "__v": 0
        }
      ]
   const [notes,setnotes]=useState(notesitem)

   //add a note
   const addnote=(title,description,tag)=>{

    notesitem={
      "_id": "64b796d56cba0454eadf4dcc",
      "user": "64b77b38ff6866946f5f0696",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-07-19T07:55:01.574Z",
      "__v": 0

    }
      //concat will add aditional value to it 
      setnotes(notes.concat(notesitem));

   }

  //update a note
   const updatenote=()=>{

   }

  //delete a note
   const deletenote=()=>{

   }






    return(
        //we can also export functions as context like update function
        <Notecontext.Provider value={{notes,addnote,updatenote,deletenote}}>
            {props.children}
        </Notecontext.Provider>
    )
}
export default NoteState;