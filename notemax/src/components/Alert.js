import React from 'react'

const Alert = (props) => {

  const error=(word)=>{
    if(word==='danger')
    {
      word='Error'
    }
    // we have return word because it is passed as a parameter and the value will not be updated since its scope is inside the function 
    return word;
  }
  return (
    <div>
    <div style={{height:"50px"}} >
      {props.alertBtn && (<div class={`alert alert-${props.alertBtn.type} alert-dismissible fade show`} role="alert">
      <strong>{error(props.alertBtn.type)}</strong>: {props.alertBtn.message}
      </div>
          )}
    </div>
  </div>
  )
}

export default Alert
