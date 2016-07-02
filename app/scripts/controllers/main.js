(function() {

	'use strict';

	/**
	 * @ngdoc function
	 * @name resumeApp.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of the resumeApp
	 */
	 
	angular.module('resumeApp')

	  	.controller('MainCtrl', function ($http, $q, $scope) {
	  		

	  		// -------- Block Template Instance Data -------- //

	  		/* 

	  			These objects contain the data for each block directive instance

	  		*/

	  		$scope.darkreader = {

	  			attr:  {
			  				id: "darkreader",
			  				href: "https://github.com/alexanderby/darkreader",
			  				nameClass: "block-name-dark",
	  					},

	  			binding: {
	  						nameHide: "false",
				  			paraHide: "false",
	  						skill1Hide: "true",
				  			skill2Hide: "true",
				  			skill3Hide: "true",
				  			skill4Hide: "true",
	  					},

	  			skills: {
	  						skill1: "",
				  			skill2: "",
				  			skill3: "",
				  			skill4: ""
	  					},

	  			text:   {
	  						nameTxt: "Dark Reader",
	  						paraTxt: "A chrome extension that inverts brightness of web pages and aims to reduce eyestrain while browsing the web.",
				  			txt1: "View on",
				  			txt2: "Github",
	  					}
	  		};

	  		$scope.tmtheme = {

	  			attr:   {
			  				id: "tmtheme",
			  				href: "https://github.com/aziz/tmTheme-Editor",
			  				nameClass: "block-name-tm",
	  					},

	  			binding: {

	  						nameHide: "false",
	  						paraHide: "false",
	  						skill1Hide: "true",
				  			skill2Hide: "true",
				  			skill3Hide: "true",
				  			skill4Hide: "true",
	  					},

	  			skills: {
	  						skill1: "",
				  			skill2: "",
				  			skill3: "",
				  			skill4: ""
	  					},

	  			text:   {
	  						nameTxt: "TmTheme Editor",
	  						paraTxt: "A color scheme editor for SublimeText, Textmate and other text editors. It allows you to edit tmtheme files easier and faster.",
				  			txt1: "View on",
				  			txt2: "Github",
	  					}
	  		};


	  		$scope.angular = {

	  			attr:   {
			  				id: "angular",
			  				href: "",
			  				nameClass: "block-name-def",
	  					},

	  			binding: {

	  						nameHide: "false",
	  						paraHide: "true",
	  						skill1Hide: "false",
				  			skill2Hide: "false",
				  			skill3Hide: "false",
				  			skill4Hide: "false",
	  					},

	  			skills: {
	  						skill1: "Data Binding",
				  			skill2: "Templating",
				  			skill3: "Routing",
				  			skill4: "MVC/MVW",
	  					},

	  			text:   {
	  						nameTxt: "Angular",
	  						paraTxt: "",
				  			txt1: "",
				  			txt2: "",
	  					}
	  		};

	  		$scope.jQuery = {

	  			attr:   {
			  				id: "jquery",
			  				href: "",
			  				nameClass: "block-name-def",
	  					},

	  			binding: {

	  						nameHide: "false",
	  						paraHide: "true",
	  						skill1Hide: "false",
				  			skill2Hide: "false",
				  			skill3Hide: "true",
				  			skill4Hide: "true",
	  					},

	  			skills: {
	  						skill1: "DOM Manipulation",
				  			skill2: "AJAX",
				  			skill3: "",
				  			skill4: "",
	  					},

	  			text:   {
	  						nameTxt: "jQuery",
	  						paraTxt: "",
				  			txt1: "",
				  			txt2: "",
	  					}
	  		};

	  		$scope.bootstrap = {

	  			attr:   {
			  				id: "bootstrap",
			  				href: "",
			  				nameClass: "block-name-def",
	  					},

	  			binding: {

	  						nameHide: "false",
	  						paraHide: "true",
	  						skill1Hide: "false",
				  			skill2Hide: "true",
				  			skill3Hide: "true",
				  			skill4Hide: "true",
	  					},

	  			skills: {
	  						skill1: "Responsive Design",
				  			skill2: "",
				  			skill3: "",
				  			skill4: "",
	  					},

	  			text:   {
	  						nameTxt: "Bootstrap",
	  						paraTxt: "",
				  			txt1: "",
				  			txt2: "",
	  					}
	  		};

	  		$scope.git = {

	  			attr:   {
			  				id: "git",
			  				href: "",
			  				nameClass: "block-name-def",
	  					},

	  			binding: {

	  						nameHide: "false",
	  						paraHide: "true",
	  						skill1Hide: "false",
				  			skill2Hide: "false",
				  			skill3Hide: "true",
				  			skill4Hide: "true",
	  					},

	  			skills: {
	  						skill1: "Version Control",
				  			skill2: "Github",
				  			skill3: "",
				  			skill4: "",
	  					},

	  			text:   {
	  						nameTxt: "Git",
	  						paraTxt: "",
				  			txt1: "",
				  			txt2: "",
	  					}
	  		};

	  		$scope.yeoman = {

	  			attr:   {
			  				id: "yeoman",
			  				href: "",
			  				nameClass: "block-name-def",
	  					},

	  			binding: {

	  						nameHide: "false",
	  						paraHide: "true",
	  						skill1Hide: "false",
				  			skill2Hide: "false",
				  			skill3Hide: "true",
				  			skill4Hide: "true",
	  					},

	  			skills: {
	  						skill1: "Yeoman Workflow",
				  			skill2: "Scaffolding",
				  			skill3: "",
				  			skill4: "",
	  					},

	  			text:   {
	  						nameTxt: "Yeoman",
	  						paraTxt: "",
				  			txt1: "",
				  			txt2: "",
	  					}
	  		};

	  		$scope.grunt = {

	  			attr:   {
			  				id: "grunt",
			  				href: "",
			  				nameClass: "block-name-def",
	  					},

	  			binding: {

	  						nameHide: "false",
	  						paraHide: "true",
	  						skill1Hide: "false",
				  			skill2Hide: "false",
				  			skill3Hide: "false",
				  			skill4Hide: "false",
	  					},

	  			skills: {
	  						skill1: "Compiling",
				  			skill2: "Minification",
				  			skill3: "Linting",
				  			skill4: "Livereload",
	  					},

	  			text:   {
	  						nameTxt: "Grunt",
	  						paraTxt: "",
				  			txt1: "",
				  			txt2: "",
	  					}
	  		};

	  		$scope.bower = {

	  			attr:   {
			  				id: "bower",
			  				href: "",
			  				nameClass: "block-name-def",
	  					},

	  			binding: {

	  						nameHide: "false",
	  						paraHide: "true",
	  						skill1Hide: "false",
				  			skill2Hide: "true",
				  			skill3Hide: "true",
				  			skill4Hide: "true",
	  					},

	  			skills: {
	  						skill1: "Package Managing",
				  			skill2: "",
				  			skill3: "",
				  			skill4: "",
	  					},

	  			text:   {
	  						nameTxt: "Bower",
	  						paraTxt: "",
				  			txt1: "",
				  			txt2: "",
	  					}
	  		};

	  		$scope.sass = {

	  			attr:   {
			  				id: "sass",
			  				href: "",
			  				nameClass: "block-name-def-sass",
	  					},

	  			binding: {

	  						nameHide: "false",
	  						paraHide: "true",
	  						skill1Hide: "false",
				  			skill2Hide: "false",
				  			skill3Hide: "false",
				  			skill4Hide: "true",
	  					},

	  			skills: {
	  						skill1: "Simple CSS Syntax",
				  			skill2: "Variables",
				  			skill3: "Inheritance",
				  			skill4: "",
	  					},

	  			text:   {
	  						nameTxt: "Sass",
	  						paraTxt: "",
				  			txt1: "",
				  			txt2: "",
	  					}
	  		};

	  		$scope.cscript = {

	  			attr:   {
			  				id: "cscript",
			  				href: "",
			  				nameClass: "block-name-def-cscript",
	  					},

	  			binding: {

	  						nameHide: "false",
	  						paraHide: "true",
	  						skill1Hide: "false",
				  			skill2Hide: "true",
				  			skill3Hide: "true",
				  			skill4Hide: "true",
	  					},

	  			skills: {
	  						skill1: "Simple JS Syntax",
				  			skill2: "",
				  			skill3: "",
				  			skill4: "",
	  					},

	  			text:   {
	  						nameTxt: "CoffeeScript",
	  						paraTxt: "",
				  			txt1: "",
				  			txt2: "",
	  					}
	  		};

	  		$scope.gimp = {

	  			attr:   {
			  				id: "gimp",
			  				href: "",
			  				nameClass: "block-name-def",
	  					},

	  			binding: {

	  						nameHide: "false",
	  						paraHide: "true",
	  						skill1Hide: "false",
				  			skill2Hide: "false",
				  			skill3Hide: "true",
				  			skill4Hide: "true",
	  					},

	  			skills: {
	  						skill1: "Image Editing",
				  			skill2: "Bitmapping",
				  			skill3: "",
				  			skill4: "",
	  					},

	  			text:   {
	  						nameTxt: "Gimp",
	  						paraTxt: "",
				  			txt1: "",
				  			txt2: "",
	  					}
	  		};

	  		$scope.balsamiq = {

	  			attr:   {
			  				id: "balsamiq",
			  				href: "",
			  				nameClass: "block-name-def",
	  					},

	  			binding: {

	  						nameHide: "false",
	  						paraHide: "true",
	  						skill1Hide: "false",
				  			skill2Hide: "false",
				  			skill3Hide: "true",
				  			skill4Hide: "true",
	  					},

	  			skills: {
	  						skill1: "Wireframing",
				  			skill2: "Mockups",
				  			skill3: "",
				  			skill4: "",
	  					},

	  			text:   {
	  						nameTxt: "Balsamiq",
	  						paraTxt: "",
				  			txt1: "",
				  			txt2: "",
	  					}
	  		};

	  		$scope.d3 = {

	  			attr:   {
			  				id: "d3",
			  				href: "",
			  				nameClass: "block-name-def",
	  					},

	  			binding: {

	  						nameHide: "false",
	  						paraHide: "true",
	  						skill1Hide: "false",
				  			skill2Hide: "false",
				  			skill3Hide: "true",
				  			skill4Hide: "true",
	  					},

	  			skills: {
	  						skill1: "Data Visualization",
				  			skill2: "SVG Manipulation",
				  			skill3: "",
				  			skill4: "",
	  					},

	  			text:   {
	  						nameTxt: "D3",
	  						paraTxt: "",
				  			txt1: "",
				  			txt2: "",
	  					}
	  		};

			// -------- Github AJAX -------- //

		  	var repoContainer = [];
		  	var commitDaily = [];

		  	function getGithubStuff() {
		  		return $http.get('https://api.github.com' + '/users/InvalidPleb/repos')
			  		.then(function(res){
			  			pushCalledRepo(res.data, repoContainer);
			  			return getCommits(repoContainer[0], 0, repoContainer.length);
			  		});
		  	}
		  	
		  	function getCommits (repo, repoNum, maxRepos) {
		  		return $http.get('https://api.github.com' + '/repos/' + repo + '/stats/commit_activity')
		  			.then(function(res){
		  				commitDaily.push(res.data);
			  			repoNum++;
			  			if (repoNum < maxRepos) {
			  				return getCommits(repoContainer[repoNum], repoNum, maxRepos);
			  			}
			  		});
		  	}

		  	function pushCalledRepo (res, repo) {
		  		for (let i = 0; i < res.length; i++) {
		  			repo.push(res[i].full_name);
		  		}
		  		return repo;
		  	}

		  	// -------- AJAX Callback -------- //

			var calls = getGithubStuff();
		  	$q.all([calls]).then(function(){
		  		
		        function hideScreen () {
		            setTimeout(function() {
		              $('.loadingScreen').fadeOut(500);
		              $('.loading').fadeOut(500);
		            }, 200);
		        }
		        hideScreen();
			    
		  		var gotDayCommits = getDayCommits(commitDaily),
		  		    repoCommits = gotDayCommits[0],
		  		    dayCommits = gotDayCommits[1];
		  		
		  		repoCommits.push(1);
		  		repoCommits.unshift(3);

		  		var daySums = sumDayCommits(dayCommits),
		  		    gotParsedCommits = parseCommits(daySums),
		  		    allWeekCommits = gotParsedCommits[0],
		  		    allDayCommits = gotParsedCommits[1],
		  		    streakArr = streakData(allDayCommits),
		  		    gotStreaks = getStreaks(streakArr);

		  		$scope.months = setArr($scope.months, 12);
				$scope.weeks = setArr($scope.weeks, 52);
				$scope.days = setArr($scope.days, 7);
				$scope.repos = setArr($scope.repos, 6);
				$scope.dayNames = ["S", "M", "T", "W", "T", "F", "S",];


		  		
	  			// This object contains the data for the Github graph

		  		$scope.dataObj = {

		  			commits: {

		  				days: allDayCommits,
		  				weeks: allWeekCommits,
		  				thisWeek: allWeekCommits[51],
		  				thisYear: allWeekCommits.reduce(add, 0),
		  				currStreak: gotStreaks[0],
		  				longestStreak: gotStreaks[1],
		  			},

		  			repositories: {

		  				names: [
		  					"Dark Reader",
		  					"Resume",
		  					"Runner Calculator",
		  					"sips",
		  					"Sublime Text Themes",
		  					"TmTheme Editor"
		  					],

		  				commits: [
			  				repoCommits[0],
			  				repoCommits[1],
			  				repoCommits[2],
			                repoCommits[3],
			  				repoCommits[4],
			  	            repoCommits[5],
		  					],

		  				darkReader: repoCommits[0],
		  				resumeSite: repoCommits[1],
		  				runnerCalc: repoCommits[2],
		  				sips: repoCommits[3],
		  				sublimeText: repoCommits[4],
		  				tmTheme: repoCommits[5],

		  				href: {

		  					darkReader: "https://github.com/alexanderby/darkreader",
			  				resumeSite: "https://github.com/InvalidPleb/resume-site",
			  				runnerCalc: "https://github.com/InvalidPleb/Runner-Calculator",
			  				sips: "https://github.com/InvalidPleb/sips",
			  				sublimeText: "https://github.com/InvalidPleb/sublime-text-themes",
			  				tmTheme: "https://github.com/aziz/tmTheme-Editor",
		  				}
		  			},

		  			months: [
			  				"Jan",
			  				"Feb",
			  				"Mar",
			  				"Apr",
			  				"May",
			  				"Jun",
			  				"Jul",
			  				"Aug",
			  				"Sep",
			  				"Oct",
			  				"Nov",
			  				"Dec"
			  				],

			  		days: [
			  				"Sun",
			  				"Mon",
			  				"Tue",
			  				"Wed",
			  				"Thu",
			  				"Fri",
			  				"Sat"
			  				]
		  		};

		  		outerRing(-1, 5.5, [0,105, 0], gotParsedCommits[0], gotParsedCommits[1], 0);
				middleRing(0, 50, [0,105, 0], [1,1,1,1,1,1,1]);
				innerRing(repoCommits, repoContainer, colorObj[0], 0);

		  	});

			// -------- General Functions -------- //

			function add(a, b) {
		      	return a + b;
		  	}

		  	function openLink(url) {
				let link = window.open(url, '_blank');
				return link.focus();
			}

			function setArr(arr, num) {
				arr = [];
			  	for (let i=0; i < num; i++) {arr.push(i);}
			  	return arr;
			}

		  	// -------- Background Parallax -------- //


		  	function parallax(image, offsetX, offsetY) {
		  		let ypos = window.pageYOffset;
		  		return image.css('transform', 'translate3d(' + (ypos * offsetX) + 'px,' + (ypos * offsetY) + 'px,0px)');
		  	}

		  	$(window).scroll(function(){
		  		return parallax($('.padding'), 0, -0.4);
		  	});

		  	
		  	// -------- Canvas -------- //


		  	var canvas = document.getElementById("canvas"),
		  	    mainControlSection = document.getElementById("mainControlSection"),
		  	    sphere = document.getElementsByClassName("sphere"),
		  	    sphereTxt = document.getElementsByClassName("sphere-text"),
		  	    ctx = canvas.getContext("2d"),
			    painting = false;

			$(window).resize(function() {
			  fitToContainer(canvas);
			  //fadeOut2();
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

			function numRound (value,dec){
		        value=Math.floor(value * dec + 0.05) / dec;
		        return(value);
		    }

		    function getRandomArbitrary(min, max) {
			  return Math.random() * (max - min) + min;
			}

			var painting = false;

			function drawCircle(x, y, rad, i) {

				if (i === 20) {

					i = 0;
				}

				if (i === 0) {

					var posx = getRandomArbitrary(0, canvas.width),
			            posy = getRandomArbitrary(0, canvas.height);

				} else {

					var posx = x,
					    posy = y;
				}

				i++;

				//pos = getMousePos(canvas, e),
				if (rad < getRandomArbitrary(50, 550)) {
					painting = true;
					rad = rad + 4;
					setTimeout(function(){
						drawCircle(x, y, rad, i);
					}, 60);

				} else {

					painting = false;
					
					x = getRandomArbitrary(0, canvas.width);
					y = getRandomArbitrary(0, canvas.height);
					fadeOut();
					setTimeout(function(){
						setTimeout(function(){
							drawCircle(x, y, rad, i);
						}, 60);
					}, 2000);
					rad = 0;
				}

			    let startAngle = 0,
		            endAngle = Math.PI * 2,
		            rgbR = numRound((x * 0.1) + 70, 1),
				    rgbG = numRound((y * 0.1) + 100, 1),
				    rgbB = numRound((y * 0.1) * 5, 1);
	
		        ctx.fillStyle = 'rgba(' + rgbR + ',' + rgbG + ',' + rgbB + ',1)';
		        ctx.beginPath();
		        ctx.arc(x, y, rad, startAngle, endAngle, true);
		        ctx.fill();

			}

			drawCircle(getRandomArbitrary(0, canvas.width), getRandomArbitrary(0, canvas.height), 10, 0);

			function fadeOut() {

			    ctx.fillStyle = "rgba(24,24,24,0.3)";
			    ctx.fillRect(0, 0, canvas.width, canvas.height);

			    if (!painting) {
			    	var screenFill = setTimeout(function(){
					  fadeOut();
					},60);

			    }
			}
			fadeOut();
			    	
		  	// -------------- Github Graph -------------- //


		  	// Setting up D3

		  	var svgContainer = d3.select(".animation-container")
		  		.append("svg")
		  		.attr("class", "svg-container")
				.attr("width", 400)
				.attr("height", 500);

			var pie = d3.layout.pie()
				.value(function (d) {
					return d;
			});

			var defCenterTooltip = d3.select(".animation-container").append("div")	
						.attr("class", "pie-tooltip");

		    var graphCircle = d3.select(".animation-container").append("div")	
						.attr("class", "graph-circle");

			function arc (inRad, outRad, sAng, eAng) {
				return d3.svg.arc()
					.innerRadius(inRad)
				    .outerRadius(outRad)
				    .startAngle(sAng)
				    .endAngle(eAng);
			}

		    // Obj containing RGB colors used in graph
			var colorObj = {
				0: [133, 130, 116],
				1: [117,113,22],
				2: [208, 208, 54],
				3: [74,103,19],
				4: [174,188,33],
				5: [10, 144, 67],
				6: [47, 177, 122],
				7: [149, 199, 111],
				8: [184, 209, 58],
				9: [0,105, 0],
			};


			// Recursive function to draw the outer ring
			function outerRing (sAng, eAng, color, data, midData, i) {

				// Each outer ring segment / function call stands for a week
				if (i < 52) {

					if (sAng === -1 && eAng === 5.5) {
						sAng++;
						eAng++;

					} else {
						sAng = sAng + 6.42;
						eAng = eAng + 6.42;
					}

					// Increasing shade and opacity of color relative to input data
					let color1 = color[0] + (data[i] * 13);
					let color2 = color[1] + (data[i] * 13);
					let color3 = color[2] + (data[i] * 13);
					let alpha = (data[i] * 0.1) + 0.05;
					let dayRing;
					let midDataInd = midData[i];
					let g = svgContainer.append('svg:g');

					// Drawing the pie segment
					g.append("path")
					    .attr("d", arc(170, 200, (sAng * Math.PI / 180), (eAng * Math.PI / 180)))
					    .attr("transform", "translate(200,250)")
					    .style("fill", "rgba(" + color1 + "," + color2 + "," + color3 + "," + alpha + ")")
					    .style("position", "relative")
					    .style("z-index", "2")
					    .on("mouseover", function () {
						    d3.select(this).style("fill", "rgb(89, 74, 41)");
						    $(".pie-tooltip-hover:nth-child(" + i + ")").css("opacity", "1");

						    // Drawing the day rings
		            		dayRing = middleRing(0, 50, colorObj[9], midDataInd);

		            		for (let j = 0; j < dayRing.length; j++) {
		            			dayRing[j].transition()		
		            			.duration(200)		
		            			.style("opacity", 0.9);
		            		}
						})
						.on("mouseout", function () {
						    d3.select(this).style("fill", "rgba(" + color1 + "," + color2 + "," + color3 + "," + alpha + ")");
						    $(".pie-tooltip-hover:nth-child(" + i + ")").css("opacity", "0");
	
							// Hiding the day rings
		            		for (let j = 0; j < dayRing.length; j++) {
		            			dayRing[j].transition()		
		            			.duration(200)		
		            			.style("opacity", 0.1)
		            			.remove();
		            		}	
						});

					sAng = sAng + 0.5;
					eAng = eAng + 0.5;
					i++;
					return outerRing(sAng, eAng, colorObj[9], data, midData, i);
				}
			}


			// Recursive function to draw the day rings
			function middleRing(sAng, eAng, color, data) {

				let ringCont = [];
				for (let i = 0; i <= 6; i++) {

					sAng = sAng + 50;
					eAng = eAng + 50;

					// Increasing shade and opacity of color relative to input data
					let color1 = color[0] + (data[i] * 50);
					let color2 = color[1] + (data[i] * 50);
					let color3 = color[2] + (data[i] * 50);
					let alpha = (data[i] * 0.2) + 0.05;

					// Drawing the day ring segment
					let ring = svgContainer.append("path")
					    .attr("d", arc(145, 165, (sAng * Math.PI / 180), (eAng * Math.PI / 180)))
					    .attr("transform", "translate(200,250)")
					    .style("fill", "rgba(" + color1 + "," + color2 + "," + color3 + "," + alpha + ")")
					    .style("position", "relative")
						.style("z-index", "2")
						.style("opacity", 0.3);

					sAng = sAng + 1.5;
					eAng = eAng + 1.5;
					ringCont.push(ring);
				}
				return ringCont;
			}

			
			// Recursive function to draw the inner pie chart
			function innerRing (data, nameArr, color, i){

				if (i < data.length) {

					let repoName = nameArr[i].slice(12,nameArr[i].length);
					let pieD = pie(data);
					let sAng = pieD[i].startAngle;
					let eAng = pieD[i].endAngle;
					let alpha = 0.6;

					// Drawing the pie segment
					var pieCurve = svgContainer.append("path")
					    .attr("d", arc(80, 140, sAng, eAng))
					    .attr("transform", "translate(200,250)")
					    .attr("class", "pie")
					    .style("fill", "rgba(" + color + "," + alpha + ")")

					    .on("mouseover", function () {

					    	// Showing tooltips
					    	$(".repoTooltip:nth-child(" + i + ")").css("opacity", "1");
						    d3.select(this).style("fill", "rgba(" + color + "," + (alpha + 0.3) + ")");

						}).on("mouseout", function () {

							// Hiding tooltips
							$(".repoTooltip").css("opacity", "0");
						    d3.select(this).style("fill", "rgba(" + color + "," + alpha + ")");

						}).on("click", function() {

							// Opens a link to the repository that is represented by the pie segment
							openLink("https://github.com/InvalidPleb/" + repoName);
						});
					i++;
					return innerRing(data, repoContainer, colorObj[i], i);
				}
			}
			
			// -------- Data Sorting Functions -------- // 

			function getDayCommits(inputArr) {

	  			let inputArrSlice = inputArr.slice(1, 5);
		  		let weekCurrTotal = [];
		  		let outputDays = [];
		  		let outputRepos = [];

		  		for (let i=0, n=inputArrSlice.length; i < n; i++) {

		  			let weekCurr = inputArrSlice[i];
		  			weekCurrTotal[i] = [];

		  			for (let j=0; j < 52; j++) {

		  				if (outputDays[j] === undefined) {
		  					outputDays[j] = [];
		  					outputDays[j].push(weekCurr[j].days);
		  				} else {
		  					outputDays[j].push(weekCurr[j].days);
		  				}
		  				weekCurrTotal[i].push(weekCurr[j].total);
		  			}
		  			outputRepos[i] = (weekCurrTotal[i].reduce(add, 0));
		  		}
		  		return [outputRepos, outputDays];
	  		}

	  		function sumDayCommits(inputArr) {

		  		let daySums = [];

		  		for (let i=0, n=inputArr.length; i < n; i++) {

		  			let weekCurr = inputArr[i];

		  			if (daySums[i] === undefined) {
		  				daySums[i] = [];
		  			}

		  			for (let j=0, n=weekCurr.length; j < n; j++) {
		  				let dayCurr = weekCurr[j];
		  				for (let l=0, m=dayCurr.length; l < m; l++) {

		  					daySums[i].push(dayCurr[l]);
		  				}
		  			}
		  		}
		  		return daySums;
	  		}

	  		function parseCommits(inputArr) {

	  			let dayArr = [];
	  			let weekCommits = [];
		  		let daySumsCurr = [];
		  		let dayArrCurr = [];

		  		let j = 0;

		  		for (let i=0, n=inputArr.length; i < n; i++) {

		  			if (dayArr[i] === undefined) {

		  				dayArr[i] = [];

		  			}

		  			daySumsCurr = inputArr[i];
		  			weekCommits.push(inputArr[i].reduce(add, 0));

		  			for (let l=0, m=daySumsCurr.length; l < m; l++) {

		  				if (l % 7 === 0) {
			  				j = 0;
			  			} else {
			  				j++;
			  			}

		  				dayArrCurr = dayArr[i];
		  				if (dayArrCurr[j] === undefined) {

		  					dayArrCurr[j] = daySumsCurr[l];
		  				} else {

		  					dayArrCurr[j] = (dayArrCurr[j] + daySumsCurr[l]);
		  				}
		  			}
		  		}
		  		return [weekCommits, dayArr];
	  		}

	  		function streakData(inputArr) {

	  			let streakArr = [];
	  			for (let i=0, n=inputArr.length; i < n; i++) {

	  				let currInputArr = inputArr[i];

	  				for (let j=0, m=currInputArr.length; j < m; j++) {

	  					streakArr.push(currInputArr[j]);
	  				}
	  			}
	  			return streakArr;
	  		}

	  		function getStreaks(inputArr) {

				let streakCounter = 0;
				let longestStreak = 0;
				let currStreak = 0;
				let endCurrStreak = false;

				for (let i = (inputArr.length - 1); i > 0; i--) {

					if (inputArr[i] === 0) {

						if (streakCounter === 0) {

						} else {

							if (currStreak > longestStreak) {
								longestStreak = currStreak;
							}
							endCurrStreak = true;
							streakCounter = 0;
						}

					} else {

						if (endCurrStreak === false) {
							currStreak = streakCounter;
						}
						streakCounter++;
					}
				}
				return [currStreak, longestStreak];
			}
		});
})();
