'use strict';
const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.ObjectId;


let patternSchema = new mongoose.Schema({
  title: String,
  supplies: String,
  steps: [String],
  source: String,
  _project: { type: ObjectId, ref: 'project' }
})


// share
module.exports = mongoose.model('patterns', patternSchema);
