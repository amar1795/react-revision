const express=require('express');
//with the help of router we can use this end point in index.js
const router=express.Router();
const User=require('../models/User')

router.get('/',(req,res)=>{
    obj={
        name:"amar",
        number:25
    }
    res.json(obj)
    // res.send("hello")
})

router.post('/',(req,res)=>{
    const user=User(req.body);
    user.save();
    // res.json(obj)
    res.send(req.body)
})


module.exports=router;
