import React, { Component } from 'react'
import Newscomponent from './Newscomponent'
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";





export default class News extends Component {
    articles=[]

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
       
        let data=await fetch(url);
        let parseddata=await data.json();
        this.setState({
        articles:parseddata.articles,
        totalResults:parseddata.totalResults,
        

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

             fetchMoreData=async ()=>{
                let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4136a686f9784b0cae639181c30d9814&page=${this.state.page}&pagesize=${this.props.pagesize}`
                this.setState({
                    // image:true
                })
                let data=await fetch(url);
                let parseddata=await data.json();
                this.setState({
                    // concatenating the data for the infinite loading bar to work 
                articles:this.state.articles.concat(parseddata.articles),
                totalResults:parseddata.totalResults,
                // image:false,
               
       

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
