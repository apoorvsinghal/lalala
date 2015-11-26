var mongoose = require('mongoose');
var bSchema = new mongoose.Schema({
  content: [{
    header: {type: String},
    main_body: {type: String},
    blogger: {type: String}
  }],
  comments: [{

    company: {type: String},
    comm_message: {type: String}

  }],
  likes: String,
  date: Date
});

var Blog = mongoose.model('Blog', bSchema);
module.exports = Blog;
