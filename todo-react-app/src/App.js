import { useEffect, useState } from 'react';
import './App.css';
import Checkbox from './components/Checkbox';
import Inputform from './components/Inputform';
import Task from './components/Task';

function App() {
  const [task,settask]=useState(JSON.parse(localStorage.getItem('notetask')))
  
  function addtask(name) {
    settask(prev=>{
      // here ..prev is a spread operator and takes all the previous values of the array and create a new array with the name and done:false
      return [...prev,{name:name,done:false}]
    })
    
  }

  useEffect(()=>{
    
    localStorage.setItem('notetask',JSON.stringify(task))
  },[task])

  useEffect(()=>{
    const notevalue=JSON.parse(localStorage.getItem('notetask'))
    settask(notevalue);
  },[])

  const takscomplete=task.filter(e=>e.done).length;

  function addTask(taskindex,newdone) {
    // updating the old value in localstorage
    settask(prev=>{
      const newtask=[...prev];
      newtask[taskindex].done= newdone;
      return newtask;
    })   
  }
  function deleteTask(taskindex) {
      // updating the old value in localstorage
      settask(prev=>{
       return prev.filter((taskobject,index)=>{
        
        return index !== taskindex;
       
       })
      })   
    }

function updatedtext(index,newtextvalue) {
      // the parameter should be in the same sequence in which they are being called , names can be different 
      settask(prev=>{
        const newtask=[...prev];
        newtask[index].name= newtextvalue;
        return newtask;
      })  
    }



  function Message() {
    const percentage=(takscomplete/(task.length) *100);
    if(percentage === 0)
    {
      return " try to do at least one "
    }
    if(percentage === 100)
    {
      return " Congractulations you have completed all the task "
    }
    return " keep going"   
  }
  

  return (
    <main >
      
      <h1> {takscomplete}/{(task.length)} Tasks Complete</h1>
      <h2>{Message()}</h2>
      
      <Inputform add={addtask}/>
      {/* here the add prop value is coming from input form , here the prop value is goin in oppposite direction */}
      
      {task.map((task,index)=>(
       <Task {...task} 
       updatedtextvalue={(newtextvalue)=>{updatedtext(index,newtextvalue)}}
       ondelete={()=>{deleteTask(index)}}
       onToggle={done=>addTask(index,done)}/>
      ))}
        
    </main>
  );
}

export default App;
