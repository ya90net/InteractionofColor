'use strict';

/**
 * @ngdoc function
 * @name interactionofColorApp.controller:ChapterivCtrl
 * @description
 * # ChapterivCtrl
 * Controller of the interactionofColorApp
 */
angular.module('interactionofColorApp')
  .controller('ChapterivCtrl', function ($scope, ColorPickerService) {

	////
	// make color pickers

	// plate1
	$scope.plate1 = {
		color1 : ColorPickerService.makeColorPicker("#e63225"),
		color2 : ColorPickerService.makeColorPicker("#81ac55"),
		color3 : ColorPickerService.makeColorPicker("#26ADE4"),
	};
	
	// plate2
	$scope.plate2 = {
		color1 : ColorPickerService.makeColorPicker("#104a4f"),
		color2 : ColorPickerService.makeColorPicker("#210d64"),
		color3 : ColorPickerService.makeColorPicker("#e5d424"),
		color4 : ColorPickerService.makeColorPicker("#c36a05"),
		color5 : ColorPickerService.makeColorPicker("#9a6709"),
	};

	// plate3
	$scope.plate3 = {
		color1 : ColorPickerService.makeColorPicker("#8ed6ff"),
		color2 : ColorPickerService.makeColorPicker("#6ddfb1"),
		color3 : ColorPickerService.makeColorPicker("#efe93d"),
	};

	// plate4
	$scope.plate4 = {
		color1 : ColorPickerService.makeColorPicker("#300b42"),
		color2 : ColorPickerService.makeColorPicker("#000000"),
		color3 : ColorPickerService.makeColorPicker("#e52626"),
		color4 : ColorPickerService.makeColorPicker("#551d76"),
		color5 : ColorPickerService.makeColorPicker("#451a67"),
	};

  });
