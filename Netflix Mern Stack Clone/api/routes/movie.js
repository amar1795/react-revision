const router=require("express").Router();
const Movie=require("../models/Movies");
const verifyToken=require("../verifyToken")
const jwt=require("jsonwebtoken");


// create

router.post("/",verifyToken,async (req,res)=>{
   if(req.user.isAdmin)
   {
    const newMovie=new Movie(req.body);
 
    try {
    const savedMovie=await newMovie.save();
    res.status(200).json(savedMovie);
        
    } catch (error) {
        res.status(500).json(error)
    }
    }
    else{
        res.status(401).json("you are not allowed")
    }
    
})

// update

router.put("/",verifyToken,async (req,res)=>{
   if(req.user.isAdmin)
   {
 
    try {
    const updatedMovie=await Movie.findByIdAndUpdate(req.params.id,{
        $set:req.body,
    },{
        new:true
    });
    res.status(200).json(updatedMovie);
        
    } catch (error) {
        res.status(500).json(error)
    }
    }
    else{
        res.status(401).json("you are not allowed")
    }
    
})

// delete

router.delete("/delete/:id",verifyToken,async (req,res)=>{
    
     try {
     const movie=await Movie.findByIdAndDelete(req.params.id);
     res.status(200).json("movie hasa been deleted");        
     } catch (error) {
         res.status(500).json(error)
     }
     }   
     )

// random
    router.get("/random",verifyToken,async (req,res)=>{
    const type=req.query.type;
    let movie;
     try {
     if(type=== "series")
     {
        movie=await Movie.aggregate([
            {$match:{isSeries:true}},
            // this will give the random series
            {$sample:{size:1}}
        ])
     } 
     
     else{
        movie=await Movie.aggregate([
            {$match:{isSeries:false}},
         // this will give the random movie

            {$sample:{size:1}}
        ])

     }

     res.status(200).json(movie);
     } catch (error) {
         res.status(500).json(error)
     }
     }   
     )


     


module.exports=router;