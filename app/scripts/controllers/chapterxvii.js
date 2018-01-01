'use strict';

/**
 * @ngdoc function
 * @name interactionofColorApp.controller:ChapterxviCtrl
 * @description
 * # ChapterxviCtrl
 * Controller of the interactionofColorApp
 */
angular.module('interactionofColorApp')
  .controller('ChapterxviiCtrl', function ($scope, ColorPickerService) {

  	////
	// make color pickers


	// plate1
	$scope.plate1 = {
		color1 : ColorPickerService.makeColorPicker("#d73b23"),
		color2 : ColorPickerService.makeColorPicker("#361d0d"),
		color3 : ColorPickerService.makeColorPicker("#f1bf10"),
		color4 : ColorPickerService.makeColorPicker("#224008"),

		color5 : ColorPickerService.makeColorPicker("#f45538"),
		color6 : ColorPickerService.makeColorPicker("#4b3020"),
		color7 : ColorPickerService.makeColorPicker("#ffd836"),
		color8 : ColorPickerService.makeColorPicker("#37551d"),
	};

	// plate2
	$scope.plate2 = {
		color1 : ColorPickerService.makeColorPicker("#f45538"),
		color2 : ColorPickerService.makeColorPicker("#4b3020"),
		color3 : ColorPickerService.makeColorPicker("#ffd836"),
		color4 : ColorPickerService.makeColorPicker("#37551d"),

		color5 : ColorPickerService.makeColorPicker("#d73b23"),
		color6 : ColorPickerService.makeColorPicker("#361d0d"),
		color7 : ColorPickerService.makeColorPicker("#f1bf10"),
		color8 : ColorPickerService.makeColorPicker("#224008"),
	};


  });