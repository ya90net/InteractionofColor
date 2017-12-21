'use strict';

/**
 * @ngdoc function
 * @name interactionofColorApp.controller:ChapterxviCtrl
 * @description
 * # ChapterxviCtrl
 * Controller of the interactionofColorApp
 */
angular.module('interactionofColorApp')
  .controller('ChapterxxCtrl', function ($scope, ColorPickerService) {

  	////
	// make color pickers


	// plate1
	$scope.plate1 = {
		color1 : ColorPickerService.makeColorPicker("#caf50a"),
	};

	$scope.plate2 = {
		color1 : ColorPickerService.makeColorPicker("#651d16"),
	};


  });