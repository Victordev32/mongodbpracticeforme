const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    
        username:{
            type: String,
            required: true,
            unique:true
        },
          email:{
            type: String,
            required: true,
            unique: true
        },
          password:{
            type: String,
            required: true,
            
        },
          dob:{
            type: Date,
            required: false,
            
        },
        first_name:{
            type: String,
            required: false
        },
        second_name:{
            type: String,
            required: false
        },
        gender: {
            type: String,
            enum: ['male','female'],
            default: "male"
        },
        usertype: {
            type: String,
            enum: ['student','teacher','admin'],
            default: "student"
        },
    
    
})

module.exports=mongoose.model("Users",userSchema);