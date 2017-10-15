'use strict';

/**
 * @ngdoc function
 * @name interactionofColorApp.controller:ChapterxiiiCtrl
 * @description
 * # ChapterxiiiCtrl
 * Controller of the interactionofColorApp
 */
angular.module('interactionofColorApp')
  .controller('ChapterxiiiCtrl', function ($scope, ColorPickerService) {

	////
	// make color pickers


	// plate1
	$scope.plate1 = {
		color1 : ColorPickerService.makeColorPicker("#000000"),
		color2 : ColorPickerService.makeColorPicker("#ffffff"),
		color3 : ColorPickerService.makeColorPicker("#d01212"),
	};

	// plate2
	$scope.plate2 = {
		color1 : ColorPickerService.makeColorPicker("#111111"),
		color2 : ColorPickerService.makeColorPicker("#972b2b"),
		color3 : ColorPickerService.makeColorPicker("#d7568d"),
		color4 : ColorPickerService.makeColorPicker("#a98f9e"),
	};

	// plate3
	$scope.plate3 = {
		color1 : ColorPickerService.makeColorPicker("#ffffff"),
		color2 : ColorPickerService.makeColorPicker("#972b2b"),
		color3 : ColorPickerService.makeColorPicker("#d7568d"),
		color4 : ColorPickerService.makeColorPicker("#a98f9e"),
	};

	// plate4
	$scope.plate4 = {
		color1 : ColorPickerService.makeColorPicker("#5a4242"),
		color2 : ColorPickerService.makeColorPicker("#f2a0c9"),
		color3 : ColorPickerService.makeColorPicker("#ffffff"),
		color4 : ColorPickerService.makeColorPicker("#000000"),
		color5 : ColorPickerService.makeColorPicker("#d01212"),
	};


  });
