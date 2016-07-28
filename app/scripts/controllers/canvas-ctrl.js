(function(){

	'use strict';

	angular
	    .module('resumeApp')
	    .controller('CanvasCtrl', CanvasCtrl);

	CanvasCtrl.$inject = ['$scope', 'maths'];

	function CanvasCtrl($scope, maths) {

		// -------- Canvas -------- //
	  	var canvas = document.getElementById("canvas");

	  	

		$(window).resize(function() {
			
			fitToContainer(document.getElementById("canvas"));
				
		});

		function fitToContainer(canvas){
		  canvas.style.width ='100%';
		  canvas.style.height ='100%';
		  canvas.width  = canvas.offsetWidth;
		  canvas.height = canvas.offsetHeight;
		}

		fitToContainer(canvas);

		function getMousePos(canvas, evt) {
		    let rect = canvas.getBoundingClientRect();
		    return {
		      x: evt.clientX - rect.left,
		      y: evt.clientY - rect.top
		    };
		}

		var painting = false;

		function drawCircle(canvas, x, y, rad, i) {

			var ctx = canvas.getContext("2d");

			if (i === 20) {
				i = 0;
			}

			if (i === 0) {
				var posx = maths.getRandom(0, canvas.width),
		            posy = maths.getRandom(0, canvas.height);
			} else {
				var posx = x,
				    posy = y;
			}

			i++;

			//pos = getMousePos(canvas, e),
			if (rad < maths.getRandom(50, 550)) {
				painting = true;
				rad = rad + 4;
				setTimeout(function(){
					drawCircle(canvas, x, y, rad, i);
				}, 60);

			} else {

				painting = false;
				
				x = maths.getRandom(0, canvas.width);
				y = maths.getRandom(0, canvas.height);
				fadeOut(canvas);
				setTimeout(function(){
					setTimeout(function(){
						drawCircle(canvas, x, y, rad, i);
					}, 60);
				}, 2000);
				rad = 0;
			}

		    let startAngle = 0,
	            endAngle = Math.PI * 2,
	            rgbR = maths.numRound((x * 0.1) + 70, 1),
			    rgbG = maths.numRound((y * 0.1) + 100, 1),
			    rgbB = maths.numRound((y * 0.1) * 5, 1);

	        ctx.fillStyle = 'rgba(' + rgbR + ',' + rgbG + ',' + rgbB + ',1)';
	        ctx.beginPath();
	        ctx.arc(x, y, rad, startAngle, endAngle, true);
	        ctx.fill();

		}
		
		function fadeOut(canvas) {

			var ctx = canvas.getContext("2d");

		    ctx.fillStyle = "rgba(24,24,24,0.3)";
		    ctx.fillRect(0, 0, canvas.width, canvas.height);

		    if (!painting) {
		    	var screenFill = setTimeout(function(){
				  fadeOut(canvas);
				},60);

		    }
		}
		//fadeOut();

	  	// -------- Background Parallax -------- //

	  	

	  	function parallax(image, offsetX, offsetY) {
	  		let ypos = window.pageYOffset;
	  		return image.css('transform', 'translate3d(' + (ypos * offsetX) + 'px,' + (ypos * offsetY) + 'px,0px)');
	  	}

	  	$(window).scroll(function(){
	  		return parallax($('.padding'), 0, -0.4);
	  	});


	}

})();
