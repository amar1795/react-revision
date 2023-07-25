import React from 'react'
import { useLocation } from 'react-router-dom';


import {
    Link,
  } from "react-router-dom";
  
const Navbar = () => {

  let location = useLocation();

  React.useEffect(() => {
    
  }, [location]);

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class={`nav-link ${location.pathname==="/home"?"active":" "}`} aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class={`nav-link ${location.pathname==="/about"?"active":" "}`} to="/about">About</Link>
        </li>
        
      </ul>
      <Link class="btn btn-primary mx-2" to="/login" role="button">Login</Link>
      <Link class="btn btn-primary" to="/signup" role="button">Signup</Link>
    </div>
  </div>
    </nav>

    
    </div>
  )
}

export default Navbar
