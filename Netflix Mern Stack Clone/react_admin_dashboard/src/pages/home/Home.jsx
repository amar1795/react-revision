import React, { useEffect,useMemo,useState } from 'react'
import "./home.css"
import Featuredinfo from '../../components/featuredinfo/Featuredinfo'
import Chart from '../../components/chart/Chart'
import Widgetlg from '../../components/widgetLg/Widgetlg'
import Widgetsm from '../../components/widgetSm/Widgetsm'
import axios from "axios"


const Home = () => { 
  // we are memoizing this array as the value is not going to change and is in dependecy of use effect 
  const MONTHS =useMemo(
    ()=>
  [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep", 
    "Oct",
    "Nov",
    "Dec", 
  ],
  []
  );
  const [userStats,setUserStats]=useState([])
  
  useEffect(()=>{
    const getStats=async()=>{
      try {
        const res=await axios.get("http://localhost:8000/api/users/stats",{
          headers:{
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MjA0YzJhZmUxMDliYTRiM2VmZDg1NCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2OTY2MTU0ODcsImV4cCI6MTY5NzA0NzQ4N30.RXQ1oaVH1bxAY63TfIF3meCjFF3R3-kNIYCgXLcF7qo"
          },
        });
        

        const statList=res.data.sort(function (a, b){
          return a._id - b._id;
        });

          // the below code was giving error as the data was populating twice becuse setUserStats is inside the map and it was giving the issue 
      //     statList.map((item) =>
      //   setUserStats((prev) => [
      //     ...prev,
      //     { name: MONTHS[item._id - 1], "New User": item.total },
      //   ])
      // );

        const userstats = statList.map((item) => ({
          name: MONTHS[item._id - 1],
          'New user': item.total,
        }));
      
        setUserStats(userstats);
        
      } catch (error) {

        console.log(error)
        
      }
    };
    getStats();

  },[MONTHS])

  console.log(userStats)

  return (
    <div className='home'>
      <Featuredinfo/>
      <Chart data={userStats  } grid title="User Analytics" dataKey="New user"/>
      <div className="homeWidgets">
        <Widgetsm/>
        <Widgetlg/>
      </div>
    </div>
  )
}

export default Home
