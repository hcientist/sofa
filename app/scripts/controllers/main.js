'use strict';

angular.module('sofaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.representationTypes = [
      'audio',
      'bead',
      'line',
      'pie',
      'bar'
    ];
  });