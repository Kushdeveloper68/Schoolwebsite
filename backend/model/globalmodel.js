const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultdata = Schema({
  classes:{
    type:String,
    require:true
  } ,
  rollno: {
    type:String,
    require:true
  },
  Grnumber:{
   type:String,
    require:true
  },
  resultstudentname:{
    type:String,
    require:true
  }
});
const studentResultData = mongoose.model("resultdata", resultdata);
module.exports = {
  studentResultData 
};