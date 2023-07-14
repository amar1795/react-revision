import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";




export default class App extends Component {
 
  render() {
    return (

      
      <div>
    <BrowserRouter >
    <Navbar/>
    <div className="container">
      <Routes>
      
        <Route exact path="/" element={<News key="business" pagesize={20} category="business" />} />

        <Route exact path="/business" element={<News key="business" pagesize={20} category="business"/>} />

        <Route exact path="/science" element={<News key="science" pagesize={20} category="science"/>} />

        <Route exact path="/general" element={<News key="general" pagesize={20} category="general"/>} />

        <Route exact path="/health" element={<News key="health" pagesize={20} category="health"/>} />

        <Route exact path="/sports" element={<News key="sports" pagesize={20} category="sports"/>} />

        <Route exact path="/technology" element={<News key="technology" pagesize={20} category="technology"/>} />

        
        {/* <Route exactpath="users/*" element={<Users />} /> */}
      </Routes>
      </div>
    </BrowserRouter>
    
        
        
        
        
      </div>
    )
  }
}


