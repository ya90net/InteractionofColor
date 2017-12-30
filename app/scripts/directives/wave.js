'use strict';

/**
 * @ngdoc directive
 * @name interactionofColorApp.directive:wave
 * @description
 * # wave
 */
angular.module('interactionofColorApp')
  .directive('wave', function () {
    return {
      template: '<canvas id="wave"></canvas>',
      restrict: 'E',
      link: function () {
        wave();
      }
    };
  });



function wave(){
	// ~~~~~~
	//  wave
	// ~~~~~~
	//
	// animation frame を使う
	var canvas = document.getElementById('wave');
	var width  = '320px';
	var height = '60px';
	var retina = true;

	var bgColor     = '#ffffff';
	var lineColor   = '#24292e';
	var borderColor = '#ffffff';

	var style = 'border:2px solid ' + borderColor + ';\
		         position:absolute;\
		         left: 50%;\
		         top: 50%;';
		style += 'transform: translate(-50%, -50%) ';
		style += retina ? 'scale(0.5);' : ';';

		canvas.setAttribute("width", width);
		canvas.setAttribute("height", height);
		canvas.setAttribute("style", style);

		canvas.canvasCtx = canvas.getContext('2d');
			var WIDTH = canvas.width;
			var HEIGHT = canvas.height;

		var dataArray = [];
		var clock = 0;
		var noise = false;

		var a_tag = document.querySelectorAll('a');
		for( var i=a_tag.length; i--; ) {
	  	a_tag[i].addEventListener("mouseover", function(){
	  		noise = true;
	  	});
	  	a_tag[i].addEventListener("mouseout", function(){
	  		noise = false;
	  	});
		}
		

	var draw = function(){

		for(var i = 0; i < 160; i++) {

			dataArray[i] = Math.sin( clock / 6.385 ) * 256 / 3; // -255 ~ 255		
			if(noise == true){
				dataArray[i] = (- 256 + Math.floor( Math.random() * 512 ) ) ; // -255 ~ 255
			}
			clock++;
		}

		canvas.canvasCtx.fillStyle = bgColor;
		canvas.canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

		canvas.canvasCtx.lineWidth = 2;
		canvas.canvasCtx.strokeStyle = lineColor;

		canvas.canvasCtx.beginPath();

		var x = 0;

		for(var i = 0; i < 160; i++) {
			var v = dataArray[i] / 128.0, // -2 ~ 2
				y = ( v * HEIGHT / 4 ) + HEIGHT / 2;

			if(i === 0) {
				canvas.canvasCtx.moveTo(x, y);
			} else {
				canvas.canvasCtx.lineTo(x, y);
			}

			x += 2;
		}

		canvas.canvasCtx.lineTo(WIDTH, HEIGHT/2);
		canvas.canvasCtx.stroke();
	};

	(function waveLoop(){
	  draw();
	  window.requestAnimationFrame(waveLoop);
	}());
}