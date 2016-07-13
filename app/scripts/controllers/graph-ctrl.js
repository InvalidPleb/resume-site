'use strict';

angular
    .module('resumeApp')
    .controller('GraphCtrl', GraphCtrl);

GraphCtrl.$inject = ['$http', '$q', '$scope', 'maths', 'dataParse'];

function GraphCtrl($http, $q, $scope, maths, dataParse) {

	// -------- Github AJAX -------- //
  	var repoContainer = [];
  	var commitDaily = {};

  	console.log()

  	function pushCalledRepo(res, repo) {
  		for (let i = 0; i < res.length; i++) {
  			repo.push(res[i].full_name);
  		}
  		return repo;
  	}
  	
  	function getCommits(repo, repoNum, maxRepos) {
  		return $http.get('https://api.github.com' + '/repos/' + repo + '/stats/commit_activity')
  			.then(function(res){
  				commitDaily[repoNum] = res.data;
	  			repoNum++;
	  			if (repoNum < maxRepos) {
	  				return getCommits(repoContainer[repoNum], repoNum, maxRepos);
	  			}
	  		});
  	}

  	function getGithubStuff() {
  		return $http.get('https://api.github.com' + '/users/InvalidPleb/repos')
	  		.then(function(res){
	  			pushCalledRepo(res.data, repoContainer);
	  			return getCommits(repoContainer[0], 0, repoContainer.length);
	  		});
  	}

  	$scope.loading = false;

  	// -------- AJAX Callback -------- //

  	/*

	var calls = getGithubStuff();
  	$q.all([calls]).then(function(){

  		console.log("yo");
  		
  		var gotDayCommits = dataParse.getDayCommits(commitDaily),
  		    repoCommits = gotDayCommits[0],
  		    dayCommits = gotDayCommits[1];
  		
  		repoCommits.push(1);
  		repoCommits.unshift(3);

  		var daySums = dataParse.sumDayCommits(dayCommits),
  		    gotParsedCommits = dataParse.parseCommits(daySums),
  		    allWeekCommits = gotParsedCommits[0],
  		    allDayCommits = gotParsedCommits[1],
  		    streakArr = dataParse.streakData(allDayCommits),
  		    gotStreaks = dataParse.getStreaks(streakArr);

  		$scope.months = maths.setArr($scope.months, 12);
		$scope.weeks = maths.setArr($scope.weeks, 52);
		$scope.days = maths.setArr($scope.days, 7);
		$scope.repos = maths.setArr($scope.repos, 6);
		$scope.dayNames = ["S", "M", "T", "W", "T", "F", "S",];


			// This object contains the data for the Github graph
  		$scope.dataObj = {

  			commits: {

  				days: allDayCommits,
  				weeks: allWeekCommits,
  				thisWeek: allWeekCommits[51],
  				thisYear: allWeekCommits.reduce(maths.add, 0),
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

*/


	// -------------- Github Graph -------------- //


  	// Setting up D3

  	var svgContainer = d3.select(".animation-container")
  		.append("svg")
  		.attr("class", "svg-container")
		.attr("width", 400)
		.attr("height", 500);

	var pie = d3.layout.pie()
		.value(function(d) {
			return d;
	});

	var defCenterTooltip = d3.select(".animation-container").append("div")	
				.attr("class", "pie-tooltip");

    var graphCircle = d3.select(".animation-container").append("div")	
				.attr("class", "graph-circle");

	function arc(inRad, outRad, sAng, eAng) {
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
	function outerRing(sAng, eAng, color, data, dayData, i) {

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
			let color1 = color[0] + (data[i] * 13),
			    color2 = color[1] + (data[i] * 13),
			    color3 = color[2] + (data[i] * 13),
			    alpha = (data[i] * 0.1) + 0.05,
			    dayRing,
			    dayDataInd = dayData[i],
			    g = svgContainer.append('svg:g');

			// Drawing the pie segment
			g.append("path")
			    .attr("d", arc(170, 200, (sAng * Math.PI / 180), (eAng * Math.PI / 180)))
			    .attr("transform", "translate(200,250)")
			    .style("fill", "rgba(" + color1 + "," + color2 + "," + color3 + "," + alpha + ")")
			    .on("mouseover", function () {
				    d3.select(this).style("fill", "rgb(89, 74, 41)");
				    $(".pie-tooltip-hover:nth-child(" + i + ")").css("opacity", "1");

				    // Drawing the day rings
            		dayRing = middleRing(0, 50, colorObj[9], dayDataInd);

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
			return outerRing(sAng, eAng, colorObj[9], data, dayData, i);
		}
	}


	// Recursive function to draw the day rings
	function middleRing(sAng, eAng, colorObj, data) {

		let ringCont = [];
		for (let i = 0; i <= 6; i++) {

			sAng = sAng + 50;
			eAng = eAng + 50;

			// Increasing shade and opacity of color relative to input data
			let color1 = colorObj[0] + (data[i] * 50),
			    color2 = colorObj[1] + (data[i] * 50),
			    color3 = colorObj[2] + (data[i] * 50),
			    alpha = (data[i] * 0.2) + 0.05;

			// Drawing the day ring segment
			let ring = svgContainer.append("path")
			    .attr("d", arc(145, 165, (sAng * Math.PI / 180), (eAng * Math.PI / 180)))
			    .attr("transform", "translate(200,250)")
			    .style("fill", "rgba(" + color1 + "," + color2 + "," + color3 + "," + alpha + ")")
				.style("opacity", 0.3);

			sAng = sAng + 1.5;
			eAng = eAng + 1.5;
			ringCont.push(ring);
		}
		return ringCont;
	}

	
	// Recursive function to draw the inner pie chart
	function innerRing(data, nameArr, color, i){

		if (i < data.length) {

			let repoName = nameArr[i].slice(12,nameArr[i].length),
			    pieD = pie(data),
			    sAng = pieD[i].startAngle,
			    eAng = pieD[i].endAngle,
			    alpha = 0.6;

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
					maths.openLink("https://github.com/InvalidPleb/" + repoName);
				});
			i++;
			return innerRing(data, repoContainer, colorObj[i], i);
		}
	}

} 
 
