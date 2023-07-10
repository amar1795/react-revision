import React, { Component } from 'react'
import Newscomponent from './Newscomponent'



export default class News extends Component {
    articles=[

        {
        "status": "ok",
        "totalResults": 36,
        "articles": [
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
          
        ]
    }
    ]

    constructor(){
        super();
        this.state={
            articles:this.articles,
        }
    }
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
