import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
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
      <Routes>
       
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </NoteState>
    </> 
        
   
  );
}

export default App;
