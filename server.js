'use strict';
const express  = require('express');
const mongoose = require('mongoose');
const path     = require('path');
const logger   = require('morgan');
const parser   = require('body-parser');
const app = express();

// =======
// parsing
app.use(logger('dev'));
app.use(parser.json()); // comes before routes
app.use(parser.urlencoded({ extended: false}));


// ====
// root
app.get('/betsee', (req, res) => {
  console.log('Hit Betsee');
});

// ================
// access to routes
// const userRoutes = require('./routes/userRoutes');
// const projectRoutes = require('./routes/projectRoutes');
// const patternRoutes = require('./routes/patternRoutes');
// const etsyRoutes    = equire('./routes/etsyRoutes');

// app.use('/user', userRoutes); // register routes w/ express
// app.use('/etsy', etsyRoutes); // ??


// ====================
// directory delegation
app.use('/', express.static('public'));
app.use('/scripts', express.static(__dirname + '/node_modules/angular'));
app.use('/scripts', express.static(__dirname + '/node_modules/underscore'));


// =============
// db connection
mongoose.connect('mongodb://localhost/betsee', (err) => {
  if (err) throw err;
});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', (callback) => {
  console.log('mongoose connected');
});


// ======
// server
const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Server now running on ' + port);
});
