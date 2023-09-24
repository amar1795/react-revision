import React from 'react'
import { useState } from 'react'

const AddTransactionList = () => {
    const [text,setText]=useState("");
    const[Amount,setAmount]=useState(0);

  return (
    <>
    <div>
      <form id="form">
        <div class="form-control">
          <label for="text">Text</label>
          <input type="text" id="text" value={text} onChange={(e)=>setText(e.target.value)}  placeholder="Enter text..." />
        </div>
        <div class="form-control">
          <label for="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" id="amount" value={Amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button class="btn">Add transaction</button>
      </form>
    </div>
    </>
  )
}

export default AddTransactionList
