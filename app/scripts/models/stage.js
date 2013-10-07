'use strict';

function Stage($rootScope, instrumentsCollection, remainingInstrumentGenerator) {
  this.$rootScope = $rootScope;
  this.remainingInstrumentGenerator = remainingInstrumentGenerator;
};