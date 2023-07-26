import React from 'react'
import Notecontext from './context/notes/Notecontext';
// importing notecontext
import { useContext } from 'react';
import Note from './Notes';
//using notext


const Home = (props) => {
  const {showAlert}=props;


  return (
    <div>
      {/* this is an example of props drilling */}
      {/* or showAlert={props.showAlert} if not using destructuring */}
     <Note showAlert={showAlert}/>
    </div>
  )
}

export default Home
