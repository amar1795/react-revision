import React, { useState,useEffect } from 'react'
import Newscomponent from './Newscomponent'
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



function News(props) {
    
    const [articles,setarticles]=useState([{
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
    {
        "source": {
            "id": "usa-today",
            "name": "USA Today"
        },
        "author": ", USA TODAY",
        "title": "9 wounded in Cleveland mass shooting; manhunt for gunman underway - USA TODAY",
        "description": "A gunman opened fire on a crowd of people in Cleveland early Sunday, wounding nine before fleeing the scene.",
        "url": "https://www.usatoday.com/story/news/nation/2023/07/09/cleveland-mass-shooting/70395389007/",
        "urlToImage": "https://www.gannett-cdn.com/presto/2021/06/08/USAT/7dfac38c-792b-4637-8aa3-71b213c5be41-AP_Explosive_Devices.JPG?auto=webp&crop=2058,1157,x1437,y1727&format=pjpg&width=1200",
        "publishedAt": "2023-07-09T13:23:30Z",
        "content": "A gunman opened fire on a crowd of people in Cleveland early Sunday, wounding nine before fleeing the scene.\r\nOfficers on duty in the city's historic Warehouse District responded at about 2:30 a.m. a… [+1138 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "\"American Ramble\": A writer's walk from D.C. to New York City - CBS Sunday Morning",
        "description": "In March 2021, former Wall Street Journal writer Neil King Jr. embarked on a walk of 330 miles, from his home in Washington, D.C., to New York City – his way...",
        "url": "https://www.youtube.com/watch?v=H5KZ-WZq8lw",
        "urlToImage": "https://i.ytimg.com/vi/H5KZ-WZq8lw/maxresdefault.jpg",
        "publishedAt": "2023-07-09T13:19:00Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Slate Magazine"
        },
        "author": "Athena Valentine",
        "title": "Personal finance advice: I can't stand watching my partner coast with their flexible work schedule - Slate",
        "description": "We earn the same.",
        "url": "https://slate.com/business/2023/07/flexible-schedule-personal-finance-advice.html",
        "urlToImage": "https://compote.slate.com/images/601f4c9d-6014-4191-813d-85578123d67f.jpeg?crop=1560%2C1040%2Cx0%2Cy0&width=1560",
        "publishedAt": "2023-07-09T13:00:00Z",
        "content": "Pay Dirt is Slates money advice column. Have a question? Send it to Athena and Elizabeth here. (Its anonymous!)\r\nDear Pay Dirt,\r\nI work from home for a large company and have a fairly structured work… [+2798 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "BBC presenter allegations: Urgent talks held with government - BBC",
        "description": "A presenter accused of paying a teenager for sexual images has been suspended by the corporation.",
        "url": "https://www.bbc.com/news/entertainment-arts-66147003",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/10BF0/production/_130329586_594841314e95069ceafbeb2e2a3c6c705a8d2499.jpg",
        "publishedAt": "2023-07-09T12:31:46Z",
        "content": "The BBC says it has been in touch with police following claims one of its presenters paid a teenager £35,000 for sexually explicit photos.\r\nThe corporation says it is working as quickly as possible t… [+5404 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Deadline"
        },
        "author": "Caroline Frost",
        "title": "Elton John Receives Coldplay Tribute As He Signs Off Final European Tour With Emotional Farewell - Deadline",
        "description": "Elton John signed off his final, final European tour on Saturday evening with an emotional two-hour concert in Stockholm – bringing to an (almost) end his fifty-year career and thousands of p…",
        "url": "https://deadline.com/2023/07/elton-john-receives-coldplay-tribute-last-night-farewell-tour-stockholm-1235432579/",
        "urlToImage": "https://deadline.com/wp-content/uploads/2023/07/GettyImages-1502304146.jpg?w=1024",
        "publishedAt": "2023-07-09T12:05:00Z",
        "content": "Elton John signed off his final, final European tour on Saturday evening with an emotional two-hour concert in Stockholm – bringing to an (almost) end his fifty-year career and thousands of performan… [+1044 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Space.com"
        },
        "author": "Robert Lea",
        "title": "Huge granite 'body' on far side of the moon offers clues to ancient lunar volcanoes - Space.com",
        "description": "Cooled magma deposits have been discovered under a lunar volcano that likely erupted 3.5 billion years ago.",
        "url": "https://www.space.com/moon-volcanoes-granite-body-lunar-reconnaissance-orbiter",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/iBgJC9d4vZzob7woXFmB6b-1200-80.jpg",
        "publishedAt": "2023-07-09T12:00:46Z",
        "content": "A large formation of granite discovered beneath an ancient lunar volcano is further evidence that the far side of the moon once glowed with volcanic eruptions.\r\nThe granite was found under a suspecte… [+2983 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "National Catholic Reporter"
        },
        "author": null,
        "title": "Pope Francis names 21 new cardinals, including Vatican's ambassador to US - National Catholic Reporter",
        "description": "Pope Francis on July 9 named 21 new cardinals, including the Vatican's ambassador to the U.S., Archbishop Christophe Pierre; American-born Archbishop Robert Prevost, who oversees the appointments of Catholic bishops worldwide; and the new head of the Vatican'…",
        "url": "https://www.ncronline.org/vatican/vatican-news/pope-francis-names-21-new-cardinals-including-vaticans-ambassador-us",
        "urlToImage": "https://www.ncronline.org/files/2023-07/20230427T1845-PIERRE-CUA-SPEECH-1758941.JPG",
        "publishedAt": "2023-07-09T12:00:00Z",
        "content": "Pope Francis on July 9 named 21 new cardinals, including the Vatican's ambassador to the U.S., Archbishop Christophe Pierre; American-born Archbishop Robert Prevost, who oversees the appointments of … [+5625 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Phys.Org"
        },
        "author": "The Associated Press",
        "title": "Solar storm on Thursday expected to make Northern Lights visible in 17 states - Phys.org",
        "description": "A solar storm forecast for Thursday is expected to give skygazers in 17 American states a chance to glimpse the Northern Lights, the colorful sky show that happens when solar wind hits the atmosphere.",
        "url": "https://phys.org/news/2023-07-solar-storm-thursday-northern-visible.html",
        "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2023/solar-storm-on-thursda.jpg",
        "publishedAt": "2023-07-09T11:44:35Z",
        "content": "An aurora borealis, also known as the northern lights, is seen in the night sky in the early morning hours of Monday, April 24, 2023, near Washtucna, Wash. A solar storm forecast for Thursday, July 1… [+2555 chars]"
    },
    {
        "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
        },
        "author": "Molly Robey",
        "title": "D.C.-area forecast: Potent storms likely today, with a flood watch in effect - The Washington Post",
        "description": "Flash flooding is possible in some locations this afternoon, while a few storms could produce damaging winds.",
        "url": "https://www.washingtonpost.com/weather/2023/07/09/dc-area-forecast-storms-flood-watch/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/NDZQZOP4BFCENIR4OKHOSX3WBM.jpg&w=1440",
        "publishedAt": "2023-07-09T11:32:25Z",
        "content": "Comment on this story\r\nComment\r\n* Flood watch is in effect today from noon to 10 p.m. *\r\nA somewhat subjective rating of the days weather, on a scale of 0 to 10.\r\n4/10: Although we still need rain, t… [+2432 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "SciTechDaily"
        },
        "author": null,
        "title": "Exploring the Universe's “First Light” With NASA's James Webb Space Telescope - SciTechDaily",
        "description": "After the James Webb Space Telescope’s first year in service, astronomers are awash in new observations that illuminate the oldest stars and galaxies. In its first year on the job, NASA’s James Webb Space Telescope has performed in ways that can only be descr…",
        "url": "https://scitechdaily.com/exploring-the-universes-first-light-with-nasas-james-webb-space-telescope/",
        "urlToImage": "https://scitechdaily.com/images/NASAs-Webb-Space-Telescope.gif",
        "publishedAt": "2023-07-09T11:09:19Z",
        "content": "ByJennifer Chu, Massachusetts Institute of TechnologyJuly 9, 2023\r\nNASAs James Webb Space Telescope. Credit: NASA Goddard Space Flight Center and Northrup Grumman\r\nAfter the James Webb Space Telescop… [+8162 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Detroit Free Press"
        },
        "author": "Andrew Birkle",
        "title": "Detroit Tigers game vs. Toronto Blue Jays: Time, TV channel, more info - Detroit Free Press",
        "description": "The Detroit Tigers are playing their series finale with Toronto Blue Jays and is available to watch on Bally Sports Detroit.",
        "url": "https://www.freep.com/story/sports/mlb/tigers/2023/07/09/detroit-tigers-mlb-game-vs-toronto-blue-jays-time-tv-channel-more-info/70394667007/",
        "urlToImage": "https://www.freep.com/gcdn/presto/2023/07/05/PDTF/225e96db-a821-439e-b1f6-f2de07b8aa23-GTY_1515223343.jpg?crop=2494,1403,x0,y374&width=2494&height=1403&format=pjpg&auto=webp",
        "publishedAt": "2023-07-09T10:07:14Z",
        "content": "Detroit Tigers (39-49) vs. Toronto Blue Jays (49-41)\r\nWhen: 1:40 p.m. Sunday.\r\nWhere: Comerica Park in Detroit.\r\nTV: Bally Sports Detroit.\r\nRadio: WXYT-FM (97.1) in Detroit (Tigers radio affiliates).… [+1629 chars]"
    },
    {
        "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
        },
        "author": "Niha Masih, Leo Sands",
        "title": "Russia-Ukraine war news: Azov commanders return to Ukraine with Zelensky - The Washington Post",
        "description": "Ahead of a NATO summit, U.S. allies distanced themselves from Washington's decision to supply Ukraine with cluster munitions, which are banned in most countries.",
        "url": "https://www.washingtonpost.com/world/2023/07/09/russia-ukraine-war-news/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/4EU2FB4WQEDSPA7MFIAWZN35ZU_size-normalized.jpg&w=1440",
        "publishedAt": "2023-07-09T08:46:28Z",
        "content": "Moscow accused Kyiv and Ankara of violating a prisoner exchange agreement after five commanders from Ukraines Azov Brigade returned to Ukraine from Turkey, where they were held after being freed from… [+4191 chars]"
    },
    {
        "source": {
            "id": "bloomberg",
            "name": "Bloomberg"
        },
        "author": "Lulu Yilun Chen, Jane Zhang",
        "title": "Jack Ma's Clash With Beijing Costs Ant, Alibaba $850 Billion - Bloomberg",
        "description": "As Jack Ma’s clash with the Chinese government draws to a close after almost three years, it’s clear how costly the conflict has proven for his companies, Ant Group Co. and Alibaba Group Holding Ltd.",
        "url": "https://www.bloomberg.com/news/articles/2023-07-09/jack-ma-s-clash-with-beijing-costs-ant-alibaba-850-billion",
        "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ieeCVm66hSro/v1/1200x800.jpg",
        "publishedAt": "2023-07-09T08:36:20Z",
        "content": "As Jack Ma’s clash with the Chinese government draws to a close after almost three years, it’s clear how costly the conflict has proven for his companies, \r\nAnt Group Co. and \r\nAlibaba Group Holding … [+349 chars]"
    }]);
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
        // setarticles(parseddata.articles);
        settotalResults(parseddata.totalResults);
        
        
        props.setprogress(100)
    }

                useEffect(()=>{
                    updateNews();
                })

               

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
                let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}=${page}&pagesize=${props.pagesize}`
                
                let data=await fetch(url);
                let parseddata=await data.json();
                
                // setarticles(articles.concat(parseddata.articles));
                settotalResults(parseddata.totalResults)
               
                    }

             

             //we cannot change state inside a render method
  
    return (
      
        <div>

            <div className="container my-4">
           
            {/* populating the dom using map function */}
            {/* top loader only displaayed while reloading */}
            {/* {state.image && <Loading/>} */}

            {/* if not loading then show loading image */}

            <InfiniteScroll
          dataLength={articles.length}
        //   next={fetchMoreData}
          hasMore={true}
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