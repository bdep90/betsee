'use strict';
const express    = require('express');
const expressJwt = require('express-jwt');
const user       = require('../controllers/usersController');
const router     = express.Router();
const secret     = process.env.SECRET;

router.route('/user')
  .all(expressJwt({
    secret: secret,
    userProperty: 'auth'
  }))
  .get(user.find)
  .put(user.update)
  .delete(user.destroy);

router.route('/user/auth')
  .post(user.auth);

router.route('/user/signup')
  .post(user.create);

module.exports = router;
