const {teacherSignupModel} = require("../model/teachermodel.js");
// tecaher model form save signup data 
const bcrypt = require('bcryptjs');
// bcryptjs for comparing password 
class TeacherPostControl{
  constructor(req, res){
    this.req = req;
    this.res = res;
  }
  // teacher signup page 
  async teacherSignupControl(req , res ) {
    try {
      // getting user data form body 
    let  {username , password, email, terms, teacherid} =  req.body;
    console.log(req.body);
    // creatinh new  user 
    let user =  teacherSignupModel.create({
     username,
     password,
     email,
     teacherid,
     terms
   });
   // checking user availablity 
   if (user) {
      res.render("Mainpage");
   } else { res.redirect("/teacher-signup") }
    } catch (error) {console.error("student signup error", error);
      res.status(500).send("internal server error", res.status);
    }
   }
  // teacher login page post 
   async  teacherLoginControl(req , res ) {
   try {
     // getting user info form bdoy
    let {username , password} = req.body;
     let userchecked = await teacherSignupModel.findOne({
       username: username
     });
     // checkinh user username 
     if(!userchecked) {
       res.status(400).send("invaild usename");
     } else {
       console.log(userchecked.password);
       // checking user password using bcryptjs 
          let checkedpass = await  bcrypt.compare(password , userchecked.password);
          console.log(checkedpass);
          // checking.......
          if(!checkedpass) {
           res.status(400).send('password is wrong'); 
        } else {
          res.status(200).render("Mainpage");
        }
     }
    } catch (error) {console.error('login route error',error);
      res.status(500).send("internal server error", error);
    } 
  }
}
// exporting 
module.exports = {
  TeacherPostControl
};