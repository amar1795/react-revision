import React from 'react'
import "./topbar.css"
import {Language, NotificationsNone, Settings} from '@material-ui/icons';
import { Link } from 'react-router-dom';


const Topbar = () => {
  return (
    <div className="topbar">
        <div className="topBarWrapper">
            <div className="topLeft">
              <Link to="/" className='link'>
              <div className="logo">
                    Admin Dashboard
                </div>
              </Link>

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
