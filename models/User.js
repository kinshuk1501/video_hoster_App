const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');


const usersch = mongoose.Schema({
  userId: { type: String, unique: true, required: true, dropDups: true },
  username: { type: String, required: true, dropDups: true },
  email: { type: String, unique: true, required: true, dropDups: true },
  password: { type: String, required: true, dropDups: true },
});

usersch.plugin(uniqueValidator);
module.exports = mongoose.model('users', usersch);
