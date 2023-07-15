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
  const [progress,setprogress]=useState(10);


  let apikey=process.env.REACT_APP_KEY;
 

 
 
 
    return (
      <div>
    <BrowserRouter >
    <Navbar/>
    <LoadingBar
        color='#f11946'
        progress={  progress}
        height={3}
      />
    <div className="container">
      <Routes>
      
        <Route exact path="/" element={<News apikey={apikey} setprogress={setprogress} key="business" pagesize={20} category="business" />} />

        <Route exact path="/business" element={<News apikey={apikey} setprogress={setprogress} key="business" pagesize={20} category="business"/>} />

        <Route exact path="/science" element={<News apikey={apikey} setprogress={setprogress} key="science" pagesize={20} category="science"/>} />

        <Route exact path="/general" element={<News apikey={apikey} setprogress={setprogress} key="general" pagesize={20} category="general"/>} />

        <Route exact path="/health" element={<News apikey={apikey} setprogress={setprogress} key="health" pagesize={20} category="health"/>} />

        <Route exact path="/sports" element={<News apikey={apikey} setprogress={setprogress} key="sports" pagesize={20} category="sports"/>} />

        <Route exact path="/technology" element={<News apikey={apikey} setprogress={setprogress} key="technology" pagesize={20} category="technology"/>} />

        
        {/* <Route exactpath="users/*" element={<Users />} /> */}
      </Routes>
      </div>
    </BrowserRouter>
    
        
        
        
        
      </div>
    )
  
}


export default App

