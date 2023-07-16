const express=require('express');
//with the help of router we can use this end point in index.js
const router=express.Router();
const User=require('../models/User')
const { body, validationResult } = require('express-validator');

router.post('/',[
    body('name').isLength({ min: 3 }).withMessage("enter a valid name"),
    body("email","enter a valid email").isEmail(),
    body('password',"enter a valid password").isLength({ min: 5 }),
  ],(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });  
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }).then(user => res.json(user)).catch(err=>{console.log(err)
        res.json({error:"please enter a valid email",message:err.message})})
})


module.exports=router;
