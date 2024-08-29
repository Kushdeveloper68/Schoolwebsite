const mongoose = require("mongoose");
// mongoose required 
// create a function for connecting database
async function mongooseconnet(url) {
 mongoose.connect(url);
}
module.exports = {
  mongooseconnet
};