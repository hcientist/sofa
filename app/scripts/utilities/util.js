/**
* sofaApp.utils Module
*
* Description
*/
var utils = angular.module('sofaApp.utils', []);

// General
  utils.value('General', {
    originalScale: 1,
    scale: 1,
    vertDivPadding: 0,
    horzDivPadding: 25
  });
// Circular
  utils.value('Circular', {
    cX: 100,
    cY: 75,
    circularMeasureR: 51
  });
  // utils.value.Circular.circularMeasureCx = (utils.value.Circular.cX+utils.value.General.horzDivPadding)*utils.value.General.scale;
  // utils.value.Circular.circularMeasureCy = (utils.value.Circular.cY+utils.value.General.vertDivPadding)*utils.value.General.scale;
  // utils.value.Circular.circularMeasureR = utils.value.Circular.circularMeasureR*utils.value.General.scale;
  // utils.value.Circular.circularDivWidth = 2*utils.value.Circular.circularMeasureR + utils.value.General.horzDivPadding*2 + utils.value.Circular.cX*utils.value.General.scale;
  // utils.value.Circular.circularDivHeight = 2*utils.value.Circular.circularMeasureR + utils.value.General.vertDivPadding*2 + utils.value.Circular.cY*utils.value.General.scale;
// Linear
  // utils.value('Linear', {});

//         linearLineLength: 2 * circularMeasureR * Math.PI,
//         linearDivWidth: linearLineLength + horzDivPadding,
//         linearDivHeight: 25 + vertDivPadding,
//       // Transition
//         transitionNumberOfPoints: this.transitionNumberOfPoints,
// transitionNumberOfPoints
//         firstBeatStart: 0, // in s
//         timeIncrement: 500, // in ms
//         margin: {top: 20, left: 60},
//         lineDivision: linearLineLength/transitionNumberOfPoints,
//         transitionDuration: 3000/transitionNumberOfPoints,
//         animationIntervalDuration: 1000,

//       // Audio
//         //Measure
//         audioMeasureCx: 50,
//         audioMeasureCy: 40,
//         audioMeasureR: 12,
//         //Beat
//         audioBeatCx: 50,
//         audioBeatCy: 40,
//         audioBeatR: 12,
//         colorForAudio: COLORS.hexColors[5],
//       // Pie
//         //Measure
//         measureStartAngle: 0,
//         //Beat
//         beatStartAngle,
//         beatEndAngle,
//         beatFactoryR: 30,
//       // Bead
//         circularBeadBeatRadius: 8,
//       //Number Line
//         lineHashHeight: 30,
//         numberLineY: 25 + vertDivPadding,
//       // Bar
//         //Measure
//         lbbMeasureLocationX: 15, // 5%
//         lbbMeasureLocationY: 10,
//         lbbMeasureWidth: linearLineLength,
//         lbbMeasureHeight: 25,
//         //Beat
//         linearBeatXPadding: 0,
//         linearBeatYPadding: 0,
//         beatWidth: linearLineLength/this.model.get('beats').length,
//         beatHeight: lbbMeasureHeight - 2*linearBeatYPadding,
//         beatBBY: linearBeatYPadding + lbbMeasureLocationY,
//         beatFactoryBarWidth: 30,
//         beatFactoryBarHeight: 15,

//       var circleStates: [];
//       for (i=0; i<transitionNumberOfPoints; i++){
//           // circle portion
//           var circleState = $.map(Array(transitionNumberOfPoints), function (d, j) {
//             var x = circularMeasureCx + lineDivision*i + circularMeasureR * Math.sin(2 * j * Math.PI / (transitionNumberOfPoints - 1));
//             var y =  circularMeasureCy - circularMeasureR * Math.cos(2 * j * Math.PI / (transitionNumberOfPoints - 1));
//             return { x: x, y: y};
//           })
//           circleState.splice(transitionNumberOfPoints-i);
//           //line portion
//           var lineState = $.map(Array(transitionNumberOfPoints), function (d, j) {
//             var x = circularMeasureCx + lineDivision*j;
//             var y =  circularMeasureCy - circularMeasureR;
//             return { x: x, y: y};
//           })
//           lineState.splice(i);
//           //together
//           var individualState = lineState.concat(circleState);
//           circleStates.push(individualState);
//       }

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