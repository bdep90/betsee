'use strict';
const mongoose = require('mongoose');
let ProjectSchema = require('./project.js').schema;

let userSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
  bio: String,
  avatar: String,
  token: String,
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }]
})





// share
let User = mongoose.model('users', userSchema);







// share
module.exports = User;
