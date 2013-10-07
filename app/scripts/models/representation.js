'use strict';

function Representation($rootScope, currentType) {
  this.$rootScope = $rootScope;
  this.previousType = undefined;
  this.transitionCount = 0;
  this.currentType = currentType;
};