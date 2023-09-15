const router=require("express").Router();
const User=require("../models/Users");
const CryptoJS = require("crypto-js");
const verifyToken=require("../verifyToken")


// update
router.put("/:id",verifyToken,async (req,res)=>{
    
    if(req.user.id===req.params.id || req.user.admin)
    {
        // if updating the password then we will encrypt it again
        if(req.body.password){
            req.body.password=CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
        }

        try {
            // if updating anything else apart from password
            const updatedUser=await User.findByIdAndUpdate(req.params.id,{
                // the $set is a mongodb function which updates the value which is being updated in the body
                $set:req.body,
            },{
                new:true
            })
            res.status(200).json(updatedUser);
        } catch (error) {

            res.status(500).json(error)
            
        }

    }

    else{
        res.status(403).json("you can only update your account details")
    }

})
// delete
// get
// getall
// getuserstats


module.exports=router;