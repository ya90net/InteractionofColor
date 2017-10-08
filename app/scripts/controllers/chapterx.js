'use strict';

/**
 * @ngdoc function
 * @name interactionofColorApp.controller:ChapterxCtrl
 * @description
 * # ChapterxCtrl
 * Controller of the interactionofColorApp
 */
angular.module('interactionofColorApp')
  .controller('ChapterxCtrl', function ($scope, ColorPickerService) {

	////
	// make color pickers

	// plate1
	$scope.plate1 = {
		color1 : ColorPickerService.makeColorPicker("#a7a0cb"),
		color2 : ColorPickerService.makeColorPicker("#7a70b3"),
	};

	additiveBox($scope.plate1.color1.color, $scope.plate1.color2.color);
	$scope.$watch(function() {
    return {
        'color1': $scope.plate1.color1.color,
        'color2': $scope.plate1.color2.color,
	    };
	} , function() {
	    additiveBox($scope.plate1.color1.color, $scope.plate1.color2.color);
	}, true);

	// plate2
	$scope.plate2 = {
		color1 : ColorPickerService.makeColorPicker("#404068"),
		color2 : ColorPickerService.makeColorPicker("#7571a2"),
	};
	subtractiveBox($scope.plate2.color1.color, $scope.plate2.color2.color);
	$scope.$watch(function() {
    return {
        'color1': $scope.plate2.color1.color,
        'color2': $scope.plate2.color2.color,
	    };
	} , function() {
	    subtractiveBox($scope.plate2.color1.color, $scope.plate2.color2.color);
	}, true);

	

  });



