import React from 'react'
import ReactSlider from 'react-slider'
import '../slider.css';
import Settingscontext from '../Settingscontext';
import { useContext } from 'react';
import Backbutton from './Backbutton';

const Mainsettings = () => {
  // const Settingsinfo=useContext(Settingscontext);
  const context=useContext(Settingscontext);
    const {showSettings,setWorkMinutes, setshowSettings,Settingsinfo,workMinutes,breakMinutes,setBreakMinutes}=context;
  
  return (
    <div style={{textAlign:"left"}}>
  <label htmlFor="">Work Minutes {workMinutes}:00</label>
  <ReactSlider
  className={'slider'}
  thumbClassName={'thumb'}
  trackClassName={'track'}
  value={workMinutes}
  // props already added in slider since using onchange and any such props in future
  onChange={newvalue=>setWorkMinutes(newvalue)}
  min={1}
  max={120}
  />
  
     <label htmlFor="">Break Minutes {breakMinutes} :00</label>
  <ReactSlider

  className={'slider green'}
  thumbClassName={'thumb'}
  trackClassName={'track'}
  value={breakMinutes}
  onChange={newvalue=>setBreakMinutes(newvalue)}

  min={1}
  max={120}
  />
  
 <div style={{ marginLeft:"45px",marginTop:"20px"}}>
 <Backbutton onClick={()=>setshowSettings(false)}/>
 </div>
    </div>
  )
}

export default Mainsettings
