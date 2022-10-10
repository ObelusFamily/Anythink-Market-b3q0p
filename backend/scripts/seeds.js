require("dotenv").config();
require("../models/User");
require("../models/Item");
require("../models/Comment");


var mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);
var User = mongoose.model("User");
var Comment = mongoose.model("Comment");
var Item = mongoose.model("Item");

function run() {

    promises = []
    for (let i = 0; i < 100; i++) {
      var user = new User();
      let r = (Math.random() + 1).toString(36).substring(7);
      user.username = r
      user.email = `"a${r}@a.com"`;
      user.setPassword(i.toString());
      promises.push(user.save())
    }
    
    for (let i = 0; i < 100; i++) {
      var comment = new Comment();
      let r = (Math.random() + 1).toString(36).substring(7);
      comment.body = r
      promises.push(comment.save())
    }
    
    for (let i = 0; i < 100; i++) {
      var item = new Item();
      let r = (Math.random() + 1).toString(36).substring(7);
      item.title = r
      item.description = `"a${i}@a.com"`;
      promises.push(item.save())
    }
    return Promise.all(promises)
}





run().then(function() {
  console.log('finished')
  mongoose.connection.close()
}).catch(function(e) {
  console.log(e)
})
