import React from 'react'
import ReactSlider from 'react-slider'
import '../slider.css';


const Mainsettings = () => {
  return (
    <div style={{textAlign:"left"}}>
     <label htmlFor="">Work Minutes :</label>
  <ReactSlider

  className={'slider'}
  thumbClassName={'thumb'}
  trackClassName={'track'}
  value={45}
  min={1}
  max={120}
  />
     <label htmlFor="">Break Minutes :</label>
     <ReactSlider

  className={'slider green'}
  thumbClassName={'thumb'}
  trackClassName={'track'}
  value={45}
  min={1}
  max={120}
  />
    </div>
  )
}

export default Mainsettings
