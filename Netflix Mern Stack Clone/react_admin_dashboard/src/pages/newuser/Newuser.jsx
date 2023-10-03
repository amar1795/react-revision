import React from 'react'
import "./newuser.css"
const Newuser = () => {
  return (
    <div className='newUser'>
        <h1 className='newUserTitle'>New User</h1>
        <form className='newUserForm'>
            <div className="newUserItem">
                <label >UserName</label>
                <input type="text" placeholder='john' />
            </div>
            <div className="newUserItem">
                <label >FullName</label>
                <input type="text" placeholder='john Jacob' />
            </div>
            <div className="newUserItem">
                            <label >Email</label>
                            <input type="text" placeholder='john@gmail.com' />
                        </div>
            <div className="newUserItem">
                            <label >Password</label>
                            <input type="text" placeholder='Password' />
                        </div>
            <div className="newUserItem">
                            <label >Phone</label>
                            <input type="text" placeholder='+123456789' />
                        </div>
            <div className="newUserItem">
                            <label >Address</label>
                            <input type="text" placeholder='NewYork|USA' />
                        </div>
            <div className="newUserItem">
                <label >Gender</label>
                <div className="newUserGender">
                <input type="radio" name='gender' id='male' value='male'  />
                <label For="male">Male</label>
                <input type="radio" name='gender' id='female' value='female' />
                <label For="female">Female</label>
                <input type="radio" name='gender' id='other' value='other' />
                <label For="other">other</label>
                </div>
                
                </div>

                <div className="newUserItem">
                    <label>Active</label>
                    <select className="newUserSelect" id="active" name='active'>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>

                    </select>      
                </div>
                <button className="newUserButton">
                    Create
                </button>

        </form>
      
    </div>
  )
}

export default Newuser
