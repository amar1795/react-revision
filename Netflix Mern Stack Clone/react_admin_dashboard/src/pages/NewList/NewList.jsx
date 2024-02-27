import { useContext, useEffect, useState } from "react";
import "./newlist.css";
import storage from "../../firebase";
import { createList, createMovie } from "../../context/listcontext/apicalls";
import { MovieContext } from "../../context/moviecontext/MovieContext";
import { ListContext } from "../../context/listcontext/ListContext";
import { getMovies } from "../../context/moviecontext/apicalls";
import { useNavigate } from 'react-router-dom';


export default function NewList() {
  
  const { dispatch } = useContext(ListContext);
  const {movies, dispatch:movieDispatch } = useContext(MovieContext);
  const navigate = useNavigate();
  
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
    createList(list,dispatch)
    setTimeout(() => {
      navigate("/lists")
    }, 500);
  };
  // need to understand the handlesect function once again 
const handleSelect = (e) => {
  let value=  Array.from(e.target.selectedOptions,(option)=>option.value)
  setList({...list,[e.target.name]:value})


  };

  console.log("list value is"+list)

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm">

        <div className="formLeft">

          <div className="addProductItem">
                    <label>Title</label>
                    <input type="text" placeholder="popular Movies"  id="title" name="title" onChange={handleChange}/>
                  </div>

          <div className="addProductItem">
                    <label>Genre</label>
                    <input type="text" placeholder="action"  id="genre" name="genre" onChange={handleChange}/>
                  </div>


          <div className="addProductItem">
            <label>Type</label>
            <select name="type" id="type" onChange={handleChange}>
            <option >Type</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
          </div>

        </div>

        <div className="formRight">

     
          <div className="addProductItem">
            <label>Content</label>
            <select multiple name="content" id="content" onChange={handleSelect} style={{height:"300px"}}>
              {movies.map((movie)=>(
                <option key={movie._id} value={movie._id}>{movie.title}</option>
              ))}
            </select>
          </div>
        </div>
        <button className="addProductButton" onClick={handleSubmit}>Create</button>

      </form>
    </div>
  );
}