angular.module('sofaApp.directives.measure',['sofaApp.directives.beat']).directive('measure', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      repr: '@representation',
      measure: '=model'
    },
    link: function(scope, elem, attr, ctrl) {
    },
    templateUrl: 'views/templates/measure.html'
  };
});

