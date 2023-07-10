import React, { Component } from 'react'
import Newscomponent from './Newscomponent'



export default class News extends Component {
    articles=[

        {
            "source": {
                "id": null,
                "name": "POLITICO.eu"
            },
            "author": "Hans von der Burchard, Paul McLeary, Laura Kayali",
            "title": "Western powers race to finish security pledges for Ukraine - POLITICO Europe",
            "description": "The US, Britain, France and Germany are hoping to unveil a framework others can join at a NATO summit this week.",
            "url": "https://www.politico.eu/article/western-powers-nato-security-pledges-ukraine-putin-russia-war/",
            "urlToImage": "https://www.politico.eu/cdn-cgi/image/width=1200,height=630,fit=crop,quality=80,onerror=redirect/wp-content/uploads/2023/05/30/GettyImages-1242052307-scaled.jpg",
            "publishedAt": "2023-07-09T13:54:10Z",
            "content": "Press play to listen to this article\r\nVoiced by artificial intelligence.\r\nA small group of Western allies are engaged in advanced and frantic, last-minute negotiations to finalize a security assuranc… [+5581 chars]"
        },
      
    ]

    constructor(){
        super();
        this.state={
            articles:this.articles,
            loading:false
        }
    }
  render() {
    return (
      
        <div>

            <div className="container my-4">
            <div className='row'>

            {this.state.articles.map((element)=>{
        
            console.log(    "this is working")
            return  <div className='col-md-3 my-3' key={element.url}  >
                {/* unable to add slice in description getting error needs to be corrected */}
            <Newscomponent title={element.title.slice(0,45)} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
            })}  

            </div>
            </div>
            </div>
        
     
    )
  }
}
