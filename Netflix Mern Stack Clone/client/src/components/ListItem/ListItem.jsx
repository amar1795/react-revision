import { Add,PlayArrow} from "@mui/icons-material"
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import axios from "axios";

import "./ListItem.scss"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const ListItem = ({index,item}) => {
  const [isHovered,setIsHovered]=useState(false);
  const [movie,setMovie]=useState([])

  useEffect(()=>{
    const getmovie=async()=>{
    try {

    const res=await axios.get("/movie/find/"+item,{
      headers:{
        token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDQwZTdiYjlkMWE4NWFkN2NlNjU1NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDc2NDc4NywiZXhwIjoxNjk1MTk2Nzg3fQ.Z5BBENklkMvEOiUJQ-CpBTXBcBg12sXVWjD6lMgqaFU"

      },
    });
    
    
    setMovie(res.data)
    // console.log(res.data)
  } catch (error) {
    console.log(error)
    
  }
  
}
    getmovie();
  },[item])



  const trailer= "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <>
    <Link to={"/watch"} state={{movie}} >
      {/* the below syntax is not working for passing data in the link */}
    {/* <Link to={{pathname:"/watch", state:movie}} > */}
    <div className='listItem'
    style={{left :isHovered && index*225-50+index*2.5}}
    
    onMouseEnter={()=>setIsHovered(true)}
    onMouseLeave={()=>setIsHovered(false)}
    >
       <img
        src={movie.imgSm}
        alt=""
      />
      {isHovered &&
      <>
      <video src={movie.trailer} autoPlay={true} loop />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className="icon"/>
          <Add className="icon"/>
          <ArrowUpwardOutlinedIcon className="icon"/>
          <ArrowDownwardOutlinedIcon className="icon"/>
          </div>
          <div className="itemInfoTop">
            <span>1 hour 14 minutes</span>
            <span className="limit">{movie.limit}</span>
            <span>{movie.year}</span>
          </div>
          <div className="title">
            {movie.title}
          </div>
          <div className="desc">
            {movie.desc}
          </div>
          <div className="genre">
            {movie.genre}
          </div>
      </div>
      </>
       }
    </div>
    </Link>
    </>
  )
}

export default ListItem
