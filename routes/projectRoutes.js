'use strict';
const Project    = require('../models/project');
const express    = require('express');
const request    = require('request');
const router     = express.Router();
const ETSYKEY    = process.env.ETSYKEY;

router.get('/projects', (req, res, next) => {
  Project.find({}, (err, projects) => {
    console.log('Find all projects error: ' + err + projects);
    res.json(projects);
  });
});

router.get('/projects/etsy', (req, res, next) => {
  console.log('Hitting Etsy route');
  request('https://openapi.etsy.com/v2/listings/:listing_id/imagesapi_key=' + ETSYKEY, (err, res, body) => {
  }).on('data', (data) => {
    res.send(data.toString());
    // for (var i = 0; i < data.length; i++) {
    //   res.send(data[i].results[0].num_children);
    // }
  })
});

router.post('/projects', (req, res, next) => {
  // create new project
  console.log(req.body.project);
  let newProject = new Project(req.body.project);

  newProject.save((err, project) => {
    if (err) {
      console.log('Project.create, saving error');
      return res.status(401).send({ message: 'Project not saved.' });
    } else {
      console.log('Project.create, successfully saved!');
    }
  });

  // return all projects after creating one
  Project.find({}, (err, projects) => {
    if (err) console.log(err);
    res.json(projects);
  });
});

router.put('/projects/:project_id', (req, res, next) => {
  Project.findOne({ _id: req.params.project_id }, (err, project) => {
    console.log('Project.update, project not found: ' + err);
    project.update(req.body.project,
    (err, project) => {
      res.json(project);
    });
  });
});

router.delete('/projects/:project_id', (req, res, next) => {
  Project.remove({ _id: req.params.project_id }, (err, project) => {
    console.log('Project.delete, project not found: ' + err);
  });
  // return all projects after deleting one
  Project.find({}, (err, projects) => {
    if (err) console.log(err);
    res.json(projects);
  });
});
// 'https://openapi.etsy.com/v2/listings/:listing_id/imagesapi_key='

module.exports = router;
