var ioc = angular.module('InteractionofColor', ['ngMaterial', 'ngCookies', 'mdColorPicker'])

ioc.controller('Container', function($scope) {

	// IV
	$scope.color1 = new Object();
	$scope.color2 = new Object();
	$scope.color3 = new Object();

	$scope.color1.color = "#e63225";
	$scope.color2.color = "#8CC445";
	$scope.color3.color = "#26ADE4";

	$scope.color1.option = {
	    default: $scope.color1.color,
	    hasBackdrop : false,
	};

	$scope.color2.option = {
	    default: $scope.color2.color,
	    hasBackdrop : false,
	};

	$scope.color3.option = {
	    default: $scope.color3.color,
	    hasBackdrop : false,
	};




	// realtime color reflection
	$(function(){
		$(document).on('click','.md-color-picker-preview',function(e){
		    $('.colorpicker.on').removeClass('on');
		    $(e.target).parents('.colorpicker').addClass('on');
		    var val = $('.colorpicker.on .md-color-picker-input').val();
		    $('.colorpicker.on .md-color-picker-input').attr('data-cansel', val);
		});
	});

});


