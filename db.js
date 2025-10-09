const mongoose=require('mongoose');
module.exports={dbconnect:(cb)=>{
    const connect=mongoose.connect("mongodb://localhost:27017/School").then(()=>{console.log("DB mongodb connected"); return cb()}).catch(error=>{console.log(error); return cb(error)})
    
},

}