import { useState } from "react";
import "./newproduct.css";
import storage from "../../firebase";





export default function NewProduct() {
  
  // one usstate hook for all the text and other for respective  file inputs 
  const [movie,setMovie]=useState(null);
  const [img,setImg]=useState(null);
  const [imgTitle,setImgTitle]=useState(null);
  const [imgSm,setImgSm]=useState(null);
  const [trailer,setTrailer]=useState(null);
  const [video,setVideo]=useState(null);
  const [uploaded,setUploaded]=useState(0);
  

  const handleChange=(e)=>{
    const value=e.target.value;
    setMovie({...movie,[e.target.name]:value})
  }


  const upload=(items)=>{
    items.forEach((item) => {

      // this will create a unique filename based on the combination of date and time
        const filename=new Date().getTime() + item.file.name;
        const uploadTask=storage.ref(`/items/${filename}`).put(item.file);
        uploadTask.on(
          "state_changed",
          (snapshot)=>{
            const progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
            console.log("uploaded is"+progress+"%done.")

          },
          (err)=>{
            console.log(err);
          },
          ()=>{
            uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
              setMovie((prev)=>{
                return{...prev,[item.label]:url}
              });
              setUploaded((prev)=>prev+1)
            })
          }
        )


      
    });

  }

  const handleUpload=(e)=>{
    e.preventDefault();
    upload([
      {file:img,label:"img"},
      {file:imgTitle,label:"imgTitle"},
      {file:imgSm,label:"imgSm"},
      {file:trailer,label:"trailer"},
      {file:video,label:"video"},
      
    ])
  }

  console.log(movie)

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="img"  name="img" onChange={(e)=>setImg(e.target.files[0])}/>
        </div>
        <div className="addProductItem">
          <label>Title Image</label>
          <input type="file" placeholder="Apple Airpods"  id="imgTitle" name="imgTitle" onChange={(e)=>setImgTitle(e.target.files[0])}/>
        </div>
        <div className="addProductItem">
          <label>Thumbnail image</label>
          <input type="file" placeholder="123"  id="imgSm" name="imgSm" onChange={(e)=>setImgSm(e.target.files[0])}/>
        </div>

<div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="Title"  id="title" name="title" onChange={handleChange}/>
        </div>

<div className="addProductItem">
          <label>Description</label>
          <input type="text" placeholder="Description"  id="desc" name="desc" onChange={handleChange}/>
        </div>
<div className="addProductItem">
          <label>Year</label>
          <input type="text" placeholder="Year"  id="year" name="year" onChange={handleChange}/>
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
          <select name="active" id="active">
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>

        <div className="addProductItem">
          <label>Trailer</label>
          <input type="file" placeholder="Trailer"  id="trailer" name="trailer" onChange={(e)=>setTrailer(e.target.files[0])}/>
        </div>

<div className="addProductItem">
          <label>Video</label>
          <input type="file" placeholder="Video"  id="video" name="video" onChange={(e)=>setVideo(e.target.files[0])}/>
        </div>
        {
          uploaded === 5 ? <button className="addProductButton">Create</button>
          :
          <button className="addProductButton" onClick={handleUpload}>Upload</button>

        }
      </form>
    </div>
  );
}