import React, { Component } from 'react'
import image from './loading.gif'


function Loading () {
  
    return (  
      <div>
        <div className="container d-flex justify-content-center ">
        <img src={image} alt="Loading" />
        </div>
      </div>
    )
  
}

export default Loading







