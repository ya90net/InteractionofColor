'use strict';

/**
 * @ngdoc function
 * @name interactionofColorApp.controller:ChaptervCtrl
 * @description
 * # ChaptervCtrl
 * Controller of the interactionofColorApp
 */
angular.module('interactionofColorApp')
  .controller('ChaptervCtrl', function ($scope, ColorPickerService) {

	////
	// make color pickers

	// plate1
	$scope.plate1 = {
		color1 : ColorPickerService.makeColorPicker("#238aec"),
		color2 : ColorPickerService.makeColorPicker("#3192ed"),
	};

	// plate2
	$scope.plate2 = {
		color1 : ColorPickerService.makeColorPicker("#232323"),
		color2 : ColorPickerService.makeColorPicker("#7f7f7f"),
		color3 : ColorPickerService.makeColorPicker("#cecece"),
	};

	// plate3
	$scope.plate3 = {
		color1 : ColorPickerService.makeColorPicker("#232323"),
		color2 : ColorPickerService.makeColorPicker("#7f7f7f"),
		color3 : ColorPickerService.makeColorPicker("#cecece"),
	};

	// plate4
	$scope.plate4 = {
		color1 : ColorPickerService.makeColorPicker("#658dcb"),
		color2 : ColorPickerService.makeColorPicker("#060658"),
		color3 : ColorPickerService.makeColorPicker("#15088f"),
		color4 : ColorPickerService.makeColorPicker("#0740de"),
		color5 : ColorPickerService.makeColorPicker("#0026d7"),
		color6 : ColorPickerService.makeColorPicker("#007dd7"),
		color7 : ColorPickerService.makeColorPicker("#1e6c87"),
		color8 : ColorPickerService.makeColorPicker("#001c6b"),
	};

	// plate5
	$scope.plate5 = {
		color1 : ColorPickerService.makeColorPicker("#9e0101"),
		color2 : ColorPickerService.makeColorPicker("#d11414"),
		color3 : ColorPickerService.makeColorPicker("#a00d0d"),
		color4 : ColorPickerService.makeColorPicker("#da5959"),
		color5 : ColorPickerService.makeColorPicker("#ab1a1a"),
		color6 : ColorPickerService.makeColorPicker("#df0d37"),
		color7 : ColorPickerService.makeColorPicker("#e10318"),
		color8 : ColorPickerService.makeColorPicker("#df3847"),
	};

  });