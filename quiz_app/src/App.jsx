import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import "./index.css";
import { useEffect, useMemo, useState } from "react";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut,setTimeOut]= useState(false);
  const [stop,setStop]= useState(false);
const [earned,setEarned]= useState("$ 0");



  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Depp",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];
  const moneyPyramid = useMemo(()=>
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
    ].reverse(),
    // reversed the array directly here only 
    // no dependency here since nothing will change
    // use memo will help in increaing performance
  []
  );
      

      useEffect(()=>{
        questionNumber>1 && 
        setEarned(moneyPyramid.find((m)=>m.id === questionNumber -1).amount)
      },[moneyPyramid,questionNumber])



  return (
    <div className="App">
     <div className="main">
      {stop ? (<h1 className="endText">You Earned :{earned}</h1>):
      (
     <>
      <div className="top">
        <div className="timer">
          <Timer
        setStop={setStop}
        questionNumber={questionNumber}
        />
        </div>
      </div>
      <div className="bottom"><Trivia 
      data={data} 
      setStop={setStop}
      questionNumber={questionNumber}
      setTimeOut={setTimeOut} 
      setQuestionNumber={setQuestionNumber}/>
      </div>
      </>
     )}
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
