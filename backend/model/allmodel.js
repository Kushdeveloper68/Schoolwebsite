//mongoose
const mongoose = require("mongoose");
// Schema variable
const Schema = mongoose.Schema;
// student signup data Schema
const studentSignup = new Schema({
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
  terms:{
    type:String
  }
}); 
// students admission form data
const admissiondata = new Schema({
 fathername:{
   type:String,
   require:true
 },
 studentname:{
   type:String,
   require:true
 },
 passedclass:{
   type:Number,
   require:true
 },
 promotedclass:{
   type:Number,
   require:true
 },
 phonenumber:{
   type:Number,
   require:true,
 }
});
// user ip collection data schema
const ipSchema = new Schema({
  ip:{
    type:String
  }, 
  location:{
  type:String  
  },
  organization:{
    type:String
  },
  postalCode:{
    type:String
  },
  timezone:{
    type:String
  }
});
// models
let ipdata = mongoose.model("ipreleteddata", ipSchema);
let admissionfrom = mongoose.model("admissiondata", admissiondata);
let studentSignupData = mongoose.model("studentSignupData", studentSignup);
// exporting
module.exports = {
  studentSignupData,
  admissionfrom,
  ipdata
};