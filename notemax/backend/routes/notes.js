const express=require('express');
//with the help of router we can use this end point in index.js
const router=express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes=require('../models/Notes')
const { body, validationResult } = require('express-validator');





//ROUTE 1:get all the notes using :GET //api/notes/fetchallnotes login required

router.get('/fetchallnotes',fetchuser,async(req,res)=>{

    try {
        const notes=await Notes.find({user:req.user.id})
        res.json(notes);
        
    } catch (error) {
        console.error(error.message)
        res.status(500).json("some error occured")

        
    }
   
})

//ROUTE 2:add all the notes using :GET /api/notes/addnote login required

router.post('/addnote',fetchuser,[
    body('title',"Enter a valid title").isLength({ min: 3 }),
    body('description',"Description must be 5 characters").isLength({ min: 5 })
    ],async(req,res)=>{

        try {

            //fetchesthe below value from fetchuser middleware
            const {title,description,tag}=req.body;
        
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
          return res.status(400).json({ error: errors.array() });  
            }
    
            const note=new Notes({
             title,description,tag,user:req.user.id
            })
            const savedNote=await note.save();
    
            res.json(savedNote)
        } catch (error) {
            console.error(error.message)
            res.status(500).json("some error occured")

            
        }

      


})




module.exports=router;
