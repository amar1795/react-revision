import React, { useEffect, useState } from 'react'
import "./widgetsm.css"
import { Visibility } from '@material-ui/icons'
import axios from 'axios'

const Widgetsm = () => {
  const [newUsers,setNewUsers]=useState([])

  useEffect(()=>{

    const getNewUsers = async ()=>{
      try {
        const res = await axios.get("http://localhost:8000/api/users?new=true",
        {headers:{
          token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MjA0YzJhZmUxMDliYTRiM2VmZDg1NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NjYxNzAyOCwiZXhwIjoxNjk3MDQ5MDI4fQ.fH-Nn6Sf0eOvIb2seLTGOH4uU6KW_J37LgS8R89ikjY"
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
