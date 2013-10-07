function Beat($rootScope) {
  this.$rootScope = $rootScope;
  this.enabled = false;
  this.opacity = 1;
  this.decrement = function() {
    this.opacity = this.opacity - 0.1;
    console.log('decremented to: '+this.opacity);
  };
  this.toggle = function() {
    this.opacity = (this.opacity + 1)%2;
    console.log('toggled opacity');
  };
}

angular.module('sofaApp.models', [])
  .factory('Beat', function ($injector) {
     return function(verb, args) { 
      return $injector.instantiate( Beat, { 
      }); 
    };
  });
