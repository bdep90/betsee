'use strict';
let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.ObjectId;


let patternSchema = new mongoose.Schema({
  supplies: String,
  steps: [String],
  source: String,
  _project: { type: ObjectId, ref: 'project' }
})


// share
let Pattern = mongoose.model('pattern', patternSchema);
module.exports = Pattern;
