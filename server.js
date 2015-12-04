'use strict';
const express  = require('express');
const mongoose = require('mongoose');
const path     = require('path');
const logger   = require('morgan');
const parser   = require('body-parser');
const app      = express();

const userRoutes    = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');
const patternRoutes = require('./routes/patternRoutes');
// const etsyRoutes    = require('./routes/etsyRoutes');



// ================
// configuration
// ================
app.use(logger('dev')); // to log requests to the console
app.use(parser.json()); // comes before routes
app.use(parser.urlencoded({ extended: false}));



// ================
// routes
// ================
app.use('/', userRoutes); // register routes
// app.use('/', projectRoutes);
// app.use('/', patternRoutes);
// app.use('/etsy', etsyRoutes); // ??



// ==============================
// user authentication test route
// ==============================
// const jwt     = require('jsonwebtoken');
// const secret  = process.env.SECRET;
// // $http.defaults.headers.common['x-access-token'] = jwt //to send the token on every request in angular
//
// let testRoute = express.Router();
//
// // use routes
// app.use('/test', testRoute);
//
// // root route for testing
// testRoute.get('/', (req, res) => {
//   res.json({ message: 'Test route on.' })
// });
//
// // test new user
// const User = require('./models/user');
// testRoute.post('/seed', (req, res) => {
//   // sample user
//   let bridge = new User(req.body);
//
//   // save sample user
//   bridge.save((err) => {
//     console.log('Saving sample user error');
//     if (err) throw err;
//
//     console.log('Bridge saved!');
//     res.json({ success: true, bridge });
//   });
// });
//
// // post route for auth
// testRoute.post('/auth', (req, res) => {
//   // find user
//   User.findOne({
//     username: req.body.username
//   }, (err, user) => {
//     console.log(err);
//     if (err) throw err;
//
//     if(!user) {
//       res.json({ success: false, message: 'Auth failed. User not found.' });
//     } else if (user) {
//       // match password
//       if (user.password != req.body.password) {
//         res.json({ success: false, message: 'Auth failed. Wrong password.' });
//       } else {
//         // create and return token if user found and password matches
//         let token = jwt.sign(user, secret, {
//           expiresIn: 3600
//         });
//         res.json({
//           success: true,
//           message: 'Authed!' //'You have a token!'
//           // token: token
//         });
//       }
//     }
//   });
// });
//
// // verify token
// testRoute.use((req, res, next) => {
//   // check for token
//   let token = req.body.token || req.query.token || req.headers['x-access-token'];
//   if (token) {
//     // verify secret
//     jwt.verify(token, secret, (err, decoded) => {
//       if (err) {
//         console.log('jwt verify error');
//         return res.json({ success: false, message: 'Failed to auth token.'});
//       } else {
//         // save to request for future use
//         req.decoded = decoded;
//         next();
//       }
//     });
//   } else {
//     // return error if there's no token
//     return res.status(404).send({
//       success: false,
//       message: 'No token provided.'
//     });
//   }
// });
//
// // all users route
// testRoute.get('/users', (req, res) => {
//   User.find({}, (err, users) => {
//     console.log('all user route ' + err);
//     res.json(users);
//   });
// });


// ================
// dir delegation
// ================
app.use('/', express.static('public'));
app.use('/scripts', express.static(__dirname + '/node_modules/angular'));
app.use('/scripts', express.static(__dirname + '/node_modules/underscore'));



// ================
// db connection
// ================
mongoose.connect('mongodb://localhost/betsee');



// ================
// server
// ================
const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Server now running on ' + port);
});
