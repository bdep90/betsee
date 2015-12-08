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
      url: "/projects",
      templateUrl: "./views/edit.html"
    })

  $urlRouterProvider.otherwise("/");
}
