const bodyParser = require("body-parser")
const express=require("express")
const Users=require('../models/userModel')

const router=express.Router()

router.post('/login',async (req,res)=>{
   
    try {
         const {email,pass}=req.body;
    console.log(req.body)
    console.log("received")
        let user=await Users.findOne({email,password:pass});
       res.json(user)
        console.log(user)
    } catch (error) {
        console.log(error)
    }

})
router.post('/signup',async(req,res)=>{
    const {username,email,password}=req.body;

    try {
         let user=await Users.create({username,email,password});
     
         res.json(user)
    } catch (error) {
        console.log(error)
    }
})

module.exports=router