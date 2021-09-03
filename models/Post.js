const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const postsch = mongoose.Schema({
  title: { type: String, required: true, dropDups: true },
  description: { type: String, dropDups: true },
  userId: { type: String, required: true, dropDups: true },
  Video: {
    type: Buffer,
    required: true,
  },
  video_name: { type: String, required: true, dropDups: true },
});

module.exports = mongoose.model('posts', postsch);
