'use strict';

/**
 * @ngdoc function
 * @name interactionofColorApp.controller:ChapterxviCtrl
 * @description
 * # ChapterxviCtrl
 * Controller of the interactionofColorApp
 */
angular.module('interactionofColorApp')
  .controller('ChapterxviiiCtrl', function ($scope, ColorPickerService) {

  	////
	// make color pickers


	// plate1
	$scope.plate1 = {
		color1 : ColorPickerService.makeColorPicker("#294232"),
		color2 : ColorPickerService.makeColorPicker("#ddb2c4"),
		color3 : ColorPickerService.makeColorPicker("#8ce2ba"),
		color4 : ColorPickerService.makeColorPicker("#328b61"),

		color5 : ColorPickerService.makeColorPicker("#2a2a2a"),
		color6 : ColorPickerService.makeColorPicker("#283123"),
		color7 : ColorPickerService.makeColorPicker("#183817"),
		color8 : ColorPickerService.makeColorPicker("#335416"),
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