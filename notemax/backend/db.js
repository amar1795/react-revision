const mongoose=require("mongoose");
const mongooseURI="mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0";
const connecttomongo=()=>{
    mongoose.connect(mongooseURI,()=>{
        

        console.log("mongo DB successfully connected");
    })
}



module.exports=connecttomongo;
