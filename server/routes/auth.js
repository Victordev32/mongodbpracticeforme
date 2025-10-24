const bodyParser = require("body-parser")
const express=require("express")
const Users=require('../models/userModel')

const router=express.Router()

router.post('/login',async (req,res)=>{
    const {email,pass}=req.body;

    try {
        let user=await Users.find({email:email});
        res.json(user)
        console.log(user)
    } catch (error) {
        console.log(error)
    }

})

module.exports=router