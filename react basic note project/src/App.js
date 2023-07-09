import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import React ,{useState} from 'react'
import Contact from './components/Contact';
import Alert from './components/Alert';


function App() {

  const [Mystyle,setMystyle]=useState({
    color:"black",
    backgroundColor:"white"
  });
  


  const [Mode,setMode]=useState(
    "light"
  );
  const [Btntxt,setBtntxt]=useState("Dark");
  
  
  const toggleStyle=()=>{
  
    if(Mode==="light")
    {
      document.body.style.backgroundColor="black";
      document.body.style.color="white"
      setBtntxt("Light")
      setMode("dark")
      showAlert("Dark mode has been enabled","Success")
  
      setMystyle({
        color:"white",
        backgroundColor:"black"
      })
  
    }
  
    else
    {
      showAlert("Light mode has been enabled","Success")

      document.body.style.backgroundColor="white";
      document.body.style.color="black"
      setBtntxt("Dark")
      setMode("light")
      setMystyle({
        color:"black",
        backgroundColor:"white"
      })

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
    <Navbar title="React News App" Mode={Mode} toggleStyle={toggleStyle} Btntxt={Btntxt}/>
    <Alert alertBtn={alertBtn} />
    <div className="container my-3" > 
    <Form email="enter your email here" Mystyle={Mystyle} showAlert={showAlert}/>
    </div>
    </div>
  );
}

export default App;
