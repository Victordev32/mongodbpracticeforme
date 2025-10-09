const express=require('express')
const Teacher=require('../models/teacherModel')

const router=express.Router()


router.get('/teachers',async (req,res)=>{
    let data=await Teacher.find()
    res.json(data)
})

router.post('/teacher',async (req,res)=>{
    let {name,age,email,gender}=req.body

    let data=await Teacher.create({name,age,email,gender})

    res.json({msg: "received"})
})

module.exports=router