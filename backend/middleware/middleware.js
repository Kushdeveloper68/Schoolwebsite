/* 
require other modules :- 
jwt,
ipinfo 
bcrypt
*/
const jwt = require("jsonwebtoken");
const ipinfo = require('ipinfo');
// calling mongoose ip Schema 
const {ipdata}  = require("../model/allmodel.js");
const bcrypt = require("bcryptjs");
// hash round with env data 
const hashround = 10;
// password hashing middleware
async function bcryptingThepasswordMiddleware(req  , res ,next) {
  let {password} =   req.body;
  let hashedpass =  await  bcrypt.hash(password, hashround);
    req.body.password = hashedpass;
   next();
   
}
// password comparing middleware pending..
async function comparingHashedPassword() {
    let {password} =  await req.body;
}
// jwt verifing middleware pending 
async function jwtVerifingMiddleware(req , res , next) {
  
}
// ip address getting ip and saving 
async function ipGettingMiddleware(req, res , next) {
ipinfo((err, cLoc) => {
  if (err) {
    console.log("Error fetching IP info:", err);
    next();
  } else {
    // ip data saving 
    ipdata.create({
      ip:cLoc.ip,
      location:cLoc.city + cLoc.region + cLoc.country,
      organization:cLoc.org,
      postalCode:cLoc.postal,
      timezone:cLoc.timezond
    });
    next();
  }
});
}
// exporting
module.exports = {
  ipGettingMiddleware,
  bcryptingThepasswordMiddleware
};
