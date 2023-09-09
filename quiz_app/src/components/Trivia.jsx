import React, { useEffect, useState } from 'react'

const Trivia = ({data,setStop,questionNumber,setQuestionNumber}) => {

    const [question,setQuestion]= useState(null);
    const [selectedAnswer,setSelectedAnswer]= useState(null);
    const [className,setClassName]= useState("answer");
    
        const delay =(duration,callback)=>{
            setTimeout(() => {
                callback();
                
            }, duration);

        }
    
    const handleClick =((a)=>{
        setSelectedAnswer(a);
        setClassName("answer active")
   
            delay(1000,()=>{
                
                setClassName(a.correct ? "answer correct" :"answer wrong")
            })
            delay(4000,()=>{{
                if(a.correct){

                    setQuestionNumber((prev)=> prev + 1)
                    setSelectedAnswer(null)
                }
                else
                {
                    setStop(true)
                }            
                }               
            })
       
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
