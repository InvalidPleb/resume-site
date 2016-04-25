'use strict';

/**
 * @ngdoc function
 * @name resumeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the resumeApp
 */
angular.module('resumeApp')
	.factory('getNames', function ($http, $q) {
		var defer = $q.defer();
	    return {
	    	get: function (call) {
				$http.get(call)
					.success(function(res) {
						defer.resolve(res);
					})
					.error(function(err, status) {
						defer.reject(err);
					});

				return defer.promise;
	  		}
	    };
	})
  	.controller('MainCtrl', function ($http, $q, $scope, getNames) {

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
		  			console.log(res);
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
	  	/*
	  	$q.all([calls]).then(function(){
	  		console.log(commitOwnerTotal);
	  	});

		*/

		//Make an SVG Container
		
		/*Draw the Circle
		var circle = svgContainer.append("rect")
			.attr("x", 200)
			.attr("y", 30)
			.attr("width", 300)
			.attr("height", 300);

		

		var lineData = [
			{x: 0, y: 0},
			{x: 100, y: 200},
			{x: 200, y: 300},
			{x: 300, y: 350},
		];

		var line = d3.svg.line()
			.x(function(d) {return d.x; })
			.y(function(d) {return d.y; });

		var group = svgContainer.append("g")
		.attr("transform", "translate(100, 100)");

		group.selectAll("path")
			.data([lineData])
			.enter()
			.append("path")
			.attr("d", line)
			.attr("stroke", "#000")
			.attr("stroke-width", 10);
		*/

		var svgContainer = d3.select(".animation-container").append("svg")
			.attr("width", 700)
			.attr("height", 500);

		function arc (inRad, outRad, sAng, eAng) {

			return d3.svg.arc()
				.innerRadius(inRad)
			    .outerRadius(outRad)
			    .startAngle(sAng * (Math.PI/180))
			    .endAngle(eAng * (Math.PI/180));

		}

		var counter = 0;
		var sAngle = -1;
		var eAngle = 4;

		function outerRing () {

			if (sAngle === -1 && eAngle === 4) {

				sAngle++;
				eAngle++;

			} else {

				sAngle = sAngle + 5;
				eAngle = eAngle + 5;
		
			}

			counter++;

			if (counter < 52) {

				svgContainer.append("path")
				    .attr("d", arc(140, 160, sAngle, eAngle))
				    .attr("transform", "translate(200,200)")
				    .style("fill", "grey")
				    .on("mouseover", mouse()).on("mouseout", function (d) {
					    d3.select(this).style("fill", "black");
					});


				sAngle = sAngle + 2.05;
				eAngle = eAngle + 2.05;

				return outerRing();

			}
		}

		function mouse (){
			console.log("yo");

		}



		outerRing();

	  	/*

	  	

	  	githubInfo(githubGet + reposGet).then(function(res){

	  		var fullNames = [];

	  		for (i = 0; i < res.length; i++) {
	  			fullNames.push(res[i].full_name);

	  		}

	  		return githubInfo(githubGet + '/repos/' + fullNames[0] + '/stats/commit_activity');


	  	}).then(function(res){

	  	}).catch(function(err){

	  	});

	  	githubInfo(githubGet + runCalcCommitGet).then(function(res){
	  		console.log(loopCommits(res, commitContainer));

	  	}).catch(function(err){
	  		console.log("nop");

	  	});



	  	/*

	  	var commits;

	  	var promise = $http.get('https://api.github.com/repos/InvalidPleb/Runner-Calculator/stats/commit_activity');
	  	promise.then(function(payload) {
	  		return payload.data;
	  	});

	  	/*

	  	function(a,u){
	        u.getUser().then(function(user){
	            a.user = user;
	            console.log(a.user);
	        });
	    }
	    */

	  	//console.log(commits);
});
