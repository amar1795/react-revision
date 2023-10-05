import React from 'react'
import "./login.css"

const Login = () => {
  return (
    <div className='login'>
        <form className='loginform' >
            <input type="text" placeholder='EMAIL'className='loginInput' />
            <input type="password" placeholder='password' className='passwordInput' />
            <button>Submit</button>
        </form>
      
    </div>
  )
}

export default Login
