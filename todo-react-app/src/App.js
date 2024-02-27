import { useEffect, useState } from 'react';
import './App.css';
import Checkbox from './components/Checkbox';
import Inputform from './components/Inputform';
import Task from './components/Task';

 function App() {

  
  const initialTask =  JSON.parse(localStorage.getItem('notetask')) || [];

  const [task,settask]=useState(initialTask);
  
  // const subObj=[]

  // let current=null;

  // task.map((e)=>{
  //   if(e.name==="g")
  //   {
  //     e.subObj=[...subObj,{newvalue:"g"}]
  //   }

  // })

  // console.log(current)
  // adding data
  function addtask(name) {
    
   
    settask(prev=>{
      // here ..prev is a spread operator and takes all the previous values of the array and create a new array with the name and done:false
      let addedValue={name:name,done:false,
        uniqueid:Date.now()
      }
      return [...prev,addedValue]
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

  // can compare it using the below method as well
  // let count=0;
  // const takscomplete=task.map((e)=>{
  //   if(e.done)
  //   {
  //     count++;
  //   } 
  // })

  // adding checkbox
  function checkBox(taskindex,newdone) {
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
      // if don't want to use the return statement in that case we can use the below syntax
      //       settask(prev=>prev.filter((_,index)=>index !== taskindex))   

      settask(prev=>{
       return prev.filter((_,index)=>{
        
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
       onToggle={done=>checkBox(index,done)}/>
      ))}

    </main>
  );
}

export default App;
