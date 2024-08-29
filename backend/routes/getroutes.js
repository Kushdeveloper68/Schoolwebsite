// require express 
const express = require("express");
const getRouter = express.Router();
// requiring middleware for getting ip
const {ipGettingMiddleware} = require("../middleware/middleware.js");
// requiring all get routes (non-class)
const {gettingLandingPage,
  gettingLoginPage,
  gettingSignupPage,
  gettingTermPage,
  gettingAdmissionForm} = require("../controllers/getcontrol.js");
// setting routes 
getRouter.get('/',ipGettingMiddleware, gettingLandingPage);
getRouter.get('/login', gettingLoginPage);
getRouter.get('/signup', gettingSignupPage);
getRouter.get('/term', gettingTermPage);
getRouter.get('/admission-from',gettingAdmissionForm );
// exporting 
module.exports = {
  getRouter
};