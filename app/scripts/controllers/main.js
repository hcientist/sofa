'use strict';

// angular.module('sofaApp',['sofaApp.directives'])
angular.module('sofaApp')
  .controller('MainCtrl', function ($scope, Beat) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.measures = [];
    $scope.measure0 = [];
    $scope.measure0.push(new Beat()); 
    $scope.measure0.push(new Beat()); 
    $scope.measure0.push(new Beat()); 
    $scope.measure0.push(new Beat()); 
    $scope.measures.push($scope.measure0);
    // $scope.measure0 = [];
    // $scope.measure0.push(new Beat()); 
    // $scope.measure0.push(new Beat()); 
    // $scope.measure0.push(new Beat()); 
    // $scope.measure0.push(new Beat()); 
    // $scope.measures.push($scope.measure0);
    // $scope.measure0 = [];
    // $scope.measure0.push(new Beat()); 
    // $scope.measure0.push(new Beat()); 
    // $scope.measure0.push(new Beat()); 
    // $scope.measure0.push(new Beat()); 
    // $scope.measures.push($scope.measure0);
    // $scope.measure0 = [];
    // $scope.measure0.push(new Beat()); 
    // $scope.measure0.push(new Beat()); 
    // $scope.measure0.push(new Beat()); 
    // $scope.measure0.push(new Beat()); 
    // $scope.measures.push($scope.measure0);
  });
