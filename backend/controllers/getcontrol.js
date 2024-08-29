// All controllers is get controllers 
// getting landing page
async function gettingLandingPage(req , res) {
  try {
      res.render('Landingpage');
  } catch (e) {res.send('Page Not found'); }
}
// getting signup page 
async function gettingSignupPage(req , res) {
   try {
  res.render('Signup');
  } catch (e) {res.send('Page Not found'); }
}
// getting login page
async function gettingLoginPage(req , res) {
   try {
  res.render('Login');
  } catch (e) {res.send('Page Not found'); }
}
// getting term page 
async function gettingTermPage(req , res) {
   try {
  res.render('Termandconditions');
  } catch (e) {res.send('Page Not found'); }
}
// getting admission form
async function gettingAdmissionForm(req , res ) {
  try {
    res.render("Admissionform");
  } catch (e) {res.statu(404).send('page not found')}
}
// async function gettingAdmissionForm(req , res ) {
//   try {
//     res.render("");
//   } catch (e) {res.statu(404).send('page not found')}
// }
// exporting all controls
module.exports = {
  gettingLandingPage,
  gettingLoginPage,
  gettingSignupPage,
  gettingTermPage,
  gettingAdmissionForm
};