import React, { Component } from 'react'

export default class Newscomponent extends Component {
  render() {

        // using destructuring storing the values in class based props
    let {title,description,imageUrl,newsUrl}=this.props
    
    return (
        <div>
        <div class="card" style={{width: "18rem;"}}>
    <img src={imageUrl?imageUrl:"https://ichef.bbci.co.uk/news/1024/branded_news/10BF0/production/_130329586_594841314e95069ceafbeb2e2a3c6c705a8d2499.jpg"} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <p class="card-text">{description}</p>
      <a href={newsUrl} target='_blank' class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
      </div>
    )
  }
}
