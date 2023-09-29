import { LineStyle, Timeline, TrendingUp } from '@material-ui/icons'
import React from 'react'

import "./sidebar.css"

const SIdebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">     
                <h3 className="sidebarTitle">Dashboard </h3>
                <ul className="sidebarList">     
                    <li className="sidebarListItem">
                        <LineStyle/>
                        home
                    </li>
                    <li className="sidebarListItem">
                        <Timeline/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp/>
                        Sales
                    </li>
                </ul>  
            </div>
        </div>
      
    </div>
  )
}

export default SIdebar
