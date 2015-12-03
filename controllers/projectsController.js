'use strict';
const project = require('../models/project');

// create new project
function create(req, res) {
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
}

// get all projects
function find(req, res) {
  Project.find({}, (err, projects) => {
    console.log('Find all projects error: ' + err);
    res.json(projects);
  })
}

// edit current project
function update(req, res) {
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
}


// share
module.exports = {
  create: create,
  find: find,
  update: update
}
