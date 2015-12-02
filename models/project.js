'use strict';
const mongoose = require('mongoose');
let patternSchema = require('./pattern.js').schema;

let projectSchema = new mongoose.Schema({
  refimg: String,
  img: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }, //???
  pattern: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pattern'
  }]
})





// share
let Project = mongoose.model('projects', projectSchema);







// share
module.exports = Project;
