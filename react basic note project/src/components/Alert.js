import React from 'react'

const Alert = (props) => {
    
  return (
    <div>
        {props.alertBtn && (<div class={`alert alert-${props.alertBtn.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alertBtn.type}</strong> {props.alertBtn.message}
        </div>
            )}
    </div>
  )
}

export default Alert
