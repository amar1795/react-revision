import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';



export default class App extends Component {
  c="john";
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
        
        </div>

        <News pagesize={20} category="science"/>
      </div>
    )
  }
}


