import { useState } from 'react';
import './App.css';
import Checkbox from './components/Checkbox';
import Inputform from './components/Inputform';

function App() {
  const [task,settask]=useState([])
  
  function addtask(name) {
    settask(prev=>{
      return [...prev,{name:name,done:false}]
    })
    
  }

  return (
    <main >
      <Inputform add={addtask}/>
      {/* here the add prop value is coming from input form , here the prop value is goin in oppposite direction */}
      
      {task.map(e=>(
        <Checkbox defaultchecked={task.done} {...e}/>
      ))}
        
    </main>
  );
}

export default App;
