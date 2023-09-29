import React from 'react'
import "./home.css"
import Featuredinfo from '../../components/featuredinfo/Featuredinfo'
import Chart from '../../components/chart/Chart'
import { userData } from '../../Dummydata'
import Widgetlg from '../../components/widgetLg/Widgetlg'
import Widgetsm from '../../components/widgetSm/Widgetsm'
const Home = () => {
  return (
    <div className='home'>
      <Featuredinfo/>
      <Chart data={userData} grid title="User Analytics" dataKey="Active User"/>
      <div className="homeWidgets">
        <Widgetsm/>
        <Widgetlg/>
      </div>
    </div>
  )
}

export default Home
