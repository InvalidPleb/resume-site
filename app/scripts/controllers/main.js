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

	  	var i, j;

	  	function add(a, b) {
	      	return a + b;
	  	}

	  	var githubGet = 'https://api.github.com';
	  	var commitContainer = [];
	  	var repoContainer = [];
	  	var commitTotal = 0;
	  	var commitOwnerTotal = [];

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
		  			return getOwnerCommits(repoContainer[0], -1, repoContainer.length);
		  		});
		  		
			
	  	}

	  	function getOwnerCommits (repo, repoNum, maxRepos) {
	  		return $http.get(githubGet + '/repos/' + repo + '/stats/participation')
	  			.then(function(res){
	  				commitOwnerTotal.push(res.data.owner.reduce(add, 0));
	  				repoNum++;
	  				if (repoNum < maxRepos) {
	  					return getOwnerCommits(repoContainer[repoNum], repoNum, maxRepos);
	  				}
	  			});
	  	}
	  	
	  	function getCommits (repo, repoNum, maxRepos) {
	  		return $http.get(githubGet +'/repos/' + repo + '/stats/commit_activity')
	  			.then(function(res){
		  			pushCalledCommits(res.data, commitContainer);		
		  			commitTotal = commitContainer.reduce(add, 0);
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

	  	//var calls = getGithubStuff();
	  	
	  	//$q.all([calls]).then(function(){
	  		//console.log(commitOwnerTotal);
	  		
	  		//console.log(pie(commitOwnerTotal));

	  		
	  	//});

	  	var svgContainer = d3.select(".animation-container").append("svg")
				.attr("width", 700)
				.attr("height", 500)
				.style("position", "relative")
				.style("left", "50px");

		function arc (inRad, outRad, sAng, eAng) {

			return d3.svg.arc()
				.innerRadius(inRad)
			    .outerRadius(outRad)
			    .startAngle(sAng)
			    .endAngle(eAng);

		}

		var weekArr = [
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			1,
			3,
			6,
			7,
			6,
			10,
			12,
			7,
			6,
			8,
			9,
			5,
			13,
			7,
			6,
			8,
			7,
			7,
			6,
			10,
			12,
			11,
			7,
			6,
			7,
			7,
			10,
			11, 
			7, 
			7
		];

		

		function outerRing (sAng, eAng, color, i) {

			if (sAng === -1 && eAng === 5.5) {

				sAng++;
				eAng++;

			} else {

				sAng = sAng + 6.42;
				eAng = eAng + 6.42;
			}

			var color1 = color[0] + (weekArr[i] * 12);
			var color2 = color[1] + (weekArr[i] * 12);
			var color3 = color[2] + (weekArr[i] * 12);
			var alpha = (weekArr[i] * 0.1) + 0.05;
			var dayRing;

			i++;

			if (i <= 52) {

				var g = svgContainer.append('svg:g');

				g.append("path")
				    .attr("d", arc(170, 200, (sAng * Math.PI / 180), (eAng * Math.PI / 180)))
				    .attr("transform", "translate(450,250)")
				    .style("fill", "rgba(" + color1 + "," + color2 + "," + color3 + "," + alpha + ")")
				    .style("position", "relative")
				    .style("z-index", "2")
				    .on("mouseover", function (d) {
					    d3.select(this).style("fill", "white");
					    div.style("left", ((d3.select(this).attr("cx") + 424) + "px"))
	            			.style("top", ((d3.select(this).attr("cy") + 174) + "px"));
					    div.transition()		
	            			.duration(50)		
	            			.style("opacity", 0.9);
	            		
	            		dayRing = middleRing(0, 50, colorArr, dayCommits, 0);

	            		for (i = 0; i < dayRing.length; i++) {
	            			dayRing[i].transition()		
	            			.duration(200)		
	            			.style("opacity", 0.9);
	            		}
	   
					})
					.on("mouseout", function (d) {
					    d3.select(this).style("fill", "rgba(" + color1 + "," + color2 + "," + color3 + "," + alpha + ")");
					    div.transition()		
	            			.duration(50)		
	            			.style("opacity", 0);
	            		for (i = 0; i < dayRing.length; i++) {
	            			dayRing[i].transition()		
	            			.duration(200)		
	            			.style("opacity", 0.1);
	            			dayRing[i].remove();
	            		}	
				});

				var div = d3.select(".animation-container").append("div")	
					.attr("class", "tooltip")
					.style('position','absolute')
					.text("Week:")		
					.style("opacity", 0);

				sAng = sAng + 0.5;
				eAng = eAng + 0.5;

				return outerRing(sAng, eAng, colorArr, i);
			}
		}

		var pie = d3.layout.pie()
			.value(function (d) {
				return d;
			});
		

		var dataArr = [3, 5, 152, 87, 4, 3];

		var colorObj = {
			0: [38, 53, 138],
			1: [141, 165, 165],
			2: [70, 100, 125],
			3: [71, 71, 97],
			4: [19, 163, 153],
			5: [10, 144, 67],
			6: [47, 177, 122],
			7: [149, 199, 111],
			8: [184, 209, 58],
			9: [27, 100, 29],
		};


		function innerRing (data, color, i){

			if (i < data.length) {

				var pieD = pie(data);
				var sAng = pieD[i].startAngle;
				var eAng = pieD[i].endAngle;

				var alpha = 0.5;

				svgContainer.append("path")
				    .attr("d", arc(80, 140, sAng, eAng))
				    .attr("transform", "translate(450,250)")
				    .style("fill", "rgba(" + color + "," + alpha + ")")
				    .style("position", "relative")
				    .style("z-index", "2")
				    .style("box-shadow", "0px 0px 9px 1px rgba(0,0,0,0.85)")
				    .on("mouseover", function (d) {
					    d3.select(this).style("fill", "rgba(" + color + "," + (alpha + 0.5) + ")");
					}).on("mouseout", function (d) {
					    d3.select(this).style("fill", "rgba(" + color + "," + alpha + ")");
					});

				i++;

				return innerRing(dataArr, colorObj[i], i);

			}

			//sAng = sAng + padding1;
			//eAng = eAng + padding2;

		}

		var colorArr = [0,105, 0];
		var dayCommits = [1, 1, 2, 5, 1, 3, 1];

		function middleRing(sAng, eAng, color, data) {

			var ring;
			var ringCont = [];

			for (i = 0; i <= 6; i++) {

				sAng = sAng + 50;
				eAng = eAng + 50;
				
				var color1 = color[0] + (data[i] * 30);
				var color2 = color[1] + (data[i] * 30);
				var color3 = color[2] + (data[i] * 30);
				var alpha = (data[i] * 0.1) + 0.05;

				ring = svgContainer.append("path")
				    .attr("d", arc(145, 165, (sAng * Math.PI / 180), (eAng * Math.PI / 180)))
				    .attr("transform", "translate(450,250)")
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

		
		outerRing(-1, 5.5, colorArr, 0);
		middleRing(0, 50, colorArr, [1,1,1,1,1,1,1], 0);

		innerRing(dataArr, colorObj[0], 0);

});
