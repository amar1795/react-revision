
import React,{useEffect} from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {useGetCryptoHistoryQuery } from '../services/cryptoApi';

// without using the above import Chart from 'chart.js/auto'; it gives error //category is not registered scale

import { CategoryScale } from 'chart.js';

import { Col, Row, Typography } from 'antd';


const { Title } = Typography;

const LineChart = ({timePeriod, currentPrice, coinName,coinId }) => {
  
  const {data:coinHistory,isFetching}= useGetCryptoHistoryQuery({coinId,timePeriod});





  Chart.register(CategoryScale);

  // console.log((coinHistory?.data?.history[0].timestamp).toLocaleDateString());

  // chart issue needs to be corrected as the data on charts are being fetched latere than the chart component is being rendered hence the updated data is not being shown

  const coinPrice = [];
  const coinTimestamp = [];

  // coin price
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }


// coin time stamp
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    const timestamp = coinHistory?.data?.history[i].timestamp;
    const date = new Date(timestamp);
    coinTimestamp.push(date.toLocaleDateString());  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [{
        type: 'category',
        ticks: {
          beginAtZero: true,
        },
        gridLines: {
          color: '#ccc',
        },
      }],
    },
  };

  if (isFetching) {
    return <div>Loading...</div>; // or a loading spinner
  }

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;