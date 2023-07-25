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
  return (
    <>
  <NoteState>
    <BrowserRouter>
   <Navbar/>
   <Alert/>

    <div className="container">
      <Routes>
       
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        
      </Routes>
      </div>
    </BrowserRouter>
    </NoteState>
    </> 
        
   
  );
}

export default App;
