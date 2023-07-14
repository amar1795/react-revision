import React, { Component } from 'react'
import Newscomponent from './Newscomponent'
import Loading from './Loading';
import PropTypes from 'prop-types';




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

    static defaultProps={

       category:"business",
       country:"us"

    }
    
    static propTypes={
       
        pagesize:PropTypes.number,


    }



    constructor(){
        // we can create state using constructor since this is a class based component
        super();
        this.state={
            articles:this.articles,
            image:false,
            page:1,
          

            
        }
    }

    async updateNews(){

        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4136a686f9784b0cae639181c30d9814&page=${this.state.page}&pagesize=${this.props.pagesize}`
        this.setState({
            image:true
        })
        let data=await fetch(url);
        let parseddata=await data.json();
        this.setState({
        articles:parseddata.articles,
        totalResults:parseddata.totalResults,
        image:false

        })
    }

                async componentDidMount(){

                    // this is being used to set the state

                    this.updateNews();


                }

                handlePreviousClick=async()=>{
                console.log("previous click")
              
                await(this.setState({page:this.state.page-1}))  
                // will wait for the page to be updated then the udpate news will be called
                this.updateNews();

                    }


            handleNextClick=async()=>
            {

                console.log("Next click")
                
                await(this.setState({page:this.state.page +1}));
                // will wait for the page to be updated then the udpate news will be called

                this.updateNews();

            
             }

  render() {
    return (
      
        <div>

            <div className="container my-4">
            <div className='row'>
            

            {/* populating the dom using map function */}
            <div className="container d-flex justify-content-center ">
                {/* if loading then show loading image */}
            {this.state.image && <Loading/>}
            </div>

            {/* if not loading then show loading image */}
            {!this.state.image && this.state.articles.map((element)=>{
            console.log(    "this is working")
            return  <div className='col-md-3 my-3' key={element.url}  >
                {/* was unable to add slice in description getting error needs to be corrected 
                the error was because few value of description are being set to null*/}
                
            <Newscomponent title={element.title?element.title.slice(0,45):" "} description={element.description ? element.description.slice(0, 80) : ''} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
            })}  

            </div>
            </div>
            <div className="container d-flex justify-content-between">

            
            <button type="button" disabled={this.state.page < 2} onClick={this.handlePreviousClick} class="btn btn-dark mb-3">&larr; Previous</button>
            <button disabled={this.state.page +1>Math.ceil(this.state.totalResults/20)} type="button" onClick={this.handleNextClick} class="btn btn-dark mb-3">Next &rarr;</button>
            </div>

            </div>
        
     
    )
  }
}
