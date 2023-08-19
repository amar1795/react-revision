import { useEffect, useState } from 'react';
import './App.css';
import Checkbox from './components/Checkbox';
import Inputform from './components/Inputform';
import Task from './components/Task';

function App() {
  const initialTask = JSON.parse(localStorage.getItem('notetask')) || [];

  const [task,settask]=useState(initialTask);
  
  // adding data
  function addtask(name) {
   
    settask(prev=>{
      // here ..prev is a spread operator and takes all the previous values of the array and create a new array with the name and done:false
      return [...prev,{name:name,done:false}]
    })
    
  }

  useEffect(()=>{ 
   
    // whenever there is a change in task then the localstorage is updated
    localStorage.setItem('notetask',JSON.stringify(task))
  },[task])


  // **************************************************************************************
  // no need of this use effect as initally we are handling the case of null and getting the data as initalTask
  // useEffect(() => {
  //   // Check if the 'notetask' key is not present in localStorage
  //   if (localStorage.getItem('notetask') === null) {
  //     localStorage.setItem('notetask', JSON.stringify([])); // Set an empty array
  //   } 
  // }, []);

  const takscomplete=task.filter(e=>e.done).length;

  // adding checkbox
  function addTask(taskindex,newdone) {
    // updating the old value in localstorage
    
    settask(prev=>{
      const newtask=[...prev];
      newtask[taskindex].done= newdone;
      return newtask;
    })   
  }
  // deleting data
  function deleteTask(taskindex) {
      // updating the old value in localstorage
      settask(prev=>{
       return prev.filter((taskobject,index)=>{
        
        return index !== taskindex;
       
       })
      })   
    }

    // updating data
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
