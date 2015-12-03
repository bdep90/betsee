'use strict';
const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.ObjectId;


let projectSchema = new mongoose.Schema({
  refimg: String,
  img: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }, //???
  _author: { type: ObjectId, ref: 'user' },
  pattern: [String]
  // pattern: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Pattern'
  // }]
})





// share
module.exports = mongoose.model('project', projectSchema);
