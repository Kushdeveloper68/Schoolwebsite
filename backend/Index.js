const  express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const {mongooseconnet}= require("./connection/Mogooseconnection.js");
const {getRouter} = require("./routes/getroutes.js");
const  {postRouter} = require('./routes/postroutes.js');
const {ipGettingMiddleware} = require("./middleware/middleware.js");
const {teacherRoute} = require("./routes/teachergetroute.js");
const {teacherPostRoute} = require("./routes/teacherpostroute.js");

mongooseconnet("mongodb://127.0.0.1:27017/schoolwebsite").then(() => console.log("mongooseconnected")).catch(err => console.log("mongoose eror"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
// Set up static files middleware
app.use(express.static(path.join(__dirname, 'public')));
// Set the view engine to EJS
app.set('view engine', 'ejs');
// Set the views directory
app.set('views', path.join(__dirname, 'views/frontend'));
app.use('/', teacherPostRoute);
app.use('/', teacherRoute);
app.use('/', postRouter);
app.use('/' , getRouter);
app.use(ipGettingMiddleware);
app.listen(8000, () => console.log('server started'));
