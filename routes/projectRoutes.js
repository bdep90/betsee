'use strict';
const Project    = require('../models/project');
const express    = require('express');
const router     = express.Router();

router.route('/projects')
  .post((req, res, next) => {
    // create new project
    console.log(req.body.project);
    let newProject = new Project(req.body.project);

    newProject.save((err, project) => {
      if (err) {
        console.log('Project.create, saving error');
        return res.status(401).send({ message: 'Project not saved.' });
      } else {
        console.log('Project.create, successfully saved!');
        res.json({ success: true });
      }
    });
  })
  .get((req, res, next) => {
    Project.find({}, (err, projects) => {
      console.log('Find all projects error: ' + err);
      res.send(projects);
    })
  })
  .put((req, res, next) => {
    let currentProject = req.body.project;

    Project.findOne({ _id: currentProject._id }, (err, project) => {
      console.log('Project.update, project not found: ' + err);
      project.update({
        refimg: currentProject.newRefimg,
        img: currentProject.newImg
      },
      (err, project) => {
        res.send(project);
      });
    });
  });


module.exports = router;
