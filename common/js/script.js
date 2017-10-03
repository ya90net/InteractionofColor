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


	// V
	// 1
	$scope.color2_1 = new Object();
	$scope.color2_2 = new Object();

	$scope.color2_1.color = "#238aec";
	$scope.color2_2.color = "#3192ed";

	$scope.color2_1.option = {
	    default: $scope.color1.color,
	    hasBackdrop : false,
	};

	$scope.color2_2.option = {
	    default: $scope.color2.color,
	    hasBackdrop : false,
	};

	// 2
	$scope.color2_3 = new Object();
	$scope.color2_4 = new Object();
	$scope.color2_5 = new Object();

	$scope.color2_3.color = "#232323";
	$scope.color2_4.color = "#7f7f7f";
	$scope.color2_5.color = "#cecece";

	$scope.color2_3.option = {
	    default: $scope.color2_3.color,
	    hasBackdrop : false,
	};
	$scope.color2_4.option = {
	    default: $scope.color2_4.color,
	    hasBackdrop : false,
	};
	$scope.color2_5.option = {
	    default: $scope.color2_5.color,
	    hasBackdrop : false,
	};

	// 3
	$scope.color2_6 = new Object();
	$scope.color2_7 = new Object();
	$scope.color2_8 = new Object();

	$scope.color2_6.color = "#232323";
	$scope.color2_7.color = "#7f7f7f";
	$scope.color2_8.color = "#cecece";

	$scope.color2_6.option = {
	    default: $scope.color2_6.color,
	    hasBackdrop : false,
	};
	$scope.color2_7.option = {
	    default: $scope.color2_7.color,
	    hasBackdrop : false,
	};
	$scope.color2_8.option = {
	    default: $scope.color2_8.color,
	    hasBackdrop : false,
	};

	// 4
	$scope.color2_9 = new Object();
	$scope.color2_10 = new Object();
	$scope.color2_11 = new Object();
	$scope.color2_12 = new Object();
	$scope.color2_13 = new Object();
	$scope.color2_14 = new Object();
	$scope.color2_15 = new Object();
	$scope.color2_16 = new Object();

	$scope.color2_9.color = "#658dcb";
	$scope.color2_10.color = "#060658";
	$scope.color2_11.color = "#15088f";
	$scope.color2_12.color = "#0740de";
	$scope.color2_13.color = "#0026d7";
	$scope.color2_14.color = "#007dd7";
	$scope.color2_15.color = "#1e6c87";
	$scope.color2_16.color = "#001c6b";

	$scope.color2_9.option = {
	    default: $scope.color2_6.color,
	    hasBackdrop : false,
	};
	$scope.color2_10.option = {
	    default: $scope.color2_7.color,
	    hasBackdrop : false,
	};
	$scope.color2_11.option = {
	    default: $scope.color2_8.color,
	    hasBackdrop : false,
	};
	$scope.color2_12.option = {
	    default: $scope.color2_8.color,
	    hasBackdrop : false,
	};
	$scope.color2_13.option = {
	    default: $scope.color2_6.color,
	    hasBackdrop : false,
	};
	$scope.color2_14.option = {
	    default: $scope.color2_7.color,
	    hasBackdrop : false,
	};
	$scope.color2_15.option = {
	    default: $scope.color2_8.color,
	    hasBackdrop : false,
	};
	$scope.color2_16.option = {
	    default: $scope.color2_8.color,
	    hasBackdrop : false,
	};


	// 5
	$scope.color2_17 = new Object();
	$scope.color2_18 = new Object();
	$scope.color2_19 = new Object();
	$scope.color2_20 = new Object();
	$scope.color2_21 = new Object();
	$scope.color2_22 = new Object();
	$scope.color2_23 = new Object();
	$scope.color2_24 = new Object();

	$scope.color2_17.color = "#9e0101";
	$scope.color2_18.color = "#d11414";
	$scope.color2_19.color = "#a00d0d";
	$scope.color2_20.color = "#da5959";
	$scope.color2_21.color = "#ab1a1a";
	$scope.color2_22.color = "#df0d37";
	$scope.color2_23.color = "#e10318";
	$scope.color2_24.color = "#df3847";

	$scope.color2_17.option = {
	    default: $scope.color2_6.color,
	    hasBackdrop : false,
	};
	$scope.color2_18.option = {
	    default: $scope.color2_7.color,
	    hasBackdrop : false,
	};
	$scope.color2_19.option = {
	    default: $scope.color2_8.color,
	    hasBackdrop : false,
	};
	$scope.color2_20.option = {
	    default: $scope.color2_8.color,
	    hasBackdrop : false,
	};
	$scope.color2_21.option = {
	    default: $scope.color2_6.color,
	    hasBackdrop : false,
	};
	$scope.color2_22.option = {
	    default: $scope.color2_7.color,
	    hasBackdrop : false,
	};
	$scope.color2_23.option = {
	    default: $scope.color2_8.color,
	    hasBackdrop : false,
	};
	$scope.color2_24.option = {
	    default: $scope.color2_8.color,
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


