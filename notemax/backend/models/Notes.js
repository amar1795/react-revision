const mongoose = require('mongoose');
const { Schema } = mongoose;


const NotesSchema = new Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
        default:"true"
    },
    tag:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now
    },
  });

  module.exports=mongoose.model('user',UserSchema);