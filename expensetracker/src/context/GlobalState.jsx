import React,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";

// initial state

const initialState={
    transactions:[]
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

    function addTransaction(transaction) {
            dispatch({
                type:"ADD_TRANSACTION",
                payload:transaction
            });  
        }



    return(<GlobalContext.Provider  value={{

        transactions:state.transactions,
        deleteTransaction,
        addTransaction
        
    }}>
        {children}

    </GlobalContext.Provider>)

}