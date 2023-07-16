const express=require('express');
//with the help of router we can use this end point in index.js
const router=express.Router();
const User=require('../models/User')
const { body, validationResult } = require('express-validator');

router.post('/',[
    body('name').isLength({ min: 3 }).withMessage("enter a valid name"),
    body("email","enter a valid email").isEmail(),
    body('password',"enter a valid password").isLength({ min: 5 }),
  ],async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });  
    }

    try{
        let user=await User.findOne({email:req.body.email})

        if(user){
            return res.status(400).json({error:"sorry a user exist with this email already"})
        }
    
         result=await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      })
      res.json(result)
      }
      catch(error){
        console.error(error.message)
        res.status(500).json("some error occured")

      }
})


module.exports=router;
