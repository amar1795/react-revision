import React ,{useState} from 'react'
const Form = (props) => {
  const [text,setText]=useState("enter your text here");
const [btn,setbtn]=useState("");




  const handleonchange =(e)=>{

    setText(e.target.value)

  }


const handleCopy=()=>{
  
  let x=document.getElementById("floatingTextarea2");
  x.select();
  navigator.clipboard.writeText(x.value);
  console.log(text);
  

}

//the below version will also work 
// const handleCopy=()=>{
  

//   navigator.clipboard.writeText(text);
//   console.log(text);

// }

const handleextraSpaces=()=>{
  let newtext=text.split(/[ ]+/);
  setText(newtext.join(" "));
  console.log(text);

}


const handleonclick =(e)=>{

  if(text!="")
  {

    setText(text.toUpperCase())
    setbtn("- Converted to Uppercase")
    props.showAlert("Text has been converted to Uppercase","success")
  }

  else
  {
    setbtn(" Please enter some text first")


  }
    
  }
  const handlecleartext =(e)=>{

    if(text!="")
  {

    setbtn("- Text has been cleared")
    setText("")
  }

  else
  {
    setbtn("- No Text to clear")

  }
  
  
    }

const handlelowercase =(e)=>
{

  if(text!="")
  {

    setbtn("- Converted to Lowercase")
    setText(text.toLowerCase())
    props.showAlert("Text has been converted to Lowercase","success")


  }

  else
  {
    setbtn(" Please enter some text first")

  }
}

  return ( 
    <div>
      <h1>Enter your Text here</h1>
<div class="form-floating my-4">
  
  <textarea class="form-control"   onChange={handleonchange} value={text} placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "200px",...props.Mystyle}}></textarea>
  </div>
  <button className="btn btn-primary my-1 mx-3 " onClick={handleonclick}>
    Convert to Uppercase
  </button>
  <button className="btn btn-primary my-1 " onClick={handlelowercase}>
    Convert to Lowercase
  </button>
  <button className="btn btn-primary my-1 mx-3" onClick={handlecleartext}>
    ClearText
  </button> 
  <button className="btn btn-primary my-1 mx-3" onClick={handleCopy}>
      Copy  </button>
      <button className="btn btn-primary my-1 mx-3" onClick={handleextraSpaces}>
      remove Extra Spaces  </button>

    <div className="container">
      <h1>your text summary</h1>
      <p>{text.split(" ").length} Words and {text.length} characters</p>

      <p>{0.008*text.split("").length}Minutes needed on average to read the above sentence</p>
      <h2>Preview <span style={{color:"white",backgroundColor:"  #0080ff",borderRadius:"10px"}}>{btn}</span></h2>
      <p >{text}</p>
    </div>
    </div>
  )
}

export default Form
