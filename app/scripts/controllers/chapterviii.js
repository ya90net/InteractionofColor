'use strict';

/**
 * @ngdoc function
 * @name interactionofColorApp.controller:ChapterviiiCtrl
 * @description
 * # ChapterviiiCtrl
 * Controller of the interactionofColorApp
 */
angular.module('interactionofColorApp')
  .controller('ChapterviiiCtrl', function ($scope, ColorPickerService) {

	////
	// make color pickers

	// plate1
	$scope.plate1 = {
		color1 : ColorPickerService.makeColorPicker("#ff0000"),
		color2 : ColorPickerService.makeColorPicker("#000000"),
		color3 : ColorPickerService.makeColorPicker("#ffffff"),
	};

	// plate2
	$scope.plate2 = {
		color1 : ColorPickerService.makeColorPicker("#f6e213"),
		color2 : ColorPickerService.makeColorPicker("#ffffff"),
		color3 : ColorPickerService.makeColorPicker("#000000"),
	};

  });
