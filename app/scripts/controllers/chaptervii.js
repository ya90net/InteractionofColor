'use strict';

/**
 * @ngdoc function
 * @name interactionofColorApp.controller:ChapterviiCtrl
 * @description
 * # ChapterviiCtrl
 * Controller of the interactionofColorApp
 */
angular.module('interactionofColorApp')
  .controller('ChapterviiCtrl', function ($scope, ColorPickerService) {

	////
	// make color pickers

	// plate1
	$scope.plate1 = {
		color1 : ColorPickerService.makeColorPicker("#00546d"),
		color2 : ColorPickerService.makeColorPicker("#065e52"),
		color3 : ColorPickerService.makeColorPicker("#8f6c36"),
		color4 : ColorPickerService.makeColorPicker("#c44b27"),
	};

	// plate2
	$scope.plate2 = {
		color1 : ColorPickerService.makeColorPicker("#045e5e"),
		color2 : ColorPickerService.makeColorPicker("#89733c"),
		color3 : ColorPickerService.makeColorPicker("#e1b963"),
		color4 : ColorPickerService.makeColorPicker("#f7f6ef"),
	};

	// plate3
	$scope.plate3 = {
		color1 : ColorPickerService.makeColorPicker("#9f1a20"),
		color2 : ColorPickerService.makeColorPicker("#a38c67"),
		color3 : ColorPickerService.makeColorPicker("#eed38c"),
		color4 : ColorPickerService.makeColorPicker("#fef5db"),
	};

	// plate4
	$scope.plate4 = {
		color1 : ColorPickerService.makeColorPicker("#1d1d1d"),
		color2 : ColorPickerService.makeColorPicker("#5d5f5d"),
		color3 : ColorPickerService.makeColorPicker("#c3ccc9"),
		color4 : ColorPickerService.makeColorPicker("#f9f9f9"),
	};

  });
