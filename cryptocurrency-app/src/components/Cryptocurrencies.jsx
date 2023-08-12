import React,{useState} from 'react'
import millify from 'millify'
import { Card,Row,Col,Input } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi';
import {Link} from "react-router-dom";


const Cryptocurrencies = ({simplified}) => {

  const count=simplified?10:100;

  const {data:cryptosList,isFetching}= useGetCryptosQuery(count);
  const [Cryptos,setCryptos]=useState(cryptosList?.data?.coins)
  console.log(Cryptos)
  if(isFetching) return "Loading..."
  return (
    <>

    <Row gutter={[32,32]} className='crypto-card-container'>
      {Cryptos?.map((currency)=>(
        // not using curly braces in map function means we don't have to write return and it would be return automatically 
        // whereas if we use curly braces then in that case we  will have to reutrn in the end 
        <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
          <Link to={`/crypto/${currency.id}`}> 
            <Card 
                title={`${currency.rank}.${currency.name}`}
                extra={<img className='crypto-image' src={currency.iconUrl}/>}
                  hoverable
            >
                    <p>Price:{millify(currency.price)}</p>
                    <p>Market Cap:{millify(currency.marketCap)}</p>
                    <p>Daily Change:{millify(currency.change)}%</p>
                    
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
    
    
    </>
  )
}

export default Cryptocurrencies
