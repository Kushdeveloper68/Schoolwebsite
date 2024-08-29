// create a get class pf teacher pages
class TeacherControl{
  constructor(req , res){
    this.req = req;
    this.res = res;
  }
  // login page 
  async gettingTeacherLoginPage(req , res) {
    res.render('./teacher/Loginteacher');
  }
  // signup page 
  async gettingTeacherSignupPage(req, res) {
    res.render("./teacher/Signupteacher");
  }
  // result edit area page 
    async gettingTeacherResulteditPage(req, res) {
    res.render("./teacher/Resultedit");
  }
  // teacher festival edit area 
    async gettingTeacherFestivaleditPage(req, res) {
    res.render("./teacher/Fastivaledit");
  }
}
// exports 
module.exports = {
  TeacherControl
};