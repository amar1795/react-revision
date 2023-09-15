const router=require("express").Router();
const User=require("../models/Users");
const CryptoJS = require("crypto-js");
const verifyToken=require("../verifyToken")


// update
router.put("/:id",verifyToken,async (req,res)=>{
    
    if(req.user.id===req.params.id || req.user.isAdmin)
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
router.delete("/:id",verifyToken,async (req,res)=>{   
    if(req.user.id===req.params.id || req.user.isAdmin)
    {       
        try {
            await User.findByIdAndDelete(req.params.id,)
            res.status(200).json("user has been deleted");
        } catch (error) {
            res.status(500).json(error)           
        }
    }
    else{
        res.status(403).json("you can only delete your account ")
    }
})
// get


// we don't need to verify the jwt token to search for the users
router.get("/find/:id",async (req,res)=>{   
    try {
        const user=await User.findById(req.params.id,)
        const {password,...info}=user._doc;

        res.status(200).json(info);
    } catch (error) {
        res.status(500).json(error)           
    }
})


// getall

router.get("/",verifyToken,async (req,res)=>{   
    const query=req.query.new;
    if(req.user.isAdmin)
    {       
        try {
            const users=query? await User.find().sort({_id:-1}).limit(5) :await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error)           
        }
    }
    else{
        res.status(403).json("you are not allowed to see all users")
    }
})

// getuserstats


router.get("/stats",async (req,res)=>{
    const today=new Date();
    const latYear=today.setFullYear(today.setFullYear()-1);
    
    // this will bne used in the client side
    const monthsArray=[
        "january",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "Septemeber",
        "October",
        "November",
        "December",
        
    ];

    try {
            const data=await User.aggregate(
                [
                    {
                        // the below are the mongodb functions
                $project:{
                    month:{
                        $month:"$createdAt"
                    },
                    }},
                    {
                    $group:{
                        _id:"$month",
                        total:{$sum:1}
                    },
                    },
                          
                ])

                res.status(200).json(data)
        }
     catch (error) {
        res.status(500).json(error)
        
    }

    
})


module.exports=router;