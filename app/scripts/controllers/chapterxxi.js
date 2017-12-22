'use strict';

/**
 * @ngdoc function
 * @name interactionofColorApp.controller:ChapterxviCtrl
 * @description
 * # ChapterxviCtrl
 * Controller of the interactionofColorApp
 */
angular.module('interactionofColorApp')
  .controller('ChapterxxiCtrl', function ($scope, ColorPickerService) {

  	////
	// make color pickers


	// plate1
	$scope.plate1 = {
		color1 : ColorPickerService.makeColorPicker("#3c0a07"),
		color2 : ColorPickerService.makeColorPicker("#1246a7"),
		color3 : ColorPickerService.makeColorPicker("#1f34a1"),
		color4 : ColorPickerService.makeColorPicker("#64303c"),
		color5 : ColorPickerService.makeColorPicker("#6e211c"),
		color6 : ColorPickerService.makeColorPicker("#2e506e"),
		color7 : ColorPickerService.makeColorPicker("#253d6d"),
		color8 : ColorPickerService.makeColorPicker("#612622"),
		color9 : ColorPickerService.makeColorPicker("#713e6d"),
		color10 : ColorPickerService.makeColorPicker("#52a788"),
		color11 : ColorPickerService.makeColorPicker("#75d5eb"),
		color12 : ColorPickerService.makeColorPicker("#efa5d9")
	};


  });