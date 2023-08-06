import React from 'react'
import { CircularProgressbar,buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Playbutton from './Playbutton';
import Pausebutton from './Pausebutton';
import Settings from './Settings';


const Timer = () => {
  const red="#f54e4e";
  const green="#4aec8c"
  return (
    <div>
  <CircularProgressbar value={60} text={`${60}%`} styles={buildStyles({
  
  textcolor:"#fff",
  pathColor: red,
  trailColor:'rgba(255,255,255,.2)'

  
  
  })} />
    
   <div style={{marginTop:"20px",marginLeft:"55px"}}>
   <Playbutton/>
    <Pausebutton/>
   </div>

<div >
  <Settings/>
</div>
    </div>
  )
}

export default Timer
