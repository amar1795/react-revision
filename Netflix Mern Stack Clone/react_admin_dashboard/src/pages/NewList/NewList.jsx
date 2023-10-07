import { useContext, useEffect, useState } from "react";
import "./newlist.css";
import storage from "../../firebase";
import { createMovie } from "../../context/listcontext/apicalls";
import { MovieContext } from "../../context/moviecontext/MovieContext";
import { ListContext } from "../../context/listcontext/ListContext";
import { getMovies } from "../../context/moviecontext/apicalls";



export default function NewList() {
  
  const { dispatch } = useContext(ListContext);
  const {movies, dispatch:movieDispatch } = useContext(MovieContext);
  
    useEffect(()=>{
    getMovies(movieDispatch)
    },[movieDispatch])

  // one usstate hook for all the text and other for respective  file inputs 
  const [list,setList]=useState(null);
  
  const handleChange=(e)=>{
    const value=e.target.value;
    setList({...list,[e.target.name]:value})
  }


  const handleSubmit = (e) => {
    e.preventDefault();
  };
const handleSelect = (e) => {
    e.preventDefault();
  };



  console.log(list)

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        

<div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="Title"  id="title" name="title" onChange={handleChange}/>
        </div>

<div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="genre"  id="genre" name="genre" onChange={handleChange}/>
        </div>
<div className="addProductItem">
          <label>Limit</label>
          <input type="text" placeholder="limit"  id="limit" name="limit" onChange={handleChange}/>
        </div>
<div className="addProductItem">
          <label>Age Limit</label>
          <input type="text" placeholder="Age Limit"  id="ageLimit" name="ageLimit" onChange={handleChange}/>
        </div>

<div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="Genre"  id="genre" name="genre" onChange={handleChange}/>
        </div>

      <div className="addProductItem">
          <label>Duration</label>
          <input type="text" placeholder="Duration"  id="duration" name="duration" onChange={handleChange}/>
        </div>

        <div className="addProductItem">
          <label>Is Series ?</label>
          <select name="active" id="active" onChange={handleChange}>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>
        </div>

        <div className="addProductItem">
          <label>Content</label>
          <select multiple name="content" id="active" onClick={handleSelect}>
            {movies.map((movie)=>(
              <option value={movie._id}>{movie.title}</option>
            ))}
          </select>
        </div>

        <button className="addProductButton" onClick={handleSubmit}>Create</button>

      </form>
    </div>
  );
}