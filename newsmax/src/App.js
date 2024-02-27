import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


function App () {
  const [Mode,setMode]=useState(
    "light"
  );

  const pageSize=20;

  const [Mystyle,setMystyle]=useState({
    color:"black",
    backgroundColor:"white"
  });

  const [Btntxt,setBtntxt]=useState("Dark");

  const [progress,setprogress]=useState(10);

  const toggleStyle=()=>{
   
    //above classes are being added in bootstrap classes and the below classes are also being added to  the classes
  
    if(Mode==="light")
    {
      document.body.style.backgroundColor="black";
      document.body.style.color="white"
      setBtntxt("Light")
      setMode("dark")
      document.title="Text-App-Dark Mode "
  
      setMystyle({
        color:"white",
        backgroundColor:"black"
      })
  
    }
  
    else
    {

      document.body.style.backgroundColor="white";
      document.body.style.color="black"
      setBtntxt("Dark")
      setMode("light")
      setMystyle({
        color:"black",
        backgroundColor:"white"
      })
      document.title="Text-App-Light Mode "

    }
  }


  let apikey=process.env.REACT_APP_KEY;

    return (
      <div>
    <BrowserRouter >
    <Navbar Mode={Mode} toggleStyle={toggleStyle} Btntxt={Btntxt} />
    <LoadingBar
        color='#f11946'
        progress={  progress}
        height={3}
      />
    <div className="container">
      <Routes>
      
        <Route exact path="/" element={<News apikey={apikey} setprogress={setprogress} key="business" pagesize={pageSize} category="business" />} />

        <Route exact path="/business" element={<News apikey={apikey} setprogress={setprogress} key="business" pagesize={pageSize} category="business"/>} />

        <Route exact path="/science" element={<News apikey={apikey} setprogress={setprogress} key="science" pagesize={pageSize} category="science"/>} />

        <Route exact path="/general" element={<News apikey={apikey} setprogress={setprogress} key="general" pagesize={pageSize} category="general"/>} />

        <Route exact path="/health" element={<News apikey={apikey} setprogress={setprogress} key="health" pagesize={pageSize} category="health"/>} />

        <Route exact path="/sports" element={<News apikey={apikey} setprogress={setprogress} key="sports" pagesize={pageSize} category="sports"/>} />

        <Route exact path="/technology" element={<News apikey={apikey} setprogress={setprogress} key="technology" pagesize={pageSize} category="technology"/>} />

        
        {/* <Route exactpath="users/*" element={<Users />} /> */}
      </Routes>
      </div>
    </BrowserRouter>

      </div>
    )
  
}


export default App

