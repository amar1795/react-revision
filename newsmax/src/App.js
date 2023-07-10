import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  c="john";
  render() {
    return (
      <div>
        <h1>this is {this.c}</h1>
      </div>
    )
  }
}


