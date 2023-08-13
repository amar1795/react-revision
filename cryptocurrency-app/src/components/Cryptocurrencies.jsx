import React,{useEffect, useState} from 'react'
import millify from 'millify'
import { Card,Row,Col,Input } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi';
import {Link} from "react-router-dom";


const Cryptocurrencies = ({simplified}) => {
  const count=simplified?10:100;

  const {data:cryptosList,isFetching}= useGetCryptosQuery(count);
  const [Cryptos,setCryptos]=useState([])
  const [searchTerm,setSearchTerm]=useState("")

// use effect acts as component did mount and runs always for once when the react renders component for the 1st time 


  useEffect(()=>{

    const filteredData=cryptosList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setCryptos(filteredData)
  },[cryptosList,searchTerm]);


  // the dependencies "cryptosList,searchTerm" acts as comppnenent did update and whenever it updates the use effect is loaded again 


  console.log(Cryptos)
  // rtk query has thie benifit of showing loader instead of using load
  if(isFetching) return "Loading..."

  return (
    <>

    {!simplified && 
      <div className="search-crypto">
        <Input placeholder='Search CryptoCurrency' onChange={(e)=>setSearchTerm(e.target.value)}></Input>
      </div>
    }
  
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
