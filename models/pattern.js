'use strict';
const mongoose = require('mongoose');

let patternSchema = new mongoose.Schema({
  title: String,
  supplies: String,
  steps: [String],
  source: String
})

let Pattern = mongoose.model('patterns', patternSchema);







// share
module.exports = Pattern;
