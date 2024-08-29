// requiring Schema of student signup admission form
const {studentSignupData,
  admissionfrom} = require("../model/allmodel.js");
// jwt token
const jwt = require('jsonwebtoken');
console.log(jwt);
// bcrypt for compare  hashed password 
const bcrypt = require("bcryptjs");
// controller with class
  class postControl{
  constructor(req , res ){
    this.req = req ;
    this.res = res;
  }
  // student signup post route
  async sigupOfstudent(req , res) {
    try {
    let  {username , password, email, terms} =  req.body;
    console.log(req.body);
    // creating new user
    let user =  studentSignupData.create({
     username,
     password,
     email,
     terms
   });
   // checking user creation 
   if (user) {
      res.render("Mainpage");
   } else { res.redirect("/signup") }
    } catch (error) {console.error("student signup error", error);
      res.status(500).send("internal server error", res.status);
    }
  }
  // student login data checking 
  async loginOfStudent(req , res) {
   try {
      // user info getting form body 
    let {username , password} = req.body;
     let userchecked = await studentSignupData.findOne({
       username: username
     });
     // checking user availablity 
     if(!userchecked) {
       res.status(400).send("invaild usename");
     } else {
       // password checking
       console.log(userchecked.password);
          let checkedpass = await  bcrypt.compare(password , userchecked.password);
          console.log(checkedpass);
          // conparing user password 
          if(!checkedpass) {
           res.status(400).send('password is wrong'); 
        } else {
          res.status(200).render("Mainpage");
        }
     }
    } catch (error) {console.error('login route error, error');
      res.status(500).send("internal server error", error);
    } 
  }
  // admission Form data saving 
  async admissionForm(req , res ) {
    try {
      // getting user data form body 
    let {fathername, studentname, phonenumber, passedclass, promotedclass } = req.body;
    // create form data on model 
   let form =  await admissionfrom.create({
   fathername,
   studentname,
   passedclass,
   promotedclass,
   phonenumber
 });
 // form validation checking
 if(form) {
   res.render("Admissionformsentmsg");
 } else {
   res.send('the form is not submitted please try again ');
 }
    } catch (error) { console.error('admissionForm error' , error);
    res.status(500).send('internal server error ');
    }
  }
}
// exporting 
module.exports = {
  postControl
};
  