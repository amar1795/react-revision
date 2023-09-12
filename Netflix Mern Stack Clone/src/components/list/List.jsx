import { ArrowBackIosOutlined, ArrowForwardIos, ArrowForwardIosOutlined } from '@mui/icons-material'
import React from 'react'
import ListItem from '../ListItem/ListItem'
import "./list.scss"
const List = () => {
  return (
    <div className='list'>
        <span className='listTitle'>Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined/>
            <div className="container">
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                
            </div>
            <ArrowForwardIosOutlined/>
        </div>
     
    </div>
  )
}

export default List
