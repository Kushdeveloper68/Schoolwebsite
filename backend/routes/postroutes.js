// requiring postControl controllers all post (class)
const {postControl} = require("../controllers/postscontrol.js");
// require express 
const express = require("express");
const postRouter = express.Router();
// enable the post controllers
let postRoute = new postControl();
// requiring middleware for password hashing 
const {bcryptingThepasswordMiddleware} = require("../middleware/middleware.js");
// setting student post routes
postRouter.post("/studentsignup", bcryptingThepasswordMiddleware,postRoute.sigupOfstudent.bind(postRoute));
postRouter.post("/studentlogin",postRoute.loginOfStudent.bind(postRoute));
//postRouter.post('/admissionfromsubmit', postRoute.adimissonForm.bind(postRoute));
postRouter.post('/admissionfromsubmit', postRoute.admissionForm.bind(postRoute));
module.exports = {
  postRouter
};