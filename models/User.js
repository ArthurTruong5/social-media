// Below to constance are mandotary to create a schema
// Creating a model js file must be capitalized
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// You can use var = require("User")
module.exports = User = mongoose.model('users', UserSchema);
