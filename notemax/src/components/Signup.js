import React, { useState ,} from 'react'
import {useNavigate} from 'react-router-dom';

const Signup = (props) => {
  let navigate = useNavigate();

  const [credentials,setcredentials]=useState({name:"",email:"",password:"",cpassword:""})

  const {name, email,password}=credentials;

  // api call for creating user
  const handlesubmit=async(e)=>{
      e.preventDefault();
      const response= await fetch(`http://localhost:3001/api/auth/createuser`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
           
          },
          body:JSON.stringify({name,email,password})
        })
        const json=await response.json();
        console.log(json)

        if(json.success){
          //save the auth token and redirect
          
          // localStorage.setItem("token",json.authtoken);
          // no need to store the signup authtoken in local storage as creating a bug after signing up logout button is visible although user has not logged in ,happens only when the user signs in for the firsts time 
          props.showAlert("You have Signed up Successfully","success")
          navigate("/login");
        }
        else{
          props.showAlert("invalid credentials","danger")
        }
      }
      const onchange=(e)=>{
          setcredentials({...credentials,[e.target.name]:e.target.value});
                  }
  return (
    <div>
      {/* s */}
     
     <form onSubmit={handlesubmit}>
      <h1 style={{textAlign:"center"}}>Please sign in to use this App</h1>
     <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" name='name' onChange={onchange} aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" name='email' onChange={onchange} aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  
  {/* dues to the typo issue with the name ="passsword" was unable to login ,hence we should keep a backend verification for storing passowrd */}
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" onChange={onchange} required minLength={5} name='password'/>
  </div>
  <div class="mb-3">
    <label for="cpassword" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" id="cpassword" required minLength={5}  name='cpassword' onChange={onchange} />
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup
