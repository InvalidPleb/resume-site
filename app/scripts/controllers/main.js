(function() {

	'use strict';

	/**
	 * @ngdoc function
	 * @name resumeApp.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of the resumeApp
	 */



	 /*

		1. name
		2. title
		3. description
		4. contact









	 */
	angular.module('resumeApp')
	  	.controller('MainCtrl', function ($http, $q, $scope) {


	  		$scope.darkreader = {

	  			attr:   {
			  				id: "darkreader",
			  				href: "https://github.com/alexanderby/darkreader",
			  				nameClass: "block-name-def",
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
			  				nameClass: "block-name-def",
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




	  		//total
			//highest daily
			//highest weekly
			//longest streak


			//repo - commit total

			//first commit date/time
			//last commit date/time

			//info on most recent commits


		  	function add(a, b) {
		      	return a + b;
		  	}

		  	function openLink(url) {
			  var link = window.open(url, '_blank');
			  link.focus();
			}

		  	var githubGet = 'https://api.github.com';
		  	var repoContainer = [];
		  	var commitDaily = [];

		  	function getGithubStuff() {
		  		return $http.get(githubGet + '/users/InvalidPleb/repos')
			  		.then(function(res){
			  			pushCalledRepo(res.data);
			  			return getCommits(repoContainer[0], 0, repoContainer.length);
			  		});
		  	}
		  	
		  	function getCommits (repo, repoNum, maxRepos) {
		  		return $http.get(githubGet +'/repos/' + repo + '/stats/commit_activity')
		  			.then(function(res){
		  				commitDaily.push(res.data);
			  			repoNum++;
			  			if (repoNum < maxRepos) {
			  				return getCommits(repoContainer[repoNum], repoNum, maxRepos);
			  			}
			  		});
		  	}

		  	function pushCalledRepo (res) {
		  		for (let i = 0; i < res.length; i++) {
		  			repoContainer.push(res[i].full_name);
		  		}

		  	}


		  	function parallax(image, offsetX, offsetY) {
		  		let xpos = window.pageXOffset;
		  		let ypos = window.pageYOffset;
		  		image.css('transform', 'translate3d(' + (xpos * offsetX) + 'px,' + (ypos * offsetY) + 'px,0px)');
		  	}

		  	$(window).scroll(function(){
		  		parallax($('.container-parallax'), 0, -0.4);
		  		parallax($('.padding'), 0, -0.5);
		  	});

		  	


		  	// -------------- Graph -------------- //

		  	var svgContainer = d3.select(".animation-container")
		  		.append("svg")
				.attr("width", 400)
				.attr("height", 500)
				.style("position", "relative")
				.style("right", "152px");

			var pie = d3.layout.pie()
				.value(function (d) {
					return d;
			});

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
				9: [229, 119, 55],
			};

			var colorArr = [0,105, 0];

			function arc (inRad, outRad, sAng, eAng) {

				return d3.svg.arc()
					.innerRadius(inRad)
				    .outerRadius(outRad)
				    .startAngle(sAng)
				    .endAngle(eAng);

			}

			var defCenterTooltip = d3.select(".animation-container").append("div")	
						.attr("class", "tooltip1")
						.style('position','absolute')
						.style("left", (492) + "px")
		            	.style("top", (174) + "px");

		    var graphCircle = d3.select(".animation-container").append("div")	
						.attr("class", "graph-circle")
						.style('position','absolute')
						.style("left", (363) + "px")
		            	.style("top", (45) + "px");


		    function drawCss(cssClass, top, left, text) {
		    	return d3.select(".animation-container").append("div")	
						.attr("class", cssClass)
						.style("left", (left) + "px")
		            	.style("top", (top) + "px")
		            	.html(function() {
							    return "<p class=\"tooltipText\">" + text + "</p>";
							});
		    }

		    function htmlMidData(i, data) {
				let dayArray = ["S", "M", "T", "W", "T", "F", "S",];
				return "<p class=\"day-tooltip\">" + dayArray[i] +"|<span>" + data[i] + "</span></p>";
			}

		    drawCss("line", 190, 710, "");
		    drawCss("line", 290, 200, "");
		    drawCss("line", 75, 265, "");
		    drawCss("tooltip2", 50, 150, "Weeks");
		    drawCss("tooltip2", 265, 80, "Repositories");
		    drawCss("tooltip2", 165, 880, "Days");

			function outerRing (sAng, eAng, color, data, midData, i) {

				if (i < 52) {

					if (sAng === -1 && eAng === 5.5) {
						sAng++;
						eAng++;

					} else {
						sAng = sAng + 6.42;
						eAng = eAng + 6.42;
					}

					let color1 = color[0] + (data[i] * 13);
					let color2 = color[1] + (data[i] * 13);
					let color3 = color[2] + (data[i] * 13);
					let alpha = (data[i] * 0.1) + 0.05;
					let dayRing;
					let midDataInd = midData[i];

					let g = svgContainer.append('svg:g');

					let centerTooltip = d3.select(".animation-container").append("div")	
						.attr("class", "tooltip1")
						.style('position','absolute')	
						.style("opacity", 0)
						.html(function() {
							return "<p class=\"day-tooltip-title\">Week " + (i + 1) + "</p>" +
								"<p class=\"day-tooltip-label\"> &nbsp; &nbsp; Day &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Commits</p>" +
								"<div class=\"day-tooltip-container\">" + 
										htmlMidData(0, midDataInd) +
										htmlMidData(1, midDataInd) +
										htmlMidData(2, midDataInd) +
										htmlMidData(3, midDataInd) +
										htmlMidData(4, midDataInd) +
										htmlMidData(5, midDataInd) +
										htmlMidData(6, midDataInd) +
								"</div>";	
					});

					g.append("path")
					    .attr("d", arc(170, 200, (sAng * Math.PI / 180), (eAng * Math.PI / 180)))
					    .attr("transform", "translate(200,250)")
					    .style("fill", "rgba(" + color1 + "," + color2 + "," + color3 + "," + alpha + ")")
					    .style("position", "relative")
					    .style("z-index", "2")
					    .on("mouseover", function () {
						    d3.select(this).style("fill", "rgb(89, 74, 41)");
						    centerTooltip.style("left", ((d3.select(this).attr("cx") + 492) + "px"))
		            			.style("top", ((d3.select(this).attr("cy") + 174) + "px"));
						    centerTooltip.transition()		
		            			.duration(200)		
		            			.style("opacity", 0.9);
		            		
		            		dayRing = middleRing(0, 50, colorArr, midDataInd);

		            		for (let j = 0; j < dayRing.length; j++) {
		            			dayRing[j].transition()		
		            			.duration(200)		
		            			.style("opacity", 0.9);
		            		}
		   
						})
						.on("mouseout", function () {
						    d3.select(this).style("fill", "rgba(" + color1 + "," + color2 + "," + color3 + "," + alpha + ")");
						    centerTooltip.transition()		
		            			.duration(200)		
		            			.style("opacity", 0);
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

					return outerRing(sAng, eAng, colorArr, data, midData, i);
				}
			}

			function stylePos(element, top, left) {
				return element.style("top", (top) + "px")
					.style("left", (left) + "px");
			}

			function innerRing (data, nameArr, color, i){

				if (i < data.length) {

					let repoName = nameArr[i].slice(12,nameArr[i].length);
	
					let tooltip = d3.select(".d3-container")
						.append("div")
					    .attr("class", "repoTooltip")				
					    .style("opacity", 0);

					let pieD = pie(data);
					let sAng = pieD[i].startAngle;
					let eAng = pieD[i].endAngle;
					let poop = false;

					let alpha = 0.6;

					var pieCurve = svgContainer.append("path")
					    .attr("d", arc(80, 140, sAng, eAng))
					    .attr("transform", "translate(200,250)")
					    .style("fill", "rgba(" + color + "," + alpha + ")")
					    .style("position", "relative")
					    .style("z-index", "2")
					    .style("box-shadow", "0px 0px 9px 1px rgba(0,0,0,0.85)")
					    .on("mouseover", function () {
					    	tooltip.style("opacity", 1)
							
							.style("left", (300) + "px")
                			.style("top", (-500) + "px")
                			.html(function() {
							    return "<p class=\"repo-name\">" + repoName + "</p>" + 
							    "<p>" + data[i - 1] + " commits</p>" +
							    "<p>Click to view on Github</p>";
							});
							
							if (i === 1) {
								stylePos(tooltip, 60, 420);
							}
							if (i === 2) {
								stylePos(tooltip, 90, 380);
							}
							if (i === 3) {
								stylePos(tooltip, 230, 680);
							}
							if (i === 4) {
								stylePos(tooltip, 200, 320);
							}
							if (i === 5) {
								stylePos(tooltip, 60, 480);
							}
							if (i === 6) {
								stylePos(tooltip, 60, 520);
							}
						   	
						    d3.select(this).style("fill", "rgba(" + color + "," + (alpha + 0.3) + ")");
						}).on("mouseout", function () {
							tooltip.style("opacity", 0);
							
						   	
						    d3.select(this).style("fill", "rgba(" + color + "," + alpha + ")");
						}).on("click", function() {

							openLink("https://github.com/InvalidPleb/" + repoName);

						});
					i++;

					return innerRing(data, repoContainer, colorObj[i], i);
				}
			}
			
			function middleRing(sAng, eAng, color, data) {

				let ringCont = [];

				for (let i = 0; i <= 6; i++) {

					sAng = sAng + 50;
					eAng = eAng + 50;

					let color1 = color[0] + (data[i] * 50);
					let color2 = color[1] + (data[i] * 50);
					let color3 = color[2] + (data[i] * 50);
					let alpha = (data[i] * 0.2) + 0.05;

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

			function getDayCommits(inputArr) {

	  			let inputArrSlice = inputArr.slice(1, 5);
		  		let weekCurrTotal = [];
		  		let outputDays = [];
		  		let outputRepos = [];

		  		for (let i=0; i < inputArrSlice.length; i++) {

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

		  		for (let i=0; i < inputArr.length; i++) {

		  			let weekCurr = inputArr[i];

		  			if (daySums[i] === undefined) {

		  				daySums[i] = [];
		  			}

		  			for (let j=0; j < weekCurr.length; j++) {

		  				let dayCurr = weekCurr[j];

		  				for (let l=0; l < dayCurr.length; l++) {

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
		  		let allDays = [];

		  		let j = 0;

		  		for (let i=0; (i < inputArr.length); i++) {

		  			if (dayArr[i] === undefined) {

		  				dayArr[i] = [];

		  			}

		  			daySumsCurr = inputArr[i];
		  			weekCommits.push(inputArr[i].reduce(add, 0));

		  			for (let l=0; l < daySumsCurr.length; l++) {

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

	  			for (var i=0; i < inputArr.length; i++) {

	  				let currInputArr = inputArr[i];

	  				for (var j=0; j < currInputArr.length; j++) {

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

				for (var i = (inputArr.length - 1); i > 0; i--) {

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

			var calls = getGithubStuff();
		  	
		  	$q.all([calls]).then(function(){

		  		var gotDayCommits = getDayCommits(commitDaily);
		  		var repoCommits = gotDayCommits[0];
		  		var dayCommits = gotDayCommits[1];
		  		
		  		repoCommits.push(1);
		  		repoCommits.unshift(3);

		  		var daySums = sumDayCommits(dayCommits);
		  		var gotParsedCommits = parseCommits(daySums);
		  		var allWeekCommits = gotParsedCommits[0];
		  		var allDayCommits = gotParsedCommits[1];
		  		var streakArr = streakData(allDayCommits);

		  		var gotStreaks = getStreaks(streakArr);

		  		console.log(gotStreaks);

		  		var currentStreak = gotStreaks[0];
		  		var longestStreak = gotStreaks[1];

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
		  			}

		  		};

		  		outerRing(-1, 5.5, [0,105, 0], gotParsedCommits[0], gotParsedCommits[1], 0);
				middleRing(0, 50, [0,105, 0], [1,1,1,1,1,1,1]);
				innerRing(repoCommits, repoContainer, colorObj[0], 0);

		  	});

	});
})();
