'use strict';

// angular.module('sofaApp', [])
angular.module('sofaApp', ['sofaApp.models', 'sofaApp.directives.beat', 'sofaApp.directives.measure', 'sofaApp.utils'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
