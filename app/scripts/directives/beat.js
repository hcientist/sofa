angular.module('sofaApp.directives',[]).directive('beat', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      opacity: '@',
      toggleDir: '&toggle'
    },
    link: function(scope, elem, attr, ctrl) {
    },
    templateUrl: 'views/templates/beat.html'
  };
});