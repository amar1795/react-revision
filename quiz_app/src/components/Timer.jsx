import React from 'react'
import { useEffect,useState } from 'react'



const Timer = ({setStop,questionNumber}) => {
    const [timer,setTimer]= useState(30);
   


    useEffect (()=>{
        if(timer===0) return setStop(true);
        const interval=setInterval(() => {
            setTimer((prev)=>prev-1);
            

        }, 1000);

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
