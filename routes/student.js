const express=require('express')
const Student=require('../models/studentModel')

const router=express.Router()

router.post("/students",async (req,res)=>{
    try{
      const student=await Student.create(req.body)
if(student){
   res.json({"msg": "received"})  
}
      res.json({"msg": "received"})
    }catch(error){
     console.log(error)
    }
    
    
})





router.get('/students/',async (req,res)=>{
    
    let data=await Student.find()
    res.json(data)
    
})
router.get('/students/:id',async (req,res)=>{
    let id=req.params.id

    let data=await Student.findById(id,{name: 1})

    res.json(data)
})

router.put("/students/:id",async (req,res)=>{
    let upbody=req.body
    let upid=req.params.id
    console.log(upbody)
    let data=await Student.findByIdAndUpdate(upid,upbody);
    res.json({msg: "updated succesfully"})
})
router.delete('/students/:id', async (req,res)=>{
    let id=req.params.id
    let data=await Student.findByIdAndDelete(id)

    res.json({msg: "deleted successfully"})
})

module.exports=router