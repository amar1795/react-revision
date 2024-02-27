import axios from 'axios';


export const login =async (user,dispatch)=>{
    
    console.log("login button has been clicked")
    dispatch(loginStart());
      // login start  
      try {
          const res = await axios.post("http://localhost:8000/api/auth/login",user);
          // success
        //  doubt  this below condition will only allow admin and not basic users ???? // yes i was right thata condition will only allow admins only 
        // res.data.isAdmin && dispatch(loginSuccess(res.data))
         dispatch(loginSuccess(res.data))
      } catch (error) {
          // failure
          dispatch(loginFailure())    
      }
  }

//   action creators
export const loginStart=()=>({
 type:"LOGIN_START",

});

export const loginSuccess=(user)=>({
    type:"LOGIN_SUCCESS",
   payload:user,
});

export const loginFailure=()=>({
    type:"LOGIN_FAILURE",

});

// LOGOUT
export const loginOut=()=>({
    type:"LOGIN_OUT",

});

// this is an example of action creator
