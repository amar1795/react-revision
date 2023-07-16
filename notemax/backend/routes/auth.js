const express=require('express');
//with the help of router we can use this end point in index.js
const router=express.Router();


router.get('/',(req,res)=>{
    obj={
        name:"amar",
        number:25
    }
    res.json(obj)
})


module.exports=router;
