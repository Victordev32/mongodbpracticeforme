const express=require('express')
const {dbconnect}=require('./db')
const cors=require("cors")

const teacherRoute=require('./routes/teacher')
const studentRoute=require('./routes/student')


const app=express()

app.use(express.json())
app.use(cors())
app.use(teacherRoute)
app.use(studentRoute)

dbconnect((err)=>{
    if(!err){
        app.listen(3000,()=>console.log("port 3000"))
    }
})




