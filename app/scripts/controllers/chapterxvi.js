'use strict';

/**
 * @ngdoc function
 * @name interactionofColorApp.controller:ChapterxviCtrl
 * @description
 * # ChapterxviCtrl
 * Controller of the interactionofColorApp
 */
angular.module('interactionofColorApp')
  .controller('ChapterxviCtrl', function ($scope, ColorPickerService) {

  	////
	// make color pickers


	// plate1
	$scope.plate1 = {
		color1 : ColorPickerService.makeColorPicker("#e778c3"),
		color2 : ColorPickerService.makeColorPicker("#66ccb9"),
		color3 : ColorPickerService.makeColorPicker("#bd973f"),
		color4 : ColorPickerService.makeColorPicker("#383838"),
	};

	// plate2
	$scope.plate2 = {
		color1 : ColorPickerService.makeColorPicker("#ca5131"),
		color2 : ColorPickerService.makeColorPicker("#336c46"),
		color3 : ColorPickerService.makeColorPicker("#f3aed0"),
		color4 : ColorPickerService.makeColorPicker("#bbc9bb"),
	};

	// plate3
	$scope.plate3 = {
		color1 : ColorPickerService.makeColorPicker("#ab905a"),
		color2 : ColorPickerService.makeColorPicker("#908e8f"),

		color3 : ColorPickerService.makeColorPicker("#145234"),
		color4 : ColorPickerService.makeColorPicker("#3da779"),
		color5 : ColorPickerService.makeColorPicker("#dbb765"),
		color6 : ColorPickerService.makeColorPicker("#e93f15"),
	};

	// plate4
	$scope.plate4 = {
		color1 : ColorPickerService.makeColorPicker("#cdd9b6"),
		color2 : ColorPickerService.makeColorPicker("#bc8bd5"),
		color3 : ColorPickerService.makeColorPicker("#dd3636"),
		color4 : ColorPickerService.makeColorPicker("#114f09"),
	};

	

	// onLoad
	angular.element(document).ready(function () {
	    $(".plate4 .illustration > .color > .color").each(function(index, el) {
	    	var min = 0 ;
			var max = 20 ;
			var rand = Math.floor( Math.random() * (max + 1 - min) ) + min ;
	    	var left = rand - 10;
	    	var rotate = Math.floor(rand / 4 - 2.5);
			$(el).css({left: left + 'px', transform:'rotate(' + rotate + 'deg)'});
		});
	});

  });