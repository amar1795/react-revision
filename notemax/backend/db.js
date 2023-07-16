const mongoose=require("mongoose");
const mongooseURI="mongodb://127.0.0.1:27017/MaxNote?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0";
const connecttomongo=async()=>{
   await mongoose.connect(mongooseURI)
}



module.exports=connecttomongo;
