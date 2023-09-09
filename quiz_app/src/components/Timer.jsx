import React from 'react'
import { useEffect,useState } from 'react'
import useSound from "use-sound";

import wrong from "../sounds/wrong.mp3"


const Timer = ({setStop,questionNumber}) => {
    const [timer,setTimer]= useState(30);
    const [wrongAnswer]=useSound(wrong)

    useEffect (()=>{
        if(timer===0) {
            wrongAnswer();
            return setStop(true)
        };
        const interval=setInterval(() => {
            setTimer((prev)=>prev-1);
            

        }, 1000);
        // add the logic as when the answer is selected the timer should pause
        // this is a cleanup functioan and this will run always for the first time when the usestate runs
        return()=>clearInterval(interval);

    },[setStop,timer])

    useEffect (()=>{
        setTimer(30);
    },[questionNumber])


  return (
    <div>{timer}</div>
  )
}

export default Timer
