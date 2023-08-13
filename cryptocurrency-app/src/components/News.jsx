import React, { useState } from 'react'
import { Select,Typography,Row,Col,Avatar,Card } from 'antd';
import moment from 'moment';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

import demoImage from "../images/bitcoin-2007769_640.jpg"
const {Text,Title}=Typography;
const {Option}=Select;

const News = ({simplified}) => {
  
  const count=simplified?6:12;
  // usestate to set the newscategory manualy using the search and default is cryptocurency
  const [newsCategory,setnewsCategory]=useState('Cryptocurrency')
  const {data:cryptoNews,isFetching} =useGetCryptoNewsQuery({newsCategory,count})
  const {data:cryptosList}= useGetCryptosQuery(100);
  // console.log(cryptoNews)
  if(isFetching) return "Loading..."

  return (
    <Row gutter={[24,24]}>
      {!simplified &&(
        <Col span={24}>
          <Select
            showSearch
            className='select-news'
            placeholder="select a crypto"
            optionFilterProp='children'
            onChange={(value)=>setnewsCategory(value)}
            filterOption={(input,option)=>option.children.toLowerCase().indexOf(input.toLowerCase())>=0}
            >
              <option value="Cryptocurrency">Cryptocurrency</option>
              {/* iterating through the available options of crypto that will be shown in the options */}
              {cryptosList?.data?.coins.map((coin)=><Option value={coin.name}>{coin.name}</Option>)}

            </Select>
        </Col>
      )}
      {cryptoNews?.value?.map((news,i)=>(
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className='news-card'>
            <a href={news.url} target='_blank' rel="noreferrer">
              <div className='news-image-container'>
                  <Title className="news-title" level={4}>
                    {news.name}     
                  </Title>
                  <img style={{maxWidth:"100px",maxHeight:"100px"}} src={news?.image?.thumbnail?.contentUrl || demoImage } alt="news" />
              </div>
                <p>
                  {news.description>100 ? `${news.description.subsctring(0,100)}...`: news.description}
                </p>
                <div className='provider-container'>
                  <div>
                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt='news'></Avatar>
                    <Text className='provider-name'>{news.provider[0]?.name}</Text>
                  </div>
                    <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                </div>
            </a>
          </Card>
        </Col>
        )
   
      )}
    </Row>
  )
}

export default News
