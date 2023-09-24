import React,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";

// initial state

const initialState={
    transactions:[
        {id:1,text:"flower",amount:-20},
        {id:2,text:"apple",amount:-520},
        {id:3,text:"bannana",amount:-20},
        {id:4,text:"car",amount:1020},
        {id:5,text:"house",amount:-20},

    ]
}

// create context
export const GlobalContext=createContext(initialState);

// provider component
// children because all the element in the app the js will be wrapped inside it 
export const GlobalProvider=({children})=>{
const [state,dispatch]=useReducer(AppReducer,initialState)

    // actions


    function deleteTransaction(id) {
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
        });  
    }

    return(<GlobalContext.Provider  value={{

        transactions:state.transactions,
        deleteTransaction
        
    }}>
        {children}

    </GlobalContext.Provider>)

}