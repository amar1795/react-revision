import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";


// initial state
const INITIAL_STATE={
    user:null,
    isFetching:true,
    error:false,
}

// context created
    export const AuthContext=createContext(INITIAL_STATE);


    export const AuthContextProvider=({children})=>{
        // passing initial state to reducer
        const[state,dispatch]=useReducer(AuthReducer,INITIAL_STATE)
    

    return(
        <AuthContextProvider
        
        value={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
        }}>
            {children}

        </AuthContextProvider>
        )

        }

    export default AuthContext;