angular.module('sofaApp.directives.measure',['sofaApp.directives.beat']).directive('measure', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      repr: '@representation',
      measure: '=model'
    },
    link: function(scope, elem, attr, ctrl) {
      // Constant Variables throughout the representations
      // General
        scope.originalScale = 1;
        scope.scale = 1;
        scope.vertDivPadding = 0;
        scope.horzDivPadding = 25;
      // Circular
        scope.cX = 100;
        scope.cY = 75
        scope.circularMeasureCx = (scope.cX+scope.horzDivPadding)*scope.scale;
        scope.circularMeasureCy = (scope.cY+scope.vertDivPadding)*scope.scale;
        scope.circularMeasureR = 51*scope.scale;
        scope.circularDivWidth = 2*scope.circularMeasureR + scope.horzDivPadding*2 + scope.cX*scope.scale; 
        scope.circularDivHeight = 2*scope.circularMeasureR + scope.vertDivPadding*2 + scope.cY*scope.scale; 
      // Linear
        scope.linearLineLength = 2 * scope.circularMeasureR * Math.PI;
        scope.linearDivWidth = scope.linearLineLength + scope.horzDivPadding;
        scope.linearDivHeight = 25 + scope.vertDivPadding;
      // Transition
        scope.transitionNumberOfPoints = calculateNumberOfPoints( scope.measure.beats.length );
        scope.firstBeatStart = 0; // in s
        scope.timeIncrement = 500; // in ms
        scope.margin = {top: 20, left: 60};
        scope.lineDivision = scope.linearLineLength/scope.transitionNumberOfPoints;
        scope.transitionDuration = 3000/scope.transitionNumberOfPoints;
        scope.animationIntervalDuration = 1000;

      // Audio
        //Measure
        scope.audioMeasureCx = 50;
        scope.audioMeasureCy = 40;
        scope.audioMeasureR = 12;
        //Beat
        scope.audioBeatCx = 50;
        scope.audioBeatCy = 40;
        scope.audioBeatR = 12;
        // scope.colorForAudio = COLORS.hexColors[5];
      // Pie
        //Measure
        scope.measureStartAngle = 0;
        //Beat
        scope.beatStartAngle;
        scope.beatEndAngle;
        scope.beatFactoryR = 30;
      // Bead
        scope.circularBeadBeatRadius = 8;
      //Number Line
        scope.lineHashHeight = 30;
        scope.numberLineY = 25 + scope.vertDivPadding;
      // Bar
        //Measure
        scope.lbbMeasureLocationX = 15; // 5%
        scope.lbbMeasureLocationY = 10;
        scope.lbbMeasureWidth = scope.linearLineLength;
        scope.lbbMeasureHeight = 25;
        //Beat
        scope.linearBeatXPadding = 0;
        scope.linearBeatYPadding = 0;
        scope.beatWidth = scope.linearLineLength/( scope.measure.beats.length );
        scope.beatHeight = scope.lbbMeasureHeight - 2*scope.linearBeatYPadding;
        scope.beatBBY = scope.linearBeatYPadding + scope.lbbMeasureLocationY;
        scope.beatFactoryBarWidth = 30;
        scope.beatFactoryBarHeight = 15;

      scope.circleStates = [];

      // scope.$apply();
      // for (i=0; i<transitionNumberOfPoints; i++){
      //     // circle portion
      //     var circleState = $.map(Array(transitionNumberOfPoints), function (d, j) {
      //       var x = circularMeasureCx + lineDivision*i + circularMeasureR * Math.sin(2 * j * Math.PI / (transitionNumberOfPoints - 1));
      //       var y =  circularMeasureCy - circularMeasureR * Math.cos(2 * j * Math.PI / (transitionNumberOfPoints - 1));
      //       return { x: x, y: y};
      //     })
      //     circleState.splice(transitionNumberOfPoints-i);
      //     //line portion
      //     var lineState = $.map(Array(transitionNumberOfPoints), function (d, j) {
      //       var x = circularMeasureCx + lineDivision*j;
      //       var y =  circularMeasureCy - circularMeasureR;
      //       return { x: x, y: y};
      //     })
      //     lineState.splice(i);
      //     //together
      //     var individualState = lineState.concat(circleState);
      //     scope.circleStates.push(individualState);
      // }
    },
    templateUrl: 'views/templates/measure.html'
  };
});

function calculateNumberOfPoints(n) {
  // We want to be above 30, but below 90 to avoid computational and animation delay
  switch (n){
    case 1:
      return 40;
    case 2:
      return 40;
    case 3:
      return 42;
    case 4:
      return 40;
    case 5:
      return 40;
    case 6:
      return 42;
    case 7:
      return 42;
    case 8:
      return 40;
    case 9:
      return 45;
    case 10:
      return 40;
    case 11:
      return 44;
    case 12:
      return 48;
    case 13:
      return 39;
    case 14:
      return 42;
    case 15:
      return 45;
    case 16:
      return 48;
  }
}