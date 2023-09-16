const router=require("express").Router();
const List=require("../models/List");
const verifyToken=require("../verifyToken")

// all the crud application or register or login functionalities are being performed by the code and the algorithms implementetd by mongodb 

// create list

router.post("/addlists",verifyToken,async (req,res)=>{
   if(req.user.isAdmin)
   {
    const newList=new List(req.body);
 
    try {
    const savedList=await newList.save();
    res.status(200).json(savedList);    
    } catch (error) {
        res.status(500).json(error)
    }
    }
    else{
        res.status(401).json("you are not allowed")
    } 
})

// DELETE

router.delete("/delete/:id",verifyToken,async (req,res)=>{
    if(req.user.isAdmin)
    {
    
   try {
      const deltedList=await List.findByIdAndDelete(req.params.id);
     res.status(200).json("list hsa been deleted");    
     } catch (error) {
         res.status(500).json(error)
     }
     }
     else{
         res.status(401).json("you are not allowed")
     } 
 })
 
// SHOW LISTS

router.get("/",verifyToken,async (req,res)=>{
    const typeQuery =req.query.type;
    const genreQuery=req.query.genre;
    let list=[];

   try {
    if(typeQuery){
        if(genreQuery)
        {
            list=await List.aggregate([
                {
                    $sample:{size:10}
                },
                {
                    $match:{type:typeQuery,genre:genreQuery}
                }
            ])
        }
        else

        {[
            // will randomly fetch the 10 list
            {
                $sample:{size:10}
            },
            {
                $match:{type:typeQuery}
            }
        ]
        }
        
        
    }
    else
    {
        list=await List.aggregate([{$sample :{size:10}}])
    }
    res.status(200).json(list)
     } catch (error) {
         res.status(500).json(error)
     }
     
            })


            
// SHOW ALL LISTS

router.get("/allmovielist/",verifyToken,async (req,res)=>{
    if(req.user.isAdmin)
    {

    try {
    const totalList=await List.find();
     res.status(200).json(totalList);    
     } catch (error) {
         res.status(500).json(error)
     }
     }
     else{
         res.status(401).json("you are not allowed")
     } 
 })



module.exports=router;