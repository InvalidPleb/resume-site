(function(){

	'use strict';

	angular
	    .module('resumeApp')
	    .controller('GraphCtrl', GraphCtrl);

	GraphCtrl.$inject = ['$http', '$q', '$scope', 'maths', 'dataParse'];

	function GraphCtrl($http, $q, $scope, maths, dataParse) {

		// Capturing 'this' with vm
		var vm = this;

		// -------- Github AJAX -------- //
	  	vm.repoContainer = [];
	  	vm.commitDaily = {};

	  	vm.pushCalledRepo = function(res, repo) {
	  		for (let i = 0; i < res.length; i++) {
	  			repo.push(res[i].full_name);
	  		}
	  		return repo;
	  	}
	  	
	  	vm.getCommits = function(repo, repoNum, maxRepos) {
	  		return $http.get('https://api.github.com' + '/repos/' + repo + '/stats/commit_activity')
	  			.then(function(res){
	  				vm.commitDaily[repoNum] = res.data;
		  			repoNum++;
		  			if (repoNum < maxRepos) {
		  				return vm.getCommits(vm.repoContainer[repoNum], repoNum, maxRepos);
		  			}
		  		});
	  	}

	  	vm.getGithubStuff = function() {
	  		return $http.get('https://api.github.com' + '/users/InvalidPleb/repos')
		  		.then(function(res){
		  			vm.pushCalledRepo(res.data, vm.repoContainer);
		  			return vm.getCommits(vm.repoContainer[0], 0, vm.repoContainer.length);
		  		});
	  	}

	  	

	  	// -------- AJAX Callback -------- //

	  	/*
	  	

		var calls = vm.getGithubStuff();
	  	$q.all([calls]).then(function(){

	  		$scope.loading = false;
	  		
	  		var gotDayCommits = dataParse.getDayCommits(vm.commitDaily),
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


			var dayRing;

			$('.line-title:nth-child(2)').mouseover(function(){
				$('.line:nth-child(2)').stop().animate({borderColor:"#3ECF84"},"fast");
				let dayRingInd = gotParsedCommits[1];
				dayRing = vm.middleRing(0, 50, vm.colorObj[9], dayRingInd[49]);
				for (let j = 0; j < dayRing.length; j++) {
					dayRing[j].transition().duration(200).style("opacity", 0.9);
				}
			}).mouseout(function(){
				$('.line:nth-child(2)').stop().animate({borderColor:"#9E8E4C"},"fast");
				for (let j = 0; j < dayRing.length; j++) {
					dayRing[j].transition()		
					.duration(200)		
					.style("opacity", 0.1)
					.remove();
				}
			});

			vm.outerRing(-1, 5.5, [0,105, 0], gotParsedCommits[0], gotParsedCommits[1], 0);
			vm.middleRing(0, 50, [0,105, 0], [1,1,1,1,1,1,1]);
			vm.innerRing(repoCommits, vm.repoContainer, vm.colorObj[0], 0);


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
	  	});

*/




		// -------------- Github Graph -------------- //

	  	// Setting up D3

	  	vm.svgContainer = d3.select(".animation-container")
	  		.append("svg")
	  		.attr("class", "svg-container")
			.attr("width", 400)
			.attr("height", 500);

		vm.pie = d3.layout.pie()
			.value(function(d) {
				return d;
		});

		vm.defCenterTooltip = d3.select(".animation-container").append("div")	
					.attr("class", "pie-tooltip");

	    vm.graphCircle = d3.select(".animation-container").append("div")	
					.attr("class", "graph-circle");

		vm.arc = function(inRad, outRad, sAng, eAng) {
			return d3.svg.arc()
				.innerRadius(inRad)
			    .outerRadius(outRad)
			    .startAngle(sAng)
			    .endAngle(eAng);
		}

	    // Obj containing RGB colors used in graph
		vm.colorObj = {
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
		vm.outerRing = function(sAng, eAng, color, data, dayData, i) {

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
				    g = vm.svgContainer.append('svg:g');

				// Drawing the pie segment
				let week = g.append("path")
				    .attr("d", vm.arc(170, 200, (sAng * Math.PI / 180), (eAng * Math.PI / 180)))
				    .attr("transform", "translate(200,250)")
				    .style("fill", "rgba(" + color1 + "," + color2 + "," + color3 + "," + alpha + ")")
				    .style("cursor", "pointer")

				    .on("mouseover", function () {
					    d3.select(this).style("fill", "rgb(89, 74, 41)");
					    $(".pie-tooltip-hover:nth-child(" + i + ")").css("opacity", "1");

					    // Drawing the day rings
	            		dayRing = vm.middleRing(0, 50, color, dayDataInd);

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


				if (i === 49) {

					$('.line-title:nth-child(1)').mouseover(function(){
						$('.line:nth-child(1)').stop().animate({borderColor:"#3ECF84"},"fast");
						$('.graph-circle').stop().animate({borderColor:"#3ECF84"},"fast");
						week.style("fill", "rgba(62,207,132, 1)").style("transition", "all .25s cubic-bezier(.17,.67,.83,.67)");
					}).mouseout(function(){
						$('.line:nth-child(1)').stop().animate({borderColor:"#9E8E4C"},"fast");
						$('.graph-circle').stop().animate({borderColor:"#9E8E4C"},"fast");
						week.style("fill", "rgba(" + color1 + "," + color2 + "," + color3 + "," + alpha + ")").style("transition", "all .25s cubic-bezier(.17,.67,.83,.67)");
					});
				}

				i++;
				return vm.outerRing(sAng, eAng, color, data, dayData, i);
			}
		}


		// Recursive function to draw the day rings
		vm.middleRing = function(sAng, eAng, color, data) {

			let ringCont = [];
			for (let i = 0; i <= 6; i++) {

				sAng = sAng + 50;
				eAng = eAng + 50;

				// Increasing shade and opacity of color relative to input data
				let color1 = color[0] + (data[i] * 50),
				    color2 = color[1] + (data[i] * 50),
				    color3 = color[2] + (data[i] * 50),
				    alpha = (data[i] * 0.2) + 0.05;

				// Drawing the day ring segment
				let ring = vm.svgContainer.append("path")
				    .attr("d", vm.arc(145, 165, (sAng * Math.PI / 180), (eAng * Math.PI / 180)))
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
		vm.innerRing = function(data, nameArr, color, i){

			if (i < data.length) {

				let repoName = nameArr[i].slice(12,nameArr[i].length),
				    pieD = vm.pie(data),
				    sAng = pieD[i].startAngle,
				    eAng = pieD[i].endAngle,
				    alpha = 0.6;

				// Drawing the pie segment
				var pieCurve = vm.svgContainer.append("path")
				    .attr("d", vm.arc(80, 140, sAng, eAng))
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

				if (i === 1) {

					$('.line-title:nth-child(3)').mouseover(function(){
						$('.line:nth-child(3)').stop().animate({borderColor:"#3ECF84"},"fast");
						pieCurve.style("fill", "rgba(62,207,132, 1)").style("transition", "all .25s cubic-bezier(.17,.67,.83,.67)");
					}).mouseout(function(){
						$('.line:nth-child(3)').stop().animate({borderColor:"#9E8E4C"},"fast");
						pieCurve.style("fill", "rgba(" + color + "," + alpha + ")").style("transition", "all .25s cubic-bezier(.17,.67,.83,.67)");
					});


				}

				i++;
				return vm.innerRing(data, vm.repoContainer, vm.colorObj[i], i);
			}
		}

	} 
})();
