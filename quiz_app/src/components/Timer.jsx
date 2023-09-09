import React from 'react'
import { useEffect,useState } from 'react'

const Timer = ({setTimeOut,questionNumber}) => {
    const [timer,setTimer]= useState(3);
    useEffect (()=>{
        if(timer===0) return setTimeOut(true);
        const interval=setInterval(() => {
            setTimer((prev)=>prev-1);

        }, 1000);

        // this is a cleanup functioan and this will run always for the first time when the usestate runs
        return()=>clearInterval(interval);

    },[setTimeOut,timer])

    useEffect (()=>{
        setTimer(3);
    },[questionNumber])


  return (
    Timer
  )
}

export default Timer
