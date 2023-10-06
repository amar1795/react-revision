// import axios from "axios";
// import { loginFailure,loginStart,loginSuccess } from "./AuthAction";


// export const login =async (user,dispatch)=>{

    
//   dispatch(loginStart());
//     // login start  
//     try {
//         const res = await axios.post("auth/login",user);
//         // success
//         dispatch(loginSuccess(res.data))
//     } catch (error) {
//         // failure
//         dispatch(loginFailure())    
//     }
// }