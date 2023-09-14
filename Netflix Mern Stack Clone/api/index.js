const express =require("express");
const app =express();
const mongoose = require('mongoose');
const dotenv=require("dotenv")
const authroute=require("./routes/auth")


dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=> console.log("DB Connection is Successfull")).catch((error)=>console.log(error))


app.use(express.json())


app.use("/api/auth",authroute)



app.listen(8000,()=>{
    console.log("backend is running on the port 8000")
})