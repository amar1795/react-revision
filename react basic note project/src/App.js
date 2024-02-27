import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import React ,{useState} from 'react'
import Contact from './components/Contact';
import Alert from './components/Alert';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {

  const [Mystyle,setMystyle]=useState({
    color:"black",
    backgroundColor:"white"
  });
  
  const removeBodyClasses=()=>{

    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    
  }


  const [Mode,setMode]=useState("light");

  const [Btntxt,setBtntxt]=useState("Dark");
  
  
  const toggleColor=(cls)=>{
    removeBodyClasses();
    document.body.classList.add("bg-"+cls);
    showAlert(`background colour is now ${cls}`,"success")
  }  

  const toggleStyle=()=>{
    //above classes are being added in bootstrap classes and the below classes are also being added to  the classes
    if(Mode==="light")
    {
      document.body.style.backgroundColor="black";
      document.body.style.color="white"
      setBtntxt("Light")
      setMode("dark")
      showAlert("Dark mode has been enabled","success")
      document.title="Text-App-Dark Mode "

      setMystyle({
        color:"white",
        backgroundColor:"black"
      })
    }
    else
    {
      showAlert("Light mode has been enabled","success")

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
    <div>
    <BrowserRouter>
   {/*everything should be inside routes except the things which will change  */}
    <Navbar title="React News App" Mode={Mode} toggleStyle={toggleStyle} Btntxt={Btntxt} toggleColor={toggleColor}/>
    <Alert alertBtn={alertBtn} />
    <div className="container my-3" > 
      <Routes>
        <Route exact path="/" element={<Form  Mystyle={Mystyle} showAlert={showAlert}/>} />
        <Route exact path="/contact" element={<Contact Mode={Mode} Mystyle={Mystyle} />} />
      </Routes>
    </div>
    </BrowserRouter>
    </div>
  );  
}

export default App;
