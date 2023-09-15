const jwt=require("jsonwebtoken");


function verify(req,res,next){
    const autheader=req.headers.token;
    if(autheader)
    {
        const token=autheader.split(" ")[1];

        jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
            if(err){
                res.status(403).json("Token is not valid");
            }
            else{
                req.user=user;
                next();
            }
        })
    }
    else{
        // if authheader is not found
        return res.status(401).json("you are not authenticated")
    }

}



module.exports=verify;