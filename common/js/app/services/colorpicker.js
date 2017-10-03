angular.module('InteractionofColor')

/**
 * カラーピッカーを司るサービスです。
 */
.service('ColorPickerService', function () {

	var makeColorPicker = function (color){
		var obj = {};
		obj.color = color;
		obj.option = {
		    default: color,
		    hasBackdrop : false,
		};

		return obj;
	}

	var realtimeColorReflection = function (){
		$(document).on('click','.md-color-picker-preview',function(e){
		    $('.colorpicker.on').removeClass('on');
		    $(e.target).parents('.colorpicker').addClass('on');
		    var val = $('.colorpicker.on .md-color-picker-input').val();
		    $('.colorpicker.on .md-color-picker-input').attr('data-cansel', val);
		});
	}
	realtimeColorReflection();

	service = {
		makeColorPicker : makeColorPicker,
	};
	return service;

});