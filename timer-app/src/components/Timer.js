import React, { useEffect, useState ,useRef} from 'react'
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

  const context=useContext(Settingscontext);
  const { workMinutes, breakMinutes, setWorkMinutes, setBreakMinutes,showSettings,setshowSettings ,ispaused,setispaused}=context;

  // Correct the variable name
 // Function to handle the click event
 const handleSettingsClick = () => {
  console.log("Settings button clicked!"); // Add this console.log statement
  setshowSettings(true);
};
const [mode,setmode]=useState("work");
const [secondsLeft,setsecondsLeft]=useState(0);

 let secondsLeftRef=useRef(secondsLeft);
let ispausedRef=useRef(ispaused);
let modeRef=useRef(mode);

  function initTimer(){
    secondsLeftRef.current=(workMinutes*60);
    setsecondsLeft(secondsLeftRef.current)

  } 


  function tick() {
    secondsLeftRef.current--;
    
    setsecondsLeft(secondsLeftRef.current);
  }


useEffect(()=>{
  initTimer(); 
  function switchMode(){
    let nextMode=modeRef.current==="work"?"break":"work";
    let nextseconds=(nextMode==="work"?workMinutes:breakMinutes)*60;
    setmode(nextMode);
    modeRef.current=nextMode;

    setsecondsLeft(nextseconds);
    secondsLeftRef.current = nextseconds;
  } 

  const interval=setInterval(() => {
    
    if(ispausedRef.current)
    {
      return;
    }

    if(secondsLeftRef.current===0)
    {
     return switchMode();
    }

    tick();
  }, 100);
  return ()=>clearInterval(interval);
},context)

  const totalseconds=mode==="work"?workMinutes*60:breakMinutes*60;
  const percentage=Math.round(secondsLeft/totalseconds *100);

  const Minutes=Math.floor(secondsLeft/60);
  let seconds=secondsLeft%60;
  if(seconds<10) seconds="0"+seconds;


  return (

    <div>
  <CircularProgressbar value={percentage} text={Minutes+":"+seconds} styles={buildStyles({
  
  textcolor:"#fff",
  pathColor: mode==="work"?red:green,
  trailColor:'rgba(255,255,255,.9)'

  })} />
    
   <div style={{marginLeft:"55px"}}>
   <div style={{marginTop:"20px",marginLeft:"55px"}}>
    {ispaused
    ?<Playbutton onClick={()=>{setispaused(false); ispausedRef.current=false;}}  />
    :<Pausebutton onClick={()=>{setispaused(true); ispausedRef.current=true;}}/>}
   </div>
  
    
   </div>

<div style={{marginLeft:"45px"}}>
  <Settings  onClick={()=>setshowSettings(true)}/>
  
</div>
    </div>
  )
}

export default Timer
