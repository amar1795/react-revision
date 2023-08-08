import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import NoteState from './components/context/notes/Notestate';

import {
  BrowserRouter,  
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {

  const [alertBtn,setalertBtn]=useState(null);

  const showAlert=(message,type)=>{
    
    setalertBtn({
      message:message,
      type:type
    })

    setTimeout(() => {
      setalertBtn(null)
    }, 1500);

  }
  return (
    <>
  <NoteState showAlert={showAlert}>
    <BrowserRouter>
   <Navbar showAlert={showAlert}/>
   <Alert alertBtn={alertBtn}/>

    <div className="container">
      <Routes>
       
        <Route exact path="/" element={<Home showAlert={showAlert}/>} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
        <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
        
      </Routes>
      </div>
    </BrowserRouter>
    </NoteState>
    </> 
        
   
  );
}

export default App;
