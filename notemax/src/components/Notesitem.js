import React from 'react'

const Notesitem = (props) => {
    const{note}= props
  return (
    //col md-3 creates the column and it should be inside a row class to get that effect
    <div className='col-md-3 my-3'>
        
        <div class="card" >
    <div class="card-body ">
    <h5 class="card-title">{note.title}</h5>
    <p class="card-text">{note.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      
    </div>
  )
}

export default Notesitem
