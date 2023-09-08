import React, { useEffect, useState } from 'react'

const Trivia = ({data,setTimeOut,questionNumber,setQuestionNumber}) => {

    const [question,setQuestion]= useState(null);
    const [selectedAnswer,setSelectedAnswer]= useState(null);
    const [className,setClassName]= useState("answer");
    
    const handleClick =((a)=>{
        setSelectedAnswer(a);
        setClassName("answer active")
        setTimeout(() => {
            setClassName(a.correct ? "answer correct" :"answer wrong")
        }, 1000);
    });

    useEffect(()=>{
        setQuestion(data[questionNumber-1])
    },[data,questionNumber])

  return (
    <div>
        <div className="trivia">
            <div className="question">
                {question?.question}

            </div>
            <div className="answers">
                {question?.answers.map((a)=>(
                    // can use without using return statemtn in react in that case () is being used if want to use return statemtn then we can do it by using {return ()} both are valid
                    
            
                    <div className={selectedAnswer === a ? className :"answer"} onClick={()=>handleClick(a)}>{a.text}</div>
                
               
                ))}
                
            </div>
        </div>
      
    </div>
  )
}

export default Trivia
