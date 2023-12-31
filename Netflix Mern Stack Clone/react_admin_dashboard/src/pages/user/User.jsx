import React from 'react'
import "./user.css"
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'


const User = () => {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">
                Edit User
            </h1>

            <Link to="/newUser">
            <button className='userAddButton'>Create</button>
            </Link>
        </div>
        <div className="usercontainer">
            <div className="userShow">

                <div className="userShowTop">
                    <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className='userShowImg'/>


                    <div className="userShowTopTitle">
                        <span className='userShowUserName'>Anna Becker</span>
                        <span className='userShowUserTitle'>Software Engineer</span>
                    </div>

                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">
                        Account Details
                    </span>
                    <div className="userShowInfo">
                        <PermIdentity className='userShowInfoIcon'/>
                        <span className='userShowInfoTitle'>
                            anabec99
                        </span>

                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className='userShowInfoIcon'/>
                        <span className='userShowInfoTitle'>
                            10.12.1999
                        </span>

                    </div>
                    <span className='userShowTitle'>Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className='userShowInfoIcon'/>
                        <span className='userShowInfoTitle'>
                            +123456789
                        </span>

                    </div>
                    <div className="userShowInfo">
                        <MailOutline className='userShowInfoIcon'/>
                        <span className='userShowInfoTitle'>
                            anabec99@gmail.com
                        </span>

                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className='userShowInfoIcon'/>
                        <span className='userShowInfoTitle'>
                            New York | USA
                        </span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                      
                        <div className="userUpdateItem">
                            <label >UserName</label>
                            <input type="text " placeholder='anabeck99' className='userUpdateInput'/>
                        </div>
                        <div className="userUpdateItem">
                            <label >FullName</label>
                            <input type="text " placeholder='Ana Becker' className='userUpdateInput'/>
                            </div>
                        <div className="userUpdateItem">
                            <label >Email</label>
                            <input type="text " placeholder='anabeck99@gmail.com' className='userUpdateInput'/>
                            </div>
                        <div className="userUpdateItem">
                            <label >Phone</label>
                            <input type="text " placeholder='+123456789' className='userUpdateInput'/>
                                </div>
                        <div className="userUpdateItem">
                            <label >Address</label>
                            <input type="text " placeholder='New York | USA' className='userUpdateInput'/>
                                </div>
                    </div>

                    <div className="userUpdateRight">

                        <div className="userUpdateUpload">
                            <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className='userUpdateImg' />
                            {/* if we don't use html for file file upload will not work */}
                            <label htmlFor='file'><Publish className='userUpdateIcon'/></label>  
                            <input type="file" id='file' style={{display:"none"}} /> 
                        </div>
                        <button className="userUpdateButton">
                            UserUpdate
                        </button>
                    
                    </div>


                </form>


            </div>
        </div>
      
    </div>
  )
}

export default User
