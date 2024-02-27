import { useRef, useState } from "react"
import "./register.scss"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [email,setEmail]=useState(false)
    const [password,setPassword]=useState("");
    const [username,setusername]=useState("");
    
    const navigate = useNavigate();


    const emailRef=useRef();
    const passwordRef=useRef();
    const usernameRef=useRef();

    const handlestart= ()=>{
        setEmail(emailRef.current.value);
    }
    const handlePassword=async (e)=>{
        e.preventDefault();
        setusername(usernameRef.current.value);
        setPassword(passwordRef.current.value);
       await axios.post("auth/register",{email,username,password})
       navigate("/login")
        }


      return (
    <div className='register' >
        
        <div className="top">
            <div className="wrapper">

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" className='logo' alt="" />
            <button className='loginButton'>Sign In</button>
            </div>
        </div>
        <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (<div className="input">
            <input type="email" placeholder='email address' ref={emailRef} />
            <button className="registerButton" onClick={handlestart}>
                Get Started
            </button>
        </div>) :(

            <form className="input">
            <input type="username" placeholder='username' ref={usernameRef} />
            <input type="password" placeholder='password' ref={passwordRef} />
            <button className="registerButton" onClick={handlePassword}>
                Start
            </button>
             </form>

        )
        }
        </div>

      
    </div>
  )
}

export default Register
