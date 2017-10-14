'use strict';

/**
 * @ngdoc function
 * @name interactionofColorApp.controller:ChapterxiCtrl
 * @description
 * # ChapterxiCtrl
 * Controller of the interactionofColorApp
 */
angular.module('interactionofColorApp')
  .controller('ChapterxiCtrl', function ($scope, ColorPickerService) {

	////
	// make color pickers

	// plate1
	$scope.plate1 = {
		color1 : ColorPickerService.makeColorPicker("#9f001c"),
		color2 : ColorPickerService.makeColorPicker("#ffff9e"),
		color3 : ColorPickerService.makeColorPicker("#a2888c"),
	};

	$scope.mixed = {};
	colorMix1();

	$scope.$watch(function() {
    return {
        'color1': $scope.plate1.color1.color,
        'color2': $scope.plate1.color2.color,
	    };
	} , function() {
	    colorMix1();
	}, true);

	function colorMix1() {
		for (var i = 0; i < 9; i++) {
			$scope.mixed[i] = chroma.mix($scope.plate1.color2.color, $scope.plate1.color1.color, 0.8 * ( (i+1)/10) );
		}	
	}



	// plate2
	$scope.plate2 = {
		color1 : ColorPickerService.makeColorPicker("#200189"),
		color2 : ColorPickerService.makeColorPicker("#1d8829"),
	};

	$scope.mixed2 = {};
	colorMix2();

	$scope.$watch(function() {
    return {
        'color2_1': $scope.plate2.color1.color,
        'color2_2': $scope.plate2.color2.color,
	    };
	} , function() {
	    colorMix2();
	}, true);	

	function colorMix2() {
		for (var i = 0; i < 3; i++) {
			$scope.mixed2[i] = chroma.mix($scope.plate2.color1.color, $scope.plate2.color2.color, 0.8 * ( (i+1)/3) );
		}	
	}



	// plate3
	$scope.plate3 = {
		color1 : ColorPickerService.makeColorPicker("#322922"),
		color2 : ColorPickerService.makeColorPicker("#eae28f"),
		color3 : ColorPickerService.makeColorPicker("#44342e"),
	};

	$scope.mixed3 = {};
	colorMix3();

	$scope.$watch(function() {
    return {
        'color3_1': $scope.plate3.color1.color,
        'color3_2': $scope.plate3.color2.color,
	    };
	} , function() {
	    colorMix3();
	}, true);

	function colorMix3() {
		for (var i = 0; i < 3; i++) {
			$scope.mixed3[i] = chroma.mix($scope.plate3.color2.color, $scope.plate3.color1.color, 1 * ( (i+1)/4) );
		}	
	}


	// plate4
	$scope.plate4 = {
		color1 : ColorPickerService.makeColorPicker("#e40e0e"),
		color2 : ColorPickerService.makeColorPicker("#6612a6"),
		color3 : ColorPickerService.makeColorPicker("#006f05"),
		color4 : ColorPickerService.makeColorPicker("#f5e50f"),
	};

	$scope.mixed4_1 = {};
	$scope.mixed4_2 = {};
	$scope.mixed4_3 = {};
	colorMix4();

	$scope.$watch(function() {
    return {
        'color4_1': $scope.plate4.color1.color,
        'color4_2': $scope.plate4.color2.color,
        'color4_3': $scope.plate4.color3.color,
        'color4_4': $scope.plate4.color4.color,
	    };
	} , function() {
	    colorMix4();
	}, true);	

	function colorMix4() {
		$scope.mixed4_1[1] = chroma.mix($scope.plate4.color1.color, $scope.plate4.color4.color, 1 * (1/4) );
		$scope.mixed4_1[2] = chroma.mix($scope.plate4.color2.color, $scope.plate4.color4.color, 1 * (1/4) );
		$scope.mixed4_1[3] = chroma.mix($scope.plate4.color3.color, $scope.plate4.color4.color, 1 * (1/4) );

		$scope.mixed4_2[1] = chroma.mix($scope.plate4.color1.color, $scope.plate4.color4.color, 1 * (2/4) );
		$scope.mixed4_2[2] = chroma.mix($scope.plate4.color2.color, $scope.plate4.color4.color, 1 * (2/4) );
		$scope.mixed4_2[3] = chroma.mix($scope.plate4.color3.color, $scope.plate4.color4.color, 1 * (2/4) );

		$scope.mixed4_3[1] = chroma.mix($scope.plate4.color1.color, $scope.plate4.color4.color, 1 * (3/4) );
		$scope.mixed4_3[2] = chroma.mix($scope.plate4.color2.color, $scope.plate4.color4.color, 1 * (3/4) );
		$scope.mixed4_3[3] = chroma.mix($scope.plate4.color3.color, $scope.plate4.color4.color, 1 * (3/4) );
	}


  });
