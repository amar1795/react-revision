import React, { useState } from 'react'
import Checkbox from './Checkbox'

const Task = ({name,done,onToggle,ondelete,updatedtextvalue}) => {
  const [editMode,seteditMode]= useState(false);
  return (
    <div className={'task '+ (done?"done":" ")}>
       <Checkbox checked={done} onClick={()=>onToggle(!done)}  />

      {!editMode &&  <div className='name' onClick={()=>{seteditMode(true)}}>
       <span>{name}</span>
       </div>}

       {editMode && (
        <form onSubmit={e=>{e.preventDefault(); seteditMode(false)}}>
          <input type="text" value={name}  onChange={e=>updatedtextvalue(e.target.value)} />
        </form>

       )}

       <button className='delete'onClick={ondelete} >
       <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
       </button>
    </div>
  )
}

export default Task
