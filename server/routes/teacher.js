const express=require('express')
const Teacher=require('../models/teacherModel')

const router=express.Router()


router.get('/teachers',async (req,res)=>{
    let data=await Teacher.find()
    res.json(data)
})

router.get('/teachers/:id',async (req,res)=>{
     let id=req.params.id
     let data=await Teacher.findById(id)

     res.json(data)
})
router.post('/teachers',async (req,res)=>{
    let {name,age,email,gender}=req.body

    let data=await Teacher.create({name,age,email,gender})

    res.json({msg: "success"})
})


router.put('/teachers/:id',async (req,res)=>{
    let  upid=req.params.id
    let updata=req.body
    let data=await Teacher.findByIdAndUpdate(upid,updata)

    res.json({msg: "success"})
})
module.exports=router