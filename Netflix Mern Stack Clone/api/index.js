const express =require("express");
const app =express();
const mongoose = require('mongoose');
const dotenv=require("dotenv")
const authroute=require("./routes/auth")
const userroute=require("./routes/users")
const movieroute=require("./routes/movie")
const listroute=require("./routes/lists")


dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=> console.log("DB Connection is Successfull")).catch((error)=>console.log(error))

// in the body express does not accept json as default hence we are adding it as json
app.use(express.json())



app.use("/api/auth",authroute)
app.use("/api/users",userroute)
app.use("/api/movie",movieroute)
app.use("/api/list",listroute)



app.listen(8000,()=>{
    console.log("backend is running on the port 8000")
})