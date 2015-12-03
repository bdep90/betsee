'use strict';
const express    = require('express');
const expressJwt = require('express-jwt');
const pattern    = require('../controllers/patternsController');
const router     = express.Router();
const secret     = process.env.SECRET;

router.route('/pattern')
  .all(expressJwt({
    secret: secret,
    patternProperty: 'auth'
  }))
  .post(pattern.create)
  .put(pattern.update);

module.exports = router;
