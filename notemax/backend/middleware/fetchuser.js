const jwt = require('jsonwebtoken');
const JWT_SECRET='hello'

//fetching user and verifying with jwttoken 
const fetchuser=(req,res,next)=>{
    const token=req.header('auth-token')
    if(!token){
        res.status(401).send({error:"please authenticate with the correct token"})
    }
    try {

        const data=jwt.verify(token,JWT_SECRET);
        req.user=data.user;
        next();
        
    } catch (error) {
        res.status(401).send({error:"please authenticate with the correct token"})

    }

}

module.exports=fetchuser;