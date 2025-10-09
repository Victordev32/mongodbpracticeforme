const mongoose=require('mongoose')


const teacherSchema=mongoose.Schema({
    name:{
        type: String,
        required: true,

    },
    age:{
       type: Number,
       required: true
    }
    ,email:{
        type: String,
        required: true
    },
        gender:{
            type: String,
            
        }
    }
)


const Teacher=mongoose.model('Teacher',teacherSchema);
module.exports=Teacher;