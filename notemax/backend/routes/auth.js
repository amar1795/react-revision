const express=require('express');
//with the help of router we can use this end point in index.js
const router=express.Router();
const User=require('../models/User')
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const JWT_SECRET='hello'


//endopoint for creating user no AUTH required /api/auth/createuser
router.post('/createuser',[
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

        const salt = bcrypt.genSaltSync(10);
        const secpass = bcrypt.hashSync(req.body.password, salt);
    
         result=await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secpass,
      })

      const data={
        result:{
            id:result.id
        }
      }

    const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({authtoken})

      }
      catch(error){
        console.error(error.message)
        res.status(500).json("some error occured")

      }
})


module.exports=router;
