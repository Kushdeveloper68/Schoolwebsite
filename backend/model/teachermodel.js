// require mongoose 
const mongoose = require("mongoose");
// Schema variable 
const Schema = mongoose.Schema;
// teacher signup  data Schema 
const teacherSignupData = new Schema({
  username:{
  type:String,
  require:true
  },
  email:{
    type:String,
    unique:true,
    require:true
  },
  password:{
    type:String,
    require:true
  },
  teacherid:{
   type:Number,
   require:true
  }, 
  terms: {
    type:String,
    require:true
  }
});
// teachers data models
const teacherSignupModel = mongoose.model("teachersignup",teacherSignupData);
module.exports= {
  teacherSignupModel
};