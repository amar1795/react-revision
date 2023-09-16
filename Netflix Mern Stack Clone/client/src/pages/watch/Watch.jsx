import { ArrowBackOutlined } from "@mui/icons-material"
import "./watch.scss"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";

const Watch = () => {

  const location =useLocation();
  // const data = location.state;
  console.log(location);
  const movie=location.state;


  return (
    <div className="watch">
      <Link to={{pathname:"/"}}>
      
        <div className="back">
        <ArrowBackOutlined/>
        home
        </div>
        </Link>
        <video className="video" autoPlay progress controls src={movie.video}>
    </video>
      
    </div>
  )
}

export default Watch
