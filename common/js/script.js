var ioc = angular.module('InteractionofColor', ['ngMaterial', 'ngCookies', 'mdColorPicker'])

ioc.controller('Main', function($scope) {

	$scope.color1 = new Object();
	$scope.color2 = new Object();
	$scope.color3 = new Object();

	$scope.color1.color = "#e63225";
	$scope.color2.color = "#26ADE4";
	$scope.color3.color = "#8CC445";

	$scope.color1.option = {
	    default: $scope.color1.color,
	    hasBackdrop : false
	};

	$scope.color2.option = {
	    default: $scope.color2.color,
	    hasBackdrop : false
	};

	$scope.color3.option = {
	    default: $scope.color3.color,
	    hasBackdrop : false
	};

});


// realtime color reflection
$(function(){
	$(document).on('click','.md-color-picker-preview',function(e){
	    $('.colorpicker.on').removeClass('on');

	    $(e.target).parents('.colorpicker').addClass('on');

	    // wait for build of colorpicker
	    console.log($('input.md-color-picker-preview-input').eq(0).val());
	    $('input.md-color-picker-preview-input').eq(0).change(function() {
		    var val = $(this).val();
		 	console.log(val);
		    // $('p').text(val);
		});
	    // $(document).on('change','.md-color-picker-preview-input',function(e){
	    // 	console.log('c');
	    // });
	});
});