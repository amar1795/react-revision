import { useEffect, useState } from 'react';
import './App.css';
import Checkbox from './components/Checkbox';
import Inputform from './components/Inputform';
import Task from './components/Task';

function App() {
  const [task,settask]=useState([])
  
  function addtask(name) {
    settask(prev=>{
      // here ..prev is a spread operator and takes all the previous values of the array and create a new array with the name and done:false
      return [...prev,{name:name,done:false}]
    })
    
  }

  useEffect(()=>{
    if(task.length ===0) return;
    localStorage.setItem('notetask',JSON.stringify(task))
  },[task])

  useEffect(()=>{
    const notevalue=JSON.parse(localStorage.getItem('notetask'))
    settask(notevalue);
  },[])

  function updatetask(taskindex,newdone) {
    // updating the old value in localstorage
    settask(prev=>{
      const newtask=[...prev];
      newtask[taskindex].done= newdone;
      return newtask;
    })
    
  }
  

  return (
    <main >
      <Inputform add={addtask}/>
      {/* here the add prop value is coming from input form , here the prop value is goin in oppposite direction */}
      
      {task.map((task,index)=>(
       <Task {...task} onToggle={done=>updatetask(index,done)}/>
      ))}
        
    </main>
  );
}

export default App;
