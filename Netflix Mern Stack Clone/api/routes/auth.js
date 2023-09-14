const router=require("express").Router();
const User=require("../models/Users");
const CryptoJS = require("crypto-js");


// register

router.post("/register",async (req,res)=>{
    const newUser=new User({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
        ,

    });

    try {
    const user=await newUser.save();
    res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json(error)
    }
    
})

// login
router.post("/login",async (req,res)=>{
    try {
        // if wrong email
    const user=await User.findOne({email:req.body.email});
    !user && res.status(401).json("wrong username or password")

    // Decrypt
    const bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
    
    // if the original password and the entered password do not match
    originalPassword!=req.body.password && res.status(401).json("wrong username or password")
        
    // using destructuring to destructure passowrd in password and all the other information in info using spread operator
        const {password ,...info}=user._doc;
        res.status(200).json(info);

    } catch (error) {
        res.status(500).json(error)
    }
    
})


module.exports=router;