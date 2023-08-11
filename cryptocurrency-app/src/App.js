import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route,Link,} from "react-router-dom";
import { Layout,Typography,Space } from 'antd';
import { Navbar } from './components';

function App() {
  return (
    <BrowserRouter>

<div className="app">
  

     <div className="navbar">
      <Routes>
    <Route path="/" element={<Navbar />} />
      </Routes>
      </div>    
 <div className="main">
 <Routes>
    <Route path="/" element={<Navbar />} />
      </Routes>
  </div>
  <div className="footer">
 <Routes>
    <Route path="/" element={<Navbar />} />
      </Routes>
  </div>

    
   </div>
      
    

    
  </BrowserRouter>

  );
}

export default App;
