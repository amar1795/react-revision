import React from 'react'

const Notesitem = (props) => {
    const{note}= props
  return (
    //col md-3 creates the column and it should be inside a row class to get that effect
    <div className='col-md-3 my-3'>
        
        <div class="card" >
    <div class="card-body ">

    <div className="container d-flex align-items-center">    
    <h5 class="card-title">{note.title}</h5>
    <i class="fa-regular fa-pen-to-square mx-3"></i>
    <i class="fa-solid fa-trash mx-1"></i>
    </div>
    <div className="container">

    <p class="card-text">{note.description}</p>
    </div>
    
    
  </div>
</div>
      
    </div>
  )
}

export default Notesitem
