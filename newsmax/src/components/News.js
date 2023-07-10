import React, { Component } from 'react'
import Newscomponent from './Newscomponent'

export default class News extends Component {
  render() {
    return (
      
        <div>

            <div className="container my-4">
            <div className='row'>
            <div className='col-md-3 my-3'  >
            <Newscomponent title='title' description="description"/>
            </div>
<div className='col-md-3 my-3'  >
            <Newscomponent title='title' description="description"/>
            </div>
<div className='col-md-3 my-3'  >
            <Newscomponent title='title' description="description"/>
            </div>
<div className='col-md-3 my-3'  >
            <Newscomponent title='title' description="description"/>
            </div>

            </div>
            </div>
            </div>
        
     
    )
  }
}
