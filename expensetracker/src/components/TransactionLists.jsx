import React,{useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';

const TransactionLists = () => {
    const {transactions} =useContext(GlobalContext);

  return (
    <>
       <ul id="list" class="list">
        {transactions.map(transaction=>(<Transaction transaction={transaction} /> ))}
        
      </ul>
      
    </>
  )
}

export default TransactionLists
