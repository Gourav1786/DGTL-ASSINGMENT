const mongoose= require('mongoose');

const Schema = new mongoose.Schema({
   
    role:{
         type:String,
         default:"user"
    },
    exprience:{
         type:String,
         default:"0-1"
         
    },
     location:{
         type:String,
         default:"unknown"
     },
     AboutUs:{
         type:String,
         required:true
     },
     Marks:{
          type:String,
          required:true
     }
})  

module.exports = mongoose.model('users',Schema)