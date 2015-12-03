'use strict';
const pattern = require('../models/pattern');

// create new pattern
function create(req, res) {
  console.log(req.body.pattern);
  let newPattern = new Pattern(req.body.pattern);

  newPattern.save((err, pattern) => {
    if (err) {
      console.log('Pattern.create, saving error');
      return res.status(401).send({ message: 'Pattern not saved.' });
    } else {
      console.log('Pattern.create, successfully saved!');
      res.json({ success: true });
    }
  });
}

// edit current pattern
function update(req, res) {
  let currentPattern = req.body.pattern;

  Pattern.findOne({ _id: currentPattern._id }, (err, pattern) => {
    console.log('Pattern.update, pattern not found: ' + err);
    pattern.update({
      title: currentPattern.newTitle,
      supplies: currentPattern.newSupplies,
      steps: currentPattern.newSteps,
      source: currentPattern.newSource
    },
    (err, pattern) => {
      res.send(pattern);
    });
  });
}



// share
module.exports = {
  create: create,
  update: update
}
