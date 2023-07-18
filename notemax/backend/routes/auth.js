const express=require('express');
//with the help of router we can use this end point in index.js
const router=express.Router();
const User=require('../models/User')
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const JWT_SECRET='hello'


//ROUTE1:endopoint for creating user ,no AUTH required /api/auth/createuser

//using express validator below
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
        //using bcryptjs with salt to store pasasword in database 
        const salt = bcrypt.genSaltSync(10);
        const secpass = bcrypt.hashSync(req.body.password, salt);
    
        //fetchuser middleware is taking id from user created here
        user=await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secpass,
      })

      const data={
        user:{
            id:user.id
        }
      }
      
      //using auth token for additional security
      //adding id to jwt token
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({authtoken})

      }
      catch(error){
        console.error(error.message)
        res.status(500).json("some error occured")

      }
})


//ROUTE2:endopoint for user login,no AUTH required /api/auth/login

router.post('/login',[
  body("email","enter a valid email").isEmail(),
  body('password',"Password cannot be blank").exists(),
],async (req,res)=>{
  //if there are errors return bad request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()  });  
  }

  const { password,email}=req.body;
  try{
  //storing values using destrucuting
  
  let user=await User.findOne({email})
  
  if(!user){
    return res.status(400).json({error:"please try to login with the correct credentials"})
  }

  const passwordCompare=await bcrypt.compare(password,user.password)


  if(!passwordCompare){
    return res.status(400).json({error:"please try to login with the correct credentials"})
  }

  const data={
    user:{
      id:user.id
  }

  }
  const authtoken = await jwt.sign(data, JWT_SECRET);
      res.json({authtoken})
}

  catch(error){
        console.error(error.message)
        res.status(500).json("some error occured")

      }


    })

    //ROUTE3:endopoint for getting user ,no AUTH required /api/auth/getuser

    router.post('/getuser',fetchuser,async (req,res)=>{

      try{
        userId=req.user.id;
        const user=await User.findById(userId).select("-password")
        res.send(user)
      }
      catch(error){
        console.error(error.message)
        res.status(500).json("some error occured")

      }
    })


module.exports=router;
