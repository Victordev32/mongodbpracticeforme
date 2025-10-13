const mongoose=require('mongoose')

const studentSchema=mongoose.Schema(
    {
      name:{
        type:String,
        required:[true,'please enter name']
      },age:{
         type: Number,
         required: true
      },
      grade:{
        type: Number,
        required: true
      },gender:{
        type: String,
        required: true
      }
     }
)

const Student=mongoose.model('Student',studentSchema);
module.exports=Student