import React, { useEffect, useState } from 'react'
import useSound from "use-sound";
import play from "../sounds/intro.mp3"
import right from "../sounds/rightanswer.mp3"
import wrong from "../sounds/wrong.mp3"

const Trivia = ({data,setStop,questionNumber,setQuestionNumber}) => {

    const [question,setQuestion]= useState(null);
    const [selectedAnswer,setSelectedAnswer]= useState(null);
    const [className,setClassName]= useState("answer");
    
    const [introSound]=useSound(play)
    const [correctAnswer]=useSound(right)
    const [wrongAnswer]=useSound(wrong)
    
    useEffect (()=>{
        introSound();
        console.log("sound is playing")
    },[])

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
            delay(2500,()=>{{
                if(a.correct){
                    correctAnswer()

                    delay(2000,()=>{
                        setQuestionNumber((prev)=> prev + 1)
                        setSelectedAnswer(null)

                    })
                }
                else 
                {
                    wrongAnswer()
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
