import React,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";

// initial state

const initialState={
    transactions:[]
}


// const x={
//     transactions:[]
// }

// create context
export const GlobalContext=createContext(initialState);


// const usecartContext=(x)=>{
//     const [state,dispatch]=useReducer(AppReducer,x)
//     function deleteTransaction(id) {
//         dispatch({
//             type:"DELETE_TRANSACTION",
//             payload:id
//         });  
//     }

//     function addTransaction(transaction) {
//             dispatch({
//                 type:"ADD_TRANSACTION",
//                 payload:transaction
//             });  
//         }

//         return {deleteTransaction,addTransaction,transactions:state.transactions
//         }
// }

// provider component
// children because all the element in the app the js will be wrapped inside it 


export const GlobalProvider=({children})=>{

    const [state,dispatch]=useReducer(AppReducer,initialState)

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
        
        //typescript syntax is not allowed here as typscript and javascipt/react has different syntax
        // usecartContext(initialState)
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
        
    }}>
        {children}

    </GlobalContext.Provider>)

}