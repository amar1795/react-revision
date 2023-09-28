import React from 'react'
import "./topbar.css"
import {NotificationsNone} from '@material-ui/icons';


const Topbar = () => {
  return (
    <div className="topbar">
        <div className="topBarWrapper">
            <div className="topLeft">
                <div className="logo">
                    Admin Dashboard
                </div>

            </div>

            <div className="topRight">
                <div className="topBarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                
                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default Topbar
