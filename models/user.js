'use strict';
const mongoose = require('mongoose');
const bcrypt   = require('bcrypt');
const secret   = process.env.SECRET;
let ProjectSchema = require('./project.js').schema;

let userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true},
  username: { type: String, required: true, unique: true},
  password: { type: String, required: true},
  bio: String,
  avatar: String,
  token: String,
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }]
})


userSchema.pre('save', function (next) {
  let currentUser = this;
  // hash password if it's been modified (or is new)
  if (!currentUser.isModified('password')) return next();
  // generate salt
  bcrypt.genSalt(5, (err, salt) => {
    if (err) return next(err);
    // use new salt
    bcrypt.hash(secret, salt, (err, hash) => {
      if (err) return next(err);
      // replace password placeword w/ hashed one
      currentUser.password = hash;
      next();
    });
  });
});

userSchema.methods.authenticate = function(password, callback) {
  // if 1st arg (once encrypted) coresponds to 2nd arg
  bcrypt.compare(secret, this.password, function(err, isMatch) {
    callback(null, isMatch);
  });
};



// share
module.exports = mongoose.model('user', userSchema);
