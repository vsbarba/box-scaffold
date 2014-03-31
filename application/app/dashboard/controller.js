'use strict';

var dashboard = angular.module('boxScaffold.dashboard', [
  'ui.router'
]);

dashboard.config(function config($stateProvider) {
  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      controller: 'DashboardCtrl',
      templateUrl: '/app/dashboard/dashboard.html',
      data: {
        pageTitle: 'What is It?'
      }
    });
});

dashboard.controller('DashboardCtrl', function AboutCtrl($scope) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
});
