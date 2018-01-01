'use strict';

/**
 * @ngdoc function
 * @name interactionofColorApp.controller:ChapterxivCtrl
 * @description
 * # ChapterxivCtrl
 * Controller of the interactionofColorApp
 */
angular.module('interactionofColorApp')
  .controller('ChapterxivCtrl', function ($scope, ColorPickerService) {

  	////
	// make color pickers


	// plate1
	$scope.plate1 = {
		color1 : ColorPickerService.makeColorPicker("#c54c76"),
		color2 : ColorPickerService.makeColorPicker("#de688b"),
		color3 : ColorPickerService.makeColorPicker("#1178a7"),
		color4 : ColorPickerService.makeColorPicker("#199fd6"),
		color5 : ColorPickerService.makeColorPicker("#eda6b8"),
		color6 : ColorPickerService.makeColorPicker("#da838c"),
		color7 : ColorPickerService.makeColorPicker("#4ac8df"),
		color8 : ColorPickerService.makeColorPicker("#45b1cc"),
	};

	// plate2
	$scope.plate2 = {
		color1 : ColorPickerService.makeColorPicker("#d93c38"),
		color2 : ColorPickerService.makeColorPicker("#b5352d"),
		color3 : ColorPickerService.makeColorPicker("#fc5f64"),
		color4 : ColorPickerService.makeColorPicker("#fc4f4e"),

		color5 : ColorPickerService.makeColorPicker("#267ca5"),
		color6 : ColorPickerService.makeColorPicker("#1a72a1"),
			color7 : ColorPickerService.makeColorPicker("#544a49"),
			color8 : ColorPickerService.makeColorPicker("#503e3c"),
				color9 : ColorPickerService.makeColorPicker("#fc6d40"),
				color10 : ColorPickerService.makeColorPicker("#fc6640"),
		color11 : ColorPickerService.makeColorPicker("#67abc7"),
		color12 : ColorPickerService.makeColorPicker("#4f9ec0"),
			color13 : ColorPickerService.makeColorPicker("#887378"),
			color14 : ColorPickerService.makeColorPicker("#896264"),
				color15 : ColorPickerService.makeColorPicker("#fc9458"),
				color16 : ColorPickerService.makeColorPicker("#fc8651"),
	};

	// plate3
	$scope.plate3 = {

		color0 : ColorPickerService.makeColorPicker("#b8bfb3"),

		color1 : ColorPickerService.makeColorPicker("#d8bd47"),
		color2 : ColorPickerService.makeColorPicker("#51063d"),
			color3 : ColorPickerService.makeColorPicker("#e8af07"),
			color4 : ColorPickerService.makeColorPicker("#7f4c7f"),
		color5 : ColorPickerService.makeColorPicker("#e3cb72"),
		color6 : ColorPickerService.makeColorPicker("#5b744d"),
			color7 : ColorPickerService.makeColorPicker("#f4abca"),
			color8 : ColorPickerService.makeColorPicker("#b96ba5"),
	};


  });
