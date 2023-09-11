// import React from 'react'
// no need to import react after react 18 
import Featured from "../components/featured/Featured"
import Navbar from "../components/navbar/Navbar"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
    <Navbar/>

    <Featured type={"series"}/>
    </div>
  )
}

export default Home
