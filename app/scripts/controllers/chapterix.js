'use strict';

/**
 * @ngdoc function
 * @name interactionofColorApp.controller:ChapterixCtrl
 * @description
 * # ChapterixCtrl
 * Controller of the interactionofColorApp
 */
angular.module('interactionofColorApp')
  .controller('ChapterixCtrl', function ($scope, ColorPickerService) {

	////
	// make color pickers

	// plate1
	$scope.plate1 = {
		color1 : ColorPickerService.makeColorPicker("#0000ff"),
		color2 : ColorPickerService.makeColorPicker("#005f0f"),
		color3 : ColorPickerService.makeColorPicker("#ffee00"),
	};

	// plate2
	$scope.plate2 = {
		color1 : ColorPickerService.makeColorPicker("#d2bf79"),
		color2 : ColorPickerService.makeColorPicker("#ac482f"),
		color3 : ColorPickerService.makeColorPicker("#ea3c04"),
	};

	// plate3
	$scope.plate3 = {
		color1 : ColorPickerService.makeColorPicker("#d4c696"),
		color2 : ColorPickerService.makeColorPicker("#382106"),
		color3 : ColorPickerService.makeColorPicker("rgba(194, 143, 64, 0.72)"),
		color4 : ColorPickerService.makeColorPicker("#1b0979"),
	};

	// plate4
	$scope.plate4 = {
		color1 : ColorPickerService.makeColorPicker("#d9b081"),
		color2 : ColorPickerService.makeColorPicker("rgba(255, 170, 0, 0.76)"),
	};	

  });
