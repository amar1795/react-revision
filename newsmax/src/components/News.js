import React, { Component } from 'react'
import Newscomponent from './Newscomponent'
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";







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
        }
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
        // to use props inside a constructor we have pass paramerters both in super and constructor as (props)
    }

    async updateNews(){
        this.props.setprogress(10)
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pagesize}`
       
        let data=await fetch(url);
        this.props.setprogress(30)
        let parseddata=await data.json();
        this.props.setprogress(50)
        this.setState({
        articles:parseddata.articles,
        totalResults:parseddata.totalResults,
        

        })
        this.props.setprogress(100)
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

            //  this function is called for infinite scroll data only
             fetchMoreData=async ()=>{
                let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}=${this.state.page}&pagesize=${this.props.pagesize}`
                
                let data=await fetch(url);
                let parseddata=await data.json();
                
                this.setState({
                    // concatenating the data for the infinite loading bar to work 
                articles:this.state.articles.concat(parseddata.articles),
                totalResults:parseddata.totalResults,
                
       

        })

             }

             //we cannot change state inside a render method
  render() {
    return (
      
        <div>

            <div className="container my-4">
           
            

            {/* populating the dom using map function */}
            {/* top loader only displaayed while reloading */}
            {/* {this.state.image && <Loading/>} */}

            {/* if not loading then show loading image */}

            <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={true}
        //   this loading will be shown at the time of loading down
          loader={<Loading/>}
                            >
         <div className='row'>
            {this.state.articles.map((element)=>{
            console.log("this is working")
            return  <div className='col-md-3 my-3' key={element.url}  >
                {/* was unable to add slice in description getting error needs to be corrected 
                the error was because few value of description are being set to null*/}
                
            <Newscomponent title={element.title?element.title.slice(0,45):" "} description={element.description ? element.description.slice(0, 80) : ''} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
            })} 
        </div>

            
            </InfiniteScroll> 
            </div>
             </div>
            
            
        
     
    )
  }
}
