'use strict';

/**
 * @ngdoc function
 * @name interactionofColorApp.controller:ChapterxiiCtrl
 * @description
 * # ChapterxiiCtrl
 * Controller of the interactionofColorApp
 */
angular.module('interactionofColorApp')
  .controller('ChapterxiiCtrl', function ($scope, ColorPickerService) {

	////
	// make color pickers


	// plate1
	$scope.plate1 = {
		color1 : ColorPickerService.makeColorPicker("#185957"),
		color2 : ColorPickerService.makeColorPicker("#82be64"),
		color3 : ColorPickerService.makeColorPicker("#ffffff"),
		color4 : ColorPickerService.makeColorPicker("#6b595b"),
	};

	$scope.circles1 = [];
	$scope.circles2 = [];
	$scope.circles3 = [];	

	for (var i = 0; i < 80; i++) {
		var remainder = i % 8;
		if ( remainder == 0 || remainder == 1 ) {
			decideInnerColor(i, 1, 3, 1);
		} else if ( remainder == 2 || remainder == 3 ) {
			decideInnerColor(i, 4, 2, 4);
		} else if ( remainder == 4 || remainder == 5 ) {
			decideInnerColor(i, 2, 4, 2);
		} else if ( remainder == 6 || remainder == 7 ) {
			decideInnerColor(i, 3, 1, 3);
		}
	}	

	function decideInnerColor(i, colorNumber1, colorNumber2, colorNumber3) {
		$scope.circles1[i] = colorNumber1;	
		$scope.circles2[i] = colorNumber2;
		$scope.circles3[i] = colorNumber3;
	}

  });
