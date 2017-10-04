'use strict';

/**
 * @ngdoc function
 * @name interactionofColorApp.controller:ChapterviCtrl
 * @description
 * # ChapterviCtrl
 * Controller of the interactionofColorApp
 */
angular.module('interactionofColorApp')
  .controller('ChapterviCtrl', function ($scope, ColorPickerService) {

	////
	// make color pickers

	// plate1
	$scope.plate1 = {
		color1 : ColorPickerService.makeColorPicker("#fbea07"),
		color2 : ColorPickerService.makeColorPicker("#a2b7a3"),
		color3 : ColorPickerService.makeColorPicker("#a0a0a0"),
	};

	// plate2
	$scope.plate2 = {
		color1 : ColorPickerService.makeColorPicker("#601f35"),
		color2 : ColorPickerService.makeColorPicker("#6c1c5f"),
		color3 : ColorPickerService.makeColorPicker("#ab39c2"),
	};

	// plate3
	$scope.plate3 = {
		color1 : ColorPickerService.makeColorPicker("#484848"),
		color2 : ColorPickerService.makeColorPicker("#99775a"),
		color3 : ColorPickerService.makeColorPicker("#ffa059"),
	};

  });