function additiveBox(color1,color2){

var canvas = document.getElementById("additive");

    var scale = 1.15;
    var width  = 880 * scale;
    var height = 660 * scale;

    var retina = true;

    var bgColor     = color1;
    var boxColor    = color2;

    var style = 'background-color:' + bgColor + ';\
                 position:absolute;\
                 left: 50%;\
                 top: 50%;';
        style += 'transform: translate(-50%, -50%) ';
        style += retina ? 'scale(0.5);' : ';';

    canvas.setAttribute("width", width+'px');
    canvas.setAttribute("height", height+'px');
    canvas.setAttribute("style", style);    

var ctx = canvas.getContext("2d");

var rectW = 440 * scale;
var rectH = 235 * scale;

var startX = ( width - rectW ) / 2;
var startY = ( height - rectH ) / 2;


////////
// Tools
//
function drawRect(x, y, width, height, color){
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawRotatedRect(x, y, width, height, degrees, color) {
    // first save the untranslated/unrotated context
    ctx.save();
    ctx.beginPath();
    // move the rotation point to the center of the rect
    ctx.translate(x+width, y+height);
    // rotate the rect
    ctx.rotate(degrees * Math.PI / 180);
    // draw the rect on the transformed context
    // Note: after transforming [0,0] is visually [x,y]
    //       so the rect needs to be offset accordingly when drawn
    ctx.rect(0, 0, rectW, rectH);
    ctx.fillStyle = color;
    ctx.fill();
    // restore the context to its untranslated/unrotated state
    ctx.restore();
}
function drawDot(x,y,color){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, 3, 0, Math.PI*2, false);
    ctx.fill();
}
function drawLine(pointA,pointB,color){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(pointA.x,pointA.y);
    ctx.lineTo(pointB.x,pointB.y);
    ctx.stroke();
}
function degreetoRadian(degree) {
    var radian = degree * ( Math.PI / 180 ) ;
    return radian;
}
// ベクトルを回転する
function rotateVector(x,y,radian,origin=false){

    const coordinate = {x:0,y:0};
    var x = origin == false ? x : x - origin.x;
    var y = origin == false ? y : y - origin.y;
    
    coordinate.x = ( x * Math.cos(radian) ) - ( y * Math.sin(radian) );
    coordinate.y = ( x * Math.sin(radian) ) + ( y * Math.cos(radian) );

    if( origin != false ) {
        coordinate.x += origin.x;
        coordinate.y += origin.y;
    }

    return coordinate;
    // 参考：http://keisan.casio.jp/exec/system/1496883774
}
// 交点を求める
function intersectionPoint (pointA, pointB, pointC, pointD) {
    // if the lines intersect, the result contains the x and y of the intersection (treating the lines as infinite) and booleans for whether line segment 1 or line segment 2 contain the point
    var denominator, a, b, numerator1, numerator2, result = {
        x: null,
        y: null,
        onLine1: false,
        onLine2: false
    };
    denominator = ((pointD.y - pointC.y) * (pointB.x - pointA.x)) - ((pointD.x - pointC.x) * (pointB.y - pointA.y));
    if (denominator == 0) {
        return result;
    }
    a = pointA.y - pointC.y;
    b = pointA.x - pointC.x;
    numerator1 = ((pointD.x - pointC.x) * a) - ((pointD.y - pointC.y) * b);
    numerator2 = ((pointB.x - pointA.x) * a) - ((pointB.y - pointA.y) * b);
    a = numerator1 / denominator;
    b = numerator2 / denominator;

    result.x = pointA.x + (a * (pointB.x - pointA.x));
    result.y = pointA.y + (a * (pointB.y - pointA.y));

    if (a > 0 && a < 1) {
        result.onLine1 = true;
    }
    if (b > 0 && b < 1) {
        result.onLine2 = true;
    }

    return result;
};


// draw rect
drawRect(startX, startY, rectW, rectH, boxColor);

// draw a rotated rect
drawRotatedRect(startX, startY, rectW, rectH, 24+180, boxColor);
drawRotatedRect(startX, startY, rectW, rectH, -24+180, boxColor);

 
// 座標 (右下原点)
var origin = { x: startX+rectW, y: startY+rectH };

// RectA
var rectA_pointA = origin;                                       // 右下 : 0      , 0
var rectA_pointB = { x: origin.x - rectW, y: origin.y         }; // 左下 : -rectW , 0
var rectA_pointC = { x: origin.x - rectW, y: origin.y - rectH }; // 左上 : -rectW , -rectH
var rectA_pointD = { x: origin.x        , y: origin.y - rectH }; // 右上 : 0      , -rectW


// RectB
var rectB_pointA = origin;                                       // 右下
var rectB_pointB = rotateVector( rectA_pointB.x, rectA_pointB.y, degreetoRadian(24), origin ); // 左下
var rectB_pointC = rotateVector( rectA_pointC.x, rectA_pointC.y, degreetoRadian(24), origin ); // 左上
var rectB_pointD = rotateVector( rectA_pointD.x, rectA_pointD.y, degreetoRadian(24), origin ); // 右上


// RectC
var rectC_pointA = origin;                                       // 右下
var rectC_pointB = rotateVector( rectA_pointB.x, rectA_pointB.y, degreetoRadian(-24), origin ); // 左下
var rectC_pointC = rotateVector( rectA_pointC.x, rectA_pointC.y, degreetoRadian(-24), origin ); // 左上
var rectC_pointD = rotateVector( rectA_pointD.x, rectA_pointD.y, degreetoRadian(-24), origin ); // 右上


// Intersection
var intersection1 = intersectionPoint (rectB_pointA, rectB_pointB, rectC_pointC, rectC_pointD);
var intersection2 = intersectionPoint (rectA_pointB, rectA_pointC, rectC_pointC, rectC_pointD);
var intersection3 = intersectionPoint (rectA_pointC, rectA_pointD, rectB_pointB, rectB_pointC);


var color1 = chroma.blend(boxColor, boxColor, 'multiply');
var color2 = chroma.blend(color1, boxColor, 'multiply');

// 加法混色 1-1
ctx.beginPath();
ctx.moveTo(origin.x, origin.y);
ctx.lineTo(rectA_pointD.x, rectA_pointD.y);
ctx.lineTo(intersection3.x, intersection3.y);
ctx.lineTo(rectB_pointB.x, rectB_pointB.y);
ctx.lineTo(intersection1.x, intersection1.y);
ctx.lineTo(rectC_pointD.x, rectC_pointD.y);
ctx.closePath();
ctx.fillStyle = color1;
ctx.fill();

// 加法混色 1-2
ctx.beginPath();
ctx.moveTo(origin.x, origin.y);
ctx.lineTo(rectA_pointB.x, rectA_pointB.y);
ctx.lineTo(intersection2.x, intersection2.y);
ctx.lineTo(intersection1.x, intersection1.y);
ctx.closePath();
ctx.fillStyle = color1;
ctx.fill();

// 加法混色 2
ctx.beginPath();
ctx.moveTo(origin.x, origin.y);
ctx.lineTo(intersection1.x, intersection1.y);
ctx.lineTo(rectC_pointD.x, rectC_pointD.y);
ctx.closePath();
ctx.fillStyle = color2;
ctx.fill();
}




