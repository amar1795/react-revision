import React, { useEffect, useState } from 'react'
import "./widgetsm.css"
import { Visibility } from '@material-ui/icons'
import axios from 'axios'

const Widgetsm = () => {
  const [newUsers,setNewUsers]=useState([])

  useEffect(()=>{

    const getNewUsers = async ()=>{
      try {
        const res = await axios.get("/users?new=true",
        {headers:{
          token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDQwZTdiYjlkMWE4NWFkN2NlNjU1NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NjI3ODAwNCwiZXhwIjoxNjk2NzEwMDA0fQ.f_XymCUS9p3CZ6HMWu0vgRXlrGHWMM7XlJy1oEWW_aw"
        },
        })
        
        
        setNewUsers(res.data)
      
      } catch (error) {

        console.log(error)
        
      }
    };
    getNewUsers()
  },[])


  return (
    <div className='widgetsm'>
        <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">

        {
          newUsers.map((user)=>(            
        <li className="widgetSmListItem">
          <img
            src={user.profilePic || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Widgetsm
