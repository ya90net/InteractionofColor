'use strict';

/**
 * @ngdoc function
 * @name interactionofColorApp.controller:ChapterxvCtrl
 * @description
 * # ChapterxvCtrl
 * Controller of the interactionofColorApp
 */
angular.module('interactionofColorApp')
  .controller('ChapterxvCtrl', function ($scope, ColorPickerService) {

  	////
	// make color pickers


	// plate1
	$scope.plate1 = {
		color1 : ColorPickerService.makeColorPicker("#fafafa"),
		color2 : ColorPickerService.makeColorPicker("#837830"),
		color3 : ColorPickerService.makeColorPicker("#c7a522"),
		color4 : ColorPickerService.makeColorPicker("#f9f500"),
	};

	// plate2
	$scope.plate2 = {
		color1 : ColorPickerService.makeColorPicker("#fafafa"),
		color2 : ColorPickerService.makeColorPicker("#ba425e"),
		color3 : ColorPickerService.makeColorPicker("#333d53"),
		color4 : ColorPickerService.makeColorPicker("#388131"),
	};

	// plate3
	$scope.plate3 = {
		color0 : ColorPickerService.makeColorPicker("#131313"),
		color1 : ColorPickerService.makeColorPicker("#f05497"),
		color2 : ColorPickerService.makeColorPicker("#c0634f"),
		color3 : ColorPickerService.makeColorPicker("#81552c"),
	};

	// plate4
	$scope.plate4 = {
		color1 : ColorPickerService.makeColorPicker("#ff9696"),
		color2 : ColorPickerService.makeColorPicker("#f96868"),
		color3 : ColorPickerService.makeColorPicker("#f23939"),
		color4 : ColorPickerService.makeColorPicker("#e93030"),
		color5 : ColorPickerService.makeColorPicker("#ba2323"),
	};

  });