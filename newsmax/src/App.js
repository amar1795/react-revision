import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {

  apikey=process.env.REACT_APP_KEY;
  // state={
  //   progress:10,
  // }

  constructor(){
    // we can create state using constructor since this is a class based component
    super();
    this.state={
        
        progress:10
                  
    }
  }
  setprogress=(progress)=>{
    this.setState({progress:progress})
  }
 
 
  render() {
    return (
      <div>
    <BrowserRouter >
    <Navbar/>
    <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      />
    <div className="container">
      <Routes>
      
        <Route exact path="/" element={<News apikey={this.apikey} setprogress={this.setprogress} key="business" pagesize={20} category="business" />} />

        <Route exact path="/business" element={<News apikey={this.apikey} setprogress={this.setprogress} key="business" pagesize={20} category="business"/>} />

        <Route exact path="/science" element={<News apikey={this.apikey} setprogress={this.setprogress} key="science" pagesize={20} category="science"/>} />

        <Route exact path="/general" element={<News apikey={this.apikey} setprogress={this.setprogress} key="general" pagesize={20} category="general"/>} />

        <Route exact path="/health" element={<News apikey={this.apikey} setprogress={this.setprogress} key="health" pagesize={20} category="health"/>} />

        <Route exact path="/sports" element={<News apikey={this.apikey} setprogress={this.setprogress} key="sports" pagesize={20} category="sports"/>} />

        <Route exact path="/technology" element={<News apikey={this.apikey} setprogress={this.setprogress} key="technology" pagesize={20} category="technology"/>} />

        
        {/* <Route exactpath="users/*" element={<Users />} /> */}
      </Routes>
      </div>
    </BrowserRouter>
    
        
        
        
        
      </div>
    )
  }
}


