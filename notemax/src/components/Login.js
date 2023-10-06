import React, { useState ,} from 'react'
import {useNavigate} from 'react-router-dom';


const Login = (props) => {

    let navigate = useNavigate();
    const [credentials,setcredentials]=useState({email:"",password:""})
    const handlesubmit=async(e)=>{
        e.preventDefault();
        const response= await fetch(`http://localhost:3001/api/auth/login`,{
            method:"POST",
            headers:{
              "Content-Type":"application/json",            
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})
          })
          const json=await response.json();
          console.log(json)

          if(json.success){
            //save the auth token and redirect
            localStorage.setItem("token",json.authtoken);
            navigate("/");
            props.showAlert("You have logged in Successfully","success")

          }

          else{
            props.showAlert("invalid credentials","danger")
          }
  
        }
        const onchange=(e)=>{
            setcredentials({...credentials,[e.target.name]:e.target.value});
            console.log(credentials)
      }

    
  return (
    <div>
     <form onSubmit={handlesubmit}>

      <h1 style={{textAlign:"center"}}>Please Login to continue</h1>
      
  <div class="mb-3 my-4">
    <label for="email" class="form-label">Email address</label>
    {/* no need to add  value={credentials.email as works witrhout it as well*/}
    <input type="email" class="form-control" id="email" name='email'  onChange={onchange} value={credentials.email} aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" name='password' value={credentials.password} onChange={onchange} />
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>

    </div>
  )
}

export default Login
