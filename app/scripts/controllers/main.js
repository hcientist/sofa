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


    // make 4 instruments, each with 4 beats, since right now 
    // they're only allowing 1 measure in a track, this is really also 4 tracks

    $scope.instruments = [];
    var measure0 = {
        reps: ['circle'],
        beats: []
    };
    measure0.beats.push(new Beat()); 
    measure0.beats.push(new Beat()); 
    measure0.beats.push(new Beat()); 
    measure0.beats.push(new Beat()); 
    $scope.instruments.push(measure0);
    measure0 = {
        reps: ['bar', 'circle'],
        beats: []
    };
    measure0.beats.push(new Beat()); 
    measure0.beats.push(new Beat()); 
    measure0.beats.push(new Beat()); 
    measure0.beats.push(new Beat()); 
    $scope.instruments.push(measure0);
    measure0 = {
        reps: ['circle', 'bar'],
        beats: []
    };
    measure0.beats.push(new Beat()); 
    measure0.beats.push(new Beat()); 
    measure0.beats.push(new Beat()); 
    measure0.beats.push(new Beat()); 
    $scope.instruments.push(measure0);
    measure0 = {
        reps: ['bar'],
        beats: []
    };
    measure0.beats.push(new Beat()); 
    measure0.beats.push(new Beat()); 
    measure0.beats.push(new Beat()); 
    measure0.beats.push(new Beat()); 
    $scope.instruments.push(measure0);
  });
