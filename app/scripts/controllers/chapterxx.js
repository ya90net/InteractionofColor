'use strict';

/**
 * @ngdoc function
 * @name interactionofColorApp.controller:ChapterxviCtrl
 * @description
 * # ChapterxviCtrl
 * Controller of the interactionofColorApp
 */
angular.module('interactionofColorApp')
  .controller('ChapterxxCtrl', function ($scope, ColorPickerService) {

  	////
	// make color pickers


	// plate1
	$scope.plate1 = {
		color1 : ColorPickerService.makeColorPicker("#caf50a"),
	};

	$scope.range = function(n) {
	    var arr = [];
	    for (var i=0; i<n; ++i) arr.push(i);
	    return arr;
	};

	$scope.getColor = function(){
		var num = $scope.getRandomInt(5, 8);
		return 'plate1.color' + num + '.color';
	};

	$scope.getRandomInt = function(min, max){
		return Math.floor( Math.random() * (max + 1 - min) ) + min ;
	}

	$scope.count = 300;
	$scope.$watch('count', function () {
		for (var a = [], i = 0; i < $scope.count; i++) {
	      a.push({ attr: $scope.getColor() });
	    }
	    $scope.Colors = a;
	});

  });