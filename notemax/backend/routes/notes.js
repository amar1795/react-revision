const express=require('express');
//with the help of router we can use this end point in index.js
const router=express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes=require('../models/Notes')
const { body, validationResult } = require('express-validator');

//ROUTE 1:get all the notes using :GET //api/notes/fetchallnotes need to be logedin already

router.get('/fetchallnotes',fetchuser,async(req,res)=>{

    try {
        //req.user is from fetch user middleware, this will fetch the notes of a specific user
        const notes=await Notes.find({user:req.user.id})
        res.json(notes);
        
    } catch (error) {
        console.error(error.message)
        res.status(500).json("some error occured")   
    }
   
})

//ROUTE 2:add all the notes using :GET /api/notes/addnote user need to logged in already 

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

            //creating note object to add new notes
            const note=new Notes({
                // various ways of creating notes and can also use notes.create as mentioned in the docs in that case no need to save 
                //user id is coming from fetch user js to verify if its the same user who is logged in
             title,description,tag,user:req.user.id
            })
            const savedNote=await note.save();
            res.json(savedNote)
        } catch (error) {
            console.error(error.message)
            res.status(500).json("some error occured")   
        }

})


//ROUTE 3:Updating  all the notes using :PUT /api/notes/updatenote/id user need to logged in already 

router.put('/updatenote/:id',fetchuser,async(req,res)=>{

    //using destructuring to store the values 
    const {title,description,tag}=req.body;
    
        try {
            //creating a newnoteobject
        const newnote={ };
        // below also works fine
        // const newnote={ title,description,tag};

        if(title){newnote.title=title}
        if(description){newnote.description=description}
        if(tag){newnote.tag=tag}

        //find the note to be updated and udpate it  ,req.params.id will fetch the ID from parameter in the link
        let note=await Notes.findById(req.params.id);

        //if note is not there in the link
        if(!note){return res.status(404).send("not found")}

        //if the note is not of the user whose note is then they are note allowed to update it 

        if(note.user.toString()!==req.user.id){
            return res.status(401).send("not allowed")
        }

        //if its the user whose notes are then they can update the 
        
        note=await Notes.findByIdAndUpdate(req.params.id,{$set:newnote},{new:true,runValidators: true})
        res.json({note});

        } catch (error) {
            console.error(error.message)
            res.status(500).json("some error occured")   
            
        }
})

//ROUTE 4:Deleting all the notes using :DELETE /api/notes/delete/id user need to logged in already 

router.delete('/deletenote/:id',fetchuser,async(req,res)=>{
    
        try {
            //find the note to be updated and udpate it  ,req.params.id will fetch the ID from parameter in the link
        let note=await Notes.findById(req.params.id);

        //if note is not there in the link
        if(!note){return res.status(404).send("not found")}

        //if the note is not of the user whose note is then they are note allowed to update it 
        if(note.user.toString()!==req.user.id){
            return res.status(401).send("not allowed")
        }

        //if its the user whose notes are then they can update the notes
        note=await Notes.findByIdAndDelete(req.params.id)
        res.json({sucess:"your note has been deleted", note});
            
        } catch (error) {
        console.error(error.message)
        res.status(500).json("some error occured")   
            
        }
})
module.exports=router;
