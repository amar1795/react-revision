import React, { Component } from 'react'
import image from './loading.gif'


export default class Loading extends Component {
  render() {
    return (  
      <div>
        <div className="container d-flex justify-content-center ">
        <img src={image} alt="Loading" />
        </div>
      </div>
    )
  }
}







