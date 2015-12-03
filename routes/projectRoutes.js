'use strict';
const express    = require('express');
const expressJwt = require('express-jwt');
const project    = require('../controllers/projectsController');
const router     = express.Router();
const secret     = process.env.SECRET;

router.route('/project')
  .all(expressJwt({
    secret: secret,
    projectProperty: 'auth'
  }))
  .get(project.find)
  .post(project.create)
  .put(project.update);

module.exports = router;
