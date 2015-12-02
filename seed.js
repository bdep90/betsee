'use strict';
let Project    = require('./models/project.js');
let Pattern    = require('./models/pattern.js').model;
let mongoose   = require('mongoose');

// Connect to db
mongoose.connect('mongodb://localhost/betsee', (err) => {
  if (err) {
    console.log('Seed file connection error' + err);
  };
});
