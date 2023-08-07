import React from 'react'
import ReactSlider from 'react-slider'
import '../slider.css';
import Settingscontext from '../Settingscontext';
import { useContext } from 'react';

const Mainsettings = () => {
  const Settingsinfo=useContext(Settingscontext);
  
  return (
    <div style={{textAlign:"left"}}>
     <label htmlFor="">Work Minutes {Settingsinfo.workMinutes}:00</label>
  <ReactSlider

  className={'slider'}
  thumbClassName={'thumb'}
  trackClassName={'track'}
  value={Settingsinfo.workMinutes}
  onChange={newvalue=>Settingsinfo.setWorkMinutes(newvalue)}
  min={1}
  max={120}
  />
     <label htmlFor="">Break Minutes {Settingsinfo.breakMinutes} :00</label>
     <ReactSlider

  className={'slider green'}
  thumbClassName={'thumb'}
  trackClassName={'track'}
  value={Settingsinfo.breakMinutes}
  onChange={newvalue=>Settingsinfo.setBreakMinutes(newvalue)}

  min={1}
  max={120}
  />
    </div>
  )
}

export default Mainsettings
