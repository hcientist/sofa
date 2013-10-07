function Beat($rootScope, beatId, selected) {
  this.$rootScope = $rootScope;
  this.selected = selected;
  this.fill = 'black';
  this.id = beatId;
  this.decrement = function() {
    this.opacity = this.opacity - 0.1;
    console.log('decremented to: '+this.opacity);
  };
  this.toggle = function() {
    if (this.fill == 'black') {
      this.fill = 'none';
    } else {
      this.fill = 'black';
    }
    // console.log('toggled fill');
  };
}

angular.module('sofaApp.models', [])
  .factory('Beat', function ($injector) {
     return function(id, selected) { 
      return $injector.instantiate( Beat, { 
        beatId: id,
        selected: selected
      }); 
    };
  });
