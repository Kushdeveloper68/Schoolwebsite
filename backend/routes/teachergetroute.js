// express 
const express = require("express");
const teacherRoute = express.Router();
// requiring TeacherControl post controller (class)
const {TeacherControl} = require('../controllers/teachergetcontrol.js');
// enable the ccontroller class 
let teachercontrol = new  TeacherControl();
// teacher pages routes 
teacherRoute.get('/teacher-login', teachercontrol.gettingTeacherLoginPage.bind(teachercontrol));
teacherRoute.get('/teacher-signup', teachercontrol.gettingTeacherSignupPage.bind(teachercontrol));
teacherRoute.get('/teacher-fastivaledit',teachercontrol.gettingTeacherFestivaleditPage.bind(teachercontrol));
teacherRoute.get('/teacher-resultedit',teachercontrol.gettingTeacherResulteditPage.bind(teachercontrol));
// exporting
module.exports = {
  teacherRoute
};