import Trivia from "./components/Trivia";
import "./index.css";
import { useState } from "react";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const moneyPyramid = 
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse();
      // reversed the array directly here only 

  return (
    <div className="App">
     <div className="main">
      <div className="top">
        <div className="timer">30</div>
      </div>
      <div className="bottom"><Trivia/></div>
     </div>
     <div className="pyramid">
      <ul className="moneyList">
      {moneyPyramid.map(e=>(
        <li className={questionNumber === e.id? "moneyListItem active": "moneyListItem"}>
         <span className="moneyListItemNumber">{e.id}</span>
         <span className="moneyListItemAmount">{e.amount}</span>  
        </li>
      ))}
      </ul>
     </div>
       
    </div>
  );
}

export default App;
