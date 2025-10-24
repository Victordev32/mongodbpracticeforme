const express=require('express')
const {dbconnect}=require('./db')
const cors=require("cors")

const teacherRoute=require('./routes/teacher')
const studentRoute=require('./routes/student')
const authRoute=require('./routes/auth')

const app=express()

app.use(express.json())
app.use(cors())
app.use(teacherRoute)
app.use(studentRoute)
app.use(authRoute)

dbconnect((err)=>{
    if(!err){
        app.listen(3000,()=>console.log("port 3000"))
    }
})




