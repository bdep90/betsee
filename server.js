'use strict';
const express  = require('express');
const mongoose = require('mongoose');
const path     = require('path');
const logger   = require('morgan');
const bodyParser = require('body-parser');
const app = express();


// access routes
const userRoutes = require('./routes/userRoutes');
// const projectRoutes = require('./routes/projectRoutes');
// const patternRoutes = require('./routes/patternRoutes');
// const etsyRoutes    = equire('./routes/etsyRoutes');

app.use(logger('dev'));
app.use(bodyParser.json()); // comes before routes

app.use('/user', userRoutes); // register routes w/ express
// app.use('/etsy', etsyRoutes); // ??


// assigns paths
app.use('/', express.static('public'));
app.use('/scripts', express.static(__dirname + '/node_modules/angular'));
app.use('/scripts', express.static(__dirname + '/node_modules/underscore'));


// connect to db
const db = mongoose.connection;
mongoose.connect('mongodb://localhost/betsee', (err) => {
  if (err) throw err;
});


// notification of open db
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('db connected');
});


// server
const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Server now running.');
});
