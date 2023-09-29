import React from 'react'
import "./topbar.css"
import {Language, NotificationsNone, Settings} from '@material-ui/icons';


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
                <div className="topBarIconContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>                
                </div>
                <div className="topBarIconContainer">
                    <Settings/>
                                 
                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default Topbar
