var ioc = angular.module('InteractionofColor', ['ngMaterial', 'ngCookies', 'mdColorPicker'])

ioc.controller('Container', function($scope) {

	// IV
	// 1
	$scope.color1 = new Object();
	$scope.color2 = new Object();
	$scope.color3 = new Object();

	$scope.color1.color = "#e63225";
	$scope.color2.color = "#81ac55";
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


	// 2
	$scope.color4 = new Object();
	$scope.color5 = new Object();
	$scope.color6 = new Object();
	$scope.color7 = new Object();
	$scope.color8 = new Object();

	$scope.color4.color = "#104a4f";
	$scope.color5.color = "#210d64";
	$scope.color6.color = "#e5d424";
	$scope.color7.color = "#c36a05";
	$scope.color8.color = "#9a6709";

	$scope.color4.option = {
	    default: $scope.color4.color,
	    hasBackdrop : false,
	};
	$scope.color5.option = {
	    default: $scope.color5.color,
	    hasBackdrop : false,
	};
	$scope.color6.option = {
	    default: $scope.color6.color,
	    hasBackdrop : false,
	};
	$scope.color7.option = {
	    default: $scope.color7.color,
	    hasBackdrop : false,
	};
	$scope.color8.option = {
	    default: $scope.color7.color,
	    hasBackdrop : false,
	};


	// 3
	$scope.color9 = new Object();
	$scope.color10 = new Object();
	$scope.color11 = new Object();

	$scope.color9.color = "#8ed6ff";
	$scope.color10.color = "#6ddfb1";
	$scope.color11.color = "#efe93d";

	$scope.color9.option = {
	    default: $scope.color9.color,
	    hasBackdrop : false,
	};
	$scope.color10.option = {
	    default: $scope.color10.color,
	    hasBackdrop : false,
	};
	$scope.color11.option = {
	    default: $scope.color11.color,
	    hasBackdrop : false,
	};



	// 4
	$scope.color12 = new Object();
	$scope.color13 = new Object();
	$scope.color14 = new Object();
	$scope.color15 = new Object();
	$scope.color16 = new Object();

	$scope.color12.color = "#300b42";
	$scope.color13.color = "#000000";
	$scope.color14.color = "#e52626";
	$scope.color15.color = "#551d76";
	$scope.color16.color = "#451a67";

	$scope.color12.option = {
	    default: $scope.color12.color,
	    hasBackdrop : false,
	};
	$scope.color13.option = {
	    default: $scope.color13.color,
	    hasBackdrop : false,
	};
	$scope.color14.option = {
	    default: $scope.color14.color,
	    hasBackdrop : false,
	};
	$scope.color15.option = {
	    default: $scope.color15.color,
	    hasBackdrop : false,
	};
	$scope.color16.option = {
	    default: $scope.color16.color,
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


