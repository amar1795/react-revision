import { useEffect, useState } from "react"
import "./featured.scss"
import { PlayArrow,InfoOutlined } from "@mui/icons-material"
import axios from "axios";


const Featured = ({type}) => {

    const[content,setContent]=useState({});

    useEffect(()=>{
        const getRandomContent=async()=>{
            try {
                const res=await axios.get(`/movie/random?type=${type}`,{
                    headers:{
                        token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDQwZTdiYjlkMWE4NWFkN2NlNjU1NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDc2NDc4NywiZXhwIjoxNjk1MTk2Nzg3fQ.Z5BBENklkMvEOiUJQ-CpBTXBcBg12sXVWjD6lMgqaFU"
            
                      }
                })
                console.log(res.data)
                setContent(res.data[0]);
            } catch (error) {
                console.log(error)
                
            }
        }
        getRandomContent();

    },[type])
  return (


    <div className='featured'>
        {type && (
            <div className="category">
                <span>
                    {type==="movies" ?"movies":"series"}
                </span>
            <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
            </select>
            </div>


        )}
        <img src={content.img} alt="" />
      <div className="info">
        <img src={content.imgSm} alt="" />

     
        <span className='title'>
            {content.title}
        </span>
        <span className='desc'>
            {content.desc}
        </span>


        <div className="buttons">
            <button className="play">
                <span>play</span>
                <PlayArrow/>
            </button>
            <button className="more">
                <span>info</span>
                <InfoOutlined/>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Featured
