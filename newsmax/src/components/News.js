import React, { useState,useEffect } from 'react'
import Newscomponent from './Newscomponent'
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



function News(props) {
    
    const [articles,setarticles]=useState([]);
    const [image,setimage]=useState(false);
    const [page,setpage]=useState(1);
    const [totalResults,settotalResults]=useState(0);
    

    const updateNews=async()=>{
        props.setprogress(10)
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`
        setimage(true)
        // infinite scrolling not working when api key hidden need to correct the code
       
        let data=await fetch(url);
        props.setprogress(30)
        let parseddata=await data.json();
        props.setprogress(50)
        setarticles(parseddata.articles);
        settotalResults(parseddata.totalResults);
        
        
        props.setprogress(100)
    }

                useEffect(()=>{
                    updateNews();
                },[])

                // putting empty array in useeffect will prevets the udpatenews from being loading muliple times and avoiding api being hit multiple times 

               

                const handlePreviousClick=async()=>{
                console.log("previous click")
              
                // await(setState({page:state.page-1}))  
                setpage(page+1);


                // will wait for the page to be updated then the udpate news will be called
                updateNews();

                    }


            const handleNextClick=async()=>
            {

                console.log("Next click")
                
                setpage(page+1);

                // will wait for the page to be updated then the udpate news will be called

                updateNews();

            
             }

            //  this function is called for infinite scroll data only
             const fetchMoreData=async ()=>{
              
                let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pagesize}`
                await setpage(page+1)
                
                let data=await fetch(url);
                let parseddata=await data.json();
                //articles.concat helps to add the data in the existing data
                setarticles(articles.concat(parseddata.articles));
                settotalResults(parseddata.totalResults)
               
                    }

             

             //we cannot change state inside a render method
  
    return (
      
        <div>

            <div className="container my-4">
           
          

            <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!=totalResults}
        //   this loading will be shown at the time of loading down
          loader={<Loading/>}
                            >
         <div className='row'>
            {articles.map((element)=>{
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

export default News

News.defaultProps={

    category:"business",
    country:"us"

 }
 
 News.propTypes={
    
     pagesize:PropTypes.number,
 }