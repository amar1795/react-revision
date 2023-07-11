import React, { Component } from 'react'
import image from './loading.gif'


export default class Loading extends Component {
  render() {
    return (  
      <div>
        <img src={image} alt="Loading" />
      </div>
    )
  }
}







