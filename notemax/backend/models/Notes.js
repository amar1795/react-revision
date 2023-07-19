const mongoose = require('mongoose');
const { Schema } = mongoose;


const NotesSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId
    },
    title:{
        type:String,
    },
    description:{
        type:String,
        default:"true"
    },
    tag:{
        type:String,
        default:"general"
    },
    date:{
        type:Date,
        default:Date.now
    },
  });

  module.exports=mongoose.model('notes',NotesSchema);