function subtractiveBox(color1,color2){

var canvas = document.getElementById("subtractive");

    var scale = 1.15;
    var width  = 880 * scale;
    var height = 660 * scale;

    var retina = true;

    var bgColor     = color1;
    var boxColor    = color2;

    var style = 'background-color:' + bgColor + ';\
                 position:absolute;\
                 left: 50%;\
                 top: 50%;';
        style += 'transform: translate(-50%, -50%) ';
        style += retina ? 'scale(0.5);' : ';';

    canvas.setAttribute("width", width+'px');
    canvas.setAttribute("height", height+'px');
    canvas.setAttribute("style", style);    

var ctx = canvas.getContext("2d");

var rectW = 440 * scale;
var rectH = 235 * scale;

var startX = ( width - rectW ) / 2;
var startY = ( height - rectH ) / 2;


////////
// Tools
//
function drawRect(x, y, width, height, color){
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawRotatedRect(x, y, width, height, degrees, color) {
    // first save the untranslated/unrotated context
    ctx.save();
    ctx.beginPath();
    // move the rotation point to the center of the rect
    ctx.translate(x+width, y+height);
    // rotate the rect
    ctx.rotate(degrees * Math.PI / 180);
    // draw the rect on the transformed context
    // Note: after transforming [0,0] is visually [x,y]
    //       so the rect needs to be offset accordingly when drawn
    ctx.rect(0, 0, rectW, rectH);
    ctx.fillStyle = color;
    ctx.fill();
    // restore the context to its untranslated/unrotated state
    ctx.restore();
}
function drawDot(x,y,color){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, 3, 0, Math.PI*2, false);
    ctx.fill();
}
function drawLine(pointA,pointB,color){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(pointA.x,pointA.y);
    ctx.lineTo(pointB.x,pointB.y);
    ctx.stroke();
}
function degreetoRadian(degree) {
    var radian = degree * ( Math.PI / 180 ) ;
    return radian;
}
// ベクトルを回転する
function rotateVector(x,y,radian,origin=false){

    const coordinate = {x:0,y:0};
    var x = origin == false ? x : x - origin.x;
    var y = origin == false ? y : y - origin.y;
    
    coordinate.x = ( x * Math.cos(radian) ) - ( y * Math.sin(radian) );
    coordinate.y = ( x * Math.sin(radian) ) + ( y * Math.cos(radian) );

    if( origin != false ) {
        coordinate.x += origin.x;
        coordinate.y += origin.y;
    }

    return coordinate;
    // 参考：http://keisan.casio.jp/exec/system/1496883774
}
// 交点を求める
function intersectionPoint (pointA, pointB, pointC, pointD) {
    // if the lines intersect, the result contains the x and y of the intersection (treating the lines as infinite) and booleans for whether line segment 1 or line segment 2 contain the point
    var denominator, a, b, numerator1, numerator2, result = {
        x: null,
        y: null,
        onLine1: false,
        onLine2: false
    };
    denominator = ((pointD.y - pointC.y) * (pointB.x - pointA.x)) - ((pointD.x - pointC.x) * (pointB.y - pointA.y));
    if (denominator == 0) {
        return result;
    }
    a = pointA.y - pointC.y;
    b = pointA.x - pointC.x;
    numerator1 = ((pointD.x - pointC.x) * a) - ((pointD.y - pointC.y) * b);
    numerator2 = ((pointB.x - pointA.x) * a) - ((pointB.y - pointA.y) * b);
    a = numerator1 / denominator;
    b = numerator2 / denominator;

    result.x = pointA.x + (a * (pointB.x - pointA.x));
    result.y = pointA.y + (a * (pointB.y - pointA.y));

    if (a > 0 && a < 1) {
        result.onLine1 = true;
    }
    if (b > 0 && b < 1) {
        result.onLine2 = true;
    }

    return result;
};


// draw rect
drawRect(startX, startY, rectW, rectH, boxColor);

// draw a rotated rect
drawRotatedRect(startX, startY, rectW, rectH, 24+180, boxColor);
drawRotatedRect(startX, startY, rectW, rectH, -24+180, boxColor);

 
// 座標 (右下原点)
var origin = { x: startX+rectW, y: startY+rectH };

// RectA
var rectA_pointA = origin;                                       // 右下 : 0      , 0
var rectA_pointB = { x: origin.x - rectW, y: origin.y         }; // 左下 : -rectW , 0
var rectA_pointC = { x: origin.x - rectW, y: origin.y - rectH }; // 左上 : -rectW , -rectH
var rectA_pointD = { x: origin.x        , y: origin.y - rectH }; // 右上 : 0      , -rectW


// RectB
var rectB_pointA = origin;                                       // 右下
var rectB_pointB = rotateVector( rectA_pointB.x, rectA_pointB.y, degreetoRadian(24), origin ); // 左下
var rectB_pointC = rotateVector( rectA_pointC.x, rectA_pointC.y, degreetoRadian(24), origin ); // 左上
var rectB_pointD = rotateVector( rectA_pointD.x, rectA_pointD.y, degreetoRadian(24), origin ); // 右上


// RectC
var rectC_pointA = origin;                                       // 右下
var rectC_pointB = rotateVector( rectA_pointB.x, rectA_pointB.y, degreetoRadian(-24), origin ); // 左下
var rectC_pointC = rotateVector( rectA_pointC.x, rectA_pointC.y, degreetoRadian(-24), origin ); // 左上
var rectC_pointD = rotateVector( rectA_pointD.x, rectA_pointD.y, degreetoRadian(-24), origin ); // 右上


// Intersection
var intersection1 = intersectionPoint (rectB_pointA, rectB_pointB, rectC_pointC, rectC_pointD);
var intersection2 = intersectionPoint (rectA_pointB, rectA_pointC, rectC_pointC, rectC_pointD);
var intersection3 = intersectionPoint (rectA_pointC, rectA_pointD, rectB_pointB, rectB_pointC);


var color1 = chroma.blend(boxColor, boxColor, 'screen');
var color2 = chroma.blend(color1, boxColor, 'screen');

// 加法混色 1-1
ctx.beginPath();
ctx.moveTo(origin.x, origin.y);
ctx.lineTo(rectA_pointD.x, rectA_pointD.y);
ctx.lineTo(intersection3.x, intersection3.y);
ctx.lineTo(rectB_pointB.x, rectB_pointB.y);
ctx.lineTo(intersection1.x, intersection1.y);
ctx.lineTo(rectC_pointD.x, rectC_pointD.y);
ctx.closePath();
ctx.fillStyle = color1;
ctx.fill();

// 加法混色 1-2
ctx.beginPath();
ctx.moveTo(origin.x, origin.y);
ctx.lineTo(rectA_pointB.x, rectA_pointB.y);
ctx.lineTo(intersection2.x, intersection2.y);
ctx.lineTo(intersection1.x, intersection1.y);
ctx.closePath();
ctx.fillStyle = color1;
ctx.fill();

// 加法混色 2
ctx.beginPath();
ctx.moveTo(origin.x, origin.y);
ctx.lineTo(intersection1.x, intersection1.y);
ctx.lineTo(rectC_pointD.x, rectC_pointD.y);
ctx.closePath();
ctx.fillStyle = color2;
ctx.fill();
}