'use strict';
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const secret = process.env.SECRET;
// let bridge = new User({
//     email: 'bridge@gmail.com',
//     username: 'bridge',
//     password: 'bridge'
//   });

// create new user
function create(req, res) {
  let newUser = new User({
    username: req.body.username,
    email:    req.body.email,
    password: req.body.password
  });

  newUser.save((err, user) => {
    console.log(user);
    if (err) {
      console.log('Saving user error: ' + err);
      return res.status(401).send({ message: 'User not saved.' });
    } else {
      console.log('User successfully saved!');
      res.json({ success: true, user });
    }
  });
}

// authenticate current user
function auth(req, res) {
  // find user
   User.findOne({
     username: req.body.username
   }, (err, user) => {
     console.log(err);
     if (err) throw err;

     if(!user) {
       res.json({ success: false, message: 'Auth failed. User not found.' });
     } else if (user) {
       // match password
       if (user.password != req.body.password) {
         res.json({ success: false, message: 'Auth failed. Wrong password.' });
       } else {
         // create and return token if user found and password matches
         let token = jwt.sign(user, secret, {
           expiresIn: 3600
         });
         res.json({
           success: true,
           message: 'You have a token!',
           token: token
         });
       }
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
  console.log(req);

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



// share
module.exports = {
  create: create,
  find: find,
  update: update,
  destroy: destroy,
  auth: auth
}
