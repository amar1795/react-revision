import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>


    </div>
  );
}

export default App;
