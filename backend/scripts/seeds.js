require("dotenv").config();
require("../models/User");
require("../models/Item");
require("../models/Comment");


var mongoose = require("mongoose");
console.log(process.env)
mongoose.connect(process.env.MONGODB_URI);
var User = mongoose.model("User");
var Comment = mongoose.model("Comment");
var Item = mongoose.model("Item");



for (let i = 0; i < 100; i++) {
  var user = new User();
  let r = (Math.random() + 1).toString(36).substring(7);
  user.username = r
  user.email = `"a${i}@a.com"`;
  user.setPassword(i.toString());
  user.save().catch(console.error('failed'));
}

for (let i = 0; i < 100; i++) {
  var comment = new Comment();
  let r = (Math.random() + 1).toString(36).substring(7);
  comment.body = r
  comment.save().catch(console.error('failed'));
}

for (let i = 0; i < 100; i++) {
  var item = new Item();
  let r = (Math.random() + 1).toString(36).substring(7);
  item.title = r
  item.description = `"a${i}@a.com"`;
  item.save().catch(console.error('failed'));
}


