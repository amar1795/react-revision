import React,{useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'


const Transaction = ({transaction}) => {
    const sign=transaction.amount < 0 ? "-" :"+";
    const {deleteTransaction}=useContext(GlobalContext)

  return (
    <div>
       <li class={transaction.amount < 0 ? "minus" :"plus"}>
         {transaction.text}<span>${sign}{Math.abs(transaction.amount)}</span><button class="delete-btn"onClick={()=>deleteTransaction(transaction.id)} >x</button>
        </li>
    </div>
  )
}

export default Transaction
