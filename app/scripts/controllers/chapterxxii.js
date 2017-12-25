'use strict';

/**
 * @ngdoc function
 * @name interactionofColorApp.controller:ChapterxviCtrl
 * @description
 * # ChapterxviCtrl
 * Controller of the interactionofColorApp
 */
angular.module('interactionofColorApp')
  .controller('ChapterxxiiCtrl', function ($scope, ColorPickerService) {

  	////
	// make color pickers


	// plate1
	$scope.plate1 = {
		color1 : ColorPickerService.makeColorPicker("#e93010"),
		color2 : ColorPickerService.makeColorPicker("#37b6fb")
	};


	// plate2
	$scope.plate2 = {
		color1 : ColorPickerService.makeColorPicker("#1b2d68"),
		color2 : ColorPickerService.makeColorPicker("#692333"),
		color3 : ColorPickerService.makeColorPicker("#1b7187")
	};


	// plate3
	$scope.plate3 = {
		color1 : ColorPickerService.makeColorPicker("#92bdac"),
		color2 : ColorPickerService.makeColorPicker("#b0e12b"),
		color3 : ColorPickerService.makeColorPicker("#f2a5f1")
	};


  });