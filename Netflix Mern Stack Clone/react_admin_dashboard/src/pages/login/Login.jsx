import React, { useContext, useState } from 'react'
import "./login.css"
import { AuthContext, AuthContextProvider } from '../../context/authcontext/AuthContext';
import { login } from '../../context/authcontext/apicalls';

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const {isFetching,dispatch}=useContext(AuthContext);

  const handleSubmit=(e)=>{
    
    e.preventDefault();
    // gettting error due to this dispatch  as this is obselte in this reacrt version  and unable to use it , need to correct this  bug 

    // error : dispatch is not a function 
    login({email,password}, dispatch)
    
  }
  
  return (
    <div className='login'>
        <form className='loginform' >
            <input type="text" placeholder='EMAIL'className='loginInput' 
            
            onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder='password' className='passwordInput' 
            onChange={(e)=>setPassword(e.target.value)}
            
            />
            <button className='loginButton' onClick={handleSubmit} disabled={isFetching} >Submit</button>
        </form>
      
    </div>
  )
}

export default Login
