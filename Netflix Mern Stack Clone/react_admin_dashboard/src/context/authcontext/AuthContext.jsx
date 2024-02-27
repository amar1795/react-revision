import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";
// initial state
const INITIAL_STATE={
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching:false,
    error:false,
}
// context created
    export const AuthContext=createContext(INITIAL_STATE);
    export const AuthContextProvider=({children})=>{
        // passing initial state to reducer
        const[state,dispatch]=useReducer(AuthReducer,INITIAL_STATE)

        useEffect(()=>{
            localStorage.setItem("user",JSON.stringify(state.user))
        },[state.user])

            return(
                <AuthContext.Provider
                
                value={{
                    user:state.user,
                    isFetching:state.isFetching,
                    error:state.error,
                    dispatch
                    // didn't put dispatch in this value hence got hte error the whole time, waster a day re revising the redux concepts
                }}>
                    {children}

                </AuthContext.Provider>
                )

        }

   