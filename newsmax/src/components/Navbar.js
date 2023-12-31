import React from 'react'
import {
  Link,
} from "react-router-dom";


function Navbar(props) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme={props.Mode}>
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">NewsMax</Link>
    

    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/science">Science</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/business">Business</Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/general">General</Link>
        </li> 
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/health">Health</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/sports">Sports</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/technology">Technology</Link>
        </li>
        
        
      </ul>
      <form class="d-flex" role="search">
      <button type='button' className={`btn btn-${props.Mode==="light"?"dark":"light"} my-1 mx-3 px-3`} onClick={()=>{props.toggleStyle(null)}} >
          {props.Btntxt}
          </button>
      </form>
    </div>
    
  </div>
</nav>
<div className="container" style={{marginTop:"100px"}}>
<div className="container d-flex  justify-content-center " >
  <h1>News Max- The Fastest News you can get</h1>
</div>
</div>
    </div>
  )
}

export default Navbar
