import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { useState } from 'react'

const AddTransactionList = () => {
    const [text,setText]=useState("");
    const[amount,setAmount]=useState(0);
    const {addTransaction}=useContext(GlobalContext);

    const onSubmit=e=>{
        e.preventDefault();

        const newTransaction={
            id:Math.floor(Math.random()*100000000),
            text,
            amount:+amount,
        }

        addTransaction(newTransaction);
    }


  return (
    <>
    <div>
      <form id="form" onSubmit={onSubmit}>
        <div class="form-control">
          <label for="text">Text</label>
          <input type="text" id="text" value={text} onChange={(e)=>setText(e.target.value)}  placeholder="Enter text..." />
        </div>
        <div class="form-control">
          <label for="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" id="amount" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button class="btn">Add transaction</button>
      </form>
    </div>
    </>
  )
}

export default AddTransactionList
