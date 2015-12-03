'use strict';
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const secret = process.env.SECRET;

// create new user
function create(req, res) {
  console.log('User.create hit.');
  let newUser = new User(req.body.user);

  newUser.save((err, user) => {
    if (err) {
      console.log('Saving user error: ' + err);
      return res.status(401).send({ message: 'User not saved.' });
    } else {
      console.log('User successfully saved!');
      res.json({ success: true, user });
    }
  });
}

// get all users
function find(req, res) {
  User.find({}, (err, users) => {
    console.log('All users find: ' + err);
    res.json(users);
  })
}

// edit current user
function update(req, res) {
  let currentUser = req.body.user;

  User.findOne({ username: currentUser.username }, (err, user) => {
    console.log('Cannot find current user: ' + err);
    user.update({
      email: currentUser.newEmail,
      username: currentUser.newUsername,
      password: currentUser.newPassword,
      bio: currentUser.newBio,
      avatar: currentUser.newAvatar
    },
   (err, user) => {
      console.log('User.update error: ' + err);
      res.send(user);
    });
  });
}

// destroy current user
function destroy(req, res) {
  let currentUser = req.body.user;

  User.findOne({ username: currentUser.username }, (err, user) => {
    console.log('User.destroy, username not found: ' + err);
    user.remove((err) => {
      console.log('User.destroy, user not removed: ' + err);
      res.send({ 'record': 'deleted' });
    });
  });
}

// authenticate current user
function auth(req, res) {
  // find user
  User.findOne({ username: req.body.username }, (err, user) => {
    console.log('Cannot find user for auth: ' + err);

    if(!user) {
      res.json({ success: false, message: 'Auth failed. User not found.' });
    } else if (user) {
      // match password
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Auth failed. Wrong password.' });
      } //else {
        // create and return token if user found and password matches
        // verify token in angular controller
        // let token = jwt.sign(user, secret, {
        //   expiresIn: 3600
        // });
        // res.json({
        //   success: true,
        //   message: 'You have a token!',
        //   token: token
        // });
      //}
    };
  });
}


// share
module.exports = {
  create: create,
  find: find,
  update: update,
  destroy: destroy,
  auth: auth
}
