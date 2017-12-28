'use strict';

/**
 * @ngdoc function
 * @name interactionofColorApp.controller:ChapterxviCtrl
 * @description
 * # ChapterxviCtrl
 * Controller of the interactionofColorApp
 */
angular.module('interactionofColorApp')
  .controller('ChapterxxivCtrl', function ($scope, ColorPickerService) {

  	////
	// make color pickers


	// plate1
	$scope.plate1 = {
		color1 : ColorPickerService.makeColorPicker("#be2a29"),
		color2 : ColorPickerService.makeColorPicker("#e65a21"),
		color3 : ColorPickerService.makeColorPicker("#895260"),
		color4 : ColorPickerService.makeColorPicker("#4d4382"),
		color5 : ColorPickerService.makeColorPicker("#f8ca41"),
		color6 : ColorPickerService.makeColorPicker("#ad9f4f"),
		color7 : ColorPickerService.makeColorPicker("#2b6445"),
		color8 : ColorPickerService.makeColorPicker("#4a5649"),
		color9 : ColorPickerService.makeColorPicker("#2a45a8")
	};


  });