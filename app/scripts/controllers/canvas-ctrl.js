(function(){

	'use strict';

	angular
	    .module('resumeApp')
	    .controller('CanvasCtrl', CanvasCtrl);

	CanvasCtrl.$inject = ['maths'];

	function CanvasCtrl(maths) {

		/*

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

		drawCircle(canvas, maths.getRandom(0, canvas.width), maths.getRandom(0, canvas.height), 10, 0);

		*/

		// -------- Canvas -------- //

		/*


		  	var canvas = document.getElementById("canvas");
		  	var mainControlSection = document.getElementById("mainControlSection");
		  	var sphere = document.getElementsByClassName("sphere");
		  	var sphereTxt = document.getElementsByClassName("sphere-text");
			//var context = canvas.getContext("2d");

			$( window ).resize(function() {
			  fitToContainer(canvas);
			  fadeOut2();
			});
			
			function fitToContainer(canvas){
			  canvas.style.width='100%';
			  canvas.style.height='100%';
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

			var ctx = canvas.getContext("2d"),
			    painting = false;

			function numRound (value,dec){
		        value=Math.floor(value * dec + 0.05) / dec;
		        return(value);
		    }

			function drawCircle(e) {

				let pos = getMousePos(canvas, e),
			        posx = pos.x,
			        posy = pos.y,
			        x = posx,
		            y = posy,
		            radius = 30,
		            startAngle = 0,
		            endAngle = Math.PI * 2,
		            rgbR = numRound((posx * 0.1) + 70, 1),
				    rgbG = numRound((posy * 0.1) + 100, 1),
				    rgbB = numRound((posy * 0.1) * 5, 1);
	
		        ctx.fillStyle = 'rgba(' + rgbR + ',' + rgbG + ',' + rgbB + ',1)';
		        ctx.beginPath();
		        ctx.arc(x, y, radius, startAngle, endAngle, true);
		        ctx.fill();

			}

			var clicked = false;
			var scrolling = false;

			function fadeOut() {

			    ctx.fillStyle = "rgba(24,24,24,0.2)";
			    ctx.fillRect(0, 0, canvas.width, canvas.height);

			    if (painting) {
			    	var screenFill = setTimeout(function(){
					  fadeOut();
					},30);
			    }

			    mainControlSection.onmousedown = function (e) {

			    	clearTimeout(screenFill);
					clicked = true;
			    };

			    sphere.onmousedown = function (e) {

			    	clearTimeout(screenFill);
					clicked = true;
			    };

			    sphereTxt.onmousedown = function (e) {

			    	clearTimeout(screenFill);
					clicked = true;
			    };


				canvas.onmousedown = function (e) {

					clearTimeout(screenFill);
					clicked = true;
				};

				
				canvas.onmouseenter = function(e) {

					painting = true;
					if (!clicked) {
						var screenFill = setTimeout(function(){
						  fadeOut();
						},30);
					}
				};

				canvas.onmouseleave = function(e) {
					
					//setTimeout(function(){
						clearTimeout(screenFill);
						painting = false;
					//},700);
			
				};

				canvas.onwheel = function(e) {

					if (painting) {
						scrolling = true;
						clearTimeout(screenFill);

					}

				};

				
			}

			function fadeOut2() {
			    ctx.fillStyle = "rgba(24,24,24,1)";
			    ctx.fillRect(0, 0, canvas.width, canvas.height);
			}

			canvas.onmousemove = function (e) {

				
				if (scrolling) {

					var screenFill = setTimeout(function(){
					  fadeOut();
					},30);
					scrolling = false;

				} else {

					drawCircle(e);
				}

			};

			canvas.onmouseup = function (e) {

				var screenFill = setTimeout(function(){
				  fadeOut();
				},30);

				clicked = false;

			};

			

			canvas.style.webkitFilter = "blur(10px)";

			fadeOut();
			fadeOut2();

			*/

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
