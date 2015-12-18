'use strict';
angular.module('BetseeProjects', ['ui.router'])
  .config(MainRouter);

function MainRouter ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/home.html"
    })
    .state("new", {
      url: "/projects",
      templateUrl: "./views/new.html"
    })
    .state("edit", {
      url: '/projects/:project_id',
      templateUrl: './views/edit.html',
      controller: function($scope, $stateParams) {
        $scope.project_id = $stateParams.project._id;
      }
    })
  $urlRouterProvider.otherwise("/");
}
