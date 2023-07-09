import React from 'react'
import { Link } from 'react-router-dom'

// this is navbar
const Navbar = (props) => {

  
  return (
    <div>
        <nav className="navbar navbar-expand-lg   bg-body-tertiary" data-bs-theme={props.Mode} >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link " to="/Contact">Contact Us</Link>
        </li>
        <li className="nav-item dropdown">  
        </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        <button type='button' className={`btn btn-${props.Mode==="light"?"dark":"light"} my-1 mx-3 px-3`} onClick={props.toggleStyle} >
          {props.Btntxt}
          </button>
      </form>
    </div>
  </div>
</nav>
      
    </div>
  )
}


export default Navbar
