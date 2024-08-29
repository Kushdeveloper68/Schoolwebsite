// express 
const express = require("express");
const teacherPostRoute = express.Router();
// requiring middleware for password hashing
const {bcryptingThepasswordMiddleware} = require('../middleware/middleware.js');
// require teacher post controller 
const {TeacherPostControl} = require("../controllers/teacherpostcontrol.js");
// enable the controller
let teacherControl = new TeacherPostControl();
// setting routes 
teacherPostRoute.post("/teachersignup" ,bcryptingThepasswordMiddleware,teacherControl.teacherSignupControl.bind(teacherControl) );
teacherPostRoute.post("/teacherlogin",teacherControl.teacherLoginControl.bind(teacherControl) );
// exporting 
module.exports = {
  teacherPostRoute
};