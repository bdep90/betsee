'use strict';
let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.ObjectId;


let projectSchema = new mongoose.Schema({
  author: String,
  email: String,
  project_title: String,
  refimg: String,
  img: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  // _author: { type: ObjectId, ref: 'user' },
  pattern: {
    supplies: String,
    steps: [String],
    source: String
  }
})




// share
let Project = mongoose.model('project', projectSchema);
module.exports = Project;
