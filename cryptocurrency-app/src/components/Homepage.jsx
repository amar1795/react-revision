import React from 'react'
import millify from 'millify'
// millify is used to structure the high values eg 100000 will be 1L ie 1 lakh
import { Typography,Row,Col,Statistic } from 'antd'
import {Link} from "react-router-dom";
import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';



const {Title} =Typography
const Homepage = () => {
  const {data,isFetching}= useGetCryptosQuery();
  // using console.log gives me an error an the app crashes unable to read undefined data when using globalstats.exchanges ???? how it can give an error console.log
  // understood: using chaining operators data?.data does not gives runtime error as above if the data is undefined it will show undefined and using .operators in that case console.log(data.data); will result in error 

  console.log(data);
  const globalStats=data?.data?.stats;

  if(isFetching) return 'Loading...'

  return (
    <>
    <Title level={2} className='heading'>Global Crypto Status</Title>
    <Row>
     <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}></Statistic></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.exchanges)}></Statistic></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}></Statistic></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}></Statistic></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}></Statistic></Col>

    </Row> 
    <div className="home-heading-container">
        <Title level={2} className='home-title'>Top 10 currencies in the world</Title>
        <Title level={3} className='show-more'><Link to="/Cryptocurrencies">Show More </Link></Title>
    </div>
   <Cryptocurrencies/>

    <div className="home-heading-container">

          <Title level={2} className='home-title'>Latest Crypto News</Title>
          <Title level={3} className='show-more'><Link to="/News">Show More </Link></Title>
    </div>
   <News/>     
   </>
  )
}

export default Homepage
