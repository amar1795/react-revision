import axios from 'axios';


export const login =async (user,dispatch)=>{
    
    console.log("login button has been clicked")
    dispatch(loginStart());
      // login start  
      try {
          const res = await axios.post("auth/login",user);
          // success
          dispatch(loginSuccess(res.data))
      } catch (error) {
          // failure
          dispatch(loginFailure())    
      }
  }

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

// this is an example of action creator
