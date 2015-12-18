'use strict';
angular.module('BetseeProjects')
  .controller('ProjectsCtrl', ProjectsCtrl)
  // .controller('PatternsCtrl', PatternsCtrl)

ProjectsCtrl.$inject = ['$http'];
// PatternsCtrl.$inject = ['$http'];

// =============
// ProjectCtrl
// =============
function ProjectsCtrl ($http) { //constructor function
  let self = this;
  self.all = [];
  self.allProjects = allProjects;
  self.addProject = addProject;
  self.updateProject = updateProject;
  self.newProject = {};
  self.deleteProject = deleteProject;

  // homepage - get all projects
  allProjects();
  function allProjects() {
    $http.get('http://localhost:3000/projects')
      .success((data) => {
        self.all = data;
      })
      .error((data) => {
        console.log('Get projects error: ' + data);
      })
  }

  // post new project
  function addProject() {
    $http.post('http://localhost:3000/projects', self.newProject)
      .success((data) => {
        allProjects();
      })
      .error((data) => {
        console.log('New project error: ' + data);
      })
    self.newProject = {};
  }

  // update project
  function updateProject(project) {
    $http.put('http://localhost:3000/projects/' + project._id, self.updateProject)
      .success((data) => {
        allProjects();
      })
      .error((data) => {
        console.log('Update project error: ' + data);
      })
    // self.newProject = {}; // ???
  }

  // delete project
  function deleteProject(project) {
    $http.delete('http://localhost:3000/projects/' + project._id)
      .success((data) => {
        let index = self.all.indexOf(project);
        self.all.splice(index, 1);
        allProjects();
      })
      .error((data) => {
        console.log('Delete project error: ' + data);
      })
  }

  return self
}

// =============
// PatternCtrl
// =============
// function PatternsCtrl () { //constructor function
//   // homepage - get all pa
//   $http.get('/patterns')
//     .success((data) => {
//       self.patterns = data;
//       console.log(data);
//     })
//     .error((data) => {
//       console.log('Get patterns error: ' + data);
//     })
//
//   // post new pattern
//   self.newPattern = () => {
//     $http.post('/patterns', self.formData)
//       .success((data) => {
//         self.formData = {};
//         self.patterns = data;
//         console.log(data);
//       })
//       .error((data) => {
//         console.log('New pattern error: ' + data);
//       })
//     }
//
//   // update pattern
//   self.updatePattern = () => {
//     $http.post('/patterns/' + id, self.formData)
//       .success((data) => {
//         self.formData = {};
//         self.patterns = data;
//         console.log(data);
//       })
//       .error((data) => {
//         console.log('Update pattern error: ' + data);
//       })
//     }
//
//   return self
// }
