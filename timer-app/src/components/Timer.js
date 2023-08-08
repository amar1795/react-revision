import React, { useState } from 'react'
import { CircularProgressbar,buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Playbutton from './Playbutton';
import Pausebutton from './Pausebutton';
import Settings from './Settings';
import Settingscontext from '../Settingscontext';
import { useContext } from 'react';

const Timer = () => {
  // const context=useContext(Settingscontext);
    // const {showSettings, setshowSettings}=context;
  const red="#f54e4e";
  const green="#4aec8c"
  const { showSettings, setshowSettings,ispaused,setispaused } = useContext(Settingscontext); // Correct the variable name
 // Function to handle the click event
 const handleSettingsClick = () => {
  console.log("Settings button clicked!"); // Add this console.log statement
  setshowSettings(true);
};
  return (

    <div>
  <CircularProgressbar value={60} text={`${60}%`} styles={buildStyles({
  
  textcolor:"#fff",
  pathColor: red,
  trailColor:'rgba(255,255,255,.2)'

  })} />
    
   <div style={{marginLeft:"55px"}}>
   <div style={{marginTop:"20px",marginLeft:"55px"}}>
    {ispaused?<Playbutton onClick={()=>setispaused(false)}/>:<Pausebutton onClick={()=>setispaused(true)}/>}
   </div>
  
    
   </div>

<div style={{marginLeft:"45px"}}>
  <Settings  onClick={()=>setshowSettings(true)}/>
  
</div>
    </div>
  )
}

export default Timer
