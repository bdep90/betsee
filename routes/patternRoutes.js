'use strict';
const Pattern    = require('../models/pattern');
const express    = require('express');
const router     = express.Router();

router.route('/patterns')
  .post((req, res, next) => {
    // create new pattern
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
  })
  .get((req, res, next) => {
    Pattern.find({}, (err, patterns) => {
      console.log('Find all patterns error: ' + err);
      res.send(patterns);
    })
  })
  .put((req, res, next) => {
    let currentPattern = req.body.pattern;

    Pattern.findOne({ _id: currentPattern._id }, (err, pattern) => {
      console.log('Pattern.update, pattern not found: ' + err);
      pattern.update({
        refimg: currentPattern.newRefimg,
        img: currentPattern.newImg
      },
      (err, pattern) => {
        res.send(pattern);
      });
    });
  });


module.exports = router;
