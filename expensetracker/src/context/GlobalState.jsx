import React,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";

// initial state

const initialState={
    transactions:[
        {id:1,text:"flower",amount:-20},
        {id:1,text:"flower",amount:-20},
        {id:1,text:"flower",amount:-20},
        {id:1,text:"flower",amount:-20},
        {id:1,text:"flower",amount:-20},


    ]
}


// create context
export const GlobalContext=createContext(initialState);

// provider component
// children because all the element in the app the js will be wrapped inside it 
export const GlobalProvider=({children})=>{
const [state,dispatch]=useReducer(AppReducer,initialState)

    return(<GlobalContext.Provider  value={{

        transactions:state.transactions
    }}>
        {children}

    </GlobalContext.Provider>)

}