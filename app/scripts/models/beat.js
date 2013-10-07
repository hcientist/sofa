function Beat($rootScope) {
  this.$rootScope = $rootScope;
  this.enabled = false;
}

angular.module('sofaApp.models', [])
  .factory('Beat', function ($injector) {
     return function(verb, args) { 
      return $injector.instantiate( Beat, { 
        // requestedVerb: verb,
        // requestedArgs: args,
        // Board: Board
      }); 
    };
  });
