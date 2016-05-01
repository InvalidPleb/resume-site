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

  		$scope.angular = {
  			id: "angular",
  			changeVar: "angOp",
  			txt: "Angular"
  		};

  		$scope.jQuery = {
  			id: "jquery",
  			changeVar: "jquOp",
  			txt: "JQuery"
  		};

  		$scope.bootstrap = {
  			id: "bootstrap",
  			changeVar: "bootOp",
  			txt: "Bootstrap"
  		};

  		$scope.git = {
  			id: "git",
  			changeVar: "gitOp",
  			txt: "Git"
  		};

  		$scope.yeoman = {
  			id: "yeoman",
  			changeVar: "yeoOp",
  			txt: "Yeoman"
  		};

  		$scope.grunt = {
  			id: "grunt",
  			changeVar: "gruntOp",
  			txt: "Grunt"
  		};

  		$scope.bower = {
  			id: "bower",
  			changeVar: "bowOp",
  			txt: "Bower"
  		};

  		$scope.sass = {
  			id: "sass",
  			changeVar: "sassOp",
  			txt: "Sass"
  		};

  		$scope.cscript = {
  			id: "cscript",
  			changeVar: "cscOp",
  			txt: "CoffeeScript"
  		};

  		$scope.photoshop = {
  			id: "photoshop",
  			changeVar: "photoOp",
  			txt: "Photoshop"
  		};

  		$scope.gimp = {
  			id: "gimp",
  			changeVar: "gimpOp",
  			txt: "Gimp"
  		};

  		$scope.balsamiq = {
  			id: "balsamiq",
  			changeVar: "balOp",
  			txt: "Balsamiq"
  		};

  		$scope.d3 = {
  			id: "d3",
  			changeVar: "d3Op",
  			txt: "D3"
  		};

  		





	  	var i, j, l;

	  	function add(a, b) {
	      	return a + b;
	  	}

	  	var githubGet = 'https://api.github.com';
	  	var commitContainer = [];
	  	var repoContainer = [];
	  	var commitTotal = 0;
	  	var commitOwnerTotal = [];
	  	var commitOwnerWeekly = [];
	  	var commitDaily = [];

	  	function pushCalledCommits(res, container) {
	  		
	  		for (i=0; i < res.length; i++) {

	  			if (res[i].total > 0) {

	  				for (j=0; j < res[i].days.length; j++) {
	  					container.push(res[i].days[j]);

	  				}
	  			}
	  		}

	  		return container.reduce(add, 0);

	  	}



	  	function getGithubStuff() {
	  		return $http.get(githubGet + '/users/InvalidPleb/repos')
		  		.then(function(res){

		  			pushCalledRepo(res.data);	
		  			return getOwnerCommits(repoContainer[0], -1, repoContainer.length, 0);
		  		});
		  		
			
	  	}

	  	function getOwnerCommits (repo, repoNum, maxRepos) {
	  		return $http.get(githubGet + '/repos/' + repo + '/stats/participation')
	  			.then(function(res){

	  				commitOwnerWeekly[repoNum + 1] = (res.data.owner);
	  				commitOwnerTotal.push(commitOwnerWeekly[repoNum + 1].reduce(add, 0));
	  				repoNum++;

	  				if (repoNum < maxRepos) {
	  					return getOwnerCommits(repoContainer[repoNum], repoNum, maxRepos);
	  				} else {
	  					return getCommits(repoContainer[0], 0, repoContainer.length);
	  				}
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
	  		for (i = 0; i < res.length; i++) {
	  			repoContainer.push(res[i].full_name);
	  		}

	  	}

	  	

	  	var svgContainer = d3.select(".animation-container").append("svg")
				.attr("width", 700)
				.attr("height", 500)
				.style("position", "relative")
				.style("left", "120px");

		function arc (inRad, outRad, sAng, eAng) {

			return d3.svg.arc()
				.innerRadius(inRad)
			    .outerRadius(outRad)
			    .startAngle(sAng)
			    .endAngle(eAng);

		}


		function outerRing (sAng, eAng, color, data, midData, i) {

			if (sAng === -1 && eAng === 5.5) {

				sAng++;
				eAng++;

			} else {

				sAng = sAng + 6.42;
				eAng = eAng + 6.42;
			}

			var color1 = color[0] + (data[i] * 12);
			var color2 = color[1] + (data[i] * 12);
			var color3 = color[2] + (data[i] * 12);
			var alpha = (data[i] * 0.1) + 0.05;
			var dayRing;

			

			if (i < 51) {

				var g = svgContainer.append('svg:g');

				g.append("path")
				    .attr("d", arc(170, 200, (sAng * Math.PI / 180), (eAng * Math.PI / 180)))
				    .attr("transform", "translate(355,250)")
				    .style("fill", "rgba(" + color1 + "," + color2 + "," + color3 + "," + alpha + ")")
				    .style("position", "relative")
				    .style("z-index", "2")
				    .on("mouseover", function (d) {
					    d3.select(this).style("fill", "rgb(89, 74, 41)");
					    div.style("left", ((d3.select(this).attr("cx") + 492) + "px"))
	            			.style("top", ((d3.select(this).attr("cy") + 174) + "px"));
					    div.transition()		
	            			.duration(50)		
	            			.style("opacity", 0.9);
	            		
	            		dayRing = middleRing(0, 50, colorArr, midData[i]);

	            		for (j = 0; j < dayRing.length; j++) {
	            			dayRing[j].transition()		
	            			.duration(200)		
	            			.style("opacity", 0.9);
	            		}
	   
					})
					.on("mouseout", function (d) {
					    d3.select(this).style("fill", "rgba(" + color1 + "," + color2 + "," + color3 + "," + alpha + ")");
					    div.transition()		
	            			.duration(50)		
	            			.style("opacity", 0);
	            		for (j = 0; j < dayRing.length; j++) {
	            			dayRing[j].transition()		
	            			.duration(200)		
	            			.style("opacity", 0.1);
	            			dayRing[j].remove();
	            		}	
				});

				var div = d3.select(".animation-container").append("div")	
					.attr("class", "tooltip")
					.style('position','absolute')
					.text("Week:")		
					.style("opacity", 0);

				sAng = sAng + 0.63;
				eAng = eAng + 0.63;
				i++;



				return outerRing(sAng, eAng, colorArr, data, midData, i);
			}
		}

		var pie = d3.layout.pie()
			.value(function (d) {
				return d;
			});
		

		var dataArr = [3, 5, 152, 87, 4, 3];

		var colorObj = {
			0: [38, 53, 138],
			1: [188, 149, 41],
			2: [201, 177, 0],
			3: [142, 114, 31],
			4: [160, 140, 67],
			5: [10, 144, 67],
			6: [47, 177, 122],
			7: [149, 199, 111],
			8: [184, 209, 58],
			9: [229, 119, 55],
		};


		function innerRing (data, color, i){

			if (i < data.length) {

				var pieD = pie(data);
				var sAng = pieD[i].startAngle;
				var eAng = pieD[i].endAngle;

				var alpha = 0.6;

				svgContainer.append("path")
				    .attr("d", arc(80, 140, sAng, eAng))
				    .attr("transform", "translate(355,250)")
				    .style("fill", "rgba(" + color + "," + alpha + ")")
				    .style("position", "relative")
				    .style("z-index", "2")
				    .style("box-shadow", "0px 0px 9px 1px rgba(0,0,0,0.85)")
				    .on("mouseover", function (d) {
					    d3.select(this).style("fill", "rgba(" + color + "," + (alpha + 0.3) + ")");
					}).on("mouseout", function (d) {
					    d3.select(this).style("fill", "rgba(" + color + "," + alpha + ")");
					});

				i++;

				return innerRing(data, colorObj[i], i);

			}

			//sAng = sAng + padding1;
			//eAng = eAng + padding2;

		}

		var colorArr = [0,105, 0];

		function middleRing(sAng, eAng, color, data) {

			var ring;
			var ringCont = [];

			for (i = 0; i <= 6; i++) {

				sAng = sAng + 50;
				eAng = eAng + 50;
				
				var color1 = color[0] + (data[i] * 50);
				var color2 = color[1] + (data[i] * 50);
				var color3 = color[2] + (data[i] * 50);
				var alpha = (data[i] * 0.2) + 0.05;

				ring = svgContainer.append("path")
				    .attr("d", arc(145, 165, (sAng * Math.PI / 180), (eAng * Math.PI / 180)))
				    .attr("transform", "translate(355,250)")
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

		var calls = getGithubStuff();
	  	
	  	$q.all([calls]).then(function(){

	  		function weekSum (arr) {

				var arrCurr;
				var output = [];
				
				for (i=0; i < arr.length; i++) {

					arrCurr = arr[i];
					
					for (j=0; j < 52; j++) {

						if (output[j] === undefined) {

							output[j] = [];
							output[j].push(arrCurr[j]);

						} else {

							output[j].push(arrCurr[j]);

						}
					}
				}

				var outputSum = [];

				for (i=0; i < 52; i++) {

					outputSum.push(output[i].reduce(add, 0));

				}

				return outputSum;
			}

			var weekCommits = weekSum(commitOwnerWeekly);

	  		var dayCommits = [];
	  		var weekCurr;

	  		for (i=0; i < commitDaily.length; i++) {

	  			weekCurr = commitDaily[i];

	  			for (j=0; j < 52; j++) {

	  				if (dayCommits[j] === undefined) {

	  					dayCommits[j] = [];
	  					dayCommits[j].push(weekCurr[j].days);

	  				} else {
	  					dayCommits[j].push(weekCurr[j].days);
	  				}

	  				
	  			}
	  		}

	  		var dayCurr;
	  		var daySums = [];

	  		for (i=0; i < dayCommits.length; i++) {

	  			weekCurr = dayCommits[i];

	  			if (daySums[i] === undefined) {

	  				daySums[i] = [];

	  			}

	  			for (j=0; j < weekCurr.length; j++) {

	  				dayCurr = weekCurr[j];

	  				for (l=0; l < dayCurr.length; l++) {

	  					daySums[i].push(dayCurr[l]);

	  				}
	  				
	  			}

	  		}

	  		var dayArr = [];
	  		var daySumsCurr = [];
	  		var dayArrCurr = [];
	  		var dayArrSave = [];

	  		j = 0;

	  		for (i=0; (i < daySums.length); i++) {

	  			if (dayArr[i] === undefined) {

	  				dayArr[i] = [];

	  			}

	  			daySumsCurr = daySums[i];


	  			for (l=0; l < daySumsCurr.length; l++) {

	  				if ((l + 1) % 7 === 0) {

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

	  		outerRing(-1, 5.5, [0,105, 0], weekCommits, dayArr, 0);
			middleRing(0, 50, [0,105, 0], [1,1,1,1,1,1,1]);
			innerRing(commitOwnerTotal, colorObj[0], 0);

	  		
	  		
	  	});
		

});
