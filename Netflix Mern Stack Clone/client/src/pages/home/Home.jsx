// import React from 'react'
// no need to import react after react 18 
import Featured from "../../components/featured/Featured"
import Navbar from "../../components/navbar/Navbar"
import List from "../../components/list/List"
import "./home.scss"
import { useEffect, useState } from "react"
import axios from "axios";


const Home = ({type}) => {

  const [Listdata,setListdata]= useState([]);
  const [genre,setGenre]= useState(null);
  
  useEffect(()=>{
    const getRandomLists=async ()=>{
      try {
        // the "list" name here should be the same from api index.js app.use("/api/list",listroute)

        const res=await axios.get(`list${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,{
          headers:{
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDQwZTdiYjlkMWE4NWFkN2NlNjU1NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDc2NDc4NywiZXhwIjoxNjk1MTk2Nzg3fQ.Z5BBENklkMvEOiUJQ-CpBTXBcBg12sXVWjD6lMgqaFU"

          }
        
        })
        
        // console.log(res.data)
        setListdata(res.data)
      } catch (error) {
        console.log(error)
 
      }
    }
    getRandomLists();
  },[type,genre])

  return (
    
    
    <div className="home">
    <Navbar/>
    <Featured type={type}/>
    {
      Listdata.map((list)=>
      {
        return  <List list={list}/>
      }
       

      )
    }
    
    
    
    </div>
  )
}

export default Home
