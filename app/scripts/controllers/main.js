'use strict';

angular.module('sofaApp')
  .controller('MainCtrl', function ($scope, Beat) {

    $scope.representationTypes = [
      'audio',
      'bead',
      'line',
      'pie',
      'bar'
    ];


    // make 4 measures, each with 4 beats, since right now 
    // they're only allowing 1 measure in a track, this is really also 4 tracks

    $scope.measures = [];
    $scope.measure0 = [];
    $scope.measure0.push(new Beat()); 
    $scope.measure0.push(new Beat()); 
    $scope.measure0.push(new Beat()); 
    $scope.measure0.push(new Beat()); 
    $scope.measures.push($scope.measure0);
    $scope.measure0 = [];
    $scope.measure0.push(new Beat()); 
    $scope.measure0.push(new Beat()); 
    $scope.measure0.push(new Beat()); 
    $scope.measure0.push(new Beat()); 
    $scope.measures.push($scope.measure0);
    $scope.measure0 = [];
    $scope.measure0.push(new Beat()); 
    $scope.measure0.push(new Beat()); 
    $scope.measure0.push(new Beat()); 
    $scope.measure0.push(new Beat()); 
    $scope.measures.push($scope.measure0);
    $scope.measure0 = [];
    $scope.measure0.push(new Beat()); 
    $scope.measure0.push(new Beat()); 
    $scope.measure0.push(new Beat()); 
    $scope.measure0.push(new Beat()); 
    $scope.measures.push($scope.measure0);
  });
