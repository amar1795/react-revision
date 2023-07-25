import React from 'react'

const Login = () => {

    const handlesubmit=async(e)=>{
        e.preventDefault();
        const response= await fetch(`localhost:5000/api/auth/login`,{
            method:"POST",
            headers:{
              "Content-Type":"application/json",
              "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiNzdiMzhmZjY4NjY5NDZmNWYwNjk2In0sImlhdCI6MTY4OTc0NjI1MX0.nXXBP5VFGdWTnWx27AFtS3TckYm-DJemT23nIcSfTKU"
            },
            // body:JSON.stringify({email,passowrd})
          })
          const json=await response.json();
    }
  return (
    <div>
     <form onSubmit={handlesubmit}>
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" name='email' aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" name='password'/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>

    </div>
  )
}

export default Login